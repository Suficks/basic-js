const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let count = {};

  return names.map(item => {
    if (count[item] === undefined) {
      count[item] = 1;
      return item;
    } else {
      let newName = `${item}(${count[item]++})`
      while (count[newName] !== undefined) {
        newName = `${item}(${count[item]++})`;
      }
      count[newName] = 1;
      return newName
    }
  })
}

module.exports = {
  renameFiles
};
