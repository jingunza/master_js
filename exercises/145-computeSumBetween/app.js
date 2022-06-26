function computeSumBetween(num1, num2) {
    // your code here
    let suma = 0;
    if (num2 <= num1){
        return 0;
    } else {
        for (let i = num1; i<num2; i++){
            suma += i;
        }
        return suma;
    }
}

var output = computeSumBetween(2, 5);
console.log(output); // --> 9