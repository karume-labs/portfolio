interface BusinessCardOGProps {
  width?: number;
  height?: number;
  imageUrl?: string;
}

const BusinessCardOG: React.FC<BusinessCardOGProps> = ({
  width = 1200,
  height = 630,
  imageUrl = `${process.env.NEXT_PUBLIC_APP_URL}/core/me.png`,
}) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#000000",
        color: "#ffffff",
        fontFamily: "system-ui",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "50%",
          height: "100%",
          padding: "80px",
          borderRight: "1px solid #333333",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid #ffffff",
            backgroundColor: "#222222",
            marginBottom: "32px",
          }}
        >
          {/* biome-ignore lint/performance/noImgElement: Image component cannot be used in OG routes */}
          <img
            src={imageUrl}
            alt="Daniel Karume"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              filter: "grayscale(100%)", // Adds to the B&W aesthetic if supported
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <h1
            style={{
              display: "flex",
              fontSize: "64px",
              fontWeight: 900,
              margin: "0",
              lineHeight: "1",
              letterSpacing: "-0.03em",
            }}
          >
            Daniel Karume
          </h1>
          <p
            style={{
              display: "flex",
              fontSize: "32px",
              color: "#a3a3a3",
              margin: "0",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            Software Developer
          </p>
        </div>

        <div style={{ display: "flex", marginTop: "40px" }}>
          <p
            style={{
              fontSize: "24px",
              color: "#737373",
              lineHeight: "1.5",
              fontStyle: "italic",
              margin: "0",
            }}
          >
            I am a Swiss Army knife in the programming world.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "50%",
          height: "100%",
          padding: "80px",
          gap: "48px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3
            style={{
              display: "flex",
              fontSize: "16px",
              fontWeight: 700,
              margin: "0",
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Services
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "24px",
              color: "#a3a3a3",
            }}
          >
            <div style={{ display: "flex" }}>Frontend Dev • Backend Dev</div>
            <div style={{ display: "flex" }}>Mobile Dev • Blockchain</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h3
            style={{
              display: "flex",
              fontSize: "16px",
              fontWeight: 700,
              margin: "0",
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Contact
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "24px",
            }}
          >
            <div style={{ display: "flex", gap: "24px" }}>
              <span style={{ color: "#737373", width: "80px" }}>Email</span>
              <span style={{ color: "#ffffff" }}>
                danielkarume.work@gmail.com
              </span>
            </div>
            <div style={{ display: "flex", gap: "24px" }}>
              <span style={{ color: "#737373", width: "80px" }}>Tel</span>
              <span style={{ color: "#ffffff" }}>+254 704 150 182</span>
            </div>
            <div style={{ display: "flex", gap: "24px" }}>
              <span style={{ color: "#737373", width: "80px" }}>Web</span>
              <span style={{ color: "#ffffff" }}>karume.vercel.app</span>
            </div>
            <div style={{ display: "flex", gap: "24px" }}>
              <span style={{ color: "#737373", width: "80px" }}>Loc</span>
              <span style={{ color: "#ffffff" }}>Nairobi, Kenya</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardOG;
