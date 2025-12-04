import { reuseFunctions } from "@/js/reuse-functions.js";
import {useLoadFunction} from "lazy-viewport-loader";
import {initCustomSelect} from "@/js/partials/custom-select.js";

document.addEventListener("DOMContentLoaded", async () => {
    reuseFunctions();
    initCustomSelect();

    useLoadFunction(
        () => import("@/js/partials/render-shop-card.js"),
        ".shop-hero",
        [],
        { threshold: 0, rootMargin: "200px" },
    );

    useLoadFunction(
        () => import("@/js/partials/swiper-production.js"),
        ".shop-info",
        [".shop-info__swiper"],
        { threshold: 0, rootMargin: "200px" },
    );
});