import { Menu, Sun } from "lucide-react";

function Navbar() {
  return (
    <header className="h-[70px] border-b border-[#332600] bg-[#050709] px-6 flex items-center justify-between">

      <div className="flex items-center gap-3">
        <div className="border-2 border-[#f5b400] px-2 py-1">
          <span className="font-black text-[#f5b400]">
            PUBG
          </span>
        </div>

        <span className="text-xl font-bold tracking-wide">
          DEVELOPER
        </span>
      </div>

      <nav className="hidden lg:flex gap-9 text-sm font-semibold">
        {[
          "HOME",
          "ABOUT",
          "SKILLS",
          "PROJECTS",
          "EXPERIENCE",
          "ACHIEVEMENTS",
          "CONTACT"
        ].map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={
              index === 0
                ? "text-[#f5b400]"
                : "text-gray-300 hover:text-[#f5b400]"
            }
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex gap-2">
        <button className="border border-[#5d4500] p-2">
          <Sun size={18} />
        </button>

        <button className="border border-[#5d4500] p-2">
          <Menu size={18} />
        </button>
      </div>

    </header>
  );
}

export default Navbar;