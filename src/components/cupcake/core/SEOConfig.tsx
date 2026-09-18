import { PROJECTS, SKILLS, TECHNOLOGIES } from "@/data";
import { getBlogs } from "@/lib/blogs";
import "@/styles";
import type { Metadata } from "next";

export const metadataConfig: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? ""),
  title: {
    default: "Portfolio | Karume",
    template: "Portfolio | %s",
  },
  description:
    "Portfolio of Daniel Karume  -  Software Developer. Specializing in React.js, Next.js, and React Native.",
  keywords: [
    "Daniel Karume",
    "Portfolio",
    "Software Developer",
    "Computer Science Student",
    "Mobile Developer",
    "React Developer",
    "Next.js Developer",
    "Rastuc Technologies",
    "Kenya Developer",
    ...TECHNOLOGIES.map(({ label }) => label),
    ...SKILLS.map(({ title }) => title),
    ...SKILLS.map(({ description }) => description),
    ...PROJECTS.map(({ title }) => title),
    ...PROJECTS.map(({ description }) => description),
    ...(await getBlogs().then((data) => data.map((d) => d.title))),
    ...(await getBlogs().then((data) => data.map((d) => d.description))),
  ],
  authors: [{ name: "Daniel Karume", url: process.env.NEXT_PUBLIC_APP_URL }],
  creator: "Daniel Karume",
  publisher: "Daniel Karume",

  openGraph: {
    title: "Daniel Karume | Software Developer",
    description:
      "Explore my projects, experience, and skills as a passionate software developer.",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "Daniel Karume's Portfolio",
    locale: "en_US",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "Daniel Karume | Software Developer",
    description: "Portfolio of Daniel Karume  -  Software Developer.",
    creator: "@karume_lab",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL,
  },

  category: "technology",
};

const SEOConfig = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Karume",
    description: "Software Developer",
    url: process.env.NEXT_PUBLIC_APP_URL,
    image: `${process.env.NEXT_PUBLIC_APP_URL}/core/me.png`,
    sameAs: [
      "https://github.com/Karume-lab",
      "https://linkedin.com/in/daniel-karume",
      "https://twitter.com/karume_lab",
    ],
    jobTitle: "Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "Rastuc Technologies",
    },
    alumniOf: {
      "@type": "Organization",
      name: "Jomo Kenya University (JKUAT)",
    },
    knowsAbout: TECHNOLOGIES.map(({ label }) => label),
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Developer",
      occupationLocation: {
        "@type": "City",
        name: "Nairobi, Kenya",
      },
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Daniel Karume Portfolio",
    alternateName: "Daniel Karume",
    url: process.env.NEXT_PUBLIC_APP_URL,
    description: "Portfolio website showcasing projects and skills",
    author: {
      "@type": "Person",
      name: "Daniel Karume",
    },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: maybe because there is no other way?
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: maybe because there is no other way?
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default SEOConfig;
