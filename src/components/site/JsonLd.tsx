/** 구조화 데이터를 <script type="application/ld+json"> 으로 넣습니다. */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // 구조화 데이터는 빌드 시점에 만들어진 신뢰된 값입니다.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
