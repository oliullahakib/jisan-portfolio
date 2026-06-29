"use client";
import Image from "next/image";

const experiences = [
  {
    company: "Youth School for Social Entrepreneurs (YSSE)",
    title: "Intern",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEdiwqsa9hb5g/company-logo_100_100/B56Zaml4K5HUAU-/0/1746551670961/ysseglobal_logo?e=1784160000&v=beta&t=MZNMYhHS3ta3c-znykTN_zTLC8QSeMZXgCsW2h2Df18",
    jobTitle: "Lead Products Designer",
    type: "Full Time",
    description: "Created and managed content for social media platforms. Scheduled posts and monitored audience engagement. Analyzed social media performance metrics to improve outreach and branding.",
    period: "Started job Jun 2026 - Present",
    highlighted: false,
  },
  {
    company: "Bangladesh National Cadet Corps",
    title: "Cadet",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGR2PBDD8WufQ/company-logo_100_100/B4DZp3UbWIIMAQ-/0/1762938435785/bangladeshncc_logo?e=1784160000&v=beta&t=2mYsIg6XMiDnLFIekWQVRNYMZHkCs6HMnzzdxpmDovE",
    jobTitle: "Lead Products Designer",
    type: "Full Time",
    description: "Created and managed content for social media platforms. Scheduled posts and monitored audience engagement. Analyzed social media performance metrics to improve outreach and branding.",
    period: "Started job Jan 2026 - Present ",
    highlighted: false,
  },
  {
    company: "Shokher Sodai",
    title: "Social Media Manager",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Fplx7kkQjCPLMm9BpTZv6gBGxvn8gf1jbyzH4LSETg&s=10",
    jobTitle: "Lead Products Designer",
    type: "Full Time",
    description: "Created and managed content for social media platforms. Scheduled posts and monitored audience engagement. Analyzed social media performance metrics to improve outreach and branding.",
    period: "Started job Apr 2022 - Oct 2023 ",
    highlighted: false,
  },
];

function CalendarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

const Experience = () => {
  return (
    <section
      className="w-full px-6 md:px-16 lg:px-24 "
      style={{ background: "#faf9f6" }}
    >
       <div>
          {/* Top label */}
          <div className="flex flex-col items-center mb-4">
            <h2
              className="text-4xl md:text-5xl font-black text-center tracking-tight"
              style={{ color: "#111" }}
            >
              <span style={{ color: "#ff7a1a" }}>*</span>Experiance.
            </h2>
          </div>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto py-4">
        {experiences.map((exp, idx) => {
          return (
            <div
              key={idx}
              className="relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 group border border-black/5 bg-white shadow-xs hover:bg-primary hover:text-white hover:border-black hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:scale-[1.02] cursor-pointer"
            >
              <div>
                {/* Header: Logo, Company & Location */}
                <div className="flex items-start gap-3 mb-4">
                  <Image src={exp.logo} alt={exp.company} width={50} height={50} />
                  <div>
                    <h3 className="font-extrabold text-lg leading-none">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">

                      <span className="text-xs  font-medium">
                        {exp.company}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-6 transition-all duration-300"
                >
                  {exp.description}
                </p>
              </div>

              {/* Footer */}
              <div
                className="flex items-center gap-2 p-2.5 rounded-2xl w-full border bg-gray-50  border-gray-100 group-hover:bg-black/90 group-hover:text-white group-hover:border-transparent transition-all duration-300"
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center bg-white shadow-sm group-hover:bg-white/10 group-hover:shadow-none transition-all duration-300"
                >
                  <CalendarIcon />
                </div>
                <span className="text-[11px] font-bold">{exp.period}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom decorative border line */}
      <div className="max-w-6xl mx-auto border-t border-gray-200 mt-12 pt-6" />
    </section>
  );
};

export default Experience;
