import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyP } from "@/components/ui/typography";

const OpenInLargerScreenCard = () => {
  return (
    <div className="lg:hidden flex items-center justify-center min-h-screen p-6 bg-primary text-primary-foreground">
      <Card className="max-w-lg bg-primary text-primary-foreground border-none">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold">
            Viewing on a Larger Screen Recommended
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <TypographyP className="leading-relaxed">
            This portfolio is optimized for desktop and larger displays. Please
            revisit on a bigger screen for the best experience.
          </TypographyP>
          <TypographyP className="text-sm opacity-80">
            Mobile responsiveness is in progress and will be available soon.
            Thank you for your patience.
          </TypographyP>
        </CardContent>
      </Card>
    </div>
  );
};

export default OpenInLargerScreenCard;
