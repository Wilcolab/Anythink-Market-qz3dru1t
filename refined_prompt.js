/**
 * Converts a given string to camel case.
 * 
 * Camel case is a style of writing where the first word is in lowercase 
 * and each subsequent word starts with an uppercase letter, with no spaces 
 * or underscores between words.
 * 
 * @param {string} input - The string to be converted to camel case.
 * @throws {Error} Will throw an error if the input is not a string.
 * @returns {string} The input string converted to camel case.
 * 
 * @example
 * // Returns: "helloWorldExample"
 * console.log(convertToCamelCase("hello world_example"));
 */
function convertToCamelCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    return input
        .split(/[\s_]+/) // Split by spaces and underscores
        .map((word, index) => {
            if (index === 0) {
                return word.charAt(0).toLowerCase() + word.slice(1).toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(convertToCamelCase("hello world_example")); // Outputs: helloWorldExample

/**
 * Converts a given string to dot case.
 * 
 * Dot case is a style of writing where words are separated by dots, 
 * and all letters are in lowercase.
 * 
 * @param {string} input - The string to be converted to dot case.
 * @throws {Error} Will throw an error if the input is not a string.
 * @returns {string} The input string converted to dot case.
 * 
 * @example
 * // Returns: "hello.world.example"
 * console.log(convertToDotCase("Hello World_Example"));
 */
function convertToDotCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    return input
        .split(/[\s_]+/) // Split by spaces and underscores
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
// console.log(convertToDotCase("Hello World_Example")); // Outputs: hello.world.example



