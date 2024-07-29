interface HeadProps {
    title: string
    about: string
    info: string
    image?: string
    children?: React.ReactNode 
}

function Head({ title, about, info, image, children }: HeadProps) {
    return (
        <div className="flex border-solid justify-between pt-[48px]  border-b-[1px] border-[#0000001a]">
            <div className="pb-[24px]">
                <h1 className="text-[16px] text-[#0F0F0F] font-semibold">{title}</h1>
                <p className="text-[#0F0F0F] mt-[40px] mb-[12px] text-[24px]">{about}</p>
                <p className="text-[#606060] text-[14px]">{info}</p>
                {children}
            </div>
            <img className="max-w-[180px] max-h-[180px]" src={image} />
        </div>
    )
}

export default Head