const questions = [
    { 
        q: "¿Qué significa HTML?", 
        img: "🌐",
        a: ["HyperText Markup Language", "High Tech Modern Language", "HyperLink Mode"], 
        correct: 0 
    },
    { 
        q: "¿Qué lenguaje da color y estilo?", 
        img: "🎨",
        a: ["JavaScript", "HTML", "CSS"], 
        correct: 2 
    },
    { 
        q: "¿Cuál es el comando para subir cambios?", 
        img: "📤",
        a: ["git pull", "git push", "git init"], 
        correct: 1 
    }
];

let currentIndex = 0;
let score = 0;

function startGame() {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const q = questions[currentIndex];
    document.getElementById('questionText').innerText = q.q;
    document.getElementById('image-container').innerText = q.img;
    document.getElementById('progress').innerText = `Pregunta ${currentIndex + 1} de ${questions.length}`;
    
    // Actualizar barra de progreso
    const percent = ((currentIndex + 1) / questions.length) * 100;
    document.getElementById('bar').style.width = percent + "%";
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    q.a.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(i);
        container.appendChild(btn);
    });
}

function checkAnswer(i) {
    if(i === questions[currentIndex].correct) score++;
    currentIndex++;
    if(currentIndex < questions.length) showQuestion();
    else showResults();
}

function showResults() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('score-text').innerText = `Lograste ${score} de ${questions.length} respuestas correctas`;
}

function resetGame() {
    currentIndex = 0; score = 0;
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');
}