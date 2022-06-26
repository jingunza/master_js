function convertDoubleSpaceToSingle(str) {
    // your code here
    let array = str.split('  ');
    let newString = array.join(' ');
    return newString;
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"