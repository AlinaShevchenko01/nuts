import {disablePageScroll, enablePageScroll} from "scroll-lock/dist/scroll-lock.js";

export function moveBurger() {
    const burgerIcon = document.querySelector(".header__burger-icon");
    const burger = document.querySelector(".burger");
    const closeButton = document.querySelector(".burger__close");

    burgerIcon.addEventListener("click", (e) => {
        burger.classList.add("active");
        disablePageScroll(burger);
    })

    function closeBurger () {
        if (burger.classList.contains("active")) {
            burger.classList.remove("active");
            enablePageScroll();
        }
    }

    closeButton.addEventListener("click", (e) => {
        closeBurger();
    })

    window.addEventListener('resize', (e) => {
        closeBurger()
    })
}