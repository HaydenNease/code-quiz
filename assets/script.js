var nextEl = document.querySelector('#next');
var choiceEl = document.querySelector('#choice')
var cursor = 0;

var questions = [
  "Click here to begin!",
  "How much wood could a woodchuck chuck?",
  "Did you have your break today?",
  "Do you like ice cream?",
  "What's your favorite pizza topping?"
];

var choices = ["10","20","30","40"];

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
  }
  
  
};

nextEl.addEventListener('click', advance);

displayQuestion();