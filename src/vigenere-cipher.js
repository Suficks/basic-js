const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  result = [];

  constructor(condition) {
    this.condition = condition;
  }

  processMessage(message, key, encryptMode) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    const N = 26;

    const array = message.toUpperCase().split('');
    const newKey = key.toUpperCase().repeat(Math.ceil(message.length / key.length)).split('');

    array.forEach((item, index) => {
      if (!alphabet.includes(item)) {
        this.result.push(item);
        newKey.splice(index, 0, ' ');
      } else {
        const letterIndex = (
          encryptMode
            ? (alphabet.indexOf(item) + alphabet.indexOf(newKey[index])) % N
            : (alphabet.indexOf(item) + N - alphabet.indexOf(newKey[index])) % N
        );
        this.result.push(alphabet[letterIndex]);
      }
    });

    const finalResult = (this.condition === false ? this.result.reverse() : this.result).join('');
    this.result = [];
    return finalResult;
  }

  encrypt(message, key) {
    return this.processMessage(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this.processMessage(encryptedMessage, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
