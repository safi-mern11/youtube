import Button from "../components/Button"
import Head from "../components/Head"

function page() {
    return (
      <div className="pl-[240px] overflow-x-hidden">
      <div className="mx-[32px]">
        <div className="max-w-[1016px] w-full mx-auto">
          <Head info="" about="Choose how you make purchases on YouTube" title="Billing and payments" />
          <div className="py-[24px] items-center flex justify-between">
            <div className="text-[14px]">
              <h1 className="text-[#0F0F0F] font-semibold pb-[4px]">Quick purchase is disabled.</h1>
              <p className="text-[#606060]">You will be asked to verify your account for all YouTube purchases</p>
              <p className="text-[#065FD4] cursor-pointer">Learn more about purchase verification</p>
            </div>
            <Button text="Enable" classes="max-w-[118.67px] w-full"/>
          </div>
        </div>
      </div>
    </div>
    )
  }
  
  export default page