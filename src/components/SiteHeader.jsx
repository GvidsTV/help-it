import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Emergency Banner - Full Width */}
      <div
        className="relative z-20"
        style={{
          background: "linear-gradient(90deg, #d97706 0%, #b45309 100%)",
          borderBottom: "2px solid #fbbf24",
          padding: "12px 20px",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span style={{ fontSize: "20px" }}>⚡</span>
            <p className="font-bold" style={{ color: "#000", fontSize: "16px" }}>
              IT PROBLEM RIGHT NOW?
            </p>
            <p style={{ color: "#000", fontSize: "15px" }}>
              Text "HIT" to{" "}
              <a
                href="tel:407-504-1287"
                style={{ color: "#000", textDecoration: "underline", fontWeight: "700" }}
              >
                407-504-1287
              </a>{" "}
              or email{" "}
              <a
                href="mailto:support@helpitapp.com"
                style={{ color: "#000", textDecoration: "underline", fontWeight: "700" }}
              >
                support@helpitapp.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Header with Navigation */}
      <header
        className="relative z-10 border-b"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 100%)",
          borderBottomColor: "rgba(217, 119, 6, 0.3)",
          borderBottomWidth: "2px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <h1
                style={{
                  fontSize: "32px",
                  fontWeight: "900",
                  color: "#fbbf24",
                  letterSpacing: "2px",
                }}
              >
                HELP IT
              </h1>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a
                href="/"
                style={{
                  color: "#fbbf24",
                  fontWeight: "700",
                  fontSize: "16px",
                  textTransform: "uppercase",
                }}
              >
                HOME
              </a>
              <a
                href="/pricing"
                style={{
                  color: "#fbbf24",
                  fontWeight: "700",
                  fontSize: "16px",
                  textTransform: "uppercase",
                }}
              >
                PRICING
              </a>
              <a
                href="/setup"
                style={{
                  color: "#fbbf24",
                  fontWeight: "700",
                  fontSize: "16px",
                  textTransform: "uppercase",
                }}
              >
                SETUP
              </a>
              <a
                href="/help"
                style={{
                  color: "#fbbf24",
                  fontWeight: "700",
                  fontSize: "16px",
                  textTransform: "uppercase",
                }}
              >
                HELP
              </a>
              <a
                href="/contact"
                style={{
                  color: "#fbbf24",
                  fontWeight: "700",
                  fontSize: "16px",
                  textTransform: "uppercase",
                }}
              >
                CONTACT
              </a>
              <a
                href="/pricing"
                className="px-6 py-3 rounded-lg font-bold transition-all"
                style={{
                  background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
                  color: "#000",
                  boxShadow: "0 0 20px rgba(251, 191, 36, 0.4)",
                  textTransform: "uppercase",
                  fontSize: "14px",
                }}
              >
                JOIN THE FAMILY
              </a>
            </nav>

            {/* Mobile Navigation - HELP + JOIN + Menu */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="/help"
                className="px-4 py-2 rounded-lg font-bold text-sm"
                style={{
                  background: "rgba(217, 119, 6, 0.3)",
                  color: "#fbbf24",
                  border: "2px solid rgba(217, 119, 6, 0.5)",
                  textTransform: "uppercase",
                }}
              >
                HELP
              </a>
              <a
                href="/pricing"
                className="px-4 py-2 rounded-lg font-bold text-sm"
                style={{
                  background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
                  color: "#000",
                  textTransform: "uppercase",
                }}
              >
                JOIN
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
                style={{ color: "#fbbf24" }}
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div
              className="lg:hidden mt-4 rounded-lg"
              style={{
                background: "rgba(0, 0, 0, 0.9)",
                border: "2px solid rgba(217, 119, 6, 0.4)",
              }}
            >
              <nav className="flex flex-col">
                <a
                  href="/"
                  className="px-6 py-4 border-b"
                  style={{
                    color: "#fbbf24",
                    fontWeight: "700",
                    borderBottomColor: "rgba(217, 119, 6, 0.3)",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HOME
                </a>
                <a
                  href="/pricing"
                  className="px-6 py-4 border-b"
                  style={{
                    color: "#fbbf24",
                    fontWeight: "700",
                    borderBottomColor: "rgba(217, 119, 6, 0.3)",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  PRICING
                </a>
                <a
                  href="/setup"
                  className="px-6 py-4 border-b"
                  style={{
                    color: "#fbbf24",
                    fontWeight: "700",
                    borderBottomColor: "rgba(217, 119, 6, 0.3)",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SETUP
                </a>
                <a
                  href="/help"
                  className="px-6 py-4 border-b"
                  style={{
                    color: "#fbbf24",
                    fontWeight: "700",
                    borderBottomColor: "rgba(217, 119, 6, 0.3)",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HELP
                </a>
                <a
                  href="/contact"
                  className="px-6 py-4"
                  style={{
                    color: "#fbbf24",
                    fontWeight: "700",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTACT
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
