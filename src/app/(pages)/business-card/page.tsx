"use client";

import { useVersion } from "@/components/providers/VersionProvider";
import BusinessCardCupcake from "@/components/cupcake/core/BusinessCard";
import BusinessCardDonut from "@/components/donut/core/BusinessCard";
import { cn } from "@/lib/utils";

const BusinessCardPage = () => {
  const { version } = useVersion();

  return (
    <main 
      className={cn(
        "flex min-h-screen items-center justify-center p-4 sm:p-8",
        version === "cupcake" ? "bg-gray-50" : "bg-background relative overflow-hidden"
      )}
    >
      {/* Donut specific decorative background */}
      {version === "donut" && (
        <>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
          </div>
        </>
      )}

      {version === "cupcake" ? <BusinessCardCupcake /> : <BusinessCardDonut />}
    </main>
  );
};

export default BusinessCardPage;
