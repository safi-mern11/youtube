import { ArrowLeft, ToggleLeft } from "lucide-react";
import * as React from "react";
import ProfileModal from "./ProfileModal";
import { useDispatch } from "react-redux";
import { profileToggleAction } from "@/redux/features/toggle";

export default function Restricted() {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center font-semibold bg-white max-w-[330px] min-w-[330px] ">
      <div className=" w-full ">
        <div className="flex relative z-10 gap-4 px-3.5 py-3 border-b text-base  text-neutral-700">
          <ArrowLeft
            className="cursor-pointer"
            onClick={() => dispatch(profileToggleAction(0))}
          />
          <div className="flex-auto">Restricted Mode</div>
        </div>
        <div className="flex relative flex-col py-px w-full ">
          <div className="z-10 px-3.5 py-3 -mt-1 w-full text-sm  text-zinc-700">
            This helps hide potentially mature videos.
            <br />
            No filter is 100% accurate.
          </div>
          <div className="z-10 px-3.5 py-2 w-full text-sm  text-neutral-600">
            This setting only applies to this browser.
          </div>
          <div className="flex gap-5 items-center justify-center pr-3.5 pl-3.5 pb-1 text-[16px] whitespace-nowrap text-neutral-500 w-full">
            <div className="">ACTIVATE RESTRICTED MODE</div>
            <ToggleLeft className="w-[50px] h-[50px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
