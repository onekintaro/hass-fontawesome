(()=>{const t={},o={"fa-primary":"primary","fa-secondary":"secondary",primary:"primary",secondary:"secondary"},e=(e,s)=>new Promise((async(n,a)=>{const r=`${e}:${s}`;t[r]&&n(t[r]),t[r]=(async(t,e)=>{const[s,n]=e.split("#"),a=await fetch(`/fontawesome/icons/${t}/${s}.svg`),r=await a.text(),c=(new DOMParser).parseFromString(r,"text/html");if(!c||!c.querySelector("svg"))return{};const i=c.querySelector("svg").getAttribute("viewBox"),l=c.querySelectorAll("path"),d={};let h="";for(const t of l){h+=t.getAttribute("d");const e=t.classList[0];o[e]&&(d[o[e]]=t.getAttribute("d"))}let m=null;const p=c.querySelector("svg");return Array.from(p.attributes).some((t=>t.name.startsWith("on")))||p.getElementsByTagName("script").length||(m=p),{viewBox:i,path:h,paths:d,format:n,fullCode:m}})(e,s),n(t[r])}));window.getIcon=e,"customIconsets"in window||(window.customIconsets={}),window.customIconsets.fab=t=>e("brands",t),window.customIconsets.far=t=>e("regular",t),window.customIconsets.fas=t=>e("solid",t),window.customIconsets.fapro=t=>e("pro",t),window.customIconsets.facustom=t=>e("pro",t),customElements.whenDefined("ha-icon").then((()=>{customElements.get("ha-icon").prototype._setCustomPath=async function(t){const o=await t;this._path=o.path,this._viewBox=o.viewBox,await this.UpdateComplete;const e=this.shadowRoot.querySelector("ha-svg-icon");if(e&&e.setPaths)if(o.fullCode&&"fullcolor"===o.format){await e.updateComplete;const t=e.shadowRoot.querySelector("g");t.firstElementChild&&(t.firstElementChild.style.display="none"),t.appendChild(o.fullCode.cloneNode(!0))}else e.setPaths(o.paths),o.format&&e.classList.add(...o.format.split("-"))}})),customElements.whenDefined("ha-svg-icon").then((()=>{customElements.get("ha-svg-icon").prototype.setPaths=async function(t){if(await this.updateComplete,null==t||0===Object.keys(t).length)return;const o=this.shadowRoot.querySelector("style")||document.createElement("style");o.innerHTML="\n      .secondary {\n        opacity: 0.4;\n      }\n      :host(.invert) .secondary {\n        opacity: 1;\n      }\n      :host(.invert) .primary {\n        opacity: 0.4;\n      }\n      :host(.color) .primary {\n        opacity: 1;\n      }\n      :host(.color) .secondary {\n        opacity: 1;\n      }\n      :host(.color:not(.invert)) .secondary {\n        fill: var(--icon-secondary-color, var(--disabled-text-color));\n      }\n      :host(.color.invert) .primary {\n        fill: var(--icon-secondary-color, var(--disabled-text-color));\n      }\n      path:not(.primary):not(.secondary) {\n        opacity: 0;\n      }\n      ",this.shadowRoot.appendChild(o);const e=this.shadowRoot.querySelector("g");for(const o in t){const s=document.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("d",t[o]),s.classList.add(o),e.appendChild(s)}}}))})();