//Final variable declarattion
const fomulaA = 9;
const  fomulaB = 5;
const fomulaC= 32;
const diffKC= 273;
// Other variables
let submitButton = document.getElementById('submit');
let kelvinInput = document.getElementById('kelvin-input')
let kelvin;
 
//  Fahrenheit converter function
const calculateFahreheit = () => {
    let celsius =  kelvin - diffKC;
    let fahrenheit = celsius * fomulaA / fomulaB  + fomulaC;
    return   fahrenheit;
} 

//Event function code 
let displayAnswer = (event)=>{
    event.preventDefault();
    let answer= document.getElementById('result');
    kelvin = parseFloat(kelvinInput.value);
   
    // Validate the input
   if ( isNaN(kelvin)) {
        answer.innerHTML = "Please enter a valid Kelvin value.";
        return;
    }
    // Display the Fahrenheit value
    answer.innerHTML = `The Fahrenheit equivalent is: ${calculateFahreheit()} \u00B0F `;      
}

//Event Listener 
submitButton.addEventListener('click', displayAnswer);
