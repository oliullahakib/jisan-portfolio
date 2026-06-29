"use client";

import { useCallback } from "react";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nahid-ahmed-jisan-812a44354/",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
  },
];

const footerLinks = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Education", target: "education" },
  { label: "Certifications", target: "certifications" },
  { label: "Experience", target: "experience" },
];

export default function Footer() {
  const handleScroll = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 64;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - (window.innerWidth < 768 ? offset : 0),
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <footer
      className="w-full px-6 md:px-16 lg:px-24 py-16 border-t border-black/5"
      style={{ background: "#faf9f6" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top CTA Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-dark-charcoal tracking-tight mb-3">
              Let&apos;s Create Something <span style={{ color: "#ff7a1a" }}>*</span>Different.
            </h2>
            <p className="text-sm md:text-base text-gray-500 font-medium max-w-md">
              Open for branding, social media strategy consultation, campaigns, and full-time opportunities.
            </p>
          </div>
          <a
            href="mailto:mkt.nahidahmed@gmail.com "
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold border-2 border-black transition-all cursor-pointer shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-primary active:translate-y-0.5 active:shadow-[1px_1px_0px_rgba(0,0,0,1)] w-fit h-fit"
          >
            Get In Touch
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>

        {/* Middle Links and Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-black/5">
          {/* Logo & Pitch */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-black text-dark-charcoal">
              <span style={{ color: "#ff7a1a" }}>*</span>Jisan.
            </span>
            <p className="text-xs text-gray-400 font-medium leading-relaxed max-w-xs">
              Exceptional Marketer, Brand Strategist & Social Media Manager focused on growth and user-centric branding.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Sections
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => handleScroll(link.target)}
                  className="text-sm text-gray-600 hover:text-primary text-left cursor-pointer transition-colors duration-200 font-bold"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social connections */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Social Links
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-black/10 bg-white text-gray-600 hover:text-[#111] hover:border-black/35 hover:scale-105 active:scale-95 transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-gray-400">
          <span>&copy; {new Date().getFullYear()} Jisan. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Made with <span style={{ color: "#ff7a1a" }}>❤</span> for branding.
          </span>
        </div>
      </div>
    </footer>
  );
}
