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
  });

  function closeBurger() {
    if (burger.classList.contains("active")) {
      burger.classList.remove("active");
      enablePageScroll();
    }
  }

  const links = burger.querySelectorAll(".navigation__item");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      closeBurger();
    });
  });

  closeButton.addEventListener("click", (e) => {
    closeBurger();
  });

  window.addEventListener("resize", (e) => {
    closeBurger();
  });
}
