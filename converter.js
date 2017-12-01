let tempValue = document.getElementById("insertTemp");
let convertedTemp = document.getElementById("output");


// This function calculates F to C
function toCelsius (tempValue) {
  let celsiusT = (tempValue - 32) * 5/9;
  convertedTemp.value = celsiusT;
}
    
// This function calculates C to F
function toFahrenheit (tempValue) {
  let fahrenheitT = (tempValue.value * 9/5) + 32;
  convertedTemp.value = fahrenheitT;
}
    
// Get a reference to the button element in the DOM
var button = document.getElementById("converter");


// This function should determine which conversion should happen based on which radio button is selected.    

function determineConverter (clickEvent) {
  console.log("determineConverterRunning")
  if (document.getElementById("radioC").checked) {
    // convertedTemp.value = 
    toCelsius(tempValue.value);
    console.log(convertedTemp.value);
  } else if (document.getElementById("radioF").checked) {
    // convertedTemp.value = 
    toFahrenheit(tempValue);   
  }
}

// Assign a function to be executed when the button is clicked

button.addEventListener("click", determineConverter)


    