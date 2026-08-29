import React from "react";
import PlayerStats from "./PlayerStats";
import Character from "./Character";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* ================= BACKGROUND ================= */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Left dark gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 32%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0.25) 100%)",
        }}
      />

      {/* ================= CHARACTER ================= */}
      <Character />

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-20 min-h-screen w-full">

        {/* LEFT CONTENT */}
        <div className="absolute left-[5%] top-[15%] w-[38%] max-w-[560px]">

          {/* Small heading */}
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
            Full Stack Developer
          </p>

          {/* Name */}
          <h1 className="font-black uppercase leading-[0.82] tracking-tight text-white">
            <span className="block text-[clamp(4rem,6vw,7rem)]">
              TANISH
            </span>

            <span className="block text-[clamp(4rem,6vw,7rem)] text-yellow-400">
              KUMAR
            </span>
          </h1>

          {/* Tagline */}
          <div className="mt-7">
            <p className="text-xl font-bold uppercase tracking-wide text-white">
              I DON'T JUST PLAY TO WIN.
            </p>

            <p className="mt-1 text-xl font-bold uppercase tracking-wide text-white">
              I <span className="text-yellow-400">CODE</span> TO BUILD.
            </p>
          </div>

          {/* Developer label */}
          <div className="mt-7 inline-flex items-center border-l-2 border-yellow-400 bg-black/40 px-5 py-2">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Full Stack Developer
            </span>

            <span className="ml-5 text-xl font-black text-yellow-400">
              ///
            </span>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-md text-sm leading-6 text-gray-300">
            I build high-performance, scalable and
            <br />
            user-friendly web applications.
            <br />
            Turning ideas into real-world products.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex gap-5">

            <a
              href="#projects"
              className="group flex items-center gap-3 border border-yellow-400 bg-yellow-400 px-7 py-4 text-sm font-black uppercase tracking-wide text-black transition-all duration-300 hover:bg-transparent hover:text-yellow-400"
            >
              View My Work

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                ⦿
              </span>
            </a>

            <a
              href="#contact"
              className="border border-yellow-400/70 bg-black/20 px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition-all duration-300 hover:bg-yellow-400 hover:text-black"
            >
              Contact Me
            </a>

          </div>

          {/* Scroll */}
          <div className="mt-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-300">
              Scroll Down
            </p>

            <div className="mt-2 text-2xl text-yellow-400">
              ↓
            </div>
          </div>
        </div>

        {/* ================= PLAYER STATS ================= */}
        <PlayerStats />

        {/* ================= BOTTOM BAR ================= */}
        <div className="absolute bottom-3 left-1/2 w-[90%] -translate-x-1/2">
          <div className="flex items-center justify-between border border-yellow-400/40 bg-black/70 px-8 py-4 backdrop-blur-sm">

            <div>
              <span className="text-xs uppercase tracking-widest text-gray-400">
                Last Match:
              </span>

              <span className="ml-2 text-xs font-bold text-white">
                05/25/2025
              </span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-gray-400">
                Server:
              </span>

              <span className="ml-2 text-xs font-bold text-yellow-400">
                India
              </span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-gray-400">
                Status:
              </span>

              <span className="ml-2 text-xs font-bold text-green-400">
                Always Improving
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;