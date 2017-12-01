let tempValue = document.getElementById("insertTemp");
let convertedTemp = document.getElementById("output");
let celsRadio = document.getElementById("radioC");
let fahrRadio = document.getElementById("radioF");


// This function calculates F to C
function toCelsius (tempValue) {
  let celsiusT = (tempValue - 32) * 5/9;
  convertedTemp.value = Math.round(celsiusT);
  if (celsiusT >= 32) {
    convertedTemp.classList.toggle("hot");
  } else if (celsiusT <= 0) {
    convertedTemp.classList.toggle("cold");
  } else {
    convertedTemp.classList.toggle("normal");
  }
  return celsiusT;
}
    
// This function calculates C to F
function toFahrenheit (tempValue) {
  let fahrenheitT = (tempValue.value * 9/5) + 32;
  convertedTemp.value = Math.round(fahrenheitT);
  if (fahrenheitT >= 90) {
    convertedTemp.classList.toggle("hot");
  } else if (fahrenheitT <= 32) {
    convertedTemp.classList.toggle("cold");
  } else {
    convertedTemp.classList.toggle("normal");
  }
  return fahrenheitT;
}
    
// Get a reference to the button element in the DOM
var button = document.getElementById("converter");


// This function should determine which conversion should happen based on which radio button is selected.    
function determineConverter (clickEvent) {
  if (document.getElementById("radioC").checked) {
    toCelsius(tempValue.value);
  } else if (document.getElementById("radioF").checked) {
    toFahrenheit(tempValue);   
  }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter)

// Clear button function
var clrButton = document.getElementById("clearButton");
clrButton.addEventListener("click", function(){
  tempValue.value = "";
  convertedTemp.value = "";
  celsRadio.checked = false;
  fahrRadio.checked = false;
  convertedTemp.classList.toggle("empty");
})

