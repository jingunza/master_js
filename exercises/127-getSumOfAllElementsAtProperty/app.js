var obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    let suma = 0;
    if (!obj[key]) {
        return 0;
    } else if (!Array.isArray(obj[key])){
        return 0;
    } else if (obj[key].length==0){
        return 0;
    } else {
        for (let item of obj[key]){
            suma += item
        }
        return suma
    }
}
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13