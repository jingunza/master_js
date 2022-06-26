function repeatString(string, num) {
    // your code here
    let message = "";
    for (let i = 1; i<=num; i++){
        message+=string;
    }
    return message;
}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'