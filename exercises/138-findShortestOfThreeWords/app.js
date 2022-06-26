function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let array = [];
    array.push(word1);
    array.push(word2);
    array.push(word3);
    let shortest = array[0];
    
    for (let i=1; i<array.length; i++){
        if (shortest.length > array[i].length){
            shortest = array[i];
        }
    }
    return shortest
    
}
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'