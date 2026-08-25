# 사진 폴더

여기에 학원 사진을 넣어주세요. 파일 이름은 영문 소문자와 하이픈만 사용합니다.

| 권장 파일명 | 쓰이는 곳 | 권장 크기 |
| --- | --- | --- |
| `hero.jpg` | 메인 상단 대표 이미지 | 1200 × 1500 (세로형) |
| `director.jpg` | 소개 페이지 원장님 사진 | 1000 × 1250 (세로형) |
| `room1.jpg` ~ `room6.jpg` | 갤러리 6칸 | 1600 × 1000 (가로형) |

넣은 뒤에는 아래 위치에서 경로만 적어주면 반영됩니다.

- 메인 대표 이미지 → `src/components/sections/HomeHero.tsx` 의 `PhotoSlot` 에 `src="/photos/hero.jpg"` 추가
- 원장님 사진 → `src/views/AboutView.tsx` 의 `PhotoSlot` 에 `src="/photos/director.jpg"` 추가
- 갤러리 → `src/components/sections/Gallery.tsx` 의 `PHOTOS` 배열에 경로 입력

사진을 넣기 전에는 자동으로 "사진 준비 중" 안내가 보입니다.
