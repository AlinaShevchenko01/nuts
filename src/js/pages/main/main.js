import { useLoadFunction } from "lazy-viewport-loader";
import { reuseFunctions } from "@/js/reuse-functions.js";
import { initTooltip } from "@/js/partials/tooltip.js";
import { flipCards } from "@/js/partials/flip-card.js";

document.addEventListener("DOMContentLoaded", async () => {
  reuseFunctions();
  initTooltip();
  flipCards(".main-benefit__card");

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

  useLoadFunction(
    () => import("@/js/partials/render-news-swiper.js"),
    ".news",
    [],
    {
      threshold: 0,
      rootMargin: "200px",
    },
  );
});
