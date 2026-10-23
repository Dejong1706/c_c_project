# 작업 기록 & 남은 작업

## 배경

- 2026-10-08: 계산기 15개 + 가이드 25개 정확도 전수 감사를 진행했다.
  - 분야별 에이전트 6개가 공식을 Node로 실행하고, 수치를 재계산하고, 기준 문서(IRC/ACI/ASTM/TCNA/CPSC/OSHA)와 대조했다.
  - 약 130건이 발견됐다.
- 수정은 4단계로 나눠 진행한다. **1단계(틀린 숫자)는 완료**했고, 아래는 남은 작업이다.
- 줄 번호는 감사 시점 기준이라 일부 어긋날 수 있다. 수정 전에 해당 문구를 검색해서 찾을 것.

## 완료

### 1단계: 틀린 숫자 수정 (2026-10-08)

- `52918ee` 계산기 수치 오류 일괄 수정
  - 올림 오차: `components/calcMath.ts`의 `ceilCount`
  - 음수 입력 차단
  - 펜스: 단위 / 콘크리트 / FAQ
  - 계단: cm 변환 / 각도 / 151″ 판정
  - 단위 변환기: 정확한 계수
  - 멀치: CPSC 9in
  - 모르타르: 설명 / 밀도
  - 철근 안내, 굴착, 페인트 안내문, QuickCalc 라벨
- `0a8dd5a` 가이드 수치 오류 수정
  - 벽돌 모르타르 공식, 시멘트 포대 수, 석고보드 예시 표, 콘크리트 1.36 yd³
  - 멀치, `&apos;` 노출, 카테고리 뱃지

### 판단 메모: 모르타르 포대 수 (에이전트 지적을 따르지 않음)

- 감사 에이전트는 "80 lb 포대 = 10.5 L는 물리적으로 불가능하니 17 L로 바꾸라"고 했다.
- 따르지 않은 이유:
  - 계산기는 **줄눈의 기하학적 부피**만 계산한다.
  - 실제 현장에서는 frog 채우기, 버터링, 떨어지는 양 때문에 약 1.6~1.7배를 쓴다.
  - 제조사 안내도 포대당 표준 벽돌 35~40장이다.
- 결론: 포대 수(10.5 L 기준)는 실사용과 맞으므로 유지하고, 설명만 "실사용 기준"으로 고쳤다.
- 17 L로 바꾸면 약 40% 부족하게 구매하게 된다.

---

## 2단계: 가이드·FAQ 사실 오류 수정 (결정 불필요, 바로 진행 가능)

### 계단 / 지붕

- `guides/content/stair-building-code-requirements.tsx` (2026-10-07에 보강한 가이드인데 놓친 부분)
  - [x] (2026-10-13) 오픈 라이저 면제 조건 (본문 ~236행, FAQ ~45행)
    - 현재: "전체 높이 30″ 이하이면 제한 없음"
    - 정확: R311.7.5.1은 "바닥/지면에서 30″ 이하에 위치한 틈"을 면제한다. 나선 계단도 면제.
  - [x] (2026-10-13) 나선 계단 표 (~401행): 2021 R311.7.10.1 보행선 정의(반지름 24½″ 상한) 반영
  - [x] (2026-10-13) 조명 (~373–379행): 외부 계단은 R303.8. 실내에서 스위치로 켤 수 있어야 함.
- `how-to-calculate-stair-rise-and-run.tsx`
  - [x] (2026-10-14) 사판 예시 (~239–244, ~355–356행)
    - √(108²+165²)=197.2″로 되어 있다.
    - 계산기(standard)와 본문 메모(전체 높이 − 단 하나)는 √(101.25²+165²)=193.6″이다.
  - [x] (2026-10-14) FAQ (~18행): 154″ run(15단 기준)이 본문의 16단 예시와 불일치
  - [x] (2026-10-14) Blondel/DCA 6 인용 (~260–263행)
    - Blondel은 2R+T≈24–25″이다.
    - R+T=17–18″은 목수들의 경험칙이다.
  - [x] (2026-10-14) "Never round down — IRC 최대를 넘는다" (~182–183행)
    - 내림 시 목표 단높이를 넘을 뿐, 코드 위반은 아닐 수 있다.
    - 예: 108÷7 → 15단 × 7.2″는 합법.
  - [x] (2026-10-14) "leading cause of stair falls" (~23행): 근거 없음, 완화
- 지붕 안전 기준 (여러 곳이 서로 모순되고 OSHA와도 다름)
  - 해당 위치:
    - `roof-pitch-calculator/RoofPitchCalc.tsx` 안내문(~217행), `pitchCategory`(~18–25행)
    - `how-to-calculate-roof-pitch.tsx` ~36, ~146행
    - `roof-pitch-to-degrees-conversion.tsx` ~256행
    - `roof-pitch-calculator/page.tsx` FAQ ~41, ~46행
    - 6:12 "장비 없이 걸어도 안전" FAQ 3곳
  - 정확:
    - OSHA 1926.500(b): 4:12 초과가 "steep roof".
    - 1926.501(b)(11), (13): 6 ft 이상 높이에서 추락 방지 장치 필요. 주거 공사는 경사와 무관하다.
    - 12:12 기준은 없다.
- 지붕재 최소 경사 (IRC R905와 다름)
  - 해당 위치:
    - RoofPitchCalc 안내문, `pitchCategory`
    - `how-to-calculate-roof-pitch.tsx` ~131–134행 (3:12~4:12 공백)
    - `roof-pitch-to-degrees-conversion.tsx` ~240–245, ~256, ~262행
  - 정확한 값:
    - 아스팔트 슁글 2:12 (2:12~4:12는 이중 언더레이)
    - 점토/콘크리트 타일 2½:12
    - 금속 슁글 3:12
    - 슬레이트 4:12
    - 목재 슁글/셰이크 3:12
    - 금속 패널: standing seam ¼:12, 실런트 겹침 ½:12
    - 개질 아스팔트 / built-up / single-ply ¼:12
  - "2:12 미만 = 멤브레인만"은 틀렸다 (standing seam 금속은 가능).
- [ ] `how-to-calculate-roof-pitch.tsx` ~169–171행: 다락에서 측정 방향
  - 수평자를 서까래 아래면에 대고 12″ 지점에서 **위로** 측정해야 한다.
  - ~188행 "level flat on the roof, bubble centred"는 자기모순.
- [x] (2026-10-21) `roof-pitch-to-degrees-conversion.tsx` ~23행: "approximately … This is exact" 모순
- [x] (2026-10-21) `RoofPitchCalc.tsx` `pitchCategory`: 분류 전에 x:12를 소수 2자리로 반올림
  - 18.43° 입력 시 3.9989로 "Low slope"가 뜬다.
