// Translation Module JavaScript
let currentType = null;
let currentLevel = null;
let exercises = [];
let currentExerciseIndex = 0;
let userResults = [];
let savedUserId = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    savedUserId = sessionStorage.getItem('currentVocabUser');
});

// Navigation
function goBack() {
    const userId = sessionStorage.getItem('currentVocabUser') || savedUserId;
    const returnUrl = userId ? `../index.html?return=dashboard&userId=${userId}` : '../index.html?return=dashboard';
    window.location.href = returnUrl;
}

function backToTypeSelection() {
    currentType = null;
    showScreen('selection-screen');
}

function backToLevelSelection() {
    currentLevel = null;
    exercises = [];
    currentExerciseIndex = 0;
    userResults = [];
    showScreen('level-screen');
}

function resetPractice() {
    currentType = null;
    currentLevel = null;
    exercises = [];
    currentExerciseIndex = 0;
    userResults = [];
    showScreen('selection-screen');
}

// Screen Management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Select translation type
function selectType(type) {
    currentType = type;
    const titleMap = {
        'turkishToEnglish': 'Turkish → English',
        'englishToTurkish': 'English → Turkish'
    };
    document.getElementById('translation-type-title').textContent = titleMap[type];
    showScreen('level-screen');
}

// Start practice
function startPractice(level) {
    currentLevel = level;

    // Get exercises for this type and level
    exercises = translationExercises[currentType].filter(ex => ex.level === level);

    if (exercises.length === 0) {
        alert('No exercises available for this level.');
        return;
    }

    // Shuffle exercises
    exercises = exercises.sort(() => Math.random() - 0.5);

    // Take first 5 exercises
    exercises = exercises.slice(0, 5);

    currentExerciseIndex = 0;
    userResults = [];

    displayExercise();
    showScreen('practice-screen');
}

// Display exercise
function displayExercise() {
    const exercise = exercises[currentExerciseIndex];
    if (!exercise) return;

    // Determine source text based on type
    const sourceText = currentType === 'turkishToEnglish' ? exercise.turkish : exercise.english;

    document.getElementById('source-text').textContent = sourceText;
    document.getElementById('translation-answer').value = '';
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('feedback').className = 'feedback';

    document.getElementById('check-btn').style.display = 'inline-block';
    document.getElementById('next-btn').style.display = 'none';

    // Update progress
    const progress = ((currentExerciseIndex + 1) / exercises.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('exercise-progress').textContent =
        `Exercise ${currentExerciseIndex + 1} of ${exercises.length}`;
}

// Check translation
function checkTranslation() {
    const exercise = exercises[currentExerciseIndex];
    const userAnswer = document.getElementById('translation-answer').value.trim().toLowerCase();

    if (!userAnswer) {
        alert('Please enter your translation.');
        return;
    }

    // Get correct answer based on type
    const correctAnswer = currentType === 'turkishToEnglish' ? exercise.english : exercise.turkish;

    // Simple keyword matching - check if user answer contains key phrases
    const hasKeywords = exercise.keywords.some(keyword =>
        userAnswer.includes(keyword.toLowerCase())
    );

    // Calculate similarity score (simple version)
    const keywordCount = exercise.keywords.filter(keyword =>
        userAnswer.includes(keyword.toLowerCase())
    ).length;
    const score = (keywordCount / exercise.keywords.length) * 100;

    // Determine if answer is acceptable
    const isAcceptable = score >= 60; // Need at least 60% of keywords

    // Store result
    userResults.push({
        exercise,
        userAnswer: document.getElementById('translation-answer').value,
        isCorrect: isAcceptable,
        score
    });

    // Display feedback
    const feedback = document.getElementById('feedback');
    feedback.className = `feedback ${isAcceptable ? 'correct' : 'incorrect'}`;

    feedback.innerHTML = `
        <p class="feedback-title">${isAcceptable ? '✓ Good!' : '✗ Needs Improvement'}</p>
        <p><strong>Your translation:</strong> ${document.getElementById('translation-answer').value}</p>
        <p><strong>Sample answer:</strong> ${correctAnswer}</p>
        ${!isAcceptable ? `<p class="tip">💡 Make sure to include: ${exercise.keywords.join(', ')}</p>` : ''}
    `;

    document.getElementById('check-btn').style.display = 'none';

    if (currentExerciseIndex < exercises.length - 1) {
        document.getElementById('next-btn').style.display = 'inline-block';
    } else {
        document.getElementById('next-btn').textContent = 'See Results →';
        document.getElementById('next-btn').style.display = 'inline-block';
    }
}

// Next exercise
function nextExercise() {
    if (currentExerciseIndex < exercises.length - 1) {
        currentExerciseIndex++;
        displayExercise();
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    const correctCount = userResults.filter(r => r.isCorrect).length;
    const total = userResults.length;

    document.getElementById('score-text').textContent = `${correctCount}/${total}`;

    const percentage = Math.round((correctCount / total) * 100);
    let message = '';
    if (percentage >= 80) {
        message = 'Excellent work! 🎉';
    } else if (percentage >= 60) {
        message = 'Good job! Keep practicing! 👍';
    } else {
        message = 'Keep studying! You can do it! 💪';
    }
    document.getElementById('completion-message').textContent = message;

    // Display summary
    const summary = document.getElementById('summary');
    summary.innerHTML = '<h3>Exercise Summary</h3>';

    userResults.forEach((result, index) => {
        const sourceText = currentType === 'turkishToEnglish' ?
            result.exercise.turkish : result.exercise.english;
        const correctAnswer = currentType === 'turkishToEnglish' ?
            result.exercise.english : result.exercise.turkish;

        const summaryItem = document.createElement('div');
        summaryItem.className = `summary-item ${result.isCorrect ? 'correct' : 'incorrect'}`;
        summaryItem.innerHTML = `
            <p class="summary-number">Exercise ${index + 1}</p>
            <p class="summary-source"><strong>Source:</strong> ${sourceText}</p>
            <p class="summary-user"><strong>Your answer:</strong> ${result.userAnswer}</p>
            <p class="summary-correct"><strong>Sample answer:</strong> ${correctAnswer}</p>
            <p class="summary-score">Match: ${Math.round(result.score)}%</p>
        `;
        summary.appendChild(summaryItem);
    });

    showScreen('results-screen');
}
