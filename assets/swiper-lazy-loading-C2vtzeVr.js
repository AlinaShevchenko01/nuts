import{b as e}from"./reuse-functions-CsFiiDOq.js";function s(s){s.querySelectorAll(".img[data-src]").forEach(s=>{e(s)})}function n(e,n=2){const o=e.slides.length,t=()=>{const t=e.activeIndex;for(let c=-n;c<=n;c++){const n=(t+c+o)%o,i=e.slides[n];i&&s(i)}};t(),e.on("slideChange",t)}export{n as l};
//# sourceMappingURL=swiper-lazy-loading-C2vtzeVr.js.map
