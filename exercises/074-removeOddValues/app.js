function removeOddValues(obj) {
    // your code here
    let prop = Object.keys(obj);
    let val = Object.values(obj);
    for (let i in val) {
        if (val[i]%2==1){
            delete obj[prop[i]];
        }
    }
    return obj;
}