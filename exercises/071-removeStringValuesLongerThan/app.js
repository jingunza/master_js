function removeStringValuesLongerThan(num, obj) {
    // your code here
    let prop = Object.keys(obj);
    let val = Object.values(obj);
    for (let i in val) {
        if (val[i].length>num){
            delete obj[prop[i]];
        }
    }
    return obj;
}

