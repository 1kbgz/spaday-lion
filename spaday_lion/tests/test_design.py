import json

import pytest
from spaday import Dialog, NumberInput, RadioGroup, Select, Slider, TextInput, validate
from spaday.ui import conformance, resolve
from spaday.ui.design import _plain

from spaday_lion import DESIGN, package


def _props(node: dict) -> dict:
    return {key: _plain(value) for key, value in node.get("props", {}).items()}


def _find(node: dict, tag: str) -> dict:
    if node["tag"] == tag:
        return node
    for children in node.get("slots", {}).values():
        for child in children:
            if isinstance(child, dict):
                try:
                    return _find(child, tag)
                except LookupError:
                    pass
    raise LookupError(tag)


def test_find_walks_all_slots_and_reports_missing_tags():
    tree = {"tag": "root", "slots": {"first": ["text", {"tag": "other"}], "second": [{"tag": "target"}]}}
    assert _find(tree, "target")["tag"] == "target"
    with pytest.raises(LookupError):
        _find(tree, "missing")


def test_the_package_publishes_its_design():
    assert package.design is DESIGN
    assert set(DESIGN.controls) == {
        "button",
        "checkbox",
        "date-input",
        "dialog",
        "input",
        "number-input",
        "progress",
        "radio-group",
        "select",
        "slider",
        "switch",
        "textarea",
    }


def test_lion_fields_use_serialized_value_and_native_change_event():
    text = resolve(TextInput(label="Name", help="Hint", error="Bad").bind("value", "name", mode="two-way").to_node(), DESIGN)
    control = _find(text, "lion-input")
    assert _props(control) == {"label": "Name", "help-text": "Hint", "aria-invalid": "true"}
    assert control["bindings"] == {"serializedValue": {"field": "name", "mode": "two-way", "event": "model-value-changed"}}
    assert _props(text["slots"]["default"][-1]) == {"role": "alert", "textContent": "Bad"}

    number = _find(
        resolve(NumberInput(label="Count", min=0, max=10, step=1).bind("value", "count", mode="two-way").to_node(), DESIGN),
        "lion-input-stepper",
    )
    assert _props(number) == {"label": "Count", "min": 0, "max": 10, "step": 1}
    assert number["bindings"]["serializedValue"] == {
        "field": "count",
        "mode": "two-way",
        "event": "model-value-changed",
        "codec": "number",
    }


def test_lion_choices_and_slider_preserve_typed_values():
    select = _find(resolve(Select(label="Plan", options=["a", {"value": 2, "label": "Two"}], value=2).to_node(), DESIGN), "lion-select-rich")
    assert [(option["tag"], _props(option)) for option in select["slots"]["default"]] == [
        ("lion-option", {"choiceValue": '"a"', "label": "a"}),
        ("lion-option", {"choiceValue": "2", "label": "Two", "checked": True}),
    ]

    radios = _find(
        resolve(RadioGroup(label="Priority", options=[1, {"value": 2, "label": "High"}], value=1).to_node(), DESIGN),
        "lion-radio-group",
    )
    assert radios["slots"]["default"][0]["tag"] == "lion-radio"
    assert _props(radios["slots"]["default"][0]) == {"choiceValue": "1", "label": "1", "checked": True}

    slider = _find(
        resolve(Slider(label="Volume", min=0, max=10, step=1).bind("value", "volume", mode="two-way").to_node(), DESIGN), "lion-input-range"
    )
    assert slider["bindings"]["serializedValue"]["codec"] == "number"


def test_lion_dialog_maps_opened_state():
    dialog = resolve(Dialog(label="Confirm").bind("open", "open", mode="two-way").to_node(), DESIGN)
    assert dialog["tag"] == "lion-dialog"
    assert _props(dialog["slots"]["default"][0]) == {"textContent": "Confirm"}
    assert dialog["bindings"] == {"opened": {"field": "open", "mode": "two-way", "event": "opened-changed"}}


def test_the_conformance_page_only_falls_back_for_alert():
    node = resolve(conformance.page().to_node(), DESIGN)
    validate(node)
    rendered = json.dumps(node)
    assert '"tag": "ui-' not in rendered
    assert rendered.count("data-ui-fallback") == 1
