function findPairForSum(array, number){
    let newArray = [];
    for (let i=0; i<array.length; i++){
        for (let j=1; j<array.length; j++){
            newArray.push([array[i],array[j]])
        }
    }
    let combinacion = [];
    for (let elem of newArray){
        if (elem[0]+elem[1]==number) {
            combinacion = elem;
        }
    }
    return combinacion
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]