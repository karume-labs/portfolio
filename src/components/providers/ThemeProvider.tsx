"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useVersion } from "@/components/providers/VersionProvider";

export type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "portfolio-theme";

function isNightTime(): boolean {
  const hour = new Date().getHours();
  // Nighttime is between 7 PM (19:00) and 6 AM (06:00)
  return hour >= 19 || hour < 6;
}

function resolveSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";

  // Check user device preference first (takes priority)
  const isDeviceDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  if (isDeviceDark) return "dark";

  // If no device dark preference, use time-based (dark for nighttime, light for daytime)
  return isNightTime() ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { version } = useVersion();
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  // Load stored preference on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
      if (stored === "light" || stored === "dark" || stored === "system") {
        setThemeState(stored);
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Update resolved theme whenever theme, device preference, or time changes
  const updateResolvedTheme = useCallback(() => {
    let nextResolved: "light" | "dark";
    if (theme === "dark") {
      nextResolved = "dark";
    } else if (theme === "light") {
      nextResolved = "light";
    } else {
      nextResolved = resolveSystemTheme();
    }
    setResolvedTheme(nextResolved);
  }, [theme]);

  useEffect(() => {
    updateResolvedTheme();

    // Listen for OS device preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme === "system") {
        updateResolvedTheme();
      }
    };

    mediaQuery.addEventListener("change", handler);

    // Check periodically for day/night transition (every 5 minutes)
    const interval = setInterval(
      () => {
        if (theme === "system") {
          updateResolvedTheme();
        }
      },
      5 * 60 * 1000,
    );

    return () => {
      mediaQuery.removeEventListener("change", handler);
      clearInterval(interval);
    };
  }, [theme, updateResolvedTheme]);

  // Apply or remove dark class on HTML element based on version and resolvedTheme
  useEffect(() => {
    const root = document.documentElement;

    // Dark mode is exclusively enabled on v2 (donut)
    if (version === "donut" && resolvedTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [version, resolvedTheme]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch {
      // Ignore storage errors
    }
  }, []);

  const toggleTheme = useCallback(() => {
    // Quick toggle between light and dark
    const next = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(next);
  }, [resolvedTheme, setTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
