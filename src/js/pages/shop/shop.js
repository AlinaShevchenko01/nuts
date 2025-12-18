import { reuseFunctions } from "@/js/reuse-functions.js";
import {useLoadFunction} from "lazy-viewport-loader";
import { getProducts } from "@/js/firebase/get-products.js";
import {closeSelects} from "@/js/partials/select/close-selects.js";

document.addEventListener("DOMContentLoaded", async () => {
    reuseFunctions();
    const products = await getProducts();

    useLoadFunction(
        () => import("@/js/pages/shop/shop-custom-select.js"),
        ".shop-market",
        [products],
        { threshold: 0, rootMargin: "200px" },
    );
    closeSelects()

    useLoadFunction(
        () => import("@/js/pages/shop/shop-filters.js"),
        ".shop-market",
        [products],
        { threshold: 0, rootMargin: "200px" },
    );

    useLoadFunction(
        () => import("@/js/partials/swiper-production.js"),
        ".shop-info",
        [".shop-info__swiper"],
        { threshold: 0, rootMargin: "200px" },
    );
});