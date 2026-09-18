"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Globe,
  Mail,
  Network,
  Phone,
  Server,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import MeWEBP from "~/public/core/me.webp";

interface BusinessCardProps {
  className?: string;
}

const SERVICES = [
  { icon: Code2, label: "Frontend Dev", desc: "React, Next.js, Tailwind" },
  { icon: Server, label: "Backend Dev", desc: "Node.js, Django, GraphQL" },
  { icon: Smartphone, label: "Mobile Dev", desc: "React Native, Expo" },
  { icon: Network, label: "Blockchain", desc: "Solidity, Smart Contracts" },
];

const BusinessCard: React.FC<BusinessCardProps> = ({ className }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped(!isFlipped);

  return (
    <button
      type="button"
      onClick={toggleFlip}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleFlip();
        }
      }}
      aria-label="Digital Business Card. Click to flip."
      className={cn(
        "relative cursor-pointer p-0 text-left block bg-transparent border-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand transition-all duration-500",
        "aspect-[1200/630]",
        "max-sm:portrait:w-[85dvh] max-sm:portrait:-rotate-90",
        "w-full max-w-[800px] sm:rotate-0",
        className,
      )}
      style={{ perspective: "1500px" }}
    >


      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0, scale: isFlipped ? 1.02 : 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 25,
        }}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute inset-0 w-full h-full bg-card rounded-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-border"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(1px)",
          }}
        >
          <div className="absolute inset-0 overflow-hidden">


            <div className="relative h-full flex flex-col justify-center px-8 sm:px-16 z-10">
              <div className="flex items-center gap-6 sm:gap-10">
                <div className="relative size-28 sm:size-40 shrink-0 rounded-md overflow-hidden border border-border shadow-md bg-card">
                  <Image
                    src={MeWEBP}
                    alt="Daniel Karume"
                    fill
                    className="object-cover scale-110"
                  />
                </div>

                <div className="space-y-2">
                  <h1 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-foreground leading-none">
                    Daniel <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-brand to-primary">Karume</span>
                  </h1>
                  <p className="text-xl sm:text-2xl text-muted-foreground font-medium tracking-wide">
                    Software Developer
                  </p>
                </div>
              </div>

              <div className="mt-8 sm:mt-12 max-w-[90%] sm:max-w-[70%]">
                <p className="text-base sm:text-xl text-foreground/80 leading-relaxed font-light">
                  I am a Swiss Army knife in the programming world. Building seamless digital experiences across the stack.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute inset-0 w-full h-full bg-card rounded-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-border"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg) translateZ(1px)",
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative h-full flex flex-col p-6 sm:p-10 z-10 gap-6 sm:gap-8 justify-between">
              <div>
                <h3 className="font-display text-lg sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-brand rounded-full inline-block"></span>
                  What I Offer
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {SERVICES.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.label}
                        className="p-3 sm:p-4 rounded-md bg-muted border border-border"
                      >
                        <Icon className="size-5 sm:size-6 text-brand mb-2" />
                        <p className="text-xs sm:text-sm font-semibold text-foreground mb-0.5">
                          {service.label}
                        </p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-1">
                          {service.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-[1fr_auto] gap-4 sm:gap-6 items-end mt-auto">
                <div className="flex flex-col space-y-4">
                  <h3 className="font-display text-sm sm:text-lg font-bold text-foreground flex items-center gap-2">
                    <span className="w-1 h-4 bg-brand rounded-full inline-block"></span>
                    Get in touch
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <ContactItem icon={Mail} label="danielkarume.work@gmail.com" />
                    <ContactItem icon={Phone} label="+254 704 150 182" />
                    <ContactItem icon={SiGithub} label="@karume-lab" />
                    <ContactItem icon={Globe} label="karume.vercel.app" />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-end bg-muted p-3 sm:p-4 rounded-md border border-border">
                  <a
                    href="https://karume.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white p-2 rounded-md"
                  >
                    <Image
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://karume.vercel.app`}
                      alt="QR Code to karume.vercel.app"
                      width={100}
                      height={100}
                      className="rounded-md sm:w-[120px] sm:h-[120px]"
                      unoptimized
                    />
                  </a>
                  <p className="mt-2 text-muted-foreground text-[10px] sm:text-xs font-mono font-medium tracking-widest">
                    SCAN TO VISIT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 sm:-bottom-12 text-muted-foreground/60 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase whitespace-nowrap flex items-center gap-2">
        <span className="w-8 h-px bg-muted-foreground/30"></span>
        Click to flip card
        <span className="w-8 h-px bg-muted-foreground/30"></span>
      </div>
    </button>
  );
};

const ContactItem = ({
  icon: Icon,
  label,
}: {
  icon: LucideIcon | typeof SiGithub;
  label: string;
}) => (
  <div className="flex items-center gap-2 sm:gap-3 bg-muted px-3 py-2 rounded-md border border-border">
    <div className="p-1 sm:p-1.5 rounded-md bg-brand/10 text-brand shrink-0">
      <Icon className="size-3 sm:size-4" />
    </div>
    <span className="text-[10px] sm:text-xs font-medium text-foreground/80 truncate">
      {label}
    </span>
  </div>
);

export default BusinessCard;
