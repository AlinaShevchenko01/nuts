import { reuseFunctions } from "@/js/reuse-functions.js";
import {useLoadFunction} from "lazy-viewport-loader";

document.addEventListener("DOMContentLoaded", async () => {
    reuseFunctions();

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