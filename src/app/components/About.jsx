"use client";

import Image from "next/image";

/* ─── Small reusable decorative components ─────────────────────────────── */

function SparkSvg({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707"
      />
    </svg>
  );
}

function CurveSvg({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 80 40"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path strokeLinecap="round" d="M5,35 Q20,5 40,10 T75,30" />
    </svg>
  );
}

function DotGridSvg({ className }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="currentColor">
      {[0, 20, 40].map((y) =>
        [0, 20, 40].map((x) => (
          <circle key={`${x}-${y}`} cx={x + 10} cy={y + 10} r="2.5" />
        ))
      )}
    </svg>
  );
}

/* ─── Highlight span — orange + underline ────────────────────────────── */
function Highlight({ children }) {
  return (
    <span className="relative inline-block text-primary font-bold">
      {children}
      <svg
        className="absolute -bottom-1 left-0 w-full"
        height="6"
        viewBox="0 0 100 6"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 5 Q25 1 50 4 T100 3"
          stroke="#ff7a1a"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}



/* ─── Main About section ─────────────────────────────────────────────── */
export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#faf9f6] py-20 sm:py-0  px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* ── Background gradient blobs (mirrors Hero) ── */}
      <div className="absolute top-[-8%] right-[-8%] w-[500px] h-[500px] rounded-full bg-primary/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary-light/8 blur-[140px] pointer-events-none" />

      {/* ── Decorative SVG accents ── */}
      <SparkSvg className="absolute top-12 left-8 w-7 h-7 text-primary/40 animate-float hidden md:block" />
      <SparkSvg className="absolute bottom-24 right-16 w-5 h-5 text-primary/30 animate-float-delayed hidden lg:block" />
      <CurveSvg className="absolute top-1/3 left-4 w-16 h-8 text-primary/20 hidden lg:block" />
      <DotGridSvg className="absolute bottom-12 left-1/4 w-12 h-12 text-dark-charcoal/8 hidden md:block" />

      {/* ── Main content container ── */}
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24">

          {/* ════════════════════════════════════════
              LEFT  — heading + body text
          ════════════════════════════════════════ */}
          <div className="flex-1 flex flex-col gap-8 lg:pb-8">


            {/* Giant heading */}
            <div className="relative">
              {/* Hand-drawn curve accent beside heading */}
              <CurveSvg className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-6 text-primary/40 hidden xl:block" />

              <h2 className="text-[clamp(3.5rem,9vw,7rem)] font-black text-dark-charcoal leading-[0.9] tracking-tight select-none">
                About
                <span className="text-primary">.</span>
              </h2>

              {/* Decorative squiggle under heading */}
              <svg
                className="mt-2 w-24 h-3 text-primary/50"
                viewBox="0 0 96 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M0 9 Q12 3 24 8 T48 7 T72 8 T96 5" />
              </svg>
            </div>

            {/* Body paragraphs */}
            <div className="flex flex-col gap-5 max-w-[540px]">
              <p className="text-[15px] md:text-base leading-[1.85] text-dark-charcoal/75 font-normal">
                I am currently pursuing studies in{" "}
                <Highlight>Marketing</Highlight>, with a strong focus on
                developing practical and creative skills. I have expertise in
                Microsoft Word, PowerPoint, Excel, and Canva.
              </p>

              <p className="text-[15px] md:text-base leading-[1.85] text-dark-charcoal/75 font-normal">
                I specialize in{" "}
                <Highlight>poster designing</Highlight>, creating engaging
                presentations, and have hands‑on experience in{" "}
                <Highlight>video editing</Highlight>.
              </p>

              <p className="text-[15px] md:text-base leading-[1.85] text-dark-charcoal/75 font-normal">
                With a passion for continuous learning and self‑improvement, I
                quickly adapt to new tools and technologies. I love turning ideas
                into visual stories that communicate clearly and effectively.
              </p>

              <p className="text-[15px] md:text-base leading-[1.85] text-dark-charcoal/75 font-normal">
                I&apos;m excited to connect, collaborate, and grow in the dynamic
                world of{" "}
                <Highlight>marketing &amp; digital communication</Highlight>.
              </p>
            </div>
          </div>

          <div className="flex justify-center w-full lg:w-auto">
            <Image 
            src="/image/about/potrait.jpeg" 
            width={400} 
            height={560} 
            alt="Jisan - Marketing Student" 
            className="rounded-full w-xs lg:w-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
