import Link from "next/link"
import Head from "@/app/components/settings/Head"

function page() {
  return (
    <div className="pl-[240px] overflow-x-hidden">
      <div className="mx-[32px]">
        <div className="max-w-[1016px] w-full mx-auto">
          <Head image="./images/common/settings-account.svg" info="Signed in as kekw@gmail.com" about="Choose how you appear and what you see on YouTube" title="Account" />
          <div className="pt-[24px]">
            <h1 className="mb-[8px] text-[20px] text-[#0F0F0F] font-bold">Your YouTube Channel</h1>
            <p className="text-[#606060] text-[12px]">This is your public presence on YouTube. You need a channel to upload your own videos, comment on videos, or create playlists.</p>

            <div className="py-[20px] border-solid border-b-[1px] border-[#0000001a] flex gap-[56px]">
              <h1 className="max-w-[160px] font-semibold text-[14px] text-[#0F0F0F] w-full">Your Channel</h1>
              <div>
                <div className="flex items-center pt-[4px] pb-[20px] gap-[20px]">
                  <img className="max-w-[50px] w-full max-h-[50px] rounded-[50%]" src="https://yt3.ggpht.com/aVkEQ-cPwaBwvCZbh11EdVMc8jIh0sMGgJe8q9F3Xe7c20dOHXqLRei1KaZM3w_nHFu8s8JS4L0=s88-c-k-c0x00ffffff-no-rj-mo" />
                  <h1 className="text-[14px] text-[#0F0F0F]">Kekw</h1>
                </div>
                <div className="text-[#065FD4] flex flex-col gap-[8px] text-[14px] font-semibold">
                  <h1 className="pl-[4px] cursor-pointer">Channel status and features</h1>
                  <h1 className="pl-[4px] cursor-pointer">Add or manage your channel(s)</h1>
                  <Link href="/settings/advanced">
                    <h1 className="pl-[4px] ">View advanced settings</h1>
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-[24px]">
              <h1 className="mb-[8px] text-[20px] text-[#0F0F0F] font-bold">Your account</h1>
              <p className="text-[#606060] text-[12px]">You sign in to YouTube with your Google Account</p>

              <div className="py-[20px] mt-[20px] flex gap-[56px]">
                <h1 className="max-w-[160px] font-medium text-[14px] text-[#0F0F0F] w-full">Google Account</h1>
                <div className="">
                  <h1 className="text-[#065FD4] cursor-pointer text-[14px] font-semibold">View or change your Google Account settings</h1>
                  <p className="text-[#606060] text-[14px]">You will be redirected to your Google Account page</p>
                </div>
              </div>

              <div className="py-[20px] mb-[37px] flex gap-[56px]">
                <h1 className="max-w-[160px] font-medium text-[14px] text-[#0F0F0F] w-full">Membership</h1>
                <div className="">
                  <div className="flex items-center ">
                    <h1 className="text-[#0F0F0F] font-semibold text-[14px]">No membership</h1>
                    <span className="max-w-[10px] w-full inline-block overflow-hidden leading-none text-center max-h-[17px] text-[#606060] text-[14px]"> | </span>
                    <h1 className="text-[#065FD4] cursor-pointer text-[14px] font-semibold">Get YouTube Premium</h1>
                  </div>
                  <p className="text-[#606060] text-[14px]">YouTube Premium offers uninterrupted music, ad-free videos, and more</p>
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