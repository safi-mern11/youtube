import { useState } from "react";

type chips = {
  id: number;
  text: string;
  active: boolean;
};

class Chip implements chips {
  id;
  text;
  active;

  constructor(id: number, text: string, active: boolean) {
    this.id = id;
    this.text = text;
    this.active = active;
  }
}

function ChipBar() {
  const [chips, setChips] = useState<chips[]>([
    new Chip(1, "All", true),
    new Chip(2, "React Router", false),
    new Chip(3, "Music", false),
    new Chip(4, "Computer Programming", false),
    new Chip(5, "Mixes", false),
    new Chip(6, "Reverberation", false),
    new Chip(7, "Playlists", false),
    new Chip(8, "Gaming", false),
    new Chip(9, "Live", false),
    new Chip(10, "AMVs", false),
    new Chip(11, "Asian Music", false),
    new Chip(12, "Recently Uploaded", false),
    new Chip(13, "Watched", false),
    new Chip(14, "New to you", false),
  ]);

  function setActive(id: number) {
    const updatedChips = chips.map((chip) => {
      if (chip.id === id) {
        chip.active = true;
        return chip;
      } else {
        chip.active = false;
        return chip;
      }
    });
    setChips(updatedChips);
  }

  return (
    <div className="display flex gap-[12px] fixed w-full bg-white z-[10] pt-[22px] pb-[15px]">
      {chips.map((chip) => {
        return (
          <div key={chip.id} onClick={() => setActive(chip.id)} className="">
            <button
              className={`${
                chip.active
                  ? "text-[#FFFFFF] bg-[#212121]"
                  : "text-[#0F0F0F] bg-[#0000000d]"
              } font-medium text-nowrap rounded-[8px] px-[12px] min-h-[32px] text-center  text-[14px] `}
            >
              {chip.text}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ChipBar;
