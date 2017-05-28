


/* Q&A object-array */
  var questionBank = [
    { indexOfQuestions: 0, question: "Who brought Jon Snow back to life?", answer: "Melisandre" },
    { indexOfQuestions: 1, question: "Who killed Joffrey?", answer: "Olenna Tyrell" },
    { QobjectIndexer: 2, question: "Who is the real father of Cercei's kids?", answer: "Jaime Lannister" },
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


var questionTime = 15;
var myInterval;
var myCount;
myCount = 0;



function startGame () {
    $(".btn").on("click", function () {

        function timerForQuestion () {
            $("#timeRemaining").html("<h2>Time Remaining: </h2>" + "" + myCount);

            if(myCount > 16){
                myInterval = setInterval(timerForAnswer, 1000);
                myCount = 0;
                timerForAnswer();
            }else {
                myCount++;
            }
        }

        function timerForAnswer () {
            $("#timeRemaining").html("<h2>Time Remaining: </h2>" + "" + myCount);

            if(myCount > 6) {
                myInterval = setInterval(timerForQuestion, 1000);
                myCount = 0;
                timerForQuestion();
            }else {
                myCount++;
            }
        }


    })
};
startGame();