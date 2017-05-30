


/* Q&A object-array */
  var questionBank = [
    { indexOfQuestions: 0, question: "Who brought Jon Snow back to life?", answer: "Melisandre" },
    { indexOfQuestions: 1, question: "Who killed Joffrey?", answer: "Olenna Tyrell" },
    { indexOfQuestions: 2, question: "Who is the real father of Cercei's kids?", answer: "Jaime Lannister" },
    { indexOfQuestions: 3, question: "Who is Jon Snow's real mother?", answer: "Lyanna Stark" },
    { indexOfQuestions: 4, question: "Who 'drinks and knows things'?", answer: "Tyrionne Lannister" }
  ]
  
var wrongChoices = [
    ["Sir Davos", "Arya Stark", "Tyrion Lannister"],
    ["Jaime Lannister", "Sansa Stark", "Jon Snow"],
    ["Jaime Lannister", "Sir Davos", "Robert Boratheon"],
    ["Kaitlin Stark", "Cercei Lannister", "Brienne of Tarth"],
    ["Hodor", "Robb Stark", "Rhaegar Targaryen"]
  ]


//global variables 

/* stores tally-counts into array */
var tallyCount = [rightAnswers, wrongAnswers, unanswered];
var rightAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;

//boolean 
var hasChosen = false;

var questionTime = 15;
var answerTime = 7;
var myInterval;

var myCount;
myCount = 0;

    function timer (stopTime) {
        //place the title and myCount to appear
      $("#timeRemaining").html("<h2>Time Remaining: </h2>" + myCount);
        
        //insert function for picking and placing questions and choices
        
        if(myCount === stopTime) {
            clearInterval(myInterval);
            //show next question
            //restart timer
            var myTime;
            if(stopTime === questionTime) {
                myTime = answerTime;
                
                //to ensure to only click on one answer use the boolean "hasChosen = false;"
                //if user has cliked the right answer, then show text that he is right and rightAnswers++;
                //if user has cliked on the choices that are not the right answer, then show text that he is wrong and wrongAnswers++;
                //else if he has not clicked on any choice at all tell he is did not answer and unanswered++;
                //after that if statement change the boolean to "hasChosen === true"
            }else {
                myTime = questionTime;
            }
        myInterval = setInterval(timer, 1000, myTime);
        myCount = 0;
        }else {
            myCount++;
        }
        
    };

//callling the timer function to begin once the button is clicked
$(".btn").on("click", function(){
    myInterval = setInterval(timer, 1000, questionTime);
    questionnaire(questionBank, wrongChoices);
    
});

function questionnaire (qAnswerArray, choicesArray) {
    
    for( var i = 0; i< 5; i++) {
        
        $("#question").append(qAnswerArray[i].question);//place question into the question area
        choicesArray[i].push(qAnswerArray[i].answer); //include the answer choice inside of the wrong choices array 
        $("#choices").append(choicesArray[i]);//place those choices (including the answer) here
        break;
    }
    
    
};




