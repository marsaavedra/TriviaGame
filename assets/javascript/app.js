


/* Q&A object-array */
  var questionBank = [
    { indexOfQuestions: 0, question: "Who brought Jon Snow back to life?", answer: "Melisandre" },
    { indexOfQuestions: 1, question: "Who killed Joffrey?", answer: "Olenna Tyrell" },
    { indexOfQuestions: 2, question: "Who is the real father of Cercei's kids?", answer: "Jaime Lannister" },
    { indexOfQuestions: 3, question: "Who is Jon Snow's real mother?", answer: "Lyanna Stark" },
    { indexOfQuestions: 4, question: "Who 'drinks and knows things'?", answer: "Tyrionne Lannister" }
  ]
  
var wrongChoices = [
    ["Sir Davos","Melisandre", "Arya Stark", "Tyrion Lannister"],
    ["Jaime Lannister", "Sansa Stark", "Olenna Tyrell", "Jon Snow"],
    ["Jaime Lannister", "Sir Davos", "Robert Boratheon", "Ned Stark"],
    ["Kaitlin Stark", "Cercei Lannister", "Lyanna Stark", "Brienne of Tarth"],
    ["Hodor", "Tyrionne Lannister", "Robb Stark", "Rhaegar Targaryen"]
  ]


//global variables 

/* stores tally-counts into array */
var tallyCount = [rightAnswers, wrongAnswers, unanswered];
var rightAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;

//boolean 
var hasChosen = false;
//count my questions
var currentQuestion = 0;


var questionTime = 7;
var answerTime = 2;
var myInterval;

var myCount;
myCount = 0;


$(".btn").on("click", function(){
    $("#timeRemaining").empty();
    $("#choices").empty();
    clearInterval(myInterval);
    currentQuestion = 0;
    myInterval = setInterval(timer, 1000, questionTime);
    questionnaire();
    myCount = 0;
    $(".btn").hide();//hide after clicked
});



//callling the timer function to begin once the button is clicked
//$(".btn").on("click", function(){
//    myInterval = setInterval(timer, 1000, questionTime);
//    questionnaire();
//    $(".btn").hide();//hide after clicked
//});

    function timer (stopTime) {
        //place the title and myCount to appear
      $("#timeRemaining").html("<h2>Time Remaining: </h2>" + myCount);
        
    
        if(myCount === stopTime) {
            clearInterval(myInterval);
            var myTime;
            if(stopTime === questionTime) {//this is happens if no choice was clicked
                myTime = answerTime;
               //this is where I want my question to be replaced by answer
                unanswered++;
                $("#question").html("<h2>Time has run Out! The correct answer is: </h2>" + "<h2>" + questionBank[currentQuestion].answer + "</h2>");
                $("#choices").empty();
                myInterval = setInterval(timer, 1000, myTime);//this restarts the timer
                myCount = 0;//this is to reset the time Remaining back to zero
                
            
            }else if(stopTime === answerTime){//this happens if the the time set for answerTime ends and a new question to appear
                //this is where I want my question to pop up 
                myTime = questionTime;//if the the answeTime reaches the stopTime myTime now becomes the question time (which is set to 15)
                currentQuestion++;
                $("#choices").empty();//here we empy the choices section to make room for the next set of choices
                if( currentQuestion === questionBank.length) {//this is for when we run out of questioins and the game ends revealing the stats
                    //End of game
                    $("#question").empty();
                    $("#timeRemaining").html("<p>Right Answers: </p>" + rightAnswers + "<p>Wrong Answers: </p>" + wrongAnswers + "<p>Unanswered: </p>" + unanswered );
                    $("#choices").empty();
                    clearInterval(myInterval);
                    $(".btn").show();
                    
                    
                    //stop timer 
                }else {//this occurs when the answer time runs out to reveal a new question and restart the timer 
                    questionnaire();//this is to reveal the new question
                    myInterval = setInterval(timer, 1000, myTime);//this is to restart the timer
                    myCount = 0; //this is to reset the time Remaining back to zero
                }
                
            }
            
            
        }else {
            myCount++; 
        }

    };
    


function questionnaire () {
    
   $("#question").html("<h2>" + questionBank[currentQuestion].question +"</h2>"); //includes the question into the question section in the html
    
    for (var i = 0; i < wrongChoices[currentQuestion].length; i++) {
        $("#choices").append('<p class = "myClickableClass">' + wrongChoices[currentQuestion][i] +'</p><br>');
        
    }
    
    //these on click functions should go inside the timer function
    $(".myClickableClass").on("click", function () {
        
        if ( $(this).html() === questionBank[currentQuestion].answer){
            $("#question").html("<h2>You are correct</h2>");
            $("#choices").empty();
            rightAnswers++;
        } else {

            $("#question").html("<h2>You are wrong, the correct answer is :</h2>" + "<h2>" + questionBank[currentQuestion].answer + "</h2>");
            $("#choices").empty();
            wrongAnswers++;   
        }
        $(".myClickableClass").off("click");
        //move on to the next question where question timer will restart
        clearInterval(myInterval); 
        myCount= 0;
        myInterval = setInterval(timer, 1000, answerTime);//this sets the answertime back up
    });
    
};
     

    






