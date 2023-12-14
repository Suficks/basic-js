const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayOfDigits = Array.from(String(n), Number);
  const allNumbersExceptOne = arrayOfDigits.map((_, index) => {
    return Number(arrayOfDigits.filter((_, filterIndex) => filterIndex !== index).join(''));
  });
  return Math.max(...allNumbersExceptOne);
}

module.exports = {
  deleteDigit
};
