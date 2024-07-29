"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-[14px] w-[36px] shrink-0 cursor-pointer items-center rounded-full bg-[#909090]/40 transition-colors duration-200 ease-in-out",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-[#909090]/40 data-[state=unchecked]:bg-[#909090]/40",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none h-[20px] w-[20px] rounded-full bg-[#909090]/40 shadow-lg transition-transform duration-200 ease-in-out",
        "data-[state=checked]:translate-x-[17px]  data-[state=checked]:bg-[#065FD4]  data-[state=unchecked]:bg-[black]  data-[state=unchecked]:translate-x-0",
        "shadow-[0_0_8px_rgba(0,0,0,0.7)]",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
