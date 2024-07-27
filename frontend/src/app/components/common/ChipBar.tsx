import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, useCarousel } from "../ui/Carousel"

type chips = {
  id: number
  text: string
  active: boolean
}

class Chip implements chips {
  id
  text
  active

  constructor(id: number, text: string, active: boolean) {
    this.id = id;
    this.text = text;
    this.active = active;
  }
}

function ChipBar() {
  const [paddingClass, setPaddingClass] = useState<string>('pl-0')

  const [chips, setChips] = useState<chips[]>([
    new Chip(1, "All", true),
    new Chip(2, "React Router", false),
    new Chip(3, "Music", false),
    new Chip(4, 'Computer Programming', false),
    new Chip(5, "Mixes", false),
    new Chip(6, "Reverberation", false),
    new Chip(7, "Playlists", false),
    new Chip(8, "Gaming", false),
    new Chip(9, "Live", false),
    new Chip(10, "AMVs", false),
    new Chip(11, "Asian Music", false),
    new Chip(12, "Recently Uploaded", false),
    new Chip(13, "Watched", false),
    new Chip(14, "User interface design", false),
    new Chip(15, "Compiler", false),
    new Chip(16, "Javascript", false),
    new Chip(17, "Video game development", false)
  ]);


  function setActive(id: number) {
    const updatedChips = chips.map((chip) => {
      if (chip.id === id) {
        chip.active = true
        return chip;
      } else {
        chip.active = false;
        return chip;
      }
    })
    setChips(updatedChips)
  }

  function CarouselNav() {
    const { canScrollNext, canScrollPrev } = useCarousel()
    return (
      <>
        {canScrollPrev && <CarouselPrevious />}
        {canScrollNext && <CarouselNext />}
      </>
    )
  }

  function CarouselFade() {
    const { canScrollNext, canScrollPrev } = useCarousel()
    if(canScrollPrev) {
      setPaddingClass('pl-[47px] pr-[47px]')
    } else {
      setPaddingClass('pl-0')
    }
    if(canScrollNext) {
      setPaddingClass('pr-[47px]')
    }
    if(canScrollNext && canScrollPrev) {
      setPaddingClass('pr-[47px] pl-[47px]')
    }
    if(canScrollPrev && !canScrollNext) {
      setPaddingClass('pr-0 pl-[47px]')
    }
    return (
      <>
        <div className="absolute inset-0 z-10 pointer-events-none">
          {canScrollPrev && (<div className="absolute inset-y-0 left-0 max-w-24 w-full bg-gradient-to-r from-white via-white/0 to-transparent" />)}
          {canScrollNext && (<div className="absolute inset-y-0 right-0 max-w-24 w-full bg-gradient-to-l from-white via-white/0 to-transparent" />)}
        </div>
      </>
    )
  }

  

  return (
    <div className={`relative ${paddingClass}`}>
      <Carousel opts={{
        align: "start",
      }} >
        <div className={``}>
          <CarouselFade />
          <CarouselContent className="flex gap-[12px]">
            {chips.map((chip) => {
              return (
                <CarouselItem className={`max-w-fit ${chip.text === "All" ? "pl-[16px]" : "pl-0"} `} key={chip.id}>
                  <div onClick={() => setActive(chip.id)} className="">
                    <button className={`${chip.active ? 'text-[#FFFFFF] bg-[#212121]' : 'text-[#0F0F0F] bg-[#0000000d]'} font-medium text-nowrap rounded-[8px] px-[12px] min-h-[32px] text-center  text-[14px] `}>{chip.text}</button>
                  </div>
                </CarouselItem>
              )
            })}

          </CarouselContent>
          <CarouselNav />
        </div>

      </Carousel>
    </div>
  )
}

export default ChipBar