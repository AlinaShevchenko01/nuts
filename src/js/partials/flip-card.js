export function flipCards(container) {
  const cards = document.querySelectorAll(`${container}`);
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      card.classList.toggle("flip");
    });
  });
}
