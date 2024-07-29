"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const SidebarPadding = () => {
  const { sidebarToggle } = useSelector((state: RootState) => state.toggle);

  return (
    <div className={`${sidebarToggle ? "pl-[240px]" : "pl-[72px]"} `}></div>
  );
};

export default SidebarPadding;
