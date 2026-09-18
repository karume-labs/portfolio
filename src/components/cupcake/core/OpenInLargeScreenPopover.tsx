"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TypographyP } from "@/components/ui/typography";

const OpenInLargeScreenPopover = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024;
      setIsVisible(isTouch && isSmallScreen);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-4 z-50 animate-in fade-in duration-300">
      <Popover>
        <PopoverTrigger asChild>
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="relative"
          >
            <span className="absolute inset-0 rounded-full bg-primary/40 blur-md animate-pulse" />

            <Button
              variant="default"
              size="icon"
              className="relative rounded-full size-10 text-primary-foreground"
            >
              <Info className="size-8" />
            </Button>
          </motion.div>
        </PopoverTrigger>
        <PopoverContent className="max-w-xs bg-primary-foreground/10 backdrop-blur-xl border-none shadow-xl rounded-xl">
          <TypographyP className="text-sm font-medium p-2">
            I noticed you are using a small screen. It would be a shame for you
            to miss the hover effects and easter eggs,{" "}
            <span className="font-semibold text-primary">
              especially if you are a recruiter
            </span>
            ! Try opening it on a larger screen for the best experience.
          </TypographyP>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default OpenInLargeScreenPopover;
