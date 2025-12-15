// Reading Module JavaScript
let currentText = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let startTime = null;
let timerInterval = null;
let savedUserId = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    savedUserId = sessionStorage.getItem('currentVocabUser');
    displayTextList();
});

// Navigation
function goBack() {
    const userId = sessionStorage.getItem('currentVocabUser') || savedUserId;
    const returnUrl = userId ? `../index.html?return=dashboard&userId=${userId}` : '../index.html?return=dashboard';
    window.location.href = returnUrl;
}

function backToSelection() {
    stopTimer();
    showScreen('selection-screen');
}

function selectNewText() {
    currentText = null;
    currentQuestionIndex = 0;
    userAnswers = [];
    stopTimer();
    showScreen('selection-screen');
}

// Screen Management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Display text list
function displayTextList() {
    const container = document.getElementById('text-list');
    container.innerHTML = '';

    // Group by difficulty
    const levels = ['easy', 'medium', 'hard'];
    const levelNames = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
    const levelColors = { easy: '#4CAF50', medium: '#FF9800', hard: '#F44336' };

    levels.forEach(level => {
        const textsInLevel = readingTexts.filter(text => text.level === level);
        if (textsInLevel.length === 0) return;

        const levelSection = document.createElement('div');
        levelSection.className = 'level-section';

        const levelHeader = document.createElement('h3');
        levelHeader.className = 'level-header';
        levelHeader.style.borderLeftColor = levelColors[level];
        levelHeader.textContent = levelNames[level];
        levelSection.appendChild(levelHeader);

        textsInLevel.forEach(text => {
            const card = document.createElement('div');
            card.className = 'text-card';
            card.onclick = () => startReading(text.id);

            card.innerHTML = `
                <h4>${text.title}</h4>
                <div class="text-category">${text.category}</div>
                <div class="text-meta">
                    <span class="word-count-badge">${text.wordCount} words</span>
                    <span class="question-count">${text.questions.length} questions</span>
                </div>
            `;

            levelSection.appendChild(card);
        });

        container.appendChild(levelSection);
    });
}

// Start reading
function startReading(textId) {
    currentText = readingTexts.find(t => t.id === textId);
    if (!currentText) return;

    // Reset state
    currentQuestionIndex = 0;
    userAnswers = new Array(currentText.questions.length).fill(null);

    // Display text
    document.getElementById('reading-title').textContent = currentText.title;
    document.getElementById('word-count').textContent = `${currentText.wordCount} words`;
    document.getElementById('reading-text').textContent = currentText.text;

    // Start timer
    startTimer();

    showScreen('reading-screen');
}

// Timer functions
function startTimer() {
    startTime = Date.now();
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimer() {
    if (!startTime) return;
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.getElementById('time-display').textContent =
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Show questions
function showQuestions() {
    currentQuestionIndex = 0;
    displayQuestion();
    showScreen('questions-screen');
}

// Display question
function displayQuestion() {
    const question = currentText.questions[currentQuestionIndex];
    const container = document.getElementById('question-container');

    container.innerHTML = `
        <div class="question">
            <p class="question-text"><strong>Question ${currentQuestionIndex + 1}:</strong> ${question.question}</p>
            <div class="options">
                ${question.options.map((option, index) => `
                    <label class="option ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}">
                        <input type="radio" name="question-${currentQuestionIndex}" value="${index}" 
                               ${userAnswers[currentQuestionIndex] === index ? 'checked' : ''}
                               onchange="selectAnswer(${index})">
                        <span>${option}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `;

    // Update progress
    document.getElementById('question-progress').textContent =
        `Question ${currentQuestionIndex + 1} of ${currentText.questions.length}`;

    // Update navigation buttons
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;

    const isLastQuestion = currentQuestionIndex === currentText.questions.length - 1;
    document.getElementById('next-btn').style.display = isLastQuestion ? 'none' : 'inline-block';
    document.getElementById('submit-btn').style.display = isLastQuestion ? 'inline-block' : 'none';
}

// Select answer
function selectAnswer(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;

    // Update UI to show selection
    document.querySelectorAll('.option').forEach((opt, idx) => {
        if (idx === optionIndex) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });
}

// Navigation between questions
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentText.questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

// Submit answers
function submitAnswers() {
    stopTimer();

    // Calculate score
    let correct = 0;
    currentText.questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correct++;
        }
    });

    const total = currentText.questions.length;
    const percentage = Math.round((correct / total) * 100);

    // Display results
    document.getElementById('score-percentage').textContent = `${percentage}%`;
    document.getElementById('correct-count').textContent = correct;
    document.getElementById('total-count').textContent = total;

    // Display answer review
    const reviewContainer = document.getElementById('answer-review');
    reviewContainer.innerHTML = '<h3>Answer Review</h3>';

    currentText.questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;

        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

        reviewItem.innerHTML = `
            <p class="review-question"><strong>Question ${index + 1}:</strong> ${question.question}</p>
            <p class="review-answer">
                ${isCorrect ? '✓' : '✗'} Your answer: <span>${userAnswer !== null ? question.options[userAnswer] : 'No answer'}</span>
            </p>
            ${!isCorrect ? `<p class="review-correct">Correct answer: <span>${question.options[question.correct]}</span></p>` : ''}
        `;

        reviewContainer.appendChild(reviewItem);
    });

    showScreen('results-screen');

    // Save progress (optional - implement if you want to track user progress)
    // saveReadingProgress(currentText.id, percentage);
}
