var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(objeto, prop) {
    // your code here
    if (!objeto[prop]) {
      return []
    } else if (objeto[prop].length==0) {
      return []
    } else if (!Array.isArray(objeto[prop])){
      return []
    } else {
      let array = objeto[prop].map(function(item){
        return item**2;})
      return array;
    }
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]