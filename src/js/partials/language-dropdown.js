export function changeLanguage() {
    const select = document.querySelector('.contact-block__language');
    const button = select.querySelector('.contact-block__language-btn');
    const dropdown = select.querySelector('.contact-block__language-list');
    const options = select.querySelectorAll('.contact-block__language-item');
    const itemSelect = select.querySelector('.contact-block__language-selected');

    button.addEventListener('click', (e) => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);
        dropdown.classList.toggle('active');
    })

    options.forEach((option) => {
        option.addEventListener('click', (e) => {
            options.forEach((item) => {
                item.setAttribute('aria-selected', 'false');
            })
            option.setAttribute('aria-selected', 'true');
            itemSelect.textContent = option.textContent;
            dropdown.classList.remove('active');
            button.setAttribute('aria-expanded', 'false');
        })
    })

    document.addEventListener('click', (e) => {
        if (!select.contains(e.target)) {
            dropdown.classList.remove('active');
            button.setAttribute('aria-expanded', 'false');
        }
    })

    window.addEventListener('resize', (e) => {
        dropdown.classList.remove('active');
        button.setAttribute('aria-expanded', 'false');
    })
}