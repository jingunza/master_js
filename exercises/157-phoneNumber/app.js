function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  // your code here
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  // your code here
  let areaCode = "";
  for (let i = 0; i<3; i++){
    areaCode += numbers[i];
  }
  return areaCode
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  // your code here
  let exchangeCode = "";
  for (let i = 3; i<6; i++){
    exchangeCode += numbers[i];
  }
  return exchangeCode
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  // your code here
  let lineNumber = "";
  for (let i = 6; i<10; i++){
    lineNumber += numbers[i];
  }
  return lineNumber
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};