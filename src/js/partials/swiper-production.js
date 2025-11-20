import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { lazyLoadSwiper } from "@/js/partials/swiper-lazy-loading.js";

export function initSwiper(container) {
  const swiperProduction = new Swiper(`${container} .swiper`, {
    modules: [Navigation],

    loop: true,
    navigation: {
      nextEl: `${container} .swiper-production__btn_next`,
      prevEl: `${container} .swiper-production__btn_prev`,
    },
    grabCursor: true,
    speed: 700,
  });

  //lazyLoadSwiper(swiperProduction);
}
