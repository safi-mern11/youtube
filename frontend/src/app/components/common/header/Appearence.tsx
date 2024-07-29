import { ArrowLeft, Check } from "lucide-react";
import * as React from "react";
import ProfileModal from "./ProfileModal";
import { useDispatch } from "react-redux";
import { profileToggleAction } from "@/redux/features/toggle";

export default function Appearrnce() {
  const dispatch = useDispatch();
  const themes = [
    {
      name: "Use device theme",
      onClickHandler: () => {},
    },
    {
      name: "Dark theme",
      onClickHandler: () => {},
    },
    {
      name: "Light theme",
      onClickHandler: () => {},
    },
  ];
  return (
    <div className="flex flex-col justify-center text-sm font-semibold bg-white max-w-[300px] min-w-[300px] ">
      <div className="flex flex-col justify-center w-full ">
        <div className="flex flex-col py-px w-full bg-white">
          <div className="flex border-b z-10 flex-col pb-4 w-full text-sm whitespace-nowrap  text-neutral-700">
            <div className="flex gap-4 self-start mt-3.5 ml-3.5">
              <ArrowLeft
                className="cursor-pointer"
                onClick={() => dispatch(profileToggleAction(0))}
              />
              <div>Appearance</div>
            </div>
          </div>
          <div className="flex z-10 flex-col pb-4 w-full text-xs  text-zinc-500">
            <div className="self-start mt-6 ml-3.5">
              Setting applies to this browser only
            </div>
          </div>
          <div className="flex flex-col  gap-1  pb-[10px]  text-zinc-700">
            {themes.map((item, index) => (
              <button className="flex min-h-[40px] px-5 items-center justify-start gap-[15px] hover:bg-[#ddd] duration-300 ease-in-out transition-all ">
                <div className="w-6 h-6">{index == 0 && <Check />}</div>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
