// API Base URL
const API_BASE = '/api';

// Quiz questions database - All questions are loaded here
const quizQuestions = [
  {
    "question": "Harmony in the family begins with understanding",
    "options": ["Human relationships", "Wealth accumulation", "Social status", "Power structures"],
    "answer": 0
  },
  {
    "question": "The foundation of human relationships is based on",
    "options": ["Mutual trust and respect", "Competition", "Authority", "Fear"],
    "answer": 0
  },
  {
    "question": "Living in harmony with others promotes",
    "options": ["Mutual happiness", "Isolation", "Domination", "Exploitation"],
    "answer": 0
  },
  {
    "question": "The ultimate aim of harmony in society is",
    "options": ["Universal human order", "Economic superiority", "Political dominance", "Cultural uniformity"],
    "answer": 0
  },
  {
    "question": "Coexistence in nature refers to",
    "options": ["Mutual dependence and balance", "Survival of the fittest", "Human exploitation of nature", "Random order"],
    "answer": 0
  },
  {
    "question": "Harmony at the level of individual means",
    "options": ["Self-understanding and inner peace", "Material prosperity", "Social fame", "Political ambition"],
    "answer": 0
  },
  {
    "question": "A harmonious family is built upon",
    "options": ["Understanding and mutual fulfillment", "Competition among members", "Strict rules", "Economic wealth"],
    "answer": 0
  },
  {
    "question": "Universal Human Order aims at",
    "options": ["Peaceful coexistence", "Unequal distribution", "Domination", "Suppression"],
    "answer": 0
  },
  {
    "question": "Ethics in professional life ensures",
    "options": ["Fairness and integrity", "Maximum profit", "Social manipulation", "Power increase"],
    "answer": 0
  },
  {
    "question": "The journey from family to world family reflects",
    "options": ["Expanding harmony and understanding", "Limiting relationships", "Self-centered attitude", "Cultural isolation"],
    "answer": 0
  }
];

// DOM Elements
const loginPage = document.getElementById('loginPage');
const quizPage = document.getElementById('quizPage');
const resultsPage = document.getElementById('resultsPage');
const adminPage = document.getElementById('adminPage');

const usernameInput = document.getElementById('usernameInput');
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');

const playerNameSpan = document.getElementById('playerName');
const questionCounter = document.getElementById('questionCounter');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('finishBtn');

const resultPlayerName = document.getElementById('resultPlayerName');
const finalScore = document.getElementById('finalScore');
const percentage = document.getElementById('percentage');

const usersList = document.getElementById('usersList');
const leaderboardList = document.getElementById('leaderboardList');
const adminLogoutBtn = document.getElementById('adminLogoutBtn');
const refreshUsersBtn = document.getElementById('refreshUsersBtn');
const clearLeaderboardBtn = document.getElementById('clearLeaderboardBtn');

// Add new elements
const refreshLeaderboardBtn = document.getElementById('refreshLeaderboardBtn');
const openLeaderboardBtn = document.getElementById('openLeaderboardBtn');

// Admin Panel Elements
const questionInput = document.getElementById('questionInput');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const correctAnswer = document.getElementById('correctAnswer');
const addQuestionBtn = document.getElementById('addQuestionBtn');
const questionError = document.getElementById('questionError');
const questionsList = document.getElementById('questionsList');
const questionsCount = document.getElementById('questionsCount');

// Format Section Elements
const questionFormat = document.getElementById('questionFormat');
const copyFormatBtn = document.getElementById('copyFormatBtn');
const bulkAddBtn = document.getElementById('bulkAddBtn');
const bulkQuestions = document.getElementById('bulkQuestions');
const bulkError = document.getElementById('bulkError');

// Timer Settings Elements
const timerSetting = document.getElementById('timerSetting');
const saveTimerBtn = document.getElementById('saveTimerBtn');
const timerSettingMessage = document.getElementById('timerSettingMessage');

// Game State
let currentUser = null;
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
// Simple user tracking - no database, just in memory
let users = []; // Users currently taking quiz
let userScores = {}; // Users who finished with their scores
let timerValue = parseInt(localStorage.getItem('quizTimer')) || 30;
let timerInterval = null;
let timeLeft = timerValue;

