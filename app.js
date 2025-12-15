// VocabMaster - Multi-User YDS Study Platform
// Global State
let currentUserId = null;
let allUsers = {};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadAllUsers();
    setMinDate();
    displayUserProfiles();

    // Restore user from session if returning from a sub-module
    const urlParams = new URLSearchParams(window.location.search);
    let savedUserId = sessionStorage.getItem('currentVocabUser');

    // Also check URL parameter as fallback
    const userIdFromUrl = urlParams.get('userId');
    if (userIdFromUrl && allUsers[userIdFromUrl]) {
        savedUserId = userIdFromUrl;
        sessionStorage.setItem('currentVocabUser', savedUserId);
    }

    if (savedUserId && allUsers[savedUserId]) {
        currentUserId = savedUserId;
    }

    // Check if we're returning from a sub-module
    const returnTo = urlParams.get('return');

    if (returnTo === 'vocabulary' && currentUserId) {
        document.getElementById('user-selection-screen').classList.remove('active');
        showScreen('vocabulary-screen');
    } else if (returnTo === 'dashboard' && currentUserId) {
        document.getElementById('user-selection-screen').classList.remove('active');
        showScreen('dashboard-screen');
        updateDashboard();
    } else if (currentUserId && allUsers[currentUserId]) {
        // User is logged in but no return parameter, show dashboard
        document.getElementById('user-selection-screen').classList.remove('active');
        showScreen('dashboard-screen');
        updateDashboard();
    }

    // Check for hash navigation
    if (window.location.hash) {
        const module = window.location.hash.substring(1);
        if (module === 'vocabulary' && currentUserId) {
            showScreen('vocabulary-screen');
        }
    }
});

// Set minimum date to today
function setMinDate() {
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('exam-date');
    if (dateInput) {
        dateInput.min = today;
        // Set default to 4 months from now
        const futureDate = new Date();
        futureDate.setMonth(futureDate.getMonth() + 4);
        dateInput.value = futureDate.toISOString().split('T')[0];
    }
}

// Load all users from localStorage
function loadAllUsers() {
    const saved = localStorage.getItem('vocabMasterUsers');
    if (saved) {
        allUsers = JSON.parse(saved);
    } else {
        // Initialize 4 empty user slots
        allUsers = {
            user1: null,
            user2: null,
            user3: null,
            user4: null
        };
        saveAllUsers();
    }
}

// Save all users to localStorage
function saveAllUsers() {
    localStorage.setItem('vocabMasterUsers', JSON.stringify(allUsers));
}

// Display user profiles
function displayUserProfiles() {
    const grid = document.getElementById('profiles-grid');
    if (!grid) return;

    grid.innerHTML = '';

    for (let i = 1; i <= 4; i++) {
        const userId = `user${i}`;
        const user = allUsers[userId];

        const card = document.createElement('div');
        card.className = 'profile-card';
        card.onclick = () => selectUser(i);

        const avatar = document.createElement('div');
        avatar.className = 'profile-avatar';
        avatar.textContent = '👤';

        const name = document.createElement('h3');
        name.textContent = user ? user.name : `User ${i}`;

        const stats = document.createElement('p');
        stats.className = 'profile-stats';
        if (user) {
            const wordsCount = user.stats.wordsLearned || 0;
            stats.textContent = `${wordsCount} words learned`;
        } else {
            stats.textContent = 'New Profile';
        }

        card.appendChild(avatar);
        card.appendChild(name);
        card.appendChild(stats);
        grid.appendChild(card);
    }
}

// Select user
function selectUser(userNumber) {
    currentUserId = `user${userNumber}`;
    const user = allUsers[currentUserId];

    if (user) {
        // Existing user - go to dashboard
        showScreen('dashboard-screen');
        updateDashboard();
    } else {
        // New user - go to setup
        showScreen('setup-screen');
    }
}

// Complete setup
function completeSetup() {
    const name = document.getElementById('user-name').value.trim();
    const examDate = document.getElementById('exam-date').value;
    const level = document.getElementById('current-level').value;
    const dailyTime = parseInt(document.getElementById('daily-time').value);

    if (!name) {
        alert('Please enter your name!');
        return;
    }

    if (!examDate) {
        alert('Please select an exam date!');
        return;
    }

    allUsers[currentUserId] = {
        name: name,
        examDate: examDate,
        currentLevel: level,
        dailyTime: dailyTime,
        startDate: new Date().toISOString(),
        studyStreak: 0,
        lastStudyDate: null,
        progress: {
            vocabulary: 0,
            grammar: 0,
            reading: 0,
            tests: 0
        },
        stats: {
            totalStudyTime: 0,
            wordsLearned: 0,
            questionsSolved: 0,
            testScores: []
        }
    };

    saveAllUsers();
    showScreen('dashboard-screen');
    updateDashboard();
}

