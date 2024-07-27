import React from "react";

const Notifications = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`absolute top-[60px] right-[100px] flex flex-col justify-center font-semibold bg-white max-w-[479px] w-full z-[50] ${
        isVisible ? "" : "hidden"
      } duration-300 ease-in-out transition-all border rounded-[10px]`}
    >
      <div className="flex flex-col justify-center w-full bg-black bg-opacity-0">
        <div className="flex relative flex-col pb-2.5 w-full min-h-[639px]">
          <div className="flex relative flex-col pt-4 pb-px w-full text-sm whitespace-nowrap bg-black bg-opacity-0 text-stone-500">
            <div className="flex gap-5 justify-between self-center px-5 w-full max-w-[486px]">
              <div>Notifications</div>
              <div className="w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height={24}
                  viewBox="0 0 24 24"
                  width={24}
                  focusable="false"
                  style={{
                    pointerEvents: "none",
                    display: "inherit",
                    width: "100%",
                    height: "100%",
                  }}
                  aria-hidden="true"
                >
                  <path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z" />
                </svg>
              </div>
            </div>
            <div className="mt-3.5 w-full bg-neutral-200 min-h-[1px]" />
          </div>
          <div className="flex relative flex-col items-center px-5 pt-8 pb-1.5 mt-36 w-full bg-black bg-opacity-0">
            <img
              loading="lazy"
              src="/images/common/notification-bell.png"
              className="w-20 aspect-[0.79]"
            />
            <div className="mt-10 text-sm text-neutral-500">
              Your notifications live here
            </div>
            <div className="mt-6 text-xs text-center text-zinc-500 w-[258px]">
              Subscribe to your favorite channels to get
              <br />
              notified about their latest videos.
            </div>
            <div className="self-stretch mt-52 w-full bg-white min-h-[1px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
