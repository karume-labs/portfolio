"use client";

import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TypographyH2, TypographyP } from "@/components/ui/typography";
import type { BlogFrontmatter } from "@/lib/types";
import { timeSinceOrDate } from "@/lib/utils";

interface BlogListItemProps {
  blog: BlogFrontmatter;
}

export const BlogListItem: React.FC<BlogListItemProps> = ({ blog }) => {
  const { date, description, readingTime, slug, tags, title } = blog;

  return (
    <Link href={`/blogs/${slug}`} className="block h-full group">
      <li className="list-none flex flex-col h-full">
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="size-4" />
            {timeSinceOrDate(date)}
          </span>

          <span className="flex items-center gap-1">
            <Clock className="size-4" />
            {readingTime}
          </span>
        </div>

        <div className="flex justify-between items-center mt-2 group-hover:text-primary transition-colors">
          <TypographyH2 className="text-xl font-semibold m-0">{title}</TypographyH2>
          <ArrowRight className="shrink-0 ml-4 group-hover:translate-x-1 transition-transform" />
        </div>

        <TypographyP className="text-muted-foreground mt-2 flex-grow">
          {description}
        </TypographyP>

        <div className="flex gap-2 flex-wrap mt-4 mb-4">
          {tags?.map((tag) => (
            <Badge key={tag} variant="secondary" className="uppercase">
              {tag}
            </Badge>
          ))}
        </div>

        <Separator className="mt-auto" />
      </li>
    </Link>
  );
};
