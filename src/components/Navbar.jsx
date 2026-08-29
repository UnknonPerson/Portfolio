import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "HOME",
    "ABOUT",
    "SKILLS",
    "PROJECTS",
    "EXPERIENCE",
    "ACHIEVEMENTS",
    "CONTACT",
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header
        className="
          relative
          z-[100]
          flex
          h-[70px]
          w-full
          items-center
          justify-between

          border-b
          border-[#332600]

          bg-[#050709]

          px-5

          sm:px-8

          lg:px-10
        "
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={handleNavClick}
          className="
            flex
            items-center
            gap-3
          "
        >
          {/* PUBG */}
          <div
            className="
              border-2
              border-[#f5b400]
              px-2
              py-1

              sm:px-3
              sm:py-1.5
            "
          >
            <span
              className="
                text-sm
                font-black
                text-[#f5b400]

                sm:text-base
              "
            >
              PUBG
            </span>
          </div>

          {/* Developer */}
          <span
            className="
              text-lg
              font-black
              tracking-wide
              text-white

              sm:text-xl
            "
          >
            DEVELOPER
          </span>
        </a>

        {/* ===================================================
            DESKTOP NAVIGATION
        ==================================================== */}

        <nav
          className="
            hidden
            items-center
            gap-7

            lg:flex
            xl:gap-9
          "
        >
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`
                relative
                text-xs
                font-semibold
                tracking-wide
                transition-colors
                duration-300

                ${
                  index === 0
                    ? "text-[#f5b400]"
                    : "text-gray-300 hover:text-[#f5b400]"
                }

                group
              `}
            >
              {item}

              {/* Hover line */}
              <span
                className={`
                  absolute
                  -bottom-2
                  left-0
                  h-[1px]
                  bg-[#f5b400]
                  transition-all
                  duration-300

                  ${
                    index === 0
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </a>
          ))}
        </nav>

        {/* ===================================================
            MOBILE MENU BUTTON
        ==================================================== */}

        <button
          type="button"
          aria-label={
            isMenuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            border
            border-[#5d4500]

            bg-[#080a0d]

            text-white

            transition-all
            duration-300

            hover:border-[#f5b400]
            hover:text-[#f5b400]

            lg:hidden
          "
        >
          {isMenuOpen ? (
            <X size={22} strokeWidth={2} />
          ) : (
            <Menu size={22} strokeWidth={2} />
          )}
        </button>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      <div
        onClick={() => setIsMenuOpen(false)}
        className={`
          fixed
          inset-0
          z-[90]
          bg-black/70
          backdrop-blur-[2px]

          transition-opacity
          duration-300

          lg:hidden

          ${
            isMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* =====================================================
          MOBILE SLIDE MENU
      ====================================================== */}

      <aside
        className={`
          fixed
          right-0
          top-0
          z-[95]

          flex
          h-screen
          w-[82%]
          max-w-[360px]
          flex-col

          border-l
          border-[#5d4500]

          bg-[#050709]

          shadow-2xl

          transition-transform
          duration-500
          ease-out

          lg:hidden

          ${
            isMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Menu Header */}
        <div
          className="
            flex
            h-[70px]
            shrink-0
            items-center
            justify-between

            border-b
            border-[#332600]

            px-6
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-gray-500
              "
            >
              Navigation
            </p>

            <p
              className="
                mt-1
                text-sm
                font-black
                uppercase
                tracking-wider
                text-white
              "
            >
              Player Menu
            </p>
          </div>

          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setIsMenuOpen(false)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              border
              border-[#5d4500]

              text-gray-300

              transition-colors
              duration-300

              hover:border-[#f5b400]
              hover:text-[#f5b400]
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <nav
          className="
            flex
            flex-1
            flex-col
            overflow-y-auto

            px-5
            py-8
          "
        >
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleNavClick}
              className={`
                group
                flex
                items-center
                gap-4

                border-b
                border-white/5

                py-5

                text-sm
                font-bold
                uppercase
                tracking-[0.15em]

                transition-all
                duration-300

                ${
                  index === 0
                    ? "text-[#f5b400]"
                    : "text-gray-300 hover:pl-2 hover:text-[#f5b400]"
                }
              `}
            >
              {/* Number */}
              <span
                className="
                  w-6
                  text-[9px]
                  font-bold
                  tracking-widest
                  text-gray-600

                  group-hover:text-[#f5b400]
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Item */}
              <span>{item}</span>

              {/* Arrow */}
              <span
                className="
                  ml-auto
                  text-[#f5b400]
                  opacity-0
                  transition-all
                  duration-300

                  group-hover:translate-x-1
                  group-hover:opacity-100
                "
              >
                →
              </span>
            </a>
          ))}
        </nav>

        {/* Bottom */}
        <div
          className="
            border-t
            border-[#332600]

            px-6
            py-6
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-green-400
                shadow-[0_0_8px_rgba(74,222,128,0.7)]
              "
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-gray-500
              "
            >
              Always Improving
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;