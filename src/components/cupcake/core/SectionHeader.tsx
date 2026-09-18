"use client";

import { TypographyH2 } from "@/components/ui/typography";
import { useScrambleText } from "@/hooks/scramble-text";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, className }) => {
  const { ref, displayText } = useScrambleText<HTMLHeadingElement>(title);

  return (
    <TypographyH2
      ref={ref}
      className={`font-bold text-xs tracking-widest my-4 ${className}`}
    >
      {displayText}
    </TypographyH2>
  );
};

export default SectionHeader;
