/*
1-design buttons and a input field to show result at
2-logic part
  2.1 - get numbers in an array and operators in seperate array
  2.2 - when you press the button sent the value of the button to logic
    2.2.0 - filter the value if it's a number or an operator   
  2.3 - procces the value and make it a number
  2.4 - show it in the input field
  2.5 - make delete button return the input field empty
3-put some style to your HTML
*/





// getting array variables with buttons value
var intialNumbers = document.querySelectorAll(".numbers");
var intialOperators = document.querySelectorAll(".operators");

// select result input field
var displayedResult = document.querySelector(".result");



// filter the the pressed button's value
function getInput(index, type) {
  if ((type == true)) {
    // numbers returns an index number and true indicating it's a numbers
    var number = +intialNumbers[index].innerHTML;
    displayInResult(number);
  } else if ((type == false)) {
    // operators returns an index number and false indicating it's an operators
    var operator = intialOperators[index].innerHTML;
    displayInResult(operator);
  }
}


// display the pressed button in input field
function displayInResult(dispalyedObject) {
  displayedResult.value = displayedResult.value + dispalyedObject;
}

// return input field empty
function deleteAll() {
  displayedResult.value = "";
}
