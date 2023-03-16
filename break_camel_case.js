// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  if ((/[A-Z]/).test(string)) {
    return string.replace(/([A-Z])/g, ' $1')
  } else {
    return string
  }
}