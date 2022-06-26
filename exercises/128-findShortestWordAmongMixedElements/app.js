function findShortestWordAmongMixedElements(arr) {
    // your code here
    let array = arr.filter(item=>typeof(item)=='string');
    let corto = array[0];
    if (arr.length==0){
        return "";
    } else if (array.length==0){
        return "";
    } else {
        for (let elem of array){
            if (elem.length<corto.length){
                corto = elem;
            }
        }
        return corto;
    }

}
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'