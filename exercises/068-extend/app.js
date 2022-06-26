var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

/*function extend(obj1, obj2) {
    // your code here
  let propiedades = Object.keys(obj2);
  let valores = Object.values(obj2);
  for (let i = 0; i<propiedades.length; i++){
      if(!obj1.hasOwnProperty(propiedades[i])){
          obj1[propiedades[i]]=valores[i];
      }
  }
  return obj1;
}*/


function extend(obj1, obj2) {
    // your code here
    for(var key in obj2){
        if (obj1[key]==null){
            obj1[key] = obj2[key];
            }
   }
    return obj1;
}