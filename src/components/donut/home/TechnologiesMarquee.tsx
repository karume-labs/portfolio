"use client";

import Link from "next/link";
import { TECHNOLOGIES, type Technology } from "@/data/technologies";
import Image from "next/image";

const extractLogoUrl = (badgeUrl: string) => {
  try {
    const url = new URL(badgeUrl);
    const logo = url.searchParams.get("logo");
    if (logo) {
      return `https://cdn.simpleicons.org/${logo}`;
    }
  } catch {
    // Ignore URL parsing errors
  }
  return null;
};

const TechnologyPill = ({ tech }: { tech: Technology }) => {
  const logoUrl = extractLogoUrl(tech.badgeUrl);

  return (
    <Link
      href={tech.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 px-5 py-2.5 mx-3 rounded-md bg-muted border border-border transition-all duration-300 hover:border-brand hover:bg-muted/80 group select-none whitespace-nowrap"
    >
      {logoUrl ? (
        <Image
          src={logoUrl}
          alt={`${tech.label} icon`}
          width={18}
          height={18}
          unoptimized
          className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
        />
      ) : (
        <div className="w-4 h-4 rounded-md bg-primary/20" />
      )}
      <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
        {tech.label}
      </span>
    </Link>
  );
};

const MarqueeRow = ({ items, direction = -1 }: { items: Technology[]; direction?: 1 | -1 }) => {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="flex w-full overflow-hidden py-4 -mx-4 mask-edges">
      <div 
        className="flex shrink-0 w-max items-center hover:[animation-play-state:paused]"
        style={{
          animation: `scroll ${items.length * 4.5}s linear infinite ${direction === 1 ? 'reverse' : 'normal'}`
        }}
      >
        {duplicatedItems.map((tech, idx) => (
          <TechnologyPill key={`${tech.label}-${idx}`} tech={tech} />
        ))}
      </div>
    </div>
  );
};

const TechnologiesMarquee = () => {
  const midpoint = Math.ceil(TECHNOLOGIES.length / 2);
  const topRow = TECHNOLOGIES.slice(0, midpoint);
  const bottomRow = TECHNOLOGIES.slice(midpoint);

  return (
    <section className="py-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-background -z-10" />
      
      <style>{`
        .mask-edges {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>

      <div className="flex flex-col gap-2">
        <MarqueeRow items={topRow} direction={-1} />
        <MarqueeRow items={bottomRow} direction={1} />
      </div>
    </section>
  );
};

export default TechnologiesMarquee;
