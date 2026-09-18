"use client";

import { SiMarkdown } from "@icons-pack/react-simple-icons";
import { ChevronDown, Copy, HelpCircle } from "lucide-react";
import type React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TypographyP } from "@/components/ui/typography";

interface ExplainDropdownProps {
  title: string;
  source: string;
}

export const ExplainDropdown: React.FC<ExplainDropdownProps> = ({
  title,
  source,
}) => {
  const prompt = `Could you help me understand this article called "${title}"? 

Please give me a friendly summary that's easy to follow. I'd especially appreciate it if you could:
1. Explain the main idea in just a few sentences.
2. Break down the key takeaways into simple bullet points.
3. Define any technical or complex terms in plain English.

Here is the full text:
${source}`;

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(source);
    toast.success("Blog content copied as Markdown");
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    toast.success("Prompt copied to clipboard");
  };

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2 cursor-none">
            CONTENT <ChevronDown className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-72">
          <DropdownMenuLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Content Actions
          </DropdownMenuLabel>
          <DropdownMenuItem
            onClick={handleCopyMarkdown}
            className="flex flex-col items-start gap-0.5 py-2 px-3 cursor-none"
          >
            <div className="flex items-center gap-2 font-medium">
              <SiMarkdown className="size-4" />
              <span>Copy Markdown</span>
            </div>
            <span className="text-xs text-muted-foreground">
              Copy the raw blog content to your clipboard
            </span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={handleCopyPrompt}
            className="flex flex-col items-start gap-0.5 py-2 px-3 cursor-none"
          >
            <div className="flex items-center gap-2 font-medium">
              <Copy className="size-4" />
              <span>Copy with Prompt</span>
            </div>
            <span className="text-xs text-muted-foreground">
              Copy a pre-made prompt for AI explanation
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 rounded-full cursor-none"
          >
            <HelpCircle className="size-4 text-muted-foreground" />
            <span className="sr-only">Content actions purpose</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Content Actions</h4>
            <TypographyP className="text-sm text-muted-foreground">
              Quickly interact with this blog post by copying the raw Markdown
              content or a pre-formatted prompt that you can use with your
              favorite AI tools to get summaries or insights.
            </TypographyP>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
