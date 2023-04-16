// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
  const alphabetstart = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
  const alphabetend = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const astart = alphabetstart.map((letter) => letter.toUpperCase());
  const aend = alphabetend.map((letter) => letter.toUpperCase());
  const solution = [];
  const array = message.split('');
  array.forEach(element => {
    if (alphabetstart.includes(element)) {
      solution.push(alphabetend[alphabetstart.indexOf(element)]);
    } else if (alphabetend.includes(element)) {
      solution.push(alphabetstart[alphabetend.indexOf(element)]);
    } else if (astart.includes(element)) {
      solution.push(aend[astart.indexOf(element)]);
    } else if (aend.includes(element)) {
      solution.push(astart[aend.indexOf(element)]);
    } else { solution.push(element) }
  });
  return solution.join('');
}
