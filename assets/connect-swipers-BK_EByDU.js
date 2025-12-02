function e(e,o,l){function c(e){document.querySelectorAll(l).forEach((o,l)=>{o.classList.toggle("active",l===e)})}e.controller.control=o,o.controller.control=e,c(0),e.slides.forEach((e,l)=>{e.addEventListener("click",()=>{o.slideTo(l),c(l)})}),o.on("slideChange",()=>{c(o.realIndex)})}export{e as i};
//# sourceMappingURL=connect-swipers-BK_EByDU.js.map
