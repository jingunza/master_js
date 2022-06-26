// Write your function here
const getLastElementOfProperty = (obj, key) => {
    return obj[key][obj[key].length-1];
}