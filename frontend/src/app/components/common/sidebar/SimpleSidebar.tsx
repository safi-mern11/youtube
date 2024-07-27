import React from "react";
import SidebarContent from "./SidebarContent";
import { content } from "@/lib/sidebar-content";
import { usePathname } from "next/navigation";

const SimpleSidebar = ({ sidebarToggle }: { sidebarToggle: boolean }) => {
  const path = usePathname();
  return (
    <>
      <div
        className={`fixed z-20 max-h-[calc(100vh_-_56px)] overflow-y-auto  w-full top-[56px] bg-[#fff] ${
          sidebarToggle ? "py-[18px] max-w-[240px]" : "max-w-[72px]"
        }`}
      >
        {sidebarToggle ? (
          <SidebarContent />
        ) : (
          <div className="pt-[13px] flex flex-col justify-center items-center">
            {content.home.map((item, index) => (
              <button
                key={index + "contentkey"}
                className="flex flex-col gap-[5px] justify-center items-center py-[12px] hover:bg-[#ddd] max-w-[65px] w-full rounded-[10px]"
              >
                <div className="w-[24px] h-[24px]">
                  {" "}
                  {path == item.route
                    ? (item as any).selectedIcon || item.icon
                    : item.icon}
                </div>
                <p className="text-[10px] font-medium">{item.text}</p>
              </button>
            ))}
            <button className="flex flex-col gap-[5px] justify-center items-center py-[10px] hover:bg-[#ddd] max-w-[65px] w-full rounded-[10px]">
              <div className="w-[24px] h-[24px]">
                {path == "/you" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    height={24}
                    viewBox="0 0 24 24"
                    width={24}
                    focusable="false"
                    style={{
                      pointerEvents: "none",
                      display: "inherit",
                      width: "100%",
                      height: "100%",
                    }}
                    aria-hidden="true"
                  >
                    <path d="M4 20h14v1H3V6h1v14zM21 3v15H6V3h15zm-4 7.5L11 7v7l6-3.5z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    height={24}
                    viewBox="0 0 24 24"
                    width={24}
                    focusable="false"
                    style={{
                      pointerEvents: "none",
                      display: "inherit",
                      width: "100%",
                      height: "100%",
                    }}
                    aria-hidden="true"
                  >
                    <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z" />
                  </svg>
                )}
              </div>
              <p className="text-[10px] font-medium">You</p>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SimpleSidebar;
