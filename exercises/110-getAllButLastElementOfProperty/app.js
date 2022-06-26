var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here
    let array = [];
    if (!obj[key]){
      return array
    } else if (!Array.isArray(obj[key])){
      return array
    } else if(obj[key].length==0) {
      return array
    } else {
      array = obj[key];
      array.pop();
      return array;
    }
}

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]