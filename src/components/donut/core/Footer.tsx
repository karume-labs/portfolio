"use client";

import { ArrowUp, History } from "lucide-react";
import { SubscribeForm } from "@/components/cupcake/home/SubscribeForm";
import { useVersion } from "@/components/providers/VersionProvider";

const Footer = () => {
  const { version, setVersion } = useVersion();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-muted/40 border-t border-border py-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-8 relative z-10">
        <div className="text-sm text-muted-foreground text-center md:text-left font-medium">
          Designed and Made with{" "}
          <span className="inline-block animate-bounce text-brand">🗿</span>, by yours truly (me)*.
          <br />
          <span className="text-xs opacity-70">© {new Date().getFullYear()} Daniel Karume. All rights reserved.</span>
        </div>

        <div className="flex flex-col items-start max-w-[220px]">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-1.5">
            <History className="size-3" /> Wayback
          </span>
          <p className="text-xs text-muted-foreground/80 mb-3 leading-relaxed">
            A time machine for this portfolio. Explore previous design iterations and themes.
          </p>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => setVersion("cupcake")}
              className={`text-sm text-left hover:text-brand hover:underline underline-offset-4 transition-all ${version === "cupcake" ? "text-brand font-medium" : "text-muted-foreground"}`}
            >
              v1.0 Cupcake
            </button>
            <button
              type="button"
              onClick={() => setVersion("donut")}
              className={`text-sm text-left hover:text-brand hover:underline underline-offset-4 transition-all ${version === "donut" ? "text-brand font-medium" : "text-muted-foreground"}`}
            >
              v2.0 Donut
            </button>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <SubscribeForm />
        </div>

        <button 
          type="button"
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-brand transition-colors"
        >
          <span>Back to Top</span>
          <div className="size-8 rounded-md bg-secondary flex items-center justify-center group-hover:bg-brand/10 transition-colors">
            <ArrowUp className="size-4 group-hover:-translate-y-1 transition-transform" />
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
