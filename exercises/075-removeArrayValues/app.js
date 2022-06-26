function removeArrayValues(obj) {
    // your code here
    let prop = Object.keys(obj);
    let val = Object.values(obj);
    for (let i in val) {
        if (Array.isArray(val[i])){
            delete obj[prop[i]];
        }
    }
    return obj;
}