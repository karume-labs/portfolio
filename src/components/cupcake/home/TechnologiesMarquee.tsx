"use client";

import Autoscroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TECHNOLOGIES } from "@/data";

const TechnologiesMarquee = () => {
  const plugin = useRef(
    Autoscroll({
      speed: 0.5,
    }),
  );

  return (
    <section>
      <Carousel
        plugins={[plugin.current]}
        className="rotate-1 bg-primary-foreground py-4 px-2 mr-2 overflow-hidden select-none"
        opts={{
          loop: true,
          align: "start",
          dragFree: true,
        }}
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
      >
        <CarouselContent>
          {TECHNOLOGIES.map(({ href, badgeUrl, label }) => (
            <CarouselItem
              key={href}
              className="basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 flex items-center justify-center"
            >
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  height={28}
                  width={120}
                  alt={`${label} badge`}
                  priority
                  src={badgeUrl}
                  className="object-contain hover-to-reveal rounded-sm h-7 w-auto"
                  unoptimized
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default TechnologiesMarquee;
