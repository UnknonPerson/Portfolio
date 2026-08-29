import React from "react";

function CTA() {
  return (
    <section
      id="contact"
      className="relative min-h-[360px] w-full overflow-hidden border-t border-yellow-400/20"
    >

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/cta-bg.png')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[360px] max-w-[1500px] items-center px-8 md:px-12 lg:px-16">

        <div>

          {/* Small heading */}
          <p className="text-xl font-bold uppercase tracking-wide text-white md:text-2xl">
            Let's drop into something
            <span className="ml-3 text-yellow-400">
              »
            </span>
          </p>

          {/* Main heading */}
          <h2 className="mt-1 text-4xl font-black uppercase leading-none md:text-6xl">

            <span className="text-yellow-400">
              Amazing
            </span>

            <span className="ml-3 text-white">
              Together!
            </span>

          </h2>

          {/* Button */}
          <a
            href="mailto:tanish@example.com"
            className="mt-10 inline-flex items-center gap-5 border border-yellow-400 bg-black/50 px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition duration-300 hover:bg-yellow-400 hover:text-black"
          >
            Let's Connect

            <span className="text-xl text-yellow-400">
              ⦿
            </span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default CTA;