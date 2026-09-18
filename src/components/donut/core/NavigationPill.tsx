"use client";

import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ViewResumeButton from "@/components/cupcake/core/ViewResumeButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NAVIGATION_ITEMS } from "@/data/navigation-items";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";

const NavigationPill = () => {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <>
      <nav className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-background border border-border/50 rounded-md p-1.5 shadow-sm">
        <ul className="flex items-center gap-1">
          {NAVIGATION_ITEMS.map(({ href, label, icon: Icon }) => {
            const isActive = activeSection === href;
            return (
              <li key={href} className="relative">
                <Link
                  href={href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors z-10 relative",
                    isActive ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  <Icon className="size-4" />
                  <span className="hidden lg:inline">{label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-primary rounded-md -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}


          <ViewResumeButton />
        </ul>
      </nav>

      <div className="md:hidden fixed top-4 left-0 right-0 z-50 flex justify-between px-4">
        <div className="flex gap-2">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="size-10 flex items-center justify-center rounded-md bg-background border border-border/50 shadow-sm hover:bg-secondary transition-colors text-foreground">
              <div className="relative size-5">
                <MenuIcon
                  className={cn(
                    "absolute inset-0 size-5 transition-transform duration-400",
                    open
                      ? "rotate-90 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100",
                  )}
                />
                <XIcon
                  className={cn(
                    "absolute inset-0 size-5 transition-transform duration-400",
                    open
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-0 opacity-0",
                  )}
                />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-background border border-border/50 rounded-md p-2 w-56 ml-4 mt-2 shadow-lg">
              {NAVIGATION_ITEMS.map(({ href, label, icon: Icon }) => {
                const isActive = activeSection === href;
                return (
                  <DropdownMenuItem key={href} asChild className={cn("rounded-md mb-1", isActive && "bg-primary/10 text-brand font-medium")}>
                    <Link
                      href={href}
                      className="flex items-center gap-3 w-full"
                    >
                      <Icon className={cn("size-4", isActive ? "text-brand" : "text-muted-foreground")} />
                      {label}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>


        </div>

        <ViewResumeButton />
      </div>
    </>
  );
};

export default NavigationPill;
