var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    // your code here
    let prop = Object.keys(obj);
    let val = Object.values(obj);
    for (let i in val) {
        if (val[i]<num){
            delete obj[prop[i]];
        }
    }
    return obj;
}
