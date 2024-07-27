import { content, links } from "@/lib/sidebar-content";
import { icons } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const SideBar = () => {
  return (
    <div
      className={`fixed max-h-[calc(100vh_-_56px)] overflow-y-auto max-w-[240px] w-full top-[56px] bg-[#fff] py-[18px]`}
    >
      <div className="flex flex-col gap-[2px] border-b border-[#0000001a] pb-[10px] px-[18px]">
        {content.home.map((item, index) => (
          <button
            key={index + "constenthome"}
            className={`flex gap-[24px] items-center min-h-[40px]`}
          >
            <div className="w-[24px] h-[24px]">{item.icon}</div>
            {item.text}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-[2px] border-b border-[#0000001a] py-[10px] px-[18px]">
        <button
          className={`flex gap-[2px] items-center min-h-[40px] text-[18px] font-medium `}
        >
          You
          <div className="w-[17px] h-[17px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={16}
              viewBox="0 0 16 16"
              width={16}
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "100%",
                height: "100%",
              }}
              aria-hidden="true"
            >
              <path d="M4.97 12.65 9.62 8 4.97 3.35l.71-.71L11.03 8l-5.35 5.35-.71-.7z" />
            </svg>
          </div>
        </button>
        {content.you.map((item, index) => (
          <button
            key={index + "subscription"}
            className={`flex gap-[24px] items-center min-h-[40px]`}
          >
            <div className="w-[24px] h-[24px]">{item.icon}</div>
            {item.text}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-[2px] border-b border-[#0000001a] py-[10px] px-[18px]">
        <button
          className={`flex gap-[2px] items-center min-h-[40px] text-[18px] font-medium `}
        >
          Subscriptions
        </button>
        {content.subscription.map((item, index) => (
          <button
            key={index + "subscription"}
            className={`flex gap-[24px] items-center min-h-[40px]`}
          >
            <div className="w-[24px] h-[24px]">{item.icon}</div>
            {item.channelName}
          </button>
        ))}
        <button className={`flex gap-[24px] items-center min-h-[40px]`}>
          <div className="w-[24px] h-[24px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
              <path d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z" />
            </svg>
          </div>
          See More
        </button>
      </div>
      <div className="flex flex-col gap-[2px] border-b border-[#0000001a] py-[10px] px-[18px]">
        <button
          className={`flex gap-[2px] items-center min-h-[40px] text-[18px] font-medium `}
        >
          Explore
        </button>
        {content.explore.map((item, index) => (
          <button
            key={index + "subscription"}
            className={`flex gap-[24px] items-center min-h-[40px]`}
          >
            <div className="w-[24px] h-[24px]">{item.icon}</div>
            {item.text}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-[2px] border-b border-[#0000001a] py-[10px] px-[18px]">
        {content.setting.map((item, index) => (
          <button
            key={index + "subscription"}
            className={`flex gap-[24px] items-center min-h-[40px]`}
          >
            <div className="w-[24px] h-[24px]">{item.icon}</div>
            {item.name}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-[14px]  pt-[20px] pb-[5px] px-[18px]">
        <div className="flex flex-wrap gap-[5px] max-w-[170px] w-full">
          {links.first.map((item, index) => (
            <Link
              key={index + "linkssidebar"}
              href={"/"}
              className="font-medium text-[12px]"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-[5px] max-w-[170px] w-full">
          {links.second.map((item, index) => (
            <Link
              key={index + "linkssidebar"}
              href={"/"}
              className="font-medium text-[12px]"
            >
              {item}
            </Link>
          ))}
        </div>

        <p className="text-[14px]">{links.third}</p>
      </div>
    </div>
  );
};

export default SideBar;
