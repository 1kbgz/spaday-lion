import{a as t}from"./chunk-MLCR4VM2.js";import{b as o,d as c}from"./chunk-TIEK7LWH.js";import{a as s}from"./chunk-2FELQFK7.js";var e=class extends c{static get styles(){return o`
      :host {
        display: block;
        padding: 10px;
        border: 2px solid #ccc;
      }
    `}render(){return s`
      <h3>I am page A</h3>
      <p>Overlays Status:</p>
      <p>Name: ${t.name}</p>
      <p>Blocked: ${t.blockBody}</p>
      <button @click=${()=>{t.block(),this.requestUpdate()}}>block</button>
      <button @click=${()=>{t.unBlock(),this.requestUpdate()}}>un-block</button>
      <button @click=${()=>{this.requestUpdate()}}>refresh</button>
    `}};customElements.define("page-a",e);export{e as a};
