// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:
// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
  const result = [];
  let array = '';
  let a = 0
  for (i = nFloors; i > 0; i--) {
    array = ' '.repeat(a) + '*'.repeat((i*2)-1) + ' '.repeat(a);
    a += 1;
    result.push(array);
  }
  return result.reverse();
}
