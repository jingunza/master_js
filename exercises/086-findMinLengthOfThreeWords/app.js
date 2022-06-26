// Write your function here
const findMinLengthOfThreeWords = (w1, w2, w3) => {
    let array = [w1.length,w2.length,w3.length];
    array.sort((a,b)=>a-b);
    return array[0];
}