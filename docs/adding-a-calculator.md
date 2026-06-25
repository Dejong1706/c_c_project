# 계산기 페이지 추가 가이드

새 계산기를 추가할 때 따라야 하는 패턴. 기존 계산기들(`mortar-calculator`, `excavation-calculator`, `brick-calculator` 등)이 전부 이 구조를 따르고 있으니, 헷갈리면 그 파일들을 참고할 것.

## 1. 파일 구조

```
app/<slug>-calculator/
  page.tsx       # 메타데이터, FAQ, CalcSchema, <XxxCalc /> 렌더만
  XxxCalc.tsx    # "use client" 컴포넌트 — 실제 입력/계산 로직
```

## 2. `XxxCalc.tsx` — 계산 컴포넌트

```tsx
"use client";
import { useState, useMemo } from "react";
import CalcShell from "../components/CalcShell";
import Field from "../components/Field";
import WasteSlider from "../components/WasteSlider"; // waste %가 있는 계산기만

type UnitLen = "ft" | "m"; // 또는 "m" | "ft" — 단위 변환용
const toFt: Record<UnitLen, number> = { ft: 1, m: 3.28084 };
```

- 여러 종류(타입)가 있는 계산기는 `Record<Key, {...}>` + `ORDER` 배열 + `.map()`으로 라벨 추출하는 패턴을 쓴다 (`mortar-calculator`의 `MORTAR_TYPES`/`TYPES_ORDER` 참고).
- `useState`로 입력값은 전부 **문자열**로 관리 (`useState("")`), 숫자는 `useMemo` 안에서 `parseFloat(value) || 0`으로 변환.

### `results` — 가장 흔한 실수

```tsx
const results = useMemo(() => {
  const L = (parseFloat(length) || 0) * toFt[lengthUnit];
  const valid = L > 0; // 또는 필요한 조건 전부

  return [
    {
      label: "...",
      value: valid ? someValue : "—",   // ⚠️ 절대 빈 배열을 return하지 말 것
      unit: "...",
      tier: 1 as const, // 1=메인 강조, 2=중간 2열, 3=작은 박스
    },
    // ...
  ];
}, [length, lengthUnit /* 사용한 모든 state */]);
```

**`if (조건) return [];` 패턴은 금지.** `CalcShell`은 `results.find(r => r.tier === 1) ?? results[0]`로 1순위 결과를 꺼내는데, `results`가 빈 배열이면 `undefined.label`을 읽다가 런타임 500 에러가 난다. 입력이 비어 있거나 잘못됐을 때는 각 행의 `value`를 `"—"`로 채워서 **항상 길이가 있는 배열**을 반환해야 한다. (`fence-calculator`, `flooring-calculator`에서 실제로 이 버그가 나서 수정한 적 있음.)

- `tier: 3`을 나중에 `rows.push(...)`로 조건부 추가하는 경우, 처음 배열 리터럴에 `tier`가 `1 | 2`만 있으면 TS가 그 타입으로 추론해버려서 `tier: 3` push 시 컴파일 에러가 난다. 이럴 땐 `rows`에 명시적으로 타입을 적어줄 것:
  ```tsx
  const rows: { label: string; value: string | number; unit: string; tier: 1 | 2 | 3 }[] = [...]
  ```

### `inputs` / `CalcShell`

```tsx
return (
  <CalcShell
    title="Xxx calculator"
    description="..."
    types={TYPES}              // 여러 타입 탭이 있을 때만
    onTypeChange={setTypeIdx}
    inputs={inputs}
    results={results}
    notice="계산 근거(공식, 가정값)를 한 문단으로"
    related={[
      { href: "/other-calculator", label: "...", desc: "..." },
    ]}
  />
);
```

`Field`/`WasteSlider` props는 `app/components/Field.tsx`, `app/components/WasteSlider.tsx` 참고.

## 3. `page.tsx` — 메타데이터 + FAQ

```tsx
import type { Metadata } from "next";
import CalcSchema from "../components/CalcSchema";
import XxxCalc from "./XxxCalc";

export const metadata: Metadata = {
  title: "Xxx Calculator — ... | BuildCalc",
  description: "...",
  keywords: ["...", "..."],
  alternates: { canonical: "/xxx-calculator" },
};

const faqs = [{ question: "...", answer: "..." }, /* 4~5개 */];

export default function XxxCalculatorPage() {
  return (
    <>
      <CalcSchema
        name="Xxx Calculator"
        description="..."
        url="https://buildcalczone.com/xxx-calculator"
        faqs={faqs}
      />
      <XxxCalc />
    </>
  );
}
```

## 4. 연결해야 할 3곳 (빠뜨리기 쉬움)

새 계산기는 코드만 짠다고 끝이 아니다. 아래 3곳에 전부 등록해야 실제로 발견/접근 가능해진다.

| 파일 | 무엇을 추가 | 비고 |
|---|---|---|
| `app/components/Layout.tsx` | `calculators` 배열에 `{ href, label, group }` 추가 | `group`은 기존 그룹 중 하나(Concrete/Reinforcement/Masonry/Finishing/Earthworks/Tools) — 없으면 `groups` 배열에도 추가 |
| `app/page.tsx` | `calcs` 배열에 카드 객체 추가 | `icon`은 `@tabler/icons-react`에서 가져옴(lucide 아님). `iconColor`, `tags`, `preview`(예시 입력→출력) 필수 |
| `app/sitemap.ts` | `routes` 배열에 `/xxx-calculator` 추가 | |

세 군데 중 하나라도 빠지면: Layout 누락 → 사이드바에서 안 보임 / page.tsx 누락 → 홈에서 안 보임 / sitemap 누락 → SEO 누락.

## 5. 마지막 체크리스트

- [ ] `npx tsc --noEmit -p .` 통과
- [ ] `npx eslint <건드린 파일들>` 통과
- [ ] 빈 입력 상태에서 페이지 로드 시 500 안 나는지 확인 (`curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/xxx-calculator`)
- [ ] 사이드바(Layout), 홈 카드(page.tsx), sitemap.ts 세 곳 모두 추가했는지 확인
