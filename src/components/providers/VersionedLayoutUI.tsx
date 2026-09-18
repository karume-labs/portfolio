"use client";


// Cupcake Imports
import NavigationPillCupcake from "@/components/cupcake/core/NavigationPill";
import ScrollProgressCupcake from "@/components/cupcake/core/ScrollProgress";
import BackToTopButtonCupcake from "@/components/cupcake/core/BackToTopButton";
import FooterCupcake from "@/components/cupcake/core/Footer";

// Donut Imports
import NavigationPillDonut from "@/components/donut/core/NavigationPill";
import FooterDonut from "@/components/donut/core/Footer";
import { useVersion } from "@/components/providers/VersionProvider";

interface VersionedLayoutUIProps {
  children: React.ReactNode;
}

export function VersionedLayoutUI({ children }: VersionedLayoutUIProps) {
  const { version } = useVersion();

  if (version === "cupcake") {
    return (
      <>
        <NavigationPillCupcake />

        <ScrollProgressCupcake />
        <BackToTopButtonCupcake />
        <main className="flex-1">{children}</main>
        <FooterCupcake />
      </>
    );
  }

  // Donut Layout
  return (
    <>
      <NavigationPillDonut />

      {/* Donut doesn't have a floating back to top button, it's inside the footer */}
      <main className="flex-1 bg-background">{children}</main>
      <FooterDonut />
    </>
  );
}
