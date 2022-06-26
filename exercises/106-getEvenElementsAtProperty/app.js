
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
  // your code here
  if (!Array.isArray(obj[key])){
    return [];
  } else if (obj[key].length==0) {
    return [];
  } else {
    return obj[key].filter(function(item){
      if (item%2==0){return item}
    })
  }
}

var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]