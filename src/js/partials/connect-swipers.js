export function initTabsControl (tabsSwiper, pageSwiper, tabSelector) {
    tabsSwiper.controller.control = pageSwiper;
    pageSwiper.controller.control = tabsSwiper;

    function updateActiveTab(index) {
        const tabs = document.querySelectorAll(tabSelector);
        tabs.forEach((tab, i) => {
            tab.classList.toggle("active", i === index);
        });
    }
    updateActiveTab(0);

    tabsSwiper.slides.forEach((slide, index) => {
        slide.addEventListener("click", () => {
            pageSwiper.slideTo(index);
            updateActiveTab(index);
        });
    });

    pageSwiper.on("slideChange", () => {
        const i = pageSwiper.realIndex;
        updateActiveTab(i);
    });
}

