function findShortestElement(arr) {
    // your code here
   let masCorto = arr[0];
   if (arr.length==0) {
    return "";
   } else {
    for (let i in arr){
        if (arr[i].length<masCorto.length) {
            masCorto = arr[i];
        }
    }
    return masCorto;
   }
}
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
