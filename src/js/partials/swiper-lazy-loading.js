import { loadImageElement } from "@/js/partials/lazy-loading.js";

function lazyLoadingSwiperImage(slide) {
  const images = slide.querySelectorAll(".img[data-src]");

  images.forEach((image) => {
    loadImageElement(image);
  });
}

export function lazyLoadSwiper(swiper, preload = 2) {
  const totalSlides = swiper.slides.length;

  const loadSlides = () => {
    const activeIndex = swiper.activeIndex;

    for (let offset = -preload; offset <= preload; offset++) {
      const index = (activeIndex + offset + totalSlides) % totalSlides;
      const slide = swiper.slides[index];
      if (slide) {
        lazyLoadingSwiperImage(slide);
      }
    }
  };

  loadSlides();

  swiper.on("slideChange", loadSlides);
}
