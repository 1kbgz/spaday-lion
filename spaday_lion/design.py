"""How Lion renders spaday's generic controls (:mod:`spaday.ui`)."""

from spaday.ui import ControlSpec, Design, Open, Options, Part, Value, Wrap

_FIELD = {"disabled": "disabled", "required": None, "readonly": "readonly", "name": "name", "size": None}
_WRAP = Wrap(tag="div", props={"class": "ui-field"})
_LABEL = Part(kind="attr", name="label")
_HELP = Part(kind="attr", name="help-text")
_ERROR = Part(kind="sibling", tag="small", props={"role": "alert"}, after=True)
_INVALID = {"aria-invalid": "true"}
_TEXT_VALUE = Value(prop="serializedValue", event="model-value-changed")
_NUMBER_VALUE = Value(prop="serializedValue", event="model-value-changed", codec="number")
_CHOICE_VALUE = Value(prop="serializedValue", event="model-value-changed", codec="json")

DESIGN = Design(
    name="lion",
    controls={
        "button": ControlSpec(
            tag="lion-button",
            label=Part(kind="text"),
            props={"intent": None, "appearance": None, "size": None, "disabled": "disabled", "name": None},
        ),
        "input": ControlSpec(
            tag="lion-input",
            wrap=_WRAP,
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid=_INVALID,
            props={**_FIELD, "placeholder": "placeholder", "type": "type"},
            value=_TEXT_VALUE,
        ),
        "textarea": ControlSpec(
            tag="lion-textarea",
            wrap=_WRAP,
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid=_INVALID,
            props={**_FIELD, "placeholder": "placeholder", "rows": "rows", "minlength": None, "maxlength": None},
            value=_TEXT_VALUE,
        ),
        "number-input": ControlSpec(
            tag="lion-input-stepper",
            wrap=_WRAP,
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid=_INVALID,
            props={**_FIELD, "placeholder": "placeholder", "min": "min", "max": "max", "step": "step"},
            value=_NUMBER_VALUE,
        ),
        "date-input": ControlSpec(
            tag="lion-input-date",
            wrap=_WRAP,
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid=_INVALID,
            props={**_FIELD, "min": None, "max": None},
            value=_TEXT_VALUE,
        ),
        "checkbox": ControlSpec(
            tag="lion-checkbox",
            wrap=_WRAP,
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid=_INVALID,
            props={**_FIELD},
            value=Value(prop="checked", event="model-value-changed"),
        ),
        "switch": ControlSpec(
            tag="lion-switch",
            wrap=_WRAP,
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid=_INVALID,
            props={**_FIELD},
            value=Value(prop="checked", event="model-value-changed"),
        ),
        "select": ControlSpec(
            tag="lion-select-rich",
            wrap=_WRAP,
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid=_INVALID,
            props={**_FIELD, "placeholder": None},
            options=Options(kind="children", tag="lion-option", value="choiceValue", label="label", selected="checked"),
            value=_CHOICE_VALUE,
        ),
        "radio-group": ControlSpec(
            tag="lion-radio-group",
            wrap=_WRAP,
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid=_INVALID,
            props={**_FIELD},
            options=Options(kind="children", tag="lion-radio", value="choiceValue", label="label", selected="checked"),
            value=_CHOICE_VALUE,
        ),
        "slider": ControlSpec(
            tag="lion-input-range",
            wrap=_WRAP,
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid=_INVALID,
            props={**_FIELD, "min": "min", "max": "max", "step": "step"},
            value=_NUMBER_VALUE,
        ),
        "progress": ControlSpec(
            tag="lion-progress-indicator",
            label=Part(kind="attr", name="aria-label"),
            props={"max": "max"},
        ),
        "dialog": ControlSpec(
            tag="lion-dialog",
            label=Part(kind="child", tag="h2"),
            open=Open(prop="opened", event="opened-changed"),
        ),
    },
)

__all__ = ["DESIGN"]
