function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    let nota = "";
    if (score < 0 || score > 100){
        return "INVALID SCORE"
    } else if (score<=59){
        nota = "F";
    }  else if (score<=69){
        nota = "D"
    }  else if (score<=79){
        nota = "C"
    }  else if (score<=89){
        nota = "B"
    }  else if (score<=100){
        nota = "A"
    };
    if ((score%10==0 || score%10==1 || score%10==2)&&nota!="F"){
        nota += "-";
    } else if ((score%10==9 || score%10==8)&&nota!="F"){
        nota += "+";
    }
    return nota;
}


var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'