"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "relative size-9 rounded-md transition-colors bg-background hover:bg-secondary border-border/50 text-foreground/70 hover:text-foreground",
            className,
          )}
          aria-label="Toggle theme"
        >
          <Sun
            className={cn(
              "size-4 transition-all duration-300",
              resolvedTheme === "dark"
                ? "scale-0 -rotate-90 opacity-0 absolute"
                : "scale-100 rotate-0 opacity-100",
            )}
          />
          <Moon
            className={cn(
              "size-4 transition-all duration-300",
              resolvedTheme === "dark"
                ? "scale-100 rotate-0 opacity-100"
                : "scale-0 rotate-90 opacity-0 absolute",
            )}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-36 rounded-md shadow-lg border-border/50 bg-background"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={cn(
            "flex items-center gap-2 cursor-pointer rounded-sm",
            theme === "light"
              ? "bg-primary/10 text-brand font-medium"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Sun className="size-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={cn(
            "flex items-center gap-2 cursor-pointer rounded-sm",
            theme === "dark"
              ? "bg-primary/10 text-brand font-medium"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Moon className="size-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={cn(
            "flex items-center gap-2 cursor-pointer rounded-sm",
            theme === "system"
              ? "bg-primary/10 text-brand font-medium"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Monitor className="size-4" />
          <span>Auto / Time</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
