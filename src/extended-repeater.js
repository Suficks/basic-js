const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let { addition = '', additionSeparator = '|', additionRepeatTimes = 1, separator = '+', repeatTimes = 1 } = options
  str += (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition
  return ((str + separator).repeat(repeatTimes - 1)) + str
}

module.exports = {
  repeater
};
