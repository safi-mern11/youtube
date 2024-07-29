import Head from "../components/Head"
import { Switch } from "@/app/components/ui/Switch"

function page() {
    return (
        <div className="pl-[240px] overflow-x-hidden">
            <div className="mx-[32px]">
                <div className="max-w-[1016px] w-full mx-auto">
                    <Head image="../images/common/settings-privacy.svg" info="Choose who can see your subscriptions" about="Manage what you share on YouTube" title="Privacy">
                        <p className="text-[14px] text-[#606060]">Review <span className="text-[#065FD4] cursor-pointer">YouTube Terms of Service </span>and<span className="text-[#065FD4] cursor-pointer"> Google Privacy Policy</span></p>
                    </Head>

                    <div className="py-[20px] mt-[20px] flex gap-[56px]">
                        <h1 className="max-w-[160px] font-semibold text-[14px] text-[#0F0F0F] w-full">Subscriptions</h1>
                        <div className="">
                            <div className="flex py-[12px]">
                                <div className="min-w-[58px] pr-[12px] mt-[3px] ">
                                    <Switch />
                                </div>
                                <div>
                                    <h1 className="text-[14px] text-[#0F0F0F] pb-[4px] font-semibold">Keep all my subscriptions private</h1>
                                    <p className="text-[#606060]  text-[14px]">Your subscriptions won't be visible to others, unless you use features that make them public. <span className="cursor-pointer text-[#065FD4]">Learn more</span> about what could make your subscriptions visible or manage your subscriptions <span className="text-[#065FD4] cursor-pointer">here.</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-[20px] mb-[37px] flex gap-[56px]">
                        <h1 className="max-w-[160px] font-semibold text-[14px] text-[#0F0F0F] w-full">Ads on YouTube</h1>
                        <div className="text-[14px] text-[#606060]">
                            <p className="">
                                You may see ads on YouTube based on general factors, like the topic of a video. The ads you see may also depend on your choices on <span className="text-[#065FD4] cursor-pointer">My Ad Center</span>. To learn more about how ads work for family accounts with kids, visit the
                            </p>
                            <p>
                            <span className="text-[#065FD4] cursor-pointer">Google for Families Help Center</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page