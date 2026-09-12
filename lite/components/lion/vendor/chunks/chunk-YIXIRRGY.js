import{a as t}from"./chunk-3PABNOLB.js";import{b as o,d as c}from"./chunk-TIEK7LWH.js";import{a as s}from"./chunk-2FELQFK7.js";var e=class extends c{static get styles(){return o`
      :host {
        display: block;
        padding: 10px;
        border: 2px solid #ccc;
      }
    `}render(){return s`
      <h3>I am page B</h3>
      <p>Overlays Status:</p>
      <p>Name: ${t.name}</p>
      <p>Blocked: ${t._blockBody}</p>
      <button @click=${()=>{t.blockBody(),this.requestUpdate()}}>block</button>
      <button @click=${()=>{t.unBlockBody(),this.requestUpdate()}}>un-block</button>
      <button @click=${()=>{this.requestUpdate()}}>refresh</button>
    `}};customElements.define("page-d",e);export{e as a};
