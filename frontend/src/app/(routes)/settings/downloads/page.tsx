import Button from "../components/Button"
import Head from "../components/Head"
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/Radio"

function page() {
    return (
        <div className="pl-[240px] overflow-x-hidden">
            <div className="mx-[32px]">
                <div className="max-w-[1016px] w-full mx-auto">
                    <Head info="Downloads settings apply to this browser only" about="Control your downloads settings" title="Downloads" />
                    <div className="flex py-[20px] mt-[20px] gap-[56px]">
                        <h1 className="max-w-[160px] font-semibold leading-5 text-[14px] text-[#0F0F0F] w-full">Download quality</h1>
                        <div>
                            <div>
                                <RadioGroup>
                                    <div className="flex mt-[8px] mb-[12px] items-center">
                                        <RadioGroupItem className="" value="option-1" />
                                        <p className="text-[14px] pl-[20px] text-[#606060]">Ask each time</p>
                                    </div>

                                    <div className="flex mt-[8px] mb-[12px] items-center">
                                        <RadioGroupItem className="" value="option-2" />
                                        <p className="text-[14px] pl-[20px] text-[#606060]">Standard (480p)</p>
                                    </div>

                                    <div className="flex mt-[8px] mb-[12px] items-center">
                                        <RadioGroupItem className="" value="option-3" />
                                        <p className="text-[14px] pl-[20px] text-[#606060]">Low (144p)</p>
                                    </div>

                                </RadioGroup>
                            </div>
                        </div>
                    </div>

                    <div className="py-[24px] flex mb-[16px] items-center justify-between">
                        <div className="max-w-fit pr-[24px]">
                            <h1 className="text-[#0F0F0F] text-[14px] font-semibold">Delete all downloads</h1>
                            <p className="text-[14px] text-[#606060]">Deleting downloads will free space on this device</p>
                        </div>
                        <Button text="Delete all downloads"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page