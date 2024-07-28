import { RootState } from "@/redux/store";
import { profileLinks } from "@/utils/profileDropDown";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProfileModal() {
  const dispatch = useDispatch();
  return (
    <div
      id="profileModal"
      className={`max-w-[338px] w-full  flex flex-col justify-center mx-auto  bg-[#fff] `}
    >
      <div className="flex flex-col justify-center w-full bg-black bg-opacity-0">
        <div className="flex relative flex-col w-full bg-black bg-opacity-0">
          <div className="flex flex-col border-b py-5 pr-16 pl-5 w-full bg-black bg-opacity-0">
            <div className="flex gap-4  text-base text-neutral-700 w-full">
              <img
                id="img"
                className="rounded-full w-10 h-10"
                alt="Avatar image"
                height="32"
                width="32"
                src="https://yt3.ggpht.com/5YXOy36wMibj_RWGSqCOrJvxNN_eYvJbRtLdgvBRC7EtBsOS3L4MraHLYUOJd1OiPPX0eFFtvg=s88-c-k-c0x00ffffff-no-rj"
              />
              <div className="flex flex-col">
                <div className="whitespace-nowrap my-auto max-w-[205px] w-full ">
                  Muhammad Safiullah Khan
                </div>
                <div className="whitespace-nowrap my-auto max-w-[205px] w-full">
                  @MuhammadSafiullahKhan...
                </div>
              </div>
            </div>
            <button className="self-center mt-2 text-sm text-blue-500">
              View your channel
            </button>
          </div>
          {profileLinks?.map((item, index) => (
            <button
              onClick={() => item.onClickHandler(dispatch)}
              key={index + "profileLinks"}
              className={`hover:bg-[#ddd] flex px-[25px]  mx-auto justify-between w-full min-h-[50px] items-center `}
              style={item?.extraStyles}
            >
              <div className="flex gap-[18px] items-center">
                <div className="h-6 w-6">{item.icon}</div>
                <p>{item.name}</p>
              </div>
              {item.haveArrow && (
                <svg
                  width={8}
                  height={15}
                  viewBox="0 0 8 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect width={8} height={15} fill="url(#pattern0_4_71)" />
                  <defs>
                    <pattern
                      id="pattern0_4_71"
                      patternContentUnits="objectBoundingBox"
                      width={1}
                      height={1}
                    >
                      <use
                        xlinkHref="#image0_4_71"
                        transform="matrix(0.0344828 0 0 0.0183908 0 -0.0149425)"
                      />
                    </pattern>
                    <image
                      id="image0_4_71"
                      width={29}
                      height={56}
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
