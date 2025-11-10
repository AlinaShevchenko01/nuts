var e,t={exports:{}};var n=e?t.exports:(e=1,t.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n.r(t);var i=function(e){return Array.isArray(e)?e:[e]},r=function(e){return e instanceof Node},s=function(e,t){if(e&&t){e=function(e){return e instanceof NodeList}(e)?e:[e];for(var n=0;n<e.length&&!0!==t(e[n],n,e.length);n++);}},o=function(e){return console.error("[scroll-lock] ".concat(e))},a=function(e){if(Array.isArray(e))return e.join(", ")},l=function(e){var t=[];return s(e,function(e){return t.push(e)}),t},c=function(e,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:document;if((!(arguments.length>2&&void 0!==arguments[2])||arguments[2])&&-1!==l(n.querySelectorAll(t)).indexOf(e))return e;for(;(e=e.parentElement)&&-1===l(n.querySelectorAll(t)).indexOf(e););return e},u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;return-1!==l(n.querySelectorAll(t)).indexOf(e)},h=function(e){if(e)return"hidden"===getComputedStyle(e).overflow},d=function(e){if(e)return!!h(e)||e.scrollTop<=0},f=function(e){if(e){if(h(e))return!0;var t=e.scrollTop,n=e.scrollHeight;return t+e.offsetHeight>=n}},p=function(e){if(e)return!!h(e)||e.scrollLeft<=0},g=function(e){if(e){if(h(e))return!0;var t=e.scrollLeft,n=e.scrollWidth;return t+e.offsetWidth>=n}};function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"disablePageScroll",function(){return w}),n.d(t,"enablePageScroll",function(){return b}),n.d(t,"getScrollState",function(){return E}),n.d(t,"clearQueueScrollLocks",function(){return S}),n.d(t,"getTargetScrollBarWidth",function(){return T}),n.d(t,"getCurrentTargetScrollBarWidth",function(){return _}),n.d(t,"getPageScrollBarWidth",function(){return C}),n.d(t,"getCurrentPageScrollBarWidth",function(){return I}),n.d(t,"addScrollableTarget",function(){return A}),n.d(t,"removeScrollableTarget",function(){return x}),n.d(t,"addScrollableSelector",function(){return k}),n.d(t,"removeScrollableSelector",function(){return D}),n.d(t,"addLockableTarget",function(){return M}),n.d(t,"addLockableSelector",function(){return N}),n.d(t,"setFillGapMethod",function(){return P}),n.d(t,"addFillGapTarget",function(){return O}),n.d(t,"removeFillGapTarget",function(){return L}),n.d(t,"addFillGapSelector",function(){return R}),n.d(t,"removeFillGapSelector",function(){return V}),n.d(t,"refillGaps",function(){return F});var v=["padding","margin","width","max-width","none"],y={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:v[0],startTouchY:0,startTouchX:0},w=function(e){y.queue<=0&&(y.scroll=!1,B(),q()),A(e),y.queue++},b=function(e){y.queue>0&&y.queue--,y.queue<=0&&(y.scroll=!0,U(),H()),x(e)},E=function(){return y.scroll},S=function(){y.queue=0},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(r(e)){var n=e.style.overflowY;t?E()||(e.style.overflowY=e.getAttribute("data-scroll-lock-saved-overflow-y-property")):e.style.overflowY="scroll";var i=_(e);return e.style.overflowY=n,i}return 0},_=function(e){if(r(e)){if(e===document.body){var t=document.documentElement.clientWidth;return window.innerWidth-t}var n=e.style.borderLeftWidth,i=e.style.borderRightWidth;e.style.borderLeftWidth="0px",e.style.borderRightWidth="0px";var s=e.offsetWidth-e.clientWidth;return e.style.borderLeftWidth=n,e.style.borderRightWidth=i,s}return 0},C=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return T(document.body,e)},I=function(){return _(document.body)},A=function(e){e&&i(e).map(function(e){s(e,function(e){r(e)?e.setAttribute("data-scroll-lock-scrollable",""):o('"'.concat(e,'" is not a Element.'))})})},x=function(e){e&&i(e).map(function(e){s(e,function(e){r(e)?e.removeAttribute("data-scroll-lock-scrollable"):o('"'.concat(e,'" is not a Element.'))})})},k=function(e){e&&i(e).map(function(e){y.scrollableSelectors.push(e)})},D=function(e){e&&i(e).map(function(e){y.scrollableSelectors=y.scrollableSelectors.filter(function(t){return t!==e})})},M=function(e){e&&(i(e).map(function(e){s(e,function(e){r(e)?e.setAttribute("data-scroll-lock-lockable",""):o('"'.concat(e,'" is not a Element.'))})}),E()||B())},N=function(e){e&&(i(e).map(function(e){y.lockableSelectors.push(e)}),E()||B(),R(e))},P=function(e){if(e)if(-1!==v.indexOf(e))y.fillGapMethod=e,F();else{var t=v.join(", ");o('"'.concat(e,'" method is not available!\nAvailable fill gap methods: ').concat(t,"."))}},O=function(e){e&&i(e).map(function(e){s(e,function(e){r(e)?(e.setAttribute("data-scroll-lock-fill-gap",""),y.scroll||K(e)):o('"'.concat(e,'" is not a Element.'))})})},L=function(e){e&&i(e).map(function(e){s(e,function(e){r(e)?(e.removeAttribute("data-scroll-lock-fill-gap"),y.scroll||Q(e)):o('"'.concat(e,'" is not a Element.'))})})},R=function(e){e&&i(e).map(function(e){-1===y.fillGapSelectors.indexOf(e)&&(y.fillGapSelectors.push(e),y.scroll||W(e))})},V=function(e){e&&i(e).map(function(e){y.fillGapSelectors=y.fillGapSelectors.filter(function(t){return t!==e}),y.scroll||X(e)})},F=function(){y.scroll||q()},B=function(){var e=a(y.lockableSelectors);j(e)},U=function(){var e=a(y.lockableSelectors);z(e)},j=function(e){var t=document.querySelectorAll(e);s(t,function(e){G(e)})},z=function(e){var t=document.querySelectorAll(e);s(t,function(e){$(e)})},G=function(e){if(r(e)&&"true"!==e.getAttribute("data-scroll-lock-locked")){var t=window.getComputedStyle(e);e.setAttribute("data-scroll-lock-saved-overflow-y-property",t.overflowY),e.setAttribute("data-scroll-lock-saved-inline-overflow-property",e.style.overflow),e.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",e.style.overflowY),e.style.overflow="hidden",e.setAttribute("data-scroll-lock-locked","true")}},$=function(e){r(e)&&"true"===e.getAttribute("data-scroll-lock-locked")&&(e.style.overflow=e.getAttribute("data-scroll-lock-saved-inline-overflow-property"),e.style.overflowY=e.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-saved-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-locked"))},q=function(){y.fillGapSelectors.map(function(e){W(e)})},H=function(){y.fillGapSelectors.map(function(e){X(e)})},W=function(e){var t=document.querySelectorAll(e),n=-1!==y.lockableSelectors.indexOf(e);s(t,function(e){K(e,n)})},K=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(r(e)){var n;if(""===e.getAttribute("data-scroll-lock-lockable")||t)n=T(e,!0);else{var i=c(e,a(y.lockableSelectors));n=T(i,!0)}"true"===e.getAttribute("data-scroll-lock-filled-gap")&&Q(e);var s=window.getComputedStyle(e);if(e.setAttribute("data-scroll-lock-filled-gap","true"),e.setAttribute("data-scroll-lock-current-fill-gap-method",y.fillGapMethod),"margin"===y.fillGapMethod){var o=parseFloat(s.marginRight);e.style.marginRight="".concat(o+n,"px")}else if("width"===y.fillGapMethod)e.style.width="calc(100% - ".concat(n,"px)");else if("max-width"===y.fillGapMethod)e.style.maxWidth="calc(100% - ".concat(n,"px)");else if("padding"===y.fillGapMethod){var l=parseFloat(s.paddingRight);e.style.paddingRight="".concat(l+n,"px")}}},X=function(e){var t=document.querySelectorAll(e);s(t,function(e){Q(e)})},Q=function(e){if(r(e)&&"true"===e.getAttribute("data-scroll-lock-filled-gap")){var t=e.getAttribute("data-scroll-lock-current-fill-gap-method");e.removeAttribute("data-scroll-lock-filled-gap"),e.removeAttribute("data-scroll-lock-current-fill-gap-method"),"margin"===t?e.style.marginRight="":"width"===t?e.style.width="":"max-width"===t?e.style.maxWidth="":"padding"===t&&(e.style.paddingRight="")}};"undefined"!=typeof window&&window.addEventListener("resize",function(e){F()}),"undefined"!=typeof document&&(document.addEventListener("touchstart",function(e){y.scroll||(y.startTouchY=e.touches[0].clientY,y.startTouchX=e.touches[0].clientX)}),document.addEventListener("touchmove",function(e){if(!y.scroll){var t=y.startTouchY,n=y.startTouchX,i=e.touches[0].clientY,r=e.touches[0].clientX;if(e.touches.length<2){var s=a(y.scrollableSelectors),o={up:t<i,down:t>i,left:n<r,right:n>r},l={up:t+3<i,down:t-3>i,left:n+3<r,right:n-3>r};!function t(n){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n){var r=c(n,s,!1);if(function(e){return u(e,'input[type="range"]')}(n))return!1;if(i||function(e){return u(e,'textarea, [contenteditable="true"]')}(n)&&c(n,s)||u(n,s)){var a=!1;p(n)&&g(n)?(o.up&&d(n)||o.down&&f(n))&&(a=!0):d(n)&&f(n)?(o.left&&p(n)||o.right&&g(n))&&(a=!0):(l.up&&d(n)||l.down&&f(n)||l.left&&p(n)||l.right&&g(n))&&(a=!0),a&&(r?t(r,!0):e.cancelable&&e.preventDefault())}else t(r)}else e.cancelable&&e.preventDefault()}(e.target)}}},{passive:!1}),document.addEventListener("touchend",function(e){y.scroll||(y.startTouchY=0,y.startTouchX=0)}));var Y={hide:function(e){o('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget'),w(e)},show:function(e){o('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget'),b(e)},toggle:function(e){o('"toggle" is deprecated! Do not use it.'),E()?w():b(e)},getState:function(){return o('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate'),E()},getWidth:function(){return o('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth'),C()},getCurrentWidth:function(){return o('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth'),I()},setScrollableTargets:function(e){o('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget'),A(e)},setFillGapSelectors:function(e){o('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector'),R(e)},setFillGapTargets:function(e){o('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget'),O(e)},clearQueue:function(){o('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks'),S()}},J=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){m(e,t,n[t])})}return e}({disablePageScroll:w,enablePageScroll:b,getScrollState:E,clearQueueScrollLocks:S,getTargetScrollBarWidth:T,getCurrentTargetScrollBarWidth:_,getPageScrollBarWidth:C,getCurrentPageScrollBarWidth:I,addScrollableSelector:k,removeScrollableSelector:D,addScrollableTarget:A,removeScrollableTarget:x,addLockableSelector:N,addLockableTarget:M,addFillGapSelector:R,removeFillGapSelector:V,addFillGapTarget:O,removeFillGapTarget:L,setFillGapMethod:P,refillGaps:F,_state:y},Y);t.default=J}]).default);function i(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function r(e,t){void 0===e&&(e={}),void 0===t&&(t={});const n=["__proto__","constructor","prototype"];Object.keys(t).filter(e=>n.indexOf(e)<0).forEach(n=>{void 0===e[n]?e[n]=t[n]:i(t[n])&&i(e[n])&&Object.keys(t[n]).length>0&&r(e[n],t[n])})}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function o(){const e="undefined"!=typeof document?document:{};return r(e,s),e}const a={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function l(){const e="undefined"!=typeof window?window:{};return r(e,a),e}function c(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function u(){return Date.now()}function h(e,t){void 0===t&&(t="x");const n=l();let i,r,s;const o=function(e){const t=l();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}(e);return n.WebKitCSSMatrix?(r=o.transform||o.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(e=>e.replace(",",".")).join(", ")),s=new n.WebKitCSSMatrix("none"===r?"":r)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=s.toString().split(",")),"x"===t&&(r=n.WebKitCSSMatrix?s.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===t&&(r=n.WebKitCSSMatrix?s.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),r||0}function d(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function f(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function p(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const i=n<0||arguments.length<=n?void 0:arguments[n];if(null!=i&&!f(i)){const n=Object.keys(Object(i)).filter(e=>t.indexOf(e)<0);for(let t=0,r=n.length;t<r;t+=1){const r=n[t],s=Object.getOwnPropertyDescriptor(i,r);void 0!==s&&s.enumerable&&(d(e[r])&&d(i[r])?i[r].__swiper__?e[r]=i[r]:p(e[r],i[r]):!d(e[r])&&d(i[r])?(e[r]={},i[r].__swiper__?e[r]=i[r]:p(e[r],i[r])):e[r]=i[r])}}}return e}function g(e,t,n){e.style.setProperty(t,n)}function m(e){let{swiper:t,targetPosition:n,side:i}=e;const r=l(),s=-t.translate;let o,a=null;const c=t.params.speed;t.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(t.cssModeFrameID);const u=n>s?"next":"prev",h=(e,t)=>"next"===u&&e>=t||"prev"===u&&e<=t,d=()=>{o=(new Date).getTime(),null===a&&(a=o);const e=Math.max(Math.min((o-a)/c,1),0),l=.5-Math.cos(e*Math.PI)/2;let u=s+l*(n-s);if(h(u,n)&&(u=n),t.wrapperEl.scrollTo({[i]:u}),h(u,n))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[i]:u})}),void r.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=r.requestAnimationFrame(d)};d()}function v(e,t){void 0===t&&(t="");const n=l(),i=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&i.push(...e.assignedElements()),t?i.filter(e=>e.matches(t)):i}function y(e){try{return void console.warn(e)}catch(t){}}function w(e,t){void 0===t&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:function(e){return void 0===e&&(e=""),e.trim().split(" ").filter(e=>!!e.trim())}(t)),n}function b(e,t){return l().getComputedStyle(e,null).getPropertyValue(t)}function E(e){let t,n=e;if(n){for(t=0;null!==(n=n.previousSibling);)1===n.nodeType&&(t+=1);return t}}function S(e,t,n){const i=l();return e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom"))}function T(e){return(Array.isArray(e)?e:[e]).filter(e=>!!e)}let _,C,I;function A(){return _||(_=function(){const e=l(),t=o();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),_}function x(e){return void 0===e&&(e={}),C||(C=function(e){let{userAgent:t}=void 0===e?{}:e;const n=A(),i=l(),r=i.navigator.platform,s=t||i.navigator.userAgent,o={ios:!1,android:!1},a=i.screen.width,c=i.screen.height,u=s.match(/(Android);?[\s\/]+([\d.]+)?/);let h=s.match(/(iPad).*OS\s([\d_]+)/);const d=s.match(/(iPod)(.*OS\s([\d_]+))?/),f=!h&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p="Win32"===r;let g="MacIntel"===r;return!h&&g&&n.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${a}x${c}`)>=0&&(h=s.match(/(Version)\/([\d.]+)/),h||(h=[0,1,"13_0_0"]),g=!1),u&&!p&&(o.os="android",o.android=!0),(h||f||d)&&(o.os="ios",o.ios=!0),o}(e)),C}function k(){return I||(I=function(){const e=l(),t=x();let n=!1;function i(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(i()){const t=String(e.navigator.userAgent);if(t.includes("Version/")){const[e,i]=t.split("Version/")[1].split(" ")[0].split(".").map(e=>Number(e));n=e<16||16===e&&i<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),s=i();return{isSafari:n||s,needPerspectiveFix:n,need3dFix:s||r&&t.ios,isWebView:r}}()),I}const D=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};const M=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};const N=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(n){let t=n.querySelector(`.${e.params.lazyPreloaderClass}`);!t&&e.isElement&&(n.shadowRoot?t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),t&&t.remove())})),t&&t.remove()}},P=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},O=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const i="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),r=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const n=r,s=[n-t];return s.push(...Array.from({length:t}).map((e,t)=>n+i+t)),void e.slides.forEach((t,n)=>{s.includes(t.column)&&P(e,n)})}const s=r+i-1;if(e.params.rewind||e.params.loop)for(let o=r-t;o<=s+t;o+=1){const t=(o%n+n)%n;(t<r||t>s)&&P(e,t)}else for(let o=Math.max(r-t,0);o<=Math.min(s+t,n-1);o+=1)o!==r&&(o>s||o<r)&&P(e,o)};function L(e){let{swiper:t,runCallbacks:n,direction:i,step:r}=e;const{activeIndex:s,previousIndex:o}=t;let a=i;a||(a=s>o?"next":s<o?"prev":"reset"),t.emit(`transition${r}`),n&&"reset"===a?t.emit(`slideResetTransition${r}`):n&&s!==o&&(t.emit(`slideChangeTransition${r}`),"next"===a?t.emit(`slideNextTransition${r}`):t.emit(`slidePrevTransition${r}`))}function R(e,t,n){const i=l(),{params:r}=e,s=r.edgeSwipeDetection,o=r.edgeSwipeThreshold;return!s||!(n<=o||n>=i.innerWidth-o)||"prevent"===s&&(t.preventDefault(),!0)}function V(e){const t=this,n=o();let i=e;i.originalEvent&&(i=i.originalEvent);const r=t.touchEventsData;if("pointerdown"===i.type){if(null!==r.pointerId&&r.pointerId!==i.pointerId)return;r.pointerId=i.pointerId}else"touchstart"===i.type&&1===i.targetTouches.length&&(r.touchId=i.targetTouches[0].identifier);if("touchstart"===i.type)return void R(t,i,i.targetTouches[0].pageX);const{params:s,touches:a,enabled:c}=t;if(!c)return;if(!s.simulateTouch&&"mouse"===i.pointerType)return;if(t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let h=i.target;if("wrapper"===s.touchEventsTarget&&!function(e,t){const n=l();let i=t.contains(e);!i&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(i=[...t.assignedElements()].includes(e),i||(i=function(e,t){const n=[t];for(;n.length>0;){const t=n.shift();if(e===t)return!0;n.push(...t.children,...t.shadowRoot?t.shadowRoot.children:[],...t.assignedElements?t.assignedElements():[])}}(e,t)));return i}(h,t.wrapperEl))return;if("which"in i&&3===i.which)return;if("button"in i&&i.button>0)return;if(r.isTouched&&r.isMoved)return;const d=!!s.noSwipingClass&&""!==s.noSwipingClass,f=i.composedPath?i.composedPath():i.path;d&&i.target&&i.target.shadowRoot&&f&&(h=f[0]);const p=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,g=!(!i.target||!i.target.shadowRoot);if(s.noSwiping&&(g?function(e,t){return void 0===t&&(t=this),function t(n){if(!n||n===o()||n===l())return null;n.assignedSlot&&(n=n.assignedSlot);const i=n.closest(e);return i||n.getRootNode?i||t(n.getRootNode().host):null}(t)}(p,h):h.closest(p)))return void(t.allowClick=!0);if(s.swipeHandler&&!h.closest(s.swipeHandler))return;a.currentX=i.pageX,a.currentY=i.pageY;const m=a.currentX,v=a.currentY;if(!R(t,i,m))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=m,a.startY=v,r.touchStartTime=u(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1);let y=!0;h.matches(r.focusableElements)&&(y=!1,"SELECT"===h.nodeName&&(r.isTouched=!1)),n.activeElement&&n.activeElement.matches(r.focusableElements)&&n.activeElement!==h&&("mouse"===i.pointerType||"mouse"!==i.pointerType&&!h.matches(r.focusableElements))&&n.activeElement.blur();const w=y&&t.allowTouchMove&&s.touchStartPreventDefault;!s.touchStartForcePreventDefault&&!w||h.isContentEditable||i.preventDefault(),s.freeMode&&s.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",i)}function F(e){const t=o(),n=this,i=n.touchEventsData,{params:r,touches:s,rtlTranslate:a,enabled:l}=n;if(!l)return;if(!r.simulateTouch&&"mouse"===e.pointerType)return;let c,h=e;if(h.originalEvent&&(h=h.originalEvent),"pointermove"===h.type){if(null!==i.touchId)return;if(h.pointerId!==i.pointerId)return}if("touchmove"===h.type){if(c=[...h.changedTouches].find(e=>e.identifier===i.touchId),!c||c.identifier!==i.touchId)return}else c=h;if(!i.isTouched)return void(i.startMoving&&i.isScrolling&&n.emit("touchMoveOpposite",h));const d=c.pageX,f=c.pageY;if(h.preventedByNestedSwiper)return s.startX=d,void(s.startY=f);if(!n.allowTouchMove)return h.target.matches(i.focusableElements)||(n.allowClick=!1),void(i.isTouched&&(Object.assign(s,{startX:d,startY:f,currentX:d,currentY:f}),i.touchStartTime=u()));if(r.touchReleaseOnEdges&&!r.loop)if(n.isVertical()){if(f<s.startY&&n.translate<=n.maxTranslate()||f>s.startY&&n.translate>=n.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else{if(a&&(d>s.startX&&-n.translate<=n.maxTranslate()||d<s.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(d<s.startX&&n.translate<=n.maxTranslate()||d>s.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(i.focusableElements)&&t.activeElement!==h.target&&"mouse"!==h.pointerType&&t.activeElement.blur(),t.activeElement&&h.target===t.activeElement&&h.target.matches(i.focusableElements))return i.isMoved=!0,void(n.allowClick=!1);i.allowTouchCallbacks&&n.emit("touchMove",h),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=d,s.currentY=f;const p=s.currentX-s.startX,g=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(p**2+g**2)<n.params.threshold)return;if(void 0===i.isScrolling){let e;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?i.isScrolling=!1:p*p+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(p))/Math.PI,i.isScrolling=n.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&n.emit("touchMoveOpposite",h),void 0===i.startMoving&&(s.currentX===s.startX&&s.currentY===s.startY||(i.startMoving=!0)),i.isScrolling||"touchmove"===h.type&&i.preventTouchMoveFromPointerMove)return void(i.isTouched=!1);if(!i.startMoving)return;n.allowClick=!1,!r.cssMode&&h.cancelable&&h.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&h.stopPropagation();let m=n.isHorizontal()?p:g,v=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;r.oneWayMovement&&(m=Math.abs(m)*(a?1:-1),v=Math.abs(v)*(a?1:-1)),s.diff=m,m*=r.touchRatio,a&&(m=-m,v=-v);const y=n.touchesDirection;n.swipeDirection=m>0?"prev":"next",n.touchesDirection=v>0?"prev":"next";const w=n.params.loop&&!r.cssMode,b="next"===n.touchesDirection&&n.allowSlideNext||"prev"===n.touchesDirection&&n.allowSlidePrev;if(!i.isMoved){if(w&&b&&n.loopFix({direction:n.swipeDirection}),i.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(e)}i.allowMomentumBounce=!1,!r.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",h)}if((new Date).getTime(),!1!==r._loopSwapReset&&i.isMoved&&i.allowThresholdMove&&y!==n.touchesDirection&&w&&b&&Math.abs(m)>=1)return Object.assign(s,{startX:d,startY:f,currentX:d,currentY:f,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,void(i.startTranslate=i.currentTranslate);n.emit("sliderMove",h),i.isMoved=!0,i.currentTranslate=m+i.startTranslate;let E=!0,S=r.resistanceRatio;if(r.touchReleaseOnEdges&&(S=0),m>0?(w&&b&&i.allowThresholdMove&&i.currentTranslate>(r.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-("auto"!==r.slidesPerView&&n.slides.length-r.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>n.minTranslate()&&(E=!1,r.resistance&&(i.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+i.startTranslate+m)**S))):m<0&&(w&&b&&i.allowThresholdMove&&i.currentTranslate<(r.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+("auto"!==r.slidesPerView&&n.slides.length-r.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-("auto"===r.slidesPerView?n.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<n.maxTranslate()&&(E=!1,r.resistance&&(i.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-i.startTranslate-m)**S))),E&&(h.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),n.allowSlidePrev||n.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(m)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,i.currentTranslate=i.startTranslate,void(s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&n.freeMode||r.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(i.currentTranslate),n.setTranslate(i.currentTranslate))}function B(e){const t=this,n=t.touchEventsData;let i,r=e;r.originalEvent&&(r=r.originalEvent);if("touchend"===r.type||"touchcancel"===r.type){if(i=[...r.changedTouches].find(e=>e.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(null!==n.touchId)return;if(r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)){if(!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return}n.pointerId=null,n.touchId=null;const{params:s,touches:o,rtlTranslate:a,slidesGrid:l,enabled:h}=t;if(!h)return;if(!s.simulateTouch&&"mouse"===r.pointerType)return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&s.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);s.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=u(),f=d-n.touchStartTime;if(t.allowClick){const e=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(e&&e[0]||r.target,e),t.emit("tap click",r),f<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=u(),c(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||0===o.diff&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);let p;if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,p=s.followFinger?a?t.translate:-t.translate:-n.currentTranslate,s.cssMode)return;if(s.freeMode&&s.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:p});const g=p>=-t.maxTranslate()&&!t.params.loop;let m=0,v=t.slidesSizesGrid[0];for(let c=0;c<l.length;c+=c<s.slidesPerGroupSkip?1:s.slidesPerGroup){const e=c<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;void 0!==l[c+e]?(g||p>=l[c]&&p<l[c+e])&&(m=c,v=l[c+e]-l[c]):(g||p>=l[c])&&(m=c,v=l[l.length-1]-l[l.length-2])}let y=null,w=null;s.rewind&&(t.isBeginning?w=s.virtual&&s.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(y=0));const b=(p-l[m])/v,E=m<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(f>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(b>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?y:m+E):t.slideTo(m)),"prev"===t.swipeDirection&&(b>1-s.longSwipesRatio?t.slideTo(m+E):null!==w&&b<0&&Math.abs(b)>s.longSwipesRatio?t.slideTo(w):t.slideTo(m))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(m+E):t.slideTo(m):("next"===t.swipeDirection&&t.slideTo(null!==y?y:m+E),"prev"===t.swipeDirection&&t.slideTo(null!==w?w:m))}}function U(){const e=this,{params:t,el:n}=e;if(n&&0===n.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:r,snapGrid:s}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||a?e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=r,e.allowSlideNext=i,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function j(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function z(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:i}=e;if(!i)return;let r;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const s=e.maxTranslate()-e.minTranslate();r=0===s?0:(e.translate-e.minTranslate())/s,r!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function G(e){const t=this;N(t,e.target),t.params.cssMode||"auto"!==t.params.slidesPerView&&!t.params.autoHeight||t.update()}function $(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const q=(e,t)=>{const n=o(),{params:i,el:r,wrapperEl:s,device:a}=e,l=!!i.nested,c="on"===t?"addEventListener":"removeEventListener",u=t;r&&"string"!=typeof r&&(n[c]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),r[c]("touchstart",e.onTouchStart,{passive:!1}),r[c]("pointerdown",e.onTouchStart,{passive:!1}),n[c]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[c]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[c]("touchend",e.onTouchEnd,{passive:!0}),n[c]("pointerup",e.onTouchEnd,{passive:!0}),n[c]("pointercancel",e.onTouchEnd,{passive:!0}),n[c]("touchcancel",e.onTouchEnd,{passive:!0}),n[c]("pointerout",e.onTouchEnd,{passive:!0}),n[c]("pointerleave",e.onTouchEnd,{passive:!0}),n[c]("contextmenu",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[c]("click",e.onClick,!0),i.cssMode&&s[c]("scroll",e.onScroll),i.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",U,!0):e[u]("observerUpdate",U,!0),r[c]("load",e.onLoad,{capture:!0}))};const H=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var W={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function K(e,t){return function(n){void 0===n&&(n={});const i=Object.keys(n)[0],r=n[i];"object"==typeof r&&null!==r?(!0===e[i]&&(e[i]={enabled:!0}),"navigation"===i&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),i in e&&"enabled"in r?("object"!=typeof e[i]||"enabled"in e[i]||(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),p(t,n)):p(t,n)):p(t,n)}}const X={eventsEmitter:{on(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;const r=n?"unshift":"push";return e.split(" ").forEach(e=>{i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][r](t)}),i},once(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;function r(){i.off(e,r),r.__emitterProxy&&delete r.__emitterProxy;for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];t.apply(i,s)}return r.__emitterProxy=t,i.on(e,r,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof e)return n;const i=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[i](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed?n:n.eventsListeners?(e.split(" ").forEach(e=>{void 0===t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach((i,r)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[e].splice(r,1)})}),n):n},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,n,i;for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];"string"==typeof s[0]||Array.isArray(s[0])?(t=s[0],n=s.slice(1,s.length),i=e):(t=s[0].events,n=s[0].data,i=s[0].context||e),n.unshift(i);return(Array.isArray(t)?t:t.split(" ")).forEach(t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(e=>{e.apply(i,[t,...n])}),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach(e=>{e.apply(i,n)})}),e}},update:{updateSize:function(){const e=this;let t,n;const i=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:i.clientWidth,n=void 0!==e.params.height&&null!==e.params.height?e.params.height:i.clientHeight,0===t&&e.isHorizontal()||0===n&&e.isVertical()||(t=t-parseInt(b(i,"padding-left")||0,10)-parseInt(b(i,"padding-right")||0,10),n=n-parseInt(b(i,"padding-top")||0,10)-parseInt(b(i,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))},updateSlides:function(){const e=this;function t(t,n){return parseFloat(t.getPropertyValue(e.getDirectionLabel(n))||0)}const n=e.params,{wrapperEl:i,slidesEl:r,size:s,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,u=v(r,`.${e.params.slideClass}, swiper-slide`),h=l?e.virtual.slides.length:u.length;let d=[];const f=[],p=[];let m=n.slidesOffsetBefore;"function"==typeof m&&(m=n.slidesOffsetBefore.call(e));let y=n.slidesOffsetAfter;"function"==typeof y&&(y=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,E=e.slidesGrid.length;let T=n.spaceBetween,_=-m,C=0,I=0;if(void 0===s)return;"string"==typeof T&&T.indexOf("%")>=0?T=parseFloat(T.replace("%",""))/100*s:"string"==typeof T&&(T=parseFloat(T)),e.virtualSize=-T,u.forEach(e=>{o?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(g(i,"--swiper-centered-offset-before",""),g(i,"--swiper-centered-offset-after",""));const A=n.grid&&n.grid.rows>1&&e.grid;let x;A?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();const k="auto"===n.slidesPerView&&n.breakpoints&&Object.keys(n.breakpoints).filter(e=>void 0!==n.breakpoints[e].slidesPerView).length>0;for(let g=0;g<h;g+=1){let i;if(x=0,u[g]&&(i=u[g]),A&&e.grid.updateSlide(g,i,u),!u[g]||"none"!==b(i,"display")){if("auto"===n.slidesPerView){k&&(u[g].style[e.getDirectionLabel("width")]="");const r=getComputedStyle(i),s=i.style.transform,o=i.style.webkitTransform;if(s&&(i.style.transform="none"),o&&(i.style.webkitTransform="none"),n.roundLengths)x=e.isHorizontal()?S(i,"width"):S(i,"height");else{const e=t(r,"width"),n=t(r,"padding-left"),s=t(r,"padding-right"),o=t(r,"margin-left"),a=t(r,"margin-right"),l=r.getPropertyValue("box-sizing");if(l&&"border-box"===l)x=e+o+a;else{const{clientWidth:t,offsetWidth:r}=i;x=e+n+s+o+a+(r-t)}}s&&(i.style.transform=s),o&&(i.style.webkitTransform=o),n.roundLengths&&(x=Math.floor(x))}else x=(s-(n.slidesPerView-1)*T)/n.slidesPerView,n.roundLengths&&(x=Math.floor(x)),u[g]&&(u[g].style[e.getDirectionLabel("width")]=`${x}px`);u[g]&&(u[g].swiperSlideSize=x),p.push(x),n.centeredSlides?(_=_+x/2+C/2+T,0===C&&0!==g&&(_=_-s/2-T),0===g&&(_=_-s/2-T),Math.abs(_)<.001&&(_=0),n.roundLengths&&(_=Math.floor(_)),I%n.slidesPerGroup===0&&d.push(_),f.push(_)):(n.roundLengths&&(_=Math.floor(_)),(I-Math.min(e.params.slidesPerGroupSkip,I))%e.params.slidesPerGroup===0&&d.push(_),f.push(_),_=_+x+T),e.virtualSize+=x+T,C=x,I+=1}}if(e.virtualSize=Math.max(e.virtualSize,s)+y,o&&a&&("slide"===n.effect||"coverflow"===n.effect)&&(i.style.width=`${e.virtualSize+T}px`),n.setWrapperSize&&(i.style[e.getDirectionLabel("width")]=`${e.virtualSize+T}px`),A&&e.grid.updateWrapperSize(x,d),!n.centeredSlides){const t=[];for(let i=0;i<d.length;i+=1){let r=d[i];n.roundLengths&&(r=Math.floor(r)),d[i]<=e.virtualSize-s&&t.push(r)}d=t,Math.floor(e.virtualSize-s)-Math.floor(d[d.length-1])>1&&d.push(e.virtualSize-s)}if(l&&n.loop){const t=p[0]+T;if(n.slidesPerGroup>1){const i=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),r=t*n.slidesPerGroup;for(let e=0;e<i;e+=1)d.push(d[d.length-1]+r)}for(let i=0;i<e.virtual.slidesBefore+e.virtual.slidesAfter;i+=1)1===n.slidesPerGroup&&d.push(d[d.length-1]+t),f.push(f[f.length-1]+t),e.virtualSize+=t}if(0===d.length&&(d=[0]),0!==T){const t=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter((e,t)=>!(n.cssMode&&!n.loop)||t!==u.length-1).forEach(e=>{e.style[t]=`${T}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let e=0;p.forEach(t=>{e+=t+(T||0)}),e-=T;const t=e>s?e-s:0;d=d.map(e=>e<=0?-m:e>t?t+y:e)}if(n.centerInsufficientSlides){let e=0;p.forEach(t=>{e+=t+(T||0)}),e-=T;const t=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(e+t<s){const n=(s-e-t)/2;d.forEach((e,t)=>{d[t]=e-n}),f.forEach((e,t)=>{f[t]=e+n})}}if(Object.assign(e,{slides:u,snapGrid:d,slidesGrid:f,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){g(i,"--swiper-centered-offset-before",-d[0]+"px"),g(i,"--swiper-centered-offset-after",e.size/2-p[p.length-1]/2+"px");const t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(e=>e+t),e.slidesGrid=e.slidesGrid.map(e=>e+n)}if(h!==c&&e.emit("slidesLengthChange"),d.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),f.length!==E&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!(l||n.cssMode||"slide"!==n.effect&&"fade"!==n.effect)){const t=`${n.containerModifierClass}backface-hidden`,i=e.el.classList.contains(t);h<=n.maxBackfaceHiddenSlides?i||e.el.classList.add(t):i&&e.el.classList.remove(t)}},updateAutoHeight:function(e){const t=this,n=[],i=t.virtual&&t.params.virtual.enabled;let r,s=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const o=e=>i?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(e=>{n.push(e)});else for(r=0;r<Math.ceil(t.params.slidesPerView);r+=1){const e=t.activeIndex+r;if(e>t.slides.length&&!i)break;n.push(o(e))}else n.push(o(t.activeIndex));for(r=0;r<n.length;r+=1)if(void 0!==n[r]){const e=n[r].offsetHeight;s=e>s?e:s}(s||0===s)&&(t.wrapperEl.style.height=`${s}px`)},updateSlidesOffset:function(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let i=0;i<t.length;i+=1)t[i].swiperSlideOffset=(e.isHorizontal()?t[i].offsetLeft:t[i].offsetTop)-n-e.cssOverflowAdjustment()},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:i,rtlTranslate:r,snapGrid:s}=t;if(0===i.length)return;void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();let o=-e;r&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;"string"==typeof a&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:"string"==typeof a&&(a=parseFloat(a));for(let l=0;l<i.length;l+=1){const e=i[l];let c=e.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=i[0].swiperSlideOffset);const u=(o+(n.centeredSlides?t.minTranslate():0)-c)/(e.swiperSlideSize+a),h=(o-s[0]+(n.centeredSlides?t.minTranslate():0)-c)/(e.swiperSlideSize+a),d=-(o-c),f=d+t.slidesSizesGrid[l],p=d>=0&&d<=t.size-t.slidesSizesGrid[l],g=d>=0&&d<t.size-1||f>1&&f<=t.size||d<=0&&f>=t.size;g&&(t.visibleSlides.push(e),t.visibleSlidesIndexes.push(l)),D(e,g,n.slideVisibleClass),D(e,p,n.slideFullyVisibleClass),e.progress=r?-u:u,e.originalProgress=r?-h:h}},updateProgress:function(e){const t=this;if(void 0===e){const n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}const n=t.params,i=t.maxTranslate()-t.minTranslate();let{progress:r,isBeginning:s,isEnd:o,progressLoop:a}=t;const l=s,c=o;if(0===i)r=0,s=!0,o=!0;else{r=(e-t.minTranslate())/i;const n=Math.abs(e-t.minTranslate())<1,a=Math.abs(e-t.maxTranslate())<1;s=n||r<=0,o=a||r>=1,n&&(r=0),a&&(r=1)}if(n.loop){const n=t.getSlideIndexByData(0),i=t.getSlideIndexByData(t.slides.length-1),r=t.slidesGrid[n],s=t.slidesGrid[i],o=t.slidesGrid[t.slidesGrid.length-1],l=Math.abs(e);a=l>=r?(l-r)/o:(l+o-s)/o,a>1&&(a-=1)}Object.assign(t,{progress:r,progressLoop:a,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!s||c&&!o)&&t.emit("fromEdge"),t.emit("progress",r)},updateSlidesClasses:function(){const e=this,{slides:t,params:n,slidesEl:i,activeIndex:r}=e,s=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,a=e=>v(i,`.${n.slideClass}${e}, swiper-slide${e}`)[0];let l,c,u;if(s)if(n.loop){let t=r-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),l=a(`[data-swiper-slide-index="${t}"]`)}else l=a(`[data-swiper-slide-index="${r}"]`);else o?(l=t.find(e=>e.column===r),u=t.find(e=>e.column===r+1),c=t.find(e=>e.column===r-1)):l=t[r];l&&(o||(u=function(e,t){const n=[];for(;e.nextElementSibling;){const i=e.nextElementSibling;t?i.matches(t)&&n.push(i):n.push(i),e=i}return n}(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),c=function(e,t){const n=[];for(;e.previousElementSibling;){const i=e.previousElementSibling;t?i.matches(t)&&n.push(i):n.push(i),e=i}return n}(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&0===!c&&(c=t[t.length-1]))),t.forEach(e=>{M(e,e===l,n.slideActiveClass),M(e,e===u,n.slideNextClass),M(e,e===c,n.slidePrevClass)}),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:i,params:r,activeIndex:s,realIndex:o,snapIndex:a}=t;let l,c=e;const u=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(void 0===c&&(c=function(e){const{slidesGrid:t,params:n}=e,i=e.rtlTranslate?e.translate:-e.translate;let r;for(let s=0;s<t.length;s+=1)void 0!==t[s+1]?i>=t[s]&&i<t[s+1]-(t[s+1]-t[s])/2?r=s:i>=t[s]&&i<t[s+1]&&(r=s+1):i>=t[s]&&(r=s);return n.normalizeSlideIndex&&(r<0||void 0===r)&&(r=0),r}(t)),i.indexOf(n)>=0)l=i.indexOf(n);else{const e=Math.min(r.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/r.slidesPerGroup)}if(l>=i.length&&(l=i.length-1),c===s&&!t.params.loop)return void(l!==a&&(t.snapIndex=l,t.emit("snapIndexChange")));if(c===s&&t.params.loop&&t.virtual&&t.params.virtual.enabled)return void(t.realIndex=u(c));const h=t.grid&&r.grid&&r.grid.rows>1;let d;if(t.virtual&&r.virtual.enabled&&r.loop)d=u(c);else if(h){const e=t.slides.find(e=>e.column===c);let n=parseInt(e.getAttribute("data-swiper-slide-index"),10);Number.isNaN(n)&&(n=Math.max(t.slides.indexOf(e),0)),d=Math.floor(n/r.grid.rows)}else if(t.slides[c]){const e=t.slides[c].getAttribute("data-swiper-slide-index");d=e?parseInt(e,10):c}else d=c;Object.assign(t,{previousSnapIndex:a,snapIndex:l,previousRealIndex:o,realIndex:d,previousIndex:s,activeIndex:c}),t.initialized&&O(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==d&&t.emit("realIndexChange"),t.emit("slideChange"))},updateClickedSlide:function(e,t){const n=this,i=n.params;let r=e.closest(`.${i.slideClass}, swiper-slide`);!r&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(e=>{!r&&e.matches&&e.matches(`.${i.slideClass}, swiper-slide`)&&(r=e)});let s,o=!1;if(r)for(let a=0;a<n.slides.length;a+=1)if(n.slides[a]===r){o=!0,s=a;break}if(!r||!o)return n.clickedSlide=void 0,void(n.clickedIndex=void 0);n.clickedSlide=r,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=s,i.slideToClickedSlide&&void 0!==n.clickedIndex&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}},translate:{getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:n,translate:i,wrapperEl:r}=this;if(t.virtualTranslate)return n?-i:i;if(t.cssMode)return i;let s=h(r,e);return s+=this.cssOverflowAdjustment(),n&&(s=-s),s||0},setTranslate:function(e,t){const n=this,{rtlTranslate:i,params:r,wrapperEl:s,progress:o}=n;let a,l=0,c=0;n.isHorizontal()?l=i?-e:e:c=e,r.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:c,r.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-c:r.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${l}px, ${c}px, 0px)`);const u=n.maxTranslate()-n.minTranslate();a=0===u?0:(e-n.minTranslate())/u,a!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,n,i,r){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0),void 0===i&&(i=!0);const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let u;if(u=i&&e>l?l:i&&e<c?c:e,s.updateProgress(u),o.cssMode){const e=s.isHorizontal();if(0===t)a[e?"scrollLeft":"scrollTop"]=-u;else{if(!s.support.smoothScroll)return m({swiper:s,targetPosition:-u,side:e?"left":"top"}),!0;a.scrollTo({[e?"left":"top"]:-u,behavior:"smooth"})}return!0}return 0===t?(s.setTransition(0),s.setTranslate(u),n&&(s.emit("beforeTransitionStart",t,r),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(u),n&&(s.emit("beforeTransitionStart",t,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=0===e?"0ms":""),n.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const n=this,{params:i}=n;i.cssMode||(i.autoHeight&&n.updateAutoHeight(),L({swiper:n,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const n=this,{params:i}=n;n.animating=!1,i.cssMode||(n.setTransition(0),L({swiper:n,runCallbacks:e,direction:t,step:"End"}))}},slide:{slideTo:function(e,t,n,i,r){void 0===e&&(e=0),void 0===n&&(n=!0),"string"==typeof e&&(e=parseInt(e,10));const s=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:h,rtlTranslate:d,wrapperEl:f,enabled:p}=s;if(!p&&!i&&!r||s.destroyed||s.animating&&a.preventInteractionOnTransition)return!1;void 0===t&&(t=s.params.speed);const g=Math.min(s.params.slidesPerGroupSkip,o);let v=g+Math.floor((o-g)/s.params.slidesPerGroup);v>=l.length&&(v=l.length-1);const y=-l[v];if(a.normalizeSlideIndex)for(let m=0;m<c.length;m+=1){const e=-Math.floor(100*y),t=Math.floor(100*c[m]),n=Math.floor(100*c[m+1]);void 0!==c[m+1]?e>=t&&e<n-(n-t)/2?o=m:e>=t&&e<n&&(o=m+1):e>=t&&(o=m)}if(s.initialized&&o!==h){if(!s.allowSlideNext&&(d?y>s.translate&&y>s.minTranslate():y<s.translate&&y<s.minTranslate()))return!1;if(!s.allowSlidePrev&&y>s.translate&&y>s.maxTranslate()&&(h||0)!==o)return!1}let w;o!==(u||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(y),w=o>h?"next":o<h?"prev":"reset";const b=s.virtual&&s.params.virtual.enabled;if(!(b&&r)&&(d&&-y===s.translate||!d&&y===s.translate))return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==a.effect&&s.setTranslate(y),"reset"!==w&&(s.transitionStart(n,w),s.transitionEnd(n,w)),!1;if(a.cssMode){const e=s.isHorizontal(),n=d?y:-y;if(0===t)b&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),b&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[e?"scrollLeft":"scrollTop"]=n})):f[e?"scrollLeft":"scrollTop"]=n,b&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1});else{if(!s.support.smoothScroll)return m({swiper:s,targetPosition:n,side:e?"left":"top"}),!0;f.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}const E=k().isSafari;return b&&!r&&E&&s.isElement&&s.virtual.update(!1,!1,o),s.setTransition(t),s.setTranslate(y),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(n,w),0===t?s.transitionEnd(n,w):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,w))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,n,i){if(void 0===e&&(e=0),void 0===n&&(n=!0),"string"==typeof e){e=parseInt(e,10)}const r=this;if(r.destroyed)return;void 0===t&&(t=r.params.speed);const s=r.grid&&r.params.grid&&r.params.grid.rows>1;let o=e;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)o+=r.virtual.slidesBefore;else{let e;if(s){const t=o*r.params.grid.rows;e=r.slides.find(e=>1*e.getAttribute("data-swiper-slide-index")===t).column}else e=r.getSlideIndexByData(o);const t=s?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:n}=r.params;let a=r.params.slidesPerView;"auto"===a?a=r.slidesPerViewDynamic():(a=Math.ceil(parseFloat(r.params.slidesPerView,10)),n&&a%2==0&&(a+=1));let l=t-e<a;if(n&&(l=l||e<Math.ceil(a/2)),i&&n&&"auto"!==r.params.slidesPerView&&!s&&(l=!1),l){const i=n?e<r.activeIndex?"prev":"next":e-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:i,slideTo:!0,activeSlideIndex:"next"===i?e+1:e-t+1,slideRealIndex:"next"===i?r.realIndex:void 0})}if(s){const e=o*r.params.grid.rows;o=r.slides.find(t=>1*t.getAttribute("data-swiper-slide-index")===e).column}else o=r.getSlideIndexByData(o)}return requestAnimationFrame(()=>{r.slideTo(o,t,n,i)}),r},slideNext:function(e,t,n){void 0===t&&(t=!0);const i=this,{enabled:r,params:s,animating:o}=i;if(!r||i.destroyed)return i;void 0===e&&(e=i.params.speed);let a=s.slidesPerGroup;"auto"===s.slidesPerView&&1===s.slidesPerGroup&&s.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<s.slidesPerGroupSkip?1:a,c=i.virtual&&s.virtual.enabled;if(s.loop){if(o&&!c&&s.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+l,e,t,n)}),!0}return s.rewind&&i.isEnd?i.slideTo(0,e,t,n):i.slideTo(i.activeIndex+l,e,t,n)},slidePrev:function(e,t,n){void 0===t&&(t=!0);const i=this,{params:r,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=i;if(!l||i.destroyed)return i;void 0===e&&(e=i.params.speed);const u=i.virtual&&r.virtual.enabled;if(r.loop){if(c&&!u&&r.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}function h(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const d=h(a?i.translate:-i.translate),f=s.map(e=>h(e)),p=r.freeMode&&r.freeMode.enabled;let g=s[f.indexOf(d)-1];if(void 0===g&&(r.cssMode||p)){let e;s.forEach((t,n)=>{d>=t&&(e=n)}),void 0!==e&&(g=p?s[e]:s[e>0?e-1:e])}let m=0;if(void 0!==g&&(m=o.indexOf(g),m<0&&(m=i.activeIndex-1),"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(m=m-i.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),r.rewind&&i.isBeginning){const r=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(r,e,t,n)}return r.loop&&0===i.activeIndex&&r.cssMode?(requestAnimationFrame(()=>{i.slideTo(m,e,t,n)}),!0):i.slideTo(m,e,t,n)},slideReset:function(e,t,n){void 0===t&&(t=!0);const i=this;if(!i.destroyed)return void 0===e&&(e=i.params.speed),i.slideTo(i.activeIndex,e,t,n)},slideToClosest:function(e,t,n,i){void 0===t&&(t=!0),void 0===i&&(i=.5);const r=this;if(r.destroyed)return;void 0===e&&(e=r.params.speed);let s=r.activeIndex;const o=Math.min(r.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[a]){const e=r.snapGrid[a];l-e>(r.snapGrid[a+1]-e)*i&&(s+=r.params.slidesPerGroup)}else{const e=r.snapGrid[a-1];l-e<=(r.snapGrid[a]-e)*i&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,e,t,n)},slideToClickedSlide:function(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,i="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let r,s=e.getSlideIndexWhenGrid(e.clickedIndex);const o=e.isElement?"swiper-slide":`.${t.slideClass}`,a=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;r=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(r):s>(a?(e.slides.length-i)/2-(e.params.grid.rows-1):e.slides.length-i)?(e.loopFix(),s=e.getSlideIndex(v(n,`${o}[data-swiper-slide-index="${r}"]`)[0]),c(()=>{e.slideTo(s)})):e.slideTo(s)}else e.slideTo(s)}},loop:{loopCreate:function(e,t){const n=this,{params:i,slidesEl:r}=n;if(!i.loop||n.virtual&&n.params.virtual.enabled)return;const s=()=>{v(r,`.${i.slideClass}, swiper-slide`).forEach((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})},o=n.grid&&i.grid&&i.grid.rows>1;i.loopAddBlankSlides&&(i.slidesPerGroup>1||o)&&(()=>{const e=v(r,`.${i.slideBlankClass}`);e.forEach(e=>{e.remove()}),e.length>0&&(n.recalcSlides(),n.updateSlides())})();const a=i.slidesPerGroup*(o?i.grid.rows:1),l=n.slides.length%a!==0,c=o&&n.slides.length%i.grid.rows!==0,u=e=>{for(let t=0;t<e;t+=1){const e=n.isElement?w("swiper-slide",[i.slideBlankClass]):w("div",[i.slideClass,i.slideBlankClass]);n.slidesEl.append(e)}};if(l){if(i.loopAddBlankSlides){u(a-n.slides.length%a),n.recalcSlides(),n.updateSlides()}else y("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else if(c){if(i.loopAddBlankSlides){u(i.grid.rows-n.slides.length%i.grid.rows),n.recalcSlides(),n.updateSlides()}else y("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else s();n.loopFix({slideRealIndex:e,direction:i.centeredSlides?void 0:"next",initial:t})},loopFix:function(e){let{slideRealIndex:t,slideTo:n=!0,direction:i,setTranslate:r,activeSlideIndex:s,initial:o,byController:a,byMousewheel:l}=void 0===e?{}:e;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:u,allowSlidePrev:h,allowSlideNext:d,slidesEl:f,params:p}=c,{centeredSlides:g,initialSlide:m}=p;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&p.virtual.enabled)return n&&(p.centeredSlides||0!==c.snapIndex?p.centeredSlides&&c.snapIndex<p.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0):c.slideTo(c.virtual.slides.length,0,!1,!0)),c.allowSlidePrev=h,c.allowSlideNext=d,void c.emit("loopFix");let v=p.slidesPerView;"auto"===v?v=c.slidesPerViewDynamic():(v=Math.ceil(parseFloat(p.slidesPerView,10)),g&&v%2==0&&(v+=1));const w=p.slidesPerGroupAuto?v:p.slidesPerGroup;let b=g?Math.max(w,Math.ceil(v/2)):w;b%w!==0&&(b+=w-b%w),b+=p.loopAdditionalSlides,c.loopedSlides=b;const E=c.grid&&p.grid&&p.grid.rows>1;u.length<v+b||"cards"===c.params.effect&&u.length<v+2*b?y("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):E&&"row"===p.grid.fill&&y("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const S=[],T=[],_=E?Math.ceil(u.length/p.grid.rows):u.length,C=o&&_-m<v&&!g;let I=C?m:c.activeIndex;void 0===s?s=c.getSlideIndex(u.find(e=>e.classList.contains(p.slideActiveClass))):I=s;const A="next"===i||!i,x="prev"===i||!i;let k=0,D=0;const M=(E?u[s].column:s)+(g&&void 0===r?-v/2+.5:0);if(M<b){k=Math.max(b-M,w);for(let e=0;e<b-M;e+=1){const t=e-Math.floor(e/_)*_;if(E){const e=_-t-1;for(let t=u.length-1;t>=0;t-=1)u[t].column===e&&S.push(t)}else S.push(_-t-1)}}else if(M+v>_-b){D=Math.max(M-(_-2*b),w),C&&(D=Math.max(D,v-_+m+1));for(let e=0;e<D;e+=1){const t=e-Math.floor(e/_)*_;E?u.forEach((e,n)=>{e.column===t&&T.push(n)}):T.push(t)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),"cards"===c.params.effect&&u.length<v+2*b&&(T.includes(s)&&T.splice(T.indexOf(s),1),S.includes(s)&&S.splice(S.indexOf(s),1)),x&&S.forEach(e=>{u[e].swiperLoopMoveDOM=!0,f.prepend(u[e]),u[e].swiperLoopMoveDOM=!1}),A&&T.forEach(e=>{u[e].swiperLoopMoveDOM=!0,f.append(u[e]),u[e].swiperLoopMoveDOM=!1}),c.recalcSlides(),"auto"===p.slidesPerView?c.updateSlides():E&&(S.length>0&&x||T.length>0&&A)&&c.slides.forEach((e,t)=>{c.grid.updateSlide(t,e,c.slides)}),p.watchSlidesProgress&&c.updateSlidesOffset(),n)if(S.length>0&&x){if(void 0===t){const e=c.slidesGrid[I],t=c.slidesGrid[I+k]-e;l?c.setTranslate(c.translate-t):(c.slideTo(I+Math.ceil(k),0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-t,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-t))}else if(r){const e=E?S.length/p.grid.rows:S.length;c.slideTo(c.activeIndex+e,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(T.length>0&&A)if(void 0===t){const e=c.slidesGrid[I],t=c.slidesGrid[I-D]-e;l?c.setTranslate(c.translate-t):(c.slideTo(I-D,0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-t,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-t))}else{const e=E?T.length/p.grid.rows:T.length;c.slideTo(c.activeIndex-e,0,!1,!0)}if(c.allowSlidePrev=h,c.allowSlideNext=d,c.controller&&c.controller.control&&!a){const e={slideRealIndex:t,direction:i,setTranslate:r,activeSlideIndex:s,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(t=>{!t.destroyed&&t.params.loop&&t.loopFix({...e,slideTo:t.params.slidesPerView===p.slidesPerView&&n})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...e,slideTo:c.controller.control.params.slidesPerView===p.slidesPerView&&n})}c.emit("loopFix")},loopDestroy:function(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const i=[];e.slides.forEach(e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;i[t]=e}),e.slides.forEach(e=>{e.removeAttribute("data-swiper-slide-index")}),i.forEach(e=>{n.append(e)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}},grabCursor:{setGrabCursor:function(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})},unsetGrabCursor:function(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}},events:{attachEvents:function(){const e=this,{params:t}=e;e.onTouchStart=V.bind(e),e.onTouchMove=F.bind(e),e.onTouchEnd=B.bind(e),e.onDocumentTouchStart=$.bind(e),t.cssMode&&(e.onScroll=z.bind(e)),e.onClick=j.bind(e),e.onLoad=G.bind(e),q(e,"on")},detachEvents:function(){q(this,"off")}},breakpoints:{setBreakpoint:function(){const e=this,{realIndex:t,initialized:n,params:i,el:r}=e,s=i.breakpoints;if(!s||s&&0===Object.keys(s).length)return;const a=o(),l="window"!==i.breakpointsBase&&i.breakpointsBase?"container":i.breakpointsBase,c=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?e.el:a.querySelector(i.breakpointsBase),u=e.getBreakpoint(s,l,c);if(!u||e.currentBreakpoint===u)return;const h=(u in s?s[u]:void 0)||e.originalParams,d=H(e,i),f=H(e,h),g=e.params.grabCursor,m=h.grabCursor,v=i.enabled;d&&!f?(r.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&f&&(r.classList.add(`${i.containerModifierClass}grid`),(h.grid.fill&&"column"===h.grid.fill||!h.grid.fill&&"column"===i.grid.fill)&&r.classList.add(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),g&&!m?e.unsetGrabCursor():!g&&m&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(t=>{if(void 0===h[t])return;const n=i[t]&&i[t].enabled,r=h[t]&&h[t].enabled;n&&!r&&e[t].disable(),!n&&r&&e[t].enable()});const y=h.direction&&h.direction!==i.direction,w=i.loop&&(h.slidesPerView!==i.slidesPerView||y),b=i.loop;y&&n&&e.changeDirection(),p(e.params,h);const E=e.params.enabled,S=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),v&&!E?e.disable():!v&&E&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",h),n&&(w?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&S?(e.loopCreate(t),e.updateSlides()):b&&!S&&e.loopDestroy()),e.emit("breakpoint",h)},getBreakpoint:function(e,t,n){if(void 0===t&&(t="window"),!e||"container"===t&&!n)return;let i=!1;const r=l(),s="window"===t?r.innerHeight:n.clientHeight,o=Object.keys(e).map(e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:s*t,point:e}}return{value:e,point:e}});o.sort((e,t)=>parseInt(e.value,10)-parseInt(t.value,10));for(let a=0;a<o.length;a+=1){const{point:e,value:s}=o[a];"window"===t?r.matchMedia(`(min-width: ${s}px)`).matches&&(i=e):s<=n.clientWidth&&(i=e)}return i||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:i}=n;if(i){const t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*i;e.isLocked=e.size>n}else e.isLocked=1===e.snapGrid.length;!0===n.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===n.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:n,rtl:i,el:r,device:s}=e,o=function(e,t){const n=[];return e.forEach(e=>{"object"==typeof e?Object.keys(e).forEach(i=>{e[i]&&n.push(t+i)}):"string"==typeof e&&n.push(t+e)}),n}(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:i},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&"column"===n.grid.fill},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),r.classList.add(...t),e.emitContainerClasses()},removeClasses:function(){const{el:e,classNames:t}=this;e&&"string"!=typeof e&&(e.classList.remove(...t),this.emitContainerClasses())}}},Q={};class Y{constructor(){let e,t;for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];1===i.length&&i[0].constructor&&"Object"===Object.prototype.toString.call(i[0]).slice(8,-1)?t=i[0]:[e,t]=i,t||(t={}),t=p({},t),e&&!t.el&&(t.el=e);const s=o();if(t.el&&"string"==typeof t.el&&s.querySelectorAll(t.el).length>1){const e=[];return s.querySelectorAll(t.el).forEach(n=>{const i=p({},t,{el:n});e.push(new Y(i))}),e}const a=this;a.__swiper__=!0,a.support=A(),a.device=x({userAgent:t.userAgent}),a.browser=k(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],t.modules&&Array.isArray(t.modules)&&a.modules.push(...t.modules);const l={};a.modules.forEach(e=>{e({params:t,swiper:a,extendParams:K(t,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const c=p({},W,l);return a.params=p({},c,Q,t),a.originalParams=p({},a.params),a.passedParams=p({},t),a.params&&a.params.on&&Object.keys(a.params.on).forEach(e=>{a.on(e,a.params.on[e])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===a.params.direction,isVertical:()=>"vertical"===a.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:n}=this,i=E(v(t,`.${n.slideClass}, swiper-slide`)[0]);return E(e)-i}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>1*t.getAttribute("data-swiper-slide-index")===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&("column"===this.params.grid.fill?e=Math.floor(e/this.params.grid.rows):"row"===this.params.grid.fill&&(e%=Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=v(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const i=n.minTranslate(),r=(n.maxTranslate()-i)*e+i;n.translateTo(r,void 0===t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass)).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(n=>{const i=e.getSlideClasses(n);t.push({slideEl:n,classNames:i}),e.emit("_slideClass",n,i)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:n,slides:i,slidesGrid:r,slidesSizesGrid:s,size:o,activeIndex:a}=this;let l=1;if("number"==typeof n.slidesPerView)return n.slidesPerView;if(n.centeredSlides){let e,t=i[a]?Math.ceil(i[a].swiperSlideSize):0;for(let n=a+1;n<i.length;n+=1)i[n]&&!e&&(t+=Math.ceil(i[n].swiperSlideSize),l+=1,t>o&&(e=!0));for(let n=a-1;n>=0;n-=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,l+=1,t>o&&(e=!0))}else if("current"===e)for(let c=a+1;c<i.length;c+=1){(t?r[c]+s[c]-r[a]<o:r[c]-r[a]<o)&&(l+=1)}else for(let c=a-1;c>=0;c-=1){r[a]-r[c]<o&&(l+=1)}return l}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;function i(){const t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let r;if(n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(t=>{t.complete&&N(e,t)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),n.freeMode&&n.freeMode.enabled&&!n.cssMode)i(),n.autoHeight&&e.updateAutoHeight();else{if(("auto"===n.slidesPerView||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){const t=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;r=e.slideTo(t.length-1,0,!1,!0)}else r=e.slideTo(e.activeIndex,0,!1,!0);r||i()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const n=this,i=n.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(n.el.classList.remove(`${n.params.containerModifierClass}${i}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(t=>{"vertical"===e?t.style.width="":t.style.height=""}),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if("string"==typeof n&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(n&&n.shadowRoot&&n.shadowRoot.querySelector){return n.shadowRoot.querySelector(i())}return v(n,i())[0]})();return!r&&t.params.createElements&&(r=w("div",t.params.wrapperClass),n.append(r),v(n,`.${t.params.slideClass}`).forEach(e=>{r.append(e)})),Object.assign(t,{el:n,wrapperEl:r,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:r,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:"rtl"===n.dir.toLowerCase()||"rtl"===b(n,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===b(n,"direction")),wrongRTL:"-webkit-box"===b(r,"display")}),!0}init(e){const t=this;if(t.initialized)return t;if(!1===t.mount(e))return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const n=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(e=>{e.complete?N(t,e):e.addEventListener("load",e=>{N(t,e.target)})}),O(t),t.initialized=!0,O(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const n=this,{params:i,el:r,wrapperEl:s,slides:o}=n;return void 0===n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),t&&(n.removeClasses(),r&&"string"!=typeof r&&r.removeAttribute("style"),s&&s.removeAttribute("style"),o&&o.length&&o.forEach(e=>{e.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(e=>{n.off(e)}),!1!==e&&(n.el&&"string"!=typeof n.el&&(n.el.swiper=null),function(e){const t=e;Object.keys(t).forEach(e=>{try{t[e]=null}catch(n){}try{delete t[e]}catch(n){}})}(n)),n.destroyed=!0),null}static extendDefaults(e){p(Q,e)}static get extendedDefaults(){return Q}static get defaults(){return W}static installModule(e){Y.prototype.__modules__||(Y.prototype.__modules__=[]);const t=Y.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(e=>Y.installModule(e)),Y):(Y.installModule(e),Y)}}function J(e){let{swiper:t,extendParams:n,on:i,emit:r}=e;function s(e){let n;return e&&"string"==typeof e&&t.isElement&&(n=t.el.querySelector(e)||t.hostEl.querySelector(e),n)?n:(e&&("string"==typeof e&&(n=[...document.querySelectorAll(e)]),t.params.uniqueNavElements&&"string"==typeof e&&n&&n.length>1&&1===t.el.querySelectorAll(e).length?n=t.el.querySelector(e):n&&1===n.length&&(n=n[0])),e&&!n?e:n)}function o(e,n){const i=t.params.navigation;(e=T(e)).forEach(e=>{e&&(e.classList[n?"add":"remove"](...i.disabledClass.split(" ")),"BUTTON"===e.tagName&&(e.disabled=n),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](i.lockClass))})}function a(){const{nextEl:e,prevEl:n}=t.navigation;if(t.params.loop)return o(n,!1),void o(e,!1);o(n,t.isBeginning&&!t.params.rewind),o(e,t.isEnd&&!t.params.rewind)}function l(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),r("navigationPrev"))}function c(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),r("navigationNext"))}function u(){const e=t.params.navigation;if(t.params.navigation=function(e,t,n,i){return e.params.createElements&&Object.keys(i).forEach(r=>{if(!n[r]&&!0===n.auto){let s=v(e.el,`.${i[r]}`)[0];s||(s=w("div",i[r]),s.className=i[r],e.el.append(s)),n[r]=s,t[r]=s}}),n}(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;let n=s(e.nextEl),i=s(e.prevEl);Object.assign(t.navigation,{nextEl:n,prevEl:i}),n=T(n),i=T(i);const r=(n,i)=>{n&&n.addEventListener("click","next"===i?c:l),!t.enabled&&n&&n.classList.add(...e.lockClass.split(" "))};n.forEach(e=>r(e,"next")),i.forEach(e=>r(e,"prev"))}function h(){let{nextEl:e,prevEl:n}=t.navigation;e=T(e),n=T(n);const i=(e,n)=>{e.removeEventListener("click","next"===n?c:l),e.classList.remove(...t.params.navigation.disabledClass.split(" "))};e.forEach(e=>i(e,"next")),n.forEach(e=>i(e,"prev"))}n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null},i("init",()=>{!1===t.params.navigation.enabled?d():(u(),a())}),i("toEdge fromEdge lock unlock",()=>{a()}),i("destroy",()=>{h()}),i("enable disable",()=>{let{nextEl:e,prevEl:n}=t.navigation;e=T(e),n=T(n),t.enabled?a():[...e,...n].filter(e=>!!e).forEach(e=>e.classList.add(t.params.navigation.lockClass))}),i("click",(e,n)=>{let{nextEl:i,prevEl:s}=t.navigation;i=T(i),s=T(s);const o=n.target;let a=s.includes(o)||i.includes(o);if(t.isElement&&!a){const e=n.path||n.composedPath&&n.composedPath();e&&(a=e.find(e=>i.includes(e)||s.includes(e)))}if(t.params.navigation.hideOnClick&&!a){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===o||t.pagination.el.contains(o)))return;let e;i.length?e=i[0].classList.contains(t.params.navigation.hiddenClass):s.length&&(e=s[0].classList.contains(t.params.navigation.hiddenClass)),r(!0===e?"navigationShow":"navigationHide"),[...i,...s].filter(e=>!!e).forEach(e=>e.classList.toggle(t.params.navigation.hiddenClass))}});const d=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(t.navigation,{enable:()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),u(),a()},disable:d,update:a,init:u,destroy:h})}Object.keys(X).forEach(e=>{Object.keys(X[e]).forEach(t=>{Y.prototype[t]=X[e][t]})}),Y.use([function(e){let{swiper:t,on:n,emit:i}=e;const r=l();let s=null,o=null;const a=()=>{t&&!t.destroyed&&t.initialized&&(i("beforeResize"),i("resize"))},c=()=>{t&&!t.destroyed&&t.initialized&&i("orientationchange")};n("init",()=>{t.params.resizeObserver&&void 0!==r.ResizeObserver?t&&!t.destroyed&&t.initialized&&(s=new ResizeObserver(e=>{o=r.requestAnimationFrame(()=>{const{width:n,height:i}=t;let r=n,s=i;e.forEach(e=>{let{contentBoxSize:n,contentRect:i,target:o}=e;o&&o!==t.el||(r=i?i.width:(n[0]||n).inlineSize,s=i?i.height:(n[0]||n).blockSize)}),r===n&&s===i||a()})}),s.observe(t.el)):(r.addEventListener("resize",a),r.addEventListener("orientationchange",c))}),n("destroy",()=>{o&&r.cancelAnimationFrame(o),s&&s.unobserve&&t.el&&(s.unobserve(t.el),s=null),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",c)})},function(e){let{swiper:t,extendParams:n,on:i,emit:r}=e;const s=[],o=l(),a=function(e,n){void 0===n&&(n={});const i=new(o.MutationObserver||o.WebkitMutationObserver)(e=>{if(t.__preventObserver__)return;if(1===e.length)return void r("observerUpdate",e[0]);const n=function(){r("observerUpdate",e[0])};o.requestAnimationFrame?o.requestAnimationFrame(n):o.setTimeout(n,0)});i.observe(e,{attributes:void 0===n.attributes||n.attributes,childList:t.isElement||(void 0===n.childList||n).childList,characterData:void 0===n.characterData||n.characterData}),s.push(i)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",()=>{if(t.params.observer){if(t.params.observeParents){const e=function(e){const t=[];let n=e.parentElement;for(;n;)t.push(n),n=n.parentElement;return t}(t.hostEl);for(let t=0;t<e.length;t+=1)a(e[t])}a(t.hostEl,{childList:t.params.observeSlideChildren}),a(t.wrapperEl,{attributes:!1})}}),i("destroy",()=>{s.forEach(e=>{e.disconnect()}),s.splice(0,s.length)})}]);var Z={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},te={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,l=a?e[r+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ee(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length?n[e.charAt(r)]:0;++r;const o=r<e.length?n[e.charAt(r)]:64;++r;const a=r<e.length?n[e.charAt(r)]:64;if(++r,null==t||null==s||null==o||null==a)throw new ne;const l=t<<2|s>>4;if(i.push(l),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ne extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ie=function(e){return function(e){const t=ee(e);return te.encodeByteArray(t,!0)}(e).replace(/\./g,"")};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const re=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,se=()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&function(e){try{return te.decodeString(e,!0)}catch(n){console.error("base64Decode failed: ",n)}return null}(e[1]);return t&&JSON.parse(t)},oe=()=>{try{return re()||(()=>{if("undefined"==typeof process)return;const e=Z.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||se()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},ae=e=>{const t=(e=>oe()?.emulatorHosts?.[e])(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},le=()=>oe()?.config;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ce{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}const he={};let de=!1;function fe(e,t){if("undefined"==typeof window||"undefined"==typeof document||!ue(window.location.host)||he[e]===t||he[e]||de)return;function n(e){return`__firebase__banner__${e}`}he[e]=t;const i="__firebase__banner",r=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(he))he[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function s(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{de=!0,function(){const e=document.getElementById(i);e&&e.remove()}()},e}function o(){const e=function(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}(i),t=n("text"),o=document.getElementById(t)||document.createElement("span"),a=n("learnmore"),l=document.getElementById(a)||document.createElement("a"),c=n("preprendIcon"),u=document.getElementById(c)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(l,a);const n=s();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(u,c),t.append(u,o,l,n),document.body.appendChild(t)}r?(o.innerText="Preview backend disconnected.",u.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(u.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',o.innerText="Preview backend running in this workspace."),o.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){return!function(){const e=oe()?.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(t){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class ge extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,me.prototype.create)}}class me{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(ve,(e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`})}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new ge(i,o,n)}}const ve=/\{\$([^}]+)}/g;function ye(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(we(n)&&we(s)){if(!ye(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function we(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e){return e&&e._delegate?e._delegate:e}class Ee{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ce;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(n)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:Se})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=Se){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=Se){return this.instances.has(e)}getOptions(e=Se){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(r)&&s.resolve(i)}return i}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(n)??new Set;i.add(e),this.onInitCallbacks.set(n,i);const r=this.instances.get(n);return r&&e(r,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===Se?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}var i;return n||null}normalizeInstanceIdentifier(e=Se){return this.component?this.component.multipleInstances?e:Se:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class _e{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Te(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,Ie;(Ie=Ce||(Ce={}))[Ie.DEBUG=0]="DEBUG",Ie[Ie.VERBOSE=1]="VERBOSE",Ie[Ie.INFO=2]="INFO",Ie[Ie.WARN=3]="WARN",Ie[Ie.ERROR=4]="ERROR",Ie[Ie.SILENT=5]="SILENT";const Ae={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},xe=Ce.INFO,ke={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},De=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=ke[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Me{constructor(e){this.name=e,this._logLevel=xe,this._logHandler=De,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ae[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}let Ne,Pe;const Oe=new WeakMap,Le=new WeakMap,Re=new WeakMap,Ve=new WeakMap,Fe=new WeakMap;let Be={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Le.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Re.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ze(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ue(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Pe||(Pe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ge(this),t),ze(Oe.get(this))}:function(...t){return ze(e.apply(Ge(this),t))}:function(t,...n){const i=e.call(Ge(this),t,...n);return Re.set(i,t.sort?t.sort():[t]),ze(i)}}function je(e){return"function"==typeof e?Ue(e):(e instanceof IDBTransaction&&function(e){if(Le.has(e))return;const t=new Promise((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});Le.set(e,t)}(e),t=e,(Ne||(Ne=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,Be):e);var t}function ze(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(ze(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&Oe.set(t,e)}).catch(()=>{}),Fe.set(t,e),t}(e);if(Ve.has(e))return Ve.get(e);const t=je(e);return t!==e&&(Ve.set(e,t),Fe.set(t,e)),t}const Ge=e=>Fe.get(e);const $e=["get","getKey","getAll","getAllKeys","count"],qe=["put","add","delete","clear"],He=new Map;function We(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(He.get(t))return He.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=qe.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!$e.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return He.set(t,s),s}Be=(e=>({...e,get:(t,n,i)=>We(t,n)||e.get(t,n,i),has:(t,n)=>!!We(t,n)||e.has(t,n)}))(Be);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===t?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const Xe="@firebase/app",Qe="0.14.5",Ye=new Me("@firebase/app"),Je="@firebase/app-compat",Ze="@firebase/analytics-compat",et="@firebase/analytics",tt="@firebase/app-check-compat",nt="@firebase/app-check",it="@firebase/auth",rt="@firebase/auth-compat",st="@firebase/database",ot="@firebase/data-connect",at="@firebase/database-compat",lt="@firebase/functions",ct="@firebase/functions-compat",ut="@firebase/installations",ht="@firebase/installations-compat",dt="@firebase/messaging",ft="@firebase/messaging-compat",pt="@firebase/performance",gt="@firebase/performance-compat",mt="@firebase/remote-config",vt="@firebase/remote-config-compat",yt="@firebase/storage",wt="@firebase/storage-compat",bt="@firebase/firestore",Et="@firebase/ai",St="@firebase/firestore-compat",Tt="firebase",_t="[DEFAULT]",Ct={[Xe]:"fire-core",[Je]:"fire-core-compat",[et]:"fire-analytics",[Ze]:"fire-analytics-compat",[nt]:"fire-app-check",[tt]:"fire-app-check-compat",[it]:"fire-auth",[rt]:"fire-auth-compat",[st]:"fire-rtdb",[ot]:"fire-data-connect",[at]:"fire-rtdb-compat",[lt]:"fire-fn",[ct]:"fire-fn-compat",[ut]:"fire-iid",[ht]:"fire-iid-compat",[dt]:"fire-fcm",[ft]:"fire-fcm-compat",[pt]:"fire-perf",[gt]:"fire-perf-compat",[mt]:"fire-rc",[vt]:"fire-rc-compat",[yt]:"fire-gcs",[wt]:"fire-gcs-compat",[bt]:"fire-fst",[St]:"fire-fst-compat",[Et]:"fire-vertex","fire-js":"fire-js",[Tt]:"fire-js-all"},It=new Map,At=new Map,xt=new Map;function kt(e,t){try{e.container.addComponent(t)}catch(n){Ye.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Dt(e){const t=e.name;if(xt.has(t))return Ye.debug(`There were multiple attempts to register component ${t}.`),!1;xt.set(t,e);for(const n of It.values())kt(n,e);for(const n of At.values())kt(n,e);return!0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mt=new me("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ee("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i={name:_t,automaticDataCollectionEnabled:!0,...t},r=i.name;if("string"!=typeof r||!r)throw Mt.create("bad-app-name",{appName:String(r)});if(n||(n=le()),!n)throw Mt.create("no-options");const s=It.get(r);if(s){if(ye(n,s.options)&&ye(i,s.config))return s;throw Mt.create("duplicate-app",{appName:r})}const o=new _e(r);for(const l of xt.values())o.addComponent(l);const a=new Nt(n,i,o);return It.set(r,a),a}function Ot(e,t,n){let i=Ct[e]??e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),s=t.match(/\s|\//);if(r||s){const e=[`Unable to register library "${i}" with version "${t}":`];return r&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ye.warn(e.join(" "))}Dt(new Ee(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="firebase-heartbeat-store";let Rt=null;function Vt(){return Rt||(Rt=function(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=ze(o);return i&&o.addEventListener("upgradeneeded",e=>{i(ze(o.result),e.oldVersion,e.newVersion,ze(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Lt)}catch(n){console.warn(n)}}}).catch(e=>{throw Mt.create("idb-open",{originalErrorMessage:e.message})})),Rt}async function Ft(e,t){try{const n=(await Vt()).transaction(Lt,"readwrite"),i=n.objectStore(Lt);await i.put(t,Bt(e)),await n.done}catch(n){if(n instanceof ge)Ye.warn(n.message);else{const e=Mt.create("idb-set",{originalErrorMessage:n?.message});Ye.warn(e.message)}}}function Bt(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new zt(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=jt();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ye.warn(e)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=jt(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),Gt(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Gt(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=ie(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Ye.warn(e),""}}}function jt(){return(new Date).toISOString().substring(0,10)}class zt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{t(r.error?.message||"")}}catch(n){t(n)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Vt()).transaction(Lt),n=await t.objectStore(Lt).get(Bt(e));return await t.done,n}catch(t){if(t instanceof ge)Ye.warn(t.message);else{const e=Mt.create("idb-get",{originalErrorMessage:t?.message});Ye.warn(e.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Ft(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Ft(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Gt(e){return ie(JSON.stringify({version:2,heartbeats:e})).length}var $t;$t="",Dt(new Ee("platform-logger",e=>new Ke(e),"PRIVATE")),Dt(new Ee("heartbeat",e=>new Ut(e),"PRIVATE")),Ot(Xe,Qe,$t),Ot(Xe,Qe,"esm2020"),Ot("fire-js","");var qt,Ht="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(e,t,n){n||(n=0);const i=Array(16);if("string"==typeof t)for(var r=0;r<16;++r)i[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;r<16;++r)i[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];let s,o=e.g[3];s=t+(o^n&(r^o))+i[0]+3614090360&4294967295,s=o+(r^(t=n+(s<<7&4294967295|s>>>25))&(n^r))+i[1]+3905402710&4294967295,o=t+(s<<12&4294967295|s>>>20),s=r+(n^o&(t^n))+i[2]+606105819&4294967295,s=n+(t^(r=o+(s<<17&4294967295|s>>>15))&(o^t))+i[3]+3250441966&4294967295,s=t+(o^(n=r+(s<<22&4294967295|s>>>10))&(r^o))+i[4]+4118548399&4294967295,s=o+(r^(t=n+(s<<7&4294967295|s>>>25))&(n^r))+i[5]+1200080426&4294967295,o=t+(s<<12&4294967295|s>>>20),s=r+(n^o&(t^n))+i[6]+2821735955&4294967295,s=n+(t^(r=o+(s<<17&4294967295|s>>>15))&(o^t))+i[7]+4249261313&4294967295,s=t+(o^(n=r+(s<<22&4294967295|s>>>10))&(r^o))+i[8]+1770035416&4294967295,s=o+(r^(t=n+(s<<7&4294967295|s>>>25))&(n^r))+i[9]+2336552879&4294967295,o=t+(s<<12&4294967295|s>>>20),s=r+(n^o&(t^n))+i[10]+4294925233&4294967295,s=n+(t^(r=o+(s<<17&4294967295|s>>>15))&(o^t))+i[11]+2304563134&4294967295,s=t+(o^(n=r+(s<<22&4294967295|s>>>10))&(r^o))+i[12]+1804603682&4294967295,s=o+(r^(t=n+(s<<7&4294967295|s>>>25))&(n^r))+i[13]+4254626195&4294967295,o=t+(s<<12&4294967295|s>>>20),s=r+(n^o&(t^n))+i[14]+2792965006&4294967295,s=n+(t^(r=o+(s<<17&4294967295|s>>>15))&(o^t))+i[15]+1236535329&4294967295,s=t+(r^o&((n=r+(s<<22&4294967295|s>>>10))^r))+i[1]+4129170786&4294967295,s=o+(n^r&((t=n+(s<<5&4294967295|s>>>27))^n))+i[6]+3225465664&4294967295,o=t+(s<<9&4294967295|s>>>23),s=r+(t^n&(o^t))+i[11]+643717713&4294967295,s=n+(o^t&((r=o+(s<<14&4294967295|s>>>18))^o))+i[0]+3921069994&4294967295,s=t+(r^o&((n=r+(s<<20&4294967295|s>>>12))^r))+i[5]+3593408605&4294967295,s=o+(n^r&((t=n+(s<<5&4294967295|s>>>27))^n))+i[10]+38016083&4294967295,o=t+(s<<9&4294967295|s>>>23),s=r+(t^n&(o^t))+i[15]+3634488961&4294967295,s=n+(o^t&((r=o+(s<<14&4294967295|s>>>18))^o))+i[4]+3889429448&4294967295,s=t+(r^o&((n=r+(s<<20&4294967295|s>>>12))^r))+i[9]+568446438&4294967295,s=o+(n^r&((t=n+(s<<5&4294967295|s>>>27))^n))+i[14]+3275163606&4294967295,o=t+(s<<9&4294967295|s>>>23),s=r+(t^n&(o^t))+i[3]+4107603335&4294967295,s=n+(o^t&((r=o+(s<<14&4294967295|s>>>18))^o))+i[8]+1163531501&4294967295,s=t+(r^o&((n=r+(s<<20&4294967295|s>>>12))^r))+i[13]+2850285829&4294967295,s=o+(n^r&((t=n+(s<<5&4294967295|s>>>27))^n))+i[2]+4243563512&4294967295,o=t+(s<<9&4294967295|s>>>23),s=r+(t^n&(o^t))+i[7]+1735328473&4294967295,s=n+(o^t&((r=o+(s<<14&4294967295|s>>>18))^o))+i[12]+2368359562&4294967295,s=t+((n=r+(s<<20&4294967295|s>>>12))^r^o)+i[5]+4294588738&4294967295,s=o+((t=n+(s<<4&4294967295|s>>>28))^n^r)+i[8]+2272392833&4294967295,o=t+(s<<11&4294967295|s>>>21),s=r+(o^t^n)+i[11]+1839030562&4294967295,s=n+((r=o+(s<<16&4294967295|s>>>16))^o^t)+i[14]+4259657740&4294967295,s=t+((n=r+(s<<23&4294967295|s>>>9))^r^o)+i[1]+2763975236&4294967295,s=o+((t=n+(s<<4&4294967295|s>>>28))^n^r)+i[4]+1272893353&4294967295,o=t+(s<<11&4294967295|s>>>21),s=r+(o^t^n)+i[7]+4139469664&4294967295,s=n+((r=o+(s<<16&4294967295|s>>>16))^o^t)+i[10]+3200236656&4294967295,s=t+((n=r+(s<<23&4294967295|s>>>9))^r^o)+i[13]+681279174&4294967295,s=o+((t=n+(s<<4&4294967295|s>>>28))^n^r)+i[0]+3936430074&4294967295,o=t+(s<<11&4294967295|s>>>21),s=r+(o^t^n)+i[3]+3572445317&4294967295,s=n+((r=o+(s<<16&4294967295|s>>>16))^o^t)+i[6]+76029189&4294967295,s=t+((n=r+(s<<23&4294967295|s>>>9))^r^o)+i[9]+3654602809&4294967295,s=o+((t=n+(s<<4&4294967295|s>>>28))^n^r)+i[12]+3873151461&4294967295,o=t+(s<<11&4294967295|s>>>21),s=r+(o^t^n)+i[15]+530742520&4294967295,s=n+((r=o+(s<<16&4294967295|s>>>16))^o^t)+i[2]+3299628645&4294967295,s=t+(r^((n=r+(s<<23&4294967295|s>>>9))|~o))+i[0]+4096336452&4294967295,s=o+(n^((t=n+(s<<6&4294967295|s>>>26))|~r))+i[7]+1126891415&4294967295,o=t+(s<<10&4294967295|s>>>22),s=r+(t^(o|~n))+i[14]+2878612391&4294967295,s=n+(o^((r=o+(s<<15&4294967295|s>>>17))|~t))+i[5]+4237533241&4294967295,s=t+(r^((n=r+(s<<21&4294967295|s>>>11))|~o))+i[12]+1700485571&4294967295,s=o+(n^((t=n+(s<<6&4294967295|s>>>26))|~r))+i[3]+2399980690&4294967295,o=t+(s<<10&4294967295|s>>>22),s=r+(t^(o|~n))+i[10]+4293915773&4294967295,s=n+(o^((r=o+(s<<15&4294967295|s>>>17))|~t))+i[1]+2240044497&4294967295,s=t+(r^((n=r+(s<<21&4294967295|s>>>11))|~o))+i[8]+1873313359&4294967295,s=o+(n^((t=n+(s<<6&4294967295|s>>>26))|~r))+i[15]+4264355552&4294967295,o=t+(s<<10&4294967295|s>>>22),s=r+(t^(o|~n))+i[6]+2734768916&4294967295,s=n+(o^((r=o+(s<<15&4294967295|s>>>17))|~t))+i[13]+1309151649&4294967295,s=t+(r^((n=r+(s<<21&4294967295|s>>>11))|~o))+i[4]+4149444226&4294967295,s=o+(n^((t=n+(s<<6&4294967295|s>>>26))|~r))+i[11]+3174756917&4294967295,o=t+(s<<10&4294967295|s>>>22),s=r+(t^(o|~n))+i[2]+718787259&4294967295,s=n+(o^((r=o+(s<<15&4294967295|s>>>17))|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+o&4294967295}function i(e,t){this.h=t;const n=[];let i=!0;for(let r=e.length-1;r>=0;r--){const s=0|e[r];i&&s==t||(n[r]=s,i=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.F=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.D=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}(t,function(){this.blockSize=-1}),t.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.v=function(e,t){void 0===t&&(t=e.length);const i=t-this.blockSize,r=this.C;let s=this.h,o=0;for(;o<t;){if(0==s)for(;o<=i;)n(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(r[s++]=e.charCodeAt(o++),s==this.blockSize){n(this,r),s=0;break}}else for(;o<t;)if(r[s++]=e[o++],s==this.blockSize){n(this,r),s=0;break}}this.h=s,this.o+=t},t.prototype.A=function(){var e=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;t=8*this.o;for(var n=e.length-8;n<e.length;++n)e[n]=255&t,t/=256;for(this.v(e),e=Array(16),t=0,n=0;n<4;++n)for(let i=0;i<32;i+=8)e[t++]=this.g[n]>>>i&255;return e};var r={};function s(e){return-128<=e&&e<128?function(e,t){var n=r;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,function(e){return new i([0|e],e<0?-1:0)}):new i([0|e],e<0?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(e<0)return d(o(-e));const t=[];let n=1;for(let i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new i(t,0)}var a=s(0),l=s(1),c=s(16777216);function u(e){if(0!=e.h)return!1;for(let t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){const t=e.g.length,n=[];for(let i=0;i<t;i++)n[i]=~e.g[i];return new i(n,~e.h).add(l)}function f(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function g(e,t){this.g=e,this.h=t}function m(e,t){if(u(t))throw Error("division by zero");if(u(e))return new g(a,a);if(h(e))return t=m(d(e),t),new g(d(t.g),d(t.h));if(h(t))return t=m(e,d(t)),new g(d(t.g),t.h);if(e.g.length>30){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,i=t;i.l(e)<=0;)n=v(n),i=v(i);var r=y(n,1),s=y(i,1);for(i=y(i,2),n=y(n,2);!u(i);){var c=s.add(i);c.l(e)<=0&&(r=r.add(n),s=c),i=y(i,1),n=y(n,1)}return t=f(e,r.j(t)),new g(r,t)}for(r=a;e.l(t)>=0;){for(n=Math.max(1,Math.floor(e.m()/t.m())),i=(i=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,i-48),c=(s=o(n)).j(t);h(c)||c.l(e)>0;)c=(s=o(n-=i)).j(t);u(s)&&(s=l),r=r.add(s),e=f(e,c)}return new g(r,e)}function v(e){const t=e.g.length+1,n=[];for(let i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new i(n,e.h)}function y(e,t){const n=t>>5;t%=32;const r=e.g.length-n,s=[];for(let i=0;i<r;i++)s[i]=t>0?e.i(i+n)>>>t|e.i(i+n+1)<<32-t:e.i(i+n);return new i(s,e.h)}(e=i.prototype).m=function(){if(h(this))return-d(this).m();let e=0,t=1;for(let n=0;n<this.g.length;n++){const i=this.i(n);e+=(i>=0?i:4294967296+i)*t,t*=4294967296}return e},e.toString=function(e){if((e=e||10)<2||36<e)throw Error("radix out of range: "+e);if(u(this))return"0";if(h(this))return"-"+d(this).toString(e);const t=o(Math.pow(e,6));var n=this;let i="";for(;;){const r=m(n,t).g;let s=(((n=f(n,r.j(t))).g.length>0?n.g[0]:n.h)>>>0).toString(e);if(u(n=r))return s+i;for(;s.length<6;)s="0"+s;i=s+i}},e.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=f(this,e))?-1:u(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){const t=Math.max(this.g.length,e.g.length),n=[];let r=0;for(let i=0;i<=t;i++){let t=r+(65535&this.i(i))+(65535&e.i(i)),s=(t>>>16)+(this.i(i)>>>16)+(e.i(i)>>>16);r=s>>>16,t&=65535,s&=65535,n[i]=s<<16|t}return new i(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(u(this)||u(e))return a;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(this.l(c)<0&&e.l(c)<0)return o(this.m()*e.m());const t=this.g.length+e.g.length,n=[];for(var r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(let t=0;t<e.g.length;t++){const i=this.i(r)>>>16,s=65535&this.i(r),o=e.i(t)>>>16,a=65535&e.i(t);n[2*r+2*t]+=s*a,p(n,2*r+2*t),n[2*r+2*t+1]+=i*a,p(n,2*r+2*t+1),n[2*r+2*t+1]+=s*o,p(n,2*r+2*t+1),n[2*r+2*t+2]+=i*o,p(n,2*r+2*t+2)}for(e=0;e<t;e++)n[e]=n[2*e+1]<<16|n[2*e];for(e=t;e<2*t;e++)n[e]=0;return new i(n,0)},e.B=function(e){return m(this,e).h},e.and=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new i(n,this.h&e.h)},e.or=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new i(n,this.h|e.h)},e.xor=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new i(n,this.h^e.h)},t.prototype.digest=t.prototype.A,t.prototype.reset=t.prototype.u,t.prototype.update=t.prototype.v,i.prototype.add=i.prototype.add,i.prototype.multiply=i.prototype.j,i.prototype.modulo=i.prototype.B,i.prototype.compare=i.prototype.l,i.prototype.toNumber=i.prototype.m,i.prototype.toString=i.prototype.toString,i.prototype.getBits=i.prototype.i,i.fromNumber=o,i.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');const i=o(Math.pow(n,8));let r=a;for(let a=0;a<t.length;a+=8){var s=Math.min(8,t.length-a);const e=parseInt(t.substring(a,a+s),n);s<8?(s=o(Math.pow(n,s)),r=r.j(s).add(o(e))):(r=r.j(i),r=r.add(o(e)))}return r},qt=i}).apply(void 0!==Ht?Ht:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Wt,Kt,Xt,Qt,Yt,Jt,Zt,en,tn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t=Object.defineProperty;var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof tn&&tn];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function i(e,i){if(i)e:{var r=n;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in r))break e;r=r[o]}(i=i(s=r[e=e[e.length-1]]))!=s&&null!=i&&t(r,e,{configurable:!0,writable:!0,value:i})}}i("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(e){return e||function(e){var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push([t,e[t]]);return n}});
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},s=this||self;function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){return(l=a).apply(null,arguments)}function c(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function u(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Ob=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}var h="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function d(e){const t=e.length;if(t>0){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function f(e,t){for(let i=1;i<arguments.length;i++){const t=arguments[i];var n=typeof t;if("array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length){n=e.length||0;const i=t.length||0;e.length=n+i;for(let r=0;r<i;r++)e[n+r]=t[r]}else e.push(t)}}function p(e){s.setTimeout(()=>{throw e},0)}function g(){var e=b;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var m=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new v,e=>e.reset());class v{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let y,w=!1,b=new class{constructor(){this.h=this.g=null}add(e,t){const n=m.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},E=()=>{const e=Promise.resolve(void 0);y=()=>{e.then(S)}};function S(){for(var e;e=g();){try{e.h.call(e.g)}catch(n){p(n)}var t=m;t.j(e),t.h<100&&(t.h++,e.next=t.g,t.g=e)}w=!1}function T(){this.u=this.u,this.C=this.C}function _(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},_.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};s.addEventListener("test",e,t),s.removeEventListener("test",e,t)}catch(n){}return e}();function I(e){return/^[\s\xa0]*$/.test(e)}function A(e,t){_.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,t)}u(A,_),A.prototype.init=function(e,t){const n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=t,(t=e.relatedTarget)||("mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement)),this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&A.Z.h.call(this)},A.prototype.h=function(){A.Z.h.call(this);const e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),k=0;function D(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=r,this.key=++k,this.da=this.fa=!1}function M(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function N(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function P(e){const t={};for(const n in e)t[n]=e[n];return t}const O="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function L(e,t){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)e[n]=i[n];for(let t=0;t<O.length;t++)n=O[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function R(e){this.src=e,this.g={},this.h=0}function V(e,t){const n=t.type;if(n in e.g){var i,r=e.g[n],s=Array.prototype.indexOf.call(r,t,void 0);(i=s>=0)&&Array.prototype.splice.call(r,s,1),i&&(M(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function F(e,t,n,i){for(let r=0;r<e.length;++r){const s=e[r];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==i)return r}return-1}R.prototype.add=function(e,t,n,i,r){const s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);const o=F(e,t,i,r);return o>-1?(t=e[o],n||(t.fa=!1)):((t=new D(t,this.src,s,!!i,r)).fa=n,e.push(t)),t};var B="closure_lm_"+(1e6*Math.random()|0),U={};function j(e,t,n,i,r){if(Array.isArray(t)){for(let s=0;s<t.length;s++)j(e,t[s],n,i,r);return null}return n=K(n),e&&e[x]?e.J(t,n,!!o(i)&&!!i.capture,r):function(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");const a=o(r)?!!r.capture:!!r;let l=H(e);if(l||(e[B]=l=new R(e)),n=l.add(t,n,i,a,s),n.proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}const t=q;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)C||(r=a),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent($(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}(e,t,n,!1,i,r)}function z(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)z(e,t[s],n,i,r);else i=o(i)?!!i.capture:!!i,n=K(n),e&&e[x]?(e=e.i,(s=String(t).toString())in e.g&&((n=F(t=e.g[s],n,i,r))>-1&&(M(t[n]),Array.prototype.splice.call(t,n,1),0==t.length&&(delete e.g[s],e.h--)))):e&&(e=H(e))&&(t=e.g[t.toString()],e=-1,t&&(e=F(t,n,i,r)),(n=e>-1?t[e]:null)&&G(n))}function G(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[x])V(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent($(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=H(t))?(V(n,e),0==n.h&&(n.src=null,t[B]=null)):M(e)}}}function $(e){return e in U?U[e]:U[e]="on"+e}function q(e,t){if(e.da)e=!0;else{t=new A(t,this);const n=e.listener,i=e.ha||e.src;e.fa&&G(e),e=n.call(i,t)}return e}function H(e){return(e=e[B])instanceof R?e:null}var W="__closure_events_fn_"+(1e9*Math.random()>>>0);function K(e){return"function"==typeof e?e:(e[W]||(e[W]=function(t){return e.handleEvent(t)}),e[W])}function X(){T.call(this),this.i=new R(this),this.M=this,this.G=null}function Q(e,t){var n,i=e.G;if(i)for(n=[];i;i=i.G)n.push(i);if(e=e.M,i=t.type||t,"string"==typeof t)t=new _(t,e);else if(t instanceof _)t.target=t.target||e;else{var r=t;L(t=new _(i,e),r)}let s,o;if(r=!0,n)for(o=n.length-1;o>=0;o--)s=t.g=n[o],r=Y(s,i,!0,t)&&r;if(s=t.g=e,r=Y(s,i,!0,t)&&r,r=Y(s,i,!1,t)&&r,n)for(o=0;o<n.length;o++)s=t.g=n[o],r=Y(s,i,!1,t)&&r}function Y(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();let r=!0;for(let s=0;s<t.length;++s){const o=t[s];if(o&&!o.da&&o.capture==n){const t=o.listener,n=o.ha||o.src;o.fa&&V(e.i,o),r=!1!==t.call(n,i)&&r}}return r&&!i.defaultPrevented}function J(e){e.g=function(e,t){if("function"!=typeof e){if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=l(e.handleEvent,e)}return Number(t)>2147483647?-1:s.setTimeout(e,t||0)}(()=>{e.g=null,e.i&&(e.i=!1,J(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}u(X,T),X.prototype[x]=!0,X.prototype.removeEventListener=function(e,t,n,i){z(this,e,t,n,i)},X.prototype.N=function(){if(X.Z.N.call(this),this.i){var e=this.i;for(const t in e.g){const n=e.g[t];for(let e=0;e<n.length;e++)M(n[e]);delete e.g[t],e.h--}}this.G=null},X.prototype.J=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},X.prototype.K=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};class Z extends T{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:J(this)}N(){super.N(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ee(e){T.call(this),this.h=e,this.g={}}u(ee,T);var te=[];function ne(e){N(e.g,function(e,t){this.g.hasOwnProperty(t)&&G(e)},e),e.g={}}ee.prototype.N=function(){ee.Z.N.call(this),ne(this)},ee.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ie=s.JSON.stringify,re=s.JSON.parse,se=class{stringify(e){return s.JSON.stringify(e,void 0)}parse(e){return s.JSON.parse(e,void 0)}};function oe(){}function ae(){}var le={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ce(){_.call(this,"d")}function ue(){_.call(this,"c")}u(ce,_),u(ue,_);var he={},de=null;function fe(){return de=de||new X}function pe(e){_.call(this,he.Ia,e)}function ge(e){const t=fe();Q(t,new pe(t))}function me(e,t){_.call(this,he.STAT_EVENT,e),this.stat=t}function ve(e){const t=fe();Q(t,new me(t,e))}function ye(e,t){_.call(this,he.Ja,e),this.size=t}function we(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return s.setTimeout(function(){e()},t)}function be(){this.g=!0}function Ee(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{const s=JSON.parse(t);if(s)for(e=0;e<s.length;e++)if(Array.isArray(s[e])){var n=s[e];if(!(n.length<2)){var i=n[1];if(Array.isArray(i)&&!(i.length<1)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(let e=1;e<i.length;e++)i[e]=""}}}return ie(s)}catch(s){return t}}(e,n)+(i?" "+i:"")})}he.Ia="serverreachability",u(pe,_),he.STAT_EVENT="statevent",u(me,_),he.Ja="timingevent",u(ye,_),be.prototype.ua=function(){this.g=!1},be.prototype.info=function(){};var Se,Te={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},_e={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function Ce(){}function Ie(e){return encodeURIComponent(String(e))}function Ae(e){var t=1;e=e.split(":");const n=[];for(;t>0&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function xe(e,t,n,i){this.j=e,this.i=t,this.l=n,this.S=i||1,this.V=new ee(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ke}function ke(){this.i=null,this.g="",this.h=!1}u(Ce,oe),Ce.prototype.g=function(){return new XMLHttpRequest},Se=new Ce;var De={},Me={};function Ne(e,t,n){e.M=1,e.A=it(Je(t)),e.u=n,e.R=!0,Pe(e,null)}function Pe(e,t){e.F=Date.now(),Re(e),e.B=Je(e.A);var n=e.B,i=e.S;Array.isArray(i)||(i=[String(i)]),vt(n.i,"t",i),e.C=0,n=e.j.L,e.h=new ke,e.g=fn(e.j,n?t:null,!e.u),e.P>0&&(e.O=new Z(l(e.Y,e,e.g),e.P)),t=e.V,n=e.g,i=e.ba;var r="readystatechange";Array.isArray(r)||(r&&(te[0]=r.toString()),r=te);for(let s=0;s<r.length;s++){const e=j(n,r[s],i||t.handleEvent,!1,t.h||t);if(!e)break;t.g[e.key]=e}t=e.J?P(e.J):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,t)):(e.v="GET",e.g.ea(e.B,e.v,null,t)),ge(),function(e,t,n,i,r,s){e.info(function(){if(e.g)if(s){var o="",a=s.split("&");for(let e=0;e<a.length;e++){var l=a[e].split("=");if(l.length>1){const e=l[0];l=l[1];const t=e.split("_");o=t.length>=2&&"type"==t[1]?o+(e+"=")+l+"&":o+(e+"=redacted&")}}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o})}(e.i,e.v,e.B,e.l,e.S,e.u)}function Oe(e){return!!e.g&&("GET"==e.v&&2!=e.M&&e.j.Aa)}function Le(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?Me:(n=Number(t.substring(n,i)),isNaN(n)?De:(i+=1)+n>t.length?Me:(t=t.slice(i,i+n),e.C=i+n,t))}function Re(e){e.T=Date.now()+e.H,Ve(e,e.H)}function Ve(e,t){if(null!=e.D)throw Error("WatchDog timer not null");e.D=we(l(e.aa,e),t)}function Fe(e){e.D&&(s.clearTimeout(e.D),e.D=null)}function Be(e){0==e.j.I||e.K||ln(e.j,e)}function Ue(e){Fe(e);var t=e.O;t&&"function"==typeof t.dispose&&t.dispose(),e.O=null,ne(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.dispose())}function je(e,t){try{var n=e.j;if(0!=n.I&&(n.g==e||He(n.h,e)))if(!e.L&&He(n.h,e)&&3==n.I){try{var i=n.Ba.g.parse(t)}catch(u){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.v){if(n.g){if(!(n.g.F+3e3<e.F))break e;an(n),jt(n)}rn(n),ve(18)}}else n.xa=r[1],0<n.xa-n.K&&r[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=we(l(n.Va,n),6e3));qe(n.h)<=1&&n.ta&&(n.ta=void 0)}else un(n,11)}else if((e.L||n.g==e)&&an(n),!I(t))for(r=n.Ba.g.parse(t),t=0;t<r.length;t++){let l=r[t];const u=l[0];if(!(u<=n.K))if(n.K=u,l=l[1],2==n.I)if("c"==l[0]){n.M=l[1],n.ba=l[2];const t=l[3];null!=t&&(n.ka=t,n.j.info("VER="+n.ka));const r=l[4];null!=r&&(n.za=r,n.j.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&u>0&&(i=1.5*u,n.O=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(We(s,s.h),s.h=null))}if(i.G){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.wa=e,nt(i.J,i.G,e))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-e.F,n.j.info("Handshake RTT: "+n.T+"ms"));var o=e;if((i=n).na=dn(i,i.L?i.ba:null,i.W),o.L){Ke(i.h,o);var a=o,c=i.O;c&&(a.H=c),a.D&&(Fe(a),Re(a)),i.g=o}else nn(i);n.i.length>0&&Gt(n)}else"stop"!=l[0]&&"close"!=l[0]||un(n,7);else 3==n.I&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?un(n,7):Ut(n):"noop"!=l[0]&&n.l&&n.l.qa(l),n.A=0)}ge()}catch(u){}}xe.prototype.ba=function(e){e=e.target;const t=this.O;t&&3==Rt(e)?t.j():this.Y(e)},xe.prototype.Y=function(e){try{if(e==this.g)e:{const l=Rt(this.g),c=this.g.ya();this.g.ca();if(!(l<3)&&(3!=l||this.g&&(this.h.h||this.g.la()||Vt(this.g)))){this.K||4!=l||7==c||ge(),Fe(this);var t=this.g.ca();this.X=t;var n=function(e){if(!Oe(e))return e.g.la();const t=Vt(e.g);if(""===t)return"";let n="";const i=t.length,r=4==Rt(e.g);if(!e.h.i){if("undefined"==typeof TextDecoder)return Ue(e),Be(e),"";e.h.i=new s.TextDecoder}for(let s=0;s<i;s++)e.h.h=!0,n+=e.h.i.decode(t[s],{stream:!(r&&s==i-1)});return t.length=0,e.h.g+=n,e.C=0,e.h.g}(this);if(this.o=200==t,function(e,t,n,i,r,s,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o})}(this.i,this.v,this.B,this.l,this.S,l,t),this.o){if(this.U&&!this.L){t:{if(this.g){var i,r=this.g;if((i=r.g?r.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(i)){var o=i;break t}}o=null}if(!(e=o)){this.o=!1,this.m=3,ve(12),Ue(this),Be(this);break e}Ee(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,je(this,e)}if(this.R){let t;for(e=!0;!this.K&&this.C<n.length;){if(t=Le(this,n),t==Me){4==l&&(this.m=4,ve(14),e=!1),Ee(this.i,this.l,null,"[Incomplete Response]");break}if(t==De){this.m=4,ve(15),Ee(this.i,this.l,n,"[Invalid Chunk]"),e=!1;break}Ee(this.i,this.l,t,null),je(this,t)}if(Oe(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=l||0!=n.length||this.h.h||(this.m=1,ve(16),e=!1),this.o=this.o&&e,e){if(n.length>0&&!this.W){this.W=!0;var a=this.j;a.g==this&&a.aa&&!a.P&&(a.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),sn(a),a.P=!0,ve(11))}}else Ee(this.i,this.l,n,"[Invalid Chunked Response]"),Ue(this),Be(this)}else Ee(this.i,this.l,n,null),je(this,n);4==l&&Ue(this),this.o&&!this.K&&(4==l?ln(this.j,this):(this.o=!1,Re(this)))}else(function(e){const t={};e=(e.g&&Rt(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<e.length;i++){if(I(e[i]))continue;var n=Ae(e[i]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[r]||[];t[r]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==t&&n.indexOf("Unknown SID")>0?(this.m=3,ve(12)):(this.m=0,ve(13)),Ue(this),Be(this)}}}catch(l){}},xe.prototype.cancel=function(){this.K=!0,Ue(this)},xe.prototype.aa=function(){this.D=null;const e=Date.now();e-this.T>=0?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.B),2!=this.M&&(ge(),ve(17)),Ue(this),this.m=2,Be(this)):Ve(this,this.T-e)};var ze=class{constructor(e,t){this.g=e,this.map=t}};function Ge(e){this.l=e||10,s.PerformanceNavigationTiming?e=(e=s.performance.getEntriesByType("navigation")).length>0&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(s.chrome&&s.chrome.loadTimes&&s.chrome.loadTimes()&&s.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function $e(e){return!!e.h||!!e.g&&e.g.size>=e.j}function qe(e){return e.h?1:e.g?e.g.size:0}function He(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function We(e,t){e.g?e.g.add(t):e.h=t}function Ke(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Xe(e){if(null!=e.h)return e.i.concat(e.h.G);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.G);return t}return d(e.i)}Ge.prototype.cancel=function(){if(this.i=Xe(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Qe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ye(e){let t;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,e instanceof Ye?(this.l=e.l,Ze(this,e.j),this.o=e.o,this.g=e.g,et(this,e.u),this.h=e.h,tt(this,yt(e.i)),this.m=e.m):e&&(t=String(e).match(Qe))?(this.l=!1,Ze(this,t[1]||"",!0),this.o=rt(t[2]||""),this.g=rt(t[3]||"",!0),et(this,t[4]),this.h=rt(t[5]||"",!0),tt(this,t[6]||"",!0),this.m=rt(t[7]||"")):(this.l=!1,this.i=new dt(null,this.l))}function Je(e){return new Ye(e)}function Ze(e,t,n){e.j=n?rt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function et(e,t){if(t){if(t=Number(t),isNaN(t)||t<0)throw Error("Bad port number "+t);e.u=t}else e.u=null}function tt(e,t,n){t instanceof dt?(e.i=t,function(e,t){t&&!e.j&&(ft(e),e.i=null,e.g.forEach(function(e,t){const n=t.toLowerCase();t!=n&&(pt(this,t),vt(this,n,e))},e)),e.j=t}(e.i,e.l)):(n||(t=st(t,ut)),e.i=new dt(t,e.l))}function nt(e,t,n){e.i.set(t,n)}function it(e){return nt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function rt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function st(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ot),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ot(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ye.prototype.toString=function(){const e=[];var t=this.j;t&&e.push(st(t,at,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(st(t,at,!0),"@"),e.push(Ie(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&e.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(st(n,"/"==n.charAt(0)?ct:lt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",st(n,ht)),e.join("")},Ye.prototype.resolve=function(e){const t=Je(this);let n=!!e.j;n?Ze(t,e.j):n=!!e.o,n?t.o=e.o:n=!!e.g,n?t.g=e.g:n=null!=e.u;var i=e.h;if(n)et(t,e.u);else if(n=!!e.h){if("/"!=i.charAt(0))if(this.g&&!this.h)i="/"+i;else{var r=t.h.lastIndexOf("/");-1!=r&&(i=t.h.slice(0,r+1)+i)}if(".."==(r=i)||"."==r)i="";else if(-1!=r.indexOf("./")||-1!=r.indexOf("/.")){i=0==r.lastIndexOf("/",0),r=r.split("/");const e=[];for(let t=0;t<r.length;){const n=r[t++];"."==n?i&&t==r.length&&e.push(""):".."==n?((e.length>1||1==e.length&&""!=e[0])&&e.pop(),i&&t==r.length&&e.push("")):(e.push(n),i=!0)}i=e.join("/")}else i=r}return n?t.h=i:n=""!==e.i.toString(),n?tt(t,yt(e.i)):n=!!e.m,n&&(t.m=e.m),t};var at=/[#\/\?@]/g,lt=/[#\?:]/g,ct=/[#\?]/g,ut=/[#\?@]/g,ht=/#/g;function dt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ft(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(let n=0;n<e.length;n++){const i=e[n].indexOf("=");let r,s=null;i>=0?(r=e[n].substring(0,i),s=e[n].substring(i+1)):r=e[n],t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function pt(e,t){ft(e),t=wt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function gt(e,t){return ft(e),t=wt(e,t),e.g.has(t)}function mt(e,t){ft(e);let n=[];if("string"==typeof t)gt(e,t)&&(n=n.concat(e.g.get(wt(e,t))));else for(e=Array.from(e.g.values()),t=0;t<e.length;t++)n=n.concat(e[t]);return n}function vt(e,t,n){pt(e,t),n.length>0&&(e.i=null,e.g.set(wt(e,t),d(n)),e.h+=n.length)}function yt(e){const t=new dt;return t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),t}function wt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function bt(e,t,n,i,r){try{r&&(r.onload=null,r.onerror=null,r.onabort=null,r.ontimeout=null),i(n)}catch(s){}}function Et(){this.g=new se}function St(e){this.i=e.Sb||null,this.h=e.ab||!1}function Tt(e,t){X.call(this),this.H=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function _t(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}function Ct(e){e.readyState=4,e.l=null,e.j=null,e.B=null,It(e)}function It(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function At(e){let t="";return N(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function xt(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=At(n),"string"==typeof e?null!=n&&Ie(n):nt(e,t,n))}function kt(e){X.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(e=dt.prototype).add=function(e,t){ft(this),this.i=null,e=wt(this,e);let n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){ft(this),this.g.forEach(function(n,i){n.forEach(function(n){e.call(t,n,i,this)},this)},this)},e.set=function(e,t){return ft(this),this.i=null,gt(this,e=wt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&(e=mt(this,e)).length>0?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(let i=0;i<t.length;i++){var n=t[i];const r=Ie(n);n=mt(this,n);for(let t=0;t<n.length;t++){let i=r;""!==n[t]&&(i+="="+Ie(n[t])),e.push(i)}}return this.i=e.join("&")},u(St,oe),St.prototype.g=function(){return new Tt(this.i,this.h)},u(Tt,X),(e=Tt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=t,this.readyState=1,It(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const t={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(t.body=e),(this.H||s).fetch(new Request(this.D,t)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,Ct(this)),this.readyState=0},e.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,It(this)),this.g&&(this.readyState=3,It(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==s.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;_t(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))},e.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.B.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ct(this):It(this),3==this.readyState&&_t(this)}},e.Oa=function(e){this.g&&(this.response=this.responseText=e,Ct(this))},e.Na=function(e){this.g&&(this.response=e,Ct(this))},e.ga=function(){this.g&&Ct(this)},e.setRequestHeader=function(e,t){this.A.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Tt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),u(kt,X);var Dt=/^https?$/i,Mt=["POST","PUT"];function Nt(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.o=5,Pt(e),Lt(e)}function Pt(e){e.A||(e.A=!0,Q(e,"complete"),Q(e,"error"))}function Ot(e){if(e.h&&void 0!==r)if(e.v&&4==Rt(e))setTimeout(e.Ca.bind(e),0);else if(Q(e,"readystatechange"),4==Rt(e)){e.h=!1;try{const r=e.ca();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===r){let t=String(e.D).match(Qe)[1]||null;!t&&s.self&&s.self.location&&(t=s.self.location.protocol.slice(0,-1)),i=!Dt.test(t?t.toLowerCase():"")}n=i}if(n)Q(e,"complete"),Q(e,"success");else{e.o=6;try{var o=Rt(e)>2?e.g.statusText:""}catch(a){o=""}e.l=o+" ["+e.ca()+"]",Pt(e)}}finally{Lt(e)}}}function Lt(e,t){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);const i=e.g;e.g=null,t||Q(e,"ready");try{i.onreadystatechange=null}catch(n){}}}function Rt(e){return e.g?e.g.readyState:0}function Vt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ft(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Bt(e){this.za=0,this.i=[],this.j=new be,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ft("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ft("baseRetryDelayMs",5e3,e),this.Za=Ft("retryDelaySeedMs",1e4,e),this.Ta=Ft("forwardChannelMaxRetries",2,e),this.va=Ft("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new Ge(e&&e.concurrentRequestLimit),this.Ba=new Et,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function Ut(e){if(zt(e),3==e.I){var t=e.V++,n=Je(e.J);if(nt(n,"SID",e.M),nt(n,"RID",t),nt(n,"TYPE","terminate"),qt(e,n),(t=new xe(e,e.j,t)).M=2,t.A=it(Je(n)),n=!1,s.navigator&&s.navigator.sendBeacon)try{n=s.navigator.sendBeacon(t.A.toString(),"")}catch(i){}!n&&s.Image&&((new Image).src=t.A,n=!0),n||(t.g=fn(t.j,null),t.g.ea(t.A)),t.F=Date.now(),Re(t)}hn(e)}function jt(e){e.g&&(sn(e),e.g.cancel(),e.g=null)}function zt(e){jt(e),e.v&&(s.clearTimeout(e.v),e.v=null),an(e),e.h.cancel(),e.m&&("number"==typeof e.m&&s.clearTimeout(e.m),e.m=null)}function Gt(e){if(!$e(e.h)&&!e.m){e.m=!0;var t=e.Ea;y||E(),w||(y(),w=!0),b.add(t,e),e.D=0}}function $t(e,t){var n;n=t?t.l:e.V++;const i=Je(e.J);nt(i,"SID",e.M),nt(i,"RID",n),nt(i,"AID",e.K),qt(e,i),e.u&&e.o&&xt(i,e.u,e.o),n=new xe(e,e.j,n,e.D+1),null===e.u&&(n.J=e.o),t&&(e.i=t.G.concat(e.i)),t=Ht(e,n,1e3),n.H=Math.round(.5*e.va)+Math.round(.5*e.va*Math.random()),We(e.h,n),Ne(n,i,t)}function qt(e,t){e.H&&N(e.H,function(e,n){nt(t,n,e)}),e.l&&N({},function(e,n){nt(t,n,e)})}function Ht(e,t,n){n=Math.min(e.i.length,n);const i=e.l?l(e.l.Ka,e.l,e):null;e:{var r=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?n>0?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let l=!0;for(let u=0;u<n;u++){var s=r[u].g;const n=r[u].map;if((s-=t)<0)t=Math.max(0,r[u].g-100),l=!1;else try{s="req"+s+"_"||"";try{var a=n instanceof Map?n:Object.entries(n);for(const[t,n]of a){let i=n;o(n)&&(i=ie(n)),e.push(s+t+"="+encodeURIComponent(i))}}catch(c){throw e.push(s+"type="+encodeURIComponent("_badmap")),c}}catch(c){i&&i(n)}}if(l){a=e.join("&");break e}}a=void 0}return e=e.i.splice(0,n),t.G=e,a}function nn(e){if(!e.g&&!e.v){e.Y=1;var t=e.Da;y||E(),w||(y(),w=!0),b.add(t,e),e.A=0}}function rn(e){return!(e.g||e.v||e.A>=3)&&(e.Y++,e.v=we(l(e.Da,e),cn(e,e.A)),e.A++,!0)}function sn(e){null!=e.B&&(s.clearTimeout(e.B),e.B=null)}function on(e){e.g=new xe(e,e.j,"rpc",e.Y),null===e.u&&(e.g.J=e.o),e.g.P=0;var t=Je(e.na);nt(t,"RID","rpc"),nt(t,"SID",e.M),nt(t,"AID",e.K),nt(t,"CI",e.F?"0":"1"),!e.F&&e.ia&&nt(t,"TO",e.ia),nt(t,"TYPE","xmlhttp"),qt(e,t),e.u&&e.o&&xt(t,e.u,e.o),e.O&&(e.g.H=e.O);var n=e.g;e=e.ba,n.M=1,n.A=it(Je(t)),n.u=null,n.R=!0,Pe(n,e)}function an(e){null!=e.C&&(s.clearTimeout(e.C),e.C=null)}function ln(e,t){var n=null;if(e.g==t){an(e),sn(e),e.g=null;var i=2}else{if(!He(e.h,t))return;n=t.G,Ke(e.h,t),i=1}if(0!=e.I)if(t.o)if(1==i){n=t.u?t.u.length:0,t=Date.now()-t.F;var r=e.D;Q(i=fe(),new ye(i,n)),Gt(e)}else nn(e);else if(3==(r=t.m)||0==r&&t.X>0||!(1==i&&function(e,t){return!(qe(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.G.concat(e.i),0):1==e.I||2==e.I||e.D>=(e.Sa?0:e.Ta)||(e.m=we(l(e.Ea,e,t),cn(e,e.D)),e.D++,0)))}(e,t)||2==i&&rn(e)))switch(n&&n.length>0&&(t=e.h,t.i=t.i.concat(n)),r){case 1:un(e,5);break;case 4:un(e,10);break;case 3:un(e,6);break;default:un(e,2)}}function cn(e,t){let n=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(n*=2),n*t}function un(e,t){if(e.j.info("Error code "+t),2==t){var n=l(e.bb,e),i=e.Ua;const t=!i;i=new Ye(i||"//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||Ze(i,"https"),it(i),t?function(e,t){const n=new be;if(s.Image){const i=new Image;i.onload=c(bt,n,"TestLoadImage: loaded",!0,t,i),i.onerror=c(bt,n,"TestLoadImage: error",!1,t,i),i.onabort=c(bt,n,"TestLoadImage: abort",!1,t,i),i.ontimeout=c(bt,n,"TestLoadImage: timeout",!1,t,i),s.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}(i.toString(),n):function(e,t){new be;const n=new AbortController,i=setTimeout(()=>{n.abort(),bt(0,0,!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(i),e.ok?bt(0,0,!0,t):bt(0,0,!1,t)}).catch(()=>{clearTimeout(i),bt(0,0,!1,t)})}(i.toString(),n)}else ve(2);e.I=0,e.l&&e.l.pa(t),hn(e),zt(e)}function hn(e){if(e.I=0,e.ja=[],e.l){const t=Xe(e.h);0==t.length&&0==e.i.length||(f(e.ja,t),f(e.ja,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.oa()}}function dn(e,t,n){var i=n instanceof Ye?Je(n):new Ye(n);if(""!=i.g)t&&(i.g=t+"."+i.g),et(i,i.u);else{var r=s.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;const e=new Ye(null);i&&Ze(e,i),t&&(e.g=t),r&&et(e,r),n&&(e.h=n),i=e}return n=e.G,t=e.wa,n&&t&&nt(i,n,t),nt(i,"VER",e.ka),qt(e,i),i}function fn(e,t,n){if(t&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Aa&&!e.ma?new kt(new St({ab:n})):new kt(e.ma)).Fa(e.L),t}function pn(){}function gn(){}function mn(e,t){X.call(this),this.g=new Bt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.sa&&(e?e["X-WebChannel-Client-Profile"]=t.sa:e={"X-WebChannel-Client-Profile":t.sa}),this.g.U=e,(e=t&&t.Qb)&&!I(e)&&(this.g.u=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!I(t)&&(this.g.G=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new wn(this)}function vn(e){ce.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function yn(){ue.call(this),this.status=1}function wn(e){this.g=e}(e=kt.prototype).Fa=function(e){this.H=e},e.ea=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Se.g(),this.g.onreadystatechange=h(l(this.Ca,this));try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(o){return void Nt(this,o)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),r=s.FormData&&e instanceof s.FormData,!(Array.prototype.indexOf.call(Mt,t,void 0)>=0)||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(e),this.v=!1}catch(o){Nt(this,o)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,Q(this,"complete"),Q(this,"abort"),Lt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lt(this,!0)),kt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Ot(this):this.Xa())},e.Xa=function(){Ot(this)},e.isActive=function(){return!!this.g},e.ca=function(){try{return Rt(this)>2?this.g.status:-1}catch(e){return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.La=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),re(t)}},e.ya=function(){return this.o},e.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Bt.prototype).ka=8,e.I=1,e.connect=function(e,t,n,i){ve(0),this.W=e,this.H=t||{},n&&void 0!==i&&(this.H.OSID=n,this.H.OAID=i),this.F=this.X,this.J=dn(this,null,this.W),Gt(this)},e.Ea=function(e){if(this.m)if(this.m=null,1==this.I){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new xe(this,this.j,e);let s=this.o;if(this.U&&(s?(s=P(s),L(s,this.U)):s=this.U),null!==this.u||this.R||(r.J=s,s=null),this.S)e:{for(var t=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if((t+=i)>4096){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Ht(this,r,t),nt(n=Je(this.J),"RID",e),nt(n,"CVER",22),this.G&&nt(n,"X-HTTP-Session-Id",this.G),qt(this,n),s&&(this.R?t="headers="+Ie(At(s))+"&"+t:this.u&&xt(n,this.u,s)),We(this.h,r),this.Ra&&nt(n,"TYPE","init"),this.S?(nt(n,"$req",t),nt(n,"SID","null"),r.U=!0,Ne(r,n,null)):Ne(r,n,t),this.I=2}}else 3==this.I&&(e?$t(this,e):0==this.i.length||$e(this.h)||$t(this))},e.Da=function(){if(this.v=null,on(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=we(l(this.Wa,this),e)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ve(10),jt(this),on(this))},e.Va=function(){null!=this.C&&(this.C=null,jt(this),rn(this),ve(19))},e.bb=function(e){e?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=pn.prototype).ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){},gn.prototype.g=function(e,t){return new mn(e,t)},u(mn,X),mn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){Ut(this.g)},mn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=ie(e),e=n);t.i.push(new ze(t.Ya++,e)),3==t.I&&Gt(t)},mn.prototype.N=function(){this.g.l=null,delete this.j,Ut(this.g),delete this.g,mn.Z.N.call(this)},u(vn,ce),u(yn,ue),u(wn,pn),wn.prototype.ra=function(){Q(this.g,"a")},wn.prototype.qa=function(e){Q(this.g,new vn(e))},wn.prototype.pa=function(e){Q(this.g,new yn)},wn.prototype.oa=function(){Q(this.g,"b")},gn.prototype.createWebChannel=gn.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,en=function(){return new gn},Zt=function(){return fe()},Jt=he,Yt={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Te.NO_ERROR=0,Te.TIMEOUT=8,Te.HTTP_ERROR=6,Qt=Te,_e.COMPLETE="complete",Xt=_e,ae.EventType=le,le.OPEN="a",le.CLOSE="b",le.ERROR="c",le.MESSAGE="d",X.prototype.listen=X.prototype.J,Kt=ae,kt.prototype.listenOnce=kt.prototype.K,kt.prototype.getLastError=kt.prototype.Ha,kt.prototype.getLastErrorCode=kt.prototype.ya,kt.prototype.getStatus=kt.prototype.ca,kt.prototype.getResponseJson=kt.prototype.La,kt.prototype.getResponseText=kt.prototype.la,kt.prototype.send=kt.prototype.ea,kt.prototype.setWithCredentials=kt.prototype.Fa,Wt=kt}).apply(void 0!==tn?tn:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const nn="@firebase/firestore",rn="4.9.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}sn.UNAUTHENTICATED=new sn(null),sn.GOOGLE_CREDENTIALS=new sn("google-credentials-uid"),sn.FIRST_PARTY=new sn("first-party-uid"),sn.MOCK_USER=new sn("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let on="12.3.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new Me("@firebase/firestore");function ln(){return an.logLevel}function cn(e,...t){if(an.logLevel<=Ce.DEBUG){const n=t.map(dn);an.debug(`Firestore (${on}): ${e}`,...n)}}function un(e,...t){if(an.logLevel<=Ce.ERROR){const n=t.map(dn);an.error(`Firestore (${on}): ${e}`,...n)}}function hn(e,...t){if(an.logLevel<=Ce.WARN){const n=t.map(dn);an.warn(`Firestore (${on}): ${e}`,...n)}}function dn(e){if("string"==typeof e)return e;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return t=e,JSON.stringify(t)}catch(n){return e}var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(e,t,n){let i="Unexpected state";"string"==typeof t?i=t:n=t,pn(e,i,n)}function pn(e,t,n){let i=`FIRESTORE (${on}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{i+=" CONTEXT: "+JSON.stringify(n)}catch(r){i+=" CONTEXT: "+n}throw un(i),new Error(i)}function gn(e,t,n,i){let r="Unexpected state";"string"==typeof n?r=n:i=n,e||pn(t,r,i)}function mn(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class yn extends ge{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class En{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(sn.UNAUTHENTICATED))}shutdown(){}}class Sn{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Tn{constructor(e){this.t=e,this.currentUser=sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){gn(void 0===this.o,42304);let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new wn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new wn,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const t=r;e.enqueueRetryable(async()=>{await t.promise,await i(this.currentUser)})},o=e=>{cn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(cn("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new wn)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(cn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(gn("string"==typeof t.accessToken,31837,{l:t}),new bn(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return gn(null===e||"string"==typeof e,2055,{h:e}),new sn(e)}}class _n{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=sn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Cn{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new _n(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(sn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class In{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class An{constructor(e,t){var n;this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,null!=(n=e)&&void 0!==n.settings&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){gn(void 0===this.o,3512);const n=e=>{null!=e.error&&cn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.m;return this.m=e.token,cn("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const i=e=>{cn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>i(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?i(e):cn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new In(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(gn("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new In(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=xn(40);for(let i=0;i<n.length;++i)t.length<20&&n[i]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[i]%62))}return t}}function Dn(e,t){return e<t?-1:e>t?1:0}function Mn(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.charAt(i),r=t.charAt(i);if(n!==r)return On(n)===On(r)?Dn(n,r):On(n)?1:-1}return Dn(e.length,t.length)}const Nn=55296,Pn=57343;function On(e){const t=e.charCodeAt(0);return t>=Nn&&t<=Pn}function Ln(e,t,n){return e.length===t.length&&e.every((e,i)=>n(e,t[i]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="__name__";class Vn{constructor(e,t,n){void 0===t?t=0:t>e.length&&fn(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&fn(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Vn.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Vn?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=Vn.compareSegments(e.get(i),t.get(i));if(0!==n)return n}return Dn(e.length,t.length)}static compareSegments(e,t){const n=Vn.isNumericId(e),i=Vn.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?Vn.extractNumericId(e).compare(Vn.extractNumericId(t)):Mn(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qt.fromString(e.substring(4,e.length-2))}}class Fn extends Vn{construct(e,t,n){return new Fn(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new yn(vn.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new Fn(t)}static emptyPath(){return new Fn([])}}const Bn=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Un extends Vn{construct(e,t,n){return new Un(e,t,n)}static isValidIdentifier(e){return Bn.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Un.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Rn}static keyField(){return new Un([Rn])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new yn(vn.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new yn(vn.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new yn(vn.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new yn(vn.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Un(t)}static emptyPath(){return new Un([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.path=e}static fromPath(e){return new jn(Fn.fromString(e))}static fromName(e){return new jn(Fn.fromString(e).popFirst(5))}static empty(){return new jn(Fn.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Fn.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Fn.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new jn(new Fn(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(e){if(!jn.isDocumentKey(e))throw new yn(vn.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Gn(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function $n(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":fn(12329,{type:typeof e})}function qn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new yn(vn.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$n(e);throw new yn(vn.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e,t){const n={typeString:e};return t&&(n.value=t),n}function Wn(e,t){if(!Gn(e))throw new yn(vn.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in t)if(t[i]){const r=t[i].typeString,s="value"in t[i]?{value:t[i].value}:void 0;if(!(i in e)){n=`JSON missing required field: '${i}'`;break}const o=e[i];if(r&&typeof o!==r){n=`JSON field '${i}' must be a ${r}.`;break}if(void 0!==s&&o!==s.value){n=`Expected '${i}' field to equal '${s.value}'`;break}}if(n)throw new yn(vn.INVALID_ARGUMENT,n);return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=-62135596800,Xn=1e6;class Qn{static now(){return Qn.fromMillis(Date.now())}static fromDate(e){return Qn.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Xn);return new Qn(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new yn(vn.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new yn(vn.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Kn)throw new yn(vn.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new yn(vn.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xn}_compareTo(e){return this.seconds===e.seconds?Dn(this.nanoseconds,e.nanoseconds):Dn(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qn._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Wn(e,Qn._jsonSchema))return new Qn(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Kn;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qn._jsonSchemaVersion="firestore/timestamp/1.0",Qn._jsonSchema={type:Hn("string",Qn._jsonSchemaVersion),seconds:Hn("number"),nanoseconds:Hn("number")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yn{static fromTimestamp(e){return new Yn(e)}static min(){return new Yn(new Qn(0,0))}static max(){return new Yn(new Qn(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e){return new Zn(e.readTime,e.key,-1)}class Zn{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Zn(Yn.min(),jn.empty(),-1)}static max(){return new Zn(Yn.max(),jn.empty(),-1)}}function ei(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=jn.comparator(e.documentKey,t.documentKey),0!==n?n:Dn(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class ti{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(e){if(e.code!==vn.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;cn("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&fn(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ii((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof ii?t:ii.resolve(t)}catch(t){return ii.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ii.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ii.reject(t)}static resolve(e){return new ii((t,n)=>{t(e)})}static reject(e){return new ii((t,n)=>{n(e)})}static waitFor(e){return new ii((t,n)=>{let i=0,r=0,s=!1;e.forEach(e=>{++i,e.next(()=>{++r,s&&r===i&&t()},e=>n(e))}),s=!0,r===i&&t()})}static or(e){let t=ii.resolve(!1);for(const n of e)t=t.next(e=>e?ii.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,i)=>{n.push(t.call(this,e,i))}),this.waitFor(n)}static mapArray(e,t){return new ii((n,i)=>{const r=e.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const l=a;t(e[l]).next(e=>{s[l]=e,++o,o===r&&n(s)},e=>i(e))}})}static doWhile(e,t){return new ii((n,i)=>{const r=()=>{!0===e()?t().next(()=>{r()},i):n()};r()})}}function ri(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}si.ce=-1;function oi(e){return null==e}function ai(e){return 0===e&&1/e==-1/0}function li(e,t){let n=t;const i=e.length;for(let r=0;r<i;r++){const t=e.charAt(r);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function ci(e){return e+""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function hi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function di(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t){this.comparator=e,this.root=t||gi.EMPTY}insert(e,t){return new fi(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gi.BLACK,null,null))}remove(e){return new fi(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gi.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pi(this.root,e,this.comparator,!1)}getReverseIterator(){return new pi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pi(this.root,e,this.comparator,!0)}}class pi{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gi{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:gi.RED,this.left=null!=i?i:gi.EMPTY,this.right=null!=r?r:gi.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new gi(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gi.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return gi.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fn(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fn(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fn(27949);return e+(this.isRed()?0:1)}}gi.EMPTY=null,gi.RED=!0,gi.BLACK=!1,gi.EMPTY=new class{constructor(){this.size=0}get key(){throw fn(57766)}get value(){throw fn(16141)}get color(){throw fn(16727)}get left(){throw fn(29726)}get right(){throw fn(36894)}copy(e,t,n,i,r){return this}insert(e,t,n){return new gi(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mi{constructor(e){this.comparator=e,this.data=new fi(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vi(this.data.getIterator())}getIteratorFrom(e){return new vi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof mi))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new mi(this.comparator);return t.data=e,t}}class vi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.fields=e,e.sort(Un.comparator)}static empty(){return new yi([])}unionWith(e){let t=new mi(Un.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new yi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ln(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new wi("Invalid base64 string: "+t):t}}(e);return new bi(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new bi(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Dn(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bi.EMPTY_BYTE_STRING=new bi("");const Ei=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Si(e){if(gn(!!e,39018),"string"==typeof e){let t=0;const n=Ei.exec(e);if(gn(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Ti(e.seconds),nanos:Ti(e.nanos)}}function Ti(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function _i(e){return"string"==typeof e?bi.fromBase64String(e):bi.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="server_timestamp",Ii="__type__",Ai="__previous_value__",xi="__local_write_time__";function ki(e){const t=(e?.mapValue?.fields||{})[Ii]?.stringValue;return t===Ci}function Di(e){const t=e.mapValue.fields[Ai];return ki(t)?Di(t):t}function Mi(e){const t=Si(e.mapValue.fields[xi].timestampValue);return new Qn(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t,n,i,r,s,o,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l,this.isUsingEmulator=c}}const Pi="(default)";class Oi{constructor(e,t){this.projectId=e,this.database=t||Pi}static empty(){return new Oi("","")}get isDefaultDatabase(){return this.database===Pi}isEqual(e){return e instanceof Oi&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="__type__",Ri="__max__",Vi={},Fi="__vector__",Bi="value";function Ui(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ki(e)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Ri}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)?9007199254740991:function(e){const t=(e?.mapValue?.fields||{})[Li]?.stringValue;return t===Fi}(e)?10:11:fn(28295,{value:e})}function ji(e,t){if(e===t)return!0;const n=Ui(e);if(n!==Ui(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Mi(e).isEqual(Mi(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Si(e.timestampValue),i=Si(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return i=t,_i(e.bytesValue).isEqual(_i(i.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ti(e.geoPointValue.latitude)===Ti(t.geoPointValue.latitude)&&Ti(e.geoPointValue.longitude)===Ti(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ti(e.integerValue)===Ti(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ti(e.doubleValue),i=Ti(t.doubleValue);return n===i?ai(n)===ai(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return Ln(e.arrayValue.values||[],t.arrayValue.values||[],ji);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(ui(n)!==ui(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!ji(n[r],i[r])))return!1;return!0}(e,t);default:return fn(52216,{left:e})}var i}function zi(e,t){return void 0!==(e.values||[]).find(e=>ji(e,t))}function Gi(e,t){if(e===t)return 0;const n=Ui(e),i=Ui(t);if(n!==i)return Dn(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Dn(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ti(e.integerValue||e.doubleValue),i=Ti(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return $i(e.timestampValue,t.timestampValue);case 4:return $i(Mi(e),Mi(t));case 5:return Mn(e.stringValue,t.stringValue);case 6:return function(e,t){const n=_i(e),i=_i(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let r=0;r<n.length&&r<i.length;r++){const e=Dn(n[r],i[r]);if(0!==e)return e}return Dn(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Dn(Ti(e.latitude),Ti(t.latitude));return 0!==n?n:Dn(Ti(e.longitude),Ti(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return qi(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},i=t.fields||{},r=n[Bi]?.arrayValue,s=i[Bi]?.arrayValue,o=Dn(r?.values?.length||0,s?.values?.length||0);return 0!==o?o:qi(r,s)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Vi&&t===Vi)return 0;if(e===Vi)return 1;if(t===Vi)return-1;const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const e=Mn(i[o],s[o]);if(0!==e)return e;const t=Gi(n[i[o]],r[s[o]]);if(0!==t)return t}return Dn(i.length,s.length)}(e.mapValue,t.mapValue);default:throw fn(23264,{he:n})}}function $i(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Dn(e,t);const n=Si(e),i=Si(t),r=Dn(n.seconds,i.seconds);return 0!==r?r:Dn(n.nanos,i.nanos)}function qi(e,t){const n=e.values||[],i=t.values||[];for(let r=0;r<n.length&&r<i.length;++r){const e=Gi(n[r],i[r]);if(e)return e}return Dn(n.length,i.length)}function Hi(e){return Wi(e)}function Wi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Si(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?_i(e.bytesValue).toBase64():"referenceValue"in e?function(e){return jn.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=Wi(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${Wi(e.fields[r])}`;return n+"}"}(e.mapValue):fn(61005,{value:e})}function Ki(e){switch(Ui(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Di(e);return t?16+Ki(t):16;case 5:return 2*e.stringValue.length;case 6:return _i(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(e.arrayValue.values||[]).reduce((e,t)=>e+Ki(t),0);case 10:case 11:return function(e){let t=0;return hi(e.fields,(e,n)=>{t+=e.length+Ki(n)}),t}(e.mapValue);default:throw fn(13486,{value:e})}}function Xi(e){return!!e&&"integerValue"in e}function Qi(e){return!!e&&"arrayValue"in e}function Yi(e){return!!e&&"mapValue"in e}function Ji(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return hi(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Ji(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ji(e.arrayValue.values[n]);return t}return{...e}}class Zi{constructor(e){this.value=e}static empty(){return new Zi({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Yi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ji(t)}setAll(e){let t=Un.emptyPath(),n={},i=[];e.forEach((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=Ji(e):i.push(r.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());Yi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ji(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Yi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){hi(t,(t,n)=>e[t]=n);for(const i of n)delete e[i]}clone(){return new Zi(Ji(this.value))}}function er(e){const t=[];return hi(e.fields,(e,n)=>{const i=new Un([e]);if(Yi(n)){const e=er(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)}),new yi(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class tr{constructor(e,t,n,i,r,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(e){return new tr(e,0,Yn.min(),Yn.min(),Yn.min(),Zi.empty(),0)}static newFoundDocument(e,t,n,i){return new tr(e,1,t,Yn.min(),n,i,0)}static newNoDocument(e,t){return new tr(e,2,t,Yn.min(),Yn.min(),Zi.empty(),0)}static newUnknownDocument(e,t){return new tr(e,3,t,Yn.min(),Yn.min(),Zi.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Yn.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zi.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Yn.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof tr&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tr(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t){this.position=e,this.inclusive=t}}function ir(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(i=s.field.isKeyField()?jn.comparator(jn.fromName(o.referenceValue),n.key):Gi(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function rr(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ji(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t="asc"){this.field=e,this.dir=t}}function or(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{}class lr extends ar{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new gr(e,t,n):"array-contains"===t?new wr(e,n):"in"===t?new br(e,n):"not-in"===t?new Er(e,n):"array-contains-any"===t?new Sr(e,n):new lr(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new mr(e,n):new vr(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(Gi(t,this.value)):null!==t&&Ui(this.value)===Ui(t)&&this.matchesComparison(Gi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return fn(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cr extends ar{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new cr(e,t)}matches(e){return ur(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ur(e){return"and"===e.op}function hr(e){return function(e){for(const t of e.filters)if(t instanceof cr)return!1;return!0}(e)&&ur(e)}function dr(e){if(e instanceof lr)return e.field.canonicalString()+e.op.toString()+Hi(e.value);if(hr(e))return e.filters.map(e=>dr(e)).join(",");{const t=e.filters.map(e=>dr(e)).join(",");return`${e.op}(${t})`}}function fr(e,t){return e instanceof lr?(n=e,(i=t)instanceof lr&&n.op===i.op&&n.field.isEqual(i.field)&&ji(n.value,i.value)):e instanceof cr?function(e,t){return t instanceof cr&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,i)=>e&&fr(n,t.filters[i]),!0)}(e,t):void fn(19439);var n,i}function pr(e){return e instanceof lr?`${(t=e).field.canonicalString()} ${t.op} ${Hi(t.value)}`:e instanceof cr?function(e){return e.op.toString()+" {"+e.getFilters().map(pr).join(" ,")+"}"}(e):"Filter";var t}class gr extends lr{constructor(e,t,n){super(e,t,n),this.key=jn.fromName(n.referenceValue)}matches(e){const t=jn.comparator(e.key,this.key);return this.matchesComparison(t)}}class mr extends lr{constructor(e,t){super(e,"in",t),this.keys=yr("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class vr extends lr{constructor(e,t){super(e,"not-in",t),this.keys=yr("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function yr(e,t){return(t.arrayValue?.values||[]).map(e=>jn.fromName(e.referenceValue))}class wr extends lr{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qi(t)&&zi(t.arrayValue,this.value)}}class br extends lr{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&zi(this.value.arrayValue,t)}}class Er extends lr{constructor(e,t){super(e,"not-in",t)}matches(e){if(zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!zi(this.value.arrayValue,t)}}class Sr extends lr{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>zi(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.Te=null}}function _r(e,t=null,n=[],i=[],r=null,s=null,o=null){return new Tr(e,t,n,i,r,s,o)}function Cr(e){const t=mn(e);if(null===t.Te){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>dr(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>{return(t=e).field.canonicalString()+t.dir;var t}).join(","),oi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>Hi(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>Hi(e)).join(",")),t.Te=e}return t.Te}function Ir(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!or(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!fr(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!rr(e.startAt,t.startAt)&&rr(e.endAt,t.endAt)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function xr(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function kr(e){const t=mn(e);if(null===t.Ie){t.Ie=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new mi(Un.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new sr(i,n))}),e.has(Un.keyField().canonicalString())||t.Ie.push(new sr(Un.keyField(),n))}return t.Ie}function Dr(e){const t=mn(e);return t.Ee||(t.Ee=function(e,t){if("F"===e.limitType)return _r(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new sr(e.field,t)});const n=e.endAt?new nr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new nr(e.startAt.position,e.startAt.inclusive):null;return _r(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}(t,kr(e))),t.Ee}function Mr(e,t,n){return new Ar(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Nr(e,t){return Ir(Dr(e),Dr(t))&&e.limitType===t.limitType}function Pr(e){return`${Cr(Dr(e))}|lt:${e.limitType}`}function Or(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>pr(e)).join(", ")}]`),oi(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t}).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>Hi(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>Hi(e)).join(",")),`Target(${t})`}(Dr(e))}; limitType=${e.limitType})`}function Lr(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):jn.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of kr(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(i=t,!((n=e).startAt&&!function(e,t,n){const i=ir(e,t,n);return e.inclusive?i<=0:i<0}(n.startAt,kr(n),i)||n.endAt&&!function(e,t,n){const i=ir(e,t,n);return e.inclusive?i>=0:i>0}(n.endAt,kr(n),i)));var n,i}function Rr(e,t,n){const i=e.field.isKeyField()?jn.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?Gi(i,r):fn(42886)}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return fn(19790,{direction:e.dir})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hi(this.inner,(t,n)=>{for(const[i,r]of n)e(i,r)})}isEmpty(){return di(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new fi(jn.comparator);function Br(){return Fr}const Ur=new fi(jn.comparator);function jr(...e){let t=Ur;for(const n of e)t=t.insert(n.key,n);return t}function zr(e){let t=Ur;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Gr(){return qr()}function $r(){return qr()}function qr(){return new Vr(e=>e.toString(),(e,t)=>e.isEqual(t))}const Hr=new fi(jn.comparator),Wr=new mi(jn.comparator);function Kr(...e){let t=Wr;for(const n of e)t=t.add(n);return t}const Xr=new mi(Dn);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qr(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ai(t)?"-0":t}}function Yr(e){return{integerValue:""+e}}function Jr(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!ai(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)?Yr(t):Qr(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this._=void 0}}function es(e,t,n){return e instanceof is?function(e,t){const n={fields:{[Ii]:{stringValue:Ci},[xi]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&ki(t)&&(t=Di(t)),t&&(n.fields[Ai]=t),{mapValue:n}}(n,t):e instanceof rs?ss(e,t):e instanceof os?as(e,t):function(e,t){const n=ns(e,t),i=cs(n)+cs(e.Ae);return Xi(n)&&Xi(e.Ae)?Yr(i):Qr(e.serializer,i)}(e,t)}function ts(e,t,n){return e instanceof rs?ss(e,t):e instanceof os?as(e,t):n}function ns(e,t){return e instanceof ls?Xi(n=t)||(i=n)&&"doubleValue"in i?t:{integerValue:0}:null;var n,i}class is extends Zr{}class rs extends Zr{constructor(e){super(),this.elements=e}}function ss(e,t){const n=us(t);for(const i of e.elements)n.some(e=>ji(e,i))||n.push(i);return{arrayValue:{values:n}}}class os extends Zr{constructor(e){super(),this.elements=e}}function as(e,t){let n=us(t);for(const i of e.elements)n=n.filter(e=>!ji(e,i));return{arrayValue:{values:n}}}class ls extends Zr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function cs(e){return Ti(e.integerValue||e.doubleValue)}function us(e){return Qi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class hs{constructor(e,t){this.version=e,this.transformResults=t}}class ds{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ds}static exists(e){return new ds(void 0,e)}static updateTime(e){return new ds(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fs(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ps{}function gs(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Cs(e.key,ds.none()):new bs(e.key,e.data,ds.none());{const n=e.data,i=Zi.empty();let r=new mi(Un.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new Es(e.key,i,new yi(r.toArray()),ds.none())}}function ms(e,t,n){var i;e instanceof bs?function(e,t,n){const i=e.value.clone(),r=Ts(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof Es?function(e,t,n){if(!fs(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=Ts(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(Ss(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):(i=n,t.convertToNoDocument(i.version).setHasCommittedMutations())}function vs(e,t,n,i){return e instanceof bs?function(e,t,n,i){if(!fs(e.precondition,t))return n;const r=e.value.clone(),s=_s(e.fieldTransforms,i,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,i):e instanceof Es?function(e,t,n,i){if(!fs(e.precondition,t))return n;const r=_s(e.fieldTransforms,i,t),s=t.data;return s.setAll(Ss(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,i):(r=t,s=n,fs(e.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):s);var r,s}function ys(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),r=ns(i.transform,e||null);null!=r&&(null===n&&(n=Zi.empty()),n.set(i.field,r))}return n||null}function ws(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&Ln(n,i,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof rs&&i instanceof rs||n instanceof os&&i instanceof os?Ln(n.elements,i.elements,ji):n instanceof ls&&i instanceof ls?ji(n.Ae,i.Ae):n instanceof is&&i instanceof is);var n,i}(e,t)))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,i}class bs extends ps{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Es extends ps{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Ss(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function Ts(e,t,n){const i=new Map;gn(e.length===n.length,32656,{Re:n.length,Ve:e.length});for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,ts(o,a,n[r]))}return i}function _s(e,t,n){const i=new Map;for(const r of e){const e=r.transform,s=n.data.field(r.field);i.set(r.field,es(e,s,t))}return i}class Cs extends ps{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Is extends ps{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const t=this.mutations[i];t.key.isEqual(e.key)&&ms(t,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=vs(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=vs(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=$r();return this.mutations.forEach(i=>{const r=e.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=t.has(i.key)?null:o;const a=gs(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(Yn.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Kr())}isEqual(e){return this.batchId===e.batchId&&Ln(this.mutations,e.mutations,(e,t)=>ws(e,t))&&Ln(this.baseMutations,e.baseMutations,(e,t)=>ws(e,t))}}class xs{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){gn(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let i=function(){return Hr}();const r=e.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new xs(e,t,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ds,Ms;(Ms=Ds||(Ds={}))[Ms.OK=0]="OK",Ms[Ms.CANCELLED=1]="CANCELLED",Ms[Ms.UNKNOWN=2]="UNKNOWN",Ms[Ms.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ms[Ms.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ms[Ms.NOT_FOUND=5]="NOT_FOUND",Ms[Ms.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ms[Ms.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ms[Ms.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ms[Ms.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ms[Ms.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ms[Ms.ABORTED=10]="ABORTED",Ms[Ms.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ms[Ms.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ms[Ms.INTERNAL=13]="INTERNAL",Ms[Ms.UNAVAILABLE=14]="UNAVAILABLE",Ms[Ms.DATA_LOSS=15]="DATA_LOSS",
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new qt([4294967295,4294967295],0);class Ns{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ps(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Os(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ls(e,t){return Ps(e,t.toTimestamp())}function Rs(e){return gn(!!e,49232),Yn.fromTimestamp(function(e){const t=Si(e);return new Qn(t.seconds,t.nanos)}(e))}function Vs(e,t){return Fs(e,t).canonicalString()}function Fs(e,t){const n=(i=e,new Fn(["projects",i.projectId,"databases",i.database])).child("documents");var i;return void 0===t?n:n.child(t)}function Bs(e,t){return Vs(e.databaseId,t.path)}function Us(e){const t=function(e){const t=Fn.fromString(e);return gn(function(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t),10190,{key:t.toString()}),t}(e);return 4===t.length?Fn.emptyPath():function(e){return gn(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}(t)}function js(e,t,n){return{name:Bs(e,t),fields:n.value.mapValue.fields}}function zs(e){let t=Us(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){gn(1===i,65062);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Gs(e);return t instanceof cr&&hr(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>{return new sr($s((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t}));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,oi(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new nr(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new nr(n,t)}(n.endAt)),function(e,t,n,i,r,s,o,a){return new Ar(e,t,n,i,r,s,o,a)}(t,r,o,s,a,"F",l,c)}function Gs(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=$s(e.unaryFilter.field);return lr.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=$s(e.unaryFilter.field);return lr.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$s(e.unaryFilter.field);return lr.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=$s(e.unaryFilter.field);return lr.create(r,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fn(61313);default:return fn(60726)}}(e):void 0!==e.fieldFilter?(t=e,lr.create($s(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fn(58110);default:return fn(50506)}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return cr.create(e.compositeFilter.filters.map(e=>Gs(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return fn(1026)}}(e.compositeFilter.op))}(e):fn(30097,{filter:e});var t}function $s(e){return Un.fromServerFormat(e.fieldPath)}function qs(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}class Hs{constructor(e){this.yt=e}}function Ws(e){const t=zs({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Mr(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.Cn=new Xs}addToCollectionParentIndex(e,t){return this.Cn.add(t),ii.resolve()}getCollectionParents(e,t){return ii.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return ii.resolve()}deleteFieldIndex(e,t){return ii.resolve()}deleteAllFieldIndexes(e){return ii.resolve()}createTargetIndexes(e,t){return ii.resolve()}getDocumentsMatchingTarget(e,t){return ii.resolve(null)}getIndexType(e,t){return ii.resolve(0)}getFieldIndexes(e,t){return ii.resolve([])}getNextCollectionGroupToUpdate(e){return ii.resolve(null)}getMinOffset(e,t){return ii.resolve(Zn.min())}getMinOffsetFromCollectionGroup(e,t){return ii.resolve(Zn.min())}updateCollectionGroup(e,t,n){return ii.resolve()}updateIndexEntries(e,t){return ii.resolve()}}class Xs{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new mi(Fn.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new mi(Fn.comparator)).toArray()}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ys=41943040;class Js{static withCacheSize(e){return new Js(e,Js.DEFAULT_COLLECTION_PERCENTILE,Js.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Js.DEFAULT_COLLECTION_PERCENTILE=10,Js.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Js.DEFAULT=new Js(Ys,Js.DEFAULT_COLLECTION_PERCENTILE,Js.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Js.DISABLED=new Js(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Zs(0)}static cr(){return new Zs(-1)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo="LruGarbageCollector";function to([e,t],[n,i]){const r=Dn(e,n);return 0===r?Dn(t,i):r}class no{constructor(e){this.Ir=e,this.buffer=new mi(to),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();to(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class io{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Vr(e){cn(eo,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ri(e)?cn(eo,"Ignoring IndexedDB error during garbage collection: ",e):await ni(e)}await this.Vr(3e5)})}}class ro{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return ii.resolve(si.ce);const n=new no(t);return this.mr.forEachTarget(e,e=>n.Ar(e.sequenceNumber)).next(()=>this.mr.pr(e,e=>n.Ar(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(cn("LruGarbageCollector","Garbage collection skipped; disabled"),ii.resolve(Qs)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(cn("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qs):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,i,r,s,o,a,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(cn("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),i=this.params.maximumSequenceNumbersToCollect):i=t,s=Date.now(),this.nthSequenceNumber(e,i))).next(i=>(n=i,o=Date.now(),this.removeTargets(e,n,t))).next(t=>(r=t,a=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),ln()<=Ce.DEBUG&&cn("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-c}ms\n\tDetermined least recently used ${i} in `+(o-s)+`ms\n\tRemoved ${r} targets in `+(a-o)+`ms\n\tRemoved ${e} documents in `+(l-a)+`ms\nTotal Duration: ${l-c}ms`),ii.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:e})))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class so{constructor(){this.changes=new Vr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tr.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?ii.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&vs(n.mutation,e,yi.empty(),Qn.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,Kr()).next(()=>t))}getLocalViewOfDocuments(e,t,n=Kr()){const i=Gr();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(e=>{let t=jr();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=Gr();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Kr()))}populateOverlays(e,t,n){const i=[];return n.forEach(e=>{t.has(e)||i.push(e)}),this.documentOverlayCache.getOverlays(e,i).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,i){let r=Br();const s=qr(),o=qr();return t.forEach((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof Es)?r=r.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),vs(o.mutation,t,o.mutation.getFieldMask(),Qn.now())):s.set(t.key,yi.empty())}),this.recalculateAndSaveOverlays(e,r).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>o.set(e,new oo(t,s.get(e)??null))),o))}recalculateAndSaveOverlays(e,t){const n=qr();let i=new fi((e,t)=>e-t),r=Kr();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const r of e)r.keys().forEach(e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||yi.empty();o=r.applyToLocalView(s,o),n.set(e,o);const a=(i.get(r.batchId)||Kr()).add(e);i=i.insert(r.batchId,a)})}).next(()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,c=$r();l.forEach(e=>{if(!r.has(e)){const i=gs(t.get(e),n.get(e));null!==i&&c.set(e,i),r=r.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,c))}return ii.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,i){return r=t,jn.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i);var r}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):ii.resolve(Gr());let o=-1,a=r;return s.next(t=>ii.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(t)?ii.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,r)).next(()=>this.computeViews(e,a,t,Kr())).next(e=>({batchId:o,changes:zr(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new jn(t)).next(e=>{let t=jr();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const r=t.collectionGroup;let s=jr();return this.indexManager.getCollectionParents(e,r).next(o=>ii.forEach(o,o=>{const a=(l=t,c=o.child(r),new Ar(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt));var l,c;return this.getDocumentsMatchingCollectionQuery(e,a,n,i).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r,i))).next(e=>{r.forEach((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,tr.newInvalidDocument(i)))});let n=jr();return e.forEach((e,i)=>{const s=r.get(e);void 0!==s&&vs(s.mutation,i,yi.empty(),Qn.now()),Lr(t,i)&&(n=n.insert(e,i))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return ii.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,{id:(n=t).id,version:n.version,createTime:Rs(n.createTime)}),ii.resolve();var n}getNamedQuery(e,t){return ii.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,{name:(n=t).name,query:Ws(n.bundledQuery),readTime:Rs(n.readTime)}),ii.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.overlays=new fi(jn.comparator),this.qr=new Map}getOverlay(e,t){return ii.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Gr();return ii.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,i)=>{this.St(e,t,i)}),ii.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.qr.get(n);return void 0!==i&&(i.forEach(e=>this.overlays=this.overlays.remove(e)),this.qr.delete(n)),ii.resolve()}getOverlaysForCollection(e,t,n){const i=Gr(),r=t.length+1,s=new jn(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return ii.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new fi((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=Gr(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Gr(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=i)););return ii.resolve(o)}St(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.qr.get(i.largestBatchId).delete(n.key);this.qr.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ks(t,n));let r=this.qr.get(t);void 0===r&&(r=Kr(),this.qr.set(t,r)),this.qr.set(t,r.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.sessionToken=bi.EMPTY_BYTE_STRING}getSessionToken(e){return ii.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ii.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.Qr=new mi(fo.$r),this.Ur=new mi(fo.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new fo(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Gr(new fo(e,t))}zr(e,t){e.forEach(e=>this.removeReference(e,t))}jr(e){const t=new jn(new Fn([])),n=new fo(t,e),i=new fo(t,e+1),r=[];return this.Ur.forEachInRange([n,i],e=>{this.Gr(e),r.push(e.key)}),r}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new jn(new Fn([])),n=new fo(t,e),i=new fo(t,e+1);let r=Kr();return this.Ur.forEachInRange([n,i],e=>{r=r.add(e.key)}),r}containsKey(e){const t=new fo(e,0),n=this.Qr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class fo{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return jn.comparator(e.key,t.key)||Dn(e.Yr,t.Yr)}static Kr(e,t){return Dn(e.Yr,t.Yr)||jn.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new mi(fo.$r)}checkEmpty(e){return ii.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const r=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new As(r,t,n,i);this.mutationQueue.push(s);for(const o of i)this.Zr=this.Zr.add(new fo(o.key,r)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return ii.resolve(s)}lookupMutationBatch(e,t){return ii.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.ei(n),r=i<0?0:i;return ii.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ii.resolve(0===this.mutationQueue.length?-1:this.tr-1)}getAllMutationBatches(e){return ii.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new fo(t,0),i=new fo(t,Number.POSITIVE_INFINITY),r=[];return this.Zr.forEachInRange([n,i],e=>{const t=this.Xr(e.Yr);r.push(t)}),ii.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new mi(Dn);return t.forEach(e=>{const t=new fo(e,0),i=new fo(e,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([t,i],e=>{n=n.add(e.Yr)})}),ii.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;jn.isDocumentKey(r)||(r=r.child(""));const s=new fo(new jn(r),0);let o=new mi(Dn);return this.Zr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.Yr)),!0)},s),ii.resolve(this.ti(o))}ti(e){const t=[];return e.forEach(e=>{const n=this.Xr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){gn(0===this.ni(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Zr;return ii.forEach(t.mutations,i=>{const r=new fo(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=n})}ir(e){}containsKey(e,t){const n=new fo(t,0),i=this.Zr.firstAfterOrEqual(n);return ii.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,ii.resolve()}ni(e,t){return this.ei(e)}ei(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.ri=e,this.docs=new fi(jn.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return ii.resolve(n?n.document.mutableCopy():tr.newInvalidDocument(t))}getEntries(e,t){let n=Br();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():tr.newInvalidDocument(e))}),ii.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let r=Br();const s=t.path,o=new jn(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||ei(Jn(o),n)<=0||(i.has(o.key)||Lr(t,o))&&(r=r.insert(o.key,o.mutableCopy()))}return ii.resolve(r)}getAllFromCollectionGroup(e,t,n,i){fn(9500)}ii(e,t){return ii.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new mo(this)}getSize(e){return ii.resolve(this.size)}}class mo extends so{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(n)}),ii.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.persistence=e,this.si=new Vr(e=>Cr(e),Ir),this.lastRemoteSnapshotVersion=Yn.min(),this.highestTargetId=0,this.oi=0,this._i=new ho,this.targetCount=0,this.ai=Zs.ur()}forEachTarget(e,t){return this.si.forEach((e,n)=>t(n)),ii.resolve()}getLastRemoteSnapshotVersion(e){return ii.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ii.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ii.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),ii.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Zs(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,ii.resolve()}updateTargetData(e,t){return this.Pr(t),ii.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,ii.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.si.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.si.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)}),ii.waitFor(r).next(()=>i)}getTargetCount(e){return ii.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return ii.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),ii.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(t=>{r.push(i.markPotentiallyOrphaned(e,t))}),ii.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),ii.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return ii.resolve(n)}containsKey(e,t){return ii.resolve(this._i.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t){this.ui={},this.overlays={},this.ci=new si(0),this.li=!1,this.li=!0,this.hi=new uo,this.referenceDelegate=e(this),this.Pi=new vo(this),this.indexManager=new Ks,this.remoteDocumentCache=new go(e=>this.referenceDelegate.Ti(e)),this.serializer=new Hs(t),this.Ii=new lo(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new co,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new po(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){cn("MemoryPersistence","Starting transaction:",e);const i=new wo(this.ci.next());return this.referenceDelegate.Ei(),n(i).next(e=>this.referenceDelegate.di(i).next(()=>e)).toPromise().then(e=>(i.raiseOnCommittedEvent(),e))}Ai(e,t){return ii.or(Object.values(this.ui).map(n=>()=>n.containsKey(e,t)))}}class wo extends ti{constructor(e){super(),this.currentSequenceNumber=e}}class bo{constructor(e){this.persistence=e,this.Ri=new ho,this.Vi=null}static mi(e){return new bo(e)}get fi(){if(this.Vi)return this.Vi;throw fn(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),ii.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),ii.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),ii.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(e=>this.fi.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.fi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ii.forEach(this.fi,n=>{const i=jn.fromPath(n);return this.gi(e,i).next(e=>{e||t.removeEntry(i,Yn.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(e=>{e?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return ii.or([()=>ii.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Eo{constructor(e,t){this.persistence=e,this.pi=new Vr(e=>function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=ci(t)),t=li(e.get(n),t);return ci(t)}(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=function(e,t){return new ro(e,t)}(this,t)}static mi(e,t){return new Eo(e,t)}Ei(){}di(e){return ii.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}wr(e){let t=0;return this.pr(e,e=>{t++}).next(()=>t)}pr(e,t){return ii.forEach(this.pi,(n,i)=>this.br(e,n,i).next(e=>e?ii.resolve():t(i)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ii(e,i=>this.br(e,i,t).next(e=>{e||(n++,r.removeEntry(i,Yn.min()))})).next(()=>r.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),ii.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),ii.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),ii.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),ii.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ki(e.data.value)),t}br(e,t,n){return ii.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.pi.get(t);return ii.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=i}static As(e,t){let n=Kr(),i=Kr();for(const r of t.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new So(e,t.fromCache,n,i)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=pe()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")>0?6:4}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,i){const r={result:null};return this.ys(e,t).next(e=>{r.result=e}).next(()=>{if(!r.result)return this.ws(e,t,i,n).next(e=>{r.result=e})}).next(()=>{if(r.result)return;const n=new To;return this.Ss(e,t,n).next(i=>{if(r.result=i,this.Vs)return this.bs(e,t,n,i.size)})}).next(()=>r.result)}bs(e,t,n,i){return n.documentReadCount<this.fs?(ln()<=Ce.DEBUG&&cn("QueryEngine","SDK will not create cache indexes for query:",Or(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ii.resolve()):(ln()<=Ce.DEBUG&&cn("QueryEngine","Query:",Or(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.gs*i?(ln()<=Ce.DEBUG&&cn("QueryEngine","The SDK decides to create cache indexes for query:",Or(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dr(t))):ii.resolve())}ys(e,t){if(xr(t))return ii.resolve(null);let n=Dr(t);return this.indexManager.getIndexType(e,n).next(i=>0===i?null:(null!==t.limit&&1===i&&(t=Mr(t,null,"F"),n=Dr(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const r=Kr(...i);return this.ps.getDocuments(e,r).next(i=>this.indexManager.getMinOffset(e,n).next(n=>{const s=this.Ds(t,i);return this.Cs(t,s,r,n.readTime)?this.ys(e,Mr(t,null,"F")):this.vs(e,s,t,n)}))})))}ws(e,t,n,i){return xr(t)||i.isEqual(Yn.min())?ii.resolve(null):this.ps.getDocuments(e,n).next(r=>{const s=this.Ds(t,r);return this.Cs(t,s,n,i)?ii.resolve(null):(ln()<=Ce.DEBUG&&cn("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Or(t)),this.vs(e,s,t,function(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=Yn.fromTimestamp(1e9===i?new Qn(n+1,0):new Qn(n,i));return new Zn(r,jn.empty(),t)}(i,-1)).next(e=>e))})}Ds(e,t){let n=new mi(function(e){return(t,n)=>{let i=!1;for(const r of kr(e)){const e=Rr(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}(e));return t.forEach((t,i)=>{Lr(e,i)&&(n=n.add(i))}),n}Cs(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ss(e,t,n){return ln()<=Ce.DEBUG&&cn("QueryEngine","Using full collection scan to execute query:",Or(t)),this.ps.getDocumentsMatchingQuery(e,t,Zn.min(),n)}vs(e,t,n,i){return this.ps.getDocumentsMatchingQuery(e,n,i).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t,n,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new fi(Dn),this.xs=new Vr(e=>Cr(e),Ir),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ao(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}async function Io(e,t){const n=mn(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next(r=>(i=r,n.Bs(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const r=[],s=[];let o=Kr();for(const e of i){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({Ls:e,removedBatchIds:r,addedBatchIds:s}))})})}function Ao(e,t){const n=mn(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}class xo{constructor(){this.activeTargetIds=Xr}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ko{constructor(){this.Mo=new xo,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new xo,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{Oo(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="ConnectivityMonitor";class No{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){cn(Mo,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){cn(Mo,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po=null;function Oo(){return null===Po?Po=268435456+Math.round(2147483648*Math.random()):Po++,"0x"+Po.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Lo="RestConnection",Ro={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Vo{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${i}`,this.Wo=this.databaseId.database===Pi?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Go(e,t,n,i,r){const s=Oo(),o=this.zo(e,t.toUriEncodedString());cn(Lo,`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(a,i,r);const{host:l}=new URL(o),c=ue(l);return this.Jo(e,o,a,n,c).then(t=>(cn(Lo,`Received RPC '${e}' ${s}: `,t),t),t=>{throw hn(Lo,`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t})}Ho(e,t,n,i,r,s){return this.Go(e,t,n,i,r)}jo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+on,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}zo(e,t){const n=Ro[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="WebChannelConnection";class Uo extends Vo{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,i,r){const s=Oo();return new Promise((r,o)=>{const a=new Wt;a.setWithCredentials(!0),a.listenOnce(Xt.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Qt.NO_ERROR:const t=a.getResponseJson();cn(Bo,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),r(t);break;case Qt.TIMEOUT:cn(Bo,`RPC '${e}' ${s} timed out`),o(new yn(vn.DEADLINE_EXCEEDED,"Request time out"));break;case Qt.HTTP_ERROR:const n=a.getStatus();if(cn(Bo,`RPC '${e}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=e?.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(vn).indexOf(t)>=0?t:vn.UNKNOWN}(t.status);o(new yn(e,t.message))}else o(new yn(vn.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new yn(vn.UNAVAILABLE,"Connection failed."));break;default:fn(9055,{l_:e,streamId:s,h_:a.getLastErrorCode(),P_:a.getLastError()})}}finally{cn(Bo,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);cn(Bo,`RPC '${e}' ${s} sending request:`,i),a.send(t,"POST",l,n,15)})}T_(e,t,n){const i=Oo(),r=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=en(),o=Zt(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.jo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=r.join("");cn(Bo,`Creating RPC '${e}' stream ${i}: ${c}`,a);const u=s.createWebChannel(c,a);this.I_(u);let h=!1,d=!1;const f=new Fo({Yo:t=>{d?cn(Bo,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(h||(cn(Bo,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),cn(Bo,`RPC '${e}' stream ${i} sending:`,t),u.send(t))},Zo:()=>u.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(t){setTimeout(()=>{throw t},0)}})};return p(u,Kt.EventType.OPEN,()=>{d||(cn(Bo,`RPC '${e}' stream ${i} transport opened.`),f.o_())}),p(u,Kt.EventType.CLOSE,()=>{d||(d=!0,cn(Bo,`RPC '${e}' stream ${i} transport closed`),f.a_(),this.E_(u))}),p(u,Kt.EventType.ERROR,t=>{d||(d=!0,hn(Bo,`RPC '${e}' stream ${i} transport errored. Name:`,t.name,"Message:",t.message),f.a_(new yn(vn.UNAVAILABLE,"The operation could not be completed")))}),p(u,Kt.EventType.MESSAGE,t=>{if(!d){const n=t.data[0];gn(!!n,16349);const r=n,s=r?.error||r[0]?.error;if(s){cn(Bo,`RPC '${e}' stream ${i} received error:`,s);const t=s.status;let n=function(e){const t=Ds[e];if(void 0!==t)return function(e){if(void 0===e)return un("GRPC error has no .code"),vn.UNKNOWN;switch(e){case Ds.OK:return vn.OK;case Ds.CANCELLED:return vn.CANCELLED;case Ds.UNKNOWN:return vn.UNKNOWN;case Ds.DEADLINE_EXCEEDED:return vn.DEADLINE_EXCEEDED;case Ds.RESOURCE_EXHAUSTED:return vn.RESOURCE_EXHAUSTED;case Ds.INTERNAL:return vn.INTERNAL;case Ds.UNAVAILABLE:return vn.UNAVAILABLE;case Ds.UNAUTHENTICATED:return vn.UNAUTHENTICATED;case Ds.INVALID_ARGUMENT:return vn.INVALID_ARGUMENT;case Ds.NOT_FOUND:return vn.NOT_FOUND;case Ds.ALREADY_EXISTS:return vn.ALREADY_EXISTS;case Ds.PERMISSION_DENIED:return vn.PERMISSION_DENIED;case Ds.FAILED_PRECONDITION:return vn.FAILED_PRECONDITION;case Ds.ABORTED:return vn.ABORTED;case Ds.OUT_OF_RANGE:return vn.OUT_OF_RANGE;case Ds.UNIMPLEMENTED:return vn.UNIMPLEMENTED;case Ds.DATA_LOSS:return vn.DATA_LOSS;default:return fn(39323,{code:e})}}(t)}(t),r=s.message;void 0===n&&(n=vn.INTERNAL,r="Unknown error status: "+t+" with message "+s.message),d=!0,f.a_(new yn(n,r)),u.close()}else cn(Bo,`RPC '${e}' stream ${i} received:`,n),f.u_(n)}}),p(o,Jt.STAT_EVENT,t=>{t.stat===Yt.PROXY?cn(Bo,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===Yt.NOPROXY&&cn(Bo,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{f.__()},0),f}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function jo(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(e){return new Ns(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t,n=1e3,i=1.5,r=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=i,this.R_=r,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-n);i>0&&cn("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o="PersistentStream";class qo{constructor(e,t,n,i,r,s,o,a){this.Mi=e,this.S_=n,this.b_=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Go(e,t)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,4!==e?this.M_.reset():t&&t.code===vn.RESOURCE_EXHAUSTED?(un(t.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===vn.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.D_===t&&this.G_(e,n)},t=>{e(()=>{const e=new yn(vn.UNKNOWN,"Fetching auth token failed: "+t.message);return this.z_(e)})})}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(e=>{n(()=>this.z_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.F_?this.J_(e):this.onNext(e))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return cn($o,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(cn($o,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ho extends qo{constructor(e,t,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return gn(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,gn(!e.writeResults||0===e.writeResults.length,55816),this.listener.ta()}onNext(e){gn(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=function(e,t){return e&&e.length>0?(gn(void 0!==t,14353),e.map(e=>function(e,t){let n=e.updateTime?Rs(e.updateTime):Rs(t);return n.isEqual(Yn.min())&&(n=Rs(t)),new hs(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=Rs(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=function(e){return new Fn(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>function(e,t){let n;if(t instanceof bs)n={update:js(e,t.key,t.value)};else if(t instanceof Cs)n={delete:Bs(e,t.key)};else if(t instanceof Es)n={update:js(e,t.key,t.data),updateMask:qs(t.fieldMask)};else{if(!(t instanceof Is))return fn(16599,{Vt:t.type});n={verify:Bs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof is)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof rs)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof os)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ls)return{fieldPath:t.field.canonicalString(),increment:n.Ae};throw fn(20930,{transform:t.transform})}(0,e))),t.precondition.isNone||(n.currentDocument=(i=e,void 0!==(r=t.precondition).updateTime?{updateTime:Ls(i,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:fn(27497))),n;var i,r}(this.serializer,e))};this.q_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{}class Ko extends Wo{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new yn(vn.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.Go(e,Fs(t,n),i,r,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===vn.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new yn(vn.UNKNOWN,e.toString())})}Ho(e,t,n,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ho(e,Fs(t,n),i,s,o,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===vn.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new yn(vn.UNKNOWN,e.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Xo{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,"Online"===e&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(un(t),this.aa=!1):cn("OnlineStateTracker",t)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="RemoteStore";class Yo{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=r,this.Aa.Oo(e=>{n.enqueueAndForget(async()=>{ea(this)&&(cn(Qo,"Restarting streams for network reachability change."),await async function(e){const t=mn(e);t.Ea.add(4),await Zo(t),t.Ra.set("Unknown"),t.Ea.delete(4),await Jo(t)}(this))})}),this.Ra=new Xo(n,i)}}async function Jo(e){if(ea(e))for(const t of e.da)await t(!0)}async function Zo(e){for(const t of e.da)await t(!1)}function ea(e){return 0===mn(e).Ea.size}async function ta(e,t,n){if(!ri(t))throw t;e.Ea.add(1),await Zo(e),e.Ra.set("Offline"),n||(n=()=>function(e){const t=mn(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{cn(Qo,"Retrying IndexedDB access"),await n(),e.Ea.delete(1),await Jo(e)})}function na(e,t){return t().catch(n=>ta(e,n,t))}async function ia(e){const t=mn(e),n=fa(t);let i=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:-1;for(;ra(t);)try{const e=await Ao(t.localStore,i);if(null===e){0===t.Ta.length&&n.L_();break}i=e.batchId,sa(t,e)}catch(r){await ta(t,r)}oa(t)&&aa(t)}function ra(e){return ea(e)&&e.Ta.length<10}function sa(e,t){e.Ta.push(t);const n=fa(e);n.O_()&&n.X_&&n.ea(t.mutations)}function oa(e){return ea(e)&&!fa(e).x_()&&e.Ta.length>0}function aa(e){fa(e).start()}async function la(e){fa(e).ra()}async function ca(e){const t=fa(e);for(const n of e.Ta)t.ea(n.mutations)}async function ua(e,t,n){const i=e.Ta.shift(),r=xs.from(i,t,n);await na(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await ia(e)}async function ha(e,t){t&&fa(e).X_&&await async function(e,t){if(function(e){switch(e){case vn.OK:return fn(64938);case vn.CANCELLED:case vn.UNKNOWN:case vn.DEADLINE_EXCEEDED:case vn.RESOURCE_EXHAUSTED:case vn.INTERNAL:case vn.UNAVAILABLE:case vn.UNAUTHENTICATED:return!1;case vn.INVALID_ARGUMENT:case vn.NOT_FOUND:case vn.ALREADY_EXISTS:case vn.PERMISSION_DENIED:case vn.FAILED_PRECONDITION:case vn.ABORTED:case vn.OUT_OF_RANGE:case vn.UNIMPLEMENTED:case vn.DATA_LOSS:return!0;default:return fn(15467,{code:e})}}(n=t.code)&&n!==vn.ABORTED){const n=e.Ta.shift();fa(e).B_(),await na(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await ia(e)}var n}(e,t),oa(e)&&aa(e)}async function da(e,t){const n=mn(e);n.asyncQueue.verifyOperationInProgress(),cn(Qo,"RemoteStore received new credentials");const i=ea(n);n.Ea.add(3),await Zo(n),i&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await Jo(n)}function fa(e){return e.fa||(e.fa=function(e,t,n){const i=mn(e);return i.sa(),new Ho(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{Xo:()=>Promise.resolve(),t_:la.bind(null,e),r_:ha.bind(null,e),ta:ca.bind(null,e),na:ua.bind(null,e)}),e.da.push(async t=>{t?(e.fa.B_(),await ia(e)):(await e.fa.stop(),e.Ta.length>0&&(cn(Qo,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class pa{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new pa(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new yn(vn.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ga(e,t){if(un("AsyncQueue",`${t}: ${e}`),ri(e))return new yn(vn.UNAVAILABLE,`${t}: ${e}`);throw e}class ma{constructor(){this.queries=va(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,t){const n=mn(e),i=n.queries;n.queries=va(),i.forEach((e,n)=>{for(const i of n.Sa)i.onError(t)})}(this,new yn(vn.ABORTED,"Firestore shutting down"))}}function va(){return new Vr(e=>Pr(e),Nr)}var ya,wa;(wa=ya||(ya={})).Ma="default",wa.Cache="cache";class ba{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Pu={},this.Tu=new Vr(e=>Pr(e),Nr),this.Iu=new Map,this.Eu=new Set,this.du=new fi(jn.comparator),this.Au=new Map,this.Ru=new ho,this.Vu={},this.mu=new Map,this.fu=Zs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function Ea(e,t,n){const i=function(e){const t=mn(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ta.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=_a.bind(null,t),t}(e);try{const e=await function(e,t){const n=mn(e),i=Qn.now(),r=t.reduce((e,t)=>e.add(t.key),Kr());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=Br(),l=Kr();return n.Ns.getEntries(e,r).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(r=>{s=r;const o=[];for(const e of t){const t=ys(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new Es(e.key,t,er(t.value.mapValue),ds.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)}).next(t=>{o=t;const i=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)})}).then(()=>({batchId:o.batchId,changes:zr(s)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.Vu[e.currentUser.toKey()];i||(i=new fi(Dn)),i=i.insert(t,n),e.Vu[e.currentUser.toKey()]=i}(i,e.batchId,n),await Aa(i,e.changes),await ia(i.remoteStore)}catch(r){const e=ga(r,"Failed to persist write");n.reject(e)}}function Sa(e,t,n){const i=mn(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.Tu.forEach((n,i)=>{const r=i.view.va(t);r.snapshot&&e.push(r.snapshot)}),function(e,t){const n=mn(e);n.onlineState=t;let i=!1;n.queries.forEach((e,n)=>{for(const r of n.Sa)r.va(t)&&(i=!0)}),i&&function(e){e.Ca.forEach(e=>{e.next()})}(n)}(i.eventManager,t),e.length&&i.Pu.H_(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Ta(e,t){const n=mn(e),i=t.batch.batchId;try{const e=await function(e,t){const n=mn(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const i=t.batch.keys(),r=n.Ns.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const r=n.batch,s=r.keys();let o=ii.resolve();return s.forEach(e=>{o=o.next(()=>i.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);gn(null!==s,48541),t.version.compareTo(s)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,r))}(n,e,t,r).next(()=>r.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Kr();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,i))})}(n.localStore,t);Ia(n,i,null),Ca(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Aa(n,e)}catch(r){await ni(r)}}async function _a(e,t,n){const i=mn(e);try{const e=await function(e,t){const n=mn(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(gn(null!==t,37113),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i)).next(()=>n.localDocuments.getDocuments(e,i))})}(i.localStore,t);Ia(i,t,n),Ca(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Aa(i,e)}catch(r){await ni(r)}}function Ca(e,t){(e.mu.get(t)||[]).forEach(e=>{e.resolve()}),e.mu.delete(t)}function Ia(e,t,n){const i=mn(e);let r=i.Vu[i.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),i.Vu[i.currentUser.toKey()]=r}}async function Aa(e,t,n){const i=mn(e),r=[],s=[],o=[];i.Tu.isEmpty()||(i.Tu.forEach((e,a)=>{o.push(i.pu(a,t,n).then(e=>{if((e||n)&&i.isPrimaryClient){const t=e?!e.fromCache:n?.targetChanges.get(a.targetId)?.current;i.sharedClientState.updateQueryState(a.targetId,t?"current":"not-current")}if(e){r.push(e);const t=So.As(a.targetId,e);s.push(t)}}))}),await Promise.all(o),i.Pu.H_(r),await async function(e,t){const n=mn(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>ii.forEach(t,t=>ii.forEach(t.Es,i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i)).next(()=>ii.forEach(t.ds,i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))}catch(i){if(!ri(i))throw i;cn("LocalStore","Failed to update sequence numbers: "+i)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ms.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.Ms=n.Ms.insert(e,r)}}}(i.localStore,s))}async function xa(e,t){const n=mn(e);if(!n.currentUser.isEqual(t)){cn("SyncEngine","User change. New user:",t.toKey());const e=await Io(n.localStore,t);n.currentUser=t,r="'waitForPendingWrites' promise is rejected due to a user change.",(i=n).mu.forEach(e=>{e.forEach(e=>{e.reject(new yn(vn.CANCELLED,r))})}),i.mu.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Aa(n,e.Ls)}var i,r}class ka{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zo(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return function(e,t,n,i){return new Co(e,t,n,i)}(this.persistence,new _o,e.initialUser,this.serializer)}Cu(e){return new yo(bo.mi,this.serializer)}Du(e){return new ko}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ka.provider={build:()=>new ka};class Da extends ka{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){gn(this.persistence.referenceDelegate instanceof Eo,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new io(n,e.asyncQueue,t)}Cu(e){const t=void 0!==this.cacheSizeBytes?Js.withCacheSize(this.cacheSizeBytes):Js.DEFAULT;return new yo(e=>Eo.mi(e,t),this.serializer)}}class Ma{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Sa(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=xa.bind(null,this.syncEngine),await async function(e,t){const n=mn(e);t?(n.Ea.delete(2),await Jo(n)):t||(n.Ea.add(2),await Zo(n),n.Ra.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ma}createDatastore(e){const t=zo(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new Uo(i));var i;return function(e,t,n,i){return new Ko(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,i=e.asyncQueue,r=e=>Sa(this.syncEngine,e,0),s=No.v()?new No:new Do,new Yo(t,n,i,r,s);var t,n,i,r,s}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){const a=new ba(e,t,n,i,r,s);return o&&(a.gu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){const t=mn(e);cn(Qo,"RemoteStore shutting down."),t.Ea.add(5),await Zo(t),t.Aa.shutdown(),t.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ma.provider={build:()=>new Ma};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Na="FirestoreClient";class Pa{constructor(e,t,n,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=sn.UNAUTHENTICATED,this.clientId=kn.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(n,async e=>{cn(Na,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(cn(Na,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ga(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Oa(e,t){e.asyncQueue.verifyOperationInProgress(),cn(Na,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async e=>{i.isEqual(e)||(await Io(t.localStore,e),i=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function La(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){cn(Na,"Using user provided OfflineComponentProvider");try{await Oa(e,e._uninitializedComponentsProvider._offline)}catch(t){const r=t;if(!("FirebaseError"===(n=r).name?n.code===vn.FAILED_PRECONDITION||n.code===vn.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw r;hn("Error using user provided cache. Falling back to memory cache: "+r),await Oa(e,new ka)}}else cn(Na,"Using default OfflineComponentProvider"),await Oa(e,new Da(void 0));var n;return e._offlineComponents}(e);cn(Na,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>da(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>da(t.remoteStore,n)),e._onlineComponents=t}function Ra(e){return async function(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(cn(Na,"Using user provided OnlineComponentProvider"),await La(e,e._uninitializedComponentsProvider._online)):(cn(Na,"Using default OnlineComponentProvider"),await La(e,new Ma))),e._onlineComponents}(e).then(e=>e.syncEngine)}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Fa=new Map,Ba="firestore.googleapis.com",Ua=!0;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new yn(vn.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ba,this.ssl=Ua}else this.host=e.host,this.ssl=e.ssl??Ua;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=Ys;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new yn(vn.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,i){if(!0===t&&!0===i)throw new yn(vn.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Va(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new yn(vn.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new yn(vn.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new yn(vn.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class za{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ja({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new yn(vn.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new yn(vn.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ja(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new En;switch(e.type){case"firstParty":return new Cn(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new yn(vn.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Fa.get(e);t&&(cn("ComponentProvider","Removing Datastore"),Fa.delete(e),t.terminate())}(this),Promise.resolve()}}function Ga(e,t,n,i={}){e=qn(e,za);const r=ue(t),s=e._getSettings(),o={...s,emulatorOptions:e._getEmulatorOptions()},a=`${t}:${n}`;r&&(async function(e){(await fetch(e,{credentials:"include"})).ok}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(`https://${a}`),fe("Firestore",!0)),s.host!==Ba&&s.host!==a&&hn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:a,ssl:r,emulatorOptions:i};if(!ye(l,o)&&(e._setSettings(l),i.mockUserToken)){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=sn.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s={iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...e};return[ie(JSON.stringify({alg:"none",type:"JWT"})),ie(JSON.stringify(s)),""].join(".")}(i.mockUserToken,e._app?.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new yn(vn.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new sn(r)}e._authCredentials=new Sn(new bn(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new $a(this.firestore,e,this._query)}}class qa{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ha(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qa(this.firestore,e,this._key)}toJSON(){return{type:qa._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Wn(t,qa._jsonSchema))return new qa(e,n||null,new jn(Fn.fromString(t.referencePath)))}}qa._jsonSchemaVersion="firestore/documentReference/1.0",qa._jsonSchema={type:Hn("string",qa._jsonSchemaVersion),referencePath:Hn("string")};class Ha extends $a{constructor(e,t,n){super(e,t,function(e){return new Ar(e)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qa(this.firestore,null,new jn(e))}withConverter(e){return new Ha(this.firestore,e,this._path)}}function Wa(e,t,...n){if(e=be(e),1===arguments.length&&(t=kn.newId()),function(e,t,n){if(!n)throw new yn(vn.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("doc","path",t),e instanceof za){const i=Fn.fromString(t,...n);return zn(i),new qa(e,null,new jn(i))}{if(!(e instanceof qa||e instanceof Ha))throw new yn(vn.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Fn.fromString(t,...n));return zn(i),new qa(e.firestore,e instanceof Ha?e.converter:null,new jn(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="AsyncQueue";class Xa{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Go(this,"async_queue_retry"),this._c=()=>{const e=jo();e&&cn(Ka,"Visibility state changed to "+e.visibilityState),this.M_.w_()},this.ac=e;const t=jo();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=jo();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new wn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(0!==this.Xu.length){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ri(e))throw e;cn(Ka,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(e=>{throw this.nc=e,this.rc=!1,un("INTERNAL UNHANDLED ERROR: ",Qa(e)),e}).then(e=>(this.rc=!1,e))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=pa.createAndSchedule(this,e,t,n,e=>this.hc(e));return this.tc.push(i),i}uc(){this.nc&&fn(47125,{Pc:Qa(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do{e=this.ac,await e}while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Qa(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class Ya extends za{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Xa,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xa(e),this._firestoreClient=void 0,await e}}}function Ja(e,t){const n="object"==typeof e?e:function(e=_t){const t=It.get(e);if(!t&&e===_t&&le())return Pt();if(!t)throw Mt.create("no-app",{appName:e});return t}(),i="string"==typeof e?e:Pi,r=function(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const e=ae("firestore");e&&Ga(r,...e)}return r}function Za(e){if(e._terminated)throw new yn(vn.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){const t=e._freezeSettings(),n=(i=e._databaseId,r=e._app?.options.appId||"",s=e._persistenceKey,o=t,new Ni(i,r,s,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,Va(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator));var i,r,s,o;e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new Pa(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(e){const t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),e._firestoreClient}class el{constructor(e){this._byteString=e}static fromBase64String(e){try{return new el(bi.fromBase64String(e))}catch(t){throw new yn(vn.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new el(bi.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:el._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Wn(e,el._jsonSchema))return el.fromBase64String(e.bytes)}}el._jsonSchemaVersion="firestore/bytes/1.0",el._jsonSchema={type:Hn("string",el._jsonSchemaVersion),bytes:Hn("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tl{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new yn(vn.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Un(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new yn(vn.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new yn(vn.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Dn(this._lat,e._lat)||Dn(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:il._jsonSchemaVersion}}static fromJSON(e){if(Wn(e,il._jsonSchema))return new il(e.latitude,e.longitude)}}il._jsonSchemaVersion="firestore/geoPoint/1.0",il._jsonSchema={type:Hn("string",il._jsonSchemaVersion),latitude:Hn("number"),longitude:Hn("number")};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rl{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:rl._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Wn(e,rl._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new rl(e.vectorValues);throw new yn(vn.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rl._jsonSchemaVersion="firestore/vectorValue/1.0",rl._jsonSchema={type:Hn("string",rl._jsonSchemaVersion),vectorValues:Hn("object")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sl=/^__.*__$/;class ol{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Es(e,this.data,this.fieldMask,t,this.fieldTransforms):new bs(e,this.data,t,this.fieldTransforms)}}function al(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fn(40011,{Ac:e})}}class ll{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Rc(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ll({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return wl(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(0===e.length)throw this.Sc("Document fields must not be empty");if(al(this.Ac)&&sl.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class cl{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||zo(e)}Cc(e,t,n,i=!1){return new ll({Ac:e,methodName:t,Dc:n,path:Un.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ul(e){const t=e._freezeSettings(),n=zo(e._databaseId);return new cl(e._databaseId,!!t.ignoreUndefinedProperties,n)}function hl(e,t,n,i,r,s={}){const o=e.Cc(s.merge||s.mergeFields?2:0,t,n,r);gl("Data must be an object, but it was:",o,i);const a=fl(i,o);let l,c;if(s.merge)l=new yi(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=ml(t,i,n);if(!o.contains(r))throw new yn(vn.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);bl(e,r)||e.push(r)}l=new yi(e),c=o.fieldTransforms.filter(e=>l.covers(e.field))}else l=null,c=o.fieldTransforms;return new ol(new Zi(a),l,c)}function dl(e,t){if(pl(e=be(e)))return gl("Unsupported field value:",t,e),fl(e,t);if(e instanceof nl)return function(e,t){if(!al(t.Ac))throw t.Sc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Sc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.fc&&4!==t.Ac)throw t.Sc("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=dl(r,t.wc(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=be(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Jr(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Qn.fromDate(e);return{timestampValue:Ps(t.serializer,n)}}if(e instanceof Qn){const n=new Qn(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ps(t.serializer,n)}}if(e instanceof il)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof el)return{bytesValue:Os(t.serializer,e._byteString)};if(e instanceof qa){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.Sc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Vs(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof rl)return n=e,i=t,{mapValue:{fields:{[Li]:{stringValue:Fi},[Bi]:{arrayValue:{values:n.toArray().map(e=>{if("number"!=typeof e)throw i.Sc("VectorValues must only contain numeric values.");return Qr(i.serializer,e)})}}}}};var n,i;throw t.Sc(`Unsupported field value: ${$n(e)}`)}(e,t)}function fl(e,t){const n={};return di(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):hi(e,(e,i)=>{const r=dl(i,t.mc(e));null!=r&&(n[e]=r)}),{mapValue:{fields:n}}}function pl(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Qn||e instanceof il||e instanceof el||e instanceof qa||e instanceof nl||e instanceof rl)}function gl(e,t,n){if(!pl(n)||!Gn(n)){const i=$n(n);throw"an object"===i?t.Sc(e+" a custom object"):t.Sc(e+" "+i)}}function ml(e,t,n){if((t=be(t))instanceof tl)return t._internalPath;if("string"==typeof t)return yl(e,t);throw wl("Field path arguments must be of type string or ",e,!1,void 0,n)}const vl=new RegExp("[~\\*/\\[\\]]");function yl(e,t,n){if(t.search(vl)>=0)throw wl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new tl(...t.split("."))._internalPath}catch(i){throw wl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function wl(e,t,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new yn(vn.INVALID_ARGUMENT,a+e+l)}function bl(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new qa(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Sl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Tl("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Sl extends El{data(){return super.data()}}function Tl(e,t){return"string"==typeof t?yl(e,t):t instanceof tl?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cl extends El{constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Il(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Tl("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new yn(vn.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Cl._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}Cl._jsonSchemaVersion="firestore/documentSnapshot/1.0",Cl._jsonSchema={type:Hn("string",Cl._jsonSchemaVersion),bundleSource:Hn("string","DocumentSnapshot"),bundleName:Hn("string"),bundle:Hn("string")};class Il extends Cl{data(e={}){return super.data(e)}}class Al{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new _l(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Il(this._firestore,this._userDataWriter,n.key,n,new _l(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new yn(vn.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const i=new Il(e._firestore,e._userDataWriter,n.doc.key,n.doc,new _l(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const i=new Il(e._firestore,e._userDataWriter,t.doc.key,t.doc,new _l(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,s=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:xl(t.type),doc:i,oldIndex:r,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new yn(vn.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Al._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=kn.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],i=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),i.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function xl(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fn(61501,{type:e})}}function kl(e,t,n){e=qn(e,qa);const i=qn(e.firestore,Ya),r=function(e,t){let n;return n=e?e.toFirestore(t):t,n}(e.converter,t);return function(e,t){return function(e,t){const n=new wn;return e.asyncQueue.enqueueAndForget(async()=>Ea(await Ra(e),t,n)),n.promise}(Za(e),t)}(i,[hl(ul(i),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,ds.none())])}Al._jsonSchemaVersion="firestore/querySnapshot/1.0",Al._jsonSchema={type:Hn("string",Al._jsonSchemaVersion),bundleSource:Hn("string","QuerySnapshot"),bundleName:Hn("string"),bundle:Hn("string")},function(e,t=!0){on="12.5.0",Dt(new Ee("firestore",(e,{instanceIdentifier:n,options:i})=>{const r=e.getProvider("app").getImmediate(),s=new Ya(new Tn(e.getProvider("auth-internal")),new An(r,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new yn(vn.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oi(e.options.projectId,t)}(r,n),r);return i={useFetchStreams:t,...i},s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),Ot(nn,rn,e),Ot(nn,rn,"esm2020")}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ot("firebase","12.5.0","app");export{J as N,Y as S,kl as a,Wa as d,Ja as g,Pt as i,n as s};
//# sourceMappingURL=vendor-DT1MiZMg.js.map
