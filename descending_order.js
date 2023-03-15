function descendingOrder(n){
  const array = n.toString().split("").sort(function(a, b){return b-a});
  const result = array.join('');
  return parseInt(result);
}