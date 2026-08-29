import React from "react";
import SkillCard from "./SkillCard";
import skills from "./skillsData";

function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-[#050709] px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-black uppercase tracking-wide text-white md:text-4xl">
            <span className="mr-3 text-yellow-400">
              //
            </span>
            My Weapon (Skills)
          </h2>

          <button
            type="button"
            className="hidden border border-yellow-400/50 bg-black/50 px-7 py-3 text-sm font-black uppercase tracking-widest text-yellow-400 transition hover:bg-yellow-400 hover:text-black md:block"
          >
            Loadout
            <span className="ml-5">⌄</span>
          </button>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 border-l border-t border-yellow-400/20 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="border-b border-r border-yellow-400/20"
            >
              <SkillCard skill={skill} />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;