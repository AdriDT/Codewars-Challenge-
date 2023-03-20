// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
  const result = [];
  const array = str.trim().split(' ');
  array.forEach(element => {
    result.push(element.charAt(0).toUpperCase() + element.slice(1));
  });
  if ((result == '') || ((/.{140}/).test(result))) {
    return false;
  } else {
    result.unshift("#");
    console.log(result.join(''));
    return result.join('');
  }
}

generateHashtag("Do We have A Hashtag")
generateHashtag("Codewars")