export function initTooltip() {
  function setTooltip() {
    document
      .querySelectorAll(".shop-card__title, .shop-card__description")
      .forEach((el) => {
        if (el.scrollWidth > el.clientWidth) {
          el.classList.add("active-tooltip");
        }
      });
  }

  setTooltip();

  window.addEventListener("resize", setTooltip);
}
