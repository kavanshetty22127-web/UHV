@echo off
echo ==========================================
echo Quiz Application - Direct Browser Mode
echo ==========================================
echo.
echo This script will start a simple HTTP server using Python.
echo.
echo Prerequisites:
echo - Python must be installed on your system
echo - If not installed, download it from https://www.python.org/downloads/
echo.
echo Alternative:
echo - You can also directly open index.html in your browser
echo - Double-click on open_quiz.bat to do this automatically
echo.
echo Instructions:
echo 1. This script will start a server on port 8000
echo 2. Once running, open your browser and go to http://localhost:8000
echo 3. Press Ctrl+C to stop the server
echo.
echo Press any key to continue...
pause
echo.
echo Starting HTTP Server...
echo Server will be available at http://localhost:8000
echo Press Ctrl+C to stop the server
echo.
python -m http.server 8000