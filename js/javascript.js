// getting array variables with buttons value
let intialNumbers = document.querySelectorAll(".numerical");
let deleteAll = document.querySelector(".deleteAll");
let calculation = document.querySelector(".calculation");

// // select result input field
var displayedResult = document.querySelector(".result");

// printing the button number in result section
intialNumbers.forEach((numericals) => {
  numericals.addEventListener("click", (number) => {
    displayedResult.value += number.target.innerText;
  });
});

//printing the calculation result
calculation.addEventListener("click", () => {
  displayedResult.value = eval(displayedResult.value);
});

// return the result section into intial form
deleteAll.addEventListener("click", () => {
  displayedResult.value = "";
});
