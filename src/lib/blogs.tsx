import { promises as fs } from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type CompileMDXResult, compileMDX } from "next-mdx-remote/rsc";
import { Pre } from "@/components/cupcake/core/Pre";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tooltip } from "@/components/ui/tooltip";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyH5,
  TypographyH6,
  TypographyInlineCode,
  TypographyLarge,
  TypographyLead,
  TypographyMuted,
  TypographyOL,
  TypographyP,
  TypographySmall,
  TypographyTable,
  TypographyUL,
} from "@/components/ui/typography";
import type { BlogFrontmatter } from "@/lib/types";

interface GetBlogResult {
  compiledMDX: CompileMDXResult<BlogFrontmatter>;
  slug: string;
  source: string;
}

export const getBlogs = async (): Promise<
  (BlogFrontmatter & { fileName: string })[]
> => {
  const blogsDir = path.join(process.cwd(), "public/blogs/content");
  const fileNames = await fs.readdir(blogsDir);

  const blogs = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(blogsDir, fileName);
      const content = await fs.readFile(filePath, "utf-8");

      const { frontmatter } = await compileMDX<BlogFrontmatter>({
        source: content,
        options: { parseFrontmatter: true },
      });

      return { fileName, ...frontmatter };
    }),
  );

  return blogs;
};

export const getBlog = async (slug: string): Promise<GetBlogResult> => {
  const filePath = path.join(
    process.cwd(),
    "public/blogs/content",
    `${slug}.mdx`,
  );

  try {
    const file = await fs.readFile(filePath, "utf8");

    const compiledMDX = await compileMDX<BlogFrontmatter>({
      source: file,
      components: {
        Badge,
        Card,
        Dialog,
        Label,
        Progress,
        Separator,
        Tooltip,
        pre: Pre,
        a: (props) => {
          const isExternal =
            props.href?.startsWith("http") || props.href?.startsWith("//");
          return (
            <Link
              {...props}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
            />
          );
        },
        h1: TypographyH1,
        h2: TypographyH2,
        h3: TypographyH3,
        h4: TypographyH4,
        h5: TypographyH5,
        h6: TypographyH6,
        p: TypographyP,
        lead: TypographyLead,
        large: TypographyLarge,
        small: TypographySmall,
        muted: TypographyMuted,
        blockquote: TypographyBlockquote,
        code: TypographyInlineCode,
        ul: TypographyUL,
        ol: TypographyOL,
        table: TypographyTable,
      },
      options: {
        parseFrontmatter: true,
      },
    });

    return { compiledMDX, slug, source: file };
  } catch (err) {
    console.error(`Error loading blog "${slug}":`, err);
    notFound();
  }
};

export const getRelatedBlogs = async (
  currentSlug: string,
  currentTags: string[],
  limit: number = 4,
) => {
  const blogs = await getBlogs();

  const normalizedTags = currentTags.map((t) => t.toLowerCase());

  const related = blogs
    .filter((blog) => blog.slug !== currentSlug)
    .map((blog) => {
      const blogTags = blog.tags?.map((t) => t.toLowerCase()) ?? [];
      const shared = blogTags.filter((tag) =>
        normalizedTags.includes(tag),
      ).length;

      return { ...blog, shared };
    })
    .filter((blog) => blog.shared > 0)
    .sort((a, b) => b.shared - a.shared)
    .slice(0, limit);

  return related;
};
