var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here
    let prop = Object.keys(obj);
    let val = Object.values(obj);
    for (let i in val) {
        if (!isNaN(val[i])){
            delete obj[prop[i]];
        }
    }
    return obj;
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }