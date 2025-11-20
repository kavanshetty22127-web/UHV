# Gaming Quiz Challenge

A fun, interactive quiz web application with a gaming theme. Test your knowledge with 15 random questions each time you play!

## Features

- **Login System**: Users must enter their name to start playing
- **Special Admin Access**: Login as "ADMIN2007" to access the admin panel
- **Random Questions**: Each user gets 15 different questions per session
- **Session Management**: Users must re-login if they refresh or logout
- **Gaming Theme**: Unique UI with gaming-inspired design
- **Score Tracking**: See your results at the end of the quiz
- **Real-time Admin Panel**: Automatically updates when users login/logout
- **Leaderboard**: View all scores in a separate tab
- **Question Management**: Admins can add, view, and delete custom questions
- **Bulk Question Import**: Copy-paste format for adding multiple questions
- **Timer Feature**: Configurable timer for each question

## How to Run

### Option 1: Using Python (Recommended)
1. Make sure you have Python installed on your system
2. Double-click on `start_quiz.bat` to start the server
3. Open your browser and go to http://localhost:8000

### Option 2: Manual Method
1. Open Command Prompt or PowerShell
2. Navigate to this folder: `cd "g:\UHV quiz"`
3. Run: `python -m http.server 8000`
4. Open your browser and go to http://localhost:8000

### Option 3: Using Visual Studio Code
1. Open this folder in Visual Studio Code
2. Install the "Live Server" extension if you haven't already
3. Right-click on `index.html` and select "Open with Live Server"

## How to Play

1. **Login**: Enter your name on the login screen
2. **Special Admin Access**: Enter "ADMIN2007" to access the admin panel
3. **Quiz**: Answer 15 random questions (admin must add questions first)
4. **Timer**: Each question has a timer (default 30 seconds, configurable by admin)
5. **Scoring**: Each correct answer gives you 1 point
6. **Results**: See your final score at the end

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

- Uses localStorage to save registered users, custom questions, and timer settings
- Uses sessionStorage to manage current login sessions
- All data is stored locally in the browser
- No server-side processing required

## Browser Compatibility

Works on all modern browsers (Chrome, Firefox, Edge, Safari).

## Troubleshooting

If the application doesn't start:
1. Make sure Python is installed (https://www.python.org/downloads/)
2. Try running the server manually with the command: `python -m http.server 8000`
3. If you still have issues, open `index.html` directly in your browser (some features may not work)

Enjoy the quiz!