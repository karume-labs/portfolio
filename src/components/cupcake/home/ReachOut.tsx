"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, MousePointer2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import SectionHeader from "@/components/cupcake/core/SectionHeader";
import ContactMeFormDialog from "@/components/cupcake/home/ContactMeDialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TypographyH2, TypographyP } from "@/components/ui/typography";

const contactTags = [
  { label: "Website Development", x: "20%", y: "20%" },
  { label: "Mobile Apps", x: "70%", y: "25%" },
  { label: "UI/UX", x: "25%", y: "75%" },
  { label: "Analytic Dashboards", x: "70%", y: "50%" },
  { label: "Brand Websites", x: "40%", y: "40%" },
  { label: "E-Commerce Software", x: "15%", y: "55%" },
  { label: "SEO Optimization", x: "55%", y: "10%" },
];

const ReachOut = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % contactTags.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="reach-out"
      className="relative overflow-hidden bg-primary/90 text-primary-foreground px-4 sm:px-8 lg:px-20 py-16 sm:py-20"
    >
      <SectionHeader title="HOW TO REACH ME?" className="text-center" />
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="hidden md:flex relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[460px] items-center justify-center overflow-visible pointer-events-none">
          <div className="relative w-[90%] h-[90%]">
            {contactTags.map((tag, i) => {
              const isActive = i === activeIndex;
              return (
                <motion.div
                  key={tag.label}
                  className="absolute"
                  style={{
                    left: tag.x,
                    top: tag.y,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{ scale: isActive ? 1.12 : 1 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                >
                  <Badge
                    variant={isActive ? "default" : "secondary"}
                    className={`text-xs sm:text-sm font-medium py-2 px-4 sm:px-6 transition-all duration-300`}
                  >
                    {tag.label}
                  </Badge>
                </motion.div>
              );
            })}

            <motion.div
              className="absolute z-20 flex flex-col items-start font-semibold text-xs sm:text-sm"
              animate={{
                left: contactTags[activeIndex].x,
                top: contactTags[activeIndex].y,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 18,
              }}
              style={{
                translateX: "148%",
                translateY: "148%",
              }}
            >
              <MousePointer2 className="size-5 sm:size-6 fill-primary text-primary" />
              <motion.span
                className="ml-5 -mt-4 backdrop-blur-sm px-2 py-0.5 rounded-full text-primary bg-primary-foreground border-primary border sm:text-xs"
                transition={{ duration: 0.3 }}
              >
                Karume
              </motion.span>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 max-w-xl w-full text-center lg:text-left">
          <TypographyH2 className="text-2xl sm:text-3xl font-semibold mb-3">
            I am ready to build your next product
          </TypographyH2>
          <TypographyP className="mb-8 text-sm sm:text-base">
            Feel free to reach out to me!
          </TypographyP>

          <div className="flex justify-center lg:justify-start gap-3 flex-wrap">
            <Button variant="secondary" asChild>
              <Link
                href="mailto:danielkarume.work@gmail.com"
                aria-label="Email me"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="size-6" />
              </Link>
            </Button>

            <Button variant="secondary" asChild>
              <Link
                href="https://wa.me/254704150182"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="size-6" />
              </Link>
            </Button>

            <ContactMeFormDialog />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachOut;
