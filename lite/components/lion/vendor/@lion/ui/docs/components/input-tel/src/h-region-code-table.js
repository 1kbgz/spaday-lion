import{a as p}from"../../../../../../chunks/chunk-NKTA5VPR.js";import{a}from"../../../../../../chunks/chunk-QLXUPPY3.js";import"../../../../../../chunks/chunk-5G3K6R3U.js";import{c as s}from"../../../../../../chunks/chunk-KVEQ5QLL.js";import"../../../../../../chunks/chunk-JK7PRD3U.js";import"../../../../../../chunks/chunk-G7OXZUGX.js";import"../../../../../../chunks/chunk-7ONKQLO6.js";import"../../../../../../chunks/chunk-GNR73WXY.js";import{b as n,d as i}from"../../../../../../chunks/chunk-TIEK7LWH.js";import{a as o}from"../../../../../../chunks/chunk-2FELQFK7.js";var r=class extends i{static properties={regionMeta:Object};constructor(){super(),this.scopedStylesController=new s(this)}static scopedStyles(t){return n`
      /* Custom input range styling comes here, be aware that this won't work for polyfilled browsers */
      .${t} .sr-only {
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

      .${t} table {
        position: relative;
        height: 300px;
      }

      .${t} th {
        border-left: none;
        border-right: none;
        position: sticky;
        top: -1px;
      }

      .${t} th .backdrop {
        background-color: white;
        opacity: 0.95;
        filter: blur(4px);
        position: absolute;
        inset: -5px;
      }

      .${t} th .content {
        position: relative;
      }

      .${t} td {
        border-left: none;
        border-right: none;
      }
    `}createRenderRoot(){return this}render(){let t=this.regionMetaList||p;return o`
      <table role="table">
        <caption class="sr-only">
          Region codes
        </caption>
        <thead>
          <tr>
            <th align="left">
              <span class="backdrop"></span><span class="content">country name</span>
            </th>
            <th align="right">
              <span class="backdrop"></span><span class="content">region code</span>
            </th>
            <th align="right">
              <span class="backdrop"></span><span class="content">country code</span>
            </th>
          </tr>
        </thead>
        <tbody>
          ${a(t,e=>e.regionCode,({regionCode:e,countryCode:l,flagSymbol:c,nameForLocale:d})=>o` <tr>
                <td align="left"><span aria-hidden="true">${c}</span> ${d}</td>
                <td align="right">${e}</td>
                <td align="right">${l}</td>
              </tr>`)}
        </tbody>
      </table>
    `}};customElements.define("h-region-code-table",r);export{r as HRegionCodeTable};
