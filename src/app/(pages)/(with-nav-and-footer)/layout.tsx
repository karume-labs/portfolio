import { BlogsProvider } from "@/components";
import OpenInLargeScreenPopover from "@/components/cupcake/core/OpenInLargeScreenPopover";
import { getBlogs } from "@/lib/blogs";
import { VersionedLayoutUI } from "@/components/providers/VersionedLayoutUI";

interface PagesLayoutProps {
  children: React.ReactNode;
}

export default async function PagesLayout({ children }: PagesLayoutProps) {
  const blogs = await getBlogs();

  return (
    <BlogsProvider blogs={blogs}>
      <OpenInLargeScreenPopover />
      <VersionedLayoutUI>{children}</VersionedLayoutUI>
    </BlogsProvider>
  );
}
