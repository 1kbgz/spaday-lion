import"../../../../../../chunks/chunk-GNR73WXY.js";import{b as i,d as l}from"../../../../../../chunks/chunk-TIEK7LWH.js";import{a as t,c}from"../../../../../../chunks/chunk-2FELQFK7.js";var o=class extends l{static get properties(){return{comboboxElement:Object,removeChipOnNextBackspace:Boolean,selectedChoices:Array}}static get styles(){return i`
      :host {
        display: flex;
      }

      .combobox__selection {
        flex: none;
      }

      .combobox__input {
        display: block;
      }

      .selection-chip {
        border-radius: 4px;
        background-color: #eee;
        padding: 4px;
        font-size: 10px;
      }

      .selection-chip--highlighted {
        background-color: #ccc;
      }

      * > ::slotted([slot='_textbox']) {
        outline: none;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid;
      }
    `}get _inputNode(){return this.comboboxElement._inputNode}get multipleChoice(){return this.comboboxElement?.multipleChoice}constructor(){super(),this.selectedChoices=[],this.__textboxOnKeyup=this.__textboxOnKeyup.bind(this),this.__restoreBackspace=this.__restoreBackspace.bind(this)}firstUpdated(e){super.firstUpdated(e),this.multipleChoice&&(this._inputNode.addEventListener("keyup",this.__textboxOnKeyup),this._inputNode.addEventListener("focusout",this.__restoreBackspace))}onComboboxElementUpdated(e){e.has("modelValue")&&(this.selectedChoices=this.comboboxElement.modelValue)}_selectedElementTemplate(e,s){return t`
      <span class="selection-chip ${s?"selection-chip--highlighted":""}">
        ${e}
      </span>
    `}_selectedElementsTemplate(){return this.multipleChoice?t`
      <div class="combobox__selection">
        ${this.selectedChoices.map((e,s)=>{let n=!!(this.removeChipOnNextBackspace&&s===this.selectedChoices.length-1);return this._selectedElementTemplate(e,n)})}
      </div>
    `:c}render(){return t` ${this._selectedElementsTemplate()} `}__textboxOnKeyup(e){e.key==="Backspace"?this._inputNode.value||(this.removeChipOnNextBackspace&&this.selectedChoices.length&&(this.comboboxElement.modelValue=this.selectedChoices.slice(0,-1)),this.removeChipOnNextBackspace=!0):this.removeChipOnNextBackspace=!1}__restoreBackspace(){this.removeChipOnNextBackspace=!1}};customElements.define("demo-selection-display",o);export{o as DemoSelectionDisplay};