- [x] (2026-10-21) `RoofPitchCalc.tsx` 안내문 / `pitchCategory`: 위 안전·지붕재 기준에 맞춰 문구 수정

### 콘크리트 / 철근

- [x] (2026-10-23) `what-size-rebar-do-i-need.tsx` ~18행(FAQ), ~196–199행: 수축·온도 철근 최대 간격
  - 현재: "3h 또는 450 mm"
  - 정확: **5h와 18 in(457 mm) 중 작은 값** (ACI 318-19 §24.4.3.3). 3h는 1방향 슬래브 주철근 기준이다.
  - 일반 slab-on-ground는 ACI 360 소관이라는 점도 언급.
  - ~105행: "#번호 = 1/8인치 단위 지름"은 #3–#8에만 해당
  - ~23행: 철근은 균열을 막는 게 아니라 균열 폭을 제어한다
- [ ] `concrete-curing-time-guide.tsx`
  - ~33, ~210행: 조기 동결 시 "50% 이상 손실" → "**최대** 약 50%" (ACI 306: 500 psi까지 보호)
  - ~316–317행 CTA: 콘크리트 계산기에 없는 "bags, mix ratios"를 약속하고 있음
  - 강도 발현율: 24h 약 10% → 약 16%, 7일 70–75% → 약 65–70%
  - "40°F 이하에서 수화 거의 정지" 과장 (크게 느려질 뿐 약 14°F까지 진행)
  - 온도표 공백: 40–50°F, 80–95°F
  - 70°F 분할 vs "60–80°F 이상적" 불일치
  - "ACI 308R specifies" → 권장 (ACI 301/308.1: 7일 또는 f′c의 70%)
  - "100°F에서 최대 23%" 출처 불명
- [ ] `concrete-strength-grades.tsx`
  - ~7, ~120–121행: 동결융해 저항은 공기연행(5–7%)이 핵심이다.
    - IRC R402.2: 혹독한 기후의 외부 노출 슬래브는 3500 psi + 공기연행.
    - 2500 psi는 온화한 기후에만 해당.
  - ~204행: "C15–C20" → 2500–3000 psi는 **C16/20–C20/25** (C15는 EN 206 등급 아님)
  - ~124–129행: 표 구간 겹침. "기초 4000–4500 psi"는 IRC R402.2 최소(2500 psi) 및 본문 C25/30과 모순
- [ ] `concrete-bags/page.tsx` ~11, ~23행: 없는 "bag size 선택" 기능을 약속. `BagCalc.tsx` ~102행 "post hole" 언급 (원형 모드 없음, 27% 과다)
- [x] (2026-10-16) `how-to-mix-concrete-by-hand.tsx`: "50 litres (roughly 2 ft³)" → 1.8 ft³
- [ ] `guides/[slug]/page.tsx` cubic-yards-to-cubic-meters 메타 title의 "Converter" (페이지에 변환기 없음)
- [x] (2026-10-23) `RebarCalc.tsx` ~102행: "±3%" → ASTM A615은 최대 6% 미달 허용, EN 10080 ±4.5%. "Weight per bar"는 이음 여유 포함임을 명시

### 석공

- [x] (2026-10-15) `brick-mortar-mix-ratio.tsx`
  - ~230행: "Portland cement and **sharp sand**" → soft/building sand (ASTM C144). 계산기 FAQ와 모순.
  - ~18, ~283–286행: "석회 소량 추가해도 강도 크게 안 줄어듦" 오해 소지 (1:1 석회면 Type M→N 수준)
  - ~33, ~345–349행: 벽돌당 0.5–0.7 L / m²당 30–40 L + 10%
    - 계산기(줄눈 약 18 L/m²) 및 계산기 FAQ와 정리 필요 ("줄눈 부피 약 18 L, 실사용은 frog·낭비로 더 많음"으로 통일)
    - "모든 면 vs bed/perp" 설명도 틀림 (차이는 frog 때문)
  - ~315–318행: "네 가지 석회 배합이 Type M/S/N/O에 대응" → 표 첫 행은 무석회(1:0:3–4)
  - ~375–376행: 한중 기준 2°C → 미국 TMS 602는 40°F(4.4°C), 영국 통상 "3°C and falling"
- [ ] `standard-brick-sizes-by-country.tsx`
  - ~208–211행 King 사이즈 → 약 9⅝×3×2¾ in (244×76×70 mm), m²당 약 50장
  - ~456–468행 줄눈표: 8 mm → **61**, 12 mm → **57**
  - ~18, ~160–163행 Imperial UK: 9×4.5×3 in은 nominal. 실제는 약 8⅝×4⅛×2⅝ in (219×105×67), 약 57/m²
  - ~289–292행 독일 NF: 약 48/m². "older"는 틀림 (현행 규격)
  - US standard non-modular 203×92×57. Queen은 보통 8 in. 솔리드 벽돌은 ASTM C652가 아니라 C216.
  - BS EN 771-1은 215×102.5×65를 규정하지 않음. WF와 WDF 혼동. US modular nominal 높이 68 mm.
- [ ] `how-many-bricks-per-square-metre.tsx`
  - Maxi 33 (FAQ는 34), Jumbo 22 (~8, ~130행)
  - ~103행 "single-leaf = one brick thick" → half-brick(102.5 mm)
- [ ] `how-to-calculate-bricks-for-a-wall.tsx`
  - FAQ ~41행: 8 mm 줄눈 63 → 61
  - ~170, ~186행 예시: 2 m 높이 벽에 2.1 m 문 (불가능)
  - ~26행: 영국식 쌓기 설명 오류 ("매 단에 양방향" 아님)
  - ~362–368행: 계산기에 없는 기능 약속 (벽돌 크기, 모르타르 추정)
- [ ] `single-vs-double-leaf-brick-wall.tsx` (**안전 관련**)
  - ~18, ~207–213, ~424행: 정원 담장 높이 한계를 Building Regulations(Approved Doc A)로 귀속한 것과 과장
    - 반장 벽 + 기둥 1.8 m는 과장이다. 일반 지침은 약 0.5–0.75 m.
    - 출처는 LABC/BRE/BDA 지침.
  - ~30행: double leaf가 "header 때문에 약간 많음" → 정확히 2배 (118.5)
  - ~13행: 영국식 쌓기 설명 오류
  - ~24, ~133, ~325행: 공동 폭 50–100 mm → 현대 영국 100–150 mm
  - ~461행: 계산기에 없는 모르타르 계산 약속
- [ ] `brick-calculator/page.tsx` ~48행 FAQ
  - "single leaf = one brick thick" → half-brick
  - double leaf ≠ cavity wall (영국 cavity 내측은 보통 블록)

