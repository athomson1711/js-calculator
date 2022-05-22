// DOM HTML REFERENCES
const display = document.querySelector(".calculator__output")
const numberButtons = document.querySelectorAll(".calculator__numButton")
const operatorButtons = document.querySelectorAll(".calculator__opButton")
const acButton = document.querySelector(".calculator__clearButton")
const equalButton = document.querySelector(".calculator__equalButton")
const decBtn = document.querySelector(".calculator__decButton") 

// VARIABLES
let firstNumber = "";
let operator = "";
let secondNumber = "";
let sumNumber = 0;
let storedNumber = 0;

// ---------FUNCTIONS-----------


// NUMBER BUTTONS FUNCTION
numberButtons.forEach(numButton => {
    numButton.addEventListener("click", (event) => {
        if (firstNumber === ""){
            firstNumber = event.target.innerHTML
        } else {
            firstNumber += event.target.innerHTML
        }
    display.innerHTML += event.target.innerHTML;
    }); 
});

// OPERATOR BUTTONS FUNCTION
operatorButtons.forEach(opButton => {
    opButton.addEventListener("click", (event) => {
        // remove previous operator if another is pressed and overwrite the variable
        
        display.innerHTML += event.target.innerHTML
        
        operator = event.target.innerHTML
        // use previous calculation sum as a first number
        if (storedNumber === 0){
            secondNumber = firstNumber;
            } else{
            secondNumber = storedNumber;
            }
        firstNumber = ""      

    });
});

// EQUALS BUTTON FUNCTION
equalButton.addEventListener("click", (event) =>{
    // console.log("Current Number:", firstNumber)
    // console.log("Previous Number:", secondNumber)
    // console.log("Operator:", operator)
    switch (operator){
        case "+": sumNumber = parseFloat(secondNumber) + parseFloat(firstNumber);
            break;
        case "-":  sumNumber = parseFloat(secondNumber) - parseFloat(firstNumber);
            break;
        case "x": sumNumber = parseFloat(secondNumber) * parseFloat(firstNumber);
            break;
        case "/":sumNumber = parseFloat(secondNumber) / parseFloat(firstNumber);
            break;
        default:
        "Error, please AC and try again";
        break;
        
    }
    display.innerHTML = sumNumber
    storedNumber = sumNumber;
    // console.log(storedNumber)
})

// AC BUTTON FUNCTION, 
acButton.addEventListener("click", (event) => {
    display.innerHTML = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    sumNumber = 0;
    storedNumber = 0;
})

// DECIMAL BUTTON
decBtn.addEventListener('click', () => {
   
})