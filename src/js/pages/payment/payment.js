import { reuseFunctions } from "@/js/reuse-functions.js";
import {useLoadFunction} from "lazy-viewport-loader";

document.addEventListener("DOMContentLoaded", async () => {
    reuseFunctions();
    useLoadFunction(
        () => import("@/js/pages/payment/payment-swiper.js"),
        ".payment-info",
        [],
        {
            threshold: 0,
            rootMargin: "140px",
        },
    );
});