import Swiper from "swiper";
import { Controller } from "swiper/modules";
import "swiper/css";
import {initTabsControl} from "@/js/partials/connect-swipers.js";
import {lazyLoadSwiper} from "@/js/partials/swiper-lazy-loading.js";

export function initProductSwipers() {
    const pageSwiper = new Swiper(".product-info__swiper-pages", {
        modules: [Controller],
        speed: 1000,
        grabCursor: true,
        slidesPerView: 1,
        autoHeight: true,
    });

    const tabsSwiper = new Swiper(".product-info__swiper-tabs", {
        modules: [Controller],
        speed: 700,
        grabCursor: true,
        spaceBetween: 30,
        breakpoints: {
            0: {
                slidesPerView: 2.5,
            },
            576:{
                slidesPerView: 3.4,
            },
            1024:{
                slidesPerView: 4,
            }
        }
    })

    initTabsControl(tabsSwiper, pageSwiper, '.product-info__swiper-tabs .product-info__swiper-tabs-text');
    lazyLoadSwiper(pageSwiper)
}