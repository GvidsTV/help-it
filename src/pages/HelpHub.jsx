import React, { useState } from "react";
import { Search, Mail, Wifi, Smartphone, Laptop, Video, Printer, Shield, HardDrive, ArrowRight, MessageSquare } from "lucide-react";

export default function HelpHub() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      id: "email-login",
      title: "Email & Account Issues",
      icon: Mail,
      description: "Can't log in, forgot password, account recovery, hacked email",
      color: "#ef4444",
      link: "/help/email-login",
      keywords: ["email", "gmail", "outlook", "password", "login", "account", "hacked", "locked out"],
    },
    {
      id: "phone-tablet",
      title: "Phone & Tablet Help",
      icon: Smartphone,
      description: "Storage full, can't download apps, slow phone, backup issues",
      color: "#3b82f6",
      link: "/help/phone-tablet",
      keywords: ["phone", "iphone", "android", "tablet", "ipad", "storage", "apps", "slow"],
    },
    {
      id: "wifi-internet",
      title: "WiFi & Internet",
      icon: Wifi,
      description: "Won't connect, slow internet, WiFi password, network problems",
      color: "#10b981",
      link: "/help/wifi-internet",
      keywords: ["wifi", "internet", "connection", "network", "slow", "password", "router"],
    },
    {
      id: "computer-slow",
      title: "Slow Computer Issues",
      icon: Laptop,
      description: "Computer running slow, won't turn on, frozen, updates",
      color: "#8b5cf6",
      link: "/help/slow-computer",
      keywords: ["computer", "laptop", "slow", "frozen", "windows", "mac", "update"],
    },
    {
      id: "video-calls",
      title: "Video Call Problems",
      icon: Video,
      description: "Zoom, Teams, camera not working, audio issues, screen sharing",
      color: "#f59e0b",
      link: "/help/video-calls",
      keywords: ["zoom", "teams", "video", "call", "camera", "microphone", "audio", "meeting"],
    },
    {
      id: "printer",
      title: "Printer Help",
      icon: Printer,
      description: "Won't connect, offline, paper jam, print quality, wireless setup",
      color: "#6366f1",
      link: "/help/printer-help",
      keywords: ["printer", "print", "scanner", "offline", "jam", "connection", "wireless"],
    },
    {
      id: "security",
      title: "Security Basics",
      icon: Shield,
      description: "Passwords, 2FA, scams, phishing, staying safe online",
      color: "#ec4899",
      link: "/help/security-basics",
      keywords: ["security", "password", "hack", "scam", "phishing", "virus", "2fa"],
    },
    {
      id: "backup-files",
      title: "Backup & Files",
      icon: HardDrive,
      description: "Cloud backup, file recovery, data loss, sync issues",
      color: "#14b8a6",
      link: "/help/backup-files",
      keywords: ["backup", "files", "cloud", "recovery", "lost", "sync", "storage"],
    },
  ];

  const commonProblems = [
    { text: "Can't log into Gmail", link: "/help/cant-log-into-gmail" },
    { text: "iPhone storage full", link: "/help/iphone-storage-full" },
    { text: "WiFi won't connect", link: "/help/wifi-wont-connect" },
    { text: "Computer running slow", link: "/help/slow-computer-fix" },
    { text: "Printer showing offline", link: "/help/printer-offline" },
    { text: "Zoom camera not working", link: "/help/zoom-camera-not-working" },
    { text: "Forgot password", link: "/help/forgot-password" },
    { text: "Email got hacked", link: "/help/email-hacked" },
  ];

  const filteredCategories = categories.filter((cat) =>
    searchQuery === "" ||
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div
      className="min-h-screen"
      style={{
        background: "radial-gradient(ellipse at center, #1a0f0a 0%, #000000 70%)",
        position: "relative",
      }}
    >
      {/* SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "IT Help & Tech Support Center",
          "description": "Get help with email, WiFi, phone issues, slow computers, printers, and more. Simple guides for everyday tech problems.",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": categories.map((cat, idx) => ({
              "@type": "ListItem",
              "position": idx + 1,
              "item": {
                "@type": "HowTo",
                "name": cat.title,
                "description": cat.description
              }
            }))
          }
        })}
      </script>

      {/* Background glow */}
      <div
        style={{
          position: "fixed",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Header */}
      

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Hero with Search */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4" style={{ color: "#fbbf24" }}>
            How Can We Help You Today?
          </h1>
          <p className="text-xl mb-8" style={{ color: "#d97706" }}>
            Simple guides for everyday tech problems. No jargon, just help.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search
                size={24}
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#d97706",
                }}
              />
              <input
                type="text"
                placeholder="Search for help... (e.g., 'gmail login', 'wifi password')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-xl text-lg"
                style={{
                  background: "rgba(0, 0, 0, 0.6)",
                  border: "2px solid rgba(217, 119, 6, 0.5)",
                  color: "#f5f5f4",
                  boxShadow: "0 0 20px rgba(217, 119, 6, 0.2)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Common Problems Quick Links */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#fbbf24" }}>
            Most Common Problems
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {commonProblems.map((problem, idx) => (
              <a
                key={idx}
                href={problem.link}
                className="p-4 rounded-lg text-center transition-all"
                style={{
                  background: "rgba(0, 0, 0, 0.6)",
                  border: "1px solid rgba(217, 119, 6, 0.3)",
                  color: "#f5f5f4",
                  fontSize: "15px",
                }}
              >
                {problem.text}
              </a>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#fbbf24" }}>
            Browse by Category
          </h2>

          {filteredCategories.length === 0 && (
            <div
              className="text-center p-12 rounded-xl"
              style={{
                background: "rgba(0, 0, 0, 0.6)",
                border: "2px solid rgba(217, 119, 6, 0.3)",
              }}
            >
              <p className="text-xl mb-4" style={{ color: "#d97706" }}>
                No results found for "{searchQuery}"
              </p>
              <p style={{ color: "#f5f5f4" }}>
                Try a different search term or browse all categories below.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 px-6 py-3 rounded-lg font-semibold"
                style={{
                  background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
                  color: "#000",
                }}
              >
                Clear Search
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCategories.map((category) => {
              const Icon = category.icon;
              return (
                <a
                  key={category.id}
                  href={category.link}
                  className="rounded-xl p-6 transition-all group"
                  style={{
                    background: "rgba(0, 0, 0, 0.7)",
                    border: "2px solid rgba(217, 119, 6, 0.4)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{
                      background: `rgba(${parseInt(category.color.slice(1, 3), 16)}, ${parseInt(category.color.slice(3, 5), 16)}, ${parseInt(category.color.slice(5, 7), 16)}, 0.2)`,
                      border: `2px solid ${category.color}`,
                    }}
                  >
                    <Icon size={28} style={{ color: category.color }} />
                  </div>

                  <h3 className="text-xl font-bold mb-2" style={{ color: "#fbbf24" }}>
                    {category.title}
                  </h3>
                  <p style={{ color: "#f5f5f4", fontSize: "14px", marginBottom: "12px" }}>
                    {category.description}
                  </p>

                  <div className="flex items-center gap-2" style={{ color: category.color }}>
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Still Need Help */}
        <div
          className="rounded-2xl p-12"
          style={{
            background: "linear-gradient(135deg, rgba(217, 119, 6, 0.3) 0%, rgba(146, 64, 14, 0.2) 100%)",
            border: "2px solid #fbbf24",
          }}
        >
          <div className="text-center">
            <MessageSquare size={64} style={{ color: "#fbbf24", margin: "0 auto 16px" }} />
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#fbbf24" }}>
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8" style={{ color: "#f5f5f4" }}>
              Talk to The Consigliere AI or get personal help from a real person.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all"
                style={{
                  background: "rgba(120, 113, 108, 0.5)",
                  color: "#fbbf24",
                  border: "2px solid rgba(217, 119, 6, 0.5)",
                }}
              >
                <MessageSquare size={20} />
                Try AI Chat (Free)
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all"
                style={{
                  background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
                  color: "#000",
                  boxShadow: "0 0 20px rgba(251, 191, 36, 0.4)",
                }}
              >
                Get Personal Help
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Who We Help */}
        <div className="mt-16">
          <div
            className="rounded-xl p-8"
            style={{
              background: "rgba(0, 0, 0, 0.7)",
              border: "2px solid rgba(217, 119, 6, 0.4)",
            }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: "#fbbf24" }}>
              Tech Support for Real People
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-bold mb-2" style={{ color: "#fbbf24" }}>
                  No Jargon
                </h3>
                <p style={{ color: "#f5f5f4", fontSize: "15px" }}>
                  We explain everything in plain English. No confusing tech terms.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2" style={{ color: "#fbbf24" }}>
                  No Judgment
                </h3>
                <p style={{ color: "#f5f5f4", fontSize: "15px" }}>
                  No question is too simple. We're patient and treat everyone like family.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2" style={{ color: "#fbbf24" }}>
                  No BS
                </h3>
                <p style={{ color: "#f5f5f4", fontSize: "15px" }}>
                  Honest pricing. Real solutions. We actually fix your problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="relative z-10 border-t py-8 mt-16"
        style={{
          background: "rgba(0, 0, 0, 0.9)",
          borderTopColor: "rgba(217, 119, 6, 0.3)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-3" style={{ color: "#fbbf24" }}>Quick Links</h4>
              <ul className="space-y-2" style={{ fontSize: "14px" }}>
                <li><a href="/" style={{ color: "#d97706" }}>Home</a></li>
                <li><a href="/pricing" style={{ color: "#d97706" }}>Pricing</a></li>
                <li><a href="/help" style={{ color: "#d97706" }}>Help Center</a></li>
                <li><a href="/contact" style={{ color: "#d97706" }}>Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3" style={{ color: "#fbbf24" }}>Popular Help Topics</h4>
              <ul className="space-y-2" style={{ fontSize: "14px" }}>
                <li><a href="/help/email-login" style={{ color: "#d97706" }}>Email Issues</a></li>
                <li><a href="/help/wifi-internet" style={{ color: "#d97706" }}>WiFi Problems</a></li>
                <li><a href="/help/phone-tablet" style={{ color: "#d97706" }}>Phone Help</a></li>
                <li><a href="/help/slow-computer" style={{ color: "#d97706" }}>Slow Computer</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3" style={{ color: "#fbbf24" }}>Support</h4>
              <ul className="space-y-2" style={{ fontSize: "14px" }}>
                <li><a href="/help/remote-support" style={{ color: "#d97706" }}>Remote Support Guide</a></li>
                <li><a href="tel:407-504-1287" style={{ color: "#d97706" }}>Call: 407-504-1287</a></li>
                <li><a href="mailto:support@helpitapp.com" style={{ color: "#d97706" }}>Email Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3" style={{ color: "#fbbf24" }}>Hours</h4>
              <ul className="space-y-1" style={{ fontSize: "14px", color: "#f5f5f4" }}>
                <li>Mon-Fri: 9am-6pm EST</li>
                <li>Saturday: 10am-4pm EST</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8 border-t" style={{ borderTopColor: "rgba(217, 119, 6, 0.2)" }}>
            <p style={{ color: "#78716c", fontSize: "14px" }}>
              © 2025 Help IT. Just call the HIT Man. We'll take care of IT.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