// Function to update admin panel in real-time
function notifyAdminPanelUpdate() {
    // Update admin panel immediately
    updateAdminUsersList();
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Check if user is already logged in
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        if (loggedInUser === 'ADMIN2007') {
            showAdminPanel();
        } else {
            startQuiz(loggedInUser);
        }
    }
    
    // Add event listeners for format section
    copyFormatBtn.addEventListener('click', copyQuestionFormat);
    bulkAddBtn.addEventListener('click', bulkAddQuestions);
    
    // Add event listener for timer setting
    saveTimerBtn.addEventListener('click', saveTimerSetting);
    
    // Add event listeners for new admin features
    refreshUsersBtn.addEventListener('click', updateAdminUsersList);
    
    // Add new event listeners
    refreshLeaderboardBtn.addEventListener('click', updateAdminUsersList);

    openLeaderboardBtn.addEventListener('click', openLeaderboardInNewTab);
    
    clearLeaderboardBtn.addEventListener('click', clearLeaderboard);
    
    // Update session status on load
    updateSessionStatus();
    
    // Listen for storage changes to update admin panel in real-time
    window.addEventListener('storage', (e) => {
        // Not needed anymore since we're not using localStorage
    });
});

// Login functionality
loginBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    
    if (!username) {
        loginError.textContent = 'Please enter a username';
        return;
    }
    
    // Special case for admin
    if (username === 'ADMIN2007') {
        sessionStorage.setItem('loggedInUser', username);
        showAdminPanel();
        return;
    }
    
    // Add user to currently active users list
    if (!users.includes(username)) {
        users.push(username);
        // Update admin panel immediately
        updateAdminUsersList();
    }
    
    // Set current user and start quiz directly
    currentUser = username;
    sessionStorage.setItem('loggedInUser', username);
    startQuiz(username);
});

// Start the quiz
function startQuiz(username) {
    currentUser = username;
    currentQuestionIndex = 0;
    score = 0;
    
    // Check if there are any questions
    if (quizQuestions.length === 0) {
        alert("No questions available. Please contact the administrator to add questions.");
        return;
    }
    
    // Always select exactly 15 random questions from the available pool
    selectedQuestions = getRandomQuestions(quizQuestions, 15);
    
    // Update UI
    playerNameSpan.textContent = `Player: ${username}`;
    updateQuestionCounter();
    updateScore(); // This will show '?'
    
    // Show first question
    showQuestion();
    
    // Switch to quiz page
    loginPage.classList.remove('active');
    quizPage.classList.add('active');
}

// Get random questions
function getRandomQuestions(questions, count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Shuffle array using Fisher-Yates algorithm for better randomization
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Randomize options for a question and update the correct answer index
function randomizeQuestionOptions(question) {
    // Create array of options with their original indices
    const optionsWithIndices = question.options.map((option, index) => ({
        option: option,
        wasCorrect: index === question.answer
    }));
    
    // Shuffle the options
    const shuffledOptions = shuffleArray(optionsWithIndices);
    
    // Find new index of correct answer
    const newCorrectIndex = shuffledOptions.findIndex(item => item.wasCorrect);
    
    // Return new question object with randomized options
    return {
        question: question.question,
        options: shuffledOptions.map(item => item.option),
        answer: newCorrectIndex
    };
}

// Show current question
function showQuestion() {
    // Get the current question and randomize its options
    const originalQuestion = selectedQuestions[currentQuestionIndex];
    const question = randomizeQuestionOptions(originalQuestion);
    
    // Update the selected question with randomized options for this display
    selectedQuestions[currentQuestionIndex] = question;
    
    questionText.textContent = question.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Add new options (now randomized)
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        
        // Add both click and touch events for better mobile support
        optionElement.addEventListener('click', () => selectOption(optionElement, index));
        optionElement.addEventListener('touchstart', (e) => {
            // Prevent default touch behavior
            e.preventDefault();
            selectOption(optionElement, index);
        }, { passive: false });
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Hide buttons
    nextBtn.classList.add('hidden');
    finishBtn.classList.add('hidden');
    
    // Start timer for this question
    startTimer();
}

// Timer functionality
function startTimer() {
    // Clear any existing timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // Reset time left
    timeLeft = timerValue;
    
    // Update UI with timer
    updateTimerDisplay();
    
    // Start new timer
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            // Time's up - auto-select the correct answer and move to next
            timeUp();
        }
    }, 1000);
}

