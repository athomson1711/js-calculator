# JS Calculator

> _To build a calculator using HTML, CSS and JavaScript. This calculator should accept inputs from a user, is able to perform a range of calculations and will produce a visual output._ </br>

#### Project Link [_here_](https://athomson1711.github.io/js-calculator/).

##

![Calculator Design](assets/js-calc.png)

## User Story:

- As a user of the calculator, I want to be able to perform maths calculations,
  so that I can solve numerical problems accurately.
- Given that the user clicks on a number button, this number should then be stored to be used in calculations.
- Given that the user clicks on an operand button ( + , - , / , \* ) this should trigger the correct operator to be used in calculations.
- Given that the user clicks on the decimal button, this should add a decimal point at the correct position and allow the user to calculate numbers that are fractions.
- Given that the user clicks on the equals button, this should evaluate the sum and return a total value.
- Given that the user clicks on the clear button, the calculator values and display should reset, ready to be used again.

## Functionality:

Essential functionality needed:
</br>

- Addition
- Subtraction
- Division
- Multiplication
- Clear/reset the display
- Visually display the answer / output
- Work with decimals

Approach:

1. First I started by selecting all the elements I needed to target in variables. 

2. The array iterator I used to loop over the numberBtns/operatorBtns was `forEach()`. By adding an event listener, listening out for the click event I was able to capture the value of these buttons.
   </br> For the number buttons I stored the number selected inside a variable to use later in the calculations. I then updated the display of the calculator to reflect the chosen firstValue.

3. After the firstValue has been selected, I then set up an event listener to capture the value of the operator clicked by the user.

4. Calculate total functionality
   </br>
   I used an `switch case` statement to work through the operators and return the value computed by the operator selected. Then updating the calculator display with the sum. I then reset the variables used to store my number values to allow the user to make additional calculations should they wish to.

5. Clear button functionality
   </br>
   On pressing the clear button all variables are reset and the display is cleared, ready for the next input from the user.

6. Decimal button functionality
   </br>
   To prevent the user from adding more than one decimal point, I have added an event listener and used the js string method `includes(".")` to determine whether the firstValue includes this character and if so only add one.

## Inbuilt JS Methods:

The following inbuilt JavaScript methods are used in this codebase:

- `document.querySelector()` `document.querySelectorAll()`
- `element.innerHTML`
- `array.forEach()`
- `element.addEventListener()`
- `if/else if`
- `parseFloat()`
- `string.includes()`

## Technologies & Features:

- JavaScript
- HTML5
- CSS
- Mobile first / responsive design
- Git version control
- UI - features unique mesh gradient background I created in Adobe Illustrator.

## Further Developments:

- Integrate keyboard events, to allow the users interaction with numeric keys to select inputs and operands - instead of just clicking on the buttons.
- Further operand integration such as %

## Contact

Created by [Andrew Thomson](mailto:athomson1711@gmail.com)

<br/>
<div align="right">
    <b><a href="#js-calculator"> ^ back to top</a></b>
</div>
<br/>