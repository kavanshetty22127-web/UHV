@echo off
echo Opening Quiz Application...
echo.
echo The application will open in your default browser.
echo If it doesn't open automatically, please open index.html manually.
echo.
timeout /t 2 /nobreak >nul
start "" "index.html"