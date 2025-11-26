import { useLoadFunction } from "lazy-viewport-loader";
import { changeLanguage } from "@/js/partials/language-dropdown.js";
import { moveBurger } from "@/js/partials/burger.js";
import { lazyLoad } from "@/js/partials/lazy-loading.js";
import { lazyLoadVideo } from "@/js/partials/video.js";
import { initAccordion } from "@/js/partials/contact-accordion.js";

export function reuseFunctions() {
  lazyLoad();
  changeLanguage();
  moveBurger();
  lazyLoadVideo();
  initAccordion();
  useLoadFunction(
      () => import("@/js/partials/map.js"),
      ".contact",
      [],
      {
        threshold: 0,
        rootMargin: "200px",
      },
  );
}
