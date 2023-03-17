// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
  const array = str.split('-').join(',').split('_').join(',').split(',');
  const result = [array[0]];
  const modifiedArray = array.splice(0,1);
  const local = array.map(element => result.push(element.charAt(0).toUpperCase() + element.slice(1)));
  return(result.join(''));
}
