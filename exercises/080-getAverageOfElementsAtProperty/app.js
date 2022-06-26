// Write your function here
const getAverageOfElementsAtProperty = (obj,key) => {
    let suma = 0;
    if (Array.isArray(obj[key])&&obj[key].length>0){
        let myArray = obj[key];
        myArray.forEach(function(item){
        suma += item});
        return suma/(myArray.length);
    } else {
        return 0;
    }
}