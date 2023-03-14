function disemvowel(str) {
  let new_string = [];
  let sentence = str.split("");
  sentence.forEach((letter) => {
  if (/[^aeiou]/i.test(letter)) {
  new_string.push(letter);}
  });
  return new_string.join('').toString();
}
