# 가이드(콘텐츠) 페이지 추가 가이드

`/guides/<slug>` 형태의 글(How-to, 레퍼런스) 추가 시 따라야 하는 패턴. 기존 가이드 15개 중 13개가 이미 이 구조를 쓰고 있음 (`how-to-mix-concrete-by-hand.tsx`, `brick-mortar-mix-ratio.tsx` 등 참고).

## 1. 파일 위치

```
app/guides/content/<slug>.tsx
```

파일 하나 = 가이드 하나. 컴포넌트만 export하고, 라우팅 연결은 별도 파일들에서 한다 (3번 참고).

## 2. 콘텐츠 파일 구조

```tsx
import Link from "next/link";
import {
  Breadcrumb,
  GuideTable,
  NoteBox,
  IntroText,
  formula,
  listItem,
  paragraph,
  sectionHeading,
  link,
  td,
  th,
} from "./shared"; // 필요한 것만 import

const faqs = [{ question: "...", answer: "..." }, /* 4~5개 */];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "...",
  description: "...",
  url: "https://buildcalczone.com/guides/<slug>",
};

export default function XxxGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article style={{ maxWidth: "680px" }}>
        <Breadcrumb current="..." /> {/* ⚠️ 빠뜨리기 쉬움 — 거의 모든 가이드 첫 줄에 있음 */}
        <header style={{ marginBottom: "24px" }}>
          <span style={{ /* 카테고리 뱃지 — 인라인 그대로 둬도 됨 */ }}>Concrete</span>
          <h1 style={{ /* ... */ }}>제목</h1>
          <p style={{ /* ... */ }}>한 문단 소개</p>
        </header>

        <h2 style={sectionHeading}>섹션 제목</h2>
        <p style={paragraph}>본문...</p>

        {/* 공식/숫자 강조 */}
        <div style={formula}>Posts = ⌈Length ÷ Spacing⌉ + 1</div>

        {/* 표 */}
        <GuideTable>
          <thead><tr><th style={th}>...</th></tr></thead>
          <tbody><tr><td style={td}>...</td></tr></tbody>
        </GuideTable>

        {/* 보조 설명/주의사항 */}
        <NoteBox>참고: ...</NoteBox>

        {/* CTA — 관련 계산기로 링크 */}
        <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "10px", padding: "16px 20px", margin: "24px 0" }}>
          <Link href="/xxx-calculator" style={{ /* 버튼 스타일 */ }}>Use the Xxx Calculator →</Link>
        </div>

        <h2 style={sectionHeading}>FAQ</h2>
        {faqs.map((f) => (
          <div key={f.question} style={{ marginBottom: "16px" }}>
            <p style={{ fontSize: "15px", fontWeight: 600 }}>{f.question}</p>
            <p style={{ fontSize: "14px", color: "var(--text-2)" }}>{f.answer}</p>
          </div>
        ))}
      </article>
    </>
  );
}
```

### 지켜야 할 것

- **`<Breadcrumb current="제목" />`을 `<article>` 바로 안, 맨 위에 넣을 것.** 빠뜨리면 다른 가이드와 비주얼이 달라짐.
- **표/노트 박스는 직접 `<table>`, `<div>`로 짜지 말고 `./shared`의 `GuideTable`/`NoteBox`를 쓸 것.** `sectionHeading`, `paragraph`, `formula`, `listItem`, `td`, `th`도 마찬가지로 매번 새로 선언하지 말고 `shared.tsx`에서 import. (직접 베껴서 새로 선언한 가이드가 과거에 두세 개 있었는데, 전부 나중에 `shared.tsx` 쓰는 걸로 통일함.)
- **TOC(우측 "On this page")는 `<h2>` 태그를 자동으로 긁어서 만든다** (`app/guides/[slug]/TableOfContents.tsx`). `<h2 style={sectionHeading}>`로 섹션을 나누면 자동으로 목차에 들어간다 — 별도 설정 불필요.
- JSX 텍스트에 `'`, `"`를 직접 쓰면 `react/no-unescaped-entities` ESLint 에러가 난다. `&apos;` / `&quot;`로 쓸 것 (예: `don&apos;t`, `1/8&quot;`).
- 표에 인치(`"`)·mm 등 단위를 같이 적을 때는 변환값이 실제로 맞는지 검산할 것 (예: `3/16" = 4.76mm`, `1/4" = 6.35mm` — 괄호 안 mm 값과 안 맞으면 그대로 들어가는 경우가 있었음).

## 3. 연결해야 할 3곳

| 파일 | 무엇을 추가 |
|---|---|
| `app/guides/[slug]/page.tsx` | ① 콘텐츠 컴포넌트 import, ② `contentMap`에 `"<slug>": Component` 추가, ③ `metaMap`에 `title`/`description`/`keywords` 추가 |
| `app/guides/page.tsx` | `guides` 배열에 `{ title, href, desc, category }` 추가 (해당 카테고리 주석 블록 아래에) |
| `app/sitemap.ts` | `routes` 배열에 `/guides/<slug>` 추가 |

### `category` 주의사항

`category`는 `app/guides/GuidesClient.tsx`의 `CATEGORY_ORDER` 배열에 있는 값과 **정확히 일치**해야 필터 탭에 노출된다. 새 카테고리를 쓰려면:

```ts
// app/guides/GuidesClient.tsx
const CATEGORY_ORDER = ["All", "Concrete", "Structural", "Masonry", "Tile", "Paint", "Conversion", "Fencing", /* 새 카테고리 추가 */];
```

**기존 카테고리를 절대 빼지 말 것.** 새 카테고리를 추가하면서 기존 항목을 같이 지우면, 그 카테고리를 쓰는 다른 가이드의 필터 탭이 통째로 사라진다 (실제로 `"Fencing"` 추가하면서 `"Structural"`이 삭제돼서 rebar 가이드 탭이 없어진 적 있음 — `existingCategories`는 `CATEGORY_ORDER`를 기준으로 필터링하기 때문).

## 4. 마지막 체크리스트

- [ ] `npx tsc --noEmit -p .` 통과
- [ ] `npx eslint app/guides/content/<slug>.tsx` 통과 (unescaped entities, 미사용 변수 확인)
- [ ] `Breadcrumb` 넣었는지, `shared.tsx` 스타일 썼는지 확인
- [ ] `[slug]/page.tsx`, `guides/page.tsx`, `sitemap.ts` 세 곳 모두 추가
- [ ] `CATEGORY_ORDER`에 기존 카테고리를 안 지웠는지 확인
- [ ] `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/guides/<slug>` → 200 확인
