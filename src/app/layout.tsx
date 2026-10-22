import "@/styles";

import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { Suspense } from "react";
import ChangeMetadataTitleOnBlur from "@/components/cupcake/core/ChangeMetadataTitleOnBlur";
import SEOConfig, { metadataConfig } from "@/components/cupcake/core/SEOConfig";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata = metadataConfig;

interface RootLayoutProps extends Readonly<{ children: React.ReactNode }> {}

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { VersionProvider } from "@/components/providers/VersionProvider";

const RootLayout: React.FC<RootLayoutProps> = async ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SEOConfig />
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: theme init script to prevent FOUC
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var params = new URLSearchParams(window.location.search);
                  var isCupcake = params.get('v') === 'cupcake';
                  if (isCupcake) return;
                  var stored = localStorage.getItem('portfolio-theme');
                  var isDark = false;
                  var hour = new Date().getHours();
                  var isNight = hour >= 19 || hour < 6;
                  var deviceDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark') {
                    isDark = true;
                  } else if (stored === 'light') {
                    isDark = false;
                  } else {
                    if (deviceDark) {
                      isDark = true;
                    } else if (isNight) {
                      isDark = true;
                    }
                  }
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased min-h-screen flex flex-col`}
        id="root"
      >
        <SmoothScrollProvider>
          <NuqsAdapter>
            <Suspense fallback={null}>
              <VersionProvider>
                <ThemeProvider>
                  <ChangeMetadataTitleOnBlur />
                  <Toaster richColors />
                  {children}
                </ThemeProvider>
              </VersionProvider>
            </Suspense>
          </NuqsAdapter>
        </SmoothScrollProvider>
      </body>
    </html>
  );
};

export default RootLayout;
