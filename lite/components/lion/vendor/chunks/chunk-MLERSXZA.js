import{h as b}from"./chunk-KVEQ5QLL.js";import{b as c,d as u}from"./chunk-TIEK7LWH.js";import{a as h}from"./chunk-2FELQFK7.js";function f({el:t,uid:e}){t.setAttribute("id",`panel-${e}`),t.setAttribute("role","tabpanel"),t.setAttribute("aria-labelledby",`button-${e}`),t.hasAttribute("tabindex")||t.setAttribute("tabindex","0")}function x(t){t.setAttribute("selected","true")}function _(t){t.removeAttribute("selected")}function I({el:t,uid:e,clickHandler:s,keydownHandler:r,keyupHandler:i}){t.setAttribute("id",`button-${e}`),t.setAttribute("role","tab"),t.setAttribute("aria-controls",`panel-${e}`),t.addEventListener("click",s),t.addEventListener("keyup",i),t.addEventListener("keydown",r)}function A({el:t,clickHandler:e,keydownHandler:s,keyupHandler:r}){t.removeAttribute("id"),t.removeAttribute("role"),t.removeAttribute("aria-controls"),t.removeEventListener("click",e),t.removeEventListener("keyup",r),t.removeEventListener("keydown",s)}function v(t,e=!1){e&&t.focus(),t.setAttribute("selected","true"),t.setAttribute("aria-selected","true"),t.setAttribute("tabindex","0")}function p(t){t.removeAttribute("selected"),t.setAttribute("aria-selected","false"),t.setAttribute("tabindex","-1")}function g(t){let e=t;switch(e.key){case"ArrowDown":case"ArrowRight":case"ArrowUp":case"ArrowLeft":case"Home":case"End":e.preventDefault()}}var o=class extends u{static get properties(){return{selectedIndex:{type:Number,attribute:"selected-index",reflect:!0}}}static get styles(){return[c`
        .tabs__tab-group {
          display: flex;
        }

        .tabs__tab-group ::slotted([slot='tab'][selected]) {
          font-weight: bold;
        }

        .tabs__panels ::slotted([slot='panel']) {
          visibility: hidden;
          display: none;
        }

        .tabs__panels ::slotted([slot='panel'][selected]) {
          visibility: visible;
          display: block;
        }

        .tabs__panels {
          display: block;
        }
      `]}render(){return h`
      <div class="tabs__tab-group" role="tablist">
        <slot name="tab"></slot>
      </div>
      <div class="tabs__panels">
        <slot name="panel"></slot>
      </div>
    `}constructor(){super(),this.selectedIndex=0}firstUpdated(e){super.firstUpdated(e),this.__setupSlots(),this.tabs[0]?.disabled&&(this.selectedIndex=this.tabs.findIndex(s=>!s.disabled))}get tabs(){return Array.from(this.children).filter(e=>e.slot==="tab")}get panels(){return Array.from(this.children).filter(e=>e.slot==="panel")}static enabledWarnings=super.enabledWarnings?.filter(e=>e!=="change-in-update")||[];__setupSlots(){if(this.shadowRoot){let e=this.shadowRoot.querySelector("slot[name=tab]"),s=()=>{this.__cleanStore(),this.__setupStore(),this.__updateSelected(!1)};e&&e.addEventListener("slotchange",s)}}__setupStore(){this.__store=[],this.tabs.length!==this.panels.length&&console.warn(`The amount of tabs (${this.tabs.length}) doesn't match the amount of panels (${this.panels.length}).`),this.tabs.forEach((e,s)=>{let r=b(),i=this.panels[s],n={uid:r,el:e,button:e,panel:i,clickHandler:this.__createButtonClickHandler(s),keydownHandler:g.bind(this),keyupHandler:this.__handleButtonKeyup.bind(this)};f({...n,el:n.panel}),I(n),_(n.panel),p(n.button),this.__store&&this.__store.push(n)})}__cleanStore(){this.__store&&(this.__store.forEach(e=>{A(e)}),this.__store=[])}__getNextNotDisabledTab(e,s,r){let i=[],n=e.filter((d,l)=>!d.disabled&&l>this.selectedIndex),a=e.filter((d,l)=>!d.disabled&&l<this.selectedIndex);return r==="right"?i=[...n,...a]:i=[...a.reverse(),...n.reverse()],i[0]}__getNextAvailableIndex(e,s){let r=this.tabs[this.selectedIndex];if(this.tabs.every(i=>!i.disabled))return e;if(s==="ArrowRight"||s==="ArrowDown"){let i=this.__getNextNotDisabledTab(this.tabs,r,"right");return this.tabs.findIndex(n=>i===n)}if(s==="ArrowLeft"||s==="ArrowUp"){let i=this.__getNextNotDisabledTab(this.tabs,r,"left");return this.tabs.findIndex(n=>i===n)}if(s==="Home")return this.tabs.findIndex(i=>!i.disabled);if(s==="End"){let i=this.tabs.map((n,a)=>({disabled:n.disabled,index:a})).filter(n=>!n.disabled);return i[i.length-1].index}return-1}__createButtonClickHandler(e){return()=>{this._setSelectedIndexWithFocus(e)}}__handleButtonKeyup(e){let s=e;if(typeof this.selectedIndex=="number")switch(s.key){case"ArrowDown":case"ArrowRight":this.selectedIndex+1>=this._pairCount?this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(0,s.key)):this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this.selectedIndex+1,s.key));break;case"ArrowUp":case"ArrowLeft":this.selectedIndex<=0?this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this._pairCount-1,s.key)):this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this.selectedIndex-1,s.key));break;case"Home":this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(0,s.key));break;case"End":this._setSelectedIndexWithFocus(this.__getNextAvailableIndex(this._pairCount-1,s.key));break}}get selectedIndex(){return this.__selectedIndex||0}set selectedIndex(e){if(e===this.__selectedIndex)return;let s=this.__selectedIndex;this.__selectedIndex=e,this.__updateSelected(!1),this.dispatchEvent(new Event("selected-changed")),this.requestUpdate("selectedIndex",s)}_setSelectedIndexWithFocus(e){if(e===-1)return;let s=this.__selectedIndex;this.__selectedIndex=e,this.__updateSelected(!0),this.dispatchEvent(new Event("selected-changed")),this.requestUpdate("selectedIndex",s)}get _pairCount(){return this.__store&&this.__store.length||0}__updateSelected(e=!1){if(!(this.__store&&typeof this.selectedIndex=="number"&&this.__store[this.selectedIndex]))return;let s=this.tabs.find(a=>a.hasAttribute("selected")),r=this.panels.find(a=>a.hasAttribute("selected"));s&&p(s),r&&_(r);let{button:i,panel:n}=this.__store[this.selectedIndex];i&&v(i,e),n&&x(n)}};export{o as a};
