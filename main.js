var timer = 20;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
// Questions in Array 
var questions = [{
  question: "What year did The Saints win the SuperBowl?",
  answerList: [1972,1989,2006,2010,],
  answer: 3
},{
  question: "What year did The Saints enter the league?",
  answerList: [1954,1966,1945,1968,],
  answer: 1
},{
  question: "Who has the record for most passing yards in NFL history?",
  answerList: ["Drew Brees","Peyton Manning","Brett Favre","Tom Brady",],
  answer: 0
},
];
// Start Button
$("#start").on("click", function() {
  // Hide Start button
  $(this).hide();
// Display initial time countdown
  $("#time").html("<h2>Time Remaining: 20 Seconds</h2>" + "<br>");
// Start timer
  run();
// Question 1
  $("#question0").html
  ("<h3>" + questions[0].question + "</h3>");
  $("#answer1").html
  ("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
   + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
   + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
   + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>");

// Question 2
  $("#question1").html
  ("<h3>" + questions[1].question + "</h3>");
  $("#answer2").html
  ("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
   + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label>"
   + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerList[2] + "</label>"
   + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>");

//Question 3
$("#question2").html
  ("<h3>" + questions[2].question + "</h3>");
  $("#answer3").html
  ("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
   + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
   + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
   + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>");
// Done button

  $("#submit").html("<button id='done' type='button' class='btn btn-primary'>Done</button>");

  // Click event runs keepingScore() and displayResults() when user clicks Done button
  $('#done').on("click", function() {
 // Keeping track of score based on correct, incorrect, and unanswered
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
//  Decrease timer by one.
function decrement() { 
  timer--;
//  Show countdown in the #time tag
  $("#time").html("<h2>Time Remaining: " + timer+ " Seconds</h2>" + "<br>");
// once timer runs out of time
  if (timer === 0) {

    stop();
    keepingScore();
    displayResults();
  }
}
// Run stop function to stop timer countdown
function stop() {
//  Clears intervalId
  clearInterval(intervalId);
} 
function displayResults() {
  
  $("#time").hide();
  $("#question0").hide();
  $("#answer1").hide();
  $("#question1").hide();
  $("#answer2").hide();
  $("#question2").hide();
  $("#answer3").hide();
  $("#submit").hide();

  $("#resultsMessage").html("<h3>Results</h3>");
  $("#correct").html("Correct Answers: " + correctAnswers);
  $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
  
}              
//capture answers
function keepingScore() {

  var userAnswer1 = $("input[name='answer1']:checked").val();

  if (userAnswer1 == questions[0].answer) {

    correctAnswers++;
  }
  else {

    incorrectAnswers++;

  } 
var userAnswer2 = $("input[name='answer2']:checked").val();

  if (userAnswer2 == questions[1].answer) {

    correctAnswers++;
  }
  else {

    incorrectAnswers++;
  }
var userAnswer3 = $("input[name='answer3']:checked").val();

  if (userAnswer3 == questions[2].answer) {

    correctAnswers++;
  }
  else {

    incorrectAnswers++;

  } 

  }