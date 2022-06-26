function multiplyBetween(num1, num2) {
    // your code here
    let producto = 1;
    if (num2 <= num1){
        return 0;
    } else {
        for (let i = num1; i<num2; i++){
            producto*=i;
        }
        return producto;
    }
}

var output = multiplyBetween(2, 5);
console.log(output); // --> 24