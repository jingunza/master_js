function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let array = [];
    array.push(word1);
    array.push(word2);
    array.push(word3);
    let longest = array[0];
    
    for (let i=1; i<array.length; i++){
        if (longest.length < array[i].length){
        longest = array[i];
        }
    }
    return longest
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'