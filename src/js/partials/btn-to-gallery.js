export function openGallery() {
  const btnGallery = document.querySelector('[data-move="to-gallery"]');
  btnGallery.addEventListener("click", (e) => {
    const base = import.meta.env.BASE_URL;
    window.location.href = base + "gallery";
  });
}
