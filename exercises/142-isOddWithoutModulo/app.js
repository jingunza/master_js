function isOddWithoutModulo(num) {
    // your code here
    return num/2-Math.floor(num/2)!=0;
}
var output = isOddWithoutModulo(17);
console.log(output); // --> true