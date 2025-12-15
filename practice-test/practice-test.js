// YDS Practice Test Logic
let currentQuestionIndex = 0;
let userAnswers = {};
let timerInterval;
let timeRemaining = 180 * 60; // Default 180 minutes
let isTestActive = false;
let currentTestMode = 'yds'; // 'yds' or 'sentence'
let currentQuestions = [];
let savedUserId = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    savedUserId = sessionStorage.getItem('currentVocabUser');
    // Start at selection screen by default
    showScreen('selection-screen');
});

// Menu Functions
function openYDSExam() {
    showScreen('welcome-screen');
}

function openSentenceTest() {
    showScreen('sentence-welcome-screen');
}

function openVocabQuizMode() {
    startTest('vocabQuiz');
}

function openGrammarQuizMode() {
    startTest('grammarQuiz');
}

function goBackToDashboard() {
    const userId = sessionStorage.getItem('currentVocabUser') || savedUserId;
    const returnUrl = userId ? `../index.html?return=dashboard&userId=${userId}` : '../index.html?return=dashboard';
    window.location.href = returnUrl;
}

// Global Navigation
function goBack() {
    if (isTestActive) {
        // Show modal instead of confirm
        document.getElementById('confirm-modal').style.display = 'block';
    } else {
        showScreen('selection-screen');
    }
}

// Timer & Test Start
function startTest(mode) {
    currentTestMode = mode;
    isTestActive = true;
    userAnswers = {};
    currentQuestionIndex = 0;

    if (mode === 'yds') {
        currentQuestions = practiceTest.questions;
        timeRemaining = 180 * 60; // 180 minutes
        document.getElementById('test-title').textContent = "YDS Practice Test";
        document.getElementById('timer').style.display = 'flex';
    } else if (mode === 'sentence') {
        currentQuestions = practiceTest.sentenceTest;
        timeRemaining = 0;
        document.getElementById('test-title').textContent = "Advanced Sentence Test";
        document.getElementById('timer').style.display = 'none';
    } else if (mode === 'vocabQuiz') {
        currentQuestions = practiceTest.vocabQuiz;
        timeRemaining = 0;
        document.getElementById('test-title').textContent = "Vocabulary Quiz";
        document.getElementById('timer').style.display = 'none';
    } else if (mode === 'grammarQuiz') {
        currentQuestions = practiceTest.grammarQuiz;
        timeRemaining = 0;
        document.getElementById('test-title').textContent = "Grammar Quiz";
        document.getElementById('timer').style.display = 'none';
    }

    // Generate grid based on current questions
    const grid = document.getElementById('question-grid');
    grid.innerHTML = ''; // Clear existing
    currentQuestions.forEach((q, index) => {
        const btn = document.createElement('button');
        btn.className = 'grid-btn';
        btn.textContent = index + 1;
        btn.onclick = () => jumpToQuestion(index);
        btn.dataset.index = index;
        grid.appendChild(btn);
    });

    showScreen('test-screen');
    if (mode === 'yds') {
        startTimer();
    }
    loadQuestion(0);
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        document.getElementById('time-remaining').textContent = formatTime(timeRemaining);

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert('Süre doldu! Sınav otomatik olarak bitiriliyor.');
            submitTest();
        } else if (timeRemaining === 300) { // 5 minutes warning
            alert('Dikkat! Sınavın bitmesine 5 dakika kaldı.');
            document.getElementById('timer').classList.add('warning');
        }
    }, 1000);
}

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// Question handling
function loadQuestion(index) {
    currentQuestionIndex = index;
    const question = currentQuestions[index];
    const container = document.getElementById('question-container');

    // Determine section title
    let sectionTitle = "";
    if (currentTestMode === 'yds') {
        const section = practiceTest.sections.find(s => index + 1 >= s.startQuestion && index + 1 <= s.endQuestion);
        sectionTitle = section ? section.title : "Question";
    } else if (currentTestMode === 'sentence') {
        sectionTitle = "Sentence Analysis";
    } else if (currentTestMode === 'vocabQuiz') {
        sectionTitle = "Vocabulary Quiz";
    } else if (currentTestMode === 'grammarQuiz') {
        sectionTitle = "Grammar Quiz";
    }

    let html = `
        <div class="question-header-bar">
            <span class="section-label">${sectionTitle}</span>
            <span class="question-number">Soru ${index + 1}</span>
        </div>
    `;

    // Add reading passage if applicable
    if (question.type === 'reading' || question.type === 'cloze') {
        html += `
            <div class="split-view">
                <div class="passage-panel">
                    <h3>Reading Text</h3>
                    <p>${question.passage}</p>
                </div>
                <div class="question-panel">
                    <p class="question-text">${question.question}</p>
                    <div class="options-list">
                        ${generateOptions(question, index)}
                    </div>
                </div>
            </div>
        `;
    } else {
        html += `
            <div class="single-question-view">
                <p class="question-text">${question.question}</p>
                <div class="options-list">
                    ${generateOptions(question, index)}
                </div>
            </div>
        `;
    }

    container.innerHTML = html;

    // Update buttons
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === currentQuestions.length - 1;

    // Update progress
    document.getElementById('question-progress').textContent = `Soru ${index + 1} / ${currentQuestions.length}`;

    // Update grid active state
    document.querySelectorAll('.grid-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.index) === index);
        if (userAnswers[btn.dataset.index]) {
            btn.classList.add('answered');
        }
    });

    // Mark selected option if answered
    if (userAnswers[index]) {
        const optionIndex = ['A', 'B', 'C', 'D', 'E'].indexOf(userAnswers[index]);
        if (optionIndex !== -1) {
            const options = document.querySelectorAll('.option-btn');
            if (options[optionIndex]) options[optionIndex].classList.add('selected');
        }
    }
}

