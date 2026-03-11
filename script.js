const questions = {
    historia: [
        { q: "¿En qué año se fundó Bolivia?", options: ["1825", "1810", "1830"], correct: 0 },
        { q: "¿Qué ciudad es la capital de Bolivia?", options: ["La Paz", "Sucre", "Cochabamba"], correct: 1 }
    ],
    deportes: [
        { q: "¿Quién es el máximo goleador?", options: ["Martins", "Botero", "Etcheverry"], correct: 0 }
    ]
};

let currentSet = [];
let index = 0;
let score = 0;
let timer;
let timeLeft = 26;

function startQuiz(cat) {
    currentSet = questions[cat];
    index = 0;
    score = 0;
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    if (index >= currentSet.length) return showResults();
    
    clearInterval(timer);
    startTimer();

    const q = currentSet[index];
    document.getElementById('question-text').innerText = q.q;
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = 'option-btn';
        btn.onclick = () => {
            if (i === q.correct) score++;
            index++;
            showQuestion();
        };
        container.appendChild(btn);
    });
}

function startTimer() {
    timeLeft = 26;
    document.getElementById('timer').innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            index++;
            showQuestion();
        }
    }, 1000);
}

function showResults() {
    clearInterval(timer);
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('score-text').innerText = `Puntos obtenidos: ${score * 100}`;
}

function resetGame() {
    clearInterval(timer);
    location.reload(); // Forma más rápida de volver al inicio
}