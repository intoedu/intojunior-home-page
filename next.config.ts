import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 사이트로 내보내기 — 서버가 필요 없습니다.
  // `npm run build` 하면 out/ 폴더에 완성된 HTML·CSS·JS 가 생깁니다.
  // 이 폴더를 웹서버에 그대로 올리면 어디서나 동작합니다.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
