import json
from pathlib import Path

from spaday import ComponentPackage

from . import components as _components
from .components import *
from .components import __all__ as _component_names

__version__ = "0.1.0"

_EXTENSION = Path(__file__).parent / "extension"
# Lion's modules under its own bare specifiers, written by the JS build (js/tools/vendor.mjs): a
# library on the page that imports Lion resolves to this copy instead of registering the same tags a
# second time
_IMPORTS = _EXTENSION / "vendor" / "imports.json"

package = ComponentPackage(
    name="lion",
    assets_dir=_EXTENSION,
    assets=(("js", "cdn/index.js"),),
    components=tuple(getattr(_components, name) for name in _component_names),
    imports=tuple(json.loads(_IMPORTS.read_text(encoding="utf-8")).items()) if _IMPORTS.exists() else (),
)

#: ``css()`` kwarg → (CSS custom property, what it controls), in the shape of
#: :data:`spaday.theme.SHELL_TOKENS`.
#:
#: Deliberately empty. Lion is a white-label library: its elements ship functional styles only, with
#: no theme and no design tokens, so there is nothing to map onto spaday's ``--spa-*`` palette. Style
#: them with ordinary CSS, reading the shell's tokens where they fit::
#:
#:     lion-button { background: var(--spa-accent); border: 1px solid var(--spa-border); }
TOKENS: dict[str, tuple[str, str]] = {}

__all__ = [*_component_names, "TOKENS", "package"]  # noqa: PLE0604
