import SectionHeader from "@/components/cupcake/core/SectionHeader";
import { TypographyP } from "@/components/ui/typography";

const Bio = () => {
  return (
    <section
      className="bg-primary/90 text-primary-foreground px-6 py-12 sm:px-12 md:px-16 lg:px-24 lg:py-24"
      id="bio"
    >
      <SectionHeader title="WHO AM I?" />
      <TypographyP className="text-base sm:text-lg line-through">
        I'm Batman.
      </TypographyP>

      <TypographyP className="leading-relaxed text-sm sm:text-base md:text-lg">
        Hi, I'm <span className="font-semibold">Daniel Karume</span> - a
        passionate full-stack developer and Computer Science student at JKUAT. I
        combine technical expertise with creative problem-solving to build
        impactful digital solutions. Beyond coding, I enjoy mentoring fellow
        developers and experimenting with new technologies that push the
        boundaries of what's possible.
      </TypographyP>
    </section>
  );
};

export default Bio;
