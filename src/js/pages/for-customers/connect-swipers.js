import Swiper from "swiper";
import { Controller } from "swiper/modules";
import "swiper/css";

export function connectSwipers() {
  const pageSwiper = new Swiper(".for-customers-info__page-swiper", {
    modules: [Controller],
    speed: 1000,
    grabCursor: true,
  });

  const tabsSwiper = new Swiper(".for-customers-info__tabs", {
    modules: [Controller],
    speed: 700,
    grabCursor: true,

    breakpoints: {
      0: {
        slidesPerView: 1.7,
        spaceBetween: 30,
      },

      575: {
        slidesPerView: 2.1,
        spaceBetween: 15,
      },

      768: {
        slidesPerView: 3.2,
        spaceBetween: 30,
      },

      1024: {
        slidesPerView: 4.2,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  tabsSwiper.controller.control = pageSwiper;
  pageSwiper.controller.control = tabsSwiper;

  function updateActiveTab(index) {
    const tabs = document.querySelectorAll(
      ".for-customers-info__tabs .for-customers-info__tab",
    );
    tabs.forEach((tab, i) => {
      tab.classList.toggle("active", i === index);
    });
  }
  updateActiveTab(0);

  tabsSwiper.slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
      pageSwiper.slideTo(index);
      updateActiveTab(index);
    });
  });

  pageSwiper.on("slideChange", () => {
    const i = pageSwiper.realIndex;
    updateActiveTab(i);
  });
}
