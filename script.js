const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      expression = "";
      display.value = "";
    } else if (value === "±") {
      if (expression) {
        if (expression.startsWith("-")) {
          expression = expression.slice(1);
        } else {
          expression = "-" + expression;
        }
        display.value = expression;
      }
    } else if (value === "=") {
      try {
        
        expression = eval(expression).toString();
        display.value = expression;
      } catch {
        display.value = "Error";
        expression = "";
      }
    } else {
      const operators = ["+", "-", "*", "/", "%"];
      const lastChar = expression.slice(-1);

      
      if (operators.includes(value) && (expression === "" || operators.includes(lastChar))) {
        return;
      }

      expression += value;
      display.value = expression;
    }
  });
});