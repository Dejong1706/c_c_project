import { ImageResponse } from "next/og";

export const alt = "BuildCalc — Free Construction Calculators";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "6px",
            background: "#2d6a4f",
            display: "flex",
          }}
        />
        <div
          style={{
            fontSize: "28px",
            color: "#2d6a4f",
            fontWeight: 700,
            marginBottom: "32px",
            display: "flex",
          }}
        >
          BuildCalc
        </div>
        <div
          style={{
            fontSize: "58px",
            color: "#2d6a4f",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "28px",
            display: "flex",
          }}
        >
          Free Construction Calculators
        </div>
        <div
          style={{
            fontSize: "26px",
            color: "#5c5a54",
            fontWeight: 400,
            display: "flex",
          }}
        >
          Concrete · Tiles · Bricks · Rebar · Paint · More
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            fontSize: "20px",
            color: "#9b9890",
            display: "flex",
          }}
        >
          buildcalczone.com
        </div>
      </div>
    ),
    { ...size }
  );
}
