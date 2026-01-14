/**
 * Converts a string to kebab-case format.
 * 
 * @param {string} str - The input string to convert to kebab-case
 * @returns {string} The converted kebab-case string
 * @throws {TypeError} If the input is not a string
 * @throws {Error} If the input is an empty string
 * 
 * @example
 * toKebabCase('HelloWorld'); // 'hello-world'
 * toKebabCase('hello_world'); // 'hello-world'
 * toKebabCase('HELLO WORLD'); // 'hello-world'
 */
function toKebabCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError(`Expected a string, but received ${typeof str}`);
    }

    if (str.length === 0) {
        throw new Error('Input string cannot be empty');
    }

    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase()
        .replace(/^-+|-+$/g, '');
}

module.exports = toKebabCase;