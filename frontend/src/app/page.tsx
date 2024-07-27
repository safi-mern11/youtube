"use client";
import ChipBar from "@/app/components/common/ChipBar";
import Video from "@/app/components/common/Video";
import Add from "@/app/components/common/Add";
import ShortsContainer from "./components/common/ShortsContainer";
import { useTheme } from "next-themes";
import { useState } from "react";

type video = {
  id: number
  title: string
  thumbnail: string
  logo: string
  channelName: string
  views: string
  uploaded: string
  options?: Boolean
}

class videoClass implements video {
  id
  title
  thumbnail
  logo
  channelName
  views
  uploaded
  options;

  constructor(id: number, title: string, thumbnail: string, logo: string, channelName: string, views: string, uploaded: string, options: Boolean) {
    this.id = id
    this.title = title;
    this.thumbnail = thumbnail
    this.logo = logo
    this.channelName = channelName
    this.views = views
    this.uploaded = uploaded
    this.options = options
  }
}


export default function Home() {
  const { setTheme } = useTheme();
  const [videos, setVideos] = useState<video[]>([
    new videoClass(1, "My First 100 Games of Fortnite", "https://i.ytimg.com/vi/7KDWBkmRRIo/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgTIFIofzAP&rs=AOn4CLDGJFvzvOMcJq15TlKiXNFmSZLkpw", "https://yt3.ggpht.com/gopbHeiDtEB932rIFqLlR4D_hFtd-BcdGrQgGeyDpkD3guskkbT74DsJYPGo3x7MqkyqtgL-=s88-c-k-c0x00ffffff-no-rj", "TheOdd1sOut", "2.9M views", "3 days ago", false),
    new videoClass(2, "My First 100 Games of Fortnite", "https://i.ytimg.com/vi/7KDWBkmRRIo/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgTIFIofzAP&rs=AOn4CLDGJFvzvOMcJq15TlKiXNFmSZLkpw", "https://yt3.ggpht.com/gopbHeiDtEB932rIFqLlR4D_hFtd-BcdGrQgGeyDpkD3guskkbT74DsJYPGo3x7MqkyqtgL-=s88-c-k-c0x00ffffff-no-rj", "TheOdd1sOut", "2.9M views", "3 days ago", false),
    new videoClass(3, "My First 100 Games of Fortnite", "https://i.ytimg.com/vi/7KDWBkmRRIo/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgTIFIofzAP&rs=AOn4CLDGJFvzvOMcJq15TlKiXNFmSZLkpw", "https://yt3.ggpht.com/gopbHeiDtEB932rIFqLlR4D_hFtd-BcdGrQgGeyDpkD3guskkbT74DsJYPGo3x7MqkyqtgL-=s88-c-k-c0x00ffffff-no-rj", "TheOdd1sOut", "2.9M views", "3 days ago", false),
    new videoClass(4, "My First 100 Games of Fortnite", "https://i.ytimg.com/vi/7KDWBkmRRIo/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgTIFIofzAP&rs=AOn4CLDGJFvzvOMcJq15TlKiXNFmSZLkpw", "https://yt3.ggpht.com/gopbHeiDtEB932rIFqLlR4D_hFtd-BcdGrQgGeyDpkD3guskkbT74DsJYPGo3x7MqkyqtgL-=s88-c-k-c0x00ffffff-no-rj", "TheOdd1sOut", "2.9M views", "3 days ago", false),
    new videoClass(5, "My First 100 Games of Fortnite", "https://i.ytimg.com/vi/7KDWBkmRRIo/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgTIFIofzAP&rs=AOn4CLDGJFvzvOMcJq15TlKiXNFmSZLkpw", "https://yt3.ggpht.com/gopbHeiDtEB932rIFqLlR4D_hFtd-BcdGrQgGeyDpkD3guskkbT74DsJYPGo3x7MqkyqtgL-=s88-c-k-c0x00ffffff-no-rj", "TheOdd1sOut", "2.9M views", "3 days ago", false),
    new videoClass(6, "My First 100 Games of Fortnite", "https://i.ytimg.com/vi/7KDWBkmRRIo/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgTIFIofzAP&rs=AOn4CLDGJFvzvOMcJq15TlKiXNFmSZLkpw", "https://yt3.ggpht.com/gopbHeiDtEB932rIFqLlR4D_hFtd-BcdGrQgGeyDpkD3guskkbT74DsJYPGo3x7MqkyqtgL-=s88-c-k-c0x00ffffff-no-rj", "TheOdd1sOut", "2.9M views", "3 days ago", false),
    new videoClass(7, "My First 100 Games of Fortnite", "https://i.ytimg.com/vi/7KDWBkmRRIo/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgTIFIofzAP&rs=AOn4CLDGJFvzvOMcJq15TlKiXNFmSZLkpw", "https://yt3.ggpht.com/gopbHeiDtEB932rIFqLlR4D_hFtd-BcdGrQgGeyDpkD3guskkbT74DsJYPGo3x7MqkyqtgL-=s88-c-k-c0x00ffffff-no-rj", "TheOdd1sOut", "2.9M views", "3 days ago", false),
  ])

  return (
    <div className="pl-[240px] max-w-[1920px] overflow-x-hidden w-full">
      <div className="px-[24px] mt-[22px]">
        <ChipBar />

        <div className="grid mt-[36px] mb-[40px] gap-x-[20px] gap-y-[40px] grid-cols-4">
          <Add title="My First 100 Games of Fortnite" Sponsored="TheOdd1sOut" logo="https://yt3.ggpht.com/gopbHeiDtEB932rIFqLlR4D_hFtd-BcdGrQgGeyDpkD3guskkbT74DsJYPGo3x7MqkyqtgL-=s88-c-k-c0x00ffffff-no-rj" thumbnail="https://i.ytimg.com/vi/7KDWBkmRRIo/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgTIFIofzAP&rs=AOn4CLDGJFvzvOMcJq15TlKiXNFmSZLkpw" />
          {videos.map((video) => {
            return (
              <Video key={video.id} id={video.id} title={video.title} videos={videos} setVideos={setVideos} thumbnail={video.thumbnail} logo={video.logo} views={video.views} channelName={video.channelName} uploaded={video.uploaded} options={video.options} />
            )
          })}
        </div>

        <ShortsContainer />

        <div className="grid mt-[36px] mb-[40px] gap-x-[20px] gap-y-[40px] grid-cols-4">
          <Add title="My First 100 Games of Fortnite" Sponsored="TheOdd1sOut" logo="https://yt3.ggpht.com/gopbHeiDtEB932rIFqLlR4D_hFtd-BcdGrQgGeyDpkD3guskkbT74DsJYPGo3x7MqkyqtgL-=s88-c-k-c0x00ffffff-no-rj" thumbnail="https://i.ytimg.com/vi/7KDWBkmRRIo/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgTIFIofzAP&rs=AOn4CLDGJFvzvOMcJq15TlKiXNFmSZLkpw" />
          {videos.map((video) => {
            return (
              <Video key={video.id} id={video.id} title={video.title} videos={videos} setVideos={setVideos} thumbnail={video.thumbnail} logo={video.logo} views={video.views} channelName={video.channelName} uploaded={video.uploaded} options={video.options} />
            )
          })}
        </div>
      </div>
    </div>
  );
}
