/* ==========================================================================
 * 인투주니어학원 대전도안점 — 사이트 기본 정보
 * --------------------------------------------------------------------------
 * ⚙️  이 파일 하나만 고치면 사이트 전체(헤더·푸터·오시는 길·문의)에 반영됩니다.
 *     TODO 표시가 있는 항목은 원장님 확인 후 값을 채워주세요.
 * ========================================================================== */

export const SITE = {
  /** 배포 도메인 (도메인 연결 후 실제 주소로 변경) */
  url: "https://www.intojunior.com",

  brand: {
    ko: "인투주니어학원",
    en: "INTO JUNIOR",
    branchKo: "대전도안점",
    branchEn: "Daejeon Doan",
    fullKo: "인투주니어학원 대전도안점",
    fullEn: "INTO JUNIOR English Academy · Daejeon Doan",
  },

  /** 대표자 */
  ceo: "박정경",

  /** 연락처 */
  phone: {
    /** 학원 대표번호 */
    main: "042-822-0509",
    /** 원장님 휴대전화 */
    mobile: "010-3454-9482",
  },

  email: "angelpark3401@gmail.com",

  address: {
    ko: "대전광역시 유성구 동서대로 691 (원신흥동) 흥도빌딩 3층 302호",
    koShort: "대전 유성구 동서대로 691, 3층 302호",
    en: "3F #302, Heungdo Bldg, 691 Dongseo-daero, Yuseong-gu, Daejeon, Korea",
    /** 지도 검색용 키워드 */
    query: "대전광역시 유성구 동서대로 691",
    postalCode: "34155", // TODO: 우편번호 확인
  },

  /**
   * 운영시간 — day: 0(일) ~ 6(토)
   * closed: true 이면 정기휴무
   */
  hours: [
    { day: 1, ko: "월요일", en: "Monday", open: "13:00", close: "20:30", closed: false },
    { day: 2, ko: "화요일", en: "Tuesday", open: "13:00", close: "20:30", closed: false },
    { day: 3, ko: "수요일", en: "Wednesday", open: "", close: "", closed: true },
    { day: 4, ko: "목요일", en: "Thursday", open: "13:00", close: "20:30", closed: false },
    { day: 5, ko: "금요일", en: "Friday", open: "13:00", close: "20:30", closed: false },
    { day: 6, ko: "토요일", en: "Saturday", open: "14:00", close: "16:00", closed: false },
    { day: 0, ko: "일요일", en: "Sunday", open: "", close: "", closed: true },
  ] as const,

  /**
   * SNS / 외부 채널 — 주소를 넣으면 헤더·푸터에 자동으로 아이콘이 나타납니다.
   * 빈 문자열("")이면 화면에 표시되지 않습니다.
   */
  social: {
    instagram: "", // TODO: 인스타그램 계정 주소
    youtube: "", // TODO: 유튜브 채널 주소
    blog: "", // TODO: 네이버 블로그 주소
    kakao: "", // TODO: 카카오톡 채널 주소 (예: http://pf.kakao.com/_xxxxx)
    naverPlace: "", // TODO: 네이버 플레이스(지도) 주소
  },

  /**
   * 대표 소개 영상 (유튜브)
   * 유튜브 주소가 https://youtu.be/AbCdEfG 라면 videoId 는 "AbCdEfG" 입니다.
   * 비워두면 "영상 준비 중" 카드가 표시됩니다.
   */
  video: {
    id: "", // TODO: 유튜브 영상 ID
  },

  /**
   * 문의/신청 폼 전송 방식
   * - endpoint 를 비워두면 → 방문자의 메일 앱이 열리며 내용이 자동으로 채워집니다(설정 0단계).
   * - Formspree / Web3Forms 등에서 발급받은 주소를 넣으면 → 이메일로 자동 접수됩니다.
   *   (.env.local 의 NEXT_PUBLIC_FORM_ENDPOINT 값이 있으면 그 값이 우선합니다.)
   */
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",

  /** 사업자 정보 (푸터 표기) */
  business: {
    name: "인투주니어학원 대전도안점",
    registrationNo: "", // TODO: 사업자등록번호
    academyNo: "", // TODO: 학원설립·운영등록번호 (학원법상 표기 권장)
  },
} as const;

/** 전화 걸기용 tel: 링크 */
export const telHref = (num: string) => `tel:${num.replace(/[^0-9+]/g, "")}`;

/** 지도 바로가기 링크 */
export const MAP_LINKS = {
  naver: `https://map.naver.com/p/search/${encodeURIComponent(
    SITE.address.query,
  )}`,
  kakao: `https://map.kakao.com/?q=${encodeURIComponent(SITE.address.query)}`,
  google: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    SITE.address.query,
  )}`,
  /** API 키 없이 동작하는 임베드용 주소 */
  embed: (lang: "ko" | "en") =>
    `https://www.google.com/maps?q=${encodeURIComponent(
      SITE.address.query,
    )}&hl=${lang}&z=17&output=embed`,
};
