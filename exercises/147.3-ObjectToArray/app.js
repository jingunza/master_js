function convertObjectToList(obj) {
  // your code here
  let arrayElement1 = Object.keys(obj);
  let arrayElement2 = Object.values(obj);
  let matriz = [];
  for (let i in arrayElement1){
    matriz.push([arrayElement1[i],arrayElement2[i]]);
  }
  return matriz
}