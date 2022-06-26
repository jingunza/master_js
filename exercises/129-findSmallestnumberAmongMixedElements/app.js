function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let arrayNum = arr.filter(item=>typeof(item)=='number');
  if (arr.length==0){
    return 0;
  }else if (arrayNum.length==0){
    return 0;
  } else {
    arrayNum.sort((a,b)=>a-b);
    return arrayNum[0];
  }
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4