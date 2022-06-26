// Write your function here
const removeElement = (arr,condicion) => {
    let array = arr.filter(function(item){
        return item!=condicion;
    })
    return array;
}