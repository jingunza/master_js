// Write your function here
const getElementsLessThan100AtProperty = (obj,key) => {
    let array = [];
    for (let item in obj[key]) {
        if (obj[key][item]<100){
            array.push(obj[key][item]);
        }
    }
    return array;
}