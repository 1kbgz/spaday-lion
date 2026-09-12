import{a}from"../../../../../../../chunks/chunk-55HWW5UK.js";import{m as l}from"../../../../../../../chunks/chunk-EPIRVTM2.js";import"../../../../../../../chunks/chunk-5WT7LR6D.js";import"../../../../../../../chunks/chunk-CHUHNXUY.js";import"../../../../../../../chunks/chunk-RFUIJ2RA.js";import"../../../../../../../chunks/chunk-5G3K6R3U.js";import"../../../../../../../chunks/chunk-DSM4IEUY.js";import"../../../../../../../chunks/chunk-KVEQ5QLL.js";import"../../../../../../../chunks/chunk-JK7PRD3U.js";import"../../../../../../../chunks/chunk-G7OXZUGX.js";import"../../../../../../../chunks/chunk-7ONKQLO6.js";import"../../../../../../../chunks/chunk-GNR73WXY.js";import{b as o,d}from"../../../../../../../chunks/chunk-TIEK7LWH.js";import{a as s}from"../../../../../../../chunks/chunk-2FELQFK7.js";var n=class extends d{static properties={field:Object,show:Array,title:String,readyPromise:Object};static styles=[o`
      :host {
        display: block;
        margin-top: 8px;
      }

      code {
        font-size: 8px;
        background-color: #eee;
      }

      caption {
        position: absolute;
        top: 0;
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

      table,
      th,
      td {
        border-bottom: 1px solid rgb(204, 204, 204);
        border-image: initial;
        padding: 4px;
        font-size: 12px;
        border-left: none;
        border-right: none;
        text-align: left;
      }

      td {
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      table {
        border-collapse: collapse;
      }

      caption {
        text-align: left;
      }
    `];firstUpdated(t){if(super.firstUpdated(t),!this.field){let i=this.previousElementSibling;(i instanceof l||i instanceof a)&&(this.field=i)}this.__rerender=this.__rerender.bind(this);let e=this.closest("[mdjs-story-name]")||this.parentElement;e.addEventListener("model-value-changed",this.__rerender),e.addEventListener("mousemove",this.__rerender),e.addEventListener("focusin",this.__rerender),e.addEventListener("focusout",this.__rerender),e.addEventListener("change",this.__rerender),this.field._inputNode.form&&this.field._inputNode.form.addEventListener("submit",this.__rerender),this.readyPromise&&this.readyPromise.then(()=>{this.__rerender()})}__rerender(){setTimeout(()=>{let t=this.field;this.field=null,this.field=t})}__renderProp(t){let e=this.field||{},i="";if(typeof t=="string"){let r=e[t];if(typeof r=="boolean")return r===!0?"\u2713":"";if(typeof r>"u")return s`<code>undefined</code>`;if(typeof r=="object"&&r!==null)return JSON.stringify(r);i=r}else i=t.processor(e);return s`<span title="${i}">${i}</span>`}constructor(){super(),this.title="States"}render(){let t=e=>typeof e=="string"?e:e.name;return s`
      <table>
        <caption>
          ${this.title}
        </caption>
        <tr>
          ${this.show.map(e=>s`<th>${t(e)}</th>`)}
        </tr>
        <tr></tr>
        <tr>
          ${this.show.map(e=>s`<td>${this.__renderProp(e)}</td>`)}
        </tr>
      </table>
    `}};customElements.define("h-output",n);export{n as HelperOutput};
