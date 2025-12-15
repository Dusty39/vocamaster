// Flashcard System with Spaced Repetition
let currentLevel = 1;
let currentCardIndex = 0;
let isFlipped = false;
let wordList = [];
let cardProgress = {};
let savedUserId = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    savedUserId = sessionStorage.getItem('currentVocabUser');
    loadProgress();
    selectLevel(1);
});

// Navigation
function goBack() {
    const userId = sessionStorage.getItem('currentVocabUser') || savedUserId;
    const returnUrl = userId ? `../index.html?return=vocabulary&userId=${userId}` : '../index.html?return=vocabulary';
    window.location.href = returnUrl;
}

// Help Modal
function showHelp() {
    document.getElementById('help-modal').style.display = 'block';
}

function closeHelp() {
    document.getElementById('help-modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('help-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Select difficulty level
function selectLevel(level) {
    currentLevel = level;
    currentCardIndex = 0;

    // Update button states
    document.querySelectorAll('.level-btn').forEach((btn, index) => {
        btn.classList.toggle('active', index + 1 === level);
    });

    // Load and mix words from all levels up to selected level
    wordList = [];
    for (let i = 1; i <= level; i++) {
        wordList = wordList.concat(vocabularyDatabase[`level${i}`]);
    }

    // Shuffle for random order
    shuffleArray(wordList);

    showCard();
    updateStats();
}

// Show current card
function showCard() {
    if (currentCardIndex >= wordList.length) {
        showCompletionMessage();
        return;
    }

    const card = wordList[currentCardIndex];
    document.getElementById('word-display').textContent = card.word;
    document.getElementById('meaning-display').textContent = card.meaning;
    document.getElementById('example-display').textContent = card.example;
    document.getElementById('category-tag').textContent = card.category;

    // Reset flip
    document.getElementById('card-inner').classList.remove('flipped');
    isFlipped = false;

    // Update counter
    document.getElementById('card-counter').textContent =
        `${currentCardIndex + 1} / ${wordList.length}`;
}

// Flip card
function flipCard() {
    const cardInner = document.getElementById('card-inner');
    cardInner.classList.toggle('flipped');
    isFlipped = !isFlipped;
}

// Rate card difficulty (Spaced Repetition)
function rateCard(difficulty) {
    if (!isFlipped) {
        alert('Önce kartı çevirin!');
        return;
    }

    const word = wordList[currentCardIndex].word;

    // Initialize progress if not exists
    if (!cardProgress[word]) {
        cardProgress[word] = {
            level: currentLevel,
            reviews: 0,
            lastReview: new Date().toISOString(),
            nextReview: new Date().toISOString(),
            status: 'new'
        };
    }

    // Update based on difficulty
    const progress = cardProgress[word];
    progress.reviews++;
    progress.lastReview = new Date().toISOString();

    switch (difficulty) {
        case 'hard':
            progress.status = 'learning';
            progress.nextReview = addDays(new Date(), 1);
            break;
        case 'good':
            progress.status = 'learning';
            progress.nextReview = addDays(new Date(), 3);
            break;
        case 'easy':
            if (progress.reviews >= 3) {
                progress.status = 'mastered';
                progress.nextReview = addDays(new Date(), 7);
            } else {
                progress.status = 'learning';
                progress.nextReview = addDays(new Date(), 5);
            }
            break;
    }

    saveProgress();
    nextCard();
}

// Next card
function nextCard() {
    currentCardIndex++;
    showCard();
    updateStats();
}

// Update statistics
function updateStats() {
    let newCount = 0;
    let learningCount = 0;
    let masteredCount = 0;

    wordList.forEach(word => {
        const progress = cardProgress[word.word];
        if (!progress || progress.status === 'new') {
            newCount++;
        } else if (progress.status === 'learning') {
            learningCount++;
        } else if (progress.status === 'mastered') {
            masteredCount++;
        }
    });

    document.getElementById('new-count').textContent = newCount;
    document.getElementById('learning-count').textContent = learningCount;
    document.getElementById('mastered-count').textContent = masteredCount;
}

// Show completion
function showCompletionMessage() {
    document.getElementById('word-display').textContent = '🎉 Tebrikler!';
    document.getElementById('card-counter').textContent = 'Tamamlandı';

    setTimeout(() => {
        if (confirm('Bu seviyeyi tamamladınız! Başa dönmek ister misiniz?')) {
            selectLevel(currentLevel);
        }
    }, 1000);
}

// Helper functions
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Save/Load progress
function saveProgress() {
    localStorage.setItem('ydsFlashcardProgress', JSON.stringify(cardProgress));
}

function loadProgress() {
    const saved = localStorage.getItem('ydsFlashcardProgress');
    if (saved) {
        cardProgress = JSON.parse(saved);
    }
}
