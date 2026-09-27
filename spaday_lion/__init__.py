import json
from pathlib import Path

from spaday import ComponentPackage, Token

from . import components as _components
from .components import *
from .components import __all__ as _component_names
from .design import DESIGN

__version__ = "0.2.0"

_EXTENSION = Path(__file__).parent / "extension"
# Lion's modules under its own bare specifiers, written by the JS build (js/tools/vendor.mjs): a
# library on the page that imports Lion resolves to this copy instead of registering the same tags a
# second time
_IMPORTS = _EXTENSION / "vendor" / "imports.json"

# the exact version of each JS library the package serves, written by its JS build
_VERSIONS = _EXTENSION / "versions.json"

package = ComponentPackage(
    name="lion",
    assets_dir=_EXTENSION,
    assets=(("css", "css/index.css"), ("js", "cdn/index.js")),
    components=tuple(getattr(_components, name) for name in _component_names),
    imports=tuple(json.loads(_IMPORTS.read_text(encoding="utf-8")).items()) if _IMPORTS.exists() else (),
    provides=json.loads(_VERSIONS.read_text(encoding="utf-8")) if _VERSIONS.exists() else {},
    design=DESIGN,
)

#: Every CSS custom property consumed by Lion's registered production components. Lion is
#: white-label, so only disabled text belongs to the shell palette; tooltip and drawer tokens expose
#: the layout controls provided by Lion itself.
TOKENS = {
    "disabled_text_color": Token("--disabled-text-color", "disabled form-control text", fallback="--spa-muted"),
    "tooltip_arrow_width": Token("--tooltip-arrow-width", "tooltip arrow width"),
    "tooltip_arrow_height": Token("--tooltip-arrow-height", "tooltip arrow height"),
    "min_width": Token("--min-width", "drawer minimum width"),
    "max_width": Token("--max-width", "drawer maximum width"),
    "min_height": Token("--min-height", "drawer minimum height"),
    "max_height": Token("--max-height", "drawer maximum height"),
    "start_width": Token("--start-width", "drawer initial width"),
    "start_height": Token("--start-height", "drawer initial height"),
    "transition_property": Token("--transition-property", "drawer animated dimension"),
}

__all__ = [*_component_names, "DESIGN", "TOKENS", "package"]  # noqa: PLE0604
