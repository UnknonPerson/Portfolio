import React from "react";

function GameStats() {
  return (
    <div className="relative overflow-hidden border border-yellow-400/40 bg-black/70">

      {/* Decorative corners */}
      <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-yellow-400" />
      <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-yellow-400" />
      <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-yellow-400" />
      <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-yellow-400" />

      {/* TOP PLAYER AREA */}
      <div className="relative min-h-[300px] overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/pubg-stats-bg.png')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 p-7">

          {/* PUBG ID */}
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            PUBG ID
          </p>

          <p className="mt-1 flex items-center gap-2 text-xl font-bold text-white">
            5247986521
            <span className="text-sm text-gray-400">
              ♧
            </span>
          </p>

          {/* Rank */}
          <div className="mt-8 flex items-center gap-6">

            {/* Rank icon */}
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-yellow-400 bg-black/60 text-5xl text-yellow-400">
              ♛
            </div>

            <div>
              <h3 className="text-3xl font-black uppercase text-yellow-400">
                Conqueror
              </h3>

              <p className="mt-1 text-sm font-bold uppercase tracking-widest text-gray-400">
                Season 18
              </p>

              <p className="mt-1 text-xs uppercase text-gray-500">
                Solo TPP
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* STATISTICS */}
      <div className="grid grid-cols-2 border-t border-yellow-400/30 md:grid-cols-4">

        {/* Matches */}
        <div className="border-b border-r border-white/10 p-5 md:border-b-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Matches Played
          </p>

          <p className="mt-2 text-3xl font-black text-yellow-400">
            250+
          </p>
        </div>

        {/* Wins */}
        <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Wins
          </p>

          <p className="mt-2 text-3xl font-black text-yellow-400">
            100+
          </p>
        </div>

        {/* Win Rate */}
        <div className="border-r border-white/10 p-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Win Rate
          </p>

          <p className="mt-2 text-3xl font-black text-yellow-400">
            40%
          </p>
        </div>

        {/* K/D */}
        <div className="p-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            K/D Ratio
          </p>

          <p className="mt-2 text-3xl font-black text-yellow-400">
            4.25
          </p>
        </div>

      </div>

      {/* QUOTE */}
      <div className="flex items-center justify-between border-t border-yellow-400/30 px-6 py-6">

        <span className="text-2xl text-yellow-400">
          «
        </span>

        <p className="text-center text-sm italic text-gray-300 md:text-base">
          Discipline in game. Consistency in code.
        </p>

        <span className="text-2xl text-yellow-400">
          »
        </span>

      </div>

    </div>
  );
}

export default GameStats;



