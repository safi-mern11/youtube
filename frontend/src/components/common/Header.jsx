"use client";
import React from "react";

const Header = () => {
  return (
    <main className="flex justify-between items-center min-h-[56px] max-h-[56px]">
      <div className="flex items-center gap-[16px] h-full">
        <img src="/images/common/menu.svg" alt="" />
        <img src="/images/common/logo.svg" alt="" />
      </div>
    </main>
  );
};

export default Header;
