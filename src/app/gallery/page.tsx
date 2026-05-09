import PageHeroSection from "@/app/components/PageHeroSection";
import { Image as ImageIcon, Play, Users, Building } from "lucide-react";

const categories = [
  { label: "Hospital Exterior", count: 12, icon: Building },
  { label: "OPD & Departments", count: 28, icon: Building },
  { label: "Procedures & Therapy", count: 35, icon: Users },
  { label: "Dedicated Staff", count: 20, icon: Users },
  { label: "Wards & Amenities", count: 15, icon: Building },
  { label: "Events & Camps", count: 40, icon: ImageIcon },
];

// Colour placeholders since we don't have real images
const colors = ["#2d5a27", "#4a7c3f", "#7ba05b", "#c8973a", "#e8b45a", "#c4683a", "#7b5ea7", "#3a7eb5", "#3a9e8f", "#6b4c2a", "#2d5a27", "#4a7c3f"];

export default function GalleryPage() {
  return (
    <>
      <PageHeroSection
        title="Hospital Gallery"
        subtitle="A visual tour of our hospital, departments, trained staff, procedures and wellness events."
        breadcrumb={[{ label: "Gallery", href: "/gallery" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto">
          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            <button className="px-5 py-2 rounded-full text-sm font-semibold text-white" style={{ background: "var(--ayu-forest)" }}>All</button>
            {categories.map((c) => (
              <button key={c.label} className="px-5 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 hover:border-green-300 transition-colors" style={{ color: "var(--ayu-forest)" }}>
                {c.label} <span className="text-gray-400">({c.count})</span>
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-12">
            {colors.map((c, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden cursor-pointer group" style={{ aspectRatio: i % 5 === 0 ? "4/3" : "1/1" }}>
                <div className="w-full h-full flex items-center justify-center" style={{ background: `${c}20`, border: `2px solid ${c}30` }}>
                  <ImageIcon size={32} style={{ color: c, opacity: 0.5 }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `${c}85` }}>
                  <div className="text-center text-white">
                    <ImageIcon size={24} className="mx-auto mb-1" />
                    <p className="text-xs">View Photo</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Procedure Videos</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {["Panchakarma Abhyanga", "Shirodhara Therapy", "Basti Procedure", "Kizhi Treatment", "Netra Tarpana", "Ksharasutra"].map((title, i) => (
                <div key={title} className="ayu-card rounded-xl overflow-hidden bg-white" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                  <div className="relative h-40 flex items-center justify-center" style={{ background: `${colors[i % colors.length]}15` }}>
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                      <Play size={22} style={{ color: colors[i % colors.length] }} fill={colors[i % colors.length]} />
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="font-semibold text-sm" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">Educational • 3–8 min</p>
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
