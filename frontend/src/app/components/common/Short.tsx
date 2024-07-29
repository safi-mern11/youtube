import React from 'react'

interface ShortInterface {
    thumbnail: string,
    title: string,
    views: string,
}

function Short({ title, thumbnail, views }: ShortInterface) {
    return (
        <div className="max-w-[255px] cursor-pointer w-full min-h-[389px]">
            <img className="rounded-[16px] " src={thumbnail} />
            <div className="flex relative pt-[12px] pr-[24px]">
                <h1 className="font-semibold text-[#0F0F0F] mb-[2px] text-[14px]">{title}</h1>
                <img className='absolute right-0 cursor-pointer' src="./images/common/video-option.svg" />
            </div>
            <p className='text-[#606060] text-[13px]'>{views}
                <span className='ml-[4px] text-[12px]'>
                    views
                </span>
            </p>
        </div>
    )
}

export default Short