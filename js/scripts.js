
const userInput=("1,000");
function romanNumeralConverter(userInput) {
  userInput = parseInt(userInput);
  if (userInput === 1) {
    return "I";
  }
  else if (userInput === 5) {
    return "V";
  }
  else if (userInput === 10) {
    return "X";
  }
  else if (userInput === 50) {
    return "L";
  }
  else if (userInput === 100) {
    return "C";
  }
  else if (userInput === 500) {
    return "D";
  }
  else if (userInput === 1000) {
    return "M"
  }
}

