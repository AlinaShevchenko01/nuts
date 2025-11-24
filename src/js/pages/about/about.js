import { useLoadFunction } from "lazy-viewport-loader";
import { reuseFunctions } from "@/js/reuse-functions.js";
import {flipCards} from "@/js/partials/flip-card.js";

document.addEventListener("DOMContentLoaded", () => {
    reuseFunctions();
    flipCards('.gallery-photo__card');

    useLoadFunction(
        () => import("@/js/partials/swiper-production.js"),
        ".production",
        [".production__swiper-main"],
        { threshold: 0, rootMargin: "200px" },
    );

    useLoadFunction(() => import("@/js/partials/render-news.js"), ".news", [], {
        threshold: 0,
        rootMargin: "200px",
    });
})