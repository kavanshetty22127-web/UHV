# Gaming Quiz Challenge

A fun, interactive quiz web application with a gaming theme. Test your knowledge with 15 random questions each time you play!

## Features

- **Login System**: Users must enter their name to start playing
- **Special Admin Access**: Login as "ADMIN2007" to access the admin panel
- **Direct Quiz Start**: Quiz begins immediately after user login
- **Mobile Responsive**: Fully optimized for both PC and mobile devices
- **Persistent Database**: User data and scores stored in a proper database
- **Real-time Leaderboard**: View scores and rankings of all players
- **Random Questions**: Each user gets 15 different questions per session
- **Session Management**: Users must re-login if they refresh or logout
- **Gaming Theme**: Unique UI with gaming-inspired design
- **Score Tracking**: See your results at the end of the quiz
- **Real-time Admin Panel**: Automatically updates when users login/logout
- **Question Management**: Admins can add, view, and delete custom questions
- **Bulk Question Import**: Copy-paste format for adding multiple questions
- **Timer Feature**: Configurable timer for each question

## How to Run

### Option 1: Using Node.js (Recommended)
1. Make sure you have Node.js installed on your system (https://nodejs.org/)
2. Double-click on `start_server.bat` to start the server
3. Open your browser and go to http://localhost:3000

### Option 2: Manual Method
1. Open Command Prompt or PowerShell
2. Navigate to this folder: `cd "g:\UHV quiz"`
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. Open your browser and go to http://localhost:3000

### Option 3: Using Python (Legacy method)
1. Make sure you have Python installed on your system
2. Double-click on `start_quiz.bat` to start the server
3. Open your browser and go to http://localhost:8000
Note: This method uses localStorage and may have limitations with data persistence

## How to Play

1. **Login**: Enter your name on the login screen
2. **Special Admin Access**: Enter "ADMIN2007" to access the admin panel
3. **Quiz**: Answer 15 random questions (admin must add questions first)
4. **Timer**: Each question has a timer (default 30 seconds, configurable by admin)
5. **Scoring**: Each correct answer gives you 1 point
6. **Results**: See your final score at the end
7. **Leaderboard**: View your rank among all players

## Admin Panel

- Login as "ADMIN2007" to view all registered users
- The list updates automatically as new users play the quiz
- **Real-time Updates**: The panel automatically refreshes when users login or logout
- **Manual Refresh**: Use the refresh buttons to manually update the lists
- **Leaderboard**: View all completed quizzes with scores and completion times
- **Open Leaderboard**: Click "OPEN LEADERBOARD IN NEW TAB" to view the leaderboard in a separate tab
- **Quiz Settings**: Set timer for each question (5-300 seconds)
- **Add Questions**: Enter question text, 4 options, and select the correct answer
- **View Questions**: See all added questions with correct answers marked
- **Delete Questions**: Remove any questions using the delete button
- **Bulk Add Questions**: 
  1. Copy the provided format
  2. Paste multiple questions in the bulk add section
  3. Supports both single JSON objects and arrays of questions
- **Note**: No default questions are provided - admin must add all questions

## Mobile Responsiveness

The quiz application is fully optimized for both desktop and mobile devices:
- Responsive layouts that adapt to different screen sizes
- Touch-friendly buttons and controls
- Optimized font sizes and spacing for mobile screens
- Improved touch target sizes for better usability
- Support for high contrast and reduced motion preferences

## Database Structure

The application now uses a proper file-based database system:
- **Users**: Stored in `data/users.json`
- **Scores**: Stored in `data/scores.json`
- **Questions**: Stored in `data/questions.json`

All data is persisted between server restarts and shared across all users.

## Question Format for Bulk Import

Use this format to add multiple questions at once:

```
{
  "question": "Your question here",
  "options": [
    "Option 1",
    "Option 2", 
    "Option 3",
    "Option 4"
  ],
  "answer": 0  // Index of correct answer (0-3)
}
```

You can add multiple questions in these ways:
1. As a JSON array:
```json
[
  {
    "question": "First question?",
    "options": ["A", "B", "C", "D"],
    "answer": 0
  },
  {
    "question": "Second question?",
    "options": ["A", "B", "C", "D"],
    "answer": 1
  }
]
```

2. As multiple JSON objects (one per line):
```json
{"question": "First question?", "options": ["A", "B", "C", "D"], "answer": 0}
{"question": "Second question?", "options": ["A", "B", "C", "D"], "answer": 1}
```

## Timer Feature

- Admins can set a timer for each question in the "Quiz Settings" section
- Default timer is 30 seconds per question
- Range: 5-300 seconds per question
- Timer is displayed during the quiz
- When time runs out, the correct answer is automatically highlighted
- Users can still select answers before time runs out

## Technical Details

- Uses a Node.js server with file-based JSON storage
- All data is stored persistently in the `data` directory
- RESTful API for communication between frontend and backend
- No external database required - works with built-in file system

## Browser Compatibility

Works on all modern browsers (Chrome, Firefox, Edge, Safari).

## Troubleshooting

If the application doesn't start:
1. Make sure Node.js is installed (https://nodejs.org/)
2. Try running the server manually with the command: `npm start`
3. If you still have issues, try the Python method using `start_quiz.bat`

Enjoy the quiz!