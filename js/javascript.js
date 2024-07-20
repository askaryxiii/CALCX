
// getting array variables with buttons value
var intialNumbers = document.querySelectorAll(".numerical");
var intialOperators = document.querySelectorAll(".operation");

// // select result input field
var displayedResult = document.querySelector(".result");


// printing the button number in result section
intialNumbers.forEach((numericals) => {
  numericals.addEventListener('click', (number) => {
    displayedResult.value += number.target.innerText
  })
})

