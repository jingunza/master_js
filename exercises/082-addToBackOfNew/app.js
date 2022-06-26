function addToBackOfNew(arr, element) {
    // Write your function here

    /*Opcion 1 (no funciona): let newArray = arr;*/
    /*Opcion 2 (si funciona):*/ let newArray = arr.map(item=>item);
    /*Opcion 3 (si funciona): let newArray = arr.concat(element);*/

    newArray.push(element);
    return newArray;
}

let lista = [7,8,9];
let output = addToBackOfNew(lista, 3);