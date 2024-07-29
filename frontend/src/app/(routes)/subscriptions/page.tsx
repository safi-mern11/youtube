"use client"
import { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../components/ui/DropDown"

interface subcriptionInterface {
    logo: string
    channelName: string
    subscribers: string
    channelTag: string
    channelDescription: string
    subscribed: boolean
}

class subscription implements subcriptionInterface {
    logo
    channelName
    subscribers
    channelTag
    channelDescription
    subscribed

    constructor(logo: string, channelName: string, channelTag: string, channelDescription: string, subscribed: boolean, subscribers: string) {
        this.logo = logo
        this.channelName = channelName
        this.subscribers = subscribers
        this.channelTag = channelTag
        this.channelDescription = channelDescription
        this.subscribed = subscribed
    }
}


function Subscriptions() {
    const [subscribersArr, setSubscribersArr] = useState<subcriptionInterface[]>([
        new subscription("//yt3.googleusercontent.com/ZN7aIv1nERsmSSq6cpdE8gFeAgDDsKyKluEr88eZCF8Qd4sX51hljFGI9T9Ykcc6TIypvZ4y4sE=s176-c-k-c0x00ffffff-no-rj-mo", "@Motive_Momentum", "@Motive_Momentum0745", "Aaron's Animals is a series of videos documenting the life of Aaron and his Animals. On this YouTube channel you will find the entire collection of Aaron's Animals.", true, "1.09k"),
        new subscription("//yt3.googleusercontent.com/ZN7aIv1nERsmSSq6cpdE8gFeAgDDsKyKluEr88eZCF8Qd4sX51hljFGI9T9Ykcc6TIypvZ4y4sE=s176-c-k-c0x00ffffff-no-rj-mo", "@Motive_Momentum", "@Motive_Momentum0745", "Aaron's Animals is a series of videos documenting the life of Aaron and his Animals. On this YouTube channel you will find the entire collection of Aaron's Animals.", true, "1.09k"),
        new subscription("//yt3.googleusercontent.com/ZN7aIv1nERsmSSq6cpdE8gFeAgDDsKyKluEr88eZCF8Qd4sX51hljFGI9T9Ykcc6TIypvZ4y4sE=s176-c-k-c0x00ffffff-no-rj-mo", "@Motive_Momentum", "@Motive_Momentum0745", "Aaron's Animals is a series of videos documenting the life of Aaron and his Animals. On this YouTube channel you will find the entire collection of Aaron's Animals.", true, "1.09k"),
        new subscription("//yt3.googleusercontent.com/ZN7aIv1nERsmSSq6cpdE8gFeAgDDsKyKluEr88eZCF8Qd4sX51hljFGI9T9Ykcc6TIypvZ4y4sE=s176-c-k-c0x00ffffff-no-rj-mo", "@Motive_Momentum", "@Motive_Momentum0745", "Aaron's Animals is a series of videos documenting the life of Aaron and his Animals. On this YouTube channel you will find the entire collection of Aaron's Animals.", true, "1.09k"),
        new subscription("//yt3.googleusercontent.com/ZN7aIv1nERsmSSq6cpdE8gFeAgDDsKyKluEr88eZCF8Qd4sX51hljFGI9T9Ykcc6TIypvZ4y4sE=s176-c-k-c0x00ffffff-no-rj-mo", "@Motive_Momentum", "@Motive_Momentum0745", "Aaron's Animals is a series of videos documenting the life of Aaron and his Animals. On this YouTube channel you will find the entire collection of Aaron's Animals.", true, "1.09k"),
        new subscription("//yt3.googleusercontent.com/ZN7aIv1nERsmSSq6cpdE8gFeAgDDsKyKluEr88eZCF8Qd4sX51hljFGI9T9Ykcc6TIypvZ4y4sE=s176-c-k-c0x00ffffff-no-rj-mo", "@Motive_Momentum", "@Motive_Momentum0745", "Aaron's Animals is a series of videos documenting the life of Aaron and his Animals. On this YouTube channel you will find the entire collection of Aaron's Animals.", true, "1.09k"),
        new subscription("//yt3.googleusercontent.com/ZN7aIv1nERsmSSq6cpdE8gFeAgDDsKyKluEr88eZCF8Qd4sX51hljFGI9T9Ykcc6TIypvZ4y4sE=s176-c-k-c0x00ffffff-no-rj-mo", "@Motive_Momentum", "@Motive_Momentum0745", "Aaron's Animals is a series of videos documenting the life of Aaron and his Animals. On this YouTube channel you will find the entire collection of Aaron's Animals.", true, "1.09k"),
        new subscription("//yt3.googleusercontent.com/ZN7aIv1nERsmSSq6cpdE8gFeAgDDsKyKluEr88eZCF8Qd4sX51hljFGI9T9Ykcc6TIypvZ4y4sE=s176-c-k-c0x00ffffff-no-rj-mo", "@Motive_Momentum", "@Motive_Momentum0745", "Aaron's Animals is a series of videos documenting the life of Aaron and his Animals. On this YouTube channel you will find the entire collection of Aaron's Animals.", true, "1.09k"),
        new subscription("//yt3.googleusercontent.com/ZN7aIv1nERsmSSq6cpdE8gFeAgDDsKyKluEr88eZCF8Qd4sX51hljFGI9T9Ykcc6TIypvZ4y4sE=s176-c-k-c0x00ffffff-no-rj-mo", "@Motive_Momentum", "@Motive_Momentum0745", "Aaron's Animals is a series of videos documenting the life of Aaron and his Animals. On this YouTube channel you will find the entire collection of Aaron's Animals.", true, "1.09k"),
    ])

    return (
        <div className='mt-[24px] max-w-[1920px] w-full mx-auto'>
            {subscribersArr.map(({ logo, channelName, channelTag, channelDescription, subscribers }, index) => {
                return (
                    <div key={index} className='max-w-[1260px] w-full  mx-auto'>
                        <div className='flex gap-[16px] pr-[24px] mb-[16px] max-w-[1284px] w-full'>
                            <div className='max-w-[500px] cursor-pointer flex justify-center w-full'>
                                <img className='rounded-[50%] max-w-[136px] w-full max-h-[136px]' src="//yt3.googleusercontent.com/ZN7aIv1nERsmSSq6cpdE8gFeAgDDsKyKluEr88eZCF8Qd4sX51hljFGI9T9Ykcc6TIypvZ4y4sE=s176-c-k-c0x00ffffff-no-rj-mo" />
                            </div>
                            <div className='flex items-center max-w-[744px] w-full'>
                                <div className='pb-[16px] hover:cursor-pointer  min-h-[136px] flex flex-col justify-center max-w-[593.54px] w-full pr-[16px]'>
                                    <div className='flex mb-[8px] gap-[4px] items-center'>
                                        <h1 className='text-[#0F0F0F] font-medium text-[18px]'>{channelName}</h1>
                                        <img className='max-w-[14px] max-h-[14px] w-full' src="./images/common/verified.svg" />
                                    </div>
                                    <div className='text-[#606060] text-[12px] flex mb-[4px] gap-[4px]'>
                                        <p>{channelTag}</p>
                                        <span>·</span>
                                        <p>{subscribers} subscribers</p>
                                    </div>
                                    <p className='flex text-[#606060] text-[12px]'>{channelDescription}</p>
                                </div>

                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger className="outline-none max-w-[150px] w-full">
                                        <div className='text-[#0F0F0F] cursor-pointer relative  items-center justify-center flex bg-[#0000000d] rounded-[18px] h-fit text-[12px] px-[16px] gap-[6px] leading-[36px] font-medium'>
                                            <img className='absolute left-2.5 max-h-[24px]' src="./images/common/notifications-enabled.svg" />
                                            <h1>Subscribed</h1>
                                            <img className='absolute right-2.5' src="./images/common/arrow-down.svg" />
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="bg-white rounded-[12px] border-none max-w-[172px] w-full  px-0 py-[8px]">
                                        <div className=" max-w-[172px] w-full  pb-[8px]">
                                            <DropdownMenuItem className="text-[#0F0F0F] rounded-none hover:bg-[#dbdbdb] m-0 pl-[16px] pr-[12px] flex items-center gap-[16px] cursor-pointer">
                                                <img src="./images/common/notifications-enabled.svg" />
                                                <p>All</p>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-[#0F0F0F] rounded-none hover:bg-[#dbdbdb] m-0 pl-[16px] pr-[12px] flex items-center gap-[16px] cursor-pointer">
                                                <img src="./images/common/bell-sub.svg" />
                                                <p>Personalized</p>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-[#0F0F0F] rounded-none hover:bg-[#dbdbdb] m-0 pl-[16px] pr-[12px] flex items-center gap-[16px] cursor-pointer">
                                                <img src="./images/common/none.svg" />
                                                <p>None</p>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-[#0F0F0F] rounded-none hover:bg-[#dbdbdb] m-0 pl-[16px] pr-[12px] flex items-center gap-[16px] cursor-pointer">
                                                <img src="./images/common/unsubscribe.svg" />
                                                <p>Unsubscribe</p>
                                            </DropdownMenuItem>
                                        </div>

                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Subscriptions