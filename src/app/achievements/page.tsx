import PageHeroSection from "@/app/components/PageHeroSection";
import { Award, Star, BookOpen, Shield } from "lucide-react";

const awards = [
  { year: "2025", title: "Best Ayurveda Hospital – Western India", body: "All India Ayurveda Medical Association (AIMA)", desc: "Recognised for clinical excellence, patient outcomes and research contributions." },
  { year: "2024", title: "Excellence in Panchakarma Services", body: "Ministry of AYUSH, Government of India", desc: "Awarded for maintaining highest standards of authentic Panchakarma practice." },
  { year: "2024", title: "Green Hospital Certification", body: "Maharashtra Pollution Control Board", desc: "For sustainable practices, waste management and eco-friendly hospital operations." },
  { year: "2023", title: "Best Teaching Hospital", body: "MUHS (Maharashtra University of Health Sciences)", desc: "Outstanding contribution to undergraduate and postgraduate Ayurvedic education." },
  { year: "2023", title: "Digital Health Innovation Award", body: "NITI Aayog Health Sector", desc: "For implementing tele-consultation and digital patient records in Ayurvedic practice." },
  { year: "2022", title: "Research Excellence Award", body: "National Academy of Ayurveda", desc: "For publication of 15+ peer-reviewed research papers on Ksharasutra and Panchakarma." },
];

const publications = [
  { title: "Clinical Study on Ksharasutra in Fistula-in-Ano", authors: "Dr. R. Nair, Dr. P. Sharma", journal: "Journal of Ayurveda & Integrative Medicine, 2025", impact: "IF: 2.8" },
  { title: "Efficacy of Panchakarma in Rheumatoid Arthritis", authors: "Dr. A. Kulkarni, Dr. M. Desai", journal: "Ancient Science of Life, 2024", impact: "IF: 1.5" },
  { title: "Rasayana Therapy in Age-related Cognitive Decline", authors: "Dr. S. Joshi et al.", journal: "Journal of Ethnopharmacology, 2024", impact: "IF: 5.4" },
  { title: "Shatavari in PCOS Management — Randomized Trial", authors: "Dr. P. Venkat, Dr. K. Nair", journal: "Phytomedicine, 2023", impact: "IF: 6.7" },
];

export default function AchievementsPage() {
  return (
    <>
      <PageHeroSection
        title="Awards & Achievements"
        subtitle="Recognitions, honours and research publications that reflect our commitment to excellence in Ayurvedic healthcare."
        breadcrumb={[{ label: "Achievements", href: "/achievements" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto space-y-16">
          {/* Awards */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award size={28} style={{ color: "var(--ayu-gold)" }} />
              <h2 className="text-3xl font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Awards & Honours</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((a) => (
                <div key={a.title} className="ayu-card bg-white rounded-2xl p-6" style={{ border: "1px solid rgba(200,151,58,0.2)" }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(200,151,58,0.1)" }}>
                      <Award size={22} style={{ color: "var(--ayu-gold)" }} />
                    </div>
                    <span className="text-sm font-bold px-3 py-1 rounded-full" style={{ background: "rgba(200,151,58,0.1)", color: "var(--ayu-gold)" }}>{a.year}</span>
                  </div>
                  <h3 className="font-bold mb-1" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{a.title}</h3>
                  <p className="text-xs font-semibold mb-2" style={{ color: "var(--ayu-gold)" }}>{a.body}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Accreditations */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Shield size={24} style={{ color: "var(--ayu-gold)" }} />
              <h2 className="text-2xl font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Accreditations & Affiliations</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["MUHS Affiliated", "Ministry of AYUSH", "NABH Accredited", "ISO 9001:2015", "CCIM Recognized", "NAAC A Grade", "WHO GMP Compliant", "Green Hospital"].map((item) => (
                <div key={item} className="bg-white rounded-xl p-4 text-center ayu-card" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                  <Star size={20} className="mx-auto mb-2" style={{ color: "var(--ayu-gold)" }} />
                  <p className="text-sm font-semibold" style={{ color: "var(--ayu-forest)" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Research Publications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen size={24} style={{ color: "var(--ayu-gold)" }} />
              <h2 className="text-2xl font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Research Publications</h2>
            </div>
            <div className="space-y-4">
              {publications.map((p) => (
                <div key={p.title} className="bg-white rounded-xl p-5 ayu-card" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold mb-1" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{p.title}</h3>
                      <p className="text-sm text-gray-500 mb-1">{p.authors}</p>
                      <p className="text-sm" style={{ color: "var(--ayu-green)" }}>{p.journal}</p>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 rounded-full flex-shrink-0" style={{ background: "rgba(74,124,63,0.1)", color: "var(--ayu-green)" }}>{p.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
