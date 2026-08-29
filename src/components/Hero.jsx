import React from "react";
import PlayerStats from "./PlayerStats";
import Character from "./Character";

function Hero() {
  return (
    <section
      id="home" className="relative isolate w-full overflow-hidden bg-[#050607] text-white min-h-screen lg:min-h-screen">
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      />

      {/* =====================================================
          BACKGROUND BLENDING
      ====================================================== */}

      {/* Main dark overlay */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          -z-20
          bg-black/35
        "
      />

      {/* Strong left gradient */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          -z-10

          bg-gradient-to-r
          from-black
          via-black/80
          to-black/20

          lg:from-black
          lg:via-black/65
          lg:to-transparent
        "
      />

      {/* Bottom blend into next section */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-0
          bottom-0
          z-0
          h-64

          bg-gradient-to-t
          from-[#050607]
          via-[#050607]/80
          to-transparent
        "
      />

      {/* Mobile extra darkening */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          -z-10
          bg-black/10

          lg:hidden
        "
      />

      {/* =====================================================
          CHARACTER
      ====================================================== */}

      <Character />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          w-full
          max-w-[1600px]
          flex-col

          px-5
          pb-20
          pt-24

          sm:px-8
          sm:pt-28

          lg:min-h-screen
          lg:grid
          lg:grid-cols-12
          lg:items-center
          lg:gap-8
          lg:px-12
          lg:pb-32
          lg:pt-32

          xl:px-16
          2xl:px-20
        "
      >
        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <div
          className="
            relative
            z-30
            w-full

            lg:col-span-6
            xl:col-span-6
          "
        >
          {/* Small heading */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-yellow-400 sm:w-12" />

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.35em]
                text-yellow-400

                sm:text-xs
              "
            >
              Full Stack Developer
            </p>
          </div>

          {/* Name */}
          <h1
            className="
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.045em]
            "
          >
            <span
              className="
                block
                text-[clamp(4rem,14vw,7rem)]
                text-white

                lg:text-[clamp(4rem,7vw,7rem)]
              "
            >
              TANISH
            </span>

            <span
              className="
                block
                text-[clamp(4rem,14vw,7rem)]
                text-yellow-400

                lg:text-[clamp(4rem,7vw,7rem)]
              "
            >
              KUMAR
            </span>
          </h1>

          {/* Tagline */}
          <div
            className="
              mt-7
              space-y-1

              sm:mt-8
              lg:mt-9
            "
          >
            <p
              className="
                text-base
                font-extrabold
                uppercase
                tracking-wide
                text-white

                sm:text-lg
                lg:text-xl
              "
            >
              I DON'T JUST PLAY TO WIN.
            </p>

            <p
              className="
                text-base
                font-extrabold
                uppercase
                tracking-wide
                text-white

                sm:text-lg
                lg:text-xl
              "
            >
              I{" "}
              <span className="text-yellow-400">
                CODE
              </span>{" "}
              TO BUILD.
            </p>
          </div>

          {/* Developer badge */}
          <div
            className="
              mt-7
              inline-flex
              border-l-2
              border-yellow-400
              bg-black/55
              px-5
              py-3
              backdrop-blur-sm

              sm:mt-8
            "
          >
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]

                sm:text-sm
              "
            >
              Full Stack Developer
            </span>
          </div>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-gray-300

              sm:text-base
              sm:leading-7

              lg:mt-7
            "
          >
            I build high-performance, scalable and
            user-friendly web applications.
            Turning ideas into real-world products.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-8
              flex
              w-full
              flex-col
              gap-3

              sm:flex-row
              sm:gap-4

              lg:mt-9
            "
          >
            <a
              href="#projects"
              className="
                group
                flex
                min-h-[56px]
                flex-1
                items-center
                justify-center
                gap-4

                border
                border-yellow-400
                bg-yellow-400

                px-6
                py-4

                text-xs
                font-black
                uppercase
                tracking-wider
                text-black

                transition-all
                duration-300

                hover:bg-transparent
                hover:text-yellow-400

                sm:flex-none
                sm:px-7
              "
            >
              <span>View My Work</span>

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-black

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>

            <a
              href="#contact"
              className="
                group
                flex
                min-h-[56px]
                flex-1
                items-center
                justify-center
                gap-4

                border
                border-yellow-400/70
                bg-black/45

                px-6
                py-4

                text-xs
                font-black
                uppercase
                tracking-wider

                backdrop-blur-sm

                transition-all
                duration-300

                hover:bg-yellow-400
                hover:text-black

                sm:flex-none
                sm:px-7
              "
            >
              <span>Contact Me</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* ===================================================
            PLAYER STATS
        ==================================================== */}

        <div
  className="
    pointer-events-none
    absolute
    z-30

    hidden
    lg:block

    right-[5%]
    top-[52%]

    -translate-y-1/2

    xl:right-[7%]
  "
>
  <PlayerStats />
</div>

        {/* ===================================================
            SCROLL INDICATOR
        ==================================================== */}

        <div
          className="
            relative
            z-30
            mt-12
            flex
            flex-col
            items-center

            lg:absolute
            lg:bottom-10
            lg:left-1/2
            lg:mt-0
            lg:-translate-x-1/2
          "
        >
          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.35em]
              text-gray-400
            "
          >
            Scroll Down
          </span>

          <span
            className="
              mt-2
              animate-bounce
              text-2xl
              text-yellow-400
            "
          >
            ↓
          </span>
        </div>
      </div>

      {/* =====================================================
          DESKTOP BOTTOM INFO BAR
      ====================================================== */}

      <div
        className="
          relative
          z-40
          hidden

          lg:absolute
          lg:bottom-3
          lg:left-1/2
          lg:block
          lg:w-[90%]
          lg:max-w-[1400px]
          lg:-translate-x-1/2
        "
      >
        <div
          className="
            flex
            items-center
            justify-between

            border
            border-yellow-400/30

            bg-black/60

            px-8
            py-4

            backdrop-blur-md
          "
        >
          <div>
            <span className="text-[10px] uppercase tracking-widest text-gray-500">
              Last Match:
            </span>

            <span className="ml-2 text-xs font-bold text-white">
              05/25/2025
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-gray-500">
              Server:
            </span>

            <span className="ml-2 text-xs font-bold text-yellow-400">
              India
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-gray-500">
              Status:
            </span>

            <span className="ml-2 text-xs font-bold text-green-400">
              Always Improving
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;