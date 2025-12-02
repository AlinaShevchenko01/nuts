import { reuseFunctions } from "@/js/reuse-functions.js";
import { useLoadFunction } from "lazy-viewport-loader";

document.addEventListener("DOMContentLoaded", () => {
  reuseFunctions();
  useLoadFunction(
    () => import("@/js/pages/for-customers/for-customers-swipers.js"),
    ".for-customers-info__tabs",
    [],
    {
      threshold: 0,
      rootMargin: "140px",
    },
  );
});
