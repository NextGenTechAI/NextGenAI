@echo off
setlocal enabledelayedexpansion

echo =====================================================================
echo           NextGenAI - GitHub Pages Automated Deployment
echo =====================================================================
echo.

cd /d "%~dp0"

echo [1/3] Adding files to git...
git add -A

echo.
echo [2/3] Creating deployment commit...
git commit -m "Deploy NextGenAI website to GitHub Pages"

echo.
echo [3/3] Pushing to GitHub...
git branch -M main
git push -u origin main

echo.
echo =====================================================================
echo Deployment push finished!
echo.
echo NOTE:
echo 1. If your GitHub repository is named "nextgentechai.github.io":
echo    Your website will be live at: https://nextgentechai.github.io/
echo.
echo 2. If your GitHub repository is named "NextGenTechAI":
echo    Your website will be live at: https://nextgentechai.github.io/NextGenTechAI/
echo.
echo In GitHub Repository Settings:
echo   - Go to: Settings -^> Pages
echo   - Under "Build and deployment" -^> Source:
echo     Select "GitHub Actions" (or "Deploy from a branch" -^> main / root)
echo =====================================================================
pause

