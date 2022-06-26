function getLengthOfLongestElement(arr) {
    // your code here
    if (arr.length==0){
        return 0
    } else {
    let largos = arr.map(item=> item.length);
    largos.sort((a,b)=>b-a);
    return largos[0];
    }
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5