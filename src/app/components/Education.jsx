const educationData = [
  {
    year: "2024 – Present",
    title: "Bachelor of Business Administration - BBA",
    institution: "Jashore University of Science and Technology",
  },
  {
    year: "2022-2023",
    title: "HSC, Business Studies ",
    institution: "Kushtia Government College ",
  },
];

const Education = () => {
  return (
    <section
      className="w-full px-6 md:px-16 lg:px-24 py-20"
      style={{ background: "#faf9f6" }}
    >
        {/* Top label */}
      <div className="flex flex-col items-center mb-4">
       <h2
          className="text-4xl md:text-5xl font-black text-center tracking-tight mb-5"
          style={{ color: "#111" }}
        >
          <span style={{ color: "#ff7a1a" }}>*</span>Education.
        </h2>
      </div>

      {/* Timeline */}
      <div className="max-w-[40vw] lg:mx-auto flex flex-col">
        {educationData.map((item, index) => (
          <div key={index} className="flex items-start gap-0">
            {/* Dot + vertical line */}
            <div className="flex flex-col items-center" style={{ minWidth: 20 }}>
              {/* Green dot */}
              <span
                className="block rounded-full"
                style={{
                  width: 12,
                  height: 12,
                  background: "#FF791B",
                  marginTop: 6,
                  flexShrink: 0,
                }}
              />
              {/* Vertical line */}
              {index < educationData.length - 1 && (
                <span
                  className="block bg-[#FF791B] grow w-1 min-h-20 h-40"
                />
              )}
            </div>

            {/* Year */}
            <div
              className="text-sm font-medium pl-6"
              style={{
                color: "#666",
                minWidth: 140,
                paddingTop: 4,
                flexShrink: 0,
              }}
            >
              {item.year}
            </div>

            {/* Title + Institution */}
            <div className="pl-4 pb-10">
              <h3
                className="text-base md:text-lg font-bold"
                style={{ color: "#111", marginBottom: 4 }}
              >
                {item.title}
              </h3>
              <p className="text-sm" style={{ color: "#666" }}>
                {item.institution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;