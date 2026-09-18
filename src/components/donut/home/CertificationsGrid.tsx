"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";

import SectionHeader from "@/components/donut/core/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { CERTIFICATIONS, type Certificate } from "@/data/certifications";

const CertificationsGrid = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const path = usePathname();

  const handleViewCert = (cert: Certificate) => {
    setSelectedCert(cert);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedCert(null);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const displayCerts = CERTIFICATIONS.slice(
    0,
    path.includes("certificates") ? CERTIFICATIONS.length : 4
  );

  return (
    <section className="section-padding" id="certifications">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="WHERE'S THE PROOF?" />

        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {displayCerts.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              className="group relative flex flex-col sm:flex-row gap-4 p-5 rounded-md bg-muted/50 border border-border transition-colors duration-300 hover:border-brand hover:bg-muted cursor-pointer"
              onClick={() => handleViewCert(cert)}
            >
              {/* Arrow Icon Indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-md bg-background flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10 border border-border group-hover:border-brand group-hover:text-brand">
                <ArrowUpRight className="size-4" />
              </div>

              {/* Image Container */}
              <div className="relative w-full sm:w-48 aspect-video sm:aspect-square shrink-0 rounded-md overflow-hidden bg-background border border-border">
                <Image
                  src={cert.imagePath}
                  alt={cert.title}
                  fill
                  className="object-contain p-2 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 py-1">
                <TypographyH3 className="font-display font-semibold text-lg sm:text-xl pr-6 mb-2 text-foreground/90 group-hover:text-foreground transition-colors">
                  {cert.title}
                </TypographyH3>
                <TypographyP className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {cert.description}
                </TypographyP>
                
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-[10px] font-medium px-2 py-0 bg-background text-muted-foreground rounded-md"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {cert.skills.length > 3 && (
                    <Badge variant="secondary" className="text-[10px] bg-background rounded-md">
                      +{cert.skills.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {!path.includes("certificates") && (
          <div className="flex justify-end mt-8">
            <Button asChild variant="link" className="text-brand hover:text-brand/80 gap-2 font-medium">
              <Link href="/certificates">
                VIEW ALL CERTIFICATES
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-3xl bg-background border-border rounded-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">{selectedCert?.title}</DialogTitle>
          </DialogHeader>
          <div className="relative h-[60vh] w-full rounded-md overflow-hidden bg-muted">
            {selectedCert && (
              <Image
                src={selectedCert.imagePath}
                alt={selectedCert.title}
                fill
                className="object-contain p-4"
              />
            )}
          </div>
          <div className="flex justify-end mt-4">
            <Button variant="outline" onClick={handleCloseDialog} className="border-border hover:bg-muted rounded-md">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificationsGrid;
