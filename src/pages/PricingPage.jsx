import React, { useState } from "react";
import { Check, X, Zap, Shield, Clock, Wrench, Code, Crown, ArrowRight } from "lucide-react";

// YOUR OFFICIAL PAYPAL LINKS MAPPING
const PAYPAL_LINKS = {
  subscriptions: {
    mademan: {
      monthly: "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-8MY58314S2792274UNFMGPGY",
      annual: "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-0CR03041BB631015PNFVNZZI"
    },
    don: {
      monthly: "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-9CB76842GW6811206NFMGRPI",
      annual: "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-6X93734796458100DNFVNZCY"
    }
  },
  oneTime: {
    quickHit: "https://www.paypal.com/ncp/payment/ABDSZQ9DUARHJ",
    standardJob: "https://www.paypal.com/ncp/payment/WZJK7BRRRSB8W",
    heavyOp: "https://www.paypal.com/ncp/payment/YMHWTE7XG6TPU"
  }
};

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const tiers = [
    {
      id: "associate",
      name: "Associate",
      tagline: "AI Diagnosis Only",
      price: 0,
      icon: Shield,
      color: "#78716c",
      gradient: "linear-gradient(135deg, rgba(120, 113, 108, 0.3) 0%, rgba(68, 64, 60, 0.3) 100%)",
      features: [
        { text: "Chat with The Consigliere AI", included: true },
        { text: "Instant problem diagnosis", included: true },
        { text: "Basic troubleshooting steps", included: true },
        { text: "Learn what's wrong for free", included: true },
        { text: "Human support", included: false },
        { text: "Remote sessions", included: false },
        { text: "Phone/text support", included: false },
      ],
      scope: "AI diagnosis only - no hands-on fixes",
      cta: "Start Free",
      ctaLink: "/", // Free tier stays on site
      popular: false,
    },
    {
      id: "mademan",
      name: "Made Man",
      tagline: "Standard IT Support",
      price: billingCycle === "monthly" ? 49 : 470,
      savings: billingCycle === "annual" ? "Save $118/year" : null,
      icon: Wrench,
      color: "#d97706",
      gradient: "linear-gradient(135deg, rgba(217, 119, 6, 0.3) 0%, rgba(146, 64, 14, 0.3) 100%)",
      features: [
        { text: "Everything in Associate", included: true },
        { text: "Human IT support team", included: true },
        { text: "Email & phone lockout fixes", included: true },
        { text: "WiFi troubleshooting", included: true },
        { text: "Printer setup & connection", included: true },
        { text: "Phone/tablet basic support", included: true },
        { text: "Slow computer optimization", included: true },
        { text: "Remote support sessions", included: true },
        { text: "24-48 hour response time", included: true },
        { text: "Web development", included: false },
      ],
      scope: "Standard IT fixes only - no development work",
      cta: "Get Made Man",
      ctaLink: billingCycle === "monthly" ? PAYPAL_LINKS.subscriptions.mademan.monthly : PAYPAL_LINKS.subscriptions.mademan.annual,
      popular: true,
    },
    {
      id: "don",
      name: "Don",
      tagline: "Everything + Development",
      price: billingCycle === "monthly" ? 299 : 2870,
      savings: billingCycle === "annual" ? "Save $718/year" : null,
      icon: Crown,
      color: "#fbbf24",
      gradient: "linear-gradient(135deg, rgba(251, 191, 36, 0.4) 0%, rgba(217, 119, 6, 0.4) 100%)",
      features: [
        { text: "Everything in Made Man", included: true },
        { text: "Direct access to The HIT Man", included: true },
        { text: "Priority response (same-day)", included: true },
        { text: "Web development included", included: true },
        { text: "Custom automation & scripts", included: true },
        { text: "Advanced troubleshooting", included: true },
        { text: "Dedicated phone line", included: true },
        { text: "Text message support", included: true },
        { text: "Emergency after-hours", included: true },
        { text: "Tech consulting included", included: true },
      ],
      scope: "Full IT + development + priority access",
      cta: "Become The Don",
      ctaLink: billingCycle === "monthly" ? PAYPAL_LINKS.subscriptions.don.monthly : PAYPAL_LINKS.subscriptions.don.annual,
      popular: false,
      premium: true,
    },
  ];

  const payPerFix = [
    {
      name: "Quick Hit",
      price: 69,
      description: "Simple fixes under 30 minutes",
      examples: ["Password reset", "Email setup", "Software install"],
      icon: Zap,
      ctaLink: PAYPAL_LINKS.oneTime.quickHit
    },
    {
      name: "Standard Job",
      price: 99,
      description: "Most common IT problems",
      examples: ["Virus removal", "Printer fix", "PC optimization"],
      icon: Wrench,
      ctaLink: PAYPAL_LINKS.oneTime.standardJob
    },
    {
      name: "Heavy Operation",
      price: 199,
      description: "Complex multi-step fixes",
      examples: ["Data recovery", "Network setup", "System migration"],
      icon: Shield,
      ctaLink: PAYPAL_LINKS.oneTime.heavyOp
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "radial-gradient(ellipse at center, #1a0f0a 0%, #000000 70%)", position: "relative" }}>
      <div style={{ position: "fixed", top: "-50%", left: "-50%", width: "200%", height: "200%", background: "radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4" style={{ color: "#fbbf24" }}>Tech Support For Real People</h1>
          <p className="text-xl mb-6" style={{ color: "#d97706" }}>Choose your level of access to The HIT Man.</p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <button onClick={() => setBillingCycle("monthly")} className="px-6 py-2 rounded-lg font-semibold transition-all"
              style={{ background: billingCycle === "monthly" ? "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)" : "rgba(120, 113, 108, 0.3)", color: billingCycle === "monthly" ? "#000" : "#fbbf24", border: "2px solid #fbbf24" }}>
              Monthly
            </button>
            <button onClick={() => setBillingCycle("annual")} className="px-6 py-2 rounded-lg font-semibold transition-all"
              style={{ background: billingCycle === "annual" ? "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)" : "rgba(120, 113, 108, 0.3)", color: billingCycle === "annual" ? "#000" : "#fbbf24", border: "2px solid #fbbf24" }}>
              Annual (Save 20%)
            </button>
          </div>
        </div>

        {/* Subscription Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div key={tier.id} className="rounded-2xl p-8 relative flex flex-col justify-between" style={{ background: tier.gradient, border: tier.popular ? "3px solid #fbbf24" : "2px solid rgba(217, 119, 6, 0.4)" }}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={32} style={{ color: tier.color }} />
                    <h3 className="text-2xl font-bold" style={{ color: "#fbbf24" }}>{tier.name}</h3>
                  </div>
                  <div className="mb-6">
                    <span className="text-5xl font-bold" style={{ color: "#fbbf24" }}>${tier.price}</span>
                    {tier.price > 0 && <span style={{ color: "#d97706" }}>/{billingCycle === "monthly" ? "mo" : "yr"}</span>}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {f.included ? <Check size={20} style={{ color: "#10b981" }} /> : <X size={20} style={{ color: "#78716c" }} />}
                        <span style={{ color: f.included ? "#f5f5f4" : "#78716c" }}>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={tier.ctaLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-4 rounded-lg font-bold"
                  style={{ background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)", color: "#000" }}>{tier.cta}</a>
              </div>
            );
          })}
        </div>

        {/* Pay-Per-Fix */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-3" style={{ color: "#fbbf24" }}>Pay-Per-Fix</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {payPerFix.map((option) => (
            <div key={option.name} className="rounded-xl p-6 flex flex-col justify-between" style={{ background: "rgba(0, 0, 0, 0.7)", border: "2px solid rgba(217, 119, 6, 0.4)" }}>
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#fbbf24" }}>{option.name}</h3>
                <p className="text-3xl font-bold mb-4" style={{ color: "#fbbf24" }}>${option.price}</p>
                <ul className="space-y-2 mb-6 text-left">
                  {option.examples.map((ex, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "#f5f5f4" }}><Check size={14} style={{ color: "#10b981" }} />{ex}</li>
                  ))}
                </ul>
              </div>
              <a href={option.ctaLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 rounded-lg font-bold"
                style={{ border: "2px solid #fbbf24", color: "#fbbf24" }}>Buy {option.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}