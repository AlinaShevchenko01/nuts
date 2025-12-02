import { reuseFunctions } from "@/js/reuse-functions.js";
import {initCustomCardSwiper} from "@/js/partials/custom-swiper.js";
import {useLoadFunction} from "lazy-viewport-loader";

document.addEventListener("DOMContentLoaded", async () => {
    reuseFunctions();
    const card = document.querySelector('.product-hero__inner_swiper');
    initCustomCardSwiper(card);
    useLoadFunction(
        () => import("@/js/pages/product/product-swiper.js"),
        ".product-info",
        [],
        {
            threshold: 0,
            rootMargin: "140px",
        },
    );
});
