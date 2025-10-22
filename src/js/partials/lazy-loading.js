export function loadImageElement (image) {
    const picture = image.closest('picture');

    if (picture) {
        const sources = picture.querySelectorAll('source[data-srcset]');
        sources.forEach(source => {
            if (source.dataset.srcset) {
                source.srcset = source.dataset.srcset;
                source.removeAttribute('data-srcset');
            }
        })
    }

    if (image.dataset.src) {
        image.src = image.dataset.src;
        image.removeAttribute('data-src');
    }

    console.log("+", image);
}

export function lazyLoad () {

    const  images = document.querySelectorAll(".img[data-src]");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                loadImageElement(image);
                obs.unobserve(image);
            }
        })
    }, {
        root: null,
        rootMargin:"200px 0px 200px 0px",
        threshold: 0.1
    });

    images.forEach(image => {
        observer.observe(image);
    })
}