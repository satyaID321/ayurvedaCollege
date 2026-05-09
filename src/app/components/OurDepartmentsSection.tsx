import Link from "next/link";
import { ArrowRight } from "lucide-react";

const departments = [
  { name: "Kayachikitsa", sub: "Internal Medicine", emoji: "🫀", color: "#e05454", href: "/departments/kayachikitsa", desc: "Treatment of systemic diseases — diabetes, hypertension, liver disorders, arthritis and metabolic conditions." },
  { name: "Panchakarma", sub: "Detox & Rejuvenation", emoji: "🌿", color: "#4a7c3f", href: "/departments/panchakarma", desc: "Five-fold purification therapy for deep cleansing, detoxification and systemic rejuvenation of body and mind." },
  { name: "Shalya Tantra", sub: "Ayurvedic Surgery", emoji: "⚕️", color: "#7b5ea7", href: "/departments/shalya", desc: "Minimally invasive Ksharasutra, Agnikarma and Jalaukavacharana for ano-rectal and surgical disorders." },
  { name: "Stri Roga & Prasuti", sub: "Gynaecology", emoji: "🌸", color: "#c4683a", href: "/departments/stri-roga", desc: "Comprehensive women's health — PCOS, infertility, prenatal/postnatal care and menopausal disorders." },
  { name: "Shalakya Tantra", sub: "ENT & Ophthalmology", emoji: "👁️", color: "#3a7eb5", href: "/departments/shalakya", desc: "Netra Tarpana, Nasya and specialised therapies for eye, ear, nose and throat disorders." },
  { name: "Dantachikitsa", sub: "Oral Health", emoji: "🦷", color: "#3a9e8f", href: "/departments/dental", desc: "Ayurvedic dental care using Kavala Graha, Dantadhavana and herbal formulations for oral wellness." },
];

export default function Departments() {
  return (
    <section className="py-16 px-4" style={{ background: "var(--ayu-beige)" }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--ayu-gold)" }}>Our Specialities</p>
          <h2 className="section-title">Clinical Departments</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <Link key={dept.name} href={dept.href} className="ayu-card bg-white rounded-2xl p-6 group" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: `${dept.color}10` }}>
                  {dept.emoji}
                </div>
                <div>
                  <h3 className="font-bold text-base" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{dept.name}</h3>
                  <p className="text-xs font-semibold" style={{ color: dept.color }}>{dept.sub}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{dept.desc}</p>
              <div className="flex items-center gap-1 text-sm font-semibold transition-colors" style={{ color: dept.color }}>
                Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
