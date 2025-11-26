import { getNews } from "@/js/firebase/get-news.js";
import { lazyLoadVideo } from "@/js/partials/video.js";
import { lazyLoad } from "@/js/partials/lazy-loading.js";
import { renderNewsCards } from "@/js/partials/render-news-cards.js";

export async function renderNewsStatic() {
  const news = await getNews();
  const container = document.querySelector(".news-block__wrapper");

  const newsPart = news.slice(0, 3);

  renderNewsCards(newsPart, container);
  lazyLoadVideo();
  lazyLoad();
}
