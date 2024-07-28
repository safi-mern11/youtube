import {
  EllipsisVertical,
  MessageSquareText,
  Music,
  Pause,
  Play,
  Share,
  ThumbsDown,
  ThumbsUp,
  Volume2,
} from "lucide-react";
import React from "react";
interface ContentProps {
  onPlayPause: () => void;
  playing: boolean;
  onSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSeekMouseUp: (e: React.MouseEvent<HTMLInputElement>) => void;
  volume: number;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  played: number;
}

const ShortContent = ({
  onPlayPause,
  playing,
  onSeek,
  onSeekMouseUp,
  volume,
  onVolumeChange,
  played,
}: ContentProps) => {
  const features = [
    {
      textValue: "1.1M",
      icon: <ThumbsUp fill="#fff" />,
    },
    {
      textValue: "Dislike",
      icon: <ThumbsDown fill="#fff" />,
    },
    {
      textValue: "61",
      icon: <MessageSquareText fill="#fff" />,
    },
    {
      textValue: "Share",
      icon: <Share fill="#fff" />,
    },
    {
      icon: <EllipsisVertical fill="#fff" />,
    },
  ];
  return (
    <>
      <div className="flex gap-[16px] absolute top-[20px] left-4 max-w-[280px] w-full">
        <button
          onClick={onPlayPause}
          className="h-[48px] w-[48px] rounded-full bg-[#000] bg-opacity-20 flex justify-center items-center"
        >
          {playing ? (
            <Pause fill="#fff" stroke="0" />
          ) : (
            <Play fill="#fff" stroke="0" />
          )}
        </button>
        <div className="group h-[48px] max-w-[48px] hover:max-w-[202px] w-full rounded-full bg-[#000] bg-opacity-20 flex   px-[12px] items-center justify-between duration-300 ease-in-out transition-all">
          <Volume2
            fill="#fff"
            stroke="#fff"
            width={24}
            height={24}
            className="w-6 h-6 "
          />
          <input
            type="range"
            min={0}
            max={100}
            value={volume * 100}
            onChange={onVolumeChange}
            className={`w-full group-hover:max-w-[130px] max-w-[0px] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer   group-hover:z-[1] z-0 opacity-0 group-hover:opacity-100`}
            style={{
              background: `linear-gradient(to right, #4f46e5 0%, #4f46e5 ${
                volume * 100
              }%, #e5e7eb ${volume * 100}%, #e5e7eb 100%)`,
            }}
          />
        </div>
      </div>
      <div className="flex gap-[30px] justify-between items-end absolute px-5 bottom-4 w-full text-[#fff]">
        <div className="flex flex-col ">
          <div className="flex items-center gap-[10px]">
            <img
              id="img"
              className="rounded-full w-10 h-10"
              alt="Avatar image"
              height="32"
              width="32"
              src="https://yt3.ggpht.com/5YXOy36wMibj_RWGSqCOrJvxNN_eYvJbRtLdgvBRC7EtBsOS3L4MraHLYUOJd1OiPPX0eFFtvg=s88-c-k-c0x00ffffff-no-rj"
            />
            <p title=" @TheDumbTV" className="max-w-[200px] w-full truncate">
              @TheDumbTV idjidjfiejfjie dijidjefiejf
            </p>
            <button className="min-h-[40px] bg-white text-black rounded-[20px] px-[14px] hover:bg-[#ddd]/80 duration-300 ease-in-out transition-all">
              Subscribe
            </button>
          </div>
          <p className="max-w-[400px] max-h-[100px] overflow-y-hidden  mt-[7px] break-words">
            Kya kare aise bacho ka batao.. #shorts #shorts #shorts #shorts
          </p>
          <div className="flex items-center gap-[10px]  mt-[10px]">
            {" "}
            <Music className="w-5 h-5" />
            <p className="max-w-[200px] truncate  mt-[7px] break-words">
              Kya kare aise bacho ka batao.. #shorts #shorts #shorts #shorts
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[16px]  w-full max-w-[70px] ">
          {features.map((item, index) => (
            <div
              key={index + "features"}
              className="flex flex-col gap-[3px] items-center"
            >
              <button className="h-[50px] w-[50px] flex justify-center items-center rounded-full hover:bg-[#000]/50 bg-[#000]/40">
                {item.icon}
              </button>
              {item.textValue}
            </div>
          ))}
          <img
            id="img"
            className="rounded-full w-10 h-10"
            alt="Avatar image"
            height="32"
            width="32"
            src="https://yt3.ggpht.com/5YXOy36wMibj_RWGSqCOrJvxNN_eYvJbRtLdgvBRC7EtBsOS3L4MraHLYUOJd1OiPPX0eFFtvg=s88-c-k-c0x00ffffff-no-rj"
          />
        </div>
      </div>
    </>
  );
};

export default ShortContent;
