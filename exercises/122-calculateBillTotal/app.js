function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    return preTaxAndTipAmount*(0.095 + 0.15) + preTaxAndTipAmount;
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9