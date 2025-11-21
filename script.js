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
// Use localStorage for user tracking when backend is not available
let users = []; // Users currently taking quiz
let userScores = []; // Users who finished with their scores
let timerValue = 30;
let timerInterval = null;
let timeLeft = 30;

// API Helper Functions
function apiRequest(endpoint, method = 'GET', data = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, API_BASE + endpoint, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        const response = JSON.parse(xhr.responseText);
                        resolve(response);
                    } catch (e) {
                        reject(e);
                    }
                } else {
                    reject(new Error('API request failed with status ' + xhr.status));
                }
            }
        };
        
        if (data) {
            xhr.send(JSON.stringify(data));
        } else {
            xhr.send();
        }
    });
}

// Function to add user to backend or localStorage
function addUser(username) {
    // Try to use backend API first
    return apiRequest('/users', 'POST', {
        username: username,
        timestamp: Date.now()
    })
    .then(response => {
        if (response.success) {
            return { success: true, source: 'backend' };
        } else {
            throw new Error('Backend registration failed');
        }
    })
    .catch(error => {
        // Fallback to localStorage
        console.warn('Backend not available, using localStorage:', error.message);
        try {
            let allUsers = JSON.parse(localStorage.getItem('allUsers') || '[]');
            const existingUser = allUsers.find(user => user.username === username);
            if (!existingUser) {
                allUsers.push({
                    username: username,
                    registeredAt: Date.now()
                });
                localStorage.setItem('allUsers', JSON.stringify(allUsers));
            }
            
            let onlineUsers = JSON.parse(localStorage.getItem('onlineUsers') || '[]');
            onlineUsers.push({
                username: username,
                loggedInAt: Date.now()
            });
            localStorage.setItem('onlineUsers', JSON.stringify(onlineUsers));
            
            return { success: true, source: 'localStorage' };
        } catch (e) {
            return { success: false, error: e.message };
        }
    });
}

// Function to remove user from backend or localStorage
function removeUser(username) {
    // Try to use backend API first
    return apiRequest('/users/online', 'DELETE', {
        username: username
    })
    .then(response => {
        if (response.success) {
            return { success: true, source: 'backend' };
        } else {
            throw new Error('Backend removal failed');
        }
    })
    .catch(error => {
        // Fallback to localStorage
        console.warn('Backend not available, using localStorage:', error.message);
        try {
            let onlineUsers = JSON.parse(localStorage.getItem('onlineUsers') || '[]');
            onlineUsers = onlineUsers.filter(user => user.username !== username);
            localStorage.setItem('onlineUsers', JSON.stringify(onlineUsers));
            return { success: true, source: 'localStorage' };
        } catch (e) {
            return { success: false, error: e.message };
        }
    });
}

// Function to add score to backend or localStorage
function addScore(username, score, total) {
    const scoreData = {
        username: username,
        score: score,
        total: total,
        percentage: Math.round((score / total) * 100),
        timestamp: Date.now(),
        date: new Date().toLocaleString()
    };
    
    // Try to use backend API first
    return apiRequest('/scores', 'POST', scoreData)
    .then(response => {
        if (response.success) {
            return { success: true, source: 'backend' };
        } else {
            throw new Error('Backend score submission failed');
        }
    })
    .catch(error => {
        // Fallback to localStorage
        console.warn('Backend not available, using localStorage:', error.message);
        try {
            let scores = JSON.parse(localStorage.getItem('scores') || '[]');
            scores.push(scoreData);
            localStorage.setItem('scores', JSON.stringify(scores));
            return { success: true, source: 'localStorage' };
        } catch (e) {
            return { success: false, error: e.message };
        }
    });
}

// Function to get online users from backend or localStorage
function getOnlineUsers() {
    // Try to use backend API first
    return apiRequest('/users/online', 'GET')
    .then(users => {
        return { users: users, source: 'backend' };
    })
    .catch(error => {
        // Fallback to localStorage
        console.warn('Backend not available, using localStorage:', error.message);
        try {
            const users = JSON.parse(localStorage.getItem('onlineUsers') || '[]');
            return { users: users, source: 'localStorage' };
        } catch (e) {
            return { users: [], source: 'localStorage' };
        }
    });
}

// Function to get scores from backend or localStorage
function getScores() {
    // Try to use backend API first
    return apiRequest('/scores', 'GET')
    .then(scores => {
        return { scores: scores, source: 'backend' };
    })
    .catch(error => {
        // Fallback to localStorage
        console.warn('Backend not available, using localStorage:', error.message);
        try {
            const scores = JSON.parse(localStorage.getItem('scores') || '[]');
            // Sort by score (descending) then by timestamp (ascending)
            scores.sort((a, b) => {
                if (b.score !== a.score) {
                    return b.score - a.score;
                }
                return a.timestamp - b.timestamp;
            });
            return { scores: scores, source: 'localStorage' };
        } catch (e) {
            return { scores: [], source: 'localStorage' };
        }
    });
}

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
    
    // Poll for updates every 2 seconds when admin panel is active
    setInterval(() => {
        if (adminPage.classList.contains('active')) {
            updateAdminUsersList();
        }
    }, 2000);
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
    
    // Add user
    addUser(username)
        .then(response => {
            if (response.success) {
                // Set current user and start quiz directly
                currentUser = username;
                sessionStorage.setItem('loggedInUser', username);
                startQuiz(username);
            } else {
                loginError.textContent = 'Failed to register user';
            }
        });
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
    
    // Save score
    if (currentUser) {
        addScore(currentUser, score, selectedQuestions.length)
            .then(response => {
                if (response.success) {
                    // Notify admin panel of update
                    notifyAdminPanelUpdate();
                }
            });
    }
    
    // Remove user from online users
    if (currentUser) {
        removeUser(currentUser);
    }
    
    // Show results
    showResults();
});

