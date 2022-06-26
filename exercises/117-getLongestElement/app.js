function getLongestElement(arr) {
    // your code here
    let string = "";
    if (arr.length==0){
        return string;
    } else {
        for (let i in arr){
            if (arr[i].length>string.length) {
                string = arr[i];
            }
        }
        return string;
    }
}
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'

