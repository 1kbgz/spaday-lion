import ast
import re
from pathlib import Path

from spaday import Token, element, generate
from spaday.bootstrap import bootstrap

from spaday_lion import TOKENS, LionButton, LionDrawer, LionInput, LionTooltip, package

ROOT = Path(__file__).parent.parent


def test_generated_components_serialize():
    node = element("form").child(LionInput(label="Name", name="name"), LionButton().text("Save")).to_node()
    assert [child["tag"] for child in node["slots"]["default"]] == ["lion-input", "lion-button"]
    assert node["slots"]["default"][0]["props"]["label"] == {"Str": "Name"}


def test_catalog_is_the_elements_lion_registers():
    tags = {schema.tag for schema in package.catalog}
    assert {"lion-button", "lion-input", "lion-select-rich", "lion-input-range"} <= tags
    # the manifest's test fixtures and Storybook helpers are not Lion elements
    assert not {"choice-input-foo", "sb-action-logger", "lion-field-with-select"} & tags
    # exactly the elements the served define modules register
    defines = package.assets_dir / "vendor" / "@lion" / "ui" / "exports" / "define"
    assert tags == {path.stem for path in defines.glob("*.js")}


def test_inherited_attributes_reach_the_catalog():
    """Lion's manifest names its mixins by package specifier, so the collector resolves them."""
    assert {"label", "help-text", "name", "disabled"} <= {prop.name for prop in LionInput.schema.props}


def test_package_drives_bootstrap_asset_urls():
    html = bootstrap(packages=[package])
    assert 'href="/components/lion/css/index.css"' in html
    assert 'src="/components/lion/cdn/index.js"' in html
    assert '"@lion/ui/": "/components/lion/vendor/@lion/ui/exports/"' in html
    # the bundle's own imports resolve through the map, so it must come first
    assert html.index('type="importmap"') < html.index('src="/components/lion/cdn/index.js"')


def test_published_imports_are_served():
    assert package.imports, "the JS build writes the import map; run it first"
    for specifier, path in package.imports:
        target = package.assets_dir / path
        assert target.is_dir() if path.endswith("/") else target.is_file(), f"{specifier} maps to {path}, which the build did not produce"


def test_tokens_expose_lions_production_custom_properties():
    expected = {
        "disabled_text_color": ("--disabled-text-color", "--spa-muted"),
        "tooltip_arrow_width": ("--tooltip-arrow-width", None),
        "tooltip_arrow_height": ("--tooltip-arrow-height", None),
        "min_width": ("--min-width", None),
        "max_width": ("--max-width", None),
        "min_height": ("--min-height", None),
        "max_height": ("--max-height", None),
        "start_width": ("--start-width", None),
        "start_height": ("--start-height", None),
        "transition_property": ("--transition-property", None),
    }
    assert {name: (token.property, token.fallback) for name, token in TOKENS.items()} == expected
    assert all(isinstance(token, Token) for token in TOKENS.values())


def test_tokens_cover_every_custom_property_consumed_by_registered_lion_components():
    components = ROOT.parent / "js" / "node_modules" / "@lion" / "ui" / "components"
    assert components.is_dir(), "run `make develop-js` before the Python suite"
    consumed = set()
    for path in components.rglob("*.js"):
        relative = path.relative_to(components)
        if {"docs", "helpers", "test", "test-helpers"} & set(relative.parts):
            continue
        consumed.update(re.findall(r"var\((--[\w-]+)", path.read_text(encoding="utf-8")))
    assert {token.property for token in TOKENS.values()} == consumed


def test_token_kwargs_serialize_to_the_native_lion_properties():
    components = {
        "disabled_text_color": LionInput(),
        "tooltip_arrow_width": LionTooltip(),
        "tooltip_arrow_height": LionTooltip(),
        **{name: LionDrawer() for name in TOKENS if name not in {"disabled_text_color", "tooltip_arrow_width", "tooltip_arrow_height"}},
    }
    for name, component in components.items():
        assert component.css(**{name: "token-value"}).to_node()["props"]["style"] == {"Str": f"{TOKENS[name].property}: token-value"}


def test_generated_catalog_is_current():
    fresh = generate(str(ROOT / "custom-elements.json"))
    assert ast.dump(ast.parse(fresh)) == ast.dump(ast.parse((ROOT / "components.py").read_text(encoding="utf-8")))
