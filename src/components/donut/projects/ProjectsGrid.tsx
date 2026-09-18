"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import SectionHeader from "@/components/donut/core/SectionHeader";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { PROJECTS } from "@/data/projects";
import { TECHNOLOGIES } from "@/data/technologies";

const extractBrandLogoUrl = (badgeUrl: string) => {
  try {
    const url = new URL(badgeUrl);
    const logo = url.searchParams.get("logo");
    if (logo) {
      return `https://cdn.simpleicons.org/${logo}`;
    }
  } catch {}
  return null;
};

const ProjectsGrid = () => {
  const path = usePathname();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="TALK IS CHEAP. SHOW ME THE CODE." />

        <motion.div
          className="grid gap-8 sm:grid-cols-2 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {PROJECTS.slice(0, path.includes("projects") ? PROJECTS.length : 4).map(
            ({
              projectUrl,
              description,
              gitHubUrl,
              technologies,
              thumbnailPath,
              title,
            }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                className="group relative flex flex-col rounded-md bg-muted/50 border border-border transition-colors duration-300 overflow-hidden hover:bg-muted hover:border-brand"
              >
                {/* Image Container with Hover Overlay */}
                <div className="relative w-full aspect-video overflow-hidden bg-muted">
                  <Image
                    src={thumbnailPath}
                    alt={title}
                    fill
                    priority
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  
                  {/* Action Buttons Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                    {gitHubUrl && (
                      <Button asChild size="sm" variant="secondary" className="rounded-md">
                        <Link href={gitHubUrl} target="_blank" rel="noopener noreferrer">
                          <SiGithub className="size-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {projectUrl && (
                      <Button asChild size="sm" className="bg-brand text-white hover:bg-brand/90 border-none rounded-md">
                        <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="size-4 mr-2" />
                          Live Site
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <TypographyH3 className="font-display font-semibold text-xl mb-3 text-foreground/90 group-hover:text-brand transition-colors">
                    {title}
                  </TypographyH3>
                  
                  <TypographyP className="text-sm text-muted-foreground mb-6 line-clamp-3">
                    {description}
                  </TypographyP>
                  
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {technologies.map((tech) => {
                      const techData = TECHNOLOGIES.find(
                        (t) => t.label.toLowerCase() === tech.toLowerCase(),
                      );
                      const logoUrl = techData ? extractBrandLogoUrl(techData.badgeUrl) : null;

                      return techData ? (
                        <Link
                          key={`${title}-${tech}`}
                          href={techData.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/50 border border-border transition-all duration-300 hover:border-brand hover:bg-muted group select-none whitespace-nowrap z-20"
                        >
                          {logoUrl ? (
                            <Image
                              src={logoUrl}
                              alt={`${tech} icon`}
                              width={12}
                              height={12}
                              unoptimized
                              className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                            />
                          ) : (
                            <div className="w-3 h-3 rounded-sm bg-primary/20" />
                          )}
                          <span className="text-[10px] font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                            {tech}
                          </span>
                        </Link>
                      ) : (
                        <span key={`${title}-${tech}`} className="flex items-center px-2.5 py-1 rounded-md bg-muted/50 border border-border text-[10px] font-medium text-muted-foreground select-none z-20">
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>

        {!path.includes("projects") && (
          <div className="flex justify-end mt-12">
            <Button asChild variant="link" className="text-brand hover:text-brand/80 gap-2 font-medium">
              <Link href="/projects">
                VIEW ALL PROJECTS
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
