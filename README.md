# Quiz Application

## How to Run the Application

### Option 1: Direct Browser Opening (No Server Required)
1. Simply open `index.html` in your web browser
2. The application will work with localStorage for data storage
3. All functionality will be available except cross-device synchronization

### Option 2: With Node.js Server (For Cross-Device Support)
1. Install Node.js from https://nodejs.org/
2. Open a terminal/command prompt
3. Navigate to this directory
4. Run `npm install` to install dependencies
5. Run `npm start` to start the server
6. Open your browser and go to http://localhost:3000

### Option 3: With Python Server (Alternative)
1. Install Python from https://www.python.org/downloads/
2. Open a terminal/command prompt
3. Navigate to this directory
4. Run `python -m http.server 8000`
5. Open your browser and go to http://localhost:8000

## Features
- Real-time leaderboard updates
- Admin panel for managing questions and users
- Responsive design for both PC and mobile devices
- Cross-device support when running with a server

## Admin Access
- Username: ADMIN2007
- This will take you directly to the admin panel

## Data Storage
- When running without a server: Uses localStorage
- When running with Node.js server: Uses JSON files in the `data` directory