"use client";
import { RootState } from "@/lib/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const SidebarPadding = () => {
  const { isOpen } = useSelector((state: RootState) => state.sidebarToggle);

  return <div className={`${isOpen ? "pl-[240px]" : "pl-[72px]"} `}></div>;
};

export default SidebarPadding;
