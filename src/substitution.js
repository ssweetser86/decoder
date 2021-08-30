// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function checkForDuplicates(code) {
    let hasDupes = false;
    code.sort();
    for(i=0;i<code.length-1;i++) {
      if(code[i] === code[i+1]) {
        hasDupes = true;
        break;
      }
    }
    return hasDupes;
  }

  function substitution(input, code, encode = true) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    if(code === undefined) return false;
    code = code.toLowerCase().split('');
    input = input.toLowerCase().split('');

    let answerKey = [...code];
    let solution = [];
    let key = {' ': ' '};

    if(code.length !== 26) return false;
    if(checkForDuplicates(answerKey) === true) return false;
    
    for(let i=0;i<26;i++) {
      if(encode) {
        key[`${alphabet[i]}`] = code[i];
      } else {
        key[`${code[i]}`] = alphabet[i];
      }
    }

    for(let i=0;i<input.length;i++) {
      solution.push(key[input[i]]);
    }

    return solution.join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
