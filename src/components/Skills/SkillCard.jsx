import React from "react";

function SkillCard({ skill }) {
  return (
    <div className="group relative flex min-h-[170px] flex-col items-center justify-center border border-yellow-400/30 bg-[#080b0f] p-6 transition-all duration-300 hover:border-yellow-400 hover:bg-[#0d1015]">

      {/* Decorative corners */}
      <div className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-yellow-400/70" />

      <div className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-yellow-400/70" />

      <div className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-yellow-400/70" />

      <div className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-yellow-400/70" />

      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center">
        <img
          src={skill.icon}
          alt={skill.name}
          className="h-14 w-14 object-contain transition duration-300 group-hover:scale-110"
        />
      </div>

      {/* Name */}
      <p className="mt-5 text-center text-sm font-bold uppercase tracking-wide text-gray-300 group-hover:text-white">
        {skill.name}
      </p>

    </div>
  );
}

export default SkillCard;