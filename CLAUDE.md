@AGENTS.md

# 인투주니어학원 대전도안점 홈페이지

정적 사이트(Next.js `output: "export"`)로 만든 학원 홈페이지입니다. 한국어(`/`)와 영어(`/en/`) 2개 언어를 지원합니다.

## 구조

- `src/config/site.ts` — 주소·전화·운영시간·SNS·유튜브 등 학원 정보 **단일 출처**
- `src/content/ko.ts` — 한국어 문구 전체. `export type Dict = typeof ko` 로 타입이 파생됩니다
- `src/content/en.ts` — 영어 문구. `Dict` 타입을 만족해야 하므로 ko 와 항상 같은 모양을 유지합니다
- `src/app/(ko)/*`, `src/app/(en)/en/*` — 언어별 루트 레이아웃 2개(각각 `<html lang>` 을 가짐)
- `src/views/*` — 페이지 본문. 라우트 파일은 `<XxxView lang="ko" />` 만 렌더링합니다
- `src/components/{ui,site,sections}` — 재사용 컴포넌트
- `src/app/globals.css` — Tailwind v4 `@theme` 디자인 토큰과 커스텀 유틸리티

## 작업 시 주의

- **문구를 고칠 땐 `ko.ts` 와 `en.ts` 를 함께** 고칩니다. 한쪽만 바꾸면 타입 오류가 납니다.
- 학원 정보(전화·주소·시간)는 화면에 직접 쓰지 말고 `SITE` 에서 가져옵니다.
- `TODO` 주석은 원장님 확인이 필요한 항목입니다. 임의로 사실을 지어내지 마세요.
- 사진은 `PhotoSlot` 의 `src` 로 넣습니다. 비워두면 "사진 준비 중" 자리 표시가 나옵니다.
- 정적 내보내기이므로 서버 기능(Route Handler, 서버 액션, ISR)은 사용할 수 없습니다.
  `sitemap.ts` / `robots.ts` 에는 `export const dynamic = "force-static"` 이 필요합니다.

## 확인

```bash
npm run lint && npx tsc --noEmit && npm run build
```
