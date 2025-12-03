import { reuseFunctions } from "@/js/reuse-functions.js";
import {useLoadFunction} from "lazy-viewport-loader";
import {renderProductCard} from "@/js/pages/product/render-product.js";

document.addEventListener("DOMContentLoaded", async () => {
    reuseFunctions();
    await renderProductCard()

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
