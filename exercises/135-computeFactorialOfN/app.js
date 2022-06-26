function computeFactorialOfN(n) {
    // your code here
    let factorial = 1;
    if (Number.isInteger(n) && n>0) {
        for (let i=1; i<=n; i++){
            factorial*=i;
        }
        return factorial;
    }
}

var output = computeFactorialOfN(3); console.log(output); // --> 6

var output = computeFactorialOfN(4); console.log(output); // --> 24