"use client";
import { useState } from "react";

type video2 = {
  id: number;
  title: string;
  thumbnail: string;
  logo: string;
  channelName: string;
  views: string;
  uploaded: string;
  options?: Boolean;
};

interface videoInterface extends video2 {
  videos: video2[];
  setVideos: React.Dispatch<React.SetStateAction<video2[]>>;
}

function Video({
  id,
  thumbnail,
  logo,
  title,
  channelName,
  views,
  uploaded,
  options,
  videos,
  setVideos,
}: videoInterface) {
  const handleVideoOptions = (videos: video2[], id: number) => {
    const updatedArr = videos.map((video: video2) => {
      if (video.id === id) {
        video.options = !video.options;
        return video;
      } else {
        video.options = false;
        return video;
      }
    });
    setVideos(updatedArr);
  };

  return (
    <div className=" cursor-pointer min-h-[316px] w-full">
      <img className=" rounded-[12px] w-full max-h-[219px]" src={thumbnail} />
      <div className="flex items-center mt-[12px] justify-between">
        <div className="flex gap-[12px] items-center">
          <img
            className="max-w-[40px] w-full cursor-pointer max-h-[40x] rounded-full"
            src={logo}
          />
          <div>
            <h1 className="text-[#0F0F0F] text-[16px] font-semibold">
              {title}
            </h1>
            <div className="flex text-[#606060] items-center gap-[5px]">
              <p className="text-[14px] hover:text-[#0F0F0F] transition duration-200 ease-in-out cursor-pointer">
                {channelName}
              </p>
              <img
                className="max-w-[14px] max-h-[14px] w-full"
                src="./images/common/verified.svg"
              />
            </div>
            <div className="text-[#606060] flex text-[14px]">
              <p className="">{views}</p>
              <span className="mx-[4px] w-fit">·</span>
              <p>{uploaded}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => handleVideoOptions(videos, id)}
          className="self-start"
        >
          <img
            className="max-w-[24px] w-full max-h-[24px]"
            src="./images/common/video-option.svg"
          />
        </button>
        {options && (
          <div className="max-w-[256px] w-full">
            <div>
              <img src="" />
              <p></p>
            </div>
            <div>
              <img src="" />
              <p></p>
            </div>
            <div>
              <img src="" />
              <p></p>
            </div>
            <div>
              <img src="" />
              <p></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Video;
