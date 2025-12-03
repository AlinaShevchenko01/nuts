import Swiper from "swiper";
import { Controller } from "swiper/modules";
import "swiper/css";
import {initTabsControl} from "@/js/partials/connect-swipers.js";
import {lazyLoadSwiper} from "@/js/partials/swiper-lazy-loading.js";

export function initPaymentSwiper() {
    const pageSwiper = new Swiper(".payment-info__pages-swiper", {
        modules: [Controller],
        speed: 1000,
        grabCursor: true,
        slidesPerView: 1,
        autoHeight: true,
    })

    const tabsSwiper = new Swiper(".payment-info__swiper-tabs", {
        modules: [Controller],
        speed: 700,
        grabCursor: true,
        spaceBetween: 30,
        breakpoints: {
            0: {
                slidesPerView: 1.4,
            },
            576:{
              slidesPerView: 2.1,
            },
            768:{
                slidesPerView: 2.8,
            },
            1024: {
                slidesPerView:3,
            }
        }
    })

    initTabsControl(tabsSwiper, pageSwiper, '.payment-info__swiper-tabs .payment-info__tabs-container');
    lazyLoadSwiper(pageSwiper)
}