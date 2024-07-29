"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

function Sidebar() {
    const pathname = usePathname()
    const navBtns: string[] = ['Account', 'Notifications', 'Playback and performance', 'Downloads', 'Privacy', 'Connected apps', 'Billing and payments', 'Advanced settings']
    const setPathFunc = (nav: string): string => {
        switch (nav) {
            case 'Account':
                return '/settings'

            case 'Notifications':
                return '/settings/notifications'

            case 'Playback and performance':
                return '/settings/playback'

            case 'Privacy':
                return '/settings/privacy'

            case 'Connected apps':
                return '/settings/sharing'

            case 'Billing and payments':
                return '/settings/billing'

            case 'Advanced settings':
                return '/settings/advanced'

            case 'Downloads':
                return '/settings/downloads'
            default:
                return '/'
        }
    }


    return (
        <div className="max-w-[240px] fixed pt-[18px] w-full">
            <h1 className="text-[#606060] font-semibold text-[20px] pl-[24px] pb-[20px]">Settings</h1>

            {navBtns.map((nav, index) => {
                let path = setPathFunc(nav);
                return (
                    <Link onClick={() => {
                        path = ''
                    }} key={index} href={path}>
                        <div className={`${pathname === path ? "bg-[#0000001a] font-medium" : 'hover:bg-[#0000001a]/5'} mx-auto py-[10px] rounded-[10px] whitespace-nowrap text-[14px] max-w-[216px] w-full px-[16px]`}>
                            <h1>{nav}</h1>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Sidebar