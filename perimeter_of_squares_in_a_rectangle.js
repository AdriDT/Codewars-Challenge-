// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

// perimeter(5)  should return 80
// perimeter(7)  should return 216

function perimeter(n) {
  array = [0];
  i = 0;
  for (i = 0; i <= n; i++) {
    if (i < 2) {
      array.push(1);
    } else {
      array.push(array[i] + array[i - 1]);
    }
  }
  const sum = array.reduce((partialSum, a) => partialSum + a, 0);
  return(4*sum);
}
