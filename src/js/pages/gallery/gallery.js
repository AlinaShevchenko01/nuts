import { useLoadFunction } from "lazy-viewport-loader";
import { reuseFunctions } from "@/js/reuse-functions.js";
import {flipCards} from "@/js/partials/flip-card.js";


document.addEventListener("DOMContentLoaded", () => {
    reuseFunctions();
    flipCards('.gallery-photo__card');
})