import "@/styles";

import { Geist, Geist_Mono, Outfit } from "next/font/google";
import ChangeMetadataTitleOnBlur from "@/components/cupcake/core/ChangeMetadataTitleOnBlur";
import SEOConfig, { metadataConfig } from "@/components/cupcake/core/SEOConfig";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";

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
import { VersionProvider } from "@/components/providers/VersionProvider";

const RootLayout: React.FC<RootLayoutProps> = async ({ children }) => {
  return (
    <html lang="en">
      <head>
        <SEOConfig />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased min-h-screen flex flex-col`}
        id="root"
      >
        <SmoothScrollProvider>
          <NuqsAdapter>
            <Suspense fallback={null}>
              <VersionProvider>
                <ChangeMetadataTitleOnBlur />
                <Toaster richColors />
                {children}
              </VersionProvider>
            </Suspense>
          </NuqsAdapter>
        </SmoothScrollProvider>
      </body>
    </html>
  );
};

export default RootLayout;
