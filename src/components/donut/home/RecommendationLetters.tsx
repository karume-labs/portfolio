"use client";

import { ExternalLink, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import SectionHeader from "@/components/donut/core/SectionHeader";
import { recommendationLetters } from "@/data/recommendation-letters";

const RecommendationLetters = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="recommendations" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="RECOMMENDATION LETTERS" />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {recommendationLetters.map((letter) => (
            <motion.div key={letter.id} variants={itemVariants}>
              <Link
                href={letter.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group h-full"
              >
                <div className="relative h-full flex flex-col p-8 rounded-md bg-muted/50 border border-border transition-colors duration-300 overflow-hidden hover:bg-muted hover:border-brand">

                  
                  <div className="relative z-10 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="relative size-12 mb-6 rounded-md overflow-hidden bg-background p-2 border border-border shadow-sm mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500">
                        <Image
                          src={letter.logo}
                          alt={`${letter.company} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="font-display font-medium text-xl text-foreground/90 group-hover:text-foreground transition-colors pr-8">
                        {letter.company}
                      </p>
                    </div>
                    
                    <div className="mt-8 flex items-center justify-between border-t border-border/40 pt-4">
                      <span className="text-sm text-muted-foreground group-hover:text-brand transition-colors">
                        View Letter
                      </span>
                      <ExternalLink className="size-4 text-muted-foreground group-hover:text-brand transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RecommendationLetters;
