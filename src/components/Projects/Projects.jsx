import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./ProjectData";

function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-[#050709] px-6 py-20 md:px-10 lg:px-16"
    >

      <div className="mx-auto max-w-[1500px]">

        {/* HEADER */}

        <div className="mb-10 flex items-center justify-between">

          <h2 className="text-3xl font-black uppercase tracking-wide text-white md:text-4xl">

            <span className="mr-3 text-yellow-400">
              //
            </span>

            Featured Projects

          </h2>

          {/* View all */}

          <a
            href="#projects"
            className="hidden border border-yellow-400/60 bg-black/50 px-6 py-4 text-sm font-black uppercase tracking-wide text-yellow-400 transition hover:bg-yellow-400 hover:text-black md:flex md:items-center md:gap-5"
          >
            View All Projects

            <span className="text-xl">
              ⦿
            </span>
          </a>

        </div>

        {/* PROJECT GRID */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

        {/* MOBILE VIEW ALL */}

        <div className="mt-8 flex justify-center md:hidden">

          <a
            href="#projects"
            className="border border-yellow-400 px-6 py-3 text-xs font-black uppercase tracking-widest text-yellow-400"
          >
            View All Projects →
          </a>

        </div>

      </div>

    </section>
  );
}

export default Projects;