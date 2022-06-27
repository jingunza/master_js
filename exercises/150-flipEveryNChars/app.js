function flipEveryNChars(input, n) {
    // your code here
    let array = input.split(""); // letras en array
    
    // cantidad de grupos de n (sin contar el residuo):
    let grupos = Math.floor(array.length/n);
    
    // acomodar las letras en grupos de n:
    let string = "";
    for (let i=0; i<grupos; i++){
        for (let j=n-1; j>=0; j--){
            string += array[j];
        }
        array = array.slice(n, array.length);
    };
    
    // acomodar el residuo, que ya no es multiplo de n:
    for (let k=array.length-1; k>=0; k--){
        string += array[k];
    }
    return string;
}

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma