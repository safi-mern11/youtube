import Head from "@/app/components/settings/Head"
import { Checkbox } from "@/app/components/ui/Checkbox"
import Tooltip from "@/app/components/settings/Tooltip"
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/Radio"
import { Switch } from "@/app/components/ui/Switch"

function page() {
  return (
    <div className="pl-[240px] overflow-x-hidden">
      <div className="mx-[32px]">
        <div className="max-w-[1016px] w-full mx-auto">
          <Head image="../images/common/settings-playback.svg" info="Playback settings apply to this browser only" about="Control your video viewing experience" title="Playback and performance" />
          <div className="mt-[20px]">
            <div className="flex py-[20px] gap-[56px]">
              <h1 className="max-w-[160px] font-semibold leading-5 text-[14px] text-[#0F0F0F] w-full">Info cards</h1>
              <div className="flex min-h-[32px] items-center">
                <Checkbox className="m-[2px]" />
                <p className="text-[14px] pl-[20px] text-[#606060]">Show in-video info cards</p>
                <div className="relative">
                  <div className="group">
                    <img className="max-h-[16px] px-[20px]" src="../images/common/question-mark.svg" />
                    <div className="absolute opacity-0 pointer-events-none transition duration-300 ease-in-out group-hover:opacity-100 text-nowrap -top-[47px] -left-[300px]">
                      <Tooltip text="Allows creator info cards to appear on videos. This doesn't affect ads that may appear on videos." />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex py-[20px] gap-[56px]">
              <h1 className="max-w-[160px] font-semibold leading-5 text-[14px] text-[#0F0F0F] w-full">Subtitles and Closed Captions</h1>
              <div>
                <div className="flex cursor-pointer mb-[20px] min-h-[32px] items-center">
                  <Checkbox className="m-[2px]" />
                  <p className="text-[14px] pl-[20px] text-[#606060]">Always show captions</p>
                </div>
                <div className="flex cursor-pointer min-h-[32px] items-center">
                  <Checkbox className="m-[2px]" />
                  <p className="text-[14px] pl-[20px] text-[#606060]">Include auto-generated captions (when available)</p>
                </div>
              </div>
            </div>

            <div className="flex py-[20px] gap-[56px]">
              <h1 className="max-w-[160px] font-semibold leading-5 text-[14px] text-[#0F0F0F] w-full">AV1 settings</h1>
              <div>
                <div>
                  <RadioGroup>
                    <div className="flex mt-[8px] mb-[12px] items-center">
                      <RadioGroupItem className="" value="option-1" />
                      <p className="text-[14px] pl-[20px] text-[#606060]">Auto (recommended)</p>
                    </div>

                    <div className="flex mt-[8px] mb-[12px] items-center">
                      <RadioGroupItem className="" value="option-2" />
                      <p className="text-[14px] pl-[20px] text-[#606060]">Prefer AV1 for SD</p>
                      <div className="relative">
                        <div className="group">
                          <img className="max-h-[16px] px-[20px]" src="../images/common/question-mark.svg" />
                          <div className="absolute opacity-0 pointer-events-none transition duration-300 ease-in-out group-hover:opacity-100 text-nowrap -top-[53px] -left-[258px]">
                            <Tooltip text="Streaming AV1 in SD will use AV1 up to 480p, and VP9 for higher-resolution formats." />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex mt-[8px] mb-[12px] items-center">
                      <RadioGroupItem className="" value="option-3" />
                      <p className="text-[14px] pl-[20px] text-[#606060]">Always prefer AV1</p>
                      <div className="relative">
                        <div className="group">
                          <img className="max-h-[16px] px-[20px]" src="../images/common/question-mark.svg" />
                          <div className="absolute opacity-0 pointer-events-none transition duration-300 ease-in-out group-hover:opacity-100 text-nowrap -top-[53px] -left-[330px]">
                            <Tooltip text="Streaming AV1 in HD requires a powerful computer, and only some videos have AV1 available at this time." />
                          </div>
                        </div>
                      </div>
                    </div>

                  </RadioGroup>
                </div>
              </div>
            </div>

            <div className="py-[20px] mb-[37px] flex gap-[56px]">
              <h1 className="max-w-[160px] font-semibold text-[14px] text-[#0F0F0F] w-full">Browsing</h1>
              <div className="">
                <div className="flex py-[12px]">
                  <div className="min-w-[58px] pr-[12px] mt-[3px] ">
                    <Switch />
                  </div>
                  <div>
                    <h1 className="text-[14px] text-[#0F0F0F] pb-[4px] font-semibold">Video previews</h1>
                    <p className="text-[#606060]  text-[14px]">Video previews will play when you hover over thumbnails</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page