### 마감

- [x] (아래 4개 항목 2026-10-20 완료, 10-20 항목 참고) `tile-grout-gap-guide.tsx` ~17행(FAQ), ~161–168행 / `how-many-tiles-do-i-need.tsx` ~22행
  - 현재: "줄눈이 넓으면 타일이 더 필요"
  - 정확: **반대로 줄어든다**. 계산기는 맞게 계산한다.
  - 효과 크기: 60 cm 타일 약 1%, 10 cm 약 6%, 모자이크 약 20%
- [x] `tile-grout-gap-guide.tsx` ~12, ~152–157행: lippage 정의 오류
  - lippage = 시공된 인접 타일 간 높이차 (ANSI A108.02)
  - 크기 편차 = facial dimension variation, 휨 = warpage
- [x] 줄눈 폭 지침
  - 해당 위치: grout 가이드 ~12, ~134, ~185행 / `tile-calculator/page.tsx` ~42행
  - "대형 타일은 넓은 줄눈 3–6 mm"는 오해 소지. ANSI A108.02: 실제 치수 편차의 3배 이상, 최소 1/16″(1.6 mm).
  - 모자이크 1.5 mm는 최소 미만
- [x] 줄눈이 "움직임 흡수"한다는 서술 (grout ~103–106, ~22행, lay-tile ~216행): 시멘트 줄눈은 강성이고, 움직임은 movement joint(TCNA EJ171)가 담당
- [x] `drywall-screw-spacing-guide.tsx` (**시공 오류로 이어짐**) — 2026-10-19 완료 (아래 10-19 항목)
  - ~16행(FAQ), 표 ~125–146, ~169–173, ~200행: 가장자리 8″ OC는 **못** 간격. 나사는 벽 16″ / 천장 12″, 가장자리 포함.
  - ~131–134, ~180–181행: 24″ OC 골조 벽에서 나사 간격 24″ → **12″** (IRC Table R702.3.5)
  - ~26, ~36행: "천장에 못 금지, 나사 필수" → IRC는 천장 못 7″ OC 허용 (나사 권장일 뿐)
  - ~146, ~207–209행: 천장 24″ OC는 ⅝″만 가능 → ½″ 직각 시공 허용 (sag-resistant ½″ 존재)
  - ~253행: 이중 시공 나사 길이 반대
    - 하부 1¼″ (½+⅝=1⅛)
    - 상부 1⅝″ 이상 (½+½+⅝=1⅝)
  - ~238행: "1¼″ (6d equivalent)"는 틀림 (6d 못 = 2″)
  - ~301행: 가장자리 "½″ 최소"는 틀림. 정확한 값은 ⅜″ (~154행과 모순)
  - ~258행: Type G 나사는 1½″ 고나사산
  - ~356–357행: 5 lb 박스 약 660개는 낮은 듯 (확신 낮음)
  - ~184행: 수평 시공 권장 조건이 반대 (보통 8 ft 이하 벽에서 수평)
- [ ] `drywall-calculator/page.tsx`
  - ~47행 FAQ: 차고 ⅝″ Type X "IRC 필수"는 과장
    - R302.6: 차고와 주거 사이 벽/천장은 ½″
    - ⅝″ Type X는 차고 위에 거실이 있을 때 천장에만 해당
    - 욕실 green board 서술: R702.4.2상 욕조/샤워 타일 하지는 시멘트/섬유시멘트/유리매트 보드
  - ~37행: "4×12 시트로 9 ft 벽 높이 커버" 틀림 (2단 = 8 ft, 54″ 보드나 필러 필요)
- [ ] `how-to-calculate-drywall-sheets.tsx`
  - FAQ ~18행 vs 본문 ~218–220행: 낭비율 조언 모순 (계산기 FAQ ~37행도)
  - ~357행: ½″ 보드 나사 1⅝″ → 1¼″
  - ~144행: 4×12 무게 약 90 lb는 ⅝″ 기준 (½″는 약 75–85, 확신 낮음)
  - ~354행: 테이프 기준 (아래 3단계 DrywallCalc와 같이)
- [ ] `how-to-lay-tile-step-by-step.tsx`
  - ~184–186행: 평탄도 1/8″ in 10 ft는 15″ 이상 타일에만 해당. 그보다 작으면 1/4″ in 10 ft.
  - 대형 타일 기준 불일치 (~28, ~274행 12″ vs ~18행 18″) → ANSI/TCNA 15″. back-buttering은 "필수"가 아니라 80/95% 접착 확보 수단.
  - ~229행: 1/16″ = 1.6 mm (2 mm 아님)
  - ~366행: 없는 "grout 추정" 기능 약속
- [ ] `tile-calculator/page.tsx` ~32행 FAQ: "about 33" → 34 (계산기·가이드와 일치시키기)
- [ ] 대각선/헤링본 낭비율 불일치
  - 해당 위치: `TileCalc.tsx` 안내문 ~247행 "10% 위에 10–15% 추가" vs FAQ/가이드 "총 15%"
  - flooring FAQ 헤링본 12–15% → 통상 15–20%
- [ ] `FlooringCalc.tsx` ~12, ~236행: "NWFA guidelines"를 LVP/라미네이트/타일/카펫에 적용 (NWFA는 목재만). ~241행 관련 링크 "Tiles & grout estimator" (grout 기능 없음)
- [ ] 페인트 가이드 도포율 서술 불일치
  - 조적 페인트: `how-to-calculate-paint-coverage.tsx` ~163행 6–10 m²/L vs `how-to-calculate-wall-area-for-painting.tsx` ~377행 4–6 m²/L
  - 프리미엄 페인트: paint-coverage ~155행, FAQ ~12행 "더 넓게" vs wall-area ~30, ~236행 "더 좁게"
  - paint-coverage ~168행: 10 m²/L = 407 ft²/gal은 미국 기준 상한이라 "conservative" 아님
  - wall-area ~395행: 계산기에 없는 "coverage rate 입력" 약속

### 마당 / 토공

- [ ] `how-to-calculate-fence-post-spacing.tsx`
  - ~252–257행: "기둥당 2포대" → 12″×24″ 구멍이면 3포대 (계산기와 맞추기)
  - FAQ ~27행: "전체 길이의 1/3, 6 ft 펜스면 8 ft 기둥에 2 ft 매립"은 자기모순 → 계산기 규칙(지상 높이의 1/3, 최소 2 ft)으로 통일
  - ~142행: "vinyl can't be cut" → 짧은 칸은 레일/패널 절단 가능 (계산기 조정 간격과도 모순)
  - ~211행: "반드시 동결선 아래"는 IRC 요건이 아니라 권장 (frost heave 방지). 북부 동결 깊이 36–48″ → 48–72″ 이상인 곳도 많음
