@echo off
echo ===================================================
echo Starting Citident Website Preview...
echo ===================================================
echo.
echo Modern browsers require a local server to view applications.
echo Starting the server on port 8080...
echo.
echo Opening browser...
start http://localhost:8080

echo Press Ctrl+C to stop the server.
npx -y serve . -p 8080
