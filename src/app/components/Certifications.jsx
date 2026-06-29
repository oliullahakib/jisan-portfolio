"use client";

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

function CertCard({ cert }) {
  return (
    <div
      className="relative group rounded-2xl overflow-hidden"
      style={{ background: "#fff" }}
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
        {/* dwonlod button  */}
        <button
          className="flex items-center justify-center rounded-full transition-colors duration-300 cursor-pointer w-10 h-10 bg-primary/80"
         
          aria-label={`View ${cert.title}`}
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
          <CertCard key={i} cert={cert} />
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
    </section>
  );
};

export default Certifications;
