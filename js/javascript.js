function getInput(index, type) {
  var intialNumbers = document.querySelectorAll(".numbers");
  var intialOperators = document.querySelectorAll(".operators");
  if ((type == true)) {
    var number = +intialNumbers[index].innerHTML;
    displayInResult(number);
  } else if ((type == false)) {
    var operator = intialOperators[index].innerHTML;
    displayInResult(operator);
  }
}

function displayInResult(dispalyedObject) {
  var displayedResult = document.querySelector(".result");
  displayedResult.innerHTML += dispalyedObject;
}

function deleteAll(deleteAllResult) {
  var displayedResult = document.querySelector(".result");
  displayedResult.innerHTML = "";
}
