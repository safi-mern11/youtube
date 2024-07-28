"use client";
import SidebarPadding from "@/app/components/common/sidebar/SidebarPadding";
import Short from "@/app/components/shorts/Short";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/app/components/ui/Carousel";
import ReactFullpage from "@fullpage/react-fullpage";
import { ArrowDown, ArrowUp } from "lucide-react";
import React, { useState } from "react";

const Buttons = ({ fullPage }: { fullPage: any }) => {
  return (
    <div className="flex flex-col gap-4 max-w-[56px] w-full fixed right-[20px] inset-y-0 my-auto z-20 max-h-[128px]">
      <button
        onClick={() => fullPage?.moveSectionUp()}
        className="h-[52px] w-[52px] rounded-full bg-[#000] bg-opacity-10 hover:bg-opacity-20 duration-300 ease-in-out transition-all flex justify-center items-center"
      >
        <ArrowUp className="w-[28px] h-[28px]" />
      </button>
      <button
        onClick={() => fullPage?.moveSectionDown()}
        className="h-[52px] w-[52px] rounded-full bg-[#000] bg-opacity-10 hover:bg-opacity-20 duration-300 ease-in-out transition-all flex justify-center items-center"
      >
        <ArrowDown className="w-[28px] h-[28px]" />
      </button>
    </div>
  );
};

const Page = ({ params }: { params: { id: string } }) => {
  const [fullPage, setFullPage] = useState<any>();
  return (
    <>
      <div className="w-full h-[calc(100vh_-_60px)] flex justify-center ">
        <SidebarPadding />
        <ReactFullpage
          scrollingSpeed={1200} /* Options here */
          render={({ state, fullpageApi }) => {
            setFullPage(fullpageApi);
            return (
              <ReactFullpage.Wrapper>
                {/* <button onClick={() => fullpageApi.moveSectionDown()}> */}
                {Array.from({ length: 5 }).map((_, index) => (
                  <div className="section">
                    <Short isCommentsOpend={true} />
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
      <Buttons fullPage={fullPage} />
    </>
  );
};

export default Page;
