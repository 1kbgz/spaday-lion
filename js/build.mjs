import { bundle } from "./tools/bundle.mjs";
import { node_modules_external } from "./tools/externals.mjs";
import { vendor } from "./tools/vendor.mjs";

import fs from "fs";
import cpy from "cpy";

// The library served under its own bare specifiers (see tools/vendor.mjs).
const VENDORED = ["@lion/ui"];

const VERSION = JSON.parse(
  fs.readFileSync("node_modules/@lion/ui/package.json", "utf8"),
).version;

// Every element's define module, `@lion/ui/define/<tag>.js`, behind the define-guard. The guard is
// a module of its own, imported first: every import evaluates before the importing module's body,
// so an inlined guard would install too late. The specifiers stay imports, resolved by the page's
// import map.
const DEFINE = "node_modules/@lion/ui/exports/define";
const defines = fs
  .readdirSync(DEFINE)
  .filter((file) => file.endsWith(".js"))
  .map((file) => `import "@lion/ui/define/${file}";`)
  .join("\n");
const ENTRY = {
  contents: [
    'import { restoreDefine } from "./define-guard.js";',
    defines,
    "restoreDefine();",
    // the version actually served, so a page holding a second copy can compare and refuse rather
    // than half-work
    `Object.defineProperty(globalThis, "__spadayLion", { value: Object.freeze({ version: ${JSON.stringify(VERSION)} }), configurable: true });`,
  ].join("\n"),
  resolveDir: "src/ts",
  loader: "js",
};

const keepImports = {
  name: "keep-imports",
  setup(build) {
    build.onResolve({ filter: /^(@lion\/|\.\/define-guard\.js$)/ }, (args) => ({
      path: args.path,
      external: true,
    }));
  },
};

const BUNDLES = [
  {
    stdin: ENTRY,
    plugins: [node_modules_external()],
    outfile: "dist/esm/index.js",
  },
  {
    entryPoints: ["src/ts/define-guard.ts"],
    outfile: "dist/cdn/define-guard.js",
  },
  {
    stdin: ENTRY,
    plugins: [keepImports],
    outfile: "dist/cdn/index.js",
  },
];

async function build() {
  fs.rmSync("dist", { recursive: true, force: true });
  fs.rmSync("../spaday_lion/extension", {
    recursive: true,
    force: true,
  });

  await Promise.all(BUNDLES.map(bundle)).catch(() => process.exit(1));

  // the import map, relative to the served root: read by the Python package, and inlined into the
  // test page with URLs relative to it
  const imports = Object.fromEntries(
    Object.entries(await vendor(VENDORED, "dist/vendor")).map(
      ([specifier, file]) => [specifier, `vendor/${file}`],
    ),
  );
  fs.writeFileSync(
    "dist/vendor/imports.json",
    `${JSON.stringify(imports, null, 2)}\n`,
  );
  const map = JSON.stringify(
    {
      imports: Object.fromEntries(
        Object.entries(imports).map(([k, v]) => [k, `./${v}`]),
      ),
    },
    null,
    2,
  );
  const html = fs
    .readFileSync("src/html/index.html", "utf8")
    .replace(
      "<!-- importmap -->",
      `<script type="importmap">\n${map}\n    </script>`,
    );
  fs.writeFileSync("dist/index.html", html);

  // Copy servable assets to python extension (exclude esm/)
  fs.mkdirSync("../spaday_lion/extension", { recursive: true });
  await cpy("dist/**/*", "../spaday_lion/extension", {
    filter: (file) =>
      !file.relativePath.startsWith("esm/") &&
      !file.relativePath.startsWith("dist/esm/"),
  });
}

await build();
