import {
  disablePageScroll,
  enablePageScroll,
} from "scroll-lock/dist/scroll-lock.js";

export function moveBurger() {
  const burgerIcon = document.querySelector(".header__burger-icon");
  const burger = document.querySelector(".burger");
  const closeButton = document.querySelector(".burger__close");

  burgerIcon.addEventListener("click", (e) => {
    if (burger.classList.contains("hidden")) {
      burger.classList.remove("hidden");
    }
    burger.classList.add("active");
    disablePageScroll(burger);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  });

  function closeBurger() {
    if (burger.classList.contains("active")) {
      burger.classList.remove("active");
      enablePageScroll();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }

  closeButton.addEventListener("click", (e) => {
    closeBurger();
  });

  window.addEventListener("resize", (e) => {
    closeBurger();
  });
}
