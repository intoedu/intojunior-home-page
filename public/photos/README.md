# 사진 폴더

여기에 사진 파일을 넣고, 아래 표의 "적을 곳"에 경로를 한 줄 적으면 사이트에 반영됩니다.
파일 이름은 아래 권장 이름을 그대로 쓰시면 제일 편합니다.

## 지금 필요한 사진

| 권장 파일명 | 쓰이는 곳 | 권장 크기 | 적을 곳 |
| --- | --- | --- | --- |
| `director.jpg` | 소개 페이지 · 대표 인사말 | 세로형 1000×1250 | `src/views/AboutView.tsx` 의 `PhotoSlot` 에 `src="/photos/director.jpg"` |
| `hero.jpg` | 메인 첫 화면 대표 이미지 | 세로형 1200×1500 | `src/components/sections/HomeHero.tsx` 의 `PhotoSlot` |
| `daejeon-doan.jpg` | 캠퍼스 안내 · 대전 도안점 | 가로형 1600×1000 | `src/config/site.ts` 의 `CAMPUSES` → `photo` |
| `room1.jpg` ~ `room6.jpg` | 메인 갤러리 6칸 | 가로형 1600×1000 | `src/components/sections/Gallery.tsx` 의 `PHOTOS` 배열 |

갤러리 6칸의 순서와 설명은 다음과 같습니다.

1. 강의실
2. 리딩존 · 원서 라이브러리
3. 스피킹 수업
4. 자습 · 클리닉 공간
5. 상담실
6. 스피치 발표회

## 사진 보내는 방법

채팅에 **붙여넣은 이미지는 파일로 저장되지 않습니다.** 아래 중 한 가지로 보내주세요.

1. **ZIP 으로 압축해서 첨부** — 가장 간단합니다
2. **GitHub 에 직접 올리기** — 저장소의 `public/photos/` 폴더에서 `Add file → Upload files`
3. PDF 나 PPT 에 사진을 넣어서 첨부

## 사진이 없을 때

경로를 비워두면 "사진 준비 중" 자리 표시가 자동으로 나옵니다. 지금이 그 상태입니다.
