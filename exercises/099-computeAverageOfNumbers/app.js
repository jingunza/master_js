// Write your function here
const computeAverageOfNumbers = (arr) => {
    let sumatoria = 0;
    for (var item of arr) {
        sumatoria += item;
    }
    return sumatoria/arr.length
}