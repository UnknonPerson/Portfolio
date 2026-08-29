import React from "react";

function AchievementCard({ achievement }) {
  return (
    <div className="relative flex flex-col items-center text-center">

      {/* Icon */}
      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-yellow-400 bg-[#07090c] text-3xl text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.15)]">

        {achievement.icon}

      </div>

      {/* Title */}
      <h3 className="mt-5 text-lg font-black uppercase tracking-wide text-yellow-400">
        {achievement.title}
      </h3>

      {/* Description */}
      <div className="mt-3 space-y-1">
        {achievement.description.map((text) => (
          <p
            key={text}
            className="text-sm text-gray-400"
          >
            {text}
          </p>
        ))}
      </div>

    </div>
  );
}

export default AchievementCard;