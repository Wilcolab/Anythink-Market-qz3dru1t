function convertToCamelCase(str) {
    return str
        .split(/[^a-zA-Z0-9]+/)
        .filter(word => word.length > 0)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}