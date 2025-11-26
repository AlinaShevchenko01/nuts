export function openNews() {
  const btnNews = document.querySelector('[data-move="to-news"]');
  btnNews.addEventListener("click", (e) => {
    const base = import.meta.env.BASE_URL;
    window.location.href = base + "news";
  });
}
