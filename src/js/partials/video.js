export function lazyLoadVideo() {
  const baseurl = import.meta.env.BASE_URL;
  const btns = document.querySelectorAll("[data-btn='play-video']");
  const videos = document.querySelectorAll("[data-video]");

  const observerVideo = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const video = entry.target;
          const source = video.querySelector("source[data-src-video]");

          if (source) {
            source.src = baseurl + source.dataset.srcVideo.replace(/^\/+/, "");
            source.removeAttribute("data-src-video");

            video.setAttribute("preload", "metadata");
            //video.load();

            observerVideo.unobserve(video);
          }
        }
      });
    },
    {
      threshold: 0,
      rootMargin: "260px 0px 260px 0px",
    },
  );

  videos.forEach((video) => {
    observerVideo.observe(video);
  });

  btns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      const containerParent = btn.closest("[data-container='parent']");
      const containerHidden = containerParent.querySelector(
        "[data-container='hidden']",
      );
      const video = containerParent.querySelector("[data-video]");
      btn.classList.add("video-play");
      video.classList.add("active");
      video.load();
      containerHidden.classList.add("video-play");
      video.addEventListener(
        "canplay",
        () => {
          video.play();
        },
        { once: true },
      );
    });
  });
}
