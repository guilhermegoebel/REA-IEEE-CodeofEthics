function checkAnswers() {
    const questions = document.querySelectorAll(".question");
    let correctAnswers = 0;

    for (let i = 0; i < questions.length; i++) {
        const options = questions[i].querySelectorAll('input[type="radio"]');
        const userAnswer = getSelectedAnswer(options);
        const questionNumber = i + 1;

        if (userAnswer === 1) {
            correctAnswers++;
            questions[i].style.backgroundColor = "#6eff6e"; 
        } else {
            questions[i].style.backgroundColor = "#ff6e6e"; 
        }
    }

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Você acertou ${correctAnswers} de ${questions.length} questões.`;
}

function getSelectedAnswer(options) {
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            return parseInt(options[i].value);
        }
    }
    return 0; 
}