"use client";
import Sidebar from "../sidebar/AbsoluteSidebar";
import Notifications from "./Notifications";
import ProfileModal from "./ProfileModal";
import Appearrnce from "./Appearence";
import Laungage from "./Laungage";
import Restricted from "./Restricted";
import Countries from "./Countries";
import React, { useEffect, useState } from "react";
import KeyboardShortcuts from "./KeyboardShortcuts";
import { usePathname, useRouter } from "next/navigation";
import SimpleSidebar from "../sidebar/SimpleSidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  profileToggleAction,
  sidebarToggleAction,
} from "@/redux/features/toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../ui/DropDown";
import { ArrowUpFromLine, History, Search } from "lucide-react";

const Header = () => {
  const path = usePathname();
  const router = useRouter();
  const { sidebarToggle, profileToggle } = useSelector(
    (state: RootState) => state.toggle
  );
  const dispatch = useDispatch();
  const [searchHistoryDropdown, setSearchHistoryDropdown] = useState(false);

  const profileJsxComponents = [
    <ProfileModal />,
    <Appearrnce />,
    <Laungage />,
    <Restricted />,
    <Countries />,
    <KeyboardShortcuts />,
  ];

  const dummyWords = [
    "cherry",
    "date",
    "elderberry",
    "honeydew",
    "quince",
    "raspberry",
    "strawberry",
    "tangerine",
    "watermelon",
    "xigua",
    "yellow passion fruit",
  ];

  return (
    <>
      {path.includes("setting") || path.includes("info") ? (
        <Sidebar sidebarToggle={sidebarToggle} />
      ) : (
        <SimpleSidebar sidebarToggle={sidebarToggle} />
      )}

      <header className="flex justify-between items-center min-h-[56px] max-h-[56px] px-2.5 fixed w-full bg-white z-10">
        <div className="flex items-center gap-[10px] max-h-[20px] pl-[10px]">
          <button
            onClick={() => {
              dispatch(sidebarToggleAction());
            }}
            className="rounded-full hover:bg-[#000] hover:bg-opacity-10 duration-300 ease-in-out transition-all p-[6px]"
          >
            <img src="/images/common/light-menu.svg" alt="" />
          </button>
          <button onClick={() => router.push("/")}>
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
        <div className="max-w-[692px] w-full flex gap-[12px] pt-[2px]">
          <form className="relative flex items-center max-h-[40px]   max-w-[640px] w-full justify-between">
            <input
              onFocus={() => setSearchHistoryDropdown(true)}
              onBlur={() => setSearchHistoryDropdown(false)}
              type="text"
              className="pl-[16px] focus:border-blue-900 bg-transparent outline-none min-h-[40px]  w-full border border-[#cccccc] rounded-tl-[40px] rounded-bl-[40px] placeholder:text-[16px] searchInput"
              placeholder="Search"
            />
            <div
              style={{
                boxShadow: "7px 7px 7px  rgba(0, 0, 0, 0.1)",
              }}
              className={` absolute max-w-[578px] w-full bg-white border rounded-[10px] pt-3.5 pb-2.5 flex flex-col bottom-[-470px] max-h-[470px] overflow-y-auto ${
                searchHistoryDropdown ? "scale-1 opacity-100 z-[10]" : "hidden"
              } duration-300 ease-in-out transition-all`}
            >
              {dummyWords.map((item, index) => (
                <button
                  className={`px-5 hover:bg-black/10 min-h-[40px] flex justify-between items-center`}
                  key={index + "dummy"}
                >
                  <div className="flex items-center justify-start gap-[16px]">
                    <History strokeWidth={1} />
                    <p className="whitespace-nowrap truncate text-[18px] font-[550] text-neutral-800">
                      {item}
                    </p>
                  </div>
                  <p className="text-[#3551da] text-[14px]">Remove</p>
                </button>
              ))}
            </div>
            <button className="min-h-[40px] flex justify-center items-center  border-y border-r rounded-tr-[40px] rounded-br-[40px] border-[#cccccc] hover:bg-[#cccccd]/40 duration-300 ease-in-out transition-all max-w-[64px] min-w-[64px] bg-[#f8f8f8] dark:bg-[#ffffff14] ">
              <Search className="w-[22px] h-[22px]" strokeWidth={1} />
            </button>
          </form>

          <button className="rounded-full bg-[#0000000d] hover:bg-[#cccccd]/50 duration-300 ease-in-out transition-all flex items-center justify-center h-10 w-10 ">
            <img src="/images/common/mic.svg" alt="" />
          </button>
        </div>
        <div className="max-w-[156px] w-full flex items-center justify-between gap-[15px]">
          <button className="mt-[2px] p-[8px] hover:bg-[#ddd]/50 rounded-full duration-300 ease-in-out transition-all">
            <ArrowUpFromLine />
          </button>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger
              asChild
              className="outline-none cursor-pointer"
            >
              <div
                id="notificationTrigger"
                className="p-[8px] hover:bg-[#ddd]/50 rounded-full duration-300 ease-in-out transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height={30}
                  viewBox="0 0 24 24"
                  width={30}
                  focusable="false"
                  style={{
                    pointerEvents: "none",
                    display: "inherit",
                    width: "100%",
                    height: "100%",
                  }}
                  aria-hidden="true"
                >
                  <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z" />
                </svg>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              style={{
                boxShadow: "5px 5px 7px 7px rgba(0, 0, 0, 0.1)",
              }}
              className="!p-0 mr-[60px] max-h-[calc(100vh_-_56px)] "
            >
              <Notifications />
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger
              asChild
              className="outline-none cursor-pointer"
            >
              <div id="profileTrigger" className="pr-[12px]">
                <img
                  id="img"
                  className="rounded-full overflow-hidden"
                  alt="Avatar image"
                  height="32"
                  width="32"
                  src="https://yt3.ggpht.com/5YXOy36wMibj_RWGSqCOrJvxNN_eYvJbRtLdgvBRC7EtBsOS3L4MraHLYUOJd1OiPPX0eFFtvg=s88-c-k-c0x00ffffff-no-rj"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              onPointerDownOutside={() =>
                setTimeout(() => {
                  dispatch(profileToggleAction(0));
                }, 200)
              }
              style={{
                boxShadow: "5px 5px 7px 7px rgba(0, 0, 0, 0.1)",
              }}
              className="!p-0 mr-[20px] max-h-[calc(100vh_-_56px)] overflow-y-auto border-none rounded-[15px]"
            >
              {profileJsxComponents[profileToggle]}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="pb-[56px]" />
    </>
  );
};

export default Header;
