var questionWrapper = document.querySelectorAll(".question-wrapper");
for (var i = 0; i < questionWrapper.length; i++) {
    questionWrapper[i].addEventListener("click", questionClicked);
}

function questionClicked() {
    var clickedElement = this;
    multipleAnswers(clickedElement);
}

function multipleAnswers(clickedElement) {
    var allQuestions = document.querySelectorAll(".question-wrapper");
    for (var i = 0; i < allQuestions.length; i++) {
        if (
            allQuestions[i]
            .querySelector(".question")
            .classList.toString()
            .includes("active-question") &&
            allQuestions[i].querySelector(".question").classList !==
            clickedElement.querySelector(".question").classList
        ) {
            toggleQuestion(allQuestions[i]);
            arrowRotate(allQuestions[i]);
        }
    }
    toggleQuestion(clickedElement);
    arrowRotate(clickedElement);
}

function displayAnswer(clickedElement) {
    toggleQuestion(clickedElement);
    arrowRotate(clickedElement);
}

function toggleQuestion(clickedElement) {
    clickedElement.querySelector(".question").classList.toggle("active-question");

    var answer = clickedElement.querySelector(".answer");
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
    }
    if (answer.style.color !== "var(--dark-gray-blue)") {
        answer.style.color = "var(--dark-gray-blue)";
    } else {
        answer.style.color = "white";
    }
}

function arrowRotate(clickedElement) {
    var arrow = clickedElement.querySelector(".arrow");
    arrow.classList.toggle("rotate-180");
}