# BuildCalc

건설 현장에서 바로 쓸 수 있는 무료 계산기 모음 사이트. 가입 없이, 광고 없이, 즉시 결과를 제공한다.

**사이트:** https://buildcalczone.com

---

## 프로젝트 개요

DIY 시공자와 현장 작업자를 위한 재료량 계산기 및 시공 가이드 모음이다. 콘크리트 타설량, 타일 수량, 벽돌 수, 철근 무게 등 현장에서 자주 필요한 수치를 빠르게 계산할 수 있다. 미터법과 야드파운드법을 모두 지원한다.

---

## 기술 스택

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **UI:** React 19, Tabler Icons, Tailwind CSS v4
- **SEO:** 페이지별 메타데이터, JSON-LD Schema, 사이트맵 자동 생성
- **Analytics:** Google Analytics

---

## 계산기 목록 (13개)

| 계산기 | 경로 | 기능 |
|---|---|---|
| Concrete calculator | `/concrete-calculator` | 슬래브·벽·기둥·기초 콘크리트 부피 계산 |
| Concrete bag calculator | `/concrete-bags` | 40lb·60lb·80lb 자루 수량 계산 |
| Tile calculator | `/tile-calculator` | 타일 장수, 박스 수, 줄눈 간격 |
| Brick calculator | `/brick-calculator` | 벽돌 수와 팔레트 수량 |
| Paint calculator | `/paint-calculator` | 도료 리터·통 수량 계산 |
| Flooring calculator | `/flooring-calculator` | LVP·목재·타일·카펫 바닥재 박스 수량 |
| Stair calculator | `/stair-calculator` | 단 수·계단판 길이·스트링거 길이, IRC 코드 체크 |
| Rebar calculator | `/rebar-calculator` | 철근 직경·길이·개수로 무게 계산 |
| Excavation calculator | `/excavation-calculator` | 구덩이·트렌치·사면 굴착 부피 계산 |
| Fence calculator | `/fence-calculator` | 포스트·레일·콘크리트·피킷 수량 계산 |
| Mortar calculator | `/mortar-calculator` | 시멘트 포대·모래·물 배합 계산 |
| Mulch calculator | `/mulch-calculator` | 정원 멀치 입방야드 및 포대 수량 |
| Unit converter | `/unit-converter` | 길이·면적·부피·무게 단위 변환 |

---

## 가이드 목록 (20개)

### Concrete
- How to Calculate Concrete Volume
- Concrete Strength Grades Explained
- How to Mix Concrete by Hand
- Concrete Curing Time Guide

### Structural
- What Size Rebar Do I Need?
- How to Calculate Stair Rise and Run
- Stair Building Code Requirements (IRC R311.7)

### Masonry
- How to Calculate Bricks for a Wall
- How Many Bricks Per Square Metre?
- Standard Brick Sizes by Country
- Brick Mortar Mix Ratio Guide
- Single vs Double Leaf Brick Wall

### Tile
- How Many Tiles Do I Need?
- Tile Grout Gap Guide
- How to Lay Tile Step by Step

### Paint
- How to Calculate Paint Coverage
- How to Calculate Wall Area for Painting

### Fencing
- How to Calculate Fence Post Spacing

### Landscaping
- How Much Mulch Do I Need?
- How to Calculate Mulch

### Conversion
- Cubic Yards to Cubic Meters

---

## 개발

```bash
npm run dev     # 개발 서버 (http://localhost:3000)
npm run build   # 프로덕션 빌드
npm run start   # 프로덕션 서버 실행
npm run lint    # ESLint 검사
```

---

## 페이지 추가 방법

새 계산기나 가이드를 추가할 때는 반드시 아래 문서를 먼저 읽을 것. 파일 구조, 사이트맵 등록, Layout 연결 등 필수 작업이 정리되어 있다.

- 계산기 추가: `docs/adding-a-calculator.md`
- 가이드 추가: `docs/adding-a-guide.md`
