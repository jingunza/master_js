function getAllElementsButNth(array, n) {
    // Write your function here
    return array.slice(0,n).concat(array.slice(n+1,array.length));
}
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']