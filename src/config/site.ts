/* ==========================================================================
 * 인투주니어학원 — 사이트 기본 정보 (본사 / 브랜드 홈페이지)
 * --------------------------------------------------------------------------
 * ⚙️  이 파일 하나만 고치면 사이트 전체(헤더·푸터·캠퍼스 안내·문의)에 반영됩니다.
 *     TODO 표시가 있는 항목은 확인 후 값을 채워주세요.
 * ========================================================================== */

/**
 * 하위 경로 배포용 (예: GitHub Pages 의 /저장소이름).
 * 자체 도메인을 쓰면 빈 값이 되며, 배포 스크립트가 알아서 채워줍니다.
 */
import { PHOTO_FILES } from "./photos.generated";

const RAW_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const BASE_PATH =
  RAW_BASE_PATH === "/" ? "" : RAW_BASE_PATH.replace(/\/+$/, "");

/** public 폴더의 파일을 가리킬 때 사용합니다. 예) asset("/photos/hero.jpg") */
export const asset = (path: string) =>
  `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;

/**
 * public/photos/ 에 실제로 있는 사진만 경로를 돌려줍니다.
 * 확장자는 신경 쓰지 않아도 됩니다. photo("director") → "/photos/director.jpg"
 * 파일이 없으면 빈 문자열이라, 화면에는 "사진 준비 중" 자리 표시가 나옵니다.
 */
export const photo = (base: string): string => {
  const hit = PHOTO_FILES.find((f) => f.replace(/\.[^.]+$/, "") === base);
  return hit ? `/photos/${hit}` : "";
};

/** 미리보기 주소에서는 검색엔진이 수집하지 않도록 합니다. */
export const NOINDEX = process.env.NEXT_PUBLIC_NOINDEX === "1";

/**
 * 표준 운영시간 — day: 0(일) ~ 6(토)
 * closed: true 이면 정기휴무
 */
const HOURS = [
  { day: 1, ko: "월요일", en: "Monday", open: "14:00", close: "20:30", closed: false },
  { day: 2, ko: "화요일", en: "Tuesday", open: "14:00", close: "20:30", closed: false },
  { day: 3, ko: "수요일", en: "Wednesday", open: "", close: "", closed: true },
  { day: 4, ko: "목요일", en: "Thursday", open: "14:00", close: "20:30", closed: false },
  { day: 5, ko: "금요일", en: "Friday", open: "14:00", close: "20:30", closed: false },
  { day: 6, ko: "토요일", en: "Saturday", open: "14:00", close: "16:00", closed: false },
  { day: 0, ko: "일요일", en: "Sunday", open: "", close: "", closed: true },
] as const;

export type Campus = {
  /** 주소창·앵커에 쓰이는 영문 식별자 */
  id: string;
  nameKo: string;
  nameEn: string;
  /** 지역 표기 (목록 카드 상단) */
  regionKo: string;
  regionEn: string;
  addressKo: string;
  addressEn: string;
  /** 지도 검색어 */
  query: string;
  phone: string;
  mobile: string;
  /** 이 캠퍼스가 본사인지 */
  isHq: boolean;
  /** 캠퍼스 사진 (public/photos/… 경로). 비우면 자리 표시가 나옵니다 */
  photo: string;
  hours: typeof HOURS;
  /** 준비 중인 캠퍼스면 true — "오픈 예정" 배지가 붙습니다 */
  comingSoon: boolean;
};

/* ==========================================================================
 * 캠퍼스 목록
 * --------------------------------------------------------------------------
 * 캠퍼스를 추가하려면 아래 배열에 같은 모양으로 하나 더 넣으면 됩니다.
 * 홈·캠퍼스 안내·푸터에 자동으로 반영됩니다.
 * ========================================================================== */
export const CAMPUSES: Campus[] = [
  {
    id: "daejeon-doan",
    nameKo: "대전 도안점",
    nameEn: "Daejeon Doan",
    regionKo: "대전 유성구",
    regionEn: "Yuseong-gu, Daejeon",
    addressKo: "대전광역시 유성구 동서대로 691 (원신흥동) 흥도빌딩 3층 302호",
    addressEn:
      "3F #302, Heungdo Bldg, 691 Dongseo-daero, Yuseong-gu, Daejeon, Korea",
    query: "대전광역시 유성구 동서대로 691",
    phone: "042-822-0509",
    mobile: "010-3454-9482",
    isHq: true,
    photo: photo("daejeon-doan"),
    hours: HOURS,
    comingSoon: false,
  },
  // 캠퍼스가 늘어나면 위와 같은 모양으로 하나 더 추가하면 됩니다.
  // 홈·캠퍼스 안내·검색엔진 정보에 자동으로 반영됩니다.
];

/** 본사로 표시할 캠퍼스 (없으면 첫 번째) */
export const HQ_CAMPUS = CAMPUSES.find((c) => c.isHq) ?? CAMPUSES[0];

export const SITE = {
  /**
   * 배포 주소. 도메인을 연결하면 이 값을 실제 주소로 바꿔주세요.
   * (배포 스크립트가 NEXT_PUBLIC_SITE_URL 로 덮어쓰기도 합니다)
   */
  url: (
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.intojunior.com"
  ).replace(/\/+$/, ""),

  brand: {
    ko: "인투주니어학원",
    en: "INTO JUNIOR",
    /** 로고 아래 작은 글씨 */
    taglineKo: "영어유창성 + 학습코칭",
    taglineEn: "Fluency + Learning Coaching",
    fullKo: "인투주니어학원",
    fullEn: "INTO JUNIOR English Academy",
  },

  /** 대표자 */
  ceo: "박정경",

  /**
   * 본사 대표 연락처
   * TODO: 본사 번호가 대전도안점과 다르면 이 값을 바꿔주세요.
   */
  phone: {
    main: HQ_CAMPUS.phone,
    mobile: HQ_CAMPUS.mobile,
  },

  email: "angelpark3401@gmail.com",

  /**
   * 네이버 예약 주소.
   * 값을 넣으면 "무료 레벨테스트 예약" 버튼이 네이버 예약으로 바로 연결됩니다.
   * 비워두면 전화 걸기로 동작합니다.
   * TODO: 네이버 예약 주소를 알려주시면 넣겠습니다.
   *       (예: https://booking.naver.com/booking/13/bizes/0000000)
   */
  booking: "",

  /**
   * 본사 주소
   * TODO: 본사 주소가 대전도안점과 다르면 이 값을 바꿔주세요.
   */
  address: {
    ko: HQ_CAMPUS.addressKo,
    koShort: "대전 유성구 동서대로 691, 3층 302호",
    en: HQ_CAMPUS.addressEn,
    query: HQ_CAMPUS.query,
    postalCode: "34155", // TODO: 우편번호 확인
  },

  hours: HOURS,

  /**
   * SNS / 외부 채널 — 주소를 넣으면 헤더·푸터에 자동으로 아이콘이 나타납니다.
   * 빈 문자열("")이면 화면에 표시되지 않습니다.
   */
  social: {
    instagram: "", // TODO: 인스타그램 계정 주소
    youtube: "https://www.youtube.com/channel/UCMTGCTMw9lDYBOBWSVjKW9g",
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
    /** 메인 대표 소개 영상 */
    id: "RFCYrbMAeVA",
  },

  /**
   * 사진 경로 — public/photos/ 에 파일을 넣고 경로만 적으면 됩니다.
   * 비워두면 "사진 준비 중" 자리 표시가 나옵니다.
   */
  photos: {
    director: photo("director"),
    hero: photo("hero"),
  },

  /** 사업자 정보 (푸터 표기) */
  business: {
    name: "인투주니어학원",
    registrationNo: "", // TODO: 사업자등록번호
    academyNo: "", // TODO: 학원설립·운영등록번호 (학원법상 표기 권장)
  },
} as const;

/**
 * 핵심 프로그램 소개 영상 (유튜브 ID)
 * 순서는 content 의 home.core.items 와 같습니다.
 * 주소가 https://youtu.be/AbCdEfG 라면 ID 는 "AbCdEfG" 입니다.
 */
export const CORE_PROGRAM_VIDEOS: string[][] = [
  ["8fpsAFFaenQ"], // 패스트포워드
  ["yqdTsKZzJjA", "iVy6jGNfwFo"], // 클리어 플루언시
];

/** 전화 걸기용 tel: 링크 */
export const telHref = (num: string) => `tel:${num.replace(/[^0-9+]/g, "")}`;

const mapLinksFor = (query: string) => ({
  naver: `https://map.naver.com/p/search/${encodeURIComponent(query)}`,
  kakao: `https://map.kakao.com/?q=${encodeURIComponent(query)}`,
  google: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query,
  )}`,
  /** API 키 없이 동작하는 임베드용 주소 */
  embed: (lang: "ko" | "en") =>
    `https://www.google.com/maps?q=${encodeURIComponent(
      query,
    )}&hl=${lang}&z=17&output=embed`,
});

/** 캠퍼스별 지도 링크 */
export const campusMapLinks = (campus: Campus) => mapLinksFor(campus.query);

/** 본사 기준 지도 링크 */
export const MAP_LINKS = mapLinksFor(SITE.address.query);
