import type { NextConfig } from "next";

/**
 * 하위 경로에 배포할 때만 값이 들어옵니다. (예: GitHub Pages 의 "/저장소이름")
 * 자체 도메인을 쓰면 빈 값이 되어 아무 영향이 없습니다.
 */
const raw = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath = raw === "/" ? "" : raw.replace(/\/+$/, "");

const nextConfig: NextConfig = {
  // 정적 사이트로 내보내기 — 서버가 필요 없습니다.
  // `npm run build` 하면 out/ 폴더에 완성된 HTML·CSS·JS 가 생깁니다.
  // 이 폴더를 웹서버에 그대로 올리면 어디서나 동작합니다.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
