function isRotated(str1, str2) {
    // your code here
    let string1 = str1;
    string1 = string1.concat(string1);
    let array = [];
    for (let i=0; i<str1.length; i++){
        array.push(string1.slice(i,i+str1.length))
    }
    return array.includes(str2);
}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false