function digitalRoot(n) {
    let array = n.toString().split("").map(Number);
    const FinalSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    if (/^\d$/.test(FinalSum)) {
      return FinalSum;
    } else {
      return digitalRoot(FinalSum);
  }
}
