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

// INSPIRATIONAL MESSAGE GENERATOR JAVASCRIPT CODES
// Random Number Function
let getRandom= num =>{
    return Math.round(Math.random()*num);
}

// Array Objects of Messages
let arrayCollections ={
    firstMessages: ["The best use of life is LOVE.", 
            "The best expression of love is TIME.",
            "The best time to love is NOW."  ],

    secondMessages: ["Every temptation is an opportunity to do good.",
              "It is easier to stay out of temptation than getting out of it.",
              "The quicket way to neutralise temptation allure is to turn your attention to something else."],
     
    thirdMessages:["Observe your spiritual gift.",
              "Listen to your heart.",
              "Use your ability."]
}

// Global variable of message generated
let messagesGenerated;

// Random Generate Messages Function
let generateMessages =()=>{
 messagesGenerated =[];


 for(let message in arrayCollections) {
    let selectedOption = getRandom(arrayCollections[message].length-1);
    
    switch (message){
        case 'firstMessages':
         messagesGenerated.push(arrayCollections[message][selectedOption])
         break;
     
        case 'secondMessages':
         messagesGenerated.push(arrayCollections[message][selectedOption])
         break;
     
        case 'thirdMessages':
         messagesGenerated.push(arrayCollections[message][selectedOption])
         break;
     
        default:
         messagesGenerated.push( "There is a purpose behind every situation( problem and fortune)");
         
       }

  }
  return messagesGenerated;
};

// Generated Messages Format function
const formatMessage =(messages)=>{
    let format = messages.join("\n");
     return format;
}

// DOM Variables
let runMessageClick = document.getElementById('run-message');
let button = document.getElementById('gen-button');
let messageProject = document.getElementById('msg-project-box');
    messageProject.hidden = true;

//Events Functions
let displayProject = ()=>{
    messageProject.hidden = false;
    
}

let displayMessage = ()=>{
    let msgDisplay=document.getElementById('msg-display');
    messagesGenerated = generateMessages();
    msgDisplay.innerHTML = formatMessage(messagesGenerated);       
}
// Add Events Listeners
button.addEventListener('click', displayMessage);
runMessageClick.addEventListener('click', displayProject);


