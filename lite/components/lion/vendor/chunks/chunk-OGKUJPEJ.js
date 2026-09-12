import{e as r,f as s,k as p}from"./chunk-W6YAUKAV.js";import{b as o,d as n}from"./chunk-TIEK7LWH.js";var t=class extends s(r(n)){static get properties(){return{invokerRelation:{type:String,attribute:"invoker-relation"}}}static get styles(){return[...super.styles,o`
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none;
        }

        ::slotted([slot='content']) {
          width: max-content;
        }
      `]}constructor(){super(),this.hasArrow=!1,this.invokerRelation="description"}static enabledWarnings=super.enabledWarnings?.filter(e=>e!=="change-in-update")||[];_defineOverlayConfig(){let e=super._defineOverlayConfig(),i=p({invokerRelation:this.invokerRelation});return{...e,...i,popperConfig:{...e.popperConfig||{},...i.popperConfig||{},modifiers:[...e.popperConfig?.modifiers||[],...i.popperConfig?.modifiers||[]]}}}};export{t as a};
