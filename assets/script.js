var nextEl = document.querySelector('#next');
var timerEl = document.querySelector('#timer')
var choiceEl = document.createElement('button');
choiceEl.textContent = "Click here to begin"
document.body.appendChild(choiceEl);
var cursor = 0;
var seconds = 60;

function displayTime() {  
  var label = "seconds";
  if (seconds === 1) {
    label = "second"
  }
  timerEl.textContent = seconds + " " + label + " left.";
}

displayTime();

var questions = [
  "Instructions",
  "Question 1",
  "Question 2",
  "Question 3",
  "Question 4"
];

var choices = ["a","b","c","d"];
var choices2 = ["a","b","c","d"];
var choices3 = ["a","b","c","d"];
var choices4 = ["a","b","c","d"];

var displayQuestion = function () {
  nextEl.textContent = questions[cursor];
};

var advance = function() {
  if (cursor < questions.length - 1) {
    cursor++;
  }
  displayQuestion();
  for (var i = 0; i < choices.length; i++) {
    choiceEl = choices[0];
    var choiceEl = document.createElement('button');
    choiceEl.textContent = choices[i];  
    document.body.appendChild(choiceEl);
    countdown();  
  }  
};

displayQuestion();

choiceEl.addEventListener('click', advance);

function countdown() {
  displayTime(seconds);

  // Sets interval in variable
  var timerInterval = setInterval(function() {
    seconds--;
    displayTime(seconds);  
    if(seconds <= 0) {
      clearInterval(timerInterval);
      timerEl.textContent = "Quiz failed!";
    }
  }, 1000);
}
