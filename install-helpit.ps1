# ========================================
# HELPIT AUTO-INSTALL SCRIPT
# Complete implementation in one command
# ========================================

Write-Host ""
Write-Host " HELPIT COMPLETE SYSTEM INSTALLER" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Yellow
Write-Host ""

# Check if we're in the right directory
if (-Not (Test-Path "package.json")) {
    Write-Host " ERROR: Run this from your help-it project folder!" -ForegroundColor Red
    Write-Host "   Current location: $(Get-Location)" -ForegroundColor Red
    Write-Host "   Expected: C:\Users\gvids\OneDrive\Documents\help-it" -ForegroundColor Red
    exit
}

Write-Host " Found package.json - correct location!" -ForegroundColor Green
Write-Host ""

# Define source (Downloads) and destination
$downloadsPath = "$env:USERPROFILE\Downloads"
$pagesPath = "src\pages"

# List of page files to copy
$pageFiles = @(
    "EmailLoginHelp.jsx",
    "PhoneTabletHelp.jsx",
    "SlowComputerHelp.jsx",
    "VideoCallsHelp.jsx",
    "PrinterHelp.jsx",
    "SecurityBasicsHelp.jsx",
    "BackupFilesHelp.jsx",
    "CantLoginGmail.jsx",
    "HomePage-FINAL.jsx"
)

Write-Host " STEP 1: Checking Downloaded Files..." -ForegroundColor Cyan
Write-Host ""

$missingFiles = @()
foreach ($file in $pageFiles) {
    if (Test-Path "$downloadsPath\$file") {
        Write-Host "   Found $file" -ForegroundColor Green
    } else {
        Write-Host "   Missing $file" -ForegroundColor Red
        $missingFiles += $file
    }
}

if ($missingFiles.Count -gt 0) {
    Write-Host ""
    Write-Host " ERROR: Missing files in Downloads folder!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please download these files from Claude first:" -ForegroundColor Yellow
    foreach ($file in $missingFiles) {
        Write-Host "  - $file" -ForegroundColor Yellow
    }
    Write-Host ""
    Write-Host "Then run this script again." -ForegroundColor Yellow
    exit
}

Write-Host ""
Write-Host " STEP 2: Creating Backups..." -ForegroundColor Cyan
Write-Host ""

$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"

# Backup existing files
if (Test-Path "src\App.jsx") {
    Copy-Item "src\App.jsx" "src\App.jsx.backup_$timestamp"
    Write-Host "   Backed up App.jsx" -ForegroundColor Green
}

if (Test-Path "src\pages\HomePage.jsx") {
    Copy-Item "src\pages\HomePage.jsx" "src\pages\HomePage.jsx.backup_$timestamp"
    Write-Host "   Backed up HomePage.jsx" -ForegroundColor Green
}

Write-Host ""
Write-Host " STEP 3: Copying New Files..." -ForegroundColor Cyan
Write-Host ""

# Copy all page files
foreach ($file in $pageFiles) {
    if ($file -eq "HomePage-FINAL.jsx") {
        # Copy HomePage-FINAL.jsx as HomePage.jsx
        Copy-Item "$downloadsPath\$file" "$pagesPath\HomePage.jsx" -Force
        Write-Host "   Installed HomePage.jsx (mobile menu updated!)" -ForegroundColor Green
    } else {
        Copy-Item "$downloadsPath\$file" "$pagesPath\$file" -Force
        Write-Host "   Installed $file" -ForegroundColor Green
    }
}

# Copy App.jsx
if (Test-Path "$downloadsPath\App.jsx") {
    Copy-Item "$downloadsPath\App.jsx" "src\App.jsx" -Force
    Write-Host "   Installed App.jsx (complete router)" -ForegroundColor Green
}

Write-Host ""
Write-Host " STEP 4: Testing Build..." -ForegroundColor Cyan
Write-Host ""

npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host " BUILD FAILED!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Common fixes:" -ForegroundColor Yellow
    Write-Host "  1. Make sure all files downloaded correctly" -ForegroundColor Gray
    Write-Host "  2. Check file names match exactly (case-sensitive)" -ForegroundColor Gray
    Write-Host "  3. Run: npm install" -ForegroundColor Gray
    Write-Host ""
    Write-Host "If you need help, paste the error above to Claude." -ForegroundColor Yellow
    exit
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host " INSTALLATION COMPLETE!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host " Installed:" -ForegroundColor Cyan
Write-Host "  - 8 Pillar Pages (complete help sections)" -ForegroundColor White
Write-Host "  - 1 High-Intent Page (Gmail login)" -ForegroundColor White
Write-Host "  - Updated HomePage (HELP + JOIN mobile menu)" -ForegroundColor White
Write-Host "  - Complete Router (all routes configured)" -ForegroundColor White
Write-Host ""
Write-Host " NEXT STEPS:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Test locally:" -ForegroundColor White
Write-Host "   netlify dev" -ForegroundColor Yellow
Write-Host ""
Write-Host "2. Check these pages:" -ForegroundColor White
Write-Host "   - http://localhost:8888/" -ForegroundColor Gray
Write-Host "   - http://localhost:8888/help" -ForegroundColor Gray
Write-Host "   - http://localhost:8888/help/email-login" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Deploy to production:" -ForegroundColor White
Write-Host "   git add ." -ForegroundColor Yellow
Write-Host "   git commit -m ""Added complete help system""" -ForegroundColor Yellow
Write-Host "   git push" -ForegroundColor Yellow
Write-Host ""
Write-Host " YOU'RE READY TO LAUNCH!" -ForegroundColor Green
Write-Host ""
