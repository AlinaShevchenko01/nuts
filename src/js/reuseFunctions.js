import {changeLanguage} from "@/js/partials/language-dropdown.js";
import {moveBurger} from "@/js/partials/burger.js";
import {lazyLoad} from "@/js/partials/lazy-loading.js";
import {lazyLoadVideo} from "@/js/partials/video.js";

export function reuseFunctions () {
    lazyLoad()
    changeLanguage()
    moveBurger();
    lazyLoadVideo()
}