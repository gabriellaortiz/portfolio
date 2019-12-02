var others="Others<input type='text' />";
var storyParagraph = document.createElement('p');
storyParagraph.setAttribute("id", "userAnswersP");
var newParagraph = document.createElement('p');
newParagraph.setAttribute("id", "ipParagraph");
var resultDiv = document.getElementById("result");

var errorMsg = document.createElement('p');


var userAnswers = [];
var ipInfo = [];

var allQuestions = [{
	question: 'empty',
	choices: ['Others'],
},
{
	question: 'what is your favorite color?',
	choices: ['Others'],
},
{
	question: 'how old do you feel?',
	choices: ['Others'],
},
{
	question: 'what star sign do you identify with?',
	choices: ['Others'],
},
{	
	question: 'what is your earliest memory?',
	choices: ['Others'],
},
{
	question: 'what time is it?',
	choices: ['Others'],
},
{
	question: "the most painful thing you've been told?",
	choices: ['Others'],
},
{
	question: 'what keeps you up at night?',
	choices: ['Others'],
},
{
	question: 'have you ever been in love?',
	choices: ['Others'],
},
{
	question: 'when was the last time you cried?',
	choices: ['Others'],
},
{
	question: 'something you wish you could forget?',
	choices: ['Others'],
},
{
	question: 'describe god',
	choices: ['Others'],
},
{
	question: 'share the last dream you can remember',
	choices: ['Others'],
},
{
	question: 'is heaven a real place?',
	choices: ['Others'],
},
{
	question: 'something you wish you said',
	choices: ['Others'],
},
{
	question: 'bury a secret',
	choices: ['Others'],
}

];

//Reference to tags
var questionTitle = document.getElementById('questionTitle');
var answerBox = document.getElementById('answerBox');
var nextButton = document.getElementById('nextButton');
var questionContainer = document.getElementById('container');
var beginInfo = document.getElementById('beginInfo');
nextButton.addEventListener('click', nextButtonClicked);


//trying to make enter key call nextButtonClicked function
// if (i > 0) {
// 	// Get the input field
// 	var input = document.getElementById("useranswer");
// 	// Execute a function when the user releases a key on the keyboard
// 	input.addEventListener("keyup", function(event) {
// 	  // Number 13 is the "Enter" key on the keyboard
// 	  if (event.keyCode === 13) {
// 	    // Cancel the default action, if needed
// 	    event.preventDefault();
// 	    // Trigger the button element with a click
// 	    document.getElementById("nextButton").click();
// 	  }
// 	});
// }




// // Get the input field
// var input = document.getElementById("useranswer");

// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("nextButton").click();
//   }
// });

// taskInput.addEventListener('keyup', function (event) {
//   //check to see if the enter key was pressed
//   if (event.which === 13) {
//     //if so, run the addTask function
//     nextButtonClicked();
//   }
// });


//Initiating some variables
var i = 0;
var length1 = allQuestions.length;
var lastQuestion = (length1-1);
var length2 = userAnswers.length;
//var correctAnswer = 0;

function nextButtonClicked() {
    //iterate through questions    
    //if(i>allQuestions.length -1){
    // if i is greater than 12,
    // however, on 14 it is printing the values??

    // IF THE END OF THE QUIZ IS REACHED:
    // add response for the last question
   	if (i == lastQuestion) {
   		i++;
   		populateQuestion(lastQuestion);
   		var questionResponse = document.getElementById('useranswer').value;
   		   if (questionResponse !== "") {    		
    			userAnswers.push(questionResponse);
    		}
   	}

   	if(i > length1 -2) {
   	  	resultDiv.appendChild(storyParagraph);
      	resultDiv.appendChild(newParagraph);

	    var questionTitle = document.getElementById("questionTitle");
	      var answerBox = document.getElementById("answerBox");
	      var nextButton = document.getElementById("nextButton");

	      questionTitle.style.display = "none";
	      answerBox.style.display = "none";
	      nextButton.style.display = "none";
	      questionContainer.style.display = "none";




	      //THIS WORKS!!!! VVV
	      var story = userAnswers.join('\n');
	      storyParagraph.textContent += story;
	      userAnswers.forEach(function(answer) {
	      	console.log(answer);
	      });


	    var request = new XMLHttpRequest();

		request.open('GET', 'https://api.ipdata.co/?api-key=74db7cedb43a06aafad4e82c0b3d2a02e3b2ae3969a3596387893424');

		request.setRequestHeader('Accept', 'application/json');

		request.onreadystatechange = function () {
		  if (this.readyState === 4) {
		    console.log('Status:', this.status);
		    console.log('Headers:', this.getAllResponseHeaders());
		    console.log('Body:', this.responseText);
		    ipInfo.push(this.responseText);
		    var ipInfoLength = ipInfo.length;
		    for (var i = 0; i < ipInfoLength; i++) {
		        newParagraph.textContent += ipInfo[i];
		    }

		  }
		};

		request.send();

	// IF THERE ARE QUESTIONS LEFT
    } else {
    	beginInfo.style.display = "none";
    	i++;
    	console.log(i);
    	// if (i > 1 && i < length1) {
    	// var errorQuestionResponse = document.getElementById('useranswer').value;
    	// var errorQuestionTitle = document.getElementById('useranswer').value;    		
    	// if (i > 1 && errorQuestionTitle !== "create your own story..." && errorQuestionResponse !== "") {
    	if (i > 1) {
    		var questionResponse = document.getElementById('useranswer').value;
    		if (questionResponse !== "") {
    			userAnswers.push(questionResponse);
    		}    		
    	}
    	// else if (i >= 1) {
    	populateQuestion(i);
    	// }
    }
};




    // IF THERE ARE STILL UNANSWERED QUESTIONS:
//     } else {
//     	i++;
//     	console.log(i);
//     	var emptyAnswer = document.getElementById('useranswer');
//     	console.log(emptyAnswer);
//     	// if the text box is empty, print error
//     	if ((emptyAnswer == "") && (i > 1)) {
// 			window.alert("please answer");
//     	}
//     	else if (i > 1 && i < length1) {
//     		var questionResponse = document.getElementById('useranswer').value;    		
//     		userAnswers.push(questionResponse);
//     	}
//     	populateQuestion(i);

//     }
// };

function populateQuestion(questionNumber) { 
	// if (i=0) {
	// 	document.getElementById('nextButton').innerHTML = "begin";
	// }
    if(i<length1) {
    	document.getElementById('nextButton').innerHTML = "next";
	    var individualQuestion = allQuestions[i];
	    questionTitle.innerText = individualQuestion.question;
	    answerBox.innerHTML = ""; //reset choices list
	    for(key in individualQuestion.choices){
	    	var textBox = "question"+i;
	        answerBox.appendChild(addBox(textBox));
	    }
    }
    
}


function addBox(name) {
        var enterAnswer = document.createElement('div');
        var textHtml = '<input id="useranswer" type="text" name="' + name + '"';    
        textHtml += '/>';
        //textHtml += choiceText;        
        enterAnswer.innerHTML = textHtml;        
        return enterAnswer;
        // boxResize();
}


// function boxResize(){
// 	$("#useranswer").on('input', function() {
// 	var scroll_height = $("#useranswer").get(0).scrollHeight;

// 	$("#useranswer").css('height', scroll_height + 'px');
// });
// }



