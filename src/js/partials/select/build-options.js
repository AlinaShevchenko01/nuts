export function buildSelectOptions (values, translation) {
    return values.map(value => ({
        value,
            label: translation? translation(value) : value,
    }))
}