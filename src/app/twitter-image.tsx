import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import BusinessCardOG from "@/components/cupcake/core/BusinessCardOG";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const twitterImage = async (): Promise<ImageResponse> => {
  const imagePath = join(process.cwd(), "public/core/me.png");
  const imageBuffer = readFileSync(imagePath);
  const imageData = `data:image/png;base64,${imageBuffer.toString("base64")}`;

  return new ImageResponse(
    <BusinessCardOG width={1200} height={630} imageUrl={imageData} />,
    {
      ...size,
    },
  );
};

export default twitterImage;
