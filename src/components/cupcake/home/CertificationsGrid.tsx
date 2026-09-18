"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { SectionHeader } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TypographyP } from "@/components/ui/typography";
import { CERTIFICATIONS, type Certificate } from "@/data";

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

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 overflow-hidden"
      id="certifications"
    >
      <SectionHeader title="WHERE'S THE PROOF?" className="text-center" />

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {CERTIFICATIONS.slice(
          0,
          path.includes("certificates") ? CERTIFICATIONS.length : 4,
        ).map((cert) => (
          <Card
            key={cert.title}
            className="h-full flex flex-col items-stretch shadow-md hover:shadow-lg transition-shadow hover-to-reveal overflow-hidden p-0 gap-0"
          >
            <div className="relative w-full aspect-video overflow-hidden bg-muted/20 shrink-0">
              <Image
                src={cert.imagePath}
                alt={cert.title}
                fill
                priority
                className="object-contain p-4"
              />
            </div>

            <CardHeader className="p-6 pb-2 space-y-1">
              <CardTitle className="font-bold text-center text-lg sm:text-xl wrap-break-word">
                {cert.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 flex-1 p-6 pt-0 min-w-0 w-full">
              <TypographyP className="text-sm text-center text-muted-foreground wrap-break-word w-full block">
                {cert.description}
              </TypographyP>
              <div className="flex flex-wrap gap-2 justify-center w-full">
                {cert.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs font-medium px-2 py-0.5 rounded-full whitespace-normal text-center"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <div className="p-6 pt-0 mt-auto w-full">
              <div className="flex justify-center w-full">
                <Button
                  size="sm"
                  onClick={() => handleViewCert(cert)}
                  className="text-xs sm:text-sm w-full sm:w-auto"
                >
                  View Certificate
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {!path.includes("certificates") && (
        <Button asChild className="float-right my-4" variant={"link"}>
          <Link href={"/certificates"}>
            CERTIFICATES
            <ArrowRight />
          </Link>
        </Button>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedCert?.title}</DialogTitle>
          </DialogHeader>
          <div className="relative h-[60vh] w-full">
            {selectedCert && (
              <Image
                src={selectedCert.imagePath}
                alt={selectedCert.title}
                fill
                className="object-contain"
              />
            )}
          </div>
          <div className="flex justify-end mt-4">
            <Button variant="outline" onClick={handleCloseDialog}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificationsGrid;