// Function to show results
function showResults() {
    // Update UI with final score
    resultPlayerName.textContent = currentUser;
    finalScore.textContent = `${score}/${selectedQuestions.length}`;
    percentage.textContent = `${Math.round((score / selectedQuestions.length) * 100)}%`;
    
    // Switch to results page
    quizPage.classList.remove('active');
    resultsPage.classList.add('active');
}

// Function to update admin users list
function updateAdminUsersList() {
    // Get online users
    getOnlineUsers()
        .then(result => {
            const usersList = document.getElementById('usersList');
            if (usersList) {
                usersList.innerHTML = '';
                if (result.users.length === 0) {
                    usersList.innerHTML = '<li class="no-users">No users currently taking the quiz</li>';
                } else {
                    result.users.forEach(user => {
                        const li = document.createElement('li');
                        li.innerHTML = `
                            <span class="user-name">${user.username}</span>
                            <span class="user-time">Logged in: ${new Date(user.loggedInAt || user.timestamp).toLocaleTimeString()}</span>
                        `;
                        usersList.appendChild(li);
                    });
                }
            }
        });

    // Get scores
    getScores()
        .then(result => {
            const leaderboardList = document.getElementById('leaderboardList');
            if (leaderboardList) {
                leaderboardList.innerHTML = '';
                if (result.scores.length === 0) {
                    leaderboardList.innerHTML = '<li class="no-users">No completed quizzes yet</li>';
                } else {
                    result.scores.forEach((scoreData, index) => {
                        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`;
                        const li = document.createElement('li');
                        li.innerHTML = `
                            <div class="leaderboard-item">
                                <span class="medal">${medal}</span>
                                <span class="user-name">${scoreData.username}</span>
                                <span class="score">${scoreData.score}/${scoreData.total}</span>
                                <span class="percentage">(${scoreData.percentage}%)</span>
                                <span class="time">${scoreData.date}</span>
                            </div>
                        `;
                        leaderboardList.appendChild(li);
                    });
                }
            }
        });
}

// Function to show admin panel
function showAdminPanel() {
    // Hide other pages
    loginPage.classList.remove('active');
    quizPage.classList.remove('active');
    resultsPage.classList.remove('active');
    
    // Show admin panel
    adminPage.classList.add('active');
    
    // Update the admin panel immediately
    updateAdminUsersList();
}

// Function to open leaderboard in new tab
function openLeaderboardInNewTab() {
    window.open('leaderboard.html', '_blank');
}

// Function to clear leaderboard
function clearLeaderboard() {
    if (confirm('Are you sure you want to clear all scores? This cannot be undone.')) {
        // For now, we'll just refresh the display
        // In a full implementation, we would add an API endpoint to clear scores
        updateAdminUsersList();
    }
}

// Function to update session status
function updateSessionStatus() {
    // This function can be expanded to show session information
}

// Function to copy question format
function copyQuestionFormat() {
    const format = `{
    "question": "Your question here",
    "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "answer": 0
}`;
    navigator.clipboard.writeText(format)
        .then(() => {
            const copyFormatBtn = document.getElementById('copyFormatBtn');
            const originalText = copyFormatBtn.textContent;
            copyFormatBtn.textContent = 'COPIED!';
            setTimeout(() => {
                copyFormatBtn.textContent = originalText;
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy format: ', err);
        });
}

// Function to bulk add questions
function bulkAddQuestions() {
    const bulkQuestions = document.getElementById('bulkQuestions');
    const bulkError = document.getElementById('bulkError');
    
    try {
        const questions = JSON.parse(bulkQuestions.value);
        if (!Array.isArray(questions)) {
            throw new Error('Input must be an array of questions');
        }
        
        // Add questions to the quizQuestions array
        quizQuestions.push(...questions);
        
        bulkError.textContent = `Successfully added ${questions.length} questions!`;
        bulkError.style.color = '#4CAF50';
        bulkQuestions.value = '';
        
        setTimeout(() => {
            bulkError.textContent = '';
        }, 3000);
    } catch (error) {
        bulkError.textContent = 'Invalid JSON format: ' + error.message;
        bulkError.style.color = '#f44336';
    }
}

// Function to save timer setting
function saveTimerSetting() {
    const timerSetting = document.getElementById('timerSetting');
    const timerSettingMessage = document.getElementById('timerSettingMessage');
    
    const newTimerValue = parseInt(timerSetting.value);
    if (isNaN(newTimerValue) || newTimerValue < 5 || newTimerValue > 300) {
        timerSettingMessage.textContent = 'Please enter a valid time between 5 and 300 seconds';
        timerSettingMessage.style.color = '#f44336';
        return;
    }
    
    timerValue = newTimerValue;
    timerSettingMessage.textContent = `Timer set to ${timerValue} seconds`;
    timerSettingMessage.style.color = '#4CAF50';
    
    setTimeout(() => {
        timerSettingMessage.textContent = '';
    }, 3000);
}

// Add event listener for admin logout
adminLogoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('loggedInUser');
    adminPage.classList.remove('active');
    loginPage.classList.add('active');
});