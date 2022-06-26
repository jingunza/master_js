function sumDigits(num) {
    // your code here
    let suma = 0;
    let array = num.toString().split('');
    if (array[0]=="-"){
        array[1]= "-"+array[1];
        array.shift();
    }
    for (let elem of array){
        suma+= Number(elem);
    }
    return suma;    
}
