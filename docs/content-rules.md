# 콘텐츠 작업 규칙 (필수)

가이드, 계산기, 메타 정보, FAQ 등 **사이트에 보이는 글이나 수치를 바꾸는 작업은 시작 전에 이 문서를 먼저 확인한다.** 틀린 수치나 애매한 표현은 사이트의 신뢰도를 떨어뜨린다. 이 사이트의 가치는 "정확한 계산과 정확한 근거"다.

## 1. 최신 1차 출처만 쓴다

- 작업 시점에 **현행인 최신판**을 기준으로 한다. 먼저 판(edition)을 확인한다.
  - 예: 2026-10 기준으로 IRC/IBC는 2024판이 현행이다. 2027판은 2027-01 출간 예정.
- 인정하는 출처:
  - 코드: ICC 원문(codes.iccsafe.org), UpCodes의 **무수정 채택본** 모델 코드
  - 표준과 기관: ASTM, ACI, AWC, BIA(gobrick.com), TMS, PCA
  - 영국: MPA/Mortar Industry Association, gov.uk Approved Documents, HSE
  - 제조사: 현행 데이터시트와 SDS (Quikrete, Sakrete 등)
  - 안전: OSHA, NIOSH
- 인정하지 않는 출처: 블로그, 포럼, DIY·시공업체 마케팅 페이지, AI 요약 사이트, 위키성 2차 정리.
- 원문에 접근하지 못했으면 그렇다고 기록한다(history.md). 추측으로 채우지 않는다.

## 2. 출처 없는 내용은 다듬지 말고 뺀다

- 다음은 근거가 없으면 삭제한다. 다른 말로 바꿔 남기지 않는다.
  - 최상급: "가장 흔한", "most common", "leading cause"
  - 전언: "전문가들은", "흔히 ~하더라", "inspectors usually"
  - 출처 없는 역사 이야기나 수치
- **예외:** 실제로 널리 쓰이는 관행 수치는 남긴다(예: 콘크리트 1:2:3 부피비, 계단 Rise + Run ≈ 17–18″). 단, "rule of thumb / 관행이며 표준이 아님"을 명시한다.

## 3. 수치와 표현

- 모든 계산, 단위 환산, 반올림은 직접 다시 계산한다(`node -e`). 반올림 방향(올림/내림)도 확인한다.
- 코드 조항 번호는 현행판 번호로 쓴다. 확인하지 못하면 번호 없이 조항 이름만 쓴다.
- "must / required"는 코드나 표준의 요구사항에만 쓴다. 권장사항과 관행은 권장이라고 쓴다.
- 지역을 구분한다: US(IRC, ASTM)와 UK(Approved Document, BS EN, MPA)를 섞어 단정하지 않는다.
- 제조사 수치는 제품마다 다르다고 쓴다("Quikrete 80 lb Concrete Mix 기준", "포장에 적힌 양을 따르세요").
- 안전 정보는 SDS, OSHA, NIOSH 문구를 기준으로 쓴다. 위험을 축소하지 않는다.

## 4. 페이지 안팎의 일관성

수치 하나를 바꾸면 아래를 모두 확인한다.

- 본문, 표, FAQ(`faqs` 배열은 JSON-LD로도 나간다), articleSchema 설명
- 메타 title/description(`app/guides/[slug]/page.tsx`), 가이드 목록 카드(`app/guides/page.tsx`)
- 관련 계산기의 로직, notice, FAQ(`app/<calc>/`): 가이드와 계산기가 다른 기준을 쓰면 안 된다.
- 같은 내용을 다루는 다른 가이드(`grep`으로 찾는다)

## 5. 작업 마무리 체크리스트

1. 바꾼 가이드의 `dateModified`와 `app/sitemap.ts` 날짜를 갱신한다(계산기 페이지 포함).
2. `npx eslint .`, `npx tsc --noEmit -p .`를 실행하고, 큰 변경이면 `npx next build`까지 실행한다.
3. `history.md`에 무엇을 고쳤는지, 쓴 출처, 남긴 백로그를 적는다.
4. 커밋과 푸시 후 배포가 끝나면 바뀐 URL만 IndexNow로 제출한다. Git Bash에서는 `MSYS_NO_PATHCONV=1 npm run indexnow -- /path ...`로 실행하고 200 OK를 확인한다.
5. 서브에이전트에 작업을 맡길 때는 이 문서의 규칙을 프롬프트에 그대로 전달한다.
