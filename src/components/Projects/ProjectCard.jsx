import React from "react";

function ProjectCard({ project }) {
  return (
    <article className="group relative overflow-hidden border border-yellow-400/40 bg-[#080a0d] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400">

      {/* Decorative corners */}

      <div className="absolute left-0 top-0 z-20 h-7 w-7 border-l-2 border-t-2 border-yellow-400" />

      <div className="absolute right-0 top-0 z-20 h-7 w-7 border-r-2 border-t-2 border-yellow-400" />

      <div className="absolute bottom-0 left-0 z-20 h-7 w-7 border-b-2 border-l-2 border-yellow-400" />

      <div className="absolute bottom-0 right-0 z-20 h-7 w-7 border-b-2 border-r-2 border-yellow-400" />

      {/* IMAGE */}

      <div className="relative h-[230px] overflow-hidden border-b border-yellow-400/20">

        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Image overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      </div>

      {/* CONTENT */}

      <div className="p-6">

        {/* Title */}

        <h3 className="text-2xl font-black uppercase tracking-wide text-white">
          {project.title}
        </h3>

        {/* Category */}

        <p className="mt-2 text-sm font-bold uppercase tracking-wide text-gray-400">
          {project.category}
        </p>

        {/* Description */}

        <p className="mt-6 min-h-[56px] text-sm leading-6 text-gray-300">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-6 flex flex-wrap gap-3">

          {project.technologies.map((tech, index) => (
            <span
              key={tech}
              className={`border px-4 py-2 text-xs font-black uppercase tracking-wide ${
                index === 0
                  ? "border-yellow-400/50 bg-yellow-400/10 text-gray-200"
                  : "border-gray-600 bg-black/50 text-gray-300"
              }`}
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Links */}

        <div className="mt-6 flex gap-4">

          <a
            href={project.liveUrl}
            className="text-xs font-bold uppercase tracking-widest text-yellow-400 transition hover:text-yellow-300"
          >
            Live Demo →
          </a>

          <a
            href={project.githubUrl}
            className="text-xs font-bold uppercase tracking-widest text-gray-400 transition hover:text-white"
          >
            GitHub →
          </a>

        </div>

      </div>
    </article>
  );
}

export default ProjectCard;