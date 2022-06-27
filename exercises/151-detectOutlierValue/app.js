function detectOutlierValue(string) {
    // your code here
    let array = string.split(" ");
    let newArray = array.map(item=>Number(item));
    let qPares = 0;
    let qImpares = 0;
    let outlierParPos = 0;
    let outlierImparPos = 0;
    for (let i=0; i<newArray.length; i++){
        if (newArray[i]%2==0){
            qPares++;
            outlierParPos = i
        } else if (newArray[i]%2==1) {
            qImpares++;
            outlierImparPos = i
        }
    }
    if (qPares==1){
        return outlierParPos+1
    } else if (qImpares==1){
        return outlierImparPos+1
    } else {
        return "impossible to determinate"
    }
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2