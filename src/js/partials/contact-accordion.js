export function initAccordion() {
  const btn = document.querySelector(".contact__title");
  const accordion = document.querySelector(".contact__accordion");

  btn.addEventListener("click", (e) => {
    accordion.classList.toggle("open");
    btn.querySelector(".contact__arrow").classList.toggle("rotate");
  });
}
