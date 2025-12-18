import selectOption from "@/html/partials/select-li.html";

export function renderCustomSelect(dataList, container) {

    const selectEl = document.querySelector(`${container}`);
    const dropdown = selectEl.querySelector('.custom-select__dropdown')
    dataList.forEach(({value, label}) => {
        const optionElement = selectOption({
            value,
            text: label,
        })

        optionElement.render(dropdown)
    })
}