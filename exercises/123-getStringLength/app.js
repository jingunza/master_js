function getStringLength(string) {
    // your code here
    let contador = 0;
    for (let letra of string){
        contador++
    }
    return contador
}

var output = getStringLength('hello');
console.log(output); // --> 5