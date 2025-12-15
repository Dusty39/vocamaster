// Vocabulary Quiz System
let quizSettings = {
    level: 1,
    questionCount: 10,
    quizType: 'meaning'
};

let quizState = {
    questions: [],
    currentIndex: 0,
    score: 0,
    correct: 0,
    wrong: 0,
    skipped: 0
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

function setupEventListeners() {
    // Level buttons
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            quizSettings.level = this.dataset.level;
        });
    });

    // Count buttons
    document.querySelectorAll('.count-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.count-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            quizSettings.questionCount = parseInt(this.dataset.count);
        });
    });

    // Type buttons
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            quizSettings.quizType = this.dataset.type;
        });
    });
}

function goBack() {
    const userId = sessionStorage.getItem('currentVocabUser');
    const returnUrl = userId ? `../index.html?return=vocabulary&userId=${userId}` : '../index.html?return=vocabulary';
    window.location.href = returnUrl;
}

function startQuiz() {
    // Generate questions
    generateQuestions();

    // Show quiz screen
    document.getElementById('quiz-setup').style.display = 'none';
    document.getElementById('quiz-active').style.display = 'block';

    // Reset state
    quizState.currentIndex = 0;
    quizState.score = 0;
    quizState.correct = 0;
    quizState.wrong = 0;
    quizState.skipped = 0;

    // Show first question
    showQuestion();
}

function generateQuestions() {
    let wordPool = [];

    // Get words based on level
    if (quizSettings.level === 'all') {
        wordPool = vocabularyDatabase.level1.concat(vocabularyDatabase.level2, vocabularyDatabase.level3);
    } else {
        const level = parseInt(quizSettings.level);
        wordPool = vocabularyDatabase[`level${level}`];
    }

    // Shuffle and select
    shuffleArray(wordPool);
    const selectedWords = wordPool.slice(0, quizSettings.questionCount);

    // Generate questions
    quizState.questions = selectedWords.map(word => {
        let type = quizSettings.quizType;
        if (type === 'mixed') {
            type = Math.random() > 0.5 ? 'meaning' : 'word';
        }

        return {
            word: word,
            type: type,
            correctAnswer: type === 'meaning' ? word.meaning : word.word,
            options: generateOptions(word, type, wordPool)
        };
    });

    document.getElementById('total-questions').textContent = quizState.questions.length;
}

function generateOptions(correctWord, type, wordPool) {
    const options = [];
    const correctAnswer = type === 'meaning' ? correctWord.meaning : correctWord.word;

    // Add correct answer
    options.push(correctAnswer);

    // Add 3 wrong answers
    const otherWords = wordPool.filter(w => w.word !== correctWord.word);
    shuffleArray(otherWords);

    for (let i = 0; i < 3 && i < otherWords.length; i++) {
        const wrongAnswer = type === 'meaning' ? otherWords[i].meaning : otherWords[i].word;
        if (!options.includes(wrongAnswer)) {
            options.push(wrongAnswer);
        }
    }

    // Shuffle options
    shuffleArray(options);
    return options;
}

function showQuestion() {
    const question = quizState.questions[quizState.currentIndex];

    // Update progress
    document.getElementById('current-question').textContent = quizState.currentIndex + 1;
    const progress = ((quizState.currentIndex) / quizState.questions.length) * 100;
    document.getElementById('quiz-progress-fill').style.width = `${progress}%`;

    // Update score
    document.getElementById('quiz-score').textContent = `Score: ${quizState.score}/${quizState.currentIndex}`;

    // Show question
    if (question.type === 'meaning') {
        document.getElementById('question-text').textContent = question.word.word;
    } else {
        document.getElementById('question-text').textContent = `What is the English word for "${question.word.meaning}"?`;
    }

    // Show options
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => selectAnswer(option);
        container.appendChild(btn);
    });
}

function selectAnswer(selectedAnswer) {
    const question = quizState.questions[quizState.currentIndex];
    const isCorrect = selectedAnswer === question.correctAnswer;

    // Update stats
    if (isCorrect) {
        quizState.correct++;
        quizState.score++;
    } else {
        quizState.wrong++;
    }

    // Visual feedback
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === question.correctAnswer) {
            btn.classList.add('correct');
        } else if (btn.textContent === selectedAnswer && !isCorrect) {
            btn.classList.add('wrong');
        }
    });

    // Next question after delay
    setTimeout(() => {
        nextQuestion();
    }, 1500);
}

function skipQuestion() {
    quizState.skipped++;
    nextQuestion();
}

function nextQuestion() {
    quizState.currentIndex++;

    if (quizState.currentIndex < quizState.questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-active').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';

    const percentage = Math.round((quizState.score / quizState.questions.length) * 100);

    document.getElementById('final-score').textContent = `${quizState.score}/${quizState.questions.length}`;
    document.getElementById('score-percentage').textContent = `${percentage}%`;
    document.getElementById('correct-count').textContent = quizState.correct;
    document.getElementById('wrong-count').textContent = quizState.wrong;
    document.getElementById('skipped-count').textContent = quizState.skipped;
}

function resetQuiz() {
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('quiz-setup').style.display = 'block';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
