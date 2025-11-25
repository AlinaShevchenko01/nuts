import { useLoadFunction } from "lazy-viewport-loader";
import { reuseFunctions } from "@/js/reuse-functions.js";
import {openGallery} from "@/js/partials/btn-to-gallery.js";


document.addEventListener("DOMContentLoaded", () => {
    reuseFunctions();
    openGallery();

    useLoadFunction(() => import("@/js/partials/render-news-static.js"), ".news-block", [], {
        threshold: 0,
        rootMargin: "200px",
    });
})