import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { lazyLoadSwiper } from "@/js/partials/swiper-lazy-loading.js";

export function initSwiperNews() {
  const swiperNews = new Swiper(".news__swiper", {
    modules: [Navigation],
    loop: true,
    navigation: {
      nextEl: `.news__btn_next`,
      prevEl: `.news__btn_prev`,
    },
    grabCursor: true,
    speed: 700,

    breakpoints: {
      0: {
        spaceBetween: 16,
        slidesPerView: 1.2,
      },
      575: {
        slidesPerView: 1.5,
      },
      768: {
        spaceBetween: 16,
        slidesPerView: 2.5,
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
      },
    },
  });

  lazyLoadSwiper(swiperNews);
}
