function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let array = arr.filter(item=> typeof(item)=="number");
    if (arr.length==0){
        return 0;
    } else if (array.length==0){
        return 0;
    } else { 
        let arrayInverso = array.sort((a,b)=>b-a);
        return arrayInverso[0];
    }};

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5