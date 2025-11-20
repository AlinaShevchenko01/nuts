export function loadImageElement(image) {
  const baseurl = import.meta.env.BASE_URL;
  const picture = image.closest("picture");

  if (picture) {
    const sources = picture.querySelectorAll("source[data-srcset]");
    sources.forEach((source) => {
      if (source.dataset.srcset) {
        source.srcset = baseurl + source.dataset.srcset.replace(/^\/+/, "");
        source.removeAttribute("data-srcset");
      }
    });
  }
  if (image.dataset.src) {
    image.src = baseurl + image.dataset.src.replace(/^\/+/, "");
    image.removeAttribute("data-src");
  }
}

export function lazyLoad() {
  const images = document.querySelectorAll(".img[data-src]");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target;
          loadImageElement(image);
          obs.unobserve(image);
        }
      });
    },
    {
      threshold: 0,
      root: null,
      rootMargin: "260px 0px 260px 0px",
    },
  );

  images.forEach((image) => {
    observer.observe(image);
  });
}
