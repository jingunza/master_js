function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  let acumulado = principal*(1+(interestRate/compoundingFrequency))**(compoundingFrequency*timeInYears);
  return acumulado-principal
}

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543