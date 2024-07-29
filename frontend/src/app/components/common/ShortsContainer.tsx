import Short from "./Short"

function ShortsContainer() {
    return (
        <div className="">
            <div className="flex gap-[8px] ml-[8px] mb-[24px] max-w-fit w-full">
                <img src="./images/common/shorts-logo.svg" />
                <h1 className="font-bold text-[#0F0F0F] text-[20px]">Shorts</h1>
            </div>
            <div className="flex gap-[20px] mb-[25px]">
                <Short thumbnail="https://i.ytimg.com/vi/on-DqpH2zTs/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDCtMnLf-kddwkyM4tLzJOMxF7BLw" title="Tanjiro's ability to learn any Breathing Styles! Demon..." views="2.1M" />
                <Short thumbnail="https://i.ytimg.com/vi/on-DqpH2zTs/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDCtMnLf-kddwkyM4tLzJOMxF7BLw" title="Tanjiro's ability to learn any Breathing Styles! Demon..." views="2.1M" />
                <Short thumbnail="https://i.ytimg.com/vi/on-DqpH2zTs/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDCtMnLf-kddwkyM4tLzJOMxF7BLw" title="Tanjiro's ability to learn any Breathing Styles! Demon..." views="2.1M" />
                <Short thumbnail="https://i.ytimg.com/vi/on-DqpH2zTs/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDCtMnLf-kddwkyM4tLzJOMxF7BLw" title="Tanjiro's ability to learn any Breathing Styles! Demon..." views="2.1M" />
                <Short thumbnail="https://i.ytimg.com/vi/on-DqpH2zTs/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDCtMnLf-kddwkyM4tLzJOMxF7BLw" title="Tanjiro's ability to learn any Breathing Styles! Demon..." views="2.1M" />
                <Short thumbnail="https://i.ytimg.com/vi/on-DqpH2zTs/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDCtMnLf-kddwkyM4tLzJOMxF7BLw" title="Tanjiro's ability to learn any Breathing Styles! Demon..." views="2.1M" />
            </div>
            <div className="w-full mb-[28px] relative">
                <div className="flex cursor-pointer font-medium bg-white max-w-[358px] mx-auto rounded-[64px] py-[4px] gap-[8px] items-center justify-center w-full border-solid border-[#0000001a] border-[1px]">
                    <h1>Show more</h1>
                    <img src="./images/common/arrow-down.svg" />
                </div>
                <div className="border-b-[1px] absolute -z-10 top-[50%] border-solid min-h-[1px] w-full border-[#0000001a]">
                </div>
            </div>
        </div>
    )
}

export default ShortsContainer