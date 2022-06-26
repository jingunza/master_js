function computeProductOfAllElements(arr) {
    // your code here
    let producto = 1;
    if (arr.length==0) {
        return 0;
    } else {
        for (let elem of arr) {
            producto*=elem;
        }
        return producto;
    }
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60