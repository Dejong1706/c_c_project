<div align="center">

# 🏗️ BuildCalc

**건설 현장에서 바로 쓰는 무료 계산기 모음**

가입 없이 · 광고 없이 · 즉시 결과

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss)](https://tailwindcss.com)

**[🌐 buildcalczone.com](https://buildcalczone.com)**

</div>

---

## 📌 프로젝트 소개

DIY 시공자와 현장 작업자를 위한 **재료량 계산기 + 시공 가이드** 모음 사이트.

콘크리트 타설량, 타일 수량, 벽돌 수, 철근 무게 등 현장에서 자주 필요한 수치를 즉시 계산할 수 있다. **미터법과 야드파운드법** 모두 지원하며, 각 계산기에는 관련 가이드가 연결되어 있다.

---

## 🧮 계산기 (13개)

### 콘크리트 · 기초

| 계산기 | 경로 | 핵심 기능 |
|---|---|---|
| 🏭 Concrete calculator | `/concrete-calculator` | 슬래브·벽·기둥·기초 부피 계산 `Most used` |
| 📦 Concrete bag calculator | `/concrete-bags` | 40lb·60lb·80lb 자루 수량 |
| 🔩 Rebar calculator | `/rebar-calculator` | 철근 직경·길이·개수 → 무게 |
| 🪨 Excavation calculator | `/excavation-calculator` | 구덩이·트렌치·사면 굴착 부피 |

### 조적 · 마감

| 계산기 | 경로 | 핵심 기능 |
|---|---|---|
| 🧱 Brick calculator | `/brick-calculator` | 벽돌 수·팔레트 수량 |
| 🪟 Tile calculator | `/tile-calculator` | 타일 장수·박스 수·줄눈 간격 |
| 🖌️ Paint calculator | `/paint-calculator` | 도료 리터·통 수량 |
| 🪵 Flooring calculator | `/flooring-calculator` | LVP·목재·타일·카펫 박스 수량 |
| 🏗️ Mortar calculator | `/mortar-calculator` | 시멘트 포대·모래·물 배합 |

### 외장 · 조경

| 계산기 | 경로 | 핵심 기능 |
|---|---|---|
| 🪜 Stair calculator | `/stair-calculator` | 단 수·스트링거 길이·IRC 코드 체크 |
| 🚧 Fence calculator | `/fence-calculator` | 포스트·레일·피킷 수량 |
| 🌿 Mulch calculator | `/mulch-calculator` | 정원 멀치 입방야드·포대 수량 |
| 📐 Unit converter | `/unit-converter` | 길이·면적·부피·무게 단위 변환 |

---

## 📖 가이드 (20개)

<details>
<summary><strong>🏭 Concrete (4)</strong></summary>

- How to Calculate Concrete Volume
- Concrete Strength Grades Explained
- How to Mix Concrete by Hand
- Concrete Curing Time Guide

</details>

<details>
<summary><strong>🏗️ Structural (3)</strong></summary>

- What Size Rebar Do I Need?
- How to Calculate Stair Rise and Run
- Stair Building Code Requirements (IRC R311.7)

</details>

<details>
<summary><strong>🧱 Masonry (5)</strong></summary>

- How to Calculate Bricks for a Wall
- How Many Bricks Per Square Metre?
- Standard Brick Sizes by Country
- Brick Mortar Mix Ratio Guide
- Single vs Double Leaf Brick Wall

</details>

<details>
<summary><strong>🪟 Tile (3)</strong></summary>

- How Many Tiles Do I Need?
- Tile Grout Gap Guide
- How to Lay Tile Step by Step

</details>

<details>
<summary><strong>🖌️ Paint (2)</strong></summary>

- How to Calculate Paint Coverage
- How to Calculate Wall Area for Painting

</details>

<details>
<summary><strong>🚧 Fencing (1)</strong></summary>

- How to Calculate Fence Post Spacing

</details>

<details>
<summary><strong>🌿 Landscaping (2)</strong></summary>

- How Much Mulch Do I Need?
- How to Calculate Mulch

</details>

<details>
<summary><strong>📐 Conversion (1)</strong></summary>

- Cubic Yards to Cubic Meters

</details>

---

## 🛠️ 기술 스택

| 역할 | 기술 |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| UI | React 19 · Tabler Icons · Tailwind CSS v4 |
| SEO | 페이지별 Metadata · JSON-LD Schema · 사이트맵 자동 생성 |
| Analytics | Google Analytics |

---

## 💻 개발

```bash
npm run dev     # 개발 서버 → http://localhost:3000
npm run build   # 프로덕션 빌드
npm run start   # 프로덕션 서버 실행
npm run lint    # ESLint 검사
```

---

## ➕ 페이지 추가

새 계산기나 가이드를 추가할 때는 반드시 아래 문서를 먼저 읽을 것.
파일 구조, 사이트맵 등록, Layout 연결 등 필수 작업이 정리되어 있다.

- 📄 계산기 추가 → [`docs/adding-a-calculator.md`](docs/adding-a-calculator.md)
- 📄 가이드 추가 → [`docs/adding-a-guide.md`](docs/adding-a-guide.md)
