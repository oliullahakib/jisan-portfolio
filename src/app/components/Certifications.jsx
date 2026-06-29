"use client";

import { useState, useEffect, useCallback } from "react";

const certifications = [
  {
    title: "Business Communication ",
    issuer: "HP LIFE",
    image: "https://media.licdn.com/dms/image/v2/D562DAQGxVFoAXq5hRw/profile-treasury-image-shrink_8192_8192/B56Zx.2p13HgAg-/0/1771654783442?e=1783306800&v=beta&t=xv_MzCe0JL0T_hP-EAJ9-5dv4UUvOAWWmx-UYfXunNs",
  },
  {
    title: "Human Resource Management ",
    issuer: "UniAthena",
    image: "https://media.licdn.com/dms/image/v2/D562DAQEXWXj6d4Lc8g/profile-treasury-image-shrink_480_480/B56Zx.1owJKgAM-/0/1771654517336?e=1783306800&v=beta&t=BSO_Az6k36n1tG_8gg8E_lsik-fXLBTwHZ0JxKoPkvI",
  },
  {
    title: "Critical Thinking in AI Era",
    issuer: "HP LIFE",
    image: "https://media.licdn.com/dms/image/v2/D562DAQGcgXS8vnPvPA/profile-treasury-image-shrink_480_480/B56Zx.2c68JQAM-/0/1771654731124?e=1783306800&v=beta&t=meyDV6F6mEMTJeKlxA6MGBgbGYuI2UbGtFyZod-ptJM",
  },
  {
    title: "Critical Thinking in AI Era",
    issuer: "HP LIFE",
    image: "https://media.licdn.com/dms/image/v2/D562DAQGcgXS8vnPvPA/profile-treasury-image-shrink_480_480/B56Zx.2c68JQAM-/0/1771654731124?e=1783306800&v=beta&t=meyDV6F6mEMTJeKlxA6MGBgbGYuI2UbGtFyZod-ptJM",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

/* ── Shared download helper ── */
async function downloadImage(cert) {
  try {
    const response = await fetch(cert.image);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${cert.title.trim().replace(/\s+/g, "_")}_certificate.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch {
    window.open(cert.image, "_blank");
  }
}

function DownloadIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

/* ── Modal ── */
function ImageModal({ cert, onClose }) {
  // Close on Escape key
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const handleDownload = (e) => {
    e.stopPropagation();
    downloadImage(cert);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0, 0, 0, 0.85)" }}
      onClick={onClose}
    >
      {/* Close button – top right */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-colors duration-200"
        style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
        aria-label="Close modal"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Image container */}
      <div
        className="relative max-w-4xl w-[90vw] max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
        />

        {/* Download button – bottom right */}
        <button
          onClick={handleDownload}
          className="absolute bottom-0 -right-20 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 hover:scale-105"
          style={{ background: "#ff7a1a", color: "#fff", border: "none" }}
          aria-label="Download image"
        >
          <DownloadIcon />
          Download
        </button>
      </div>
    </div>
  );
}

/* ── Card ── */
function CertCard({ cert, onClick }) {
  return (
    <div
      className="relative group rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: "#fff" }}
      onClick={() => onClick(cert)}
    >
      {/* Lime accent tab behind card */}
      <div
        className="absolute -top-2 -right-2 w-20 h-20 rounded-xl z-0"
        style={{ background: "#d4f53c" }}
      />

      {/* Image */}
      <div className="relative z-10 rounded-2xl overflow-hidden">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card footer */}
      <div className="relative z-10 flex items-center justify-between px-4 py-4">
        <div>
          <h3
            className="text-base font-bold"
            style={{ color: "#111" }}
          >
            {cert.title}
          </h3>
          <p className="text-sm" style={{ color: "#888" }}>
            {cert.issuer}
          </p>
        </div>
        {/* download button  */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            downloadImage(cert);
          }}
          className="flex items-center justify-center rounded-full transition-colors duration-300 cursor-pointer w-10 h-10 bg-primary/80"
          aria-label={`Download ${cert.title}`}
        >
          <div className="rotate-135">
            <ArrowIcon />
          </div>
        </button>
      </div>
    </div>
  );
}

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      className="w-full px-6 md:px-16 lg:px-24 "
      style={{ background: "#faf9f6" }}
    >
      {/* Top label */}
      <div className="flex flex-col items-center mb-4">
       <h2
          className="text-5xl md:text-6xl font-black text-center tracking-tight mb-5"
          style={{ color: "#111" }}
        >
          <span style={{ color: "#ff7a1a" }}>*</span>Licenses & Certifications.
        </h2>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto my-10">
        {certifications.map((cert, i) => (
          <CertCard key={i} cert={cert} onClick={setSelectedCert} />
        ))}
      </div>

      {/* Divider + See More */}
      <div className="max-w-6xl mx-auto flex items-center justify-between pt-6 border-t border-gray-200">
        <div />
        <button

          className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 cursor-pointer"
          style={{
            background: "#d4f53c",
            color: "#111",
            border: "none",
          }}
        >
          See More Certifications
          <CheckIcon />
        </button>
      </div>

      {/* Modal */}
      {selectedCert && (
        <ImageModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  );
};

export default Certifications;
