var obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
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
      array.sort((a,b)=>b-a);
      return array[0];
    }
}
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4