import {getProductId} from "@/js/firebase/get-products.js";
import {initCustomCardSwiper} from "@/js/partials/custom-swiper.js";
import {lazyLoad} from "@/js/partials/lazy-loading.js";
import cardPartial from "@/html/pages/product/product-hero.html";
import imgManager from "@/html/templates/img-manager.html";

export async function renderProductCard() {
    const id = new URLSearchParams(window.location.search).get("id");

    const product = await getProductId(id);

    if (!product) {
        const base = import.meta.env.BASE_URL
        window.location.href =`${base}404.html`;
        return
    }

    const productContainer = document.querySelector('#product-main')

    const imagesHtml = product.photo
        .map((img) =>
            imgManager({
                "picture-class": "product-hero__picture item-swiper__picture",
                "img-srcset": img.imgSrcSet,
                "img-src": img.imgSrc,
                "img-alt": product.name,
                "img-class": "product-hero__img item-swiper__img",
            }).toString(),
        )
        .join("");

    const productItem = cardPartial({
        images: imagesHtml,
        "product-type": product.type,
        "product-article": product.id,
        'product-weight': product.weight,
        'product-title': product.name,
        'product-composition': product.composition,
        'product-energy-value': product.energyValue,
        "current-price": Math.round(product.price * product.salePercent),
        "sale-percent": product.salePercent,
        "price": product.price,
        "product-class": product.itemFlag,
    });

    productItem.render(productContainer)

    const swiperContainer = productContainer.querySelector('.product-hero__inner_swiper');
    document.querySelector('.product-hero__skeleton').remove()
    initCustomCardSwiper(swiperContainer)
    lazyLoad()
}