function updateTimerDisplay() {
    // Update timer display in the UI
    const timerElement = document.getElementById('timerDisplay');
    if (timerElement) {
        timerElement.textContent = `Time: ${timeLeft}s`;
        // Change color when time is running low
        timerElement.style.color = timeLeft <= 10 ? '#ff4500' : '#ffd700';
    } else {
        // Create timer display if it doesn't exist
        const timerDisplay = document.createElement('div');
        timerDisplay.id = 'timerDisplay';
        timerDisplay.className = 'timer-display';
        timerDisplay.textContent = `Time: ${timeLeft}s`;
        document.querySelector('.quiz-header').appendChild(timerDisplay);
    }
}

function timeUp() {
    // Don't highlight correct answer - just disable all options
    document.querySelectorAll('.option').forEach((opt) => {
        opt.style.pointerEvents = 'none';
        opt.style.opacity = '0.6';
    });
    
    // Show next button or finish button after a delay
    setTimeout(() => {
        if (currentQuestionIndex < selectedQuestions.length - 1) {
            nextBtn.classList.remove('hidden');
        } else {
            finishBtn.classList.remove('hidden');
        }
    }, 500);
}

// Select an option
let currentSelectedIndex = null;
let currentSelectedElement = null;

function selectOption(optionElement, selectedIndex) {
    // Clear the timer
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    // Remove selected class from all options
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    optionElement.classList.add('selected');
    
    // Store current selection
    currentSelectedIndex = selectedIndex;
    currentSelectedElement = optionElement;
    
    // Show next button or finish button (don't lock the selection yet)
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        nextBtn.classList.remove('hidden');
    } else {
        finishBtn.classList.remove('hidden');
    }
}

// Update question counter
function updateQuestionCounter() {
    questionCounter.textContent = `Question: ${currentQuestionIndex + 1}/${selectedQuestions.length}`;
}

// Update score display (hidden during quiz)
function updateScore() {
    // Score is hidden during quiz - no display needed
}

// Next question
nextBtn.addEventListener('click', () => {
    // Check if answer is correct before moving to next question
    if (currentSelectedIndex !== null) {
        const question = selectedQuestions[currentQuestionIndex];
        const isCorrect = currentSelectedIndex === question.answer;
        
        // Update score if correct (silently)
        if (isCorrect) {
            score++;
        }
    }
    
    // Reset selection
    currentSelectedIndex = null;
    currentSelectedElement = null;
    
    currentQuestionIndex++;
    updateQuestionCounter();
    showQuestion();
});

// Finish quiz
finishBtn.addEventListener('click', () => {
    // Check if answer is correct for the last question
    if (currentSelectedIndex !== null) {
        const question = selectedQuestions[currentQuestionIndex];
        const isCorrect = currentSelectedIndex === question.answer;
        
        // Update score if correct (silently)
        if (isCorrect) {
            score++;
        }
    }
    
    // Clear timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // Move user from active users to finished users
    if (currentUser) {
        // Remove from active users
        users = users.filter(user => user !== currentUser);
        
        // Add to finished users with score
        userScores[currentUser] = {
            score: score,
            total: selectedQuestions.length,
            percentage: Math.round((score / selectedQuestions.length) * 100),
            date: new Date().toLocaleString()
        };
        
        // Update admin panel
        updateAdminUsersList();
    }
    
    showResults();
});

// Show results
function showResults() {
    // Calculate percentage
    const percent = Math.round((score / selectedQuestions.length) * 100);
    
    // Update result page
    resultPlayerName.textContent = currentUser;
    finalScore.textContent = score;
    percentage.textContent = percent;
    
    // Switch to results page
    quizPage.classList.remove('active');
    resultsPage.classList.add('active');
}

// Admin panel
function showAdminPanel() {
    updateAdminUsersList();
    
    // Set timer setting value
    timerSetting.value = timerValue;
    
    // Update questions list
    updateQuestionsList();
    
    // Switch to admin page
    loginPage.classList.remove('active');
    adminPage.classList.add('active');
}

