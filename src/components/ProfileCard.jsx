import React from "react";

function ProfileCard() {
  return (
    <div className="relative overflow-hidden border border-yellow-400/40 bg-black/70 p-6 md:p-8">

      {/* Decorative corners */}
      <div className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-yellow-400" />
      <div className="absolute right-0 top-0 h-10 w-10 border-r-2 border-t-2 border-yellow-400" />
      <div className="absolute bottom-0 left-0 h-10 w-10 border-b-2 border-l-2 border-yellow-400" />
      <div className="absolute bottom-0 right-0 h-10 w-10 border-b-2 border-r-2 border-yellow-400" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">

        {/* PROFILE IMAGE */}
        <div className="relative mx-auto w-full max-w-[240px]">

          <div className="relative aspect-[3/4] overflow-hidden border-2 border-yellow-400/60 bg-[#111]">

            <img
              src="/images/profile.png"
              alt="Tanish Kumar"
              className="h-full w-full object-cover grayscale"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* ID */}
            <div className="absolute bottom-4 left-4 right-4 border border-gray-500 bg-black/80 px-3 py-2">
              <p className="font-mono text-xs tracking-widest text-gray-300">
                ▥ TK2006
              </p>
            </div>

          </div>

        </div>

        {/* INFORMATION */}
        <div className="flex flex-col justify-center">

          {/* Description */}
          <p className="text-sm leading-7 text-gray-300 md:text-base">
            Hey! I'm Tanish Kumar, a passionate Full Stack Developer
            and a competitive BGMI player. I love building scalable,
            user-friendly web applications and solving real-world
            problems with code.
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-300 md:text-base">
            When I'm not coding, you'll find me in the battlegrounds
            chasing that Chicken Dinner!
          </p>

          {/* INFO GRID */}
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

            {/* Age */}
            <div className="flex items-start gap-4">
              <div className="text-2xl text-yellow-400">
                ♙
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                  Age
                </p>

                <p className="mt-1 text-sm text-gray-300">
                  20
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="flex items-start gap-4">
              <div className="text-2xl text-yellow-400">
                ◉
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                  Experience
                </p>

                <p className="mt-1 text-sm text-gray-300">
                  Fresher
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="text-2xl text-yellow-400">
                ◈
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                  Location
                </p>

                <p className="mt-1 text-sm text-gray-300">
                  Siliguri, India
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="text-2xl text-yellow-400">
                ✉
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                  Email
                </p>

                <p className="mt-1 break-all text-sm text-gray-300">
                  tanish@example.com
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProfileCard;