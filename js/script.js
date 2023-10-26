function checkAnswers() {
    const answers = {
        q1: '1',
        q2: '1',
        q3: '6',
        q4: '7',
        q5: '2',
        q6: '3',
        q7: '4',
        q8: '5',
        q9: '1',
        q10: '7'
    };

    let correctAnswers = 0;

    for (const question in answers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        const parentQuestion = selectedAnswer.closest('.question');
        
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            parentQuestion.style.backgroundColor = 'lightgreen';
            correctAnswers++;
        } else {
            parentQuestion.style.backgroundColor = 'lightcoral';
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Você acertou ${correctAnswers} de 10 questões.`;
}