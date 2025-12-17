import {initCustomSelect} from "@/js/partials/select/init-select.js";
import {countries} from "@/js/mixins/array-for-countries.js";

export function initRegistrationSelects () {
    initCustomSelect(Object.keys(countries), '.registration-hero__form-select_country');
}

