function filterOddLengthWords(arr) {
    // your code here
    return arr.filter(function(item){
        return item.length%2==1;})
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']