- [ ] 굴착 swell 계수 과소
  - 해당 위치: `ExcavationCalc.tsx` 안내문 ~150행 "10–15%", `excavation-calculator/page.tsx` FAQ ~44행
  - 통상 값: 모래/자갈 10–15%, 일반 흙 20–30%, 점토 30–40%, 암반 50% 이상
  - 슬라이더 최대 30%로는 점토/암반을 커버 못 함 (→ 3단계와 연계)
- [ ] "Sloped sides" 라벨: 양쪽 긴 변만 경사진 **트렌치**에만 정확. 네 면 경사 구덩이는 오차 ±20% 이상 (→ 라벨을 "Trench with sloped sides"로, 또는 3단계에서 prismoidal 공식)
- [ ] 관련 링크 "Soil volume & cost" (`FenceCalc.tsx` ~219, `MulchCalc.tsx` ~222행): 굴착 계산기에 비용 출력 없음
- [ ] `how-much-mulch-do-i-need.tsx` ~232–233행: "3 yd³ 이상 배송 포함"은 같은 페이지 표/FAQ와 모순. ~198–199행 400 sq ft 예시 (10% 규칙 적용 시 4.07 yd³)

---

## 3단계: 계산기 기능 보완 (**범위 결정 필요**)

- [ ] **지붕 면적** (`RoofPitchCalc.tsx` ~79, ~133행): "True roof area (one side)"가 건물 길이 대신 폭을 사용한다.
  - 24×40 ft 집이면 40% 과소.
  - 선택지: ① 건물 길이 입력 추가 (권장) ② 결과 삭제
  - span 입력에 단위 선택 없음 (run을 m로 해도 ft)
  - rafter 길이에 처마/릿지보드 미반영 안내
- [ ] **벽돌 계산기**: 영국 벽돌(60/m²)만 지원한다.
  - 미국 모듈러(6.75/ft²) 옵션 추가
  - ft 입력 시 면적을 ft²로 표시
  - 홈 QuickCalc(5%)와 기본 낭비율(10%) 불일치
- [ ] **타일 계산기**: 박스당 10장 고정 (60×60 cm는 박스당 3–4장 → 박스 수 2–3배 과소). 박스당 장수 또는 m² 입력 추가.
- [ ] **페인트 계산기**
  - 갤런/ft² 출력 없음
  - 4 L 통은 미국(3.785 L)도 영국(2.5/5 L)도 아님
  - "Exterior" 옵션이 아무 효과 없음
  - 도포율 입력 없음
  - 낭비 10% 미반영
- [ ] **철근 계산기**
  - #3–#11 선택 드롭다운 (현재는 mm 직접 입력)
  - lb/ft, lb 출력
  - "ton" → "tonne(metric)" 명시
  - "Metric and imperial" 메타 문구와 실제 불일치
- [ ] **계단 flush mount**
  - treads = risers − 1 그대로인데 전체 높이를 사용해 사판 길이가 어느 기하에도 맞지 않는다.
  - flush의 정의(계단 수, 사판 계산)를 정하고 가이드에 설명 추가.
  - "실내 계단에 흔함" 서술도 재검토.
- [ ] **콘크리트 계산기** 트럭 용량 6 m³(7.85 yd³): 미국 통상 8–10 yd³. 옵션 또는 문구 조정.
- [ ] **굴착 계산기**: 토질별 swell 선택, 네 면 경사 구덩이(prismoidal) 지원
- [ ] **석고보드 계산기**
  - 테이프 1롤/150 sq ft는 4–9배 과다. USG 기준 약 370–400 lin ft / 1,000 sq ft (250 ft 롤 약 650 sq ft).
  - 천장 포함 시 나사를 12″ OC로 계산하지 않음 (라벨 "16″ OC" 고정)
- [ ] **모르타르 계산기**: 미국 94 lb 시멘트 포대 옵션 (현재 25 kg만)
- [ ] **펜스 체인링크**: "2 rails/section" → 보통 상단 레일 1개 + 하단 텐션 와이어 (확신 중간)
- [ ] **단위 변환기** 빠른 참조표: 열 머리글 없음. 앞 6개 단위만 표시해서 yd³, gallon, acre, 평이 빠짐.
- [ ] **CalcShell**: 실제 결과 0이 "—"로 표시된다.
  - 예: 석고보드에서 공제 > 벽 면적이면 "Enter your measurements" 표시
  - 계단 1단이면 디딤판 0개도 "—"

## 4단계: 사이트 전반 (**일부 결정 필요**)

- [ ] **개인정보처리방침** (`privacy-policy/page.tsx`)
  - ~247, ~262–263행: "연락 달라"는데 연락 수단 없음 → **연락처(이메일/폼) 결정 필요**
  - 제3자 누락: Google Fonts, jsDelivr Tabler 웹폰트(`@latest` 버전 고정 안 됨)
  - ~222행: "first-party 쿠키 없음"은 틀림 (GA4 `_ga`는 first-party)
  - ~129행: 개인 식별 불가 서술 vs AdSense 맞춤 광고
  - AdSense 사용 시 EEA/영국/스위스 대상 **동의 배너(CMP)** 필요 → 결정 필요 (AdSense 자체 CMP 사용 등)
- [ ] 홈 `page.tsx` ~182행 "Every formula explained in a guide": 철근 무게, 굴착, 바닥재 공식을 설명하는 가이드가 없음 → 문구 수정 또는 가이드 작성
- [ ] 홈 `page.tsx` `websiteSchema`의 `SearchAction` (`?q=`) 삭제 (검색 기능 없음)
- [ ] how-many-tiles-do-i-need: 메타/목록/Article schema가 없는 "common mistakes" 섹션을 약속
  - 위치: `[slug]/page.tsx` ~111행, `guides/page.tsx` ~103행, 가이드 ~44행
- [ ] `guides/[slug]/page.tsx` ~410행: BreadcrumbList name에 전체 SEO 제목(" | BuildCalc" 포함) 사용
- [ ] `sitemap.ts`: 수정한 계산기들의 날짜 갱신
- [ ] `README.md`
  - "광고 없이" (AdSense 사용 중)
  - 계산기/가이드 개수
  - 모르타르 "물 배합" 출력 (없음)

---

## 이후 (SEO 계획)

- 노출 상위 가이드 3개 보강 완료 (계단, 모르타르, 콘크리트 손비빔). 색인 요청도 완료.
- 다음 할 일:
  - 같은 주제의 롱테일 가이드 추가 (예: Type S vs Type N mortar, deck stair code, how much concrete does one 80 lb bag make)
  - 백링크 확보 (Reddit/Quora 답변)
