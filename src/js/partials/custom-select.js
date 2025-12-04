export function initCustomSelect() {
    const customSelects = document.querySelectorAll('.custom-select');

    function closeSelect (select) {
        select.classList.remove('open');
        select.querySelector('.custom-select__arrow').classList.remove('rotate');
    }

    customSelects.forEach((select) => {
        const selectOptions = select.querySelectorAll('.custom-select__option');
        const label = select.querySelector('.custom-select__label');
        const arrow = select.querySelector('.custom-select__arrow');
        const input = select.querySelector('.custom-select__value');

        select.addEventListener('click', (e) => {
            e.stopPropagation();

            customSelects.forEach((s) => {
                if (s !== select) {
                    closeSelect(s)
                }
            })

            select.classList.toggle("open");
            arrow.classList.toggle("rotate");
        })

        selectOptions.forEach((option) => {
            option.addEventListener("click", (e) => {
                label.innerText = option.textContent;
                input.value = option.textContent;
            })
        })
    })

    document.addEventListener('click', (e) => {
        customSelects.forEach((select) => {
            closeSelect(select)
        })
    })
}