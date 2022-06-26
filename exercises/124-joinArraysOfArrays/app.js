function joinArrayOfArrays(arr) {
  // your code here
  let newArray = [];
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr[i].length; j++){
      newArray = newArray.concat(arr[i][j]);
    }
  }
  return newArray;
}
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']