- 체크포인트:
  - 2026-11 초: 보강 페이지의 노출수와 순위
  - 2027-01: 평균 순위 20–30위대 진입 여부
  - 2027-04~06: 전략 재검토 시점

---

## 2026-10-12 추가 감사 (기술 / SEO / 접근성 / 코드) + 평일 1커밋 계획

- 2–4단계 백로그 재확인: 전부 아직 열려 있음 (HEAD `0a8dd5a` 기준). 아래는 백로그에 **없던** 새 발견.
- 재검증 결과 불필요한 항목: 타일 FAQ "33 → 34" (12/0.603² = 33.003), US 모듈러 높이 68 mm (67.7 mm라 67 유지 가능).
- 계단 FAQ ~18행은 단 수뿐 아니라 사판도 전체 높이로 계산돼 있어 함께 재계산할 것.
- **원칙: 가이드를 고칠 때마다 그 파일의 `dateModified`와 `sitemap.ts` 날짜를 같은 커밋에서 갱신.**

### 평일 순서 (하루 1커밋)

**1주차: 노출 상위 가이드**
- [x] 월 (2026-10-12): lint 에러 0 (privacy-policy `"` 이스케이프, 미사용 import `formula`, `UnitLen`)
- [x] 화 (2026-10-13): 계단 코드 가이드 (오픈 라이저, 나선 보행선, 조명 R303.8) + title(75자)/description(178자) 축소
- [x] 수 (2026-10-14): rise-and-run 가이드 (사판 193.6″, FAQ, 내림 문구, Blondel, "leading cause") + ~198행 IRC 언급에 계단 코드 가이드 링크
- [x] 목 (2026-10-15): 모르타르 가이드 (sharp sand, 2°C, 4배합, L/m²) + title/description 축소 + `how-many-bricks-per-square-metre`에서 모르타르 가이드·계산기 링크
- [x] 금 (2026-10-16): 손비빔 가이드 1.8 ft³ + title(60자)/description(145자) 축소 + 콘크리트 가이드 5곳에서 링크 (concrete-volume 백 수 문단, strength-grades 마무리, curing 습윤양생 목록 뒤, fence Step 6, mortar "콘크리트 대신" NoteBox — FAQ 답은 JSON-LD 문자열이라 본문에 링크)

