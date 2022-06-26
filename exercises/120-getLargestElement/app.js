function getLargestElement(arr) {
  // your code here
  if (arr.length==0) {
    return 0
  } else {
    arr.sort((a,b)=>b-a);
    return arr[0]
  }
}
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;