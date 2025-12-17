import { reuseFunctions } from "@/js/reuse-functions.js";
import {initRegistrationSelects} from "@/js/pages/registration/init-registration-selects.js";

document.addEventListener("DOMContentLoaded", async () => {
    reuseFunctions();
    initRegistrationSelects();
});
