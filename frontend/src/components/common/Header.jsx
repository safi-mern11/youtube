"use client";
import { useTheme } from "next-themes";
import React from "react";

const Header = () => {
  const { setTheme, theme } = useTheme();
  return (
    <header className="flex justify-between items-center min-h-[56px] max-h-[56px] px-4">
      <div className="flex items-center gap-[16px] max-h-[20px]">
        <button
          onClick={() => {
            setTheme("dark");
          }}
        >
          <img src="/images/common/menu.svg" alt="" />
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
      <form className="flex items-center max-h-[40px] min-h-[40px] border border-[#303030] rounded-[40px] overflow-hidden">
        <input
          type="text"
          className="pl-[16px] bg-transparent outline-none"
          placeholder="Search"
        />
      </form>
    </header>
  );
};

export default Header;
