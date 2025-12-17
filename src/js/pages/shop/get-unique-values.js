export function getUniqueValues(products, extractor) {
    const uniqueValues = new Set ();
    console.log(uniqueValues)

    products.forEach(product => {
        const value = extractor(product);
        if (Array.isArray(value)) {
            value.forEach(item =>  uniqueValues.add(item));
        }else if (value !== null && value!==undefined) {
            uniqueValues.add(value)
        }
    })
    return [...uniqueValues];
}