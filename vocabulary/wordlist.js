// Word List System
let allWords = [];
let filteredWords = [];
let currentCategory = 'all';
let currentLevel = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Initial static text update to show something is happening
    const countEl = document.getElementById('word-count');
    if (countEl) countEl.textContent = "Loading...";

    // Give a small breathing room for scripts
    setTimeout(() => {
        initWordList();
    }, 100);
});

function initWordList() {
    loadAllWords();
    setupFilters();
    filterWords(); // This triggers displayWords
}

function loadAllWords() {
    if (typeof vocabularyDatabase === 'undefined') {
        console.error("Critical: vocabularyDatabase is missing!");
        document.getElementById('words-grid').innerHTML = '<div class="error">Error loading database. Please refresh.</div>';
        return;
    }

    // Start with base database
    let v1 = vocabularyDatabase.level1 || [];
    let v2 = vocabularyDatabase.level2 || [];
    let v3 = vocabularyDatabase.level3 || [];

    // Merge additional words if available
    if (typeof window.additionalWords !== 'undefined') {
        const extra = window.additionalWords;

        if (extra.level1_extra) v1 = v1.concat(extra.level1_extra);
        if (extra.level1_bonus) v1 = v1.concat(extra.level1_bonus);

        if (extra.level2_extra) v2 = v2.concat(extra.level2_extra);
        if (extra.level2_bonus) v2 = v2.concat(extra.level2_bonus);

        if (extra.level3_extra) v3 = v3.concat(extra.level3_extra);
        if (extra.level3_bonus) v3 = v3.concat(extra.level3_bonus);
        if (extra.yds_elite) v3 = v3.concat(extra.yds_elite);
    }

    // Add level info BEFORE concatenation to maintain structure, or better, during concat
    v1.forEach(w => w.level = 1);
    v2.forEach(w => w.level = 2);
    v3.forEach(w => w.level = 3);

    allWords = v1.concat(v2, v3);

    console.log(`Loaded ${allWords.length} words.`);

    // Reset filtered words
    filteredWords = [...allWords];

    // Update header count immediately
    const headerCount = document.getElementById('word-count');
    if (headerCount) headerCount.textContent = `${allWords.length} words`;
}

function setupFilters() {
    // Category filters
    document.querySelectorAll('.category-filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.category-filters .filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            filterWords();
        });
    });

    // Level filters
    document.querySelectorAll('.level-filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.level-filters .filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentLevel = this.dataset.level;
            filterWords();
        });
    });
}

function filterWords() {
    filteredWords = allWords.filter(word => {
        const categoryMatch = currentCategory === 'all' || word.category === currentCategory;
        const levelMatch = currentLevel === 'all' || word.level === parseInt(currentLevel);
        return categoryMatch && levelMatch;
    });

    displayWords();
}

function searchWords() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();

    if (!searchTerm) {
        filterWords();
        return;
    }

    filteredWords = allWords.filter(word => {
        const categoryMatch = currentCategory === 'all' || word.category === currentCategory;
        const levelMatch = currentLevel === 'all' || word.level === parseInt(currentLevel);
        const searchMatch = word.word.toLowerCase().includes(searchTerm) ||
            word.meaning.toLowerCase().includes(searchTerm);
        return categoryMatch && levelMatch && searchMatch;
    });

    displayWords();
}

function displayWords() {
    const grid = document.getElementById('words-grid');
    grid.innerHTML = '';

    // Update count
    document.getElementById('filtered-count').textContent = `${filteredWords.length} words`;

    // Sort alphabetically
    const sortedWords = [...filteredWords].sort((a, b) => a.word.localeCompare(b.word));

    // Display words
    sortedWords.forEach(word => {
        const card = document.createElement('div');
        card.className = 'word-card';

        const wordEl = document.createElement('div');
        wordEl.className = 'word-title';
        wordEl.textContent = word.word;

        const meaningEl = document.createElement('div');
        meaningEl.className = 'word-meaning';
        meaningEl.textContent = word.meaning;

        const exampleEl = document.createElement('div');
        exampleEl.className = 'word-example';
        exampleEl.textContent = `"${word.example}"`;

        const metaEl = document.createElement('div');
        metaEl.className = 'word-meta';

        const categoryTag = document.createElement('span');
        categoryTag.className = 'category-tag';
        categoryTag.textContent = word.category;

        const levelTag = document.createElement('span');
        levelTag.className = 'level-tag';
        levelTag.textContent = `Level ${word.level}`;

        metaEl.appendChild(categoryTag);
        metaEl.appendChild(levelTag);

        card.appendChild(wordEl);
        card.appendChild(meaningEl);
        card.appendChild(exampleEl);
        card.appendChild(metaEl);

        grid.appendChild(card);
    });
}

function goBack() {
    const userId = sessionStorage.getItem('currentVocabUser');
    const returnUrl = userId ? `../index.html?return=vocabulary&userId=${userId}` : '../index.html?return=vocabulary';
    window.location.href = returnUrl;
}
