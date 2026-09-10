import ast
from pathlib import Path

from spaday import element, generate
from spaday.bootstrap import bootstrap

from spaday_lion import TOKENS, LionButton, LionInput, package

ROOT = Path(__file__).parent.parent
DEFINES = ROOT.parent / "js" / "node_modules" / "@lion" / "ui" / "exports" / "define"


def test_generated_components_serialize():
    node = element("form").child(LionInput(label="Name", name="name"), LionButton().text("Save")).to_node()
    assert [child["tag"] for child in node["slots"]["default"]] == ["lion-input", "lion-button"]
    assert node["slots"]["default"][0]["props"]["label"] == {"Str": "Name"}


def test_catalog_is_the_elements_lion_registers():
    tags = {schema.tag for schema in package.catalog}
    assert {"lion-button", "lion-input", "lion-select-rich", "lion-input-range"} <= tags
    # the manifest's test fixtures and Storybook helpers are not Lion elements
    assert not {"choice-input-foo", "sb-action-logger", "lion-field-with-select"} & tags
    if DEFINES.exists():  # the installed package, when the JS side has been set up
        assert tags == {path.stem for path in DEFINES.glob("*.js")}


def test_inherited_attributes_reach_the_catalog():
    """Lion's manifest names its mixins by package specifier, so the collector resolves them."""
    assert {"label", "help-text", "name", "disabled"} <= {prop.name for prop in LionInput.schema.props}


def test_package_drives_bootstrap_asset_urls():
    html = bootstrap(packages=[package])
    assert 'src="/components/lion/cdn/index.js"' in html
    assert '"@lion/ui/": "/components/lion/vendor/@lion/ui/exports/"' in html
    # the bundle's own imports resolve through the map, so it must come first
    assert html.index('type="importmap"') < html.index('src="/components/lion/cdn/index.js"')


def test_published_imports_are_served():
    assert package.imports, "the JS build writes the import map; run it first"
    for specifier, path in package.imports:
        target = package.assets_dir / path
        assert target.is_dir() if path.endswith("/") else target.is_file(), f"{specifier} maps to {path}, which the build did not produce"


def test_tokens_are_deliberately_empty():
    assert TOKENS == {}  # Lion is white-label: no theme, no design tokens to map


def test_generated_catalog_is_current():
    fresh = generate(str(ROOT / "custom-elements.json"))
    assert ast.dump(ast.parse(fresh)) == ast.dump(ast.parse((ROOT / "components.py").read_text(encoding="utf-8")))
