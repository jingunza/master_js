// Write your function here
const countAllCharacters = (string) => {
    if (string.length == 0){
        let arr = [];
        return arr;
    } else {
        const object = {};
        for (let element of string){
            if (object[element]==null) {
                object[element]=1;
            } else {
                object[element]++;
            }
        }
        return object;   
    }  
}
