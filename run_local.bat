@echo off
echo Updating image manifest...
python update_images.py
echo Starting local server at http://localhost:8000...
echo Close this window to stop the server.
python -m http.server 8000
pause
