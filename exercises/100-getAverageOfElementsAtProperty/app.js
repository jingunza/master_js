function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let total = 0;
  if (!Array.isArray(obj[key])) {
    return 0;
  } else if (obj[key].length == 0) {
    return 0;
  } else {
    for(let item of obj[key]) {
      total += item;
    }
    return total/obj[key].length
  }
}