// Cancel setup
function cancelSetup() {
    currentUserId = null;
    showScreen('user-selection-screen');
}

// Switch user
function switchUser() {
    currentUserId = null;
    displayUserProfiles();
    showScreen('user-selection-screen');
}

// Screen Management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Update Dashboard
function updateDashboard() {
    const user = allUsers[currentUserId];
    if (!user) return;

    // Update header
    document.getElementById('dashboard-user-name').textContent = user.name;
    document.getElementById('user-badge').textContent = `U${currentUserId.replace('user', '')}`;

    const examDate = new Date(user.examDate);
    document.getElementById('dashboard-exam-date').textContent =
        `Exam Date: ${examDate.toLocaleDateString()}`;

    updateStatistics();
}

// Update Statistics Screen
function updateStatistics() {
    const user = allUsers[currentUserId];
    if (!user) return;

    // Overview stats
    const totalWords = user.stats?.wordsLearned || 0;
    const streak = user.studyStreak || 0;
    const totalTime = user.stats?.totalStudyTime || 0;
    const accuracy = calculateAccuracy();

    const statsElements = {
        'stats-total-words': totalWords,
        'stats-streak': streak,
        'stats-total-time': `${Math.floor(totalTime / 60)}h`,
        'stats-accuracy': `${accuracy}%`
    };

    Object.entries(statsElements).forEach(([id, value]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    });

    // Today's goals
    const dailyTime = user.dailyTime || 60;
    const todayTime = user.stats?.todayTime || 0;
    const todayWords = user.stats?.todayWords || 0;
    const todayQuizzes = user.stats?.todayQuizzes || 0;

    updateGoalProgress('goal-time', todayTime, dailyTime, 'min');
    updateGoalProgress('goal-words', todayWords, 20, 'words');
    updateGoalProgress('goal-quiz', todayQuizzes, 10, 'quizzes');

    // Module progress
    const vocabEl = document.getElementById('vocab-mastered');
    const vocabAvgEl = document.getElementById('vocab-average');
    if (vocabEl) vocabEl.textContent = totalWords;
    if (vocabAvgEl) vocabAvgEl.textContent = `${accuracy}%`;

    const grammarProgress = localStorage.getItem('grammarProgress');
    const grammarCompleted = grammarProgress ? JSON.parse(grammarProgress).length : 0;
    const grammarCompEl = document.getElementById('grammar-completed');
    const grammarAccEl = document.getElementById('grammar-accuracy');
    if (grammarCompEl) grammarCompEl.textContent = `${grammarCompleted} / 13`;
    if (grammarAccEl) grammarAccEl.textContent = '0%';

    // Weekly activity
    updateWeeklyActivity();

    // Exam countdown
    const examDate = new Date(user.examDate);
    const today = new Date();
    const daysRemaining = Math.ceil((examDate - today) / (1000 * 60 * 60 * 24));
    const daysEl = document.getElementById('days-remaining');
    const examDateEl = document.getElementById('exam-date-display');
    if (daysEl) daysEl.textContent = daysRemaining > 0 ? daysRemaining : 0;
    if (examDateEl) examDateEl.textContent = examDate.toLocaleDateString();
}

function calculateAccuracy() {
    const user = allUsers[currentUserId];
    if (!user || !user.stats?.testScores || user.stats.testScores.length === 0) return 0;
    const avg = user.stats.testScores.reduce((a, b) => a + b, 0) / user.stats.testScores.length;
    return Math.round(avg);
}

function updateGoalProgress(id, current, target, unit) {
    const percentage = Math.min((current / target) * 100, 100);
    const barEl = document.getElementById(`${id}-bar`);
    const textEl = document.getElementById(`${id}-text`);
    if (barEl) barEl.style.width = `${percentage}%`;
    if (textEl) textEl.textContent = `${current} / ${target} ${unit}`;
}

function updateWeeklyActivity() {
    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const user = allUsers[currentUserId];
    const weeklyData = user.stats?.weeklyActivity || {};

    days.forEach(day => {
        const minutes = weeklyData[day] || 0;
        const height = Math.min((minutes / 120) * 150, 150); // Max 120 min = 150px
        const barEl = document.getElementById(`activity-${day}`);
        if (barEl) barEl.style.height = `${height}px`;
    });
}

