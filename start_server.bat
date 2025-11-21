@echo off
echo ==========================================
echo Quiz Application Server
echo ==========================================
echo.
echo This script will start the Node.js server for the Quiz Application.
echo.
echo Prerequisites:
echo - Node.js must be installed on your system
echo - If not installed, download it from https://nodejs.org/
echo.
echo Instructions:
echo 1. This script will automatically install dependencies
echo 2. Then it will start the server on port 3000
echo 3. Once running, open your browser and go to http://localhost:3000
echo.
echo Press any key to continue...
pause
echo.
echo Installing dependencies...
npm install
echo.
echo Starting Quiz Server...
echo Server will be available at http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
npm start