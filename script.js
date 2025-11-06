// Quiz questions database - initially empty
const quizQuestions = [];

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
const restartBtn = document.getElementById('restartBtn');

const usersList = document.getElementById('usersList');
const adminLogoutBtn = document.getElementById('adminLogoutBtn');

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
// Clear all registered users on initialization
let users = JSON.parse(localStorage.getItem('quizUsers')) || [];
let userScores = JSON.parse(localStorage.getItem('userScores')) || {}; // Store user scores
let customQuestions = JSON.parse(localStorage.getItem('customQuestions')) || [];
let timerValue = parseInt(localStorage.getItem('quizTimer')) || 30;
let timerInterval = null;
let timeLeft = timerValue;

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
    
    // Add user to registered users list
    if (!users.includes(username)) {
        users.push(username);
        localStorage.setItem('quizUsers', JSON.stringify(users));
    }
    
    // Set current user and start quiz
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
    if (customQuestions.length === 0) {
        alert("No questions available. Please contact the administrator to add questions.");
        return;
    }
    
    // Check if there are at least 50 questions
    if (customQuestions.length < 50) {
        alert(`Only ${customQuestions.length} questions available. Please add at least 50 questions for the full quiz experience.`);
    }
    
    // Always select exactly 15 random questions from the available pool
    selectedQuestions = getRandomQuestions(customQuestions, 15);
    
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
        
        optionElement.addEventListener('click', () => selectOption(optionElement, index));
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
function selectOption(optionElement, selectedIndex) {
    // Clear the timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // Remove selected class from all options
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    optionElement.classList.add('selected');
    
    // Check if answer is correct (but don't show it)
    const question = selectedQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.answer;
    
    // Update score if correct (silently)
    if (isCorrect) {
        score++;
    }
    
    // Disable further selections
    document.querySelectorAll('.option').forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
    
    // Show next button or finish button
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
    currentQuestionIndex++;
    updateQuestionCounter();
    showQuestion();
});

// Finish quiz
finishBtn.addEventListener('click', () => {
    // Clear timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    showResults();
});

// Show results
function showResults() {
    // Calculate percentage
    const percent = Math.round((score / selectedQuestions.length) * 100);
    
    // Store user score
    userScores[currentUser] = {
        score: score,
        total: selectedQuestions.length,
        percentage: percent,
        date: new Date().toLocaleString()
    };
    localStorage.setItem('userScores', JSON.stringify(userScores));
    
    // Update result page
    resultPlayerName.textContent = currentUser;
    finalScore.textContent = score;
    percentage.textContent = percent;
    
    // Switch to results page
    quizPage.classList.remove('active');
    resultsPage.classList.add('active');
}

// Restart quiz
restartBtn.addEventListener('click', () => {
    // Remove user from registered users list
    if (currentUser && currentUser !== 'ADMIN2007') {
        users = users.filter(user => user !== currentUser);
        localStorage.setItem('quizUsers', JSON.stringify(users));
    }
    
    // Clear session storage and restart
    sessionStorage.removeItem('loggedInUser');
    currentUser = null;
    resultsPage.classList.remove('active');
    loginPage.classList.add('active');
    usernameInput.value = '';
    loginError.textContent = '';
});

// Admin panel
function showAdminPanel() {
    // Update users list with scores
    usersList.innerHTML = '';
    users.forEach(user => {
        const listItem = document.createElement('li');
        const userScore = userScores[user];
        
        if (userScore) {
            listItem.innerHTML = `
                <strong>${user}</strong>
                <span style="float: right; color: #00fff7;">
                    Score: ${userScore.score}/${userScore.total} (${userScore.percentage}%) - ${userScore.date}
                </span>
            `;
        } else {
            listItem.innerHTML = `
                <strong>${user}</strong>
                <span style="float: right; color: #888;">No score yet</span>
            `;
        }
        
        usersList.appendChild(listItem);
    });
    
    // Set timer setting value
    timerSetting.value = timerValue;
    
    // Update questions list
    updateQuestionsList();
    
    // Switch to admin page
    loginPage.classList.remove('active');
    adminPage.classList.add('active');
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
    questionsCount.textContent = customQuestions.length;
    
    customQuestions.forEach((question, index) => {
        const questionItem = document.createElement('li');
        questionItem.className = 'question-item';
        
        questionItem.innerHTML = `
            <div class="question-text">${question.question}</div>
            <ul class="question-options">
                ${question.options.map((option, i) => 
                    `<li${i === question.answer ? ' class="correct"' : ''}>${option}${i === question.answer ? ' (Correct)' : ''}</li>`
                ).join('')}
            </ul>
            <button class="delete-question" data-index="${index}">X</button>
        `;
        
        questionsList.appendChild(questionItem);
    });
    
    // Add event listeners to delete buttons
    document.querySelectorAll('.delete-question').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            deleteCustomQuestion(index);
        });
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
    
    // Add to custom questions
    customQuestions.push(newQuestion);
    localStorage.setItem('customQuestions', JSON.stringify(customQuestions));
    
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
        customQuestions = customQuestions.concat(questionsToAdd);
        localStorage.setItem('customQuestions', JSON.stringify(customQuestions));
        
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

// Delete custom question
function deleteCustomQuestion(index) {
    if (confirm('Are you sure you want to delete this question?')) {
        customQuestions.splice(index, 1);
        localStorage.setItem('customQuestions', JSON.stringify(customQuestions));
        updateQuestionsList();
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

// Handle page refresh/logout
window.addEventListener('beforeunload', () => {
    // Remove user from registered list and force re-login on refresh
    const loggedUser = sessionStorage.getItem('loggedInUser');
    if (loggedUser && loggedUser !== 'ADMIN2007') {
        // Remove from registered users
        users = users.filter(user => user !== loggedUser);
        localStorage.setItem('quizUsers', JSON.stringify(users));
        sessionStorage.removeItem('loggedInUser');
    }
    
    // Clear timer if active
    if (timerInterval) {
        clearInterval(timerInterval);
    }
});