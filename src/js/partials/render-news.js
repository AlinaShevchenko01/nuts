import { getNews } from "@/js/firebase/get-news.js";
import { initSwiperNews } from "@/js/partials/news-swiper.js";
import { lazyLoadVideo } from "@/js/partials/video.js";
import oneNewsPartial from "@/html/partials/one-news.html";
import imgManager from "@/html/templates/img-manager.html";
import videoManager from "@/html/templates/video-manager.html";

export async function renderOneNews() {
  const newsContainer = document.querySelector(".news__swiper-wrapper");
  newsContainer.innerHTML = "";
  const news = await getNews();

  function createOneNews() {
    news.forEach((item) => {
      const imageHtml = imgManager({
        "picture-class": "one-news__picture",
        "img-srcset": item.photo.imgSrcSet,
        "img-src": item.photo.imgSrc,
        "img-alt": "news-photo",
        "img-class": "one-news__img",
      }).toString();

      const videoHtml = item.video
        ? videoManager({
            "video-class": "one-news__video",
            "video-src": item.video,
            "video-width": "408",
            "video-height": "207",
          }).toString()
        : null;

      const oneNewsCard = oneNewsPartial({
        "one-news-date": item.date,
        "one-news-title": item.title,
        image: imageHtml,
        video: videoHtml,
      });

      oneNewsCard.render(newsContainer);
    });
    initSwiperNews();
    lazyLoadVideo();
  }
  createOneNews();
}
