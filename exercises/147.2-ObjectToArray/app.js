function listAllValues(obj) {
  // your code here
  let array = [];
  for (let key in obj){
    array.push(obj[key])
  }
  return array
}