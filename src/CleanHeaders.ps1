# CleanHeaders.ps1
# Removes page-specific <header>...</header> blocks from src/pages
# so only the shared SiteHeader is used.

$pagesPath = "C:\Users\gvids\OneDrive\Documents\help-it\src\pages"

Write-Host "Scanning JSX files in $pagesPath`n"

# Regex pattern:
# (?s) => singleline mode (dot matches newlines)
# <header ...> ... </header> => any header block
$pattern = '(?s)<header[^>]*>.*?</header>'

Get-ChildItem -Path $pagesPath -Filter *.jsx | ForEach-Object {
    # Skip HomePage.jsx (already using SiteHeader correctly)
    if ($_.Name -eq 'HomePage.jsx') {
        Write-Host "Skipping $($_.FullName) (Home page already cleaned).`n"
        return
    }

    $file = $_.FullName
    Write-Host "Processing $($file)..."

    # Read file
    $original = Get-Content -Path $file -Raw

    # Backup with timestamp
    $timestamp = Get-Date -Format "yyyyMMddHHmmss"
    $backupPath = "$file.bak_$timestamp"
    Copy-Item -Path $file -Destination $backupPath -Force
    Write-Host "  Backup created: $backupPath"

    # Remove all <header>...</header> blocks
    $modified = [System.Text.RegularExpressions.Regex]::Replace(
        $original,
        $pattern,
        "",
        [System.Text.RegularExpressions.RegexOptions]::Singleline
    )

    if ($modified -ne $original) {
        Set-Content -Path $file -Value $modified -NoNewline
        Write-Host "  Header block(s) removed.`n"
    }
    else {
        Write-Host "  No <header> block found (file left unchanged).`n"
    }
}

Write-Host "Done. Restart your dev server if needed, then refresh the browser."
