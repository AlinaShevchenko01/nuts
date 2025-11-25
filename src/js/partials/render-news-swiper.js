import { getNews } from "@/js/firebase/get-news.js";
import { initSwiperNews } from "@/js/partials/news-swiper.js";
import { lazyLoadVideo } from "@/js/partials/video.js";
import {renderNewsCards} from "@/js/partials/render-news-cards.js";

export async function renderNewsSwiper() {
    const news = await getNews();
    const container = document.querySelector(".news__swiper-wrapper");

    renderNewsCards(news,container);
    initSwiperNews(news);
    lazyLoadVideo();
}