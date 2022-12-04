var nextEl = document.querySelector('#next');
var choiceEl = document.querySelector('#choice')
var timerEl = document.querySelector('#timer')
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
  "Click here to begin!",
  "How much wood could a woodchuck chuck?",
  "Did you have your break today?",
  "Do you like ice cream?",
  "What's your favorite pizza topping?"
];

var choices = ["a","b","c","d"];

var displayQuestion = function () {
  nextEl.textContent = questions[cursor];
};


var advance = function() {
  if (cursor < questions.length - 1) {
    cursor++;
  }
  displayQuestion();
  for (var i = 0; i < choices.length; i++) {
    var choiceEl = document.createElement('button');
    choiceEl.textContent = choices[i];  
    nextEl.appendChild(choiceEl);
    setTime();  
  }  
};

nextEl.addEventListener('click', advance);

displayQuestion();

function setTime() {
  displayTime();

  // Sets interval in variable
  var timerInterval = setInterval(function() {
    seconds--;
    displayTime();

    if(seconds === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}
