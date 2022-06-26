var obj = {
 key: ['Jamil', 'Albrey']
};
function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if (!obj[key]){
        return undefined;
    } else {
    return obj[key][index];
    }
};