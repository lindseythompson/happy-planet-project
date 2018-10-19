// QUIZ
var questions = document.getElementsByClassName("question");
var currentQuestion = 0;
showQuestion(currentQuestion);

function showQuestion(n) {
  questions[n].style.display = "block";
}

function nextQuestion() {
  //check if valid?

   questions[currentQuestion].style.display = "none";
   currentQuestion++;

  // if we answered all the questions, submit form
  if (currentQuestion >= questions.length) {
    document.getElementById("quiz").submit();
    return false;
  }

  showQuestion(currentQuestion);
  updateProgressNext(currentQuestion);
  updateButtons(currentQuestion);

}

function prevQuestion() {
   questions[currentQuestion].style.display = "none";
   currentQuestion--;
   showQuestion(currentQuestion);
  updateProgressPrev(currentQuestion);
  updateButtons(currentQuestion);
}

function updateProgressNext() {
  var classes = document.getElementsByClassName("step");
  classes[currentQuestion].className += " active";
  classes[currentQuestion - 1].className = "step answered";
}

function updateProgressPrev() {
  var classes = document.getElementsByClassName("step");
  classes[currentQuestion].className += " active";
  classes[currentQuestion + 1].className = "step answered";
}

function updateButtons(n) {
  //prev
  var prev = document.getElementById("prev-btn");
  if (n > 0) {
    prev.style.display = "inline";
  } else {
    prev.style.display = "none";
  }

  //next -> submit
  var next = document.getElementById("next-btn");
  if (n == (questions.length - 1)) {
    next.innerHTML = "Submit";
  } else {
    next.innerHTML = "Next";
  }
}
