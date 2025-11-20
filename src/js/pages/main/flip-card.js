export function flipCards() {
  const cards = document.querySelectorAll(".main-benefit__card");
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      card.classList.toggle("flip");
    });
  });
}
