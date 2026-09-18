"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "@/components/donut/core/SectionHeader";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { experiences } from "@/data/experiences";

const ExperienceTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section-padding overflow-hidden" id="experience">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="EXPERIENCE" />

        <div ref={containerRef} className="relative mt-12 sm:mt-16">
          {/* Background Timeline Track */}
          <div className="absolute left-[28px] sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-1 bg-border/40 rounded-full" />
          
          {/* Animated Gradient Fill */}
          <motion.div 
            className="absolute left-[28px] sm:left-1/2 sm:-translate-x-1/2 top-0 w-1 bg-linear-to-b from-brand/80 to-brand rounded-full origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 sm:space-y-20 relative">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative flex items-center justify-between flex-col sm:flex-row group w-full"
                >
                  {/* Left Content (Empty for odd on desktop, content for even) */}
                  <div className={`hidden sm:block w-[45%] ${!isEven ? 'order-1 text-right pr-8' : 'order-2'}`}>
                    {!isEven && (
                      <div className="flex flex-col items-end">
                        <span className="text-sm font-medium text-brand mb-1 px-3 py-1 bg-brand/10 rounded-md border border-brand/20">
                          {exp.date}
                        </span>
                        <TypographyH3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-brand transition-colors">
                          {exp.title}
                        </TypographyH3>
                        <TypographyP className="text-sm text-muted-foreground whitespace-pre-line group-hover:text-foreground/80 transition-colors text-right">
                          {exp.description}
                        </TypographyP>
                      </div>
                    )}
                  </div>

                  {/* Icon Node */}
                  <div className="absolute left-[28px] sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-md bg-background border-4 border-background shadow-[0_0_0_2px_var(--border)] group-hover:shadow-[0_0_0_2px_var(--brand)] transition-shadow duration-300 z-10">
                    <div className="w-full h-full rounded-md bg-card flex items-center justify-center text-muted-foreground group-hover:text-brand transition-colors">
                      <div className="[&>svg]:w-5 [&>svg]:h-5">
                        {typeof exp.icon === "function" ? exp.icon() : exp.icon}
                      </div>
                    </div>
                  </div>

                  {/* Right Content / Mobile Content */}
                  <div className={`w-full sm:w-[45%] pl-[80px] sm:pl-0 ${isEven ? 'sm:order-2 sm:text-left sm:pl-8' : 'sm:order-1 sm:hidden'}`}>
                    <div className={`flex flex-col ${isEven ? 'sm:items-start' : 'items-start'}`}>
                      <span className="text-sm font-medium text-brand mb-1 px-3 py-1 bg-brand/10 rounded-md border border-brand/20 inline-block">
                        {exp.date}
                      </span>
                      <TypographyH3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-brand transition-colors mt-2 sm:mt-0">
                        {exp.title}
                      </TypographyH3>
                      <TypographyP className="text-sm text-muted-foreground whitespace-pre-line group-hover:text-foreground/80 transition-colors">
                        {exp.description}
                      </TypographyP>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
