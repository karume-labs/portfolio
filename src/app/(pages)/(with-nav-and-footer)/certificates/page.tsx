"use client";

import { useVersion } from "@/components/providers/VersionProvider";
import CertificationsGridCupcake from "@/components/cupcake/home/CertificationsGrid";
import CertificationsGridDonut from "@/components/donut/home/CertificationsGrid";

const CertificatesPage = () => {
  const { version } = useVersion();

  return (
    <div className="my-24">
      {version === "cupcake" ? <CertificationsGridCupcake /> : <CertificationsGridDonut />}
    </div>
  );
};

export default CertificatesPage;
