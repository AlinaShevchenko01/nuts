import{b as e}from"./index-IRkAmeI4.js";function n(n){n.querySelectorAll(".img[data-src]").forEach(n=>{e(n)})}function o(e,o=2){const s=e.slides.length,t=()=>{const t=e.activeIndex;for(let c=-o;c<=o;c++){const o=(t+c+s)%s,i=e.slides[o];i&&n(i)}};t(),e.on("slideChange",t)}export{o as l};
//# sourceMappingURL=swiper-lazy-loading-fSmRJACY.js.map
