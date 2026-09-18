"use client";

import { useVersion } from "@/components/providers/VersionProvider";
import ProjectsGridCupcake from "@/components/cupcake/projects/ProjectsGrid";
import ProjectsGridDonut from "@/components/donut/projects/ProjectsGrid";

const ProjectsPage = () => {
  const { version } = useVersion();

  return (
    <div className="my-24">
      {version === "cupcake" ? <ProjectsGridCupcake /> : <ProjectsGridDonut />}
    </div>
  );
};

export default ProjectsPage;
