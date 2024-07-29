"use client"
import { Switch } from "../../../../app/components/ui/Switch"
import Button from "../components/Button"
import Head from "../components/Head"
import { useState } from "react"

function page() {
    const [unsubEmailToggle, setUnSubEmailToggle] = useState<boolean>(false)
    const preferences = [{
        title: "Recommended videos",
        description: "Notify me of videos I might like based on what I watch"
    }, {
        title: "Activity on my channel",
        description: "Notify me about comments and other activity on my channel or videos"
    }, {
        title: "Replies to my comments",
        description: "Notify me about activity on my comments and posts on other channels"
    }, {
        title: "Mentions",
        description: "Notify me when others mention my channel"
    }, {
        title: "Shared content",
        description: "Notify me when others share my content on their channels"
    }, {
        title: "Promotional content and offerings",
        description: "Notify me of promotional content and offerings, like members-only perks"
    },]

    return (
        <div className="pl-[240px] overflow-x-hidden">
            <div className="mx-[32px]">
                <div className="max-w-[1016px] w-full mx-auto">
                    <Head image="../images/common/settings-notifications.svg" title="Notifications" about="Choose when and how to be notified" info="Select push and email notifications you'd like to receive" />

                    <div className="pt-[24px] border-b-[1px] border-solid border-[#0000001a]">
                        <h1 className="mb-[8px] text-[20px] text-[#0F0F0F] font-bold">General</h1>
                        <p className="text-[#606060] text-[12px]">Manage your mobile and desktop notifications</p>

                        <div className="py-[20px] mt-[20px] mb-[20px] flex gap-[56px]">
                            <h1 className="max-w-[160px] font-semibold text-[14px] text-[#0F0F0F] w-full">Your Preferences</h1>
                            <div className="">
                                <div className="flex py-[12px]">
                                    <div className="min-w-[58px] pr-[12px] mt-[3px] ">
                                        <Switch />
                                    </div>
                                    <div>
                                        <h1 className="pb-[4px] text-[14px] text-[#0F0F0F] font-semibold">Subscriptions</h1>
                                        <p className="text-[#606060]  text-[14px]">Notify me about activity from the <span className="text-[#065FD4] cursor-pointer w-full text-[14px]">channels I'm subscribed to</span></p>
                                    </div>
                                </div>
                                {preferences.map(({ title, description }, index) => {
                                    return (
                                        <div key={index} className="flex py-[12px]">
                                            <div className="min-w-[58px] pr-[12px] mt-[3px] ">
                                                <Switch />
                                            </div>
                                            <div>
                                                <h1 className="pb-[4px] text-[14px] text-[#0F0F0F] font-semibold">{title}</h1>
                                                <p className="text-[#606060] text-[14px]">{description}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="pt-[24px]">
                        <h1 className="mb-[8px] text-[20px] text-[#0F0F0F] font-bold">Email notifications</h1>
                        <p className="text-[#606060] text-[12px]">Your emails are sent to <span className="font-medium">kekw@gmail.com</span> To unsubscribe from an email, click the "Unsubscribe" link at the bottom of it.<span className="text-[#065FD4]"> Learn more </span>about emails from YouTube.</p>

                        <div className="py-[20px] mt-[20px] flex gap-[56px]">
                            <h1 className="max-w-[160px] font-semibold text-[14px] text-[#0F0F0F] w-full">Your Family</h1>
                            <div className="">
                                <div className="flex py-[12px]">
                                    <div className="min-w-[58px] pr-[12px] mt-[3px] ">
                                        <Switch />
                                    </div>
                                    <div>
                                        <h1 className="pb-[4px] text-[14px] text-[#0F0F0F] font-semibold">Send me emails about family and product updates for YouTube or YouTube Kids</h1>
                                        <p className="text-[#606060]  text-[14px]">By turning on this setting, you're opting in to emails with recommended content, tips, and product updates for families</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-[20px] flex gap-[56px]">
                            <h1 className="max-w-[160px] font-semibold text-[14px] text-[#0F0F0F] w-full">Permission</h1>
                            <div className="">
                                <div className="flex py-[12px]">
                                    <div className="min-w-[58px] pr-[12px] mt-[3px] ">
                                        <Switch />
                                    </div>
                                    <div>
                                        <h1 className="pb-[4px] text-[14px] text-[#0F0F0F] font-semibold">Send me emails about my YouTube activity and updates I requested</h1>
                                        <p className="text-[#606060]  text-[14px]">If this setting is turned off, YouTube may still send you messages regarding your account, required service announcements, legal notifications, and privacy matters</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="py-[20px] flex gap-[56px]">
                            <h1 className="max-w-[160px] font-semibold text-[14px] text-[#0F0F0F] w-full">Your preferences</h1>
                            <div className="">
                                <div className="flex py-[12px]">
                                    <div className="min-w-[58px] pr-[12px] mt-[3px] ">
                                        <Switch />
                                    </div>
                                    <div>
                                        <h1 className="pb-[4px] text-[14px] text-[#0F0F0F] font-semibold">General product updates</h1>
                                        <p className="text-[#606060]  text-[14px]">Announcements and recommendations</p>
                                    </div>
                                </div>

                                <div className="flex py-[12px]">
                                    <div className="min-w-[58px] pr-[12px] mt-[3px] ">
                                        <Switch />
                                    </div>
                                    <div>
                                        <h1 className="pb-[4px] text-[14px] text-[#0F0F0F] font-semibold">YouTube Premium updates</h1>
                                        <p className="text-[#606060]  text-[14px]">Announcements, updates, and recommendations from YouTube Premium and YouTube Music Premium
                                        </p>
                                    </div>
                                </div>

                                <div className="flex py-[12px]">
                                    <div className="min-w-[58px] pr-[12px] mt-[3px] ">
                                        <Switch />
                                    </div>
                                    <div>
                                        <h1 className="pb-[4px] text-[14px] text-[#0F0F0F] font-semibold">Creator updates and announcements</h1>
                                        <p className="text-[#606060]  text-[14px]">Product announcements, creator events, and personalized tips to grow your YouTube channel
                                        </p>
                                    </div>
                                </div>

                                <div className="max-w-[800px] w-full py-[20px] mt-[16px] px-[8px] border-[2px] border-solid border-[#0000001a]">
                                    <div onClick={() => setUnSubEmailToggle(!unsubEmailToggle)} className="flex max-w-fit cursor-pointer pl-[12px] gap-[4px] items-center">
                                        <h1 className="text-[#0F0F0F] text-[14px] font-semibold">Unsubscribed emails</h1>
                                        <img src={`${unsubEmailToggle ? "../images/common/arrow-up.svg" : "../images/common/arrow-down.svg"}`} />
                                    </div>
                                </div>
                                <div className={`max-w-[800px] w-full ${unsubEmailToggle ? "block" : "hidden"} py-[8px] px-[4px] border-t-0 border-[2px] border-solid border-[#0000001a]`}>
                                    <div className="flex pl-[12px] justify-between items-center">
                                        <p className="text-[#606060] text-[14px]">YouTube Kids updates, announcements, and recommendations</p>
                                        <Button text="Resume"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="py-[20px] mb-[37px] flex gap-[56px]">
                            <h1 className="max-w-[160px] font-semibold text-[14px] text-[#0F0F0F] w-full">Language</h1>
                            <div className="max-w-[312px]  w-full ">
                                <div className="max-w-[312px] cursor-pointer mb-[8px] pt-[12px] pb-[8px] bg-[#0000001a] w-full px-[16px]">
                                    <p className="text-[#606060] leading-none text-[12px]">Email Language</p>
                                    <div className="flex items-center justify-between">
                                        <h1 className="text-[#606060] text-[14px] ">English (US)</h1>
                                        <img src="../images/common/arrow-down.svg" />
                                    </div>
                                </div>
                            <p className="text-[14px] text-[#606060]">This setting applies to emails only</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default page