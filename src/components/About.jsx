import React from "react";
import ProfileCard from "./ProfileCard";
import GameStats from "./GameStats";

function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#050709] px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* SECTION HEADER */}
        <div className="mb-8 flex items-center justify-between border-b border-yellow-400/20 pb-4">
          <h2 className="text-2xl font-black uppercase tracking-wider text-white md:text-3xl">
            <span className="mr-3 text-yellow-400">//</span>
            About Me
          </h2>

          <div className="hidden border border-yellow-400/40 bg-black/60 px-6 py-2 text-xs font-bold uppercase tracking-widest text-gray-300 md:block">
            ID Card
            <span className="ml-4 text-yellow-400">⌄</span>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

          {/* LEFT */}
          <ProfileCard />

          {/* RIGHT */}
          <GameStats />

        </div>

      </div>
    </section>
  );
}

export default About;