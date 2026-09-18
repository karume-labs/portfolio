"use client";

import SectionHeader from "@/components/donut/core/SectionHeader";
import { TypographyP } from "@/components/ui/typography";
import { motion, type Variants } from "framer-motion";

const Bio = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      className="bg-background text-foreground section-padding"
      id="bio"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="WHO AM I?" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 mt-12"
        >
          <motion.div variants={itemVariants}>
            <div className="border-l-4 border-brand pl-6 py-2 bg-brand/5 rounded-r-lg max-w-max">
              <TypographyP className="text-lg sm:text-xl text-muted-foreground italic line-through decoration-brand decoration-2 opacity-80 mb-0">
                I'm Batman.
              </TypographyP>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <TypographyP className="leading-relaxed text-xl sm:text-2xl md:text-3xl font-light text-foreground/90">
              Hi, I'm <span className="font-semibold text-foreground">Daniel Karume</span> - a
              passionate full-stack developer and Computer Science student at JKUAT. I
              combine technical expertise with creative problem-solving to build
              impactful digital solutions. 
            </TypographyP>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <TypographyP className="leading-relaxed text-xl sm:text-2xl md:text-3xl font-light text-foreground/90">
              Beyond coding, I enjoy mentoring fellow
              developers and experimenting with new technologies that push the
              boundaries of what's possible.
            </TypographyP>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;
