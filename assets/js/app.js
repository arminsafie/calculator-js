let displayValue = "";
const updateDisplay = () => {
  const display = document.getElementById("display");
  display.value = displayValue;
};

const clearDisplay = () => {
  displayValue = "";
  updateDisplay();
};

const appendToDisplay = (value) => {
  displayValue += value;
  updateDisplay();
};

const calculateResult = () => {
  try {
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
};
