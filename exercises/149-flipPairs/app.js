function flipPairs(input){
    // your code here
    let array = input.split('');
    let pares = array.filter((item,index)=>{
        if (index%2==0) { return item } });
    let impares = array.filter((item,index)=>{
        if (index%2==1) { return item } });
    let output = "";
    for (let i=0; i<impares.length; i++){
        output = output + impares[i] + pares[i];
    }
    if (pares.length>impares.length){
      output += pares[pares.length-1];
    }
    return output;
  }

  var input = "check out how interesting this problem is, it's insanely interesting!";
  var output = flipPairs(input);
  console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