// Update admin users list (separate function for real-time updates)
function updateAdminUsersList() {
    // Update currently online users list
    usersList.innerHTML = '';
    
    if (users.length === 0) {
        usersList.innerHTML = '<li style="text-align: center; color: #888;">No users online</li>';
    } else {
        users.forEach((user) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${user}</strong>
                <span style="float: right; color: #ffd700;">⚡ Taking Quiz...</span>
            `;
            usersList.appendChild(listItem);
        });
    }
    
    // Update leaderboard (users who finished)
    leaderboardList.innerHTML = '';
    
    // Get all users with scores
    const completedUsers = Object.keys(userScores).map(user => ({
        name: user,
        scoreData: userScores[user]
    }));
    
    if (completedUsers.length === 0) {
        leaderboardList.innerHTML = '<li style="text-align: center; color: #888;">No completed quizzes yet</li>';
    } else {
        completedUsers.forEach((userData, index) => {
            const listItem = document.createElement('li');
            const userScore = userData.scoreData;
            const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`;
            
            listItem.innerHTML = `
                <strong>${medal} ${userData.name}</strong>
                <span style="float: right; color: #00fff7;">
                    Score: ${userScore.score}/${userScore.total} (${userScore.percentage}%) - ${userScore.date}
                </span>
            `;
            
            leaderboardList.appendChild(listItem);
        });
    }
    
    // Set timer setting value
    timerSetting.value = timerValue;
    
    // Update questions list
    updateQuestionsList();
}

// Save timer setting
function saveTimerSetting() {
    const newTimerValue = parseInt(timerSetting.value);
    
    if (isNaN(newTimerValue) || newTimerValue < 5 || newTimerValue > 300) {
        timerSettingMessage.textContent = 'Please enter a valid time between 5 and 300 seconds';
        timerSettingMessage.style.color = '#ff4500';
        return;
    }
    
    timerValue = newTimerValue;
    localStorage.setItem('quizTimer', timerValue);
    
    timerSettingMessage.textContent = `Timer setting saved: ${timerValue} seconds per question`;
    timerSettingMessage.style.color = '#00ff00';
    
    // Clear message after 3 seconds
    setTimeout(() => {
        timerSettingMessage.textContent = '';
    }, 3000);
}

// Update questions list in admin panel
function updateQuestionsList() {
    questionsList.innerHTML = '';
    questionsCount.textContent = quizQuestions.length;
    
    quizQuestions.forEach((question, index) => {
        const questionItem = document.createElement('li');
        questionItem.className = 'question-item';
        
        questionItem.innerHTML = `
            <div class="question-text">${question.question}</div>
            <ul class="question-options">
                ${question.options.map((option, i) => 
                    `<li${i === question.answer ? ' class="correct"' : ''}>${option}${i === question.answer ? ' (Correct)' : ''}</li>`
                ).join('')}
            </ul>
        `;
        
        questionsList.appendChild(questionItem);
    });
}

// Add question functionality
addQuestionBtn.addEventListener('click', () => {
    const question = questionInput.value.trim();
    const opt1 = option1.value.trim();
    const opt2 = option2.value.trim();
    const opt3 = option3.value.trim();
    const opt4 = option4.value.trim();
    const correct = correctAnswer.value;
    
    // Validate inputs
    if (!question || !opt1 || !opt2 || !opt3 || !opt4) {
        questionError.textContent = 'Please fill in all fields';
        return;
    }
    
    if (correct === '') {
        questionError.textContent = 'Please select the correct answer';
        return;
    }
    
    // Create new question object
    const newQuestion = {
        question: question,
        options: [opt1, opt2, opt3, opt4],
        answer: parseInt(correct)
    };
    
    // Add to quiz questions
    quizQuestions.push(newQuestion);
    
    // Clear form
    questionInput.value = '';
    option1.value = '';
    option2.value = '';
    option3.value = '';
    option4.value = '';
    correctAnswer.value = '';
    questionError.textContent = '';
    
    // Update questions list
    updateQuestionsList();
});

// Copy question format to clipboard
function copyQuestionFormat() {
    questionFormat.select();
    document.execCommand('copy');
    
    // Show feedback
    const originalText = copyFormatBtn.textContent;
    copyFormatBtn.textContent = 'COPIED!';
    setTimeout(() => {
        copyFormatBtn.textContent = originalText;
    }, 2000);
}

