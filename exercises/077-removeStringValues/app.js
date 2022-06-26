var obj = {
    name: 'Sam',
    age: 20
  }

function removeStringValues(obj) {
    // your code here
    let prop = Object.keys(obj);
    let val = Object.values(obj);
    for (let i in val) {
        if (typeof(val[i])=="string"){
            delete obj[prop[i]];
        }
    }
    return obj;
}

removeStringValues(obj);
console.log(obj); // { age: 20 }