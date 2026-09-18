"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SectionHeader from "@/components/cupcake/core/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyP } from "@/components/ui/typography";
import { PROJECTS, TECHNOLOGIES } from "@/data";

const ProjectsGrid = () => {
  const path = usePathname();

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <SectionHeader
        title="TALK IS CHEAP. SHOW ME THE CODE."
        className="text-center mb-12"
      />

      <div
        className="
          grid gap-8
          sm:grid-cols-2
        "
      >
        {PROJECTS.slice(0, path.includes("projects") ? PROJECTS.length : 4).map(
          ({
            projectUrl,
            description,
            gitHubUrl,
            technologies,
            thumbnailPath,
            title,
          }) => (
            <Card
              key={title}
              className="overflow-hidden flex flex-col p-0 hover-to-reveal"
            >
              <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
                <Image
                  src={thumbnailPath}
                  alt={title}
                  fill
                  priority
                  className="object-contain bg-primary"
                />
              </div>

              <div className="flex flex-col flex-1 p-4">
                <CardHeader className="p-0 mb-3 flex flex-row items-start justify-between">
                  <CardTitle className="text-base sm:text-lg">
                    {title}
                  </CardTitle>
                  <div className="flex gap-2 flex-wrap">
                    {gitHubUrl ? (
                      <Button asChild size="sm" variant="outline">
                        <Link
                          href={gitHubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiGithub className="size-4 mr-1" />
                          Code
                        </Link>
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" disabled>
                        <SiGithub className="size-4 mr-1" />
                        Code
                      </Button>
                    )}
                    {projectUrl ? (
                      <Button asChild size="sm" variant="default">
                        <Link
                          href={projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="size-4 mr-1" />
                          Live
                        </Link>
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" disabled>
                        <ExternalLink className="size-4 mr-1" />
                        Live
                      </Button>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="p-0">
                  <TypographyP className="text-sm text-muted-foreground mb-4">
                    {description}
                  </TypographyP>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => {
                      const techData = TECHNOLOGIES.find(
                        (t) => t.label.toLowerCase() === tech.toLowerCase(),
                      );
                      return techData ? (
                        <Image
                          key={`${title}-${tech}`}
                          src={techData.badgeUrl}
                          alt={tech}
                          height={20}
                          width={80}
                          className="h-5 w-auto object-contain"
                          unoptimized
                        />
                      ) : (
                        <Badge key={`${title}-${tech}`} variant="secondary">
                          {tech}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </div>
            </Card>
          ),
        )}
      </div>

      {!path.includes("projects") && (
        <Button asChild className="float-right my-4" variant={"link"}>
          <Link href={"/projects"}>
            PROJECTS
            <ArrowRight />
          </Link>
        </Button>
      )}
    </section>
  );
};

export default ProjectsGrid;
