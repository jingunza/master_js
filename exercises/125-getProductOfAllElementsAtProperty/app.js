var obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    let producto = 1;
    if (!obj[key]){
      return 0;
    } else if (!Array.isArray(obj[key])){
      return 0;
    } else if (obj[key].length==0){
      return 0;
    } else {
      for (let elem of obj[key]){
        producto*=elem;
      }
      return producto
    }
}
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24