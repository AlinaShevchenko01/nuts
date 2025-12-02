import Swiper from "swiper";
import { Controller } from "swiper/modules";
import "swiper/css";
import {initTabsControl} from "@/js/partials/connect-swipers.js";
import {lazyLoadSwiper} from "@/js/partials/swiper-lazy-loading.js";

export function initForCustomersSwipers() {
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

  initTabsControl(tabsSwiper, pageSwiper, '.for-customers-info__tabs .for-customers-info__tab');
  lazyLoadSwiper(pageSwiper)
}
