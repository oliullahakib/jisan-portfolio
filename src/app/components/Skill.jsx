"use client";

const skillTags = [
  "Content & Branding",
  "Growth Marketing",
  "Social Media & Strategy",
  "Analytics",
  "Marketing Strategy",
  "Brand Management",
  "Creative Campaign",
];

const toolGroups = [
  {
    title: "Marketing Strategy",
    icons: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyAGCO2aGztLXd1bDvc0pIvfikh6AHEp51kq-rB-QqbQ&s=10",
        alt: "Microsoft Word",
        bg: "#f5f5f5",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREgXT8Vfx0ELDF1WNo9g12d40UFqObZc84y39mSiWfBQ&s=10",
        alt: "Microsoft Excel",
        bg: "#f5f5f5",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJciARZIyUSoqfBLiTFd6v4LTO2sCdw6CDx83Spd3D3A&s=10",
        alt: "Microsoft Power Point",
        bg: "#f5f5f5",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbChaOBxVuUgIflfhUcE82pdAmUT2oSJ_Z9iPKi5NFXA&s=10",
        alt: "Canva",
        bg: "#f5f5f5",
      },
    ],
    bullets: [
      { label: "Microsoft Word", col: 1 },
      { label: "Microsoft Excel", col: 1 },
      { label: "Microsoft Power Point", col: 2 },
      { label: "Canva", col: 2 },
    ],
  },
  {
    title: "Ads & Growth",
    tools: [
      { name: "Adobe Creative Suite", icon: "" },
      { name: "CapCut", icon: "" },
      { name: "Figma", icon: "" },
    ],
    icons: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0buUjK-V4uEDBOERuyLCBy7oC5fzkiAluXk5NWMI7yA&s=10",
        alt: "Meta",
        bg: "#f5f5f5",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWXX4KLkRJcpB-gj4D4jR7Au3U-Oc3IrvE2E5kfcVmCQ&s=10",
        alt: "CapCut",
        bg: "#f5f5f5",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS87SGFb1KBWQEjg7dMvpL-U_B5IVLQDixUOUaONE-CYg&s=10",
        alt: "Google Ads",
        bg: "#f5f5f5",
      },
    ],
    bullets: [
      { label: "Meta", col: 1 },
      { label: "Google Ads", col: 1 },
      { label: "CapCut", col: 2 },
    ],
  },
];



function ToolIcon({ icon }) {
  if (icon.emoji === "meta") {
    return (
      <div
        className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center"
        style={{ background: "#1877F2" }}
      >
        <span style={{ color: "white", fontWeight: 700, fontSize: 18, fontFamily: "sans-serif", letterSpacing: 1 }}>
          Meta
        </span>
      </div>
    );
  }
  if (icon.emoji === "moe") {
    return (
      <div
        className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center"
        style={{ background: "#0a0a23" }}
      >
        <div className="flex flex-col items-center justify-center">
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#4fc3f7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: 18 }}>👤</span>
          </div>
          <span style={{ color: "white", fontSize: 9, marginTop: 2, fontWeight: 600 }}>moengage</span>
        </div>
      </div>
    );
  }
  return (
    <div
      className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center"
      style={{ background: icon.bg || "#f0f0f0" }}
    >
      <img
        src={icon.src}
        alt={icon.alt}
        className="w-10 h-10 object-contain"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
    </div>
  );
}

function ToolCard({ group }) {
  const col1 = group.bullets.filter((b) => b.col === 1);
  const col2 = group.bullets.filter((b) => b.col === 2);
  return (
    <div className="flex flex-col gap-4">
      {/* Icons row */}
      <div className="flex gap-3">
        {group.icons.map((icon, i) => (
          <ToolIcon key={i} icon={icon} />
        ))}
      </div>
      {/* Category label */}
      <div
        className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
        style={{ background: "#efefef", color: "#222", width: "fit-content" }}
      >
        {group.title}
      </div>
      {/* Bullets */}
      <div className="flex gap-8">
        <ul className="flex flex-col gap-1">
          {col1.map((b, i) => (
            <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-800">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "#ff7a1a" }}></span>
              {b.label}
            </li>
          ))}
        </ul>
        {col2.length > 0 && (
          <ul className="flex flex-col gap-1">
            {col2.map((b, i) => (
              <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-800">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "#ff7a1a" }}></span>
                {b.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const Skill = () => {
  return (
    <section
      className="w-full px-6 md:px-16 lg:px-24 py-20"
      style={{ background: "#faf9f6", fontFamily: "var(--font-sans, sans-serif)" }}
    >
      {/* ── SKILLS HEADING ── */}
      <div className="flex flex-col items-center mb-10">
        <h2
          className="text-5xl md:text-6xl font-black text-center tracking-tight mb-10"
          style={{ color: "#111" }}
        >
          <span style={{ color: "#ff7a1a" }}>*</span>Skills.
        </h2>
        {/* Skill tags */}
        <div className="flex flex-wrap justify-center gap-2 max-w-[60vw] mx-auto">
          {skillTags.map((tag, i) => (
            <span
              key={i}
              className="px-4 py-1.5 rounded-full border text-sm font-medium"
              style={{
                border: "1.5px solid #222",
                color: "#222",
                background: "transparent",
                fontFamily: "inherit",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── TOOLS HEADING ── */}
      <h2
        className="text-6xl md:text-7xl font-black mb-8 max-w-[60vw] mx-auto"
        style={{ color: "#111", letterSpacing: "-1px" }}
      >
        tools.
      </h2>

      {/* ── TOOLS ROW 1 ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 max-w-[60vw] mx-auto">
        
        {toolGroups.map((group, i) => (
          <ToolCard key={i} group={group} />
        ))}
      </div>
    </section>
  );
};

export default Skill;