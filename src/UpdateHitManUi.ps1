# UpdateHitManUi.ps1
# Run from: C:\Users\gvids\OneDrive\Documents\help-it\src
# 1) Updates SiteHeader.jsx so JOIN buttons go to /pricing
# 2) Rewrites ContactPage.jsx with a Netlify form

Write-Host "=== HIT MAN UI UPDATE SCRIPT ===`n"

$srcRoot = $PSScriptRoot
$componentsDir = Join-Path $srcRoot "components"
$pagesDir = Join-Path $srcRoot "pages"

$siteHeaderPath = Join-Path $componentsDir "SiteHeader.jsx"
$contactPagePath = Join-Path $pagesDir "ContactPage.jsx"

if (!(Test-Path $siteHeaderPath)) {
    Write-Host "ERROR: SiteHeader.jsx not found at $siteHeaderPath" -ForegroundColor Red
} else {
    Write-Host "Updating SiteHeader.jsx..." -ForegroundColor Cyan

    # Backup
    $timestamp = Get-Date -Format "yyyyMMddHHmmss"
    $siteHeaderBackup = "$siteHeaderPath.bak_$timestamp"
    Copy-Item $siteHeaderPath $siteHeaderBackup
    Write-Host "  Backup created: $siteHeaderBackup"

    $content = Get-Content $siteHeaderPath -Raw

    # This is the CONTACT nav line we want to KEEP as /contact
    $originalContactLine = '<a href="/contact" style={linkStyle}>CONTACT</a>'
    $placeholder = '__HITMAN_CONTACT_LINK__'

    if ($content -notlike "*$originalContactLine*") {
        Write-Host "  WARNING: Could not find the exact CONTACT nav line. No changes made to SiteHeader.jsx." -ForegroundColor Yellow
    } else {
        # Temporarily hide the CONTACT link
        $content = $content -replace [regex]::Escape($originalContactLine), $placeholder

        # Now change ALL remaining /contact links (JOIN buttons) → /pricing
        $content = $content -replace 'href="/contact"', 'href="/pricing"'

        # Restore the CONTACT nav link
        $content = $content -replace [regex]::Escape($placeholder), $originalContactLine

        Set-Content $siteHeaderPath -Value $content -Encoding UTF8
        Write-Host "  SiteHeader.jsx updated (JOIN buttons now point to /pricing)." -ForegroundColor Green
    }
}

if (!(Test-Path $pagesDir)) {
    Write-Host "ERROR: Pages directory not found at $pagesDir" -ForegroundColor Red
    exit
}

# Update ContactPage.jsx with Netlify form
Write-Host "`nUpdating ContactPage.jsx with Netlify form..." -ForegroundColor Cyan

if (Test-Path $contactPagePath) {
    $timestamp = Get-Date -Format "yyyyMMddHHmmss"
    $contactBackup = "$contactPagePath.bak_$timestamp"
    Copy-Item $contactPagePath $contactBackup
    Write-Host "  Backup created: $contactBackup"
}

$contactJsx = @'
import React from "react";
import SiteHeader from "../components/SiteHeader";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main
        className="min-h-screen"
        style={{
          background: "radial-gradient(ellipse at center, #1a0f0a 0%, #000000 70%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h1
            className="text-3xl font-bold mb-4"
            style={{ color: "#fbbf24", letterSpacing: "1px" }}
          >
            Contact The HIT Man
          </h1>
          <p className="mb-8 text-sm" style={{ color: "#d97706" }}>
            Tell us what&apos;s going on and we&apos;ll take care of it like family.
          </p>

          {/* Netlify form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-6"
            style={{
              background: "rgba(0,0,0,0.75)",
              border: "2px solid rgba(217, 119, 6, 0.4)",
              borderRadius: "16px",
              padding: "24px",
              boxShadow: "0 0 30px rgba(217,119,6,0.25)",
            }}
          >
            {/* Required hidden fields for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label
                className="block mb-2 text-sm font-semibold"
                style={{ color: "#fbbf24" }}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded"
                style={{
                  background: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(217,119,6,0.6)",
                  color: "#f5f5f4",
                }}
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-semibold"
                style={{ color: "#fbbf24" }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded"
                style={{
                  background: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(217,119,6,0.6)",
                  color: "#f5f5f4",
                }}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-semibold"
                style={{ color: "#fbbf24" }}
              >
                Phone (optional)
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-2 rounded"
                style={{
                  background: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(217,119,6,0.6)",
                  color: "#f5f5f4",
                }}
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-semibold"
                style={{ color: "#fbbf24" }}
              >
                How can we help?
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 rounded"
                style={{
                  background: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(217,119,6,0.6)",
                  color: "#f5f5f4",
                }}
                placeholder="Describe your IT problem in plain English..."
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-lg font-bold"
              style={{
                background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
                color: "#000",
                boxShadow: "0 0 20px rgba(251,191,36,0.4)",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Send to The HIT Man
            </button>

            <p className="text-xs mt-3" style={{ color: "#a16207" }}>
              Once you submit, we&apos;ll review your message and reply to your email.
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
'@

Set-Content $contactPagePath -Value $contactJsx -Encoding UTF8
Write-Host "  ContactPage.jsx updated with Netlify contact form." -ForegroundColor Green

Write-Host "`n=== DONE. Restart 'netlify dev' and refresh your browser. ===" -ForegroundColor Cyan
