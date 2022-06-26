function findSmallestElement(arr) {
    // your code here
    if (arr.length==0){
        return 0
    } else {
       let array = arr;
       array.sort((a,b)=>a-b)
       return array[0]
    }
}
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1