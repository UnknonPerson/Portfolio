import React from "react";

function PlayerStats() {
  return (
    <div className="absolute right-[5%] top-[22%] z-30 w-[270px]">

      {/* Outer border */}
      <div className="relative border border-yellow-400 bg-black/65 px-7 py-6 backdrop-blur-sm">

        {/* Top decorative corner */}
        <div className="absolute -right-[1px] -top-[1px] h-5 w-5 border-r-2 border-t-2 border-yellow-400" />

        {/* Bottom decorative corner */}
        <div className="absolute -bottom-[1px] -left-[1px] h-5 w-5 border-b-2 border-l-2 border-yellow-400" />

        {/* Heading */}
        <h2 className="mb-6 text-lg font-black uppercase tracking-wide text-white">
          Player Stats
        </h2>

        {/* Kills */}
        <div className="flex items-center gap-4 border-b border-white/10 py-5">

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 text-2xl text-gray-300">
            ◎
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Kills (Code)
            </p>

            <p className="mt-1 text-3xl font-black text-yellow-400">
              1000+
            </p>
          </div>

        </div>

        {/* Projects */}
        <div className="flex items-center gap-4 border-b border-white/10 py-5">

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 text-2xl text-gray-300">
            ◇
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Projects
            </p>

            <p className="mt-1 text-3xl font-black text-yellow-400">
              25+
            </p>
          </div>

        </div>

        {/* Hours */}
        <div className="flex items-center gap-4 border-b border-white/10 py-5">

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 text-2xl text-gray-300">
            ◷
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Hours Coded
            </p>

            <p className="mt-1 text-3xl font-black text-yellow-400">
              3000+
            </p>
          </div>

        </div>

        {/* Rank */}
        <div className="flex items-center gap-4 pt-5">

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-400 text-2xl text-yellow-400">
            ♛
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Rank
            </p>

            <p className="mt-1 text-2xl font-black uppercase text-yellow-400">
              Conqueror
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default PlayerStats;