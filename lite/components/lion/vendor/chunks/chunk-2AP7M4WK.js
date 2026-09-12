import{j as h}from"./chunk-CHUHNXUY.js";import{b as o,d as l}from"./chunk-TIEK7LWH.js";import{a as e}from"./chunk-2FELQFK7.js";var u=class extends h(l){static get styles(){return[o`
        :host {
          cursor: default;
        }

        ul {
          list-style: none;
          padding: 0;
          text-align: center;
        }

        li {
          display: inline-block;
        }

        button[aria-current='true'] {
          font-weight: bold;
        }
      `]}static get localizeNamespaces(){return[{"lion-pagination":t=>{switch(t){case"bg-BG":return import("../@lion/ui/components/pagination/translations/bg.js");case"cs-CZ":return import("../@lion/ui/components/pagination/translations/cs.js");case"de-AT":case"de-DE":return import("../@lion/ui/components/pagination/translations/de.js");case"en-AU":case"en-GB":case"en-PH":case"en-US":return import("../@lion/ui/components/pagination/translations/en.js");case"es-ES":return import("../@lion/ui/components/pagination/translations/es.js");case"fr-FR":case"fr-BE":return import("../@lion/ui/components/pagination/translations/fr.js");case"hu-HU":return import("../@lion/ui/components/pagination/translations/hu.js");case"it-IT":return import("../@lion/ui/components/pagination/translations/it.js");case"nl-BE":case"nl-NL":return import("../@lion/ui/components/pagination/translations/nl.js");case"pl-PL":return import("../@lion/ui/components/pagination/translations/pl.js");case"ro-RO":return import("../@lion/ui/components/pagination/translations/ro.js");case"ru-RU":return import("../@lion/ui/components/pagination/translations/ru.js");case"sk-SK":return import("../@lion/ui/components/pagination/translations/sk.js");case"tr-TR":return import("../@lion/ui/components/pagination/translations/tr.js");case"uk-UA":return import("../@lion/ui/components/pagination/translations/uk.js");case"zh-CN":return import("../@lion/ui/components/pagination/translations/zh.js");default:return import("../@lion/ui/components/pagination/translations/en.js")}}},...super.localizeNamespaces]}static get properties(){return{current:{type:Number,reflect:!0},count:{type:Number,reflect:!0}}}set current(t){if(t!==this.current){let r=this.current;this.__current=t,this.dispatchEvent(new Event("current-changed")),this.requestUpdate("current",r)}}get current(){return this.__current||0}constructor(){super(),this.__visiblePages=5,this.current=1,this.count=0}next(){this.current<this.count&&this.__fire(this.current+1)}first(){this.count>=1&&this.__fire(1)}last(){this.count>=1&&this.__fire(this.count)}goto(t){t>=1&&t<=this.count&&this.__fire(t)}previous(){this.current!==1&&this.__fire(this.current-1)}__fire(t){t!==this.current&&(this.current=t)}__calculateNavList(){let r=this.count;if(this.count>this.__visiblePages+2){let n=this.current-1,s=this.current,p=this.current+1;if(s<=4){let i=[...Array(this.__visiblePages)].map((c,a)=>1+a);return i.push("..."),i.push(this.count),i}if(r-s<=3){let i=[];i.push(1),i.push("...");let c=[...Array(this.__visiblePages)].map((a,_)=>this.count-this.__visiblePages+1+_);return i.concat(c)}return[1,"...",n,s,p,"...",r]}return[...Array(r-1+1)].map((n,s)=>1+s)}_prevNextIconTemplate(t){return t==="next"?e` &gt; `:e` &lt; `}_prevNextButtonTemplate(t,r,n="lion"){return e`
      <li>
        <button
          aria-label=${this.msgLit(`${n}-pagination:${t}`)}
          @click=${()=>this.__fire(r)}
        >
          ${this._prevNextIconTemplate(t)}
        </button>
      </li>
    `}_disabledButtonTemplate(t){return e`
      <li>
        <button disabled>${this._prevNextIconTemplate(t)}</button>
      </li>
    `}_renderNavList(){return this.__calculateNavList().map(t=>t==="..."?e` <li><span>${t}</span></li> `:e`
            <li>
              <button
                aria-label="${this.msgLit("lion-pagination:page",{page:t})}"
                aria-current=${t===this.current}
                aria-live="${t===this.current?"polite":"off"}"
                @click=${()=>this.__fire(t)}
              >
                ${t}
              </button>
            </li>
          `)}render(){return e`
      <nav role="navigation" aria-label="${this.msgLit("lion-pagination:label")}">
        <ul>
          ${this.current>1?this._prevNextButtonTemplate("previous",this.current-1):this._disabledButtonTemplate("previous")}
          ${this._renderNavList()}
          ${this.current<this.count?this._prevNextButtonTemplate("next",this.current+1):this._disabledButtonTemplate("next")}
        </ul>
      </nav>
    `}};export{u as a};
