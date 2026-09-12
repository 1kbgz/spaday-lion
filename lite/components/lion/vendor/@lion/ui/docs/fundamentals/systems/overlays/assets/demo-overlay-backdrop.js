import"../../../../../../../chunks/chunk-GNR73WXY.js";import{b as a,d as e}from"../../../../../../../chunks/chunk-TIEK7LWH.js";import"../../../../../../../chunks/chunk-2FELQFK7.js";var o=class extends e{static get styles(){return a`
      :host {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: grey;
        opacity: 0.3;
        position: fixed;
      }

      :host(.local-overlays__backdrop--visible) {
        display: block;
      }

      :host(.local-overlays__backdrop--animation-in) {
        animation: local-overlays-backdrop-fade-in 300ms;
      }

      :host(.local-overlays__backdrop--animation-out) {
        animation: local-overlays-backdrop-fade-out 300ms;
        opacity: 0;
      }

      @keyframes local-overlays-backdrop-fade-in {
        from {
          opacity: 0;
        }
      }

      @keyframes local-overlays-backdrop-fade-out {
        from {
          opacity: 0.3;
        }
      }
    `}};customElements.define("demo-overlay-backdrop",o);