// Update Progress Bar
function updateProgress(type, current, total) {
    const percentage = Math.min((current / total) * 100, 100);
    const progressBar = document.getElementById(`${type}-progress`);
    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
    }
    const countElement = document.getElementById(`${type}-count`);
    if (countElement) {
        countElement.textContent = current;
    }
}

// Update Streak
function updateStreak() {
    if (!currentUserId || !allUsers[currentUserId]) return;

    const user = allUsers[currentUserId];
    const today = new Date().toDateString();
    const lastStudy = user.lastStudyDate ? new Date(user.lastStudyDate).toDateString() : null;

    if (lastStudy === today) {
        return; // Already studied today
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();

    if (lastStudy === yesterdayStr) {
        user.studyStreak++;
    } else if (lastStudy !== today) {
        user.studyStreak = 1;
    }

    user.lastStudyDate = new Date().toISOString();
    saveAllUsers();
}

// Module Navigation
function openModule(moduleName) {
    if (moduleName === 'grammar') {
        sessionStorage.setItem('currentVocabUser', currentUserId);
        window.location.href = 'grammar/index.html';
    } else if (moduleName === 'reading') {
        sessionStorage.setItem('currentVocabUser', currentUserId);
        window.location.href = 'reading/index.html';
    } else if (moduleName === 'translation') {
        sessionStorage.setItem('currentVocabUser', currentUserId);
        window.location.href = 'translation/index.html';
    } else if (moduleName === 'practice-test') {
        sessionStorage.setItem('currentVocabUser', currentUserId);
        window.location.href = 'practice-test/index.html';
    } else {
        showScreen(`${moduleName}-screen`);
    }
}

function backToDashboard() {
    showScreen('dashboard-screen');
    updateDashboard();
}

// Vocabulary Functions
function startFlashcards() {
    sessionStorage.setItem('currentVocabUser', currentUserId);
    window.location.href = 'vocabulary/flashcards.html';
}

function startVocabQuiz() {
    sessionStorage.setItem('currentVocabUser', currentUserId);
    window.location.href = 'vocabulary/quiz.html';
}

function viewWordLists() {
    sessionStorage.setItem('currentVocabUser', currentUserId);
    window.location.href = 'vocabulary/wordlist.html';
}

// Settings
function showSettings() {
    if (!currentUserId || !allUsers[currentUserId]) return;

    const user = allUsers[currentUserId];
    document.getElementById('settings-profile-name').value = user.name;
    document.getElementById('settings-daily-time').value = user.dailyTime;
    document.getElementById('settings-modal').classList.add('active');
}

function closeSettings() {
    document.getElementById('settings-modal').classList.remove('active');
}

function saveSettings() {
    if (!currentUserId || !allUsers[currentUserId]) return;

    const user = allUsers[currentUserId];
    const newName = document.getElementById('settings-profile-name').value.trim();

    if (!newName) {
        alert('Please enter a name!');
        return;
    }

    user.name = newName;
    user.dailyTime = parseInt(document.getElementById('settings-daily-time').value);

    saveAllUsers();
    updateDashboard();
    displayUserProfiles();
    closeSettings();
    alert('Settings saved successfully!');
}

function resetProgress() {
    if (!currentUserId) return;

    if (confirm('Are you sure you want to reset ALL your progress? This cannot be undone!')) {
        if (confirm('This will delete all your study data. Are you absolutely sure?')) {
            allUsers[currentUserId] = null;
            saveAllUsers();
            closeSettings();
            switchUser();
            alert('Progress reset successfully!');
        }
    }
}

// Daily Goals
document.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox' && e.target.id.startsWith('check-')) {
        if (!currentUserId || !allUsers[currentUserId]) return;

        const goalType = e.target.id.replace('check-', '');
        if (e.target.checked) {
            updateGoalProgress(goalType);
        }
        saveAllUsers();
    }
});

function updateGoalProgress(goalType) {
    if (!currentUserId || !allUsers[currentUserId]) return;

    const user = allUsers[currentUserId];

    switch (goalType) {
        case 'vocab':
            user.stats.wordsLearned = (user.stats.wordsLearned || 0) + 25;
            user.progress.vocabulary = (user.progress.vocabulary || 0) + 25;
            break;
        case 'grammar':
            user.progress.grammar = (user.progress.grammar || 0) + 1;
            break;
        case 'reading':
            user.progress.reading = (user.progress.reading || 0) + 1;
            break;
        case 'practice':
            user.stats.questionsSolved = (user.stats.questionsSolved || 0) + 10;
            break;
    }

    user.stats.totalStudyTime = (user.stats.totalStudyTime || 0) + 30;
    updateDashboard();
}
