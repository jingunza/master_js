// Write your function here
const getElementsThatEqual10AtProperty = (obj,key) => {
    let array = [];
    for (let item in obj[key]) {
        if (obj[key][item]==10){
            array.push(obj[key][item]);
        }
    }
    return array;
}