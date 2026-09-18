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
        "relative cursor-pointer p-0 text-left block bg-transparent border-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all duration-500",
        "aspect-1200/630",
        "max-sm:portrait:w-[85dvh] max-sm:portrait:-rotate-90",
        "w-full max-w-[800px] sm:rotate-0",
        className,
      )}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-card rounded-2xl overflow-hidden shadow-2xl border border-border"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(1px)",
          }}
        >
          <div className="absolute inset-0 bg-card overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-1/2 h-full bg-primary/2 [clip-path:polygon(100%_0,0%_100%,100%_100%)]" />

            <div className="absolute top-8 right-8 sm:top-12 sm:right-12 w-24 h-24 sm:w-32 sm:h-32 border-r-4 border-b-4 sm:border-r-8 sm:border-b-8 border-primary/10 rounded-br-3xl" />

            <div className="relative h-full flex flex-col justify-center px-6 sm:px-12 z-10">
              <div className="flex items-center gap-4 sm:gap-8">
                <div className="relative size-24 sm:size-32 shrink-0 rounded-full overflow-hidden border-4 border-border shadow-lg bg-card">
                  <Image
                    src={MeWEBP}
                    alt="Daniel Karume"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
                    Daniel{" "}
                    <span className="text-primary font-black">Karume</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-muted-foreground font-medium">
                    Software Developer
                  </p>
                </div>
              </div>

              <div className="mt-4 sm:mt-8 max-w-[90%] sm:max-w-[70%]">
                <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed italic">
                  I am a Swiss Army knife in the programming world.
                </p>
              </div>

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-12 sm:left-12 sm:right-12 h-px bg-linear-to-r from-primary/30 to-transparent" />
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 w-full h-full bg-card rounded-2xl overflow-hidden shadow-2xl border border-border"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg) translateZ(1px)", // CRITICAL: This was missing!
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-card via-card to-background/50 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)`,
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative h-full flex flex-col p-4 sm:p-8 z-10 gap-3 sm:gap-4">
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-2 sm:mb-3 border-l-4 border-primary pl-2">
                  What I Offer
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {SERVICES.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.label}
                        className="p-2 sm:p-3 rounded-lg bg-secondary/50"
                      >
                        <Icon className="size-4 sm:size-5 text-primary mb-1" />
                        <p className="text-[11px] sm:text-xs font-semibold text-foreground">
                          {service.label}
                        </p>
                        <p className="text-[9px] sm:text-[10px] text-muted-foreground">
                          {service.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 items-end">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xs sm:text-sm font-semibold text-foreground border-l-4 border-primary pl-2">
                    Get in touch
                  </h3>
                  <div className="space-y-1 sm:space-y-1.5">
                    <ContactItem
                      icon={Mail}
                      label="danielkarume.work@gmail.com"
                    />
                    <ContactItem icon={Phone} label="+254 704 150 182" />
                    <ContactItem icon={SiGithub} label="@karume-lab" />
                    <ContactItem icon={Globe} label="karume.vercel.app" />
                  </div>
                </div>

                <div className="flex flex-col items-end justify-end">
                  <a
                    href="https://karume.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 sm:p-2 bg-background/5 backdrop-blur-md rounded-lg border border-background/10 shadow-inner"
                  >
                    <Image
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://karume.vercel.app`}
                      alt="QR Code to karume.vercel.app"
                      width={120}
                      height={120}
                      className="rounded-md"
                    />
                  </a>
                  <p className="mt-1 sm:mt-1.5 text-muted-foreground text-[8px] sm:text-[9px] font-mono">
                    SCAN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 sm:-bottom-10 text-muted-foreground/50 text-[10px] sm:text-xs font-medium tracking-widest uppercase whitespace-nowrap animate-pulse">
        Click to flip card
      </div>
    </button>
  );
};

const ContactItem = ({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) => (
  <div className="flex items-center gap-1 sm:gap-1.5">
    <div className="p-0.5 sm:p-1 rounded-md bg-secondary/70 text-secondary-foreground shrink-0">
      <Icon className="size-2.5 sm:size-3" />
    </div>
    <span className="text-[8px] sm:text-[9px] text-muted-foreground truncate">
      {label}
    </span>
  </div>
);

export default BusinessCard;
