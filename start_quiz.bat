@echo off
echo Starting Gaming Quiz Application...
echo Make sure you have Python installed on your system.
echo If you don't have Python, please download it from https://www.python.org/downloads/
echo.
echo If you get an error, try running this command manually:
echo cd "g:\UHV quiz" && python -m http.server 8000
echo.
echo Once the server starts, open your browser and go to http://localhost:8000
echo.
echo Press any key to start the server...
pause
cd "g:\UHV quiz" && python -m http.server 8000