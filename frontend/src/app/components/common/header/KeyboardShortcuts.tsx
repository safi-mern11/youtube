import * as React from "react";

export default function KeyboardShortcuts() {
  return (
    <div className="flex flex-col justify-center w-full bg-white max-w-[956px]">
      <div className="flex flex-col justify-center w-full  max-md:max-w-full">
        <div className="flex relative flex-col pb-4 w-full min-h-[733px] max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="..."
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative z-10 px-5 py-7 w-full text-base  text-neutral-700 max-md:pr-5 max-md:max-w-full">
            Keyboard shortcuts
          </div>
          <div className="flex relative z-10 flex-col pt-4 pr-1.5 pb-1.5 w-full  max-md:max-w-full">
            <div className="flex gap-5 justify-between ml-5 max-w-full text-xs font-semibold whitespace-nowrap w-[509px] max-md:flex-wrap">
              <div className="text-zinc-500">PLAYBACK</div>
              <div className="text-zinc-500">GENERAL</div>
            </div>
            <div className="flex gap-5 mt-4 max-md:flex-wrap max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="..."
                className="flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full"
              />
            </div>
            <div className="flex gap-5 mt-2 max-md:flex-wrap">
              <div className="flex flex-col flex-1 grow shrink-0 font-semibold basis-0 w-fit max-md:max-w-full">
                <div className="flex gap-5 justify-between text-xs text-zinc-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  <div>Toggle play/pause</div>
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 self-start w-1.5 aspect-[0.75]"
                  />
                </div>
                <img
                  loading="lazy"
                  srcSet="..."
                  className="mt-2.5 w-full max-md:max-w-full"
                />
                <div className="flex gap-5 mt-2.5 max-md:flex-wrap max-md:max-w-full">
                  <div className="text-xs text-zinc-500">Rewind 10 seconds</div>
                  <div className="flex-auto text-xs text-center text-neutral-600">
                    j
                  </div>
                </div>
                <img
                  loading="lazy"
                  srcSet="..."
                  className="mt-2 w-full max-md:max-w-full"
                />
                <div className="flex gap-5 mt-2 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-auto text-xs text-zinc-500">
                    Fast forward 10 seconds
                  </div>
                  <div className="flex-auto text-xs text-center text-neutral-500">
                    1
                  </div>
                </div>
                <img
                  loading="lazy"
                  srcSet="..."
                  className="mt-2.5 w-full max-md:max-w-full"
                />
                <div className="flex gap-5 mt-2 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  <div className="text-xs text-zinc-500">Previous video</div>
                  <div className="flex flex-1 gap-2 text-xs whitespace-nowrap text-stone-500">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="shrink-0 self-start w-1.5 aspect-[0.75]"
                    />
                    <div>(SHIFT+p)</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="flex gap-5 justify-between text-xs font-semibold text-zinc-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  <div>Toggle full screen</div>
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 self-start w-1.5 aspect-[0.67]"
                  />
                </div>
                <img
                  loading="lazy"
                  srcSet="..."
                  className="mt-2.5 w-full max-md:max-w-full"
                />
                <div className="flex gap-5 mt-2.5 font-semibold max-md:flex-wrap max-md:max-w-full">
                  <div className="text-xs text-zinc-500">
                    Toggle theater mode
                  </div>
                  <div className="flex-auto text-xs text-center text-zinc-700">
                    t
                  </div>
                </div>
                <img
                  loading="lazy"
                  srcSet="..."
                  className="mt-2.5 w-full max-md:max-w-full"
                />
                <div className="flex gap-5 mt-2 font-semibold max-md:flex-wrap max-md:max-w-full">
                  <div className="text-xs text-zinc-500">Toggle miniplayer</div>
                  <div className="flex-auto text-xs text-center text-neutral-500">
                    i
                  </div>
                </div>
                <img
                  loading="lazy"
                  srcSet="..."
                  className="mt-2 w-full max-md:max-w-full"
                />
                <div className="flex gap-5 mt-2.5 text-xs max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-auto text-neutral-400">
                    Close miniplayer or current dialog
                  </div>
                  <div className="flex-auto font-semibold text-zinc-600">
                    ESCAPE
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-2 max-md:flex-wrap">
              <div className="flex flex-col flex-1 grow shrink-0 pt-0.5 pr-1 pb-3.5 pl-2.5 font-semibold basis-0  w-fit max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="w-full max-md:max-w-full"
                />
                <div className="flex gap-5 mt-2 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  <div className="text-xs text-neutral-400">Next video</div>
                  <div className="flex flex-1 gap-2 text-xs whitespace-nowrap text-stone-500">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="shrink-0 self-start w-1.5 aspect-[0.75]"
                    />
                    <div>(SHIFT+n)</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="w-full max-md:max-w-full"
                />
                <div className="flex gap-5 mt-3 max-md:flex-wrap max-md:max-w-full">
                  <div className="text-xs font-light text-zinc-500">
                    Toggle mute
                  </div>
                  <div className="flex-auto text-xs font-semibold text-center text-neutral-500">
                    m
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative -mt-3 w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col px-5 max-md:max-w-full">
                  <div className="flex z-10 flex-col px-2.5 pt-0.5 pb-3 text-xs font-light  text-neutral-400 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="w-full max-md:max-w-full"
                    />
                    <div className="mt-2.5 max-md:max-w-full">
                      Previous frame (while paused)
                    </div>
                  </div>
                  <div className="flex z-10 flex-col px-2.5 pt-0.5 pb-3 text-xs font-semibold  text-neutral-400 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="w-full max-md:max-w-full"
                    />
                    <div className="mt-2.5 max-md:max-w-full">
                      Next frame (while paused)
                    </div>
                  </div>
                  <div className="flex z-10 flex-col px-2.5 pt-0.5 pb-3 -mt-1.5 text-xs  max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="w-full max-md:max-w-full"
                    />
                    <div className="flex gap-5 mt-2.5 max-md:flex-wrap max-md:max-w-full">
                      <div className="font-semibold text-zinc-500">
                        Decrease playback rate
                      </div>
                      <div className="flex-auto text-neutral-500">
                        (SHIFT+，)
                      </div>
                    </div>
                  </div>
                  <div className="flex z-10 flex-col px-2.5 pt-0.5 pb-3 mt-0 font-semibold  max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="w-full max-md:max-w-full"
                    />
                    <div className="flex gap-5 mt-2 max-md:flex-wrap max-md:max-w-full">
                      <div className="text-xs text-zinc-500">
                        Increase playback rate
                      </div>
                      <div className="flex-auto text-xs text-neutral-500">
                        (SHIFT+.
                      </div>
                    </div>
                  </div>
                  <div className="flex z-10 flex-col px-2.5 pt-0.5 pb-3 mt-0 font-semibold  max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="w-full max-md:max-w-full"
                    />
                    <div className="flex gap-5 mt-2.5 max-md:flex-wrap max-md:max-w-full">
                      <div className="flex-auto text-xs text-neutral-400">
                        Seek to specific point in the video (7 advances to 70%
                        of duration)
                      </div>
                      <div className="flex-auto text-xs text-zinc-600">
                        0..9
                      </div>
                    </div>
                  </div>
                  <div className="flex z-10 flex-col px-2.5 pt-0.5 pb-3 mt-0  max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="w-full max-md:max-w-full"
                    />
                    <div className="flex gap-5 mt-2.5 max-md:flex-wrap max-md:max-w-full">
                      <div className="text-xs font-light text-neutral-400">
                        Seek to previous chapter
                      </div>
                      <div className="flex-auto text-xs font-semibold text-zinc-600">
                        CONTROL
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col pt-0.5 pr-1 pb-3.5 pl-2.5 mt-0 font-semibold  max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="w-full max-md:max-w-full"
                    />
                    <div className="flex gap-5 mt-2.5 max-md:flex-wrap max-md:max-w-full">
                      <div className="text-xs text-zinc-500">
                        Seek to next chapter
                      </div>
                      <div className="flex-auto text-xs text-zinc-600">
                        CONTROL
                      </div>
                    </div>
                  </div>
                  <div className="self-start mt-9 text-xs font-semibold text-zinc-500">
                    SUBTITLES AND CLOSED CAPTIONS
                  </div>
                  <div className="flex z-10 flex-col px-2.5 py-1 mt-3.5 font-semibold  max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="w-full max-md:max-w-full"
                    />
                    <div className="flex gap-5 mt-2.5 max-md:flex-wrap max-md:max-w-full">
                      <div className="flex-auto text-xs text-zinc-500">
                        If the video supports captions, toggle captions ON/OFF
                      </div>
                      <div className="flex-auto text-xs text-center text-neutral-500">
                        C
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="mt-2 w-full max-md:max-w-full"
                    />
                  </div>
                  <div className="flex z-10 gap-5 px-5 py-3.5 text-xs font-semibold  max-md:flex-wrap max-md:max-w-full">
                    <div className="flex-auto text-zinc-500">
                      Rotate through different text opacity levels
                    </div>
                    <div className="text-center text-stone-500">0</div>
                  </div>
                  <div className="flex z-10 flex-col px-2.5 pt-0.5 pb-3 text-xs  max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="w-full max-md:max-w-full"
                    />
                    <div className="flex gap-5 mt-2.5 max-md:flex-wrap max-md:max-w-full">
                      <div className="flex-auto text-neutral-400">
                        Rotate through different window opacity levels
                      </div>
                      <div className="flex-auto font-semibold text-center text-zinc-500">
                        W
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-2.5 py-0.5 mt-0 text-xs font-semibold  text-neutral-400 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="w-full max-md:max-w-full"
                    />
                    <div className="mt-2.5 max-md:max-w-full">
                      Rotate through font sizes (increasing)
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="mt-2.5 w-full max-md:max-w-full"
                    />
                  </div>
                  <div className="self-start mt-2 text-xs font-semibold text-zinc-500">
                    Rotate through font sizes (decreasing)
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col grow px-5 mt-56 font-semibold max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col px-1.5 py-3.5  max-md:max-w-full">
                    <div className="text-xs text-zinc-500 max-md:max-w-full">
                      SPHERICALVIDEOS
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="mt-4 w-full max-md:max-w-full"
                    />
                    <div className="flex gap-5 mt-2.5 text-xs max-md:flex-wrap max-md:max-w-full">
                      <div className="text-neutral-400">Pan up</div>
                      <div className="flex-auto text-center text-zinc-500">
                        W
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="mt-2 w-full max-md:max-w-full"
                    />
                    <div className="flex gap-5 mt-2.5 max-md:flex-wrap max-md:max-w-full">
                      <div className="text-xs text-zinc-500">Pan left</div>
                      <div className="flex-auto text-xs text-center text-zinc-600">
                        a
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="mt-2.5 w-full max-md:max-w-full"
                    />
                    <div className="flex gap-5 mt-2.5 text-xs max-md:flex-wrap max-md:max-w-full">
                      <div className="text-zinc-500">Pan down</div>
                      <div className="flex-auto text-center text-neutral-500">
                        S
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="mt-3 w-full max-md:max-w-full"
                    />
                    <div className="flex gap-5 mt-2.5 max-md:flex-wrap max-md:max-w-full">
                      <div className="text-xs text-zinc-500">Pan right</div>
                      <div className="flex-auto text-xs text-center text-neutral-600">
                        d
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="mt-2.5 w-full max-md:max-w-full"
                    />
                    <div className="flex gap-5 mt-2.5 max-md:flex-wrap max-md:max-w-full">
                      <div className="text-xs text-zinc-500">Zoom in</div>
                      <div className="flex-auto text-xs text-stone-500">
                        on numpad or
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="mt-2 w-full max-md:max-w-full"
                    />
                    <div className="flex gap-5 mt-2.5 max-md:flex-wrap max-md:max-w-full">
                      <div className="my-auto text-xs text-zinc-500">
                        Zoom out
                      </div>
                      <div className="flex-auto text-xs text-stone-500">
                        on numpad or
                      </div>
                    </div>
                  </div>
                  <div className="self-end mt-7 text-xs text-blue-500 max-md:mr-1">
                    Dismiss
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
