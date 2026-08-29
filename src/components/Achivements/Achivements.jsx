import React from "react";
import AchievementCard from "./AchievementCard";
import achievements from "./achievementsData";

function Achievements() {
  return (
    <section
      id="achievements"
      className="relative w-full overflow-hidden bg-[#050709] px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* Header */}
        <h2 className="mb-14 text-3xl font-black uppercase tracking-wide text-white md:text-4xl">
          <span className="mr-3 text-yellow-400">
            //
          </span>
          Achievements
        </h2>

        {/* Timeline */}
        <div className="relative">

          {/* Horizontal line */}
          <div className="absolute left-[8%] right-[8%] top-10 hidden h-[2px] bg-yellow-400 md:block" />

          {/* Achievement cards */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-4">

            {achievements.map((achievement) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Achievements;