"use client"
import { usePathname } from "next/navigation"

type props = {
    text: string
    classes?: string
}


function Button({ text, classes }: props) {
    const pathname = usePathname()
    return (
        <button className={`${pathname === "/settings/notifications" ? "border-none" : " border-solid border-[1px] hover:border-transparent  border-[#0000001a]"} w-fit px-[15px] h-fit ${classes} border-[#0000001a] text-[#065fd4] hover:bg-[#065FD4]/15 py-[7.5px] text-[14px] font-semibold rounded-[18px]`}>
            {text}
        </button>
    )
}

export default Button