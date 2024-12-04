let currentNumbers = ""; //this declares the variable currentNumbers as an empty string (in where the numbers will go in when a button is clicked)
let previousNumbers = null; //this variable will store the previous numbers entered in the calculator 


// This is what will update the calculator display every time a button is pressed
function refreshDisplay() {  //this function is named refreshDisplay
    document.getElementById("display").innerText = currentNumbers; //"document.getElementById("display")"this will find the HTML element with the id "display".   ".innerText" allows you to modify the text inside the HTML element. "= currentNumbers" assigns the value of currentNumbers to the text inside the "display" element.    
    
    // currentNumbers = the value being displayed on the calculator

    // previousNumbers = the numbers previously shown on the calculator before the currentNumbers
}


function clickedButton(value) { //function named "clickedButton", this function will process the value of the button that was clicked

// value = the value that shows up when a button is being clicked 

    //this is an if statement and its needed to prevent adding multiple 0's, and without it people would be able to add multiple 0's, like 0000.
    if (value === "0" && currentNumbers === "0") return; //this will check if the value of the button that was pressed is 0 and the expression that is being displayed on the calculator has 0. If they are true, then this will prevent them from adding another 0.

    if (["+", "*", "/", "-"].includes(value) && currentNumbers === '') return; //this will prevent operators from being entered when there is no value (or number) displayed on the calculator. 
    //"["+", "*", "/", "-"]" this array contains all the operators that were using in this calculator. 
    //".includes(value)" will check if the value of the button being pressed is in the array. 
    //"&& currentNumbers === ' '" checks if the expression being displayed on the calculator is empty. 
    //This operator "&&" will make sure that both conditions are true and if they are true the return statement will prevent the operator from being added

    currentNumbers += value; //this adds the numbers shown on the calculator with the value (button being pressed)
    refreshDisplay(); //this will update the calculator's display

}


function equalsButton() { //this function is called "equalsButton" and will handle the equal button
    try {
        previousNumbers = eval(currentNumbers); //the eval() takes strings and evaluates it to Javascript code. (currentNumbers) is a variable that could contain strings
        //If the value of currentNumbers contains a string (example: "100 + 100")
        //the eval() will evaluate it to Javascript code (example: "100 + 100" turns into 100 + 100 with eval()) 
        // and then the result gets assigned to "previousNumbers"


        currentNumbers += ` = ${previousNumbers}`;  //currentNumbers holds the expression that is currently being displayed, 
        //the += operator will add a value to the current value(currentNumbers). 
        // `= ${previousNumbers}` represents the result of a previous calculation and it will be added to the end of currentNumbers

        refreshDisplay(); //this will update the calculator's display


        //"localStorage.setItem" allows you to store a value in the browser's local storage
        localStorage.setItem('lastNumbers', currentNumbers); //lastNumbers is the key in which the data will be stored in, and currentNumbers is the value that will be stored
        localStorage.setItem('previousNumbers', previousNumbers); //same thing with this code, the key in which the data will be stored in is "previousNumbers" and the value that will be stored is "previousNumbers"

        buttonsDisable(true); //this disables all the buttons
        
    } catch (error) { //this is a catch block and will handle errors that happen in the try block
        currentNumbers = "error"; //if there is an error in the try block, the display of the calculator will show "error"
        refreshDisplay(); //this will update the calculator's display
    }
}

//this function is to clear the expressions
function clearExpression() { //the function name is "clearExpression"
    currentNumbers = ''; //this will clear the numbers displayed on the calculator (it sets currentNumbers to an empty string)
    previousNumbers = null; //this will clear the the stored result
    refreshDisplay(); //this will update the display of the calculator
    buttonsDisable(false); //this will re-enable all buttons allowing people to interact with them again
}

//this is a function to disable and enable buttons
function buttonsDisable(disable) { //name of function: "buttonsDisable"
    const buttons = document.querySelectorAll('calculator-button'); //this will select all the elements with the class 'calculator-button'
    buttons.forEach(button => { //this will loop through the button elements
        if (button.id !== 'button-clear') { //this will check if the button is NOT the clear button
            button.disabled = disable; //this will enable or disable the button based on the value(disable) which could be true or false
        }
    });
}

//this will set up event listeners for the buttons (which will make them clickable)

//"document.getElementById" selects an HTML element with the ID specified in the parenthesis (in all the codes down below, example: ('button-7)) 
//".addEventListener('click'," will attach an event listener to the buttons and listens for a 'click' event
//"() => clickedButton('')" this has an arrow function that will run when a button is being clicked
//(Example: when someone clicks the 8 button, clickedButton('8') function will be triggered and will process its value "8")
document.getElementById('button-7').addEventListener('click', () => clickedButton('7')); //this adds an event listener to the 7 button, when the button gets clicked, the function "clickedButton" will get called along with the value (of the button that is clicked)
document.getElementById('button-8').addEventListener('click', () => clickedButton('8')); //this adds an event listener to the 8 button
document.getElementById('button-9').addEventListener('click', () => clickedButton('9')); //this adds an event listener to the 9 button
document.getElementById('button-plus').addEventListener('click', () => clickedButton('+')); //this adds an event listener to the addition button
document.getElementById('button-4').addEventListener('click', () => clickedButton('4')); //this adds an event listener to the 4 button
document.getElementById('button-5').addEventListener('click', () => clickedButton('5')); //this adds an event listener to the 5 button
document.getElementById('button-6').addEventListener('click', () => clickedButton('6')); //this adds an event listener to the 6 button
document.getElementById('button-minus').addEventListener('click', () => clickedButton('-')); //this adds an event listener to the subtraction button
document.getElementById('button-1').addEventListener('click', () => clickedButton('1')); //this adds an event listener to the 1 button
document.getElementById('button-2').addEventListener('click', () => clickedButton('2')); //this adds an event listener to the 2 button
document.getElementById('button-3').addEventListener('click', () => clickedButton('3')); //this adds an event listener to the 3 button
document.getElementById('button-multiply').addEventListener('click', () => clickedButton('*')); //this adds an event listener to the multiplication button
document.getElementById('button-clear').addEventListener('click', clearExpression); //this will add an event listener to the clear button 
document.getElementById('button-0').addEventListener('click', () => clickedButton('0')); //this adds an event listener to the 0 button 
document.getElementById('button-equals').addEventListener('click', equalsButton); //this will add an event listener to the equals button 
document.getElementById('button-divide').addEventListener('click', () => clickedButton ('/')); //this adds an event listener to the division button


if (localStorage.getItem('lastNumbers')) { //this will check in the localStorage if there is a value saved under the key "lastNumbers"
    currentNumbers = localStorage.getItem('lastNumbers'); //if a value for "lastNumbers" exists, it will get assigned to the variable of currentNumbers
    previousNumbers = localStorage.getItem('previousNumbers');
    refreshDisplay(); //this will update the calculator's display
}

document.getElementById('last-result-display').innerText =`${ localStorage.getItem('lastNumbers') || "There is no expression"}`; 
//"document.getElementById('last-result-display')" will select the iD 'last-result-display' from the HTML element
// "`${ localStorage.getItem('lastNumbers')" this will obtain the value stored inside the 'localStorage' under the key 'lastNumbers', it will return the same value that was stored in there (if there was a value stored) 
// "|| "There is no expression"}`" if there is no value stored in the localStorage the calculator will display "There is no expression"