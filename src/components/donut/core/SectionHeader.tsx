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
    <div className={`mb-8 ${className}`}>
      <TypographyH2
        ref={ref}
        className="font-display font-bold text-lg sm:text-xl tracking-widest uppercase"
      >
        {displayText}
      </TypographyH2>
      <div className="h-[2px] w-12 bg-brand mt-2 rounded-full" />
    </div>
  );
};

export default SectionHeader;