function generateOptions(question, index) {
    return question.options.map(opt => `
        <button class="option-btn" onclick="selectAnswer(${index}, '${opt.charAt(0)}')">
            ${opt}
        </button>
    `).join('');
}

function selectAnswer(questionIndex, answer) {
    userAnswers[questionIndex] = answer;

    // Update UI
    const options = document.querySelectorAll('.option-btn');
    options.forEach(btn => {
        if (btn.textContent.trim().startsWith(answer)) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    // Update grid
    const gridBtn = document.querySelector(`.grid-btn[data-index="${questionIndex}"]`);
    if (gridBtn) gridBtn.classList.add('answered');
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
}

function jumpToQuestion(index) {
    loadQuestion(index);
}

// Submission and Results
function submitTest() {
    // Show custom modal instead of native confirm
    document.getElementById('confirm-modal').style.display = 'block';
}

function closeConfirmModal() {
    document.getElementById('confirm-modal').style.display = 'none';
}

function finalizeTest() {
    closeConfirmModal();
    clearInterval(timerInterval);
    isTestActive = false;
    calculateResults();
    showScreen('results-screen');
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('confirm-modal');
    if (event.target == modal) {
        closeConfirmModal();
    }
}

function calculateResults() {
    let totalScore = 0;
    let correctCount = 0;
    let sectionScores = {
        reading: 0,
        grammar: 0,
        vocabulary: 0
    };

    // Calculate detailed results
    const resultsContainer = document.getElementById('detailed-results');
    resultsContainer.innerHTML = '';

    currentQuestions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === q.correct;

        if (isCorrect) {
            correctCount++;
            if (currentTestMode === 'yds') {
                // Simple mapping for demonstration - normally would map types to sections more precisely
                if (q.type === 'reading' || q.type === 'paragraph_completion' || q.type === 'irrelevant' || q.type === 'dialogue' || q.type === 'restatement') sectionScores.reading += 1.25;
                else if (q.type === 'vocabulary') sectionScores.vocabulary += 1.25;
                else sectionScores.grammar += 1.25;
            }
        }

        // Add to review
        // Only showing incorrect answers for brevity in this view
        if (!isCorrect) {
            const resultItem = document.createElement('div');
            resultItem.className = 'review-item incorrect';
            resultItem.innerHTML = `
                <div class="review-header">
                    <span>Soru ${index + 1} (${q.type})</span>
                    <span class="status-badge">Yanlış</span>
                </div>
                <p class="review-question">${q.question}</p>
                <div class="review-answer">
                    <p>Sizin cevabınız: <span class="user-ans">${userAnswer || 'Boş'}</span></p>
                    <p>Doğru cevap: <span class="correct-ans">${q.correct}</span></p>
                </div>
            `;
            resultsContainer.appendChild(resultItem);
        }
    });

    // Calculate YDS Score (Raw calculation: Correct * 1.25)
    // For Sentence Test, score is just raw count
    if (currentTestMode === 'yds') {
        totalScore = correctCount * 1.25;
        document.querySelector('.score-max').textContent = "/ 100";
        document.querySelector('.section-scores').style.display = 'flex';

        // Update section scores
        const readingCorrect = currentQuestions.filter((q, i) =>
            (q.type === 'reading' || q.type === 'paragraph_completion' || q.type === 'irrelevant' || q.type === 'dialogue' || q.type === 'restatement') && userAnswers[i] === q.correct
        ).length;

        const grammarCorrect = currentQuestions.filter((q, i) =>
            (q.type === 'grammar' || q.type === 'cloze' || q.type === 'sentence_completion' || q.type === 'translation') && userAnswers[i] === q.correct
        ).length;

        const vocabCorrect = currentQuestions.filter((q, i) =>
            q.type === 'vocabulary' && userAnswers[i] === q.correct
        ).length;

        document.getElementById('reading-score').textContent = readingCorrect;
        document.getElementById('grammar-score').textContent = grammarCorrect;
        document.getElementById('vocabulary-score').textContent = vocabCorrect;
    } else {
        totalScore = correctCount; // Just raw count
        document.querySelector('.score-max').textContent = `/ ${currentQuestions.length}`;
        document.querySelector('.section-scores').style.display = 'none';

        // Update summary title based on mode
        if (currentTestMode === 'sentence') {
            document.querySelector('.score-summary h3').textContent = "Cümle Analizi Başarısı";
        } else {
            document.querySelector('.score-summary h3').textContent = "Doğru Sayısı";
        }
    }

    // Display scores
    document.getElementById('total-score').textContent = totalScore.toFixed(currentTestMode === 'yds' ? 2 : 0);
}

function retakeTest() {
    currentQuestionIndex = 0;
    userAnswers = {};

    document.querySelectorAll('.grid-btn').forEach(btn => {
        btn.classList.remove('answered', 'active');
    });

    if (currentTestMode === 'sentence') {
        showScreen('sentence-welcome-screen');
    } else if (currentTestMode === 'vocabQuiz' || currentTestMode === 'grammarQuiz') {
        // Since quizzes don't have welcome screens, restart directly or go to menu
        // Going to menu is safer to avoid state confusion
        showScreen('selection-screen');
    } else {
        // YDS Mode
        timeRemaining = 180 * 60;
        showScreen('welcome-screen');
    }
}

// Utility
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}
