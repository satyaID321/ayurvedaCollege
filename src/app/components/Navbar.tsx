"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu, X, ChevronDown, PhoneCall, Stethoscope, Ambulance,
  Leaf, Heart, Package, ShoppingCart, Image as ImageIcon,
  Calendar, Megaphone, Award, Play,
  BookOpen, Microscope
} from "lucide-react";

type SubItem = { label: string; href: string; desc?: string };
type ChildMenu = { label: string; href?: string; icon?: React.ElementType; sub?: SubItem[] };
type MenuItem = { label: string; href?: string; icon?: React.ElementType; sub?: ChildMenu[] };

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    sub: [
      { label: "About Institution", href: "/about/institution" },
      { label: "About SVKM", href: "/about/svkm" },
      { label: "Vision & Mission", href: "/about/mission-vision" },
      { label: "President's Message", href: "/about/president" },
      { label: "Management", href: "/about/management" },
    ],
  },
  {
    label: "Hospital",
    sub: [
      { label: "Doctors", href: "/hospital/doctors" },
      {
        label: "Services Offered",
        sub: [
          { label: "Kayachikitsa", href: "/departments/kayachikitsa" },
          { label: "Shalya Tantra", href: "/departments/shalya" },
          { label: "Panchakarma", href: "/departments/panchakarma" },
        ],
      },
      { label: "Online Consulting", href: "/hospital/online-consultation" },
    ],
  },
  {
    label: "Disease",
    icon: Heart,
    sub: [
      { label: "Speciality-wise Diseases", href: "/disease/speciality-wise" },
      { label: "Arthritis & Joint Disorders", href: "/disease/arthritis" },
      { label: "Digestive Disorders", href: "/disease/digestive" },
      { label: "Skin Diseases", href: "/disease/skin" },
      { label: "Respiratory Disorders", href: "/disease/respiratory" },
      { label: "Neurological Disorders", href: "/disease/neurological" },
      { label: "Women's Health", href: "/disease/womens-health" },
      { label: "Lifestyle Diseases", href: "/disease/lifestyle" },
      { label: "Book Appointment by Disease", href: "/appointment" },
    ],
  },
  {
    label: "Treatment",
    icon: Leaf,
    sub: [
      { label: "All Treatments", href: "/treatments" },
      { label: "Panchakarma Therapy", href: "/treatments/panchakarma" },
      { label: "Ayurvedic Surgery", href: "/treatments/surgery" },
      { label: "Gynaecology & Obstetrics", href: "/treatments/gynaecology" },
      { label: "Ophthalmology (Shalakya)", href: "/treatments/ophthalmology" },
      { label: "Dental (Dantachikitsa)", href: "/treatments/dental" },
      { label: "Speciality Clinics", href: "/treatments/speciality-clinics" },
      { label: "Book Procedure Appointment", href: "/appointment" },
    ],
  },
  {
    label: "Packages",
    icon: Package,
    sub: [
      { label: "All Packages", href: "/packages" },
      { label: "Health Checkup – Male", href: "/packages/health-checkup-male" },
      { label: "Health Checkup – Female", href: "/packages/health-checkup-female" },
      { label: "Panchakarma Package", href: "/packages/panchakarma" },
      { label: "Weight Reduction Package", href: "/packages/weight-reduction" },
      { label: "Rejuvenating Package", href: "/packages/rejuvenation" },
      { label: "Skin & Beauty Package", href: "/packages/skin-beauty" },
      { label: "Offers & Discounts", href: "/packages/offers" },
    ],
  },
  {
    label: "Shop",
    icon: ShoppingCart,
    sub: [
      { label: "Ayurvedic Medicines", href: "/shop" },
      { label: "Health Products", href: "/shop/health-products" },
      { label: "Disease-wise Medicines", href: "/shop/disease-wise" },
      { label: "My Cart", href: "/shop/cart" },
    ],
  },
  {
    label: "Gallery",
    icon: ImageIcon,
    sub: [
      { label: "Hospital Gallery", href: "/gallery" },
      { label: "Department Photos", href: "/gallery/departments" },
      { label: "Procedure Videos", href: "/gallery/videos" },
      { label: "Staff & Wards", href: "/gallery/staff" },
    ],
  },
  {
    label: "Events & News",
    icon: Calendar,
    sub: [
      { label: "Upcoming Events", href: "/events" },
      { label: "News & Media", href: "/events/news" },
      { label: "CME & Conferences", href: "/events/cme" },
      { label: "Staff Training", href: "/events/training" },
      { label: "Camp Schedule", href: "/events/camps" },
    ],
  },
  {
    label: "Announcements",
    icon: Megaphone,
    sub: [
      { label: "New Consultant Welcome", href: "/announcements" },
      { label: "Employee of the Month", href: "/announcements/employee-month" },
      { label: "Package Offers", href: "/packages/offers" },
      { label: "Camp Schedules", href: "/events/camps" },
    ],
  },
  {
    label: "Achievements",
    icon: Award,
    sub: [
      { label: "Awards & Recognition", href: "/achievements" },
      { label: "Research Publications", href: "/research" },
      { label: "Accreditations", href: "/achievements/accreditations" },
    ],
  },
  {
    label: "Patient Stories",
    icon: Play,
    sub: [
      { label: "Video Testimonials", href: "/patient-stories" },
      { label: "Photo Testimonials", href: "/patient-stories/photo-testimonials" },
      { label: "Submit Feedback", href: "/feedback" },
    ],
  },
  {
    label: "Wellness Library",
    icon: BookOpen,
    sub: [
      { label: "Health Blogs", href: "/wellness" },
      { label: "Health Talks & Podcasts", href: "/wellness/podcasts" },
      { label: "YouTube Videos", href: "/wellness/videos" },
      { label: "Research Literature", href: "/research" },
    ],
  },
  { label: "Research", href: "/research", icon: Microscope },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeParent, setActiveParent] = useState<string | null>(null);
  const [activeChild, setActiveChild] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveParent(null);
        setActiveChild(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleParent = (menu: string) => {
    setActiveParent(activeParent === menu ? null : menu);
    setActiveChild(null);
  };
  const toggleChild = (menu: string) => setActiveChild(activeChild === menu ? null : menu);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Top bar */}
      <div className={`transition-all duration-300 ${scrolled ? "py-2" : "py-3"} bg-white/97 backdrop-blur-md border-b border-amber-100 shadow-sm`}>
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="hidden lg:flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              {/* <div className="relative">
                <Image src="/images/hospital_logo.png" alt="Hospital Logo" width={70} height={70} className="h-[65px] w-auto" priority />
              </div> */}
              <div className="leading-tight">
                <p className="text-xs font-semibold" style={{ color: "var(--ayu-gold)" }}>SVKM&apos;s</p>
                <p className="text-base font-bold leading-tight" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>
                  Smt. Krutiben Bhupeshbhai Patel
                </p>
                <p className="text-sm font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>
                  Multispeciality Ayurveda Hospital &amp; Research Centre
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex gap-6 text-sm">
              <a href="tel:7045517269" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="p-2 rounded-full" style={{ background: "rgba(74,124,63,0.1)" }}>
                  <PhoneCall size={15} style={{ color: "var(--ayu-green)" }} />
                </div>
                <div>
                  <p className="font-semibold text-xs text-gray-500">OPD Appointment</p>
                  <p className="font-bold" style={{ color: "var(--ayu-forest)" }}>7045517269</p>
                </div>
              </a>
              <a href="tel:9920747327" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="p-2 rounded-full" style={{ background: "rgba(74,124,63,0.1)" }}>
                  <Stethoscope size={15} style={{ color: "var(--ayu-green)" }} />
                </div>
                <div>
                  <p className="font-semibold text-xs text-gray-500">Diagnostic Center</p>
                  <p className="font-bold" style={{ color: "var(--ayu-forest)" }}>99207 47327</p>
                </div>
              </a>
              <a href="tel:02224278888" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="p-2 rounded-full bg-red-50">
                  <Ambulance size={15} className="text-red-600" />
                </div>
                <div>
                  <p className="font-semibold text-xs text-red-500">Emergency 24/7</p>
                  <p className="font-bold text-red-600">022 2427 8888</p>
                </div>
              </a>
            </div>

            {/* SVKM Logo */}
            <div className="flex items-center gap-3">
              <Link href="/appointment" className="btn-primary text-sm">
                Book Appointment
              </Link>
              <a href="https://svkm.ac.in" target="_blank" rel="noreferrer">
                <Image src="/images/svkm-logo.png" width={60} height={60} alt="SVKM Logo" className="h-12 w-auto" />
              </a>
            </div>
          </div>

          {/* Mobile header */}
          <div className="lg:hidden flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/images/hospital_logo.png" alt="Logo" width={50} height={50} className="h-[48px] w-auto" />
              <div>
                <p className="text-xs font-semibold" style={{ color: "var(--ayu-gold)" }}>SVKM&apos;s</p>
                <p className="text-sm font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Smt. KBP Ayurveda Hospital</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a href="tel:7045517269" className="p-2 rounded-full" style={{ background: "rgba(74,124,63,0.1)" }}>
                <PhoneCall size={18} style={{ color: "var(--ayu-green)" }} />
              </a>
              <button className="p-2 rounded-full" style={{ background: "rgba(74,124,63,0.1)" }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={20} style={{ color: "var(--ayu-forest)" }} /> : <Menu size={20} style={{ color: "var(--ayu-forest)" }} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav ref={dropdownRef} style={{ background: "linear-gradient(135deg, var(--ayu-forest) 0%, #3a6e34 50%, #2d5a27 100%)" }} className="shadow-lg">
        <div className="max-w-screen-xl mx-auto px-4">
          <ul className="hidden lg:flex items-center flex-wrap gap-0">
            {menuItems.map((menu) => (
              <li key={menu.label} className="relative">
                {menu.sub ? (
                  <>
                    <button
                      onClick={() => toggleParent(menu.label)}
                      className={`flex items-center gap-1 px-3 py-3.5 text-sm font-medium transition-all duration-200 hover:text-amber-300 ${activeParent === menu.label ? "text-amber-300 bg-white/10" : "text-white/90"}`}
                    >
                      {menu.icon && <menu.icon size={13} />}
                      {menu.label}
                      <ChevronDown size={12} className={`transition-transform duration-200 ${activeParent === menu.label ? "rotate-180" : ""}`} />
                    </button>

                    {activeParent === menu.label && (
                      <ul className="absolute top-full left-0 mt-1 min-w-[220px] dropdown-glass shadow-2xl animate-fadeIn z-50">
                        {menu.sub.map((sub) => (
                          <li key={sub.label} className="relative">
                            {(sub as ChildMenu).sub ? (
                              <>
                                <button
                                  onClick={() => toggleChild(sub.label)}
                                  className="flex justify-between items-center w-full px-4 py-2.5 text-sm hover:bg-green-50 transition-colors"
                                  style={{ color: "var(--ayu-forest)" }}
                                >
                                  {sub.label}
                                  <ChevronDown size={13} className={`transition-transform ${activeChild === sub.label ? "rotate-180" : ""}`} />
                                </button>
                                {activeChild === sub.label && (
                                  <ul className="absolute left-full top-0 min-w-[200px] dropdown-glass shadow-2xl">
                                    {(sub as ChildMenu).sub!.map((child) => (
                                      <li key={child.label}>
                                        <Link href={child.href} className="block px-4 py-2.5 text-sm hover:bg-green-50 transition-colors" style={{ color: "var(--ayu-forest)" }}>
                                          {child.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
                            ) : (
                              <Link href={(sub as SubItem).href || "#"} className="block px-4 py-2.5 text-sm hover:bg-green-50 transition-colors" style={{ color: "var(--ayu-forest)" }}>
                                {sub.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={menu.href || "#"}
                    className="flex items-center gap-1 px-3 py-3.5 text-sm font-medium text-white/90 hover:text-amber-300 transition-all duration-200"
                  >
                    {menu.icon && <menu.icon size={13} />}
                    {menu.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden max-h-[75vh] overflow-y-auto" style={{ background: "var(--ayu-forest)" }}>
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.sub ? (
                  <button
                    onClick={() => toggleParent(item.label)}
                    className="flex items-center justify-between w-full px-5 py-3 text-white/90 border-b border-white/10 text-sm font-medium"
                  >
                    <span className="flex items-center gap-2">
                      {item.icon && <item.icon size={14} />}
                      {item.label}
                    </span>
                    <ChevronDown size={14} className={`transition-transform ${activeParent === item.label ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="flex items-center gap-2 px-5 py-3 text-white/90 border-b border-white/10 text-sm font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon && <item.icon size={14} />}
                    {item.label}
                  </Link>
                )}
                {item.sub && activeParent === item.label && (
                  <div style={{ background: "rgba(0,0,0,0.2)" }}>
                    {item.sub.map((sub) => (
                      <Link
                        key={sub.label}
                        href={(sub as SubItem).href || "#"}
                        className="block px-8 py-2.5 text-white/75 hover:text-amber-300 text-sm border-b border-white/5"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        — {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="p-4 border-t border-white/20">
              <Link href="/appointment" className="btn-gold w-full text-center block" onClick={() => setMobileMenuOpen(false)}>
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
