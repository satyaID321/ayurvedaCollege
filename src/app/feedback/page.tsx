"use client";
import PageHeroSection from "@/app/components/PageHeroSection";
import { Star, Send, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <>
        <PageHeroSection title="Feedback" breadcrumb={[{ label: "Feedback", href: "/feedback" }]} />
        <section className="py-24 px-4 text-center" style={{ background: "var(--ayu-cream)" }}>
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🙏</span>
          </div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Thank You for Your Feedback!</h2>
          <p className="text-gray-600">Your response has been recorded. We deeply value your experience and will continue to improve our services.</p>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeroSection
        title="Patient Feedback"
        subtitle="Share your experience and help us serve you better."
        breadcrumb={[{ label: "Feedback", href: "/feedback" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-2xl mx-auto">
          {/* External review links */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { name: "Google Reviews", link: "#", icon: "🌐", count: "4.8 ⭐ (245)" },
              { name: "Practo", link: "#", icon: "🏥", count: "4.9 ⭐ (182)" },
              { name: "JustDial", link: "#", icon: "📱", count: "4.7 ⭐ (130)" },
            ].map((p) => (
              <a key={p.name} href={p.link} className="ayu-card bg-white rounded-xl p-4 text-center" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                <p className="text-2xl mb-1">{p.icon}</p>
                <p className="text-xs font-bold" style={{ color: "var(--ayu-forest)" }}>{p.name}</p>
                <p className="text-[10px] text-gray-400">{p.count}</p>
                <ExternalLink size={10} className="mx-auto mt-1 text-gray-300" />
              </a>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Submit Your Feedback</h2>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--ayu-forest)" }}>Patient Name *</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--ayu-forest)" }}>Mobile Number</label>
                  <input type="tel" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400" placeholder="10-digit mobile" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--ayu-forest)" }}>Treating Doctor</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400">
                  <option value="">Select Doctor</option>
                  <option>Dr. Aishwarya Kulkarni – Panchakarma</option>
                  <option>Dr. Ramesh Nair – Shalya Tantra</option>
                  <option>Dr. Preethi Venkat – Gynaecology</option>
                  <option>Dr. Suresh Joshi – Kayachikitsa</option>
                  <option>Dr. Meera Desai – Internal Medicine</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--ayu-forest)" }}>Overall Rating *</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setRating(s)}
                      onMouseEnter={() => setHover(s)}
                      onMouseLeave={() => setHover(0)}
                    >
                      <Star size={32} fill={(hover || rating) >= s ? "#c8973a" : "none"} stroke={(hover || rating) >= s ? "#c8973a" : "#d1d5db"} className="transition-colors" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--ayu-forest)" }}>Your Feedback *</label>
                <textarea rows={5} className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400 resize-none" placeholder="Share your experience about the treatment, staff, facilities..." />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--ayu-forest)" }}>Would you recommend us?</label>
                <div className="flex gap-4">
                  {["Yes, definitely", "Yes, probably", "Not sure", "No"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="radio" name="recommend" className="accent-green-600" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="btn-primary w-full justify-center text-base"
              >
                <Send size={16} /> Submit Feedback
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
