
//Final variable declarattion
const fomulaA = 9;
const  fomulaB = 5;
const fomulaC= 32;
const diffKC= 273;
// Other variablest
let kelvinNav = document.getElementById('kelvin-nav');
let runConverterClick = document.getElementById('run-converter');
let kelvinProject = document.getElementById('kelvin-display');
let submitButton = document.getElementById('submit');
let kelvinInput = document.getElementById('kelvin-input');
let kelvin;
   kelvinProject.hidden = true;

 
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

let displayCoverterProject = ()=>{
    kelvinProject.hidden = false;  
    messageProject.hidden = true;
    jayTradesProject.hidden = true;
    
}

//Event Listener 
submitButton.addEventListener('click', displayAnswer);
runConverterClick.addEventListener('click', displayCoverterProject);
kelvinNav.addEventListener('click', displayCoverterProject);


//JAYTRADES PROJECT JAVASCRIPT CODE
let jayTradesNav = document.getElementById('jaytrades-nav');
let viewProjectClick = document.getElementById('view-project');
let jayTradesProject = document.getElementById('jaytrades-project-img')
    jayTradesProject.hidden = true;

let displayJayTradeProject = ()=>{
       jayTradesProject.hidden = false
       kelvinProject.hidden = true;
       messageProject.hidden = true;
}

viewProjectClick.addEventListener('click', displayJayTradeProject);
jayTradesNav.addEventListener('click', displayJayTradeProject);



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
let messageGenNav = document.getElementById('msg-gen-nav');
let runMessageClick = document.getElementById('run-message');
let button = document.getElementById('gen-button');
let messageProject = document.getElementById('msg-project-box');
    messageProject.hidden = true;

//Events Handler Functions
let displayMsgGenProject = ()=>{
    messageProject.hidden = false;  
    jayTradesProject.hidden = true;  
    kelvinProject.hidden = true;
}

let displayMessage = ()=>{
    let msgDisplay=document.getElementById('msg-display');
    messagesGenerated = generateMessages();
    msgDisplay.innerHTML = formatMessage(messagesGenerated);       
}
// Add Events Listeners
button.addEventListener('click', displayMessage);
runMessageClick.addEventListener('click', displayMsgGenProject);
messageGenNav.addEventListener('click', displayMsgGenProject);

//PROJECT NAVIGATION JAVASCRIPT
//DOM variables

let projectNavSectionHover = document.getElementById('sub-project-nav');
let projectMainNavHover = document.getElementById('main-project-nav');
let projectSubNav = document.getElementById('sub-project-nav');
    projectSubNav.hidden = true;

let displaySubProjectNav = ()=>{
    projectSubNav.hidden = false;
    
}

let hideSubProjectNav = ()=>{
    projectSubNav.hidden = true;
}


projectMainNavHover.addEventListener('mouseover', displaySubProjectNav);
projectNavSectionHover.addEventListener('mouseleave', hideSubProjectNav);
