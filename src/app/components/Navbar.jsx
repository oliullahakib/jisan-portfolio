"use client";

import { useState, useEffect, useCallback } from "react";

const navItems = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "about", label: "About", icon: AboutIcon },
  { id: "skills", label: "Skills", icon: SkillsIcon },
  { id: "education", label: "Education", icon: EducationIcon },
  { id: "certifications", label: "Certifications", icon: CertIcon },
  { id: "experience", label: "Experience", icon: ExpIcon },
  { id: "contact", label: "Contact", icon: ContactIcon },
];

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function SkillsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  );
}

function CertIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}

function ExpIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll helper
  const handleScroll = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset scroll height for mobile menu
      const offset = 64; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - (window.innerWidth < 768 ? offset : 0),
        behavior: "smooth"
      });
    }
  };

  // Active section tracking via Scroll Position Offset
  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollPos = window.scrollY + 200; // offset of 200px to detect early

      // Bottom check
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 150
      ) {
        setActiveSection("contact");
        return;
      }

      // Find the current active section by checking element offsets
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPos >= section.offsetTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Run once on load
    handleScrollEvent();

    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <>
      {/* ── DESKTOP SIDE NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 bottom-0 w-24 bg-[#faf9f6] border-r border-black/5 flex flex-col justify-between items-center py-8 z-40 hidden md:flex"
      >
        {/* Top Logo */}
        <div className="flex flex-col items-center select-none cursor-pointer" onClick={() => handleScroll("home")}>
          <span className="text-2xl font-black text-dark-charcoal">
            <span style={{ color: "#ff7a1a" }}>*</span>J.
          </span>
        </div>

        {/* Mid Navigation Links */}
        <div className="flex flex-col gap-6 w-full items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="group relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-all duration-300 active:scale-95"
                style={{
                  background: isActive ? "#FF9652" : "transparent",
                  color: isActive ? "#111" : "#888",
                  border: isActive ? "2px solid #111" : "2px solid transparent",
                  boxShadow: isActive ? "2.5px 2.5px 0px rgba(0,0,0,1)" : "none"
                }}
                aria-label={`Go to ${item.label}`}
              >
                <Icon />
                
                {/* Tooltip */}
                <div
                  className="absolute left-16 bg-black text-white text-xs px-2.5 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-bold whitespace-nowrap shadow-md z-50"
                  style={{ transform: "translateX(10px)" }}
                >
                  {item.label}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-black" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Socials or Branding */}
        <div className="text-[10px] text-gray-400 font-bold tracking-widest uppercase select-none rotate-270 mb-4">
          © 2026
        </div>
      </nav>

      {/* ── MOBILE TOP STICKY NAVBAR ── */}
      <header
        className="fixed top-0 left-0 right-0 h-16 bg-[#faf9f6]/90 backdrop-blur-md border-b border-black/5 flex items-center justify-between px-6 z-40 md:hidden"
      >
        <span className="text-xl font-black text-dark-charcoal cursor-pointer select-none" onClick={() => handleScroll("home")}>
          <span style={{ color: "#ff7a1a" }}>*</span>Jisan.
        </span>

        {/* Hamburger Menu Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex flex-col justify-center items-center w-8 h-8 rounded-full border border-black/10 bg-white cursor-pointer active:scale-90 transition-transform"
          aria-label="Toggle menu"
        >
          <span
            className="block w-4 h-0.5 bg-dark-charcoal transition-transform duration-300"
            style={{
              transform: isMobileMenuOpen ? "translateY(3px) rotate(45deg)" : "translateY(-2px)"
            }}
          />
          <span
            className="block w-4 h-0.5 bg-dark-charcoal mt-1 transition-transform duration-300"
            style={{
              transform: isMobileMenuOpen ? "translateY(-1px) rotate(-45deg)" : "translateY(2px)"
            }}
          />
        </button>
      </header>

      {/* ── MOBILE SLIDEOUT DRAWER ── */}
      <div
        className="fixed inset-0 z-30 md:hidden transition-all duration-300"
        style={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
          background: "rgba(0,0,0,0.4)"
        }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className="absolute right-0 top-0 bottom-0 w-64 bg-[#faf9f6] border-l border-black/5 py-20 px-6 flex flex-col gap-6 shadow-xl transition-transform duration-300 ease-out"
          style={{
            transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)"
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="flex items-center gap-4 w-full p-3 rounded-xl text-left cursor-pointer transition-colors duration-200"
                style={{
                  background: isActive ? "#FF9652" : "transparent",
                  color: "#111",
                  border: isActive ? "2.5px solid #111" : "2.5px solid transparent",
                  boxShadow: isActive ? "2px 2px 0px rgba(0,0,0,1)" : "none"
                }}
              >
                <div style={{ color: isActive ? "#111" : "#555" }}>
                  <Icon />
                </div>
                <span className="text-base font-bold">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
