var obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
    if (!Array.isArray(obj[key])){
      return [];
    } else if (obj[key].length==0) {
      return [];
    } else {
      return obj[key].filter(function(item, index){
        if (index%2==0){return item}
      })
    }
}

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]