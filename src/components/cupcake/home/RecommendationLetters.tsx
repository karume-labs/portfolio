import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/cupcake/core/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { recommendationLetters } from "@/data/recommendation-letters";

const RecommendationLetters = () => {
  return (
    <section
      id="recommendations"
      className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12"
    >
      <SectionHeader title="WHERE ARE THE RECOMMENDATION LETTERS?" />
      <div className="flex flex-wrap justify-start gap-4 mt-6">
        {recommendationLetters.map((letter) => (
          <div key={letter.id} className="w-full md:w-fit">
            <Link
              href={letter.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Badge
                variant="outline"
                className="w-full py-2 px-4 flex items-center gap-3 hover:bg-accent transition-colors"
              >
                <div className="relative size-6 shrink-0 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={letter.logo}
                    alt={`${letter.company} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-medium">{letter.company}</span>
                <ExternalLink className="size-4 ml-auto" />
              </Badge>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendationLetters;
