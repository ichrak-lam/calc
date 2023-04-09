This is a basic HTML calculator with a minimalist design. The calculator allows users to perform basic mathematical operations such as addition, subtraction, multiplication, and division.

Technologies Used
HTML
CSS
JavaScript
Getting Started
To use this calculator, simply open the index.html file in your web browser.

Features
Addition, subtraction, multiplication, and division
Clear and delete functions
Usage
Enter a number using the calculator buttons
Use the operation buttons to perform mathematical operations
Use the clear button to clear the input field
Use the delete button to delete the last entered digit
This CSS code defines the styles for a calculator interface. Here's a breakdown of what each part of the code does:

body Styles
The body element is styled with a flexbox layout, centered using justify-content.

#calc Styles
The #calc element is the container for the calculator. It is styled with a 2px black border and a grid layout with 4 columns. The background color is set to black and the border-radius is set to 10px.

input Styles
The input element is styled to span all 4 columns of the grid, with a height of 50px and a font-size of 30px. The background color is set to white and the border-radius is set to 13px.

.del and .equ Styles
The .del and .equ buttons are styled to span 2 columns of the grid.

button Styles
All buttons are styled with a height of 50px, a margin of 2px, and a font-size of 20px. The background color is set to dark gray and the border-radius is set to 10px.

.operation Styles
The .operation buttons (i.e. the divide, multiply, add, and subtract buttons) are styled with a different background color (light blue).
JavaScript Calculator
This code implements a basic calculator using HTML, CSS, and JavaScript. The HTML file defines the structure of the calculator using a <div> container and a series of <button> elements that represent the different numbers and operators. The CSS file defines the style and layout of the calculator using flexbox and grid.

The JavaScript code handles the logic of the calculator. It defines a calculation variable that stores the current mathematical expression as a string. The calc() function is called every time a button is clicked and it adds the corresponding value to the calculation variable. The dele() function deletes the last character from the output field. The reset() function clears the calculation variable and sets the output field to an empty string. Finally, the res() function evaluates the calculation string using the eval() method and displays the result in the output field. If an error occurs during the evaluation, the output field displays the message "error".

Note that the code includes a variable n that is used to handle a bug where the user can't enter a new expression after evaluating the first one.