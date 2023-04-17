// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50 
// * With input "10.0.0.0", "10.0.1.0"   => return  256 
// * With input "20.0.0.10", "20.0.1.0"  => return  246

function ipsBetween(start, end){
  start = start.split('.').map(Number);
  end = end.split('.').map(Number);
  return (end[0] - start[0]) * 256 * 256 * 256 + (end[1] - start[1]) * 256 * 256 + (end[2] - start[2]) * 256 + (end[3] - start[3]);
}
