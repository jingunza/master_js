function multiply(num1, num2) {
    // your code here
    let total = 0;
    for (let i=0; i<num1; i++){
        total += num2;
    }
    return total;
}

var output = multiply(4, 7);
console.log(output); // --> 28