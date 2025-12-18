import {closeSelect} from "@/js/partials/select/close-select.js";

export function toggleSelectState(container) {
    const select = document.querySelector(`${container}`);
    const label = select.querySelector('.custom-select__label');
    const arrow = select.querySelector('.custom-select__arrow');
    const input = select.querySelector('.custom-select__value');
    const btn = select.querySelector('.custom-select__btn');

    select.selectedValues = [];

    btn.addEventListener('click', (e) => {
        e.stopPropagation()
        select.classList.toggle("open");
        arrow.classList.toggle("rotate");
    })

    if (select.classList.contains('single')) {
        select.addEventListener('click', (e) => {
            const option = e.target.closest('.custom-select__option');

            if (!option) return

            const optionText = option.querySelector('.custom-select__input-text').textContent.trim()
            label.textContent = optionText;
            input.value = optionText;
            closeSelect(select,arrow);
        })
    } else {
        select.addEventListener('change', (e) => {
            const checkbox = e.target;
             if (checkbox.matches('.custom-select__checkbox')) {
                 const option = checkbox.closest('.custom-select__option');
                 const optionText = option.querySelector('.custom-select__input-text').textContent.trim()

                 if (checkbox.checked) {
                     select.selectedValues.push(optionText);
                 }else {
                     const index =  select.selectedValues.indexOf(optionText);
                     select.selectedValues.splice(index, 1);
                 }
                 updateSelectLabel(select)
             }
        })
    }
}

export function updateSelectLabel (select) {
    const label = select.querySelector('.custom-select__label');
    const placeholder = select.ariaPlaceholder
    const count = select.selectedValues.length;

    if ( count === 1) {
        label.textContent =  select.selectedValues[0];
    } else if ( count > 1) {
        label.textContent = `Выбрано ${count}`;
    } else {
        label.textContent = placeholder;
    }
}