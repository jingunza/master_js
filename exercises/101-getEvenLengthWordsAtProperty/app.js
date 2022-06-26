var obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if (!Array.isArray(obj[key])){
      return [];
    } else if (obj[key].length==0) {
      return [];
    } else {
      let newArray = obj[key].filter((item) => {
      return item.length%2==0});
      return newArray;
    }
}

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']