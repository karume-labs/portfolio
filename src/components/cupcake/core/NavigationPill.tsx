"use client";

import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ViewResumeButton } from "@/components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { NAVIGATION_ITEMS } from "@/data";
import { cn } from "@/lib/utils";

const NavigationPill = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavigationMenu className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-primary rounded-md p-2 shadow-lg">
        <NavigationMenuList className="flex items-center gap-2">
          {NAVIGATION_ITEMS.map(({ href, label, icon: Icon }) => (
            <Tooltip key={href}>
              <TooltipTrigger>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href={href}
                      className="flex items-center gap-2 text-primary-foreground"
                    >
                      <Icon className="size-5" />
                      <TooltipContent side="bottom">{label}</TooltipContent>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </TooltipTrigger>
            </Tooltip>
          ))}



          <ViewResumeButton />
        </NavigationMenuList>
      </NavigationMenu>

      <div className="md:hidden fixed top-4 left-0 right-0 z-50 flex justify-between px-4">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger
            className="px-2 rounded-md bg-primary/95 backdrop-blur-sm hover:bg-primary/80 transition-colors"
          >
            <div className="relative size-6">
              <MenuIcon
                className={cn(
                  "absolute inset-0 size-6 text-primary-foreground transition-transform duration-400",
                  open
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100",
                )}
              />
              <XIcon
                className={cn(
                  "absolute inset-0 size-6 text-primary-foreground transition-transform duration-400",
                  open
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0",
                )}
              />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="bg-primary rounded-md p-2 w-48">
            {NAVIGATION_ITEMS.map(({ href, label, icon: Icon }) => (
              <DropdownMenuItem key={href} asChild>
                <Link
                  href={href}
                  className="flex items-center gap-2 text-primary-foreground"
                >
                  <Icon className="size-5" />
                  {label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex gap-2">

          <ViewResumeButton />
        </div>
      </div>
    </>
  );
};

export default NavigationPill;
