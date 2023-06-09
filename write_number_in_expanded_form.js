// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
  let i = 0;
  let solution = []; 
  const array = num.toString().split('').reverse();
  array.forEach(element => {
      if (element > 0) {
        solution.push(element + '0'.repeat(i));
      }
      i += 1;
  });
  return solution.reverse().join(" + ");
}

// Warning : tried with indexOf(), but it would pick the wrong element if same number appears twince