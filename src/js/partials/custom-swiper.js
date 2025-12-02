export function initCustomCardSwiper(card) {
  const slides = card.querySelectorAll(".item-swiper__picture");
  const btnNext = card.querySelector(".item-swiper__btn_next");
  const btnPrev = card.querySelector(".item-swiper__btn_prev");

  let index = 0;
  slides[index].classList.add("active");

  function showSlide(i) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    if (i < 0) {
      index = slides.length - 1;
    } else if (i >= slides.length) {
      index = 0;
    } else index = i;

    slides[index].classList.add("active");
  }

  btnNext.addEventListener("click", () => {
    showSlide(index + 1);
  });

  btnPrev.addEventListener("click", () => {
    showSlide(index - 1);
  });
}
