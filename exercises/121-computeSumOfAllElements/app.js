function computeSumOfAllElements(arr) {
  // your code here
  let total = 0;
  arr.forEach(function(item){
    total += item;
  })
  return total;
}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6