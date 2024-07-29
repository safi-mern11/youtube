"use client";
import { useDispatch } from "react-redux";
import SideBarContent from "./SidebarContent";
import { sidebarToggleAction } from "@/redux/features/toggle";

const SideBar = ({ sidebarToggle }: { sidebarToggle: boolean }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={() => {
          dispatch(sidebarToggleAction());
        }}
        className={`w-[100vw] h-[100vh] bg-[#000] bg-opacity-20 fixed z-20  ${
          sidebarToggle ? "" : `hidden`
        }`}
      ></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`z-20 fixed  max-w-[240px] w-full h-[100vh] bg-[#fff] py-[18px] ${
          sidebarToggle ? "translate-x-0" : "translate-x-[-240px]"
        } duration-300 ease-in-out transition-all`}
      >
        <div className="flex items-center gap-[16px] max-h-[20px] pt-[10px] pb-[34px] pl-[16px]">
          <button
            onClick={() => {
              dispatch(sidebarToggleAction());
            }}
          >
            <img
              src="/images/common/light-menu.svg"
              alt=""
              className="dark:hidden block"
            />
            <img
              src="/images/common/dark-menu.svg"
              alt=""
              className="dark:block hidden"
            />
          </button>
          <button>
            <img
              src="/images/common/light-logo.svg"
              alt=""
              className="dark:hidden block"
            />
            <img
              src="/images/common/dark-logo.svg"
              alt=""
              className="dark:block hidden"
            />
          </button>
        </div>
        <div className="max-h-[calc(100vh_-_56px)] overflow-y-auto">
          <SideBarContent />
        </div>
      </div>
    </>
  );
};

export default SideBar;
