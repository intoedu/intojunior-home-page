/**
 * public/photos/ 안에 실제로 들어 있는 사진 파일 목록을 읽어
 * src/config/photos.generated.ts 로 저장합니다.
 *
 * 빌드할 때 자동으로 실행되므로(package.json 의 prebuild),
 * 사진 파일만 올려두면 코드를 고치지 않아도 사이트에 반영됩니다.
 */
import { readdirSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const DIR = "public/photos";
const IMAGE = /\.(jpe?g|png|webp|avif)$/i;
const OUT = "src/config/photos.generated.ts";

const files = existsSync(DIR)
  ? readdirSync(DIR)
      .filter((f) => IMAGE.test(f))
      .sort()
  : [];

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(
  OUT,
  `/* 자동 생성 파일 — 직접 고치지 마세요.
 * scripts/scan-photos.mjs 가 public/photos/ 를 훑어 만듭니다.
 */
export const PHOTO_FILES: readonly string[] = ${JSON.stringify(files, null, 2)};
`,
  "utf8",
);

console.log(`[photos] public/photos/ 에서 사진 ${files.length}개를 찾았습니다.`);
