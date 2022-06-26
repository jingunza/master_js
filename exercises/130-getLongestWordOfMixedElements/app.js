function getLongestWordOfMixedElements(arr) {
    // your code here
    let longStr = "";
    let arrayStr = arr.filter(item=>typeof(item)=='string');
    if (arr.length==0){
        return "";
    } else if (arrayStr.length==0){
        return "";
    } else {
        for (let elem of arrayStr){
            if (elem.length>longStr.length){
                longStr = elem;
            }
        }
        return longStr
    }
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'