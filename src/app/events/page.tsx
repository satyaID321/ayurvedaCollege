import PageHeroSection from "@/app/components/PageHeroSection";
import Link from "next/link";
import { MapPin, Clock, ArrowRight, Users } from "lucide-react";

const events = [
  { title: "Free Arthritis & Joint Pain Camp", date: "25 May 2026", time: "9:00 AM – 1:00 PM", location: "OPD Hall, SVKM Campus, Vile Parle", type: "Health Camp", color: "#e05454", desc: "Free consultation, X-ray and Panchakarma demonstration for arthritis patients." },
  { title: "CME: Advances in Ksharasutra", date: "10 Jun 2026", time: "10:00 AM – 4:00 PM", location: "Conference Hall, SVKM Ayurveda", type: "CME", color: "#3a7eb5", desc: "Continuing Medical Education for Shalya Tantra specialists on modern Ksharasutra techniques." },
  { title: "World Yoga Day Celebration", date: "21 Jun 2026", time: "6:30 AM – 9:00 AM", location: "Hospital Lawn, Vile Parle", type: "Event", color: "#4a7c3f", desc: "Public yoga session, pranayama workshop and Ayurvedic breakfast — open to all." },
  { title: "Free Diabetic Screening Camp", date: "5 Jul 2026", time: "8:00 AM – 2:00 PM", location: "Community Centre, Andheri West", type: "Health Camp", color: "#c8973a", desc: "Free blood sugar testing, HbA1c, diet counselling and Ayurvedic medicine samples." },
  { title: "Interdepartmental Staff Training", date: "15 Jul 2026", time: "2:00 PM – 5:00 PM", location: "Seminar Hall", type: "Training", color: "#7b5ea7", desc: "Hands-on training session on Panchakarma procedures for nursing and para-medical staff." },
  { title: "International Ayurveda Conference", date: "8–9 Aug 2026", time: "9:00 AM – 6:00 PM", location: "SVKM Auditorium", type: "Conference", color: "#3a9e8f", desc: "National and international Ayurvedic physicians presenting research and clinical experiences." },
];

const news = [
  { title: "Hospital Awarded Best Ayurveda Institution 2025 by AIMA", date: "Mar 2026", excerpt: "SVKM's Krutiben Bhupeshbhai Patel Hospital receives prestigious recognition from All India Medical Association for excellence in Ayurvedic care." },
  { title: "New Panchakarma Wing Inaugurated", date: "Feb 2026", excerpt: "A state-of-the-art 20-bed dedicated Panchakarma ward opened by Honourable Health Minister to serve patients with enhanced comfort." },
  { title: "Research Paper Published in Journal of Ayurveda", date: "Jan 2026", excerpt: "Dr. Priya Sharma's research on Ksharasutra in Fistula-in-Ano management published in a peer-reviewed international journal." },
];


export default function EventsPage() {
  return (
    <>
      <PageHeroSection
        title="Events, News & Media"
        subtitle="Stay connected with our latest health camps, CME programs, events and hospital news."
        breadcrumb={[{ label: "Events & News", href: "/events" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Events */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Upcoming Events & Camps</h2>
              <div className="space-y-5">
                {events.map((e) => (
                  <div key={e.title} className="ayu-card bg-white rounded-xl p-5 flex gap-4" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                    <div className="flex-shrink-0 w-14 text-center">
                      <div className="rounded-xl py-2 px-1" style={{ background: `${e.color}15` }}>
                        <p className="text-lg font-bold leading-tight" style={{ color: e.color, fontFamily: "var(--font-heading)" }}>{e.date.split(" ")[0]}</p>
                        <p className="text-xs" style={{ color: e.color }}>{e.date.split(" ").slice(1).join(" ")}</p>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{e.title}</h3>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: `${e.color}15`, color: e.color }}>{e.type}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{e.desc}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1"><Clock size={11} /> {e.time}</span>
                        <span className="flex items-center gap-1"><MapPin size={11} /> {e.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* News sidebar */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>News & Media</h2>
              <div className="space-y-4">
                {news.map((n) => (
                  <div key={n.title} className="bg-white rounded-xl p-4 ayu-card" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                    <p className="text-xs font-semibold mb-1" style={{ color: "var(--ayu-gold)" }}>{n.date}</p>
                    <h3 className="font-bold text-sm mb-2" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{n.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{n.excerpt}</p>
                    <button className="mt-2 text-xs font-semibold flex items-center gap-1" style={{ color: "var(--ayu-green)" }}>
                      Read more <ArrowRight size={11} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl p-5 text-white" style={{ background: "linear-gradient(135deg, var(--ayu-forest), var(--ayu-green))" }}>
                <Users size={24} className="mb-2" style={{ color: "var(--ayu-amber)" }} />
                <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>Organise a Camp?</h3>
                <p className="text-sm text-white/80 mb-3">We partner with RWAs, corporates and institutions for health awareness camps.</p>
                <Link href="/contact" className="btn-gold text-sm inline-flex items-center gap-1">Contact Us <ArrowRight size={14} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
