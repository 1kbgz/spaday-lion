import{a as t}from"../../../../../../chunks/chunk-VBXXDRSD.js";import"../../../../../../chunks/chunk-5WT7LR6D.js";import"../../../../../../chunks/chunk-CHUHNXUY.js";import"../../../../../../chunks/chunk-RFUIJ2RA.js";import"../../../../../../chunks/chunk-5G3K6R3U.js";import"../../../../../../chunks/chunk-DSM4IEUY.js";import"../../../../../../chunks/chunk-G7OXZUGX.js";import"../../../../../../chunks/chunk-7ONKQLO6.js";import"../../../../../../chunks/chunk-GNR73WXY.js";import{b as e}from"../../../../../../chunks/chunk-TIEK7LWH.js";import{a as r}from"../../../../../../chunks/chunk-2FELQFK7.js";var s=class extends t{static get styles(){return[e`
        .progress__icon {
          display: inline-block;
          width: 48px;
          height: 48px;
          animation: spinner-rotate 2s linear infinite;
        }

        .progress__filled {
          animation: spinner-dash 1.35s ease-in-out infinite;
          fill: none;
          stroke-width: 6px;
          stroke: var(--primary-color);
        }

        @keyframes spinner-rotate {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinner-dash {
          0% {
            stroke-dasharray: 6, 122;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 100, 28;
            stroke-dashoffset: -16;
          }
          100% {
            stroke-dasharray: 6, 122;
            stroke-dashoffset: -127;
          }
        }
      `]}_graphicTemplate(){return r`
      <svg class="progress__icon" viewBox="20 20 47 47">
        <circle class="progress__filled" cx="44" cy="44" r="20.2" />
      </svg>
    `}};customElements.define("my-indeterminate-progress-spinner",s);export{s as MyIndeterminateProgressSpinner};
