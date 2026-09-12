import{b as n,d as o}from"./chunk-TIEK7LWH.js";import{a as r}from"./chunk-2FELQFK7.js";var a=class extends o{static get styles(){return[n`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      `]}static get properties(){return{data:{type:Object},current:{type:Number}}}constructor(){super(),this.data={},this._internalCurrentSync=!0,this.current=0,this._max=0}firstUpdated(t){super.firstUpdated(t),this._max=this.steps.length-1;let e=!1;this.steps.forEach((s,i)=>{s.initialStep&&i!==0&&(this.current=i,e=!0)}),!e&&this.steps[0]&&this.steps[0].enter()}updated(t){super.updated(t),t.has("current")&&this._onCurrentChanged({current:this.current},{current:t.get("current")})}render(){return r`<slot></slot>`}next(){this._goTo(this.current+1,this.current)}previous(){this._goTo(this.current-1,this.current)}get steps(){return(this.shadowRoot?.querySelector("slot:not([name])")).assignedNodes().filter(e=>e.nodeType===Node.ELEMENT_NODE)}static enabledWarnings=super.enabledWarnings?.filter(t=>t!=="change-in-update")||[];_goTo(t,e){if(t<0||t>this._max)throw new Error(`There is no step at index ${t}.`);let s=this.steps[t],i=t<e;s.passesCondition(this.data)?i&&s.forwardOnly?this._goTo(t-1,e):this._changeStep(t,e):(s.skip(),i?this._goTo(t-1,e):this._goTo(t+1,e))}_changeStep(t,e){let s=this.steps[e],i=this.steps[t],p={number:e,element:s},u={number:t,element:i};s.leave(),this.current!==t&&(this._internalCurrentSync=!0,this.current=t),i.enter(),this._dispatchTransitionEvent(p,u)}_dispatchTransitionEvent(t,e){this.dispatchEvent(new CustomEvent("transition",{bubbles:!0,composed:!0,detail:{fromStep:t,toStep:e}}))}_onCurrentChanged(t,e){this._internalCurrentSync?this._internalCurrentSync=!1:this._goTo(t.current,e.current)}};var h=class extends o{static get properties(){return{status:{type:String,reflect:!0},condition:{attribute:!1},invertCondition:{type:Boolean,reflect:!0,attribute:"invert-condition"},forwardOnly:{type:Boolean,reflect:!0,attribute:"forward-only"},initialStep:{type:Boolean,reflect:!0,attribute:"initial-step"}}}constructor(){super(),this.status="untouched",this.condition=t=>!0,this.invertCondition=!1,this.forwardOnly=!1,this.initialStep=!1}static get styles(){return[n`
        :host {
          display: none;
        }

        :host([hidden]) {
          display: none;
        }

        :host([status='entered']) {
          display: block;
        }
      `]}render(){return r`<slot></slot>`}firstUpdated(t){super.firstUpdated(t),this.controller=this.parentNode}enter(){this.status="entered",this.dispatchEvent(new CustomEvent("enter",{bubbles:!0,composed:!0}))}leave(){this.status="left",this.dispatchEvent(new CustomEvent("leave",{bubbles:!0,composed:!0}))}skip(){this.status="skipped",this.dispatchEvent(new CustomEvent("skip",{bubbles:!0,composed:!0}))}passesCondition(t){let e=this.condition(t);return this.invertCondition?!e:e}static enabledWarnings=super.enabledWarnings?.filter(t=>t!=="change-in-update")||[]};export{a,h as b};
