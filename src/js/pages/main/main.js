import { useLoadFunction } from "lazy-viewport-loader";
import { reuseFunctions } from "@/js/reuse-functions.js";
import { initTooltip } from "@/js/partials/tooltip.js";
import { flipCards } from "@/js/pages/main/flip-card.js";


document.addEventListener("DOMContentLoaded", async () => {
  reuseFunctions();
  initTooltip();
  flipCards();


  useLoadFunction(
    () => import("@/js/partials/render-shop-card.js"),
    ".main-products",
    [],
    { threshold: 0, rootMargin: "200px" },
  );

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
});
