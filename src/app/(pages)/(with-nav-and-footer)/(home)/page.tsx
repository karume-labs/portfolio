"use client";

import { useVersion } from "@/components/providers/VersionProvider";

// Cupcake Imports
import BioCupcake from "@/components/cupcake/home/Bio";
import BlogsListCupcake from "@/components/cupcake/blogs/BlogsList";
import CertificationsGridCupcake from "@/components/cupcake/home/CertificationsGrid";
import ExperienceTimelineCupcake from "@/components/cupcake/home/ExperienceTimeline";
import HeroSectionCupcake from "@/components/cupcake/core/HeroSection";
import InsposCupcake from "@/components/cupcake/home/Inspos";
import ProjectsGridCupcake from "@/components/cupcake/projects/ProjectsGrid";
import ReachOutCupcake from "@/components/cupcake/home/ReachOut";
import RecommendationLettersCupcake from "@/components/cupcake/home/RecommendationLetters";
import TechnologiesMarqueeCupcake from "@/components/cupcake/home/TechnologiesMarquee";

// Donut Imports
import BioDonut from "@/components/donut/home/Bio";
import BlogsListDonut from "@/components/donut/blogs/BlogsList";
import CertificationsGridDonut from "@/components/donut/home/CertificationsGrid";
import ExperienceTimelineDonut from "@/components/donut/home/ExperienceTimeline";
import HeroSectionDonut from "@/components/donut/core/HeroSection";
import ProjectsGridDonut from "@/components/donut/projects/ProjectsGrid";
import ReachOutDonut from "@/components/donut/home/ReachOut";
import RecommendationLettersDonut from "@/components/donut/home/RecommendationLetters";
import TechnologiesMarqueeDonut from "@/components/donut/home/TechnologiesMarquee";

const HomePageCupcake = () => (
  <div className="flex flex-col gap-y-10">
    <div>
      <HeroSectionCupcake />
      <BioCupcake />
    </div>
    <TechnologiesMarqueeCupcake />
    <CertificationsGridCupcake />
    <ExperienceTimelineCupcake />
    <RecommendationLettersCupcake />
    <ProjectsGridCupcake />
    <BlogsListCupcake />
    <InsposCupcake />
    <ReachOutCupcake />
  </div>
);

const HomePageDonut = () => (
  <div className="flex flex-col gap-y-16 lg:gap-y-24 bg-background">
    <HeroSectionDonut />
    <BioDonut />
    <TechnologiesMarqueeDonut />
    <CertificationsGridDonut />
    <ExperienceTimelineDonut />
    <RecommendationLettersDonut />
    <ProjectsGridDonut />
    <BlogsListDonut />
    <ReachOutDonut />
  </div>
);

const HomePage = () => {
  const { version } = useVersion();
  
  return version === "cupcake" ? <HomePageCupcake /> : <HomePageDonut />;
};

export default HomePage;
