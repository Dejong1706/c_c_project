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
        {/* 상단 초록 바 */}
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

        {/* 로고 + BuildCalc */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "36px",
          }}
        >
          {/* 초록 박스 로고 */}
          <div
            style={{
              width: "72px",
              height: "72px",
              background: "#2d6a4f",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
              <path d="m14.5 12.5 2-2" />
              <path d="m11.5 9.5 2-2" />
              <path d="m8.5 6.5 2-2" />
              <path d="m17.5 15.5 2-2" />
            </svg>
          </div>

          {/* BuildCalc 텍스트 */}
          <span
            style={{
              fontSize: "48px",
              color: "#2d6a4f",
              fontWeight: 700,
              display: "flex",
            }}
          >
            BuildCalc
          </span>
        </div>

        {/* 메인 제목 */}
        <div
          style={{
            fontSize: "58px",
            color: "#1a1917",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "28px",
            display: "flex",
          }}
        >
          Free Construction Calculators
        </div>

        {/* 서브타이틀 */}
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

        {/* URL */}
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
