function transformEmployeeData(array) {
  // your code here
  const newArray = [];
  for (let i=0; i<array.length; i++){
    newArray[i]={};  // queda asi: [{},{}]
    for (let j=0; j<array[i].length; j++){
      for (let k=0; k<array[i][j].length; k++){
        newArray[i][array[i][j][0]] = array[i][j][1];
      }
    }
  }
  return newArray;
}
