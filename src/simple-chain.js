const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',

  getLength() {
    return this.chain.split('~~').length
  },

  addLink(value) {
    if (!value) this.chain += '';
    if (this.chain === '') {
      this.chain += `( ${value} )`;
    } else {
      this.chain += `~~( ${value} )`;
    }
    return this
  },

  removeLink(position) {
    if (!Number.isInteger(position)
      || typeof position === 'string'
      || position > this.chain.split('~~').length
      || position < 1) {
      this.chain = '';
      throw new Error('You can\'t remove incorrect link!')
    }
    const arr = this.chain.split('~~');
    arr.splice(position - 1, 1);
    this.chain = arr.join('~~');
    return this
  },

  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~')
    return this
  },

  finishChain() {
    const result = this.chain.slice(0)
    this.chain = '';
    return result
  }
};

module.exports = {
  chainMaker
};
