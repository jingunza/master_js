// Write your function here
const getOddLengthWordsAtProperty = (obj,key) => {
    return obj[key].filter(function(item){
        return item.length%2==1;
    })
}
