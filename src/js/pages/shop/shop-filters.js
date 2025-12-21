import {renderShopCard} from "@/js/partials/render-shop-card.js";
import {updateSelectLabel} from "@/js/partials/select/toggle-select-state.js";

let filters = {
    flavors : [],
    weight : [],
    sort: null
}
export function initShopFilters (products) {
    const urlFilters = readFiltersFromUrl()

    filters.flavors = urlFilters.flavors
    filters.weight = urlFilters.weight
    filters.sort = urlFilters.sort

    syncSelectFromFilters('flavor', filters.flavors)
    syncSelectFromFilters('weight', filters.weight)
    syncSortFromFilters(filters.sort)

    const initialProducts = runFilters(products, filters)
    renderShopCard(initialProducts)

    initApplyFilters(products)
    initResetFilters(products);
    activeBtnsSort()
    initBtnReset()
}

function initApplyFilters (products) {
    const btnApply = document.querySelector("[data-move='apply']");

   function getCheckedValues (selectName) {
        return [...document.querySelectorAll(`[data-select="${selectName}"] .custom-select__checkbox:checked`)]
            .map(input => input.value)
    }
    btnApply.addEventListener("click",  (e) => {

       filters.flavors = getCheckedValues('flavor');
       filters.weight = getCheckedValues('weight');

       const activeSort = document.querySelector('[data-sort].active');
       filters.sort = activeSort ? activeSort.dataset.sort : null;

       writeFiltersToUrl(filters);
       const filteredProducts = runFilters(products, filters);
        renderShopCard(filteredProducts);
        initBtnReset()
    })
}

function activeBtnsSort () {
    const container = document.querySelector('.shop-market__arrows')
    const btns = container.querySelectorAll('[data-sort]')

    container.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-sort]')

        if(btn) {
            btns.forEach(item => {
                item.classList.remove('active');
                btn.classList.add('active');
            })
        }
    })
}

function runFilters (products, filters) {
    let result = [...products]

    if (filters.flavors.length > 0) {
        result = result.filter(product =>
        filters.flavors.some(flavor =>
            product.characteristics.includes(flavor)))
    }

    if (filters.weight.length > 0) {
        result = result.filter(product => filters.weight.includes(String(product.weight)));
    }

    if (filters.sort === 'down') {
        result.sort((a, b) => b.price - a.price)
    }

    if (filters.sort === 'up') {
        result.sort((a, b) => a.price - b.price)
    }
    console.log(result)
    return result;
}

function initBtnReset () {
    const btnReset = document.querySelector('[data-move="reset"]')
    if (filters.flavors.length > 0 ||
    filters.weight.length > 0 ||
    filters.sort !== null) {
        btnReset.disabled = false;
        btnReset.classList.remove('disabled');
    } else {
        btnReset.disabled = true;
        btnReset.classList.add('disabled');
    }
}

function initResetFilters (products) {
    initBtnReset()
    const btnReset = document.querySelector('[data-move="reset"]')
    btnReset.onclick = () => {
        if (btnReset.classList.contains('disabled')) return

        filters.flavors=[];
        filters.weight=[];
        filters.sort=null;

        document.querySelectorAll('.custom-select').forEach(select => {
            select.selectedValues = []
            updateSelectLabel(select)
        })

        document.querySelectorAll('.custom-select__checkbox').forEach(input => {
            input.checked = false;
        })

        document.querySelectorAll('[data-sort]').forEach(btn => {
            btn.classList.remove('active');
        })

        writeFiltersToUrl(filters);
        renderShopCard(products)
        initBtnReset()
    }
}

function writeFiltersToUrl (filters) {
    const params = new URLSearchParams()

    filters.flavors.forEach(value => {
        params.append('flavor', value)
    })

    filters.weight.forEach(value => {
        params.append('weight', value)
    })

    if (filters.sort) {
        params.set('sort', filters.sort)
    }

    const newUrl = window.location.pathname + (params.toString() ? `?${params.toString()}` : '');
    window.history.replaceState({}, '', newUrl);

}

function readFiltersFromUrl () {
    const params = new URLSearchParams(window.location.search)

    return {
        flavors: params.getAll('flavor'),
        weight: params.getAll('weight'),
        sort: params.get('sort'),
    }
}

function syncSelectFromFilters (selectName, values) {
    const select = document.querySelector(`[data-select="${selectName}"]`);
    const checkboxes = select.querySelectorAll('.custom-select__checkbox');

    select.selectedValues = []

    checkboxes.forEach(checkbox => {
        if (values.includes(checkbox.value)) {
            checkbox.checked = true;
            select.selectedValues.push(checkbox.value)
        } else {
            checkbox.checked = false;
        }
    })

    updateSelectLabel(select)
}

function syncSortFromFilters (sort) {
    document.querySelectorAll('[data-sort]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.sort === sort);
    })
}



