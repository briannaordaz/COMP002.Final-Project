let currentNumbers = ""; //this declares the variable currentNumbers as an empty string (in where the numbers will go in when a button is clicked)
let previousNumbers = null; //this variable will store the previous numbers entered in the calculator 


// This is what will update the calculator display every time a button is pressed
function refreshDisplay() {  //this function is named refreshDisplay
    document.getElementById("display").innerText = currentNumbers; //"document.getElementById("display")"this will find the HTML element with the id "display".   ".innerText" allows you to modify the text inside the HTML element. "= currentNumbers" assigns the value of currentNumbers to the text inside the "display" element.    
    
    // currentNumbers = the value being displayed on the calculator

}

function clickedButton(value) {

// value = the value that shows up when a button is being clicked 

    //this is an if statement and its needed to prevent adding multiple 0's, and without it people would be able to add multiple 0's, like 0000.
    if (value === "0" && currentNumbers === "0") return; //this will check if the value of the button that was pressed is 0 and the expression that is being displayed on the calculator has 0. If they are true, then this will prevent them from adding another 0.

    if (["+", "*", "/", "-"].includes(value) && currentNumbers === '') return; //this will prevent operators from being entered when there is no value (or number) displayed on the calculator. 
    //"["+", "*", "/", "-"]" this array contains all the operators that were using in this calculator. 
    //".includes(value)" will check if the value of the button being pressed is in the array. 
    //"&& currentNumbers === ' '" checks if the expression being displayed on the calculator is empty. 
    //This operator "&&" will make sure that both conditions are true and if they are true the return statement will prevent the operator from being added

    currentNumbers += value;
    refreshDisplay();
}


function equalsButton() { //this function is called "equalsButton" and will handle the equal button
    try {
        previousNumbers = eval(currentNumbers);
        currentNumbers += ` = ${previousNumbers}`;
        refreshDisplay();

        localStorage.setItem('lastNumbers', currentNumbers);
        localStorage.setItem('previousNumbers', previousNumbers);

        buttonsDisable(true);
        //this catch statement will catch the errors
    } catch (error) {
        currentNumbers = "error";
        refreshDisplay();
    }
}

function clearExpression() {
    currentNumbers = ''; //this will make the numbers displayed on the calculator to nothing
    previousNumbers = null;
    refreshDisplay();
    buttonsDisable(false);
}

function buttonsDisable(disable) {
    const 
}