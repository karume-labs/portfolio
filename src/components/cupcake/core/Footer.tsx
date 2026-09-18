"use client";

import { SubscribeForm } from "@/components";
import { useVersion } from "@/components/providers/VersionProvider";
import { History } from "lucide-react";

const Footer = () => {
  const { version, setVersion } = useVersion();
  return (
    <footer className="bg-primary text-primary-foreground text-center md:text-left py-12 px-6">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-8">
        <div>
          Designed and Made with{" "}
          <span className="inline-block animate-bounce">🗿</span>, by yours
          truly (me)*.
        </div>

        <div className="flex flex-col items-start max-w-[220px] text-left">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-primary-foreground/70 mb-2 flex items-center gap-1.5">
            <History className="size-3" /> Wayback
          </span>
          <p className="text-xs text-primary-foreground/80 mb-3 leading-relaxed">
            A time machine for this portfolio. Explore previous design iterations and themes.
          </p>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => setVersion("cupcake")}
              className={`text-sm text-left hover:text-primary-foreground hover:underline underline-offset-4 transition-all ${version === "cupcake" ? "text-primary-foreground font-semibold" : "text-primary-foreground/70"}`}
            >
              v1.0 Cupcake
            </button>
            <button
              type="button"
              onClick={() => setVersion("donut")}
              className={`text-sm text-left hover:text-primary-foreground hover:underline underline-offset-4 transition-all ${version === "donut" ? "text-primary-foreground font-semibold" : "text-primary-foreground/70"}`}
            >
              v2.0 Donut
            </button>
          </div>
        </div>

        <SubscribeForm />
      </div>
    </footer>
  );
};

export default Footer;
