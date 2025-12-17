import {vocabulary} from "@/js/mixins/vocabulary.js";

export function translate(path) {
    const cleanPath = String(path).split('.')
        .map((part) => part.trim())
        .join('.')

    return cleanPath.split('.').reduce((acc, key) => acc?.[key], vocabulary) ?? path;
}