"use client";
import { Pause, Play, Volume2 } from "lucide-react";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import ShortContent from "./ShortContent";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface ShotProps {
  isCommentsOpend: boolean;
}

interface VideoState {
  playing: boolean;
  muted: boolean;
  volume: number;
  played: number;
  seeking: boolean;
}

const Short = ({ isCommentsOpend }: ShotProps) => {
  const { shortCommentsToggle } = useSelector(
    (state: RootState) => state.toggle
  );
  const videoPlayerRef = useRef<ReactPlayer>(null);
  const [videoState, setVideoState] = useState<VideoState>({
    playing: true,
    muted: true,
    volume: 0,
    played: 0,
    seeking: false,
  });

  const { playing, muted, volume, played, seeking } = videoState;

  const playPauseHandler = () => {
    setVideoState({ ...videoState, playing: !playing });
  };

  const volumeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value) / 100;
    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: newVolume === 0,
    });
  };

  const seekHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPlayed = Number(e.target.value) / 100;
    setVideoState({ ...videoState, played: newPlayed });
  };

  const seekMouseUpHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    const newPlayed = Number(e.currentTarget.value) / 100;
    setVideoState({ ...videoState, seeking: false });
    videoPlayerRef.current?.seekTo(newPlayed);
  };

  const progressHandler = (state: { played: number }) => {
    if (!seeking) {
      setVideoState({ ...videoState, ...state });
    }
  };

  return (
    <div className={` h-[calc(91vh_-_10px)] mt-[10px] flex justify-start`}>
      <div
        className={`w-[26vw] ${
          shortCommentsToggle
            ? "rounded-tl-[15px] rounded-bl-[15px]"
            : "rounded-[15px]"
        } overflow-hidden relative bg-slate-400`}
      >
        <ReactPlayer
          ref={videoPlayerRef}
          url="/short.mkv"
          width="100%"
          height="100%"
          loop
          playing={playing}
          muted={muted}
          volume={volume}
          onProgress={progressHandler}
        />
        <ShortContent
          onPlayPause={playPauseHandler}
          playing={playing}
          onSeek={seekHandler}
          onSeekMouseUp={seekMouseUpHandler}
          volume={volume}
          onVolumeChange={volumeChangeHandler}
          played={played}
        />
        {/* <div className="absolute bottom-[4px] z-[10] rounded-b-[20px] overflow-hidden w-full">
          <input
            type="range"
            min={0}
            max={100}
            value={played * 100}
            onChange={seekHandler}
            onMouseUp={seekMouseUpHandler}
            className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer  `}
            style={{
              background: `linear-gradient(to right, #4f46e5 0%, #4f46e5 ${
                played * 100
              }%, #e5e7eb ${played * 100}%, #e5e7eb 100%)`,
            }}
          />
        </div> */}
      </div>
      <div
        className={` ${
          shortCommentsToggle &&
          "rounded-tr-[15px]p-4 rounded-br-[15px] w-[26vw]"
        }  overflow-hidden relative bg-slate-400  duration-300 ease-in-out transition-all`}
      ></div>
    </div>
  );
};

export default Short;