// Bulk add questions
function bulkAddQuestions() {
    const bulkText = bulkQuestions.value.trim();
    
    if (!bulkText) {
        bulkError.textContent = 'Please paste questions in the format provided';
        return;
    }
    
    try {
        // Try to parse as JSON array first
        let questionsToAdd = [];
        
        // Check if it's a single JSON object or multiple objects
        if (bulkText.trim().startsWith('[')) {
            // It's an array
            questionsToAdd = JSON.parse(bulkText);
        } else if (bulkText.trim().startsWith('{')) {
            // It's a single object or multiple objects separated by newlines
            const lines = bulkText.split('\n').filter(line => line.trim() !== '');
            if (lines.length === 1) {
                // Single object
                questionsToAdd = [JSON.parse(bulkText)];
            } else {
                // Multiple objects
                questionsToAdd = lines.map(line => JSON.parse(line));
            }
        } else {
            throw new Error('Invalid format');
        }
        
        // Validate each question
        for (const question of questionsToAdd) {
            if (!question.question || !Array.isArray(question.options) || question.options.length !== 4 || 
                typeof question.answer !== 'number' || question.answer < 0 || question.answer > 3) {
                throw new Error('Invalid question format');
            }
        }
        
        // Add all questions
        quizQuestions.push(...questionsToAdd);
        
        // Clear bulk input
        bulkQuestions.value = '';
        bulkError.textContent = '';
        
        // Update questions list
        updateQuestionsList();
        
        // Show feedback
        const originalText = bulkAddBtn.textContent;
        bulkAddBtn.textContent = 'QUESTIONS ADDED!';
        setTimeout(() => {
            bulkAddBtn.textContent = originalText;
        }, 2000);
        
    } catch (e) {
        bulkError.textContent = 'Invalid format. Please check the format and try again.';
        console.error(e);
    }
}

// Admin logout
adminLogoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('loggedInUser');
    currentUser = null;
    adminPage.classList.remove('active');
    loginPage.classList.add('active');
    usernameInput.value = '';
    loginError.textContent = '';
});

// Function to open leaderboard in new tab
function openLeaderboardInNewTab() {
    // Open the leaderboard.html file in a new tab
    window.open('leaderboard.html', '_blank');
}

// Clear leaderboard function
function clearLeaderboard() {
    if (confirm('Are you sure you want to clear the entire leaderboard? This will delete all quiz scores.')) {
        localStorage.setItem('userScores', JSON.stringify({}));
        userScores = {};
        updateAdminUsersList();
        notifyAdminPanelUpdate();
    }
}

// Handle page refresh/logout
window.addEventListener('beforeunload', () => {
    // Remove user from registered list and force re-login on refresh
    const loggedUser = sessionStorage.getItem('loggedInUser');
    if (loggedUser && loggedUser !== 'ADMIN2007') {
        // Remove from registered users
        users = JSON.parse(localStorage.getItem('quizUsers')) || [];
        users = users.filter(user => user !== loggedUser);
        localStorage.setItem('quizUsers', JSON.stringify(users));
        sessionStorage.removeItem('loggedInUser');
        notifyAdminPanelUpdate();
    }
    
    // Clear timer if active
    if (timerInterval) {
        clearInterval(timerInterval);
    }
});

// Add visibility change detection for better user tracking
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        // User switched tabs or minimized window
        const loggedUser = sessionStorage.getItem('loggedInUser');
        if (loggedUser && loggedUser !== 'ADMIN2007') {
            // Notify admin panel that user might have left
            notifyAdminPanelUpdate();
        }
    } else if (document.visibilityState === 'visible') {
        // User returned to tab
        const loggedUser = sessionStorage.getItem('loggedInUser');
        if (loggedUser && loggedUser !== 'ADMIN2007') {
            // Ensure user is still in the registered list
            users = JSON.parse(localStorage.getItem('quizUsers')) || [];
            if (!users.includes(loggedUser)) {
                users.push(loggedUser);
                localStorage.setItem('quizUsers', JSON.stringify(users));
                notifyAdminPanelUpdate();
            }
        } else if (loggedUser === 'ADMIN2007') {
            // Refresh admin panel when admin returns
            if (adminPage.classList.contains('active')) {
                updateAdminUsersList();
            }
        }
    }
});

// Update session status - simplified since we removed session control
function updateSessionStatus() {
    // Session is always active now
    if (sessionStatusText) {
        sessionStatusText.textContent = 'Always Active';
        sessionStatusText.style.color = '#00ff88';
    }
}