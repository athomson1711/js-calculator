// DOM HTML REFERENCES
const display = document.querySelector(".display__output")
const numberButtons = document.querySelectorAll(".calculator__numButton")
const operatorButtons = document.querySelectorAll(".calculator__opButton")
const acButton = document.querySelector(".calculator__clearButton")
const equalButton = document.querySelector(".calculator__equalButton")

// VARIABLES
let currentNumber = ""
let operator = ""
let previousNumber = ""
let calcNumber = 0

// FUNCTIONS


// NUMBER BUTTONS FUNCTION
numberButtons.forEach(numButton => {
    numButton.addEventListener("click", (event) => {
        if (currentNumber === ""){
            currentNumber = event.target.innerHTML
            
        } else {
            currentNumber += event.target.innerHTML
        }
    display.innerHTML += event.target.innerHTML;
    }); 
});

// OPERATOR BUTTONS FUNCTION
operatorButtons.forEach(opButton => {
    opButton.addEventListener("click", (event) => {
        // remove previous operator is another is pressed and overwrite the variable
        display.innerHTML += event.target.innerHTML
        
        operator = event.target.innerHTML
        previousNumber = currentNumber;
        currentNumber = ""
        // if current number empty then previousNumber is = calcNumber
    });
});

// EQUALS BUTTON FUNCTION
equalButton.addEventListener("click", (event) =>{
    // console.log("Current Number:", currentNumber)
    // console.log("Previous Number:", previousNumber)
    // console.log("Operator:", operator)
    switch (operator){
        case "+": calcNumber = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case "-":  calcNumber = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case "x": calcNumber = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case "/":calcNumber = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
    }
    display.innerHTML = calcNumber
    
    // AFTER CALC RESET VARIABLE
    // add formatting to insert number commas
    console.log(calcNumber)
})

// AC BUTTON FUNCTION
acButton.addEventListener("click", (event) => {
    display.innerHTML = ""
    currentNumber = ""
    operator = ""
})


