function PlayerStats() {
  const stats = [
    {
      label: "Kills (Code)",
      value: "1000+",
      icon: "◎",
    },
    {
      label: "Projects",
      value: "25+",
      icon: "◇",
    },
    {
      label: "Hours Coded",
      value: "3000+",
      icon: "◷",
    },
    {
      label: "Rank",
      value: "CONQUEROR",
      icon: "♛",
    },
  ];

  return (
    <div
      className="
        w-full
        max-w-[440px]

        border
        border-yellow-400

        bg-black/65
        backdrop-blur-md

        px-7
        py-6

        shadow-[0_0_40px_rgba(0,0,0,0.45)]
      "
    >
      {/* Header */}
      <h2
        className="
          mb-4
          text-xl
          font-black
          uppercase
          tracking-wide
          text-white
        "
      >
        Player Stats
      </h2>

      {/* Stats */}
      <div>
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`
              flex
              items-center
              gap-5
              py-4

              ${
                index !== stats.length - 1
                  ? "border-b border-white/10"
                  : ""
              }
            `}
          >
            {/* Icon */}
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center

                rounded-full
                border
                border-gray-500

                text-xl
                text-yellow-400
              "
            >
              {stat.icon}
            </div>

            {/* Information */}
            <div className="min-w-0">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-gray-500
                "
              >
                {stat.label}
              </p>

              <p
                className="
                  mt-1
                  truncate
                  text-2xl
                  font-black
                  uppercase
                  leading-none
                  text-yellow-400
                "
              >
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayerStats;