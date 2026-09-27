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

#: Lion is white-label, but its form controls consume ``--disabled-text-color``. The adapter token
#: passes the shell's muted color to that hook without presenting a larger theme API Lion does not
#: implement.
TOKENS = {
    "spa_lion_disabled_text": Token("--spa-lion-disabled-text", "disabled Lion form-control text", fallback="--spa-muted"),
}

__all__ = [*_component_names, "DESIGN", "TOKENS", "package"]  # noqa: PLE0604
