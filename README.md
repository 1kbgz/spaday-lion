# spaday-lion

Typed [Lion](https://lion.js.org) components and browser assets for spaday.

[![Build Status](https://github.com/1kbgz/spaday-lion/actions/workflows/build.yaml/badge.svg?branch=main&event=push)](https://github.com/1kbgz/spaday-lion/actions/workflows/build.yaml)
[![codecov](https://codecov.io/gh/1kbgz/spaday-lion/branch/main/graph/badge.svg)](https://codecov.io/gh/1kbgz/spaday-lion)
[![License](https://img.shields.io/github/license/1kbgz/spaday-lion)](https://github.com/1kbgz/spaday-lion)
[![PyPI](https://img.shields.io/pypi/v/spaday-lion.svg)](https://pypi.python.org/pypi/spaday-lion)

## Overview

```python
from spaday import SetField, element, serve
from spaday_lion import LionButton, LionInput

page = element("form").child(
    LionInput(label="Name", name="name"),
    LionButton().text("Approve").on("click", SetField("state", "approved")),
    element("output").bind("textContent", "state"),
)
serve(page, packages=["lion"], store={"state": "pending"})
```

Every element `@lion/ui` registers has a typed class generated from its Custom Elements Manifest,
including the attributes its form and localization mixins contribute, so props, events and slots are
checked when you author the tree. Installing the package does not inject assets; select it with
`packages=["lion"]` or pass the exported `package` descriptor.

## Run the local example

```bash
python -m pip install -e ".[examples]"
python -m spaday_lion.example
```

Open `http://127.0.0.1:8025` for the [account opening page](spaday_lion/example.py): a `lion-form` of
input, email, IBAN, amount, datepicker, rich select, combobox, radio and checkbox groups, range, stepper,
switch and text area whose `serializedValue` is posted to Python as one request and confirmed in a dialog,
two-way bindings driving a live preview, a review queue streamed from Python with approvals, tabs, an
accordion, a collapsible and a tooltip. Lion is white-label, so the page styles the elements from spaday's
palette, and its dark switch flips them with the shell.

## Theming

Lion is white-label: its elements ship functional styles only, with no theme and no design tokens,
so `TOKENS` is empty and there is nothing to map onto spaday's `--spa-*` palette. Style them with
ordinary CSS, reading the shell's tokens where they fit:

```css
lion-button { background: var(--spa-accent); border: 1px solid var(--spa-border); }
```

## Sharing Lion with your own library

Lion registers global custom element names, so a second copy on the page throws from
`customElements.define`. The package serves Lion's modules under their own bare specifiers —
`@lion/ui/button.js`, `@lion/ui/define/lion-button.js`, the translation modules and the rest of its
exports — through the page's import map. A library built on Lion that leaves those imports out of its
bundle (`external: ["@lion/ui"]` with esbuild) gets this copy, and nothing registers twice.

## Development

`make catalog` regenerates the typed classes from the installed Lion package: it collects its
manifest into `spaday_lion/custom-elements.json` (`js/tools/manifest.mjs`) and generates
`spaday_lion/components.py` from it. Lion's published manifest also carries test fixtures, Storybook
helpers and a few misnamed tags; the collector keeps exactly the elements Lion's define modules
register.

> [!NOTE]
> This library was generated using [copier](https://copier.readthedocs.io/en/stable/) from the [Base Python Project Template repository](https://github.com/python-project-templates/base).
