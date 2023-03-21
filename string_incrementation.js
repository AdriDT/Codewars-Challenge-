// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (strng) {
  const string = [];
  const number = [];
  const zero = [];
  const array = strng.split('');
  array.forEach(element => {
    if ((/\d/).test(element)) {
      number.push(element);
    } else {
      string.push(element);
    }
  });
  console.log(string);
  console.log(number);
  console.log(string.join('') + ((Number(number.join('')))+1).toString());
  return (string.join('') + ((Number(number.join('')))+1).toString());
}

incrementString('foobar001');
incrementString('foobar999');
incrementString('foobar00999');
incrementString('foo');
