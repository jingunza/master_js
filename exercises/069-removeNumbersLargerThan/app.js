var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
    // your code here
    let prop = Object.keys(obj);
    let valor = Object.values(obj);
    for (let i in valor){
        if (valor[i]>num){
            delete obj[prop[i]];
        }
    }
    return obj;
}
