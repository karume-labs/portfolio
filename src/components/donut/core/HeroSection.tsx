"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { SKILLS, type Skill } from "@/data";
import MeWEBP from "~/public/core/me.webp";
import { ChevronDown } from "lucide-react";

interface FloatingIcon extends Skill {
  id: number;
  top: number;
  left: number;
  duration: number;
  xRange: number;
  yRange: number;
}

const HeroSection = () => {
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    // Specific positions for the 4 skills to form a box around the text
    // 0: FRONTEND (Top Left)
    // 1: BACKEND (Top Right)
    // 2: MOBILE (Bottom Left)
    // 3: BLOCKCHAIN (Bottom Right)
    const positions = [
      { top: 0, left: 0 },     // 0: FRONTEND (Top Left)
      { top: 0, left: 100 },   // 1: BACKEND (Top Right)
      { top: 100, left: 0 },   // 2: MOBILE (Bottom Left)
      { top: 100, left: 100 }, // 3: BLOCKCHAIN (Bottom Right)
    ];

    const generated = SKILLS.filter(skill => skill.title !== "TUTORIAL").map((skill, i) => ({
      ...skill,
      id: i,
      top: positions[i]?.top || 50,
      left: positions[i]?.left || 50,
      duration: 15 + Math.random() * 5,
      xRange: Math.random() * 10 - 5, // smaller range so they stay near corners
      yRange: Math.random() * 10 - 5,
    }));

    setFloatingIcons(generated);
  }, []);

  return (
    <header className="relative w-full min-h-[90vh] sm:min-h-screen flex flex-col justify-center section-padding pt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column: Typographic Identity & Skill Cloud */}
        <div className="lg:col-span-7 flex flex-col justify-center relative min-h-[400px] lg:min-h-[500px]">
          <div className="relative z-20 space-y-6 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <TypographyH1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]">
                Daniel <br />
                <span className="text-brand">
                  Karume
                </span>
              </TypographyH1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <TypographyP className="text-lg sm:text-xl text-muted-foreground max-w-lg italic border-l-4 border-brand pl-4">
                "I am a Swiss Army knife in the programming world."
              </TypographyP>
            </motion.div>
          </div>

        </div>

        {/* Right Column: Framed Photo & Skill Cloud */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-full min-h-[400px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative w-full max-w-[400px] aspect-[4/5] mx-auto z-20 group/card"
          >
            {/* Decorative background shapes */}
            <div className="absolute inset-0 bg-brand/10 rounded-md translate-x-4 translate-y-4 transition-transform duration-500 group-hover/card:translate-x-6 group-hover/card:translate-y-6" />
            
            <div className="absolute inset-0 rounded-md overflow-hidden border border-border bg-muted">
              <Image
                alt="A photo of Daniel Karume"
                src={MeWEBP}
                fill
                className="object-cover object-top mix-blend-luminosity opacity-90 group-hover/card:mix-blend-normal group-hover/card:opacity-100 transition-all duration-700 ease-in-out"
                priority
              />
              <div className="absolute inset-0 bg-brand/5 mix-blend-overlay group-hover/card:opacity-0 transition-opacity duration-700" />
            </div>

            {/* Skill Cloud positioned around the image */}
            <div className="absolute inset-0 z-30 pointer-events-auto">
              {floatingIcons.map(
                ({
                  id,
                  title,
                  description,
                  icon: Icon,
                  top,
                  left,
                  duration,
                  xRange,
                  yRange,
                }) => (
                  <motion.div
                    key={id}
                    className="absolute"
                    style={{ 
                      top: `${top}%`, 
                      left: `${left}%`,
                      marginTop: "-28px", // Center the 56px icon
                      marginLeft: "-28px"
                    }}
                    animate={{
                      x: [0, xRange, -xRange, 0],
                      y: [0, yRange, -yRange, 0],
                    }}
                    transition={{
                      duration: activeId === id ? duration * 3 : duration,
                      repeat: Infinity,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <Popover onOpenChange={(open) => setActiveId(open ? id : null)}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="default"
                          size="icon"
                          className="rounded-md w-12 h-12 sm:w-14 sm:h-14 shadow-sm bg-background hover:bg-brand border border-border text-foreground hover:text-white transition-all group/btn"
                        >
                          <Icon className="size-5 sm:size-6 text-primary group-hover/btn:text-white transition-colors" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="max-w-xs bg-background border-border shadow-md rounded-md z-50">
                        <div className="font-display font-bold text-lg mb-1">{title}</div>
                        <TypographyP className="text-xs sm:text-sm text-muted-foreground">
                          {description}
                        </TypographyP>
                      </PopoverContent>
                    </Popover>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs font-medium tracking-widest uppercase font-display">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-5" />
        </motion.div>
      </motion.div>
      

    </header>
  );
};

export default HeroSection;
