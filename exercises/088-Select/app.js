// Write your function here
const select = (arr, obj) => {
    const newObject = {};
    for (let key of arr) {
        if (obj[key]){
            newObject[key] = obj[key];
        }
    }
    return newObject;
}