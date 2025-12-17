import {initCustomSelect} from "@/js/partials/select/init-select.js";
import {getUniqueValues} from "@/js/pages/shop/get-unique-values.js";
import {buildSelectOptions} from "@/js/partials/select/build-options.js";
import {translate} from "@/js/partials/translate.js";

export function initShopSelects (products) {
    const characteristicsValues = getUniqueValues(products,
        product => product.characteristics)
    const characteristicsOptions = buildSelectOptions(characteristicsValues,
        value => translate(`characteristics.${value}`));

    initCustomSelect(characteristicsOptions, '.shop-market__select_taste')

    const weightValues = getUniqueValues(products,
        product => product.weight)
    const weightOptions = buildSelectOptions(weightValues,
        value => translate(`${value} г.`));

    initCustomSelect(weightOptions, '.shop-market__select_weight')
}