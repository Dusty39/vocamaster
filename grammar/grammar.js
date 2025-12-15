// Grammar Module Logic
let completedTopics = [];

document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    displayTopics();
});

function goBack() {
    window.location.href = '../index.html?return=dashboard';
}

function loadProgress() {
    const saved = localStorage.getItem('grammarProgress');
    if (saved) {
        completedTopics = JSON.parse(saved);
    }
    updateProgressDisplay();
}

function saveProgress() {
    localStorage.setItem('grammarProgress', JSON.stringify(completedTopics));
    updateProgressDisplay();
}

function updateProgressDisplay() {
    const completed = completedTopics.length;
    const total = grammarTopics.length;
    const progressText = document.getElementById('grammar-progress-text');
    if (progressText) {
        progressText.textContent = `${completed} / ${total} topics`;
    }
}

function displayTopics() {
    const grid = document.getElementById('topics-grid');
    grid.innerHTML = '';

    grammarTopics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';

        const isCompleted = completedTopics.includes(topic.id);
        if (isCompleted) {
            card.classList.add('completed');
        }

        const difficultyClass = `difficulty-${topic.difficulty}`;

        card.innerHTML = `
            <div class="topic-header">
                <h3>${topic.title}</h3>
                ${isCompleted ? '<span class="completed-badge">✓</span>' : ''}
            </div>
            <p class="topic-description">${topic.description}</p>
            <div class="topic-footer">
                <span class="difficulty-badge ${difficultyClass}">${topic.difficulty}</span>
                <button class="btn-study" onclick="openTopic(${topic.id})">Study</button>
            </div>
        `;

        grid.appendChild(card);
    });
}

function openTopic(topicId) {
    const topic = grammarTopics.find(t => t.id === topicId);
    if (!topic) return;

    document.getElementById('topic-title').textContent = topic.title;
    document.getElementById('topic-content').innerHTML = topic.content;

    // Load exercises
    const exercisesContainer = document.getElementById('exercises-container');
    exercisesContainer.innerHTML = '';

    topic.exercises.forEach((exercise, index) => {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.className = 'exercise-item';
        exerciseDiv.innerHTML = `
            <p class="exercise-question"><strong>Q${index + 1}:</strong> ${exercise.question}</p>
            <div class="exercise-options">
                ${exercise.options.map((option, optIndex) => `
                    <button class="option-btn" onclick="checkAnswer(${topicId}, ${index}, ${optIndex})">
                        ${option}
                    </button>
                `).join('')}
            </div>
            <div class="exercise-feedback" id="feedback-${topicId}-${index}"></div>
        `;
        exercisesContainer.appendChild(exerciseDiv);
    });

    document.getElementById('topic-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('topic-modal').classList.remove('active');
}

function checkAnswer(topicId, exerciseIndex, selectedOption) {
    const topic = grammarTopics.find(t => t.id === topicId);
    const exercise = topic.exercises[exerciseIndex];
    const feedback = document.getElementById(`feedback-${topicId}-${exerciseIndex}`);

    const buttons = feedback.parentElement.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    if (selectedOption === exercise.correct) {
        feedback.innerHTML = '<span class="correct">✓ Correct!</span>';
        buttons[selectedOption].classList.add('correct');

        // Mark topic as completed if all exercises are done
        if (!completedTopics.includes(topicId)) {
            completedTopics.push(topicId);
            saveProgress();
            displayTopics();
        }
    } else {
        feedback.innerHTML = '<span class="wrong">✗ Wrong. Try again!</span>';
        buttons[selectedOption].classList.add('wrong');
        buttons[exercise.correct].classList.add('correct');
    }
}
