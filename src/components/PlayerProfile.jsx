import {
  Crosshair,
  Code2,
  Clock3,
  Github,
  Trophy,
} from "lucide-react";

const stats = [
  {
    icon: Crosshair,
    label: "PROJECTS",
    value: "08+",
  },
  {
    icon: Code2,
    label: "PROBLEMS SOLVED",
    value: "250+",
  },
  {
    icon: Github,
    label: "GITHUB COMMITS",
    value: "500+",
  },
  {
    icon: Clock3,
    label: "HOURS CODED",
    value: "3000+",
  },
];

export default function PlayerProfile() {
  return (
    <aside className="player-profile">

      {/* HUD corners */}
      <span className="profile-corner profile-tl" />
      <span className="profile-corner profile-tr" />
      <span className="profile-corner profile-bl" />
      <span className="profile-corner profile-br" />

      <div className="profile-top-line">
        <span>PLAYER PROFILE</span>

        <div className="profile-decoration">
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="profile-stats">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div className="profile-stat" key={stat.label}>
              <div className="stat-icon">
                <Icon size={20} strokeWidth={1.6} />
              </div>

              <div className="stat-content">
                <span className="stat-label">{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            </div>
          );
        })}
      </div>

      <div className="profile-divider" />

      <div className="rank-section">
        <div className="rank-icon">
          <Trophy size={30} strokeWidth={1.4} />
        </div>

        <div>
          <span className="rank-label">RANK</span>
          <strong className="rank-value">CONQUEROR</strong>
        </div>
      </div>
    </aside>
  );
}