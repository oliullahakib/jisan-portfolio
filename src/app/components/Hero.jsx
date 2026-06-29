"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-[#faf9f6]">
      {/* Background Decorative Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary-light/10 blur-[130px] pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-6xl flex flex-col items-center z-10">

        {/* Top Greeting Bubble */}
        <div className="relative mb-6 animate-float-delayed">
          {/* Hand-drawn decorative line accents (SVG) */}
          <svg className="absolute -top-3 -right-4 w-6 h-6 text-primary/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707" />
          </svg>
          <div className="px-5 py-2.5 rounded-full border border-dark-charcoal/10 bg-white shadow-sm flex items-center justify-center font-medium text-sm text-dark-charcoal">
            Assalamualaykum
          </div>
        </div>

        {/* Hero Title & Headline */}
        <div className="relative text-center max-w-3xl ">
          {/* Hand-drawn accent under title (SVG) */}
          <svg className="absolute -left-10 top-1/2 w-10 h-10 text-primary/60 hidden md:block" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" d="M10,25 Q15,10 25,12 T35,30" />
          </svg>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-dark-charcoal leading-tight select-none">
            I&apos;m <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-[#ff5a00]">Jisan</span>
            <span className="inline-block animate-wave mx-2">👋</span>,
            <br />
            A Brand & Marketing Specialist
          </h1>

          <div className="absolute -right-8 bottom-0 w-12 h-12 text-dark-charcoal/15 hidden md:block select-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <path d="M20,20 C40,40 40,60 80,80" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </div>
        </div>

        {/* Central Display Section */}
        <div className="relative w-full flex flex-col md:flex-row items-center justify-between  md:gap-12 mt-8">

          {/* Left testimonial element */}
          <div className="w-full hidden md:w-1/4 lg:flex justify-center md:justify-start order-2 md:order-1">
            <div className="glassmorphism p-6 rounded-2xl max-w-[280px] shadow-sm relative group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl text-[#ff5a00]/30 font-serif absolute -top-4 -left-2 select-none font-bold">“</div>
              <p className="text-sm leading-relaxed text-dark-charcoal/80 font-medium">
                working under Mas Helmi, and I can confidently say he is an exceptional marketer and brand strategist
              </p>
            </div>
          </div>

          {/* Central Portrait with Semicircle Background */}
          <div className="relative flex justify-center items-center w-full md:w-2/4 order-1 md:order-2 ">
            {/* Soft backdrop circle */}
            <div
              className="absolute
    bottom-19
    sm:bottom-25
    lg:bottom-31
    w-[320px]
    sm:w-[420px]
    lg:w-[520px]
    h-[160px]
    sm:h-[210px]
    lg:h-[260px]
    rounded-t-full
    bg-linear-to-t
    from-primary
    to-[#ffb36a]
    shadow-[0_20px_50px_rgba(255,122,26,0.25)]
    -z-10" />


            {/* Jisan Portrait */}
            <div className="relative w-[280px] sm:w-[370px] lg:w-[460px] h-[355px] sm:h-[470px] lg:h-[582px] overflow-hidden flex items-start">
              <Image
                src="/image/hero/hero.png"
                alt="Jisan - Brand & Marketing Specialist"
                width={460}
                height={582}
                priority
                style={{ width: "100%", height: "auto" }}
                className="object-cover object-bottom hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Floating Action Pills overlapping the bottom */}
            <div className="absolute bottom-6 sm:bottom-10  md:bottom-18 lg:bottom-32 flex items-center justify-center w-full px-4">
              <div className="glassmorphism-dark p-1.5 rounded-full flex items-center gap-1 shadow-lg max-w-[280px]">
                <button className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-primary hover:bg-primary-dark transition-all duration-300 shadow-md shadow-primary/20 flex items-center gap-1.5 cursor-pointer">
                  Resume
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <a href="tel:+8801785853450" className="px-5 py-2.5 rounded-full text-xs font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  Hire me
                </a>
              </div>
            </div>

            {/* FLOATING TAGS AROUND PORTRAIT */}
            {/* Floating Tag 1: Marketing (📣) - Top-Left */}
            <div className="absolute top-[20%] left-[-5%] sm:left-[5%] md:left-[-10%] lg:left-[0%] animate-float">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-dark-charcoal shadow-lg text-xs md:text-sm font-semibold border border-white/10 hover:scale-105 hover:-rotate-2 transition-all duration-300">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                </svg>
                Marketing
              </div>
            </div>

            {/* Floating Tag 2: Brand (🌟) - Bottom-Left */}
            <div className="absolute bottom-[25%] left-[-0%] sm:left-[0%] md:left-[-15%] lg:left-[-0%] animate-float-delayed">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-dark-charcoal shadow-lg text-xs md:text-sm font-semibold border border-white/10 hover:scale-105 hover:rotate-3 transition-all duration-300">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Brand
              </div>
            </div>

            {/* Floating Tag 3: Ads (🚀) - Mid-Right */}
            <div className="absolute top-[15%] right-[5%] sm:right-[5%] md:right-[-10%] lg:right-[5%] animate-float-delayed">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-dark-charcoal shadow-lg text-xs md:text-sm font-semibold border border-white/10 hover:scale-105 hover:rotate-2 transition-all duration-300">
                <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Ads
              </div>
            </div>

            {/* Floating Tag 4: Social Media (🤳) - Bottom-Right */}
            <div className="absolute bottom-[25%] right-[-0%] sm:right-[0%] md:right-[-15%] lg:right-[-5%] animate-float">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-dark-charcoal shadow-lg text-xs md:text-sm font-semibold border border-white/10 hover:scale-105 hover:-rotate-3 transition-all duration-300">
                <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Social Media
              </div>
            </div>

          </div>

          {/* Right experience block */}
          <div className="w-full md:w-1/4 flex justify-center md:justify-end order-3">
            <div className="glassmorphism p-6 rounded-2xl max-w-[240px] text-center md:text-left shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2 select-none tracking-tight">2 Years</div>
              <p className="text-xs md:text-sm font-semibold text-dark-charcoal/60 uppercase tracking-wider">
                in Brand & Marketing Experience
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
