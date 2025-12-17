import {renderCustomSelect} from "@/js/partials/select/render-select.js";
import {toggleSelectState} from "@/js/partials/select/toggle-select-state.js";


export function initCustomSelect(dataList,container) {
    renderCustomSelect(dataList,container);
    toggleSelectState(container)
}