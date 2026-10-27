import { alt, size } from "./opengraph-image";

// 페이지의 openGraph는 layout의 openGraph를 통째로 덮어쓴다(얕은 병합).
// 루트 opengraph-image.tsx도 하위 페이지에는 이 병합을 따라가므로,
// 모든 페이지 openGraph에 펼쳐 넣어 og:site_name·og:image를 유지할 것.
export const siteOpenGraph = {
  siteName: "BuildCalc",
  images: [{ url: "/opengraph-image", ...size, alt }],
};
