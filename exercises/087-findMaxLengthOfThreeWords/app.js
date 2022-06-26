// Write your function here
const findMaxLengthOfThreeWords = (w1,w2,w3) => {
    let array = [w1.length,w2.length,w3.length];
    array.sort((a,b)=>b-a);
    return array[0];
}