import Head from "@/app/components/settings/Head"
function page() {
  return (
    <div className="pl-[240px] overflow-x-hidden">
      <div className="mx-[32px]">
        <div className="max-w-[1016px] w-full mx-auto">
          <Head image="../images/common/settings-advanced.svg" info="" about="Set up YouTube exactly how you want it" title="Advanced settings" />
          
          <div className="py-[20px] mt-[20px] flex gap-[56px]">
            <h1 className="max-w-[160px] font-semibold text-[14px] text-[#0F0F0F] w-full">User ID</h1>
            <div className="max-w-[350px] justify-between py-[4px] flex items-center rounded-[12px]  border-solid border-[1px] border-[#0000001a] w-full ">
              <input type="text" readOnly className="max-w-[253px] outline-none pl-[16px]  w-full" value="CCCCCCCCCCCC" />
              <div className="px-[8px]">
              <button className="max-w-[63.74px] text-white bg-[#065FD4] rounded-[18px] w-full px-[16px] min-h-[36px] text-[14px] font-medium">
                Copy
              </button>
              </div>
            </div>
          </div>

          <div className="py-[20px] mt-[20px] flex gap-[56px]">
            <h1 className="max-w-[160px] font-semibold text-[14px] text-[#0F0F0F] w-full">Channel ID</h1>
            <div className="max-w-[350px] justify-between py-[4px] flex items-center rounded-[12px]  border-solid border-[1px] border-[#0000001a] w-full ">
              <input type="text" readOnly className="max-w-[253px] outline-none pl-[16px]  w-full" value="CCCCCCCCCCCC" />
              <div className="px-[8px]">
              <button className="max-w-[63.74px] text-white bg-[#065FD4] rounded-[18px] w-full px-[16px] min-h-[36px] text-[14px] font-medium">
                Copy
              </button>
              </div>
            </div>
          </div>

          <div className="py-[20px] mt-[20px] flex gap-[56px]">
            <h1 className="max-w-[160px] font-semibold text-[14px] text-[#0F0F0F] w-full">Move channel</h1>
            <div>
              <h1 className="text-[14px] cursor-pointer text-[#065FD4] font-semibold">Move channel to a brand account</h1>
              <p className="text-[14px] text-[#606060]">You can move your channel to a brand account</p>
            </div>
          </div>

          <div className="py-[20px] mt-[20px] flex gap-[56px]">
            <h1 className="max-w-[160px] font-semibold text-[14px] text-[#0F0F0F] w-full">Delete channel</h1>
            <div>
              <h1 className="text-[14px] cursor-pointer text-[#065FD4] font-semibold">Delete channel</h1>
              <p className="text-[14px] text-[#606060]">Deleting your YouTube channel won't close your Google Account</p>
            </div>
          </div>

          <div className="py-[20px] mt-[20px] mb-[37px] flex gap-[56px]">
            <h1 className="max-w-[160px] font-semibold text-[14px] text-[#0F0F0F] w-full">Try experimental new features</h1>
            <div>
              <h1 className="text-[14px] cursor-pointer text-[#065FD4] font-semibold">Try new features with YouTube Premium</h1>
              <p className="text-[14px] text-[#606060]">For a limited time, Premium members can try out new features that we’re working on</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default page