**2주차: 안전·시공 오류**
- [x] 월 (2026-10-19): drywall-screw-spacing-guide (2단계 항목 전체) + 계산기 나사 수·drywall-sheets 나사 행 정합 + title/description 재작성
- [x] 화 (2026-10-20): 타일 줄눈 방향 / lippage / 움직임 흡수 — grout 가이드 재작성(ANSI A108.02 줄눈 폭) + how-many-tiles·lay-tile·tile-calculator FAQ 정합 + title/description
- [x] 수 (2026-10-21): 지붕 OSHA 안전 문구 + IRC R905 최소 경사 (+ `pitchCategory` 반올림) — 계산기·가이드 2개·FAQ 정합
- [x] 목 (2026-10-22): single-vs-double-leaf (정원 담장 높이 등) — GOV.WALES/ODPM 높이표, ADA 2C8 공동, 벽돌 계산기 FAQ·관련 가이드 링크
- [x] 금 (2026-10-23): what-size-rebar (5h/18 in 등) + RebarCalc "±3%" — 가이드 재작성(ASTM 바 표 #3–#11, 2024 IRC R506·R403.1.3, ACI 318 0.0018·5h/18 in), 계산기 notice·weight per bar·lap FAQ

**3주차: 기술·접근성**
- [ ] 월: `layout.tsx:34-37` Tabler 웹폰트(`@latest`, 렌더 차단) 제거 → `shared.tsx:118` NoteBox를 `IconInfoCircle`(`@tabler/icons-react`)로
- [ ] 화: og:site_name — 페이지 `openGraph`가 layout의 `siteName`을 덮어씀(얕은 병합). 각 페이지에 `siteName` 추가 또는 헬퍼. drywall/roof-pitch/stair 계산기 페이지는 `openGraph` 자체 없음
- [ ] 수: Article schema 필드 누락 4개(drywall-screw, drywall-sheets, roof-pitch, roof-degrees; `how-to-mix-concrete-by-hand.tsx:50-62` 참고) + `docs/adding-a-guide.md` 템플릿. 10/08 수정 가이드 8개 `dateModified`/sitemap 날짜, 홈·/guides sitemap 날짜
- [ ] 목: 계산기 공통 접근성 — `Field.tsx:36` 단위 select aria-label, `WasteSlider.tsx` label 연결·aria-valuetext, `CalcShell` 결과 aria-live, 결과 보조글 대비(0.7 → 0.85), 입력 테두리 대비, range `:focus-visible`
- [ ] 금: UnitConverter — label 연결, 값 입력 label, ⇄ 버튼 aria-label, aria-live + 참조표 머리글·누락 단위

**4주차 이후 후보**
- [ ] Google Fonts → `next/font/google` (lint 경고 해소, 미사용 300/italic 제거)
- [ ] 미사용 파일 정리: `public/` 기본 svg들, `favicon.svg`, `icon-192.png`, `tailwind.config.ts`(v4에서 무시), lockfile 1개만 유지
- [ ] 계산기 15개 Related guides 마크업 → 공통 컴포넌트, 가이드용 `<RelatedGuides>`(`shared.tsx`)
- [ ] 가이드 간 상호 링크 없는 쌍: roof 2개, drywall 2개, mulch 2개, lay-tile ↔ grout/tiles, rebar ↔ strength-grades
- [ ] 계산기 관련 가이드 보강: brick ← single-vs-double-leaf(어느 계산기에서도 링크 없음), rebar ← strength-grades, fence ← mix-by-hand, mortar ← bricks-for-a-wall, concrete-bags ← curing
- [ ] 홈 프로젝트 카드에 지붕 없음
- [ ] 나머지 title 60자 초과 / description 120–160자 벗어난 페이지 정리
- [ ] 접근성: Layout 햄버거 aria-expanded·Escape·skip link·aria-current, Breadcrumb aria, lay-tile 단계 제목을 heading으로, 가이드 FAQ 질문을 `<h3>`로, 토글 버튼 aria-pressed(공통 SegmentedToggle)
- [ ] 단위 상수 `calcMath.ts`로 통일 (3.28084 vs 1/0.3048, 0.393701)
- [ ] 레지스트리 통합(guides.ts / calculators.ts) — 수동 동기화 지점 제거
- [ ] `docs/adding-a-calculator.md` §4, `docs/adding-a-guide.md`(가이드 수, CATEGORY_ORDER) 최신화
- [ ] 얇은 가이드 확장: roof-degrees, bricks-per-m², mulch 2개 (what-size-rebar 무게 공식 d²/162 섹션은 2026-10-23 완료)
- [ ] FAQ 4개뿐인 가이드 8개에 롱테일 FAQ 추가
- [ ] `how-to-calculate-bricks-for-a-wall.tsx:39` "Do mortar joint thickness" → "Does"
- [ ] paint 가이드 2개 동일 FAQ("How many coats") 중복 제거

### 2026-10-23 what-size-rebar 가이드 + RebarCalc (ASTM A615 / 2024 IRC / ACI 318)

- 출처: 2024 IRC — UpCodes GSA Residential Code 2024(무수정 채택본) R506.1(슬래브 3½″, 철근 요구 없음), R506.3.4(철근은 중앙~상부 1/3에 지지), R403.1.3(SDC D0–D2 기초: 스템월 No. 4 수직 4 ft·상단 12″ 수평, turned-down 기초 No. 4 상하 또는 No. 5/No. 4×2 중간 1/3, 비일체 시 No. 3 갈고리 다월 4 ft), R403.1.3.5.1–.4(A615/A706/A996 Grade 40 이상, 피복 3″/1½″·2″/¾″, 이음은 Table R608.5.4(1)·간격 ≤ lap/5와 6″ 중 작은 값), Figure R403.1(1)(SDC A–C 무근 기초), R301.1.3(공학 설계). ACI 318-19 §24.4.3.2(0.0018)·§24.4.3.3(5h와 18 in 중 작은 값) — 강의 자료·소프트웨어 문서 인용으로 확인, §1.4.8 slab-on-ground 제외는 ACI 공식 FAQ(concrete.org faqid=226)로 확인, ACI 360R 범위도 같은 FAQ. ASTM A615/A615M-26가 현행판(astm.org, No. 20 [64]까지)
- **미확인:** ACI 318-25(현행판) 원문 접근 못 함 → 본문은 "ACI 318-19 §…"로 판 명시. ASTM A615 Table 1(지름·면적·lb/ft)과 무게 허용차는 유료라 원문 미확인 — 바 표는 Table 1 공칭값(널리 재수록된 값, kg/m는 lb/ft × 1.48816로 재계산하고 0.006165 d²와 대조), 무게 허용차(A615 94%, EN 10080 ±4.5%)는 1차 출처 못 찾아 **수치 넣지 않음**. IRC Table R608.5.4(1) 이음 길이 수치도 미확인이라 표 번호만 인용
- 가이드 재작성: "#번호 = 1/8″"는 #3–#8만(#9 = 1.128″, 면적 기준), soft metric #13 = #4 동일 바 vs 유럽 12 mm(면적 약 11% 작음, 113 vs 127 mm²), 바 표 #3–#11(지름·면적·lb/ft·kg/m). 간격 "3h 또는 450 mm" → 0.0018·5h/18 in, 3.6″ 넘으면 18 in 지배, 4/5/6″ 슬래브 #3 15/12/10″·#4 18″ 표. IRC 요구사항 섹션 신설, 무게 공식 d²/162 섹션
- 삭제(출처 없음): 용도별 "typical" 크기·간격 표(주거 슬래브 10–12 mm 200–300 mm, 진입로 300 mm, 펜스 기둥 #3 등), "200–300 mm standard", 진입로 FAQ "significantly reduces cracking", "local codes typically require". 철근이 균열 폭을 제어한다는 문구는 1차 출처를 따로 확인 못 해 넣지 않음
- 계산기: notice "±3%" → 공칭 무게(7,850 kg/m³), 실제 질량은 표준 허용차 내에서 다르므로 공급사 무게 사용. "Weight per bar"를 이음 여유 포함 kg/n → 바 1개 공칭 무게(unitWt × L)로 바꾸고 단위에 "no splice allowance" 명시. FAQ "lap splice 5–10%" → 설계(IRC Table R608.5.4(1))가 정함, 여유율 = 총 겹침 ÷ 총 길이(6 m마다 0.6 m → 10%), IRC "longest lengths practical". 관련 가이드 라벨 갱신
- 메타 title 60자/description 150자, articleSchema 설명 157자, /guides 카드. sitemap: 가이드·rebar-calculator·/guides 2026-10-23
- 백로그로 남김: rebar ↔ strength-grades 상호 링크(4주차 항목), 계산기 관련 가이드에 strength-grades, 영국 BS 4449/BS 8666 내용, IRC R404/R608 벽 철근 표 상세

### 2026-10-22 single vs double leaf 가이드 (정원 담장 높이·공동 벽)

- 출처: GOV.WALES "Building regulations: fences, gates and garden walls"(담장·펜스·대문은 건축규정 승인 불필요, 자립 담장 최대 높이표 zone 1–4, 기울기 30/70/100 mm 기준, party fence wall). ODPM 리플릿 "Your Garden Walls: Better to be Safe than Sorry"(Crown copyright, 2004 재판, BRE Good Building Guides 13 & 14 기반 명시, 같은 표 — Milton Keynes Council 게시 PDF). Approved Document A 2013 원문(gov.uk PDF) 2C8(각 leaf ≥ 90 mm, 공동 ≥ 50 mm, 타이 900×450)·Table 5(공동 50–300 mm 타이 길이). GPDO 2015 Sch 2 Part 2 Class A(도로 인접 1 m, 그 외 2 m, legislation.gov.uk). **BRE GBG 13/14 원문은 유료라 미확인**, 영어 bond 정의는 일반 용어(Nottinghamshire HER 등)로 확인
- 높이: "Approved Doc A가 정원 담장 높이 규정"·"반장 벽 450 mm, 기둥(327×327, 3 m 간격) 있으면 1.8 m"·"1 m 넘으면 구조기술사" 삭제 → 반장 525/450/400/375, 1장 1,450/1,300/1,175/1,075, 1.5장·블록 행 포함 표 + 기둥·대문·옹벽은 전문가(표 적용 안 됨). 비교표·"어느 벽을 쓸까" 표도 같은 기준으로 재작성, FAQ "Can a single leaf be load-bearing"(건축규정 450 mm 귀속) → 높이 FAQ + 건축규정/계획허가 FAQ
- 수치: 벽돌 59.3/118.5(정확히 2배, header는 개수 안 늘림), 줄눈 모르타르 0.018/0.045 m³(기존 0.043), 17%/21%(기존 20%). 1:4 시멘트 포대 열 삭제(건조계수 근거 없음) → 모르타르 계산기 링크
- 공동 벽: 50–100 mm → ADA 2C8 최소 50 mm + Table 5 300 mm까지, 실제 폭은 단열 설계로 결정(현대 100–150 mm는 1차 출처 못 찾아 넣지 않음). 270–330 mm 두께·"1930년대부터 표준"·"1920년 이전" 삭제, 내측 leaf는 블록일 수 있음
- 삭제(출처 없음): "English bond 가장 강함", Flemish "조지·빅토리아 시대", 열질량/내후성/비용 정성 행, 패시브 솔라·문화재 용도 목록. FAQ "every course both directions"(English bond 오류) 정정
- 정합: brick-calculator FAQ(single = one brick thick, double = cavity 오류 정정) + 관련 가이드에 이 가이드 추가, how-many-bricks-per-square-metre "one brick thick"·"cavity도 2배" 정정, Related 목록 "bricks and mortar" → 계산기는 벽돌만 계산. 메타 title 59자/description 151자, /guides 카드
- sitemap: 이 가이드·how-many-bricks-per-square-metre·brick-calculator·/guides 2026-10-22
- 백로그로 남김: 바람 zone 지도 경계는 이미지라 본문에 옮기지 않음(GOV.WALES 링크), 스코틀랜드·북아일랜드 계획 규정 미반영, 계산기 notice "60/120"은 반올림 유지

### 2026-10-21 지붕 OSHA 안전 문구 + 2024 IRC R905 최소 경사

- 출처: OSHA 29 CFR 1926.500(b) 정의(low-slope ≤ 4 in 12, steep > 4 in 12), 1926.501(b)(10)·(11)·(13) 원문(osha.gov). 2024 IRC R905 — UpCodes GSA Residential Code 2024(IRC 2024 무수정 채택본): 아스팔트 슁글 2:12(R905.2.2, 2:12–4:12 미만 이중 언더레이 R905.1.1), 점토/콘크리트 타일 2½:12(R905.3.2, 4:12 미만 이중), 금속 슁글 3:12(R905.4.2), 롤 루핑 1:12(R905.5.2), 슬레이트 4:12(R905.6.2), 목재 슁글·셰이크 3:12(R905.7.2/R905.8.2), built-up ¼:12·콜타르 ⅛:12(R905.9.1), 금속 패널 standing seam ¼·실런트 겹침 ½·무실런트 3:12(R905.10.2), 개질 아스팔트·single-ply·SPF·액상 ¼:12(R905.11.1–R905.14.1). ICC 원문(codes.iccsafe.org)은 403으로 접근 못 함
- 계산기: `pitchCategory`를 OSHA 2분류(≤ 4:12 low-slope / > 4:12 steep)로 교체하고 소수 2자리 반올림 값으로 판정(18.43° → 4.00:12 → low-slope). "Roof coverings allowed" 결과 행 신설(R905 최소 경사 단계별). notice: "most common 6:12" 삭제, "2:12 미만 멤브레인 필요"·"6:12 초과 안전장비" → R905 최소 경사 + OSHA 6 ft 규칙
- 계산기 FAQ: "most common pitch" → "minimum roof pitch for shingles"(R905), "too steep to walk on" → OSHA 정의·6 ft 규칙(경사 무관, 12:12 기준 없음)
- how-to-calculate-roof-pitch: 4단계 분류표(Flat/Conventional/Steep/Very steep, 3:12–4:12 공백) → OSHA 2분류 표 + 주거 공사 6 ft NoteBox + degrees 가이드 링크. FAQ "most common" → 슁글 최소 경사, "special equipment" → fall protection
- roof-pitch-to-degrees-conversion: 표 Category → OSHA 분류, ★ 6:12 "most common" 삭제, 지붕재 표 → 2024 IRC R905 최소 경사 표(조항 번호), "4:12 per most manufacturer warranties"·"structural engineer recommended"·"membrane only" 삭제. FAQ 4:12(ranch-style 삭제 → OSHA/IRC), 6:12(safe to walk 삭제), 30° approximately/exact 모순, 12:12 "steepest common" 삭제
- 메타: 두 가이드 description(153/154자)·articleSchema 설명·/guides 카드 갱신. sitemap: 계산기·두 가이드·/guides 2026-10-21. 두 가이드는 articleSchema에 dateModified 필드 자체가 없음 → 3주차 수요일(Article schema 필드) 항목에서 추가
- 백로그로 남김: how-to-calculate-roof-pitch 다락 측정 방향(FAQ 1번 답의 "measuring straight down" 포함) · Method 2 "level flat on the roof" 모순, 지붕 면적(결정 필요), 슁글 21:12 초과 특수 고정은 미반영

### 2026-10-20 타일 줄눈 가이드 (ANSI A108.02 / TCNA EJ171)

- 출처: ANSI A108.02 §4.3.8(실제 치수 편차의 3배 이상, 최소 1/16″), §4.3.8.1(15″ 초과 running bond 평균 최소 rectified 1/8″·calibrated 3/16″), 이동 줄눈에 접착·줄눈재 금지. TCNA Handbook EJ171(둘레·내부 모서리·평면 변화·하지 줄눈·필드 실내 20–25 ft/실외 8–12 ft, 실링재+백업재). **ANSI A108/A118/A136.1-2024와 TCNA Handbook 2025는 유료라 원문 미확인.** 조항 문구는 CTEF(ceramictilefoundation.org) 인용과 Custom Building Products TB87, EJ171 간격은 제조사 자료 인용으로 확인
- grout 가이드 재작성: 줄눈 폭 표를 ANSI 규칙으로 교체(3× 편차, 1/16″ 최소, running bond 평균), 측정 방법·예시(1 mm 편차 → 3 mm), lippage = 시공 후 인접 타일 높이차(치수 편차·warpage와 구분, 넓은 줄눈으로 해결 안 됨), "줄눈이 움직임 흡수" → 시멘트 줄눈은 강성, EJ171 movement joint 섹션 신설, 타일 수: 줄눈 넓으면 **줄어듦** (3→6 mm: 60 cm 약 1%, 30 cm 약 2%, 10 cm 약 6%; 12 m²·60 cm: 34 → 33장). lay-tile 가이드 링크 추가
- 삭제(출처 없음): 유형별 줄눈 폭 표(모자이크 1.5–2 mm는 최소 미만, 대형 3–6 mm, 실외 6 mm+), "실외는 넓은 줄눈이 열 움직임 흡수", 색상·유지관리 섹션, lippage 최소화 위한 넓은 줄눈. lippage 허용치 수치는 조항 위치(A108.02 vs A137.1) 확인 못 해 넣지 않음
- 정합: how-many-tiles FAQ·본문(줄어듦), lay-tile 3단계(유형별 표 → ANSI 규칙 + 가이드 링크, 1/16″ = 2 mm 오류 함께 해소) 및 7단계 이동 줄눈 5–8 m → EJ171 간격, tile-calculator FAQ 줄눈 답변. 메타 title 49자/description 151자, /guides 카드
- sitemap: grout·how-many-tiles·lay-tile 가이드, tile-calculator 2026-10-20
- 백로그로 남김: lay-tile 3단계 NoteBox sanded/unsanded 1/8″ 기준·대리석 문구(출처 확인 필요), 계산기 기본 줄눈(바닥 3 mm·벽 2 mm)은 유지

### 2026-10-19 drywall 나사 간격 가이드 (2024 IRC 기준)

- 출처: 2024 IRC Table R702.3.5, R702.3.5, R702.3.5.1, Table R702.3.6 각주(⅜″ 가장자리 거리) — UpCodes GSA Residential Code 2024(IRC 2024 무수정 채택본). ASTM C1002-22 범위(Type S/W/G 정의)는 ASTM 스토어 요약. **GA-216-2024는 유료라 원문 미확인** → GA-216 인용 전부 삭제
- 가이드: 나사 최대 간격 벽 16″(16 OC)/12″(24 OC), 천장 12″, 차고 천장(거실 아래, ⅝″ Type X) 6″. 표에 가장자리/필드 구분 없음 → "가장자리 8″"는 못 간격임을 명시. 천장 못 7″ 허용(나사 필수 아님). ½″ 천장 24 OC 직각 허용, 수성 텍스처 시 ⅝″ 또는 sag-resistant ½″(각주 4), ⅜″ 단층 제한
- 나사 길이 = 보드 두께 + ⅝″(R702.3.5.1): ½″ 1⅛→1¼″, ⅝″ 1¼″, 이중 ½+½ 하부 1¼″/상부 1⅝″, 경량철골(<0.033″) Type S ⅜″ 관통 → 1″. "6d equivalent" 삭제. Type G는 보드-보드용(C1002), 길이는 제조사 지침으로
- 장당 나사 수 재계산(직각 시공, 부재 양끝 포함): 벽 16 OC 28/40, 24 OC 25/35, 천장 16 OC 35/50, 24 OC 25/35 (4×8/4×12)
- 삭제(출처 없음): nail pop 원인 서술, "failed inspections", 8 ft 초과 벽 수평 시공 권장, 리프트 대여료, 5 lb 박스 660개, 2″ 재고정, ½″ 가장자리 최소. 천장 먼저 시공은 관행(rule of thumb)으로 표기
- 정합: DrywallCalc 나사 = (벽 순면적×28 + 천장×35)/32 × (1+낭비율) (기존 36/장 근거 없음), notice·단위 문구. how-to-calculate-drywall-sheets 자재표 나사 행(1⅝″ → 1¼″ Type W, 28/35장). 메타 title 50자/description 145자, /guides 카드 설명
- sitemap: 나사 가이드·drywall-sheets 가이드·drywall-calculator 2026-10-19
- 백로그로 남김: drywall-calculator FAQ(차고 Type X, green board, 4×12 9 ft), drywall-sheets 낭비율 모순·무게·테이프, 계산기 notice의 "⅝″ Type X for garages"

### 2026-10-16 이번 주 가이드 재검증 (2026 최신 1차 출처 기준)

- 원칙: 현행판 1차 출처(2024 IRC/IBC — 2027판은 2027-01 출간 예정, ASTM C270-26, TMS 402/602-22, BIA TN 8/8B/28B, MPA DS02 2023, AWC DCA 6, Quikrete 데이터시트·SDS, ACI PRC-211.1-22)만 사용. 출처 없는 최상급·전언은 삭제. 단, 여러 곳에서 널리 쓰는 관행(1:2:3, R+T 17–18)은 "rule of thumb"로 명시하고 유지
- 계단 코드: 2024 IRC 번호로 전환(R311.7→R318.7, 난간 R320, 가드 R321, 조명 R325.6/R325.7). 외부 계단 "스위치 실내"(2012판 규정) 삭제, 실내 조명 예외 정정, 노징·착지·난간 끝 원문대로, 불합격 표 → 조항별 체크리스트
- rise-and-run: 사판 공식을 (전체 높이 − 1단)으로 통일, DCA 6 컷 사판 최대 경간 6′-0″ 추가, Blondel/최상급 삭제, ADK 2R+G 550–700 mm + R+T 17–18(관행) 표기
- 모르타르: 영국 배합표 → MPA 설계 등급 (i)–(iv), Type M 1:¼:3¾, 한중 40°F(4.4°C)/3°C, 재비빔 2½시간(BIA), 맥시/점보 L/m² 재계산, 출처 없는 25–30 L/m² 등 삭제
- 손비빔: ACI 소규모 배합표 + 1:2:3(관행) 유지, Quikrete 물·수율(50 lb 행 추가), SDS 기반 안전, 양생 5/7일
- 펜스: 매립 깊이 = 기둥 전체 길이의 1/3 = 높이 ÷ 2 (Quikrete) — 가이드·계산기 모두 변경(6 ft 펜스 → 3 ft 매립, 9 ft 기둥), 비닐 구멍 15″(3× 규칙), 포대 수 표
- 계산기: 계단(30–37° 판정 삭제, R+T는 관행으로 표기, 공식/조항 번호), 모르타르(Type M 3¾, 용도 BIA 기준, 2½시간), 펜스(위 깊이 규칙)
- 백로그로 남김: 모르타르 계산기 1.3 건조계수·밀도·10.5 L/포대(UK 벽돌 환산) 출처 없음 / 펜스 계산기 속경성 50·60 lb 포대 옵션 / 벽돌 가이드 맥시 34·점보 23장/m²(10 mm 줄눈 시 33.3·22.2) / 계단 코드 가이드는 ICC 원문 대신 UpCodes(무수정 채택본) 인용 — 브라우저로 ICC 원문 대조 권장

### 2026-10-13 IndexNow 설정 (Bing 권장 사항)

- 키 파일 `public/fdb6be067a045eeece1178dd45eb4061.txt`, 스크립트 `scripts/indexnow.mjs`
- **배포 후 실행:** `npm run indexnow -- /guides/<slug> ...` (바뀐 경로만) 또는 `npm run indexnow -- --all` (사이트맵 전체)
- Bing 사이트맵 경고("Missing or undiscovered sitemap")는 오탐: robots.txt에 등록돼 있고 Bing에서도 10/13 처리 중. www 사이트맵은 apex로 308 리다이렉트

### 결정 필요 (평일 작업에서 제외)
- 개인정보처리방침 연락 수단 / EEA 동의 배너
- 지붕 면적 (건물 길이 입력 추가 vs 결과 삭제)
- 계단 flush mount 정의
- 멀치 가이드 2개 병합(301) vs 차별화
