import React from "react";

function Character() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">

      <img
        src="/images/pubg-character.png"
        alt="PUBG Character"
        draggable="false"
        className="
          absolute
          bottom-0
          left-[35%]
          h-[94%]
          w-auto
          max-w-none
          object-contain
          object-bottom
          select-none
          character
        "
      />

    </div>
  );
}

export default Character;