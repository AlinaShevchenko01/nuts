import {closeSelect} from "@/js/partials/select/close-select.js";

export function closeSelects () {
    const selects = document.querySelectorAll('.custom-select');

    if (selects.length > 0) {
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.custom-select')) {
                selects.forEach((select) => {
                    const arrow = select.querySelector('.custom-select__arrow');
                    closeSelect(select,arrow)
                });
            }
        })
    }
}