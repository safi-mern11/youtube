interface AddInterface {
  Sponsored: string;
  title: string;
  logo: string;
  thumbnail: string;
}

function Add({ title, logo, thumbnail, Sponsored }: AddInterface) {
  return (
    <div className=" cursor-pointer min-h-[316px] w-full">
      <div className="relative">
        <img className=" rounded-[12px] w-full max-h-[219px]" src={thumbnail} />
        <div className="absolute cursor-pointer flex items-center justify-center rounded-[6px] bottom-[14px] right-[14px] max-w-[32px] min-h-[30px] w-full bg-[#000000CC]">
          <img
            className="fill-white max-w-[16px] w-full max-h-[16px]"
            src="./images/common/add-link.svg"
          />
        </div>
      </div>
      <div className="flex items-center mt-[12px] justify-between">
        <div className="flex gap-[12px] items-center">
          <img
            className="max-w-[40px] w-full max-h-[40x] cursor-pointer rounded-full"
            src={logo}
          />
          <div>
            <h1 className="text-[#0F0F0F] text-[16px] font-bold">{title}</h1>
            <div className="flex text-[#606060] items-center gap-[5px]">
              <p className="text-[12px] text-[#0f0f0f] font-bold">
                Sponsored
                <span className="px-[4px]">·</span>
                <span className="text-[14px] hover:text-[#0F0F0F] hover:font-medium text-[#606060] font-normal">
                  {Sponsored}
                </span>
              </p>
            </div>
          </div>
        </div>
        <button className="">
          <img src="./images/common/video-option.svg" />
        </button>
      </div>
      <div className="flex my-[12px] justify-between">
        <button className="text-[#065fd4] leading-[36px] hover:bg-[#def1ff] hover:border-transparent font-medium max-w-[192px] rounded-[50px] w-full border-[#0000000d] border-solid border-[2px] px-[15px]">
          Watch
        </button>
        <button className="text-[#065fd4] bg-[#def1ff] hover:bg-gray-300 max-w-[192px] leading-[36px] font-medium rounded-[50px] w-full px-[15px]">
          Download
        </button>
      </div>
    </div>
  );
}

export default Add;
