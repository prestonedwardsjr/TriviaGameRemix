var timer =20;
var intervalId;
var correct= 0;
var incorrect=0;
var questions = [{
  question: " What year did The Saints win the SuperBowl?",
  answerList: [1972,1989,2006,2009, ],
  answer: 3
},];
  $("#start").on("click",function(){
$(this).hide();
// Display initial time countdown
$("#time").html("<h2>Time Remaining: 120 Seconds</h2>" + "<br>");
// Start Timer Countdown
run();
// Question 1
    $("#question0").html
  ("<h3>" + questions[0].question + "</h3>");
  $("#answer1").html
  ("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
   + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
   + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
   + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>");
// Done button

$("#submit").html("<button id='done' type='button' class='btn btn-primary'>Done</button>");
    $('#done').on("click", function() {
    

    // Keeping track of score based on correct, and incorrect, 
    keepingScore();

    // Display 
    displayResults();

  });
});

// Timer countdown function
function run() {

clearInterval(intervalId);
intervalId = setInterval(decrement, 1000);
}
function decrement() {

//  Decrease timer by one.
  
timer--;

//  Show the timer in the #time tag
$("#time").html("<h2>Time Remaining: " + timer+ " Seconds</h2>" + "<br>");

if (timer === 0) {

  // Run stop function to stop timer countdown
  stop();
    keepingScore();
    displayResults();
}
}
function stop() {

//  Clears intervalId
clearInterval(intervalId);
}  
function displayResults() {
 
  
 $("#time").hide();
 $("#question0").hide();
 $("#answer1").hide();
 $("#submit").hide();
 $("#resultsMessage").html("<h3>Results</h3>");
  $("#correct").html("Correct Answers: " + correctAnswers);
  $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
  $("#unanswered").html("Unanswered: " + unanswered);
}



  
  
  
  
  
  
  
  