export function lazyLoadVideo() {
    const btns = document.querySelectorAll("[data-btn='play-video']");
    const videos = document.querySelectorAll("[data-video]");
    const hiddenContainer = document.querySelectorAll("[data-container='hidden']");

    btns.forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
            hiddenContainer[index].classList.add('video-play');
            const source = videos[index].querySelector('source');
            source.src = source.dataset.src;
            videos[index].classList.add("active");
            videos[index].load();
            videos[index].play();
        })
    })
}