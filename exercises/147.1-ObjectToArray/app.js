function getAllKeys(obj) {
  // your code here
  let array = [];
  for (let key in obj){
    array.push(key)
  }
  return array
};

let objeto = {
  nombre: "juan",
  apellido: "ruiz",
  edad: 34
};

console.log(getAllKeys(objeto));