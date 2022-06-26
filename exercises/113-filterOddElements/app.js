function filterOddElements(arr) {
  // your code here
  return arr.filter((item)=>item%2==1)

}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]