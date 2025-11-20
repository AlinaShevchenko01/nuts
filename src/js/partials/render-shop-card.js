import { getProducts } from "@/js/firebase/get-products.js";
import { lazyLoad } from "@/js/partials/lazy-loading.js";
import { initCustomCardSwiper } from "@/js/partials/custom-swiper.js";
import cardPartial from "@/html/partials/card-shop.html";
import imgManager from "@/html/templates/img-manager.html";
import itemCharacteristics from "@/html/partials/card-characteristics.html";

export async function renderShopCard() {
  const shopContainer = document.querySelector(".shop");
  const btnMore = document.querySelector('[data-move="more"]');
  shopContainer.innerHTML = "";
  const products = await getProducts();
  const groupSize = 6;
  let renderedCards = 0;

  function createCard(product) {
    const imagesHtml = product.photo
      .map((img) =>
        imgManager({
          "picture-class": "shop-card__item-picture",
          "img-srcset": img.imgSrcSet,
          "img-src": img.imgSrc,
          "img-alt": product.name,
          "img-class": "shop-card__img",
        }).toString(),
      )
      .join("");

    const characteristicsHtml = product.characteristics
      .map((char) =>
        itemCharacteristics({
          "characteristic-text": char,
        }).toString(),
      )
      .join(",");

    const cardShop = cardPartial({
      images: imagesHtml,
      "card-title": product.name,
      characteristics: characteristicsHtml,
      "card-article": product.id,
      weight: 40,
      "pack-type": product.packType,
      "full-price": Math.round(product.price * product.salePercent),
      "sale-percent": product.salePercent,
      "sale-price": product.price,
      "class-card": product.itemFlag,
      flag: product.itemFlag,
    });

    return cardShop;
  }

  function renderGroup() {
    const productGroup = products.slice(
      renderedCards,
      renderedCards + groupSize,
    );

    productGroup.forEach((product) => {
      const cardShop = createCard(product);
      cardShop.render(shopContainer);
      initCustomCardSwiper(cardShop);
    });

    renderedCards += productGroup.length;

    if (renderedCards >= products.length) {
      btnMore.classList.add("hidden");
    }
    lazyLoad();
  }
  renderGroup();

  if (btnMore) {
    btnMore.addEventListener("click", () => {
      renderGroup();
    });
  }
}
