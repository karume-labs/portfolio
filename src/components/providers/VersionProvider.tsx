"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { useQueryState } from "nuqs";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";

type Version = "cupcake" | "donut";

interface VersionContextType {
  version: Version;
  setVersion: (version: Version) => void;
  isTransitioning: boolean;
}

const VersionContext = createContext<VersionContextType | undefined>(undefined);

export function VersionProvider({ children }: { children: ReactNode }) {
  const [versionQuery, setVersionQuery] = useQueryState("v", {
    defaultValue: "donut",
    parse: (value) => (value === "cupcake" ? "cupcake" : "donut"),
  });
  
  const [activeVersion, setActiveVersion] = useState<Version>("donut");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const searchParams = useSearchParams();

  // Validate URL parameter and strip it if it's an invalid version
  useEffect(() => {
    const vParam = searchParams.get("v");
    if (vParam && vParam !== "cupcake" && vParam !== "donut") {
      // nuqs will strip the parameter entirely when set to its defaultValue "donut"
      setVersionQuery("donut"); 
    }
  }, [searchParams, setVersionQuery]);

  // Sync with initial query on mount, and handle browser back/forward buttons
  useEffect(() => {
    if (versionQuery && versionQuery !== activeVersion && !isTransitioning) {
      setActiveVersion(versionQuery as Version);
    }
  }, [versionQuery, activeVersion, isTransitioning]);

  const handleSetVersion = (newVersion: Version) => {
    if (newVersion === activeVersion || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Smooth scroll to top for the transition
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Wait for the scroll to initiate before starting the exit animation
    setTimeout(() => {
      setVersionQuery(newVersion);
      setActiveVersion(newVersion);
      
      // Let the entry animation play out before lifting the transition lock
      setTimeout(() => setIsTransitioning(false), 500); 
    }, 200);
  };

  return (
    <VersionContext.Provider 
      value={{ 
        version: activeVersion, 
        setVersion: handleSetVersion,
        isTransitioning
      }}
    >
      <div className="hidden lg:block">
        {activeVersion === "cupcake" ? (
          <AnimatedCursor
            key="cupcake"
            color="0, 0, 0"
            innerSize={24}
            outerSize={48}
            outerScale={1.5}
            trailingSpeed={8}
            innerStyle={{ zIndex: 999999 }}
            outerStyle={{ zIndex: 999999 }}
          />
        ) : (
          <AnimatedCursor
            key="donut"
            color="65, 47, 87" // #412f57 Brand color
            innerSize={12}
            outerSize={36}
            outerScale={1.5}
            trailingSpeed={8}
            innerStyle={{ zIndex: 999999 }}
            outerStyle={{ zIndex: 999999 }}
          />
        )}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeVersion}
          className={activeVersion === "donut" ? "theme-donut" : ""}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </VersionContext.Provider>
  );
}

export function useVersion() {
  const context = useContext(VersionContext);
  if (context === undefined) {
    throw new Error("useVersion must be used within a VersionProvider");
  }
  return context;
}
