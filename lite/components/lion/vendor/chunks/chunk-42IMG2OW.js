import{a as u}from"./chunk-JI4JQMWL.js";import{j as p,o as i}from"./chunk-CHUHNXUY.js";import{c as n}from"./chunk-KVEQ5QLL.js";import{b as r}from"./chunk-TIEK7LWH.js";import{a as e}from"./chunk-2FELQFK7.js";var o=a=>{switch(a){case"bg-BG":return import("../@lion/ui/components/input-range/translations/bg-BG.js");case"bg":return import("../@lion/ui/components/input-range/translations/bg.js");case"cs-CZ":return import("../@lion/ui/components/input-range/translations/cs-CZ.js");case"cs":return import("../@lion/ui/components/input-range/translations/cs.js");case"de-DE":return import("../@lion/ui/components/input-range/translations/de-DE.js");case"de":return import("../@lion/ui/components/input-range/translations/de.js");case"en-AU":return import("../@lion/ui/components/input-range/translations/en-AU.js");case"en-GB":return import("../@lion/ui/components/input-range/translations/en-GB.js");case"en-US":return import("../@lion/ui/components/input-range/translations/en-US.js");case"en-PH":case"en":return import("../@lion/ui/components/input-range/translations/en.js");case"es-ES":return import("../@lion/ui/components/input-range/translations/es-ES.js");case"es":return import("../@lion/ui/components/input-range/translations/es.js");case"fr-FR":return import("../@lion/ui/components/input-range/translations/fr-FR.js");case"fr-BE":return import("../@lion/ui/components/input-range/translations/fr-BE.js");case"fr":return import("../@lion/ui/components/input-range/translations/fr.js");case"hu-HU":return import("../@lion/ui/components/input-range/translations/hu-HU.js");case"hu":return import("../@lion/ui/components/input-range/translations/hu.js");case"it-IT":return import("../@lion/ui/components/input-range/translations/it-IT.js");case"it":return import("../@lion/ui/components/input-range/translations/it.js");case"nl-BE":return import("../@lion/ui/components/input-range/translations/nl-BE.js");case"nl-NL":return import("../@lion/ui/components/input-range/translations/nl-NL.js");case"nl":return import("../@lion/ui/components/input-range/translations/nl.js");case"pl-PL":return import("../@lion/ui/components/input-range/translations/pl-PL.js");case"pl":return import("../@lion/ui/components/input-range/translations/pl.js");case"ro-RO":return import("../@lion/ui/components/input-range/translations/ro-RO.js");case"ro":return import("../@lion/ui/components/input-range/translations/ro.js");case"ru-RU":return import("../@lion/ui/components/input-range/translations/ru-RU.js");case"ru":return import("../@lion/ui/components/input-range/translations/ru.js");case"sk-SK":return import("../@lion/ui/components/input-range/translations/sk-SK.js");case"sk":return import("../@lion/ui/components/input-range/translations/sk.js");case"uk-UA":return import("../@lion/ui/components/input-range/translations/uk-UA.js");case"uk":return import("../@lion/ui/components/input-range/translations/uk.js");case"zh-CN":case"zh":return import("../@lion/ui/components/input-range/translations/zh.js");default:return import("../@lion/ui/components/input-range/translations/en.js")}};var s=class extends p(u){static get properties(){return{min:{type:Number,reflect:!0},max:{type:Number,reflect:!0},unit:{type:String,reflect:!0},step:{type:Number,reflect:!0},noMinMaxLabels:{type:Boolean,attribute:"no-min-max-labels"},minLabel:{type:String,attribute:"min-label"},maxLabel:{type:String,attribute:"max-label"}}}static localizeNamespaces=[{"lion-input-range":o},...super.localizeNamespaces];static scopedStyles(t){return r`
      /* Custom input range styling comes here, be aware that this won't work for polyfilled browsers */
      .${t} .form-control {
        width: 100%;
        box-shadow: none;
        outline: none;
      }
    `}static get styles(){return[super.styles,r`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(100%);
          clip: rect(1px, 1px, 1px, 1px);
          white-space: nowrap;
          border: 0;
          margin: 0;
          padding: 0;
        }
      `]}get _inputNode(){return super._inputNode}get _valueDisplay(){let t=parseFloat(this.formattedValue);return this.minLabel&&t===this.min?{text:this.minLabel,showUnit:!1}:this.maxLabel&&t===this.max?{text:this.maxLabel,showUnit:!1}:{text:i(t),showUnit:!0}}constructor(){super(),this.scopedStylesController=new n(this),this.min=1/0,this.max=1/0,this.step=1,this.unit="",this.type="range",this.noMinMaxLabels=!1,this.minLabel="",this.maxLabel="",this.parser=t=>parseFloat(t)}updated(t){super.updated(t),t.has("min")&&(this._inputNode.min=`${this.min}`),t.has("max")&&(this._inputNode.max=`${this.max}`),t.has("step")&&(this._inputNode.step=`${this.step}`),t.has("modelValue")&&(this.minLabel&&this.modelValue===this.min?this._inputNode.setAttribute("aria-valuetext",`${this.minLabel}`):this.maxLabel&&this.modelValue===this.max?this._inputNode.setAttribute("aria-valuetext",`${this.maxLabel}`):this._inputNode.removeAttribute("aria-valuetext"))}firstUpdated(t){super.firstUpdated(t),t.has("modelValue")&&this.updateComplete.then(()=>{this._inputNode.value=`${this.modelValue}`})}_inputGroupTemplate(){let t=this._valueDisplay;return e`
      <div>
        <span class="input-range__value">${t.text}</span>
        ${t.showUnit?e`<span class="input-range__unit">${this.unit}</span>`:""}
      </div>
      <div class="input-group">
        ${this._inputGroupBeforeTemplate()}
        <div class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_inputGroupInputTemplate(){return e`
      <div class="input-group__input">
        <slot name="input"></slot>
        ${this.noMinMaxLabels?"":e`
              <div class="input-range__limits">
                <div>
                  <span class="sr-only">${this.msgLit("lion-input-range:minimum")} </span>${this.minLabel?this.minLabel:i(this.min)}
                </div>
                <div>
                  <span class="sr-only">${this.msgLit("lion-input-range:maximum")} </span>${this.maxLabel?this.maxLabel:i(this.max)}
                </div>
              </div>
            `}
      </div>
    `}};export{s as a};
