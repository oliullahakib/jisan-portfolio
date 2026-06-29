"use client";

import { useState } from "react";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate API submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section
      className="w-full px-6 md:px-16 lg:px-24 py-20"
      style={{ background: "#faf9f6" }}
    >
      {/* Heading */}
      <div className="flex flex-col items-center mb-12 justify-center">
        <h2
          className="text-4xl md:text-5xl font-black text-center tracking-tight mb-4"
          style={{ color: "#111" }}
        >
          <span style={{ color: "#ff7a1a" }}>*</span>Contact Me.
        </h2>
        <p className="text-sm text-gray-500 font-medium text-center max-w-md">
          Have an idea or project? Let&apos;s talk and make it happen together.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-12">
        {/* Info Column (Left 2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h3 className="text-xl font-bold text-dark-charcoal text-center">
            Reach Out Direct
          </h3>

          <div className="flex flex-col gap-4">
            {/* Phone Card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-black/5 bg-white shadow-xs hover:border-black hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-orange-50 shrink-0">
                <PhoneIcon />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Call Me</h4>
                <a href="tel:+8801700000000" className="text-sm font-extrabold text-dark-charcoal hover:text-primary transition-colors">
                  +880 1700-000000
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-black/5 bg-white shadow-xs hover:border-black hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-orange-50 shrink-0">
                <MailIcon />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Me</h4>
                <a href="mailto:contact@jisan.com" className="text-sm font-extrabold text-dark-charcoal hover:text-primary transition-colors">
                  contact@jisan.com
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-black/5 bg-white shadow-xs hover:border-black hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-orange-50 shrink-0">
                <MapPinIcon />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Location</h4>
                <span className="text-sm font-extrabold text-dark-charcoal">
                  Kushtia, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
