"use client";

import { TypographyH2 } from "@/components/ui/typography";
import { useScrambleText } from "@/hooks/scramble-text";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

const ProgressBar = ({ target, isCentered }: { target: HTMLElement; isCentered?: boolean }) => {
  const { scrollYProgress } = useScroll({
    target: { current: target },
    offset: ["start 25%", "end 25%"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="h-full bg-brand"
      style={{
        scaleX,
        transformOrigin: isCentered ? "center" : "left",
      }}
    />
  );
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, className }) => {
  const { ref: textRef, displayText } = useScrambleText<HTMLHeadingElement>(title);
  const containerRef = useRef<HTMLDivElement>(null);
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const section = containerRef.current.closest("section");
      if (section) {
        setTarget(section);
      }
    }
  }, []);

  // Check if it should be centered based on className
  const isCentered = className?.includes("text-center");

  return (
    <div 
      ref={containerRef} 
      className={`sticky top-20 z-40 bg-background/95 backdrop-blur-md py-4 mb-8 w-fit ${isCentered ? "mx-auto text-center" : ""} ${className || ""}`}
    >
      <div className="grid">
        {/* Invisible final text sets the container size */}
        <TypographyH2
          className="col-start-1 row-start-1 font-display font-bold text-lg sm:text-xl tracking-widest uppercase opacity-0 pointer-events-none select-none border-b-0 pb-0"
        >
          {title}
        </TypographyH2>
        {/* Visible scrambling text overlaps perfectly */}
        <TypographyH2
          ref={textRef}
          className="col-start-1 row-start-1 font-display font-bold text-lg sm:text-xl tracking-widest uppercase whitespace-nowrap border-b-0 pb-0"
        >
          {displayText}
        </TypographyH2>
      </div>
      <div className={`h-[3px] w-full bg-border/50 mt-2 rounded-full overflow-hidden ${isCentered ? "mx-auto" : ""}`}>
        {target ? (
          <ProgressBar target={target} isCentered={isCentered} />
        ) : (
          <div 
            className="h-full bg-brand" 
            style={{ 
              transform: "scaleX(0.05)",
              transformOrigin: isCentered ? "center" : "left"
            }} 
          />
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
