var obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
    // your code here
    let array = [];
    
    if (!obj[key]){
      return array;
    } else if (!Array.isArray(obj[key])){
      return array;    
    } if (obj[key].length==0){
      return array;
    } else {
      array = obj[key]; //.map(item=>item)
      array.sort((a,b)=>a-b);
      return array[0];
    }
}
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1