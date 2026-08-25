@AGENTS.md

# 인투주니어학원 홈페이지 (본사 / 브랜드)

정적 사이트(Next.js `output: "export"`)로 만든 **본사 홈페이지**입니다.
특정 지점이 아니라 브랜드 전체를 소개하고, 캠퍼스(지점)는 목록으로 안내합니다.
한국어(`/`)와 영어(`/en/`) 2개 언어를 지원합니다.

## 구조

- `src/config/site.ts` — 브랜드·본사 연락처·운영시간·SNS·유튜브 **단일 출처**
  - `CAMPUSES` 배열이 캠퍼스(지점) 목록입니다. 항목을 추가하면 홈·캠퍼스 안내에 자동 반영됩니다
  - `isHq: true` 인 캠퍼스가 본사 주소·대표번호로 쓰입니다
- `src/content/ko.ts` — 한국어 문구 전체. `export type Dict = typeof ko` 로 타입이 파생됩니다
- `src/content/en.ts` — 영어 문구. `Dict` 타입을 만족해야 하므로 ko 와 항상 같은 모양을 유지합니다
- `src/app/(ko)/*`, `src/app/(en)/en/*` — 언어별 루트 레이아웃 2개(각각 `<html lang>` 을 가짐)
- `src/views/*` — 페이지 본문. 라우트 파일은 `<XxxView lang="ko" />` 만 렌더링합니다
- `src/components/{ui,site,sections}` — 재사용 컴포넌트
- `src/app/globals.css` — Tailwind v4 `@theme` 디자인 토큰과 커스텀 유틸리티

## 작업 시 주의

- **문구를 고칠 땐 `ko.ts` 와 `en.ts` 를 함께** 고칩니다. 한쪽만 바꾸면 타입 오류가 납니다.
- 학원 정보(전화·주소·시간)는 화면에 직접 쓰지 말고 `SITE` / `CAMPUSES` 에서 가져옵니다.
- **특정 지점(대전도안점 등) 이름을 브랜드 문구에 넣지 마세요.** 지점 정보는 `CAMPUSES` 에만 둡니다.
- `TODO` 주석은 원장님 확인이 필요한 항목입니다. 임의로 사실을 지어내지 마세요.
- 사진은 `PhotoSlot` 의 `src` 로 넣습니다. 비워두면 "사진 준비 중" 자리 표시가 나옵니다.
- 정적 내보내기이므로 서버 기능(Route Handler, 서버 액션, ISR)은 사용할 수 없습니다.
  `sitemap.ts` / `robots.ts` 에는 `export const dynamic = "force-static"` 이 필요합니다.
- **입력 양식(폼)·데이터베이스·외부 유료 서비스는 쓰지 않습니다.** 문의는 전화·이메일·지도 링크로만
  연결합니다. 폼을 다시 넣자는 제안은 하지 마세요.
- 외부 접속은 지도(구글 지도 임베드)와 유튜브(재생 시)뿐입니다. 서체는 `pretendard` 패키지를
  `globals.css` 에서 불러와 사이트 안에 함께 배포합니다.
- 배포는 GitHub Pages(`.github/workflows/deploy.yml`). 하위 경로 대응은 `NEXT_PUBLIC_BASE_PATH`,
  `public/` 파일을 가리킬 땐 `asset()` 을 씁니다.

## 확인

```bash
npm run lint && npx tsc --noEmit && npm run build
```
