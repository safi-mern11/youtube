"use client"
import { useEffect, useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/DropDown"

type video2 = {
    id: number
    title: string
    thumbnail: string
    logo: string
    channelName: string
    views: string
    uploaded: string
    options?: Boolean
}

interface videoInterface extends video2 {
    videos: video2[]
    setVideos: React.Dispatch<React.SetStateAction<video2[]>>
}

function Video({ id, thumbnail, logo, title, channelName, views, uploaded, options, videos, setVideos }: videoInterface) {
    // const handleVideoOptions = (videos: video2[], id: number) => {
    //     const updatedArr = videos.map((video: video2) => {
    //         if (video.id === id) {
    //             video.options = !video.options
    //             return video;
    //         } else {
    //             video.options = false
    //             return video;
    //         }
    //     })
    //     setVideos(updatedArr)
    // }

    return (
        <div className=" cursor-pointer min-h-[316px] w-full">
            <img className=" rounded-[12px] w-full max-h-[219px]" src={thumbnail} />
            <div className="flex items-center mt-[12px] justify-between">
                <div className="flex gap-[12px] items-center">
                    <img className="max-w-[40px] w-full cursor-pointer max-h-[40x] rounded-full" src={logo} />
                    <div>
                        <h1 className="text-[#0F0F0F] text-[16px] font-semibold">{title}</h1>
                        <div className="flex text-[#606060] items-center gap-[5px]">
                            <p className="text-[14px] hover:text-[#0F0F0F] transition duration-200 ease-in-out cursor-pointer">{channelName}</p>
                            <img className="max-w-[14px] max-h-[14px] w-full" src="./images/common/verified.svg" />
                        </div>
                        <div className="text-[#606060] flex text-[14px]">
                            <p className="">{views}</p>
                            <span className="mx-[4px] w-fit">·</span>
                            <p>{uploaded}</p>
                        </div>
                    </div>
                </div>
                <div className="self-start">
                <DropdownMenu modal={false}>
                        <DropdownMenuTrigger className="outline-none">
                            <img className="max-w-[24px] outline-none w-full max-h-[24px]" src="./images/common/video-option.svg" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white rounded-[12px] border-none max-w-[254px] w-full  px-0 py-[8px]">
                            <div className="border-b-[1px] border-solid max-w-[254px] w-full border-[#0000001a] pb-[8px]">
                            <DropdownMenuItem className="text-[#0F0F0F] rounded-none hover:bg-[#dbdbdb] m-0 pl-[16px] pr-[12px] flex items-center gap-[16px] cursor-pointer">
                                <img src="./images/common/que.svg" />
                                <p>Add to queue</p>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-[#0F0F0F] rounded-none hover:bg-[#dbdbdb] m-0 pl-[16px] pr-[12px] flex items-center gap-[16px] cursor-pointer">
                                <img src="./images/common/clock.svg" />
                                <p>Save to Watch later</p>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-[#0F0F0F] rounded-none hover:bg-[#dbdbdb] m-0 pl-[16px] pr-[12px] flex items-center gap-[16px] cursor-pointer">
                                <img src="./images/common/save-playlist.svg" />
                                <p>Save to playlist</p>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-[#0F0F0F] rounded-none hover:bg-[#dbdbdb] m-0 pl-[16px] pr-[12px] flex items-center gap-[16px] cursor-pointer">
                                <img src="./images/common/download.svg" />
                                <p>Download</p>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-[#0F0F0F] rounded-none hover:bg-[#dbdbdb] m-0 pl-[16px] pr-[12px] flex items-center gap-[16px] cursor-pointer">
                                <img src="./images/common/share.svg" />
                                <p>Share</p>
                            </DropdownMenuItem>
                            </div>
                            <DropdownMenuItem className="text-[#0F0F0F] rounded-none hover:bg-[#dbdbdb] m-0 pl-[16px] mt-[8px] pr-[12px] flex items-center gap-[16px] cursor-pointer">
                                <img src="./images/common/circle-line.svg" />
                                <p>Not interested</p>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-[#0F0F0F] rounded-none hover:bg-[#dbdbdb] m-0 pl-[16px] pr-[12px] flex items-center gap-[16px] cursor-pointer">
                                <img src="./images/common/stop.svg" />
                                <p>Don't recommend channel</p>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-[#0F0F0F] rounded-none hover:bg-[#dbdbdb] m-0 pl-[16px] pr-[12px] flex items-center gap-[16px] cursor-pointer">
                                <img src="./images/common/flag.svg" />
                                <p>Report</p>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}

export default Video