function countCharacter(str, char) {
    // your code here
    let string = str;
    let count= 0;
    for (let i=0; i<string.length; i++){
        if (char==string[i]) {
            count++;
        }
    }
    return count;
}