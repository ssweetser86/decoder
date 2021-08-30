// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

  function newAlphabet(shift) {
    let shifted = alphabet.slice(shift).join('');
    shifted += alphabet.slice(0, shift).join('');
    return shifted;
  }

  function isLetter(char) {
    if(char.search(/[a-zA-Z]/) === 0) return true;
    return false;
  }

  function caesar(input, shift, encode = true) {
    if(shift < -25 || shift === 0 || shift > 25) return false;
    if(encode === false) shift = 0 - shift;

    const chars = input.split('');
    const key = newAlphabet(shift);
    let solution = [];

    chars.forEach(ch => {
      if(isLetter(ch)) {
        let letter = ch.toLowerCase();
        let found = alphabet.findIndex(i => i === letter);
        solution.push(key[found]);
      }else {
        solution.push(ch);
      }
    });
    
    return solution.join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
