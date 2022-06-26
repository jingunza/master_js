function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length==0){
        return 0;
    } else {
        let array = arr.map(item=>item.length);
        array.sort((a,b)=>a-b);
        return array[0];
    }
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3