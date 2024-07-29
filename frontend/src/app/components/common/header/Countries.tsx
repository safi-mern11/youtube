import * as React from "react";
import ProfileModal from "./ProfileModal";
import { ArrowLeft, Check } from "lucide-react";
import { useDispatch } from "react-redux";
import { profileToggleAction } from "@/redux/features/toggle";

export default function Countries() {
  const countries = [
    "United States",
    "Canada",
    "Mexico",
    "Brazil",
    "United Kingdom",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Russia",
    "China",
    "Japan",
    "India",
    "Australia",
    "South Africa",
  ];
const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center mx-auto w-full  max-w-[300px] min-w-[300px]">
      <div className="flex flex-col justify-center w-full ">
        <div className="flex flex-col w-full bg-white">
          <div className="flex z-10 gap-4 px-3.5 py-5 text-base border-b text-neutral-700">
            <ArrowLeft
              className="cursor-pointer"
              onClick={() => dispatch(profileToggleAction(0))}
            />
            <div className="flex-auto">Choose your location</div>
          </div>
          <div className="flex flex-col gap-[4px]">
            {countries.map((item, index) => (
              <button className="flex min-h-[40px] px-5 items-center justify-start gap-[15px] hover:bg-[#ddd] duration-300 ease-in-out transition-all ">
                <div className="w-6 h-6">{index == 0 && <Check />}</div>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
