function squareElements(arr) {
  // your code here
  return arr.map((item)=>item**2)
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]