# MoneyDecoded 프로젝트 현황 (2026.04.25 v4 업데이트)

---

## ⚠️ Claude에게 — 반드시 읽을 것

**이 프로젝트의 기획은 Claude가 담당한다.**
운영자(Song Chang Hun)는 한국어만 가능하며 영어 작업 전담이 불가하다.
Claude가 방향을 제시하고, 무엇을 만들지 결정하고, 코드를 작성한다.
"어떻게 할까요?" 라고 묻기 전에 먼저 판단하고 제안할 것.

**토큰 절약 원칙**
- 대화가 길어지면 컨텍스트가 날아간다. 새 채팅 시작 시 반드시 이 파일을 올려달라고 안내할 것.
- 파일 수정은 python 스크립트로 일괄 처리할 것 (str_replace 반복 금지)
- 미리보기로 모바일 렌더링 확인하지 말 것 — 실제 브라우저에서만 확인 가능
- **작업 전 반드시 모든 파일 구조를 처음부터 끝까지 세세하게 파악하고 한번에 처리할 것**

**작업 금지 사항**
- Reddit 등 SNS 활용 금지 (단기 트래픽만 올라가고 부작용 있음)
- 트래픽 없는 상태에서 무리하게 구조 변경 금지
- 승인 대기 중인 네트워크 링크 임의 삽입 금지

---

## 기본 정보
- **운영자**: Song Chang Hun (canghun13@naver.com)
- **거주지**: 부산광역시 수영구 광안해변로15번길 68 뉴비치아파트 509동 1005호
- **전화**: +82 10-7734-3755
- **목표**: 미국 대상 영어 금융 블로그 + 툴 사이트로 제휴 수익 창출
- **언어**: 한국어만 가능 (영어 불가 — Claude가 모든 영문 작업 담당)

---

## 사이트 구조
- **블로그**: https://www.moneydecoded.net (Blogger 기반, 영어 금융 뉴스 해설, 하루 3개 포스팅 자동화)
- **툴 사이트**: https://tools.moneydecoded.net (GitHub Pages 기반, 금융 계산기 + 비교 페이지)
- **한국어 툴**: https://kr-tools.moneydecoded.net (후발주자 — 영어판 자리잡은 후 확장)
- **블로그 자동화**: app.py (Flask + Gemini API + Blogger API)

---

## 완료된 툴 사이트 파일 (총 13개)
| 파일 | 설명 | 비고 |
|---|---|---|
| index.html | 메인 허브 (탭 방식) | 수정 불필요 |
| remittance-compare.html | 국제 송금 비교 | 구조 달라서 header 수정 제외 |
| mortgage-calculator.html | 모기지 계산기 | **기준 파일** |
| tax-bracket-calculator.html | 세금 구간 계산기 | |
| inflation-calculator.html | 인플레이션 계산기 | |
| net-worth-calculator.html | 순자산 계산기 | |
| 401k-calculator.html | 401k 은퇴 계산기 | |
| budget-calculator.html | 50/30/20 예산 계산기 | |
| rent-vs-buy-calculator.html | 렌트 vs 구매 비교 계산기 | |
| emergency-fund-calculator.html | 비상금 계산기 | |
| debt-payoff-calculator.html | 부채 상환 계산기 | |
| best-hysa-rates.html | 고금리 예금 계좌 비교 | |
| best-cd-rates.html | CD 금리 비교 | ✅ 오늘 신규 추가 |

---

## header 표준 구조 — mortgage-calculator.html 기준

**반드시 mortgage 기준으로 맞출 것. 새 파일 만들 때도 동일하게.**

```html
<div class="disclosure">
  <strong>Advertiser Disclosure:</strong> MoneyDecoded may earn a commission when you click affiliate links. This does not affect our editorial independence or the rates shown.
</div>

<header>
  <div class="header-top">
    <a href="https://moneydecoded.net" class="logo">Money<span>Decoded</span></a>
    <a href="https://moneydecoded.net" class="header-blog-cta">📰 Read the Blog →</a>
  </div>
</header>
<div class="header-nav-outer">
  <nav class="header-nav">
    <a href="https://tools.moneydecoded.net">← All Tools</a>
    <a href="https://tools.moneydecoded.net/mortgage-calculator.html">Mortgage</a>
    <a href="https://tools.moneydecoded.net/budget-calculator.html">Budget</a>
    <a href="https://tools.moneydecoded.net/rent-vs-buy-calculator.html">Rent vs Buy</a>
    <a href="https://tools.moneydecoded.net/emergency-fund-calculator.html">Emergency Fund</a>
    <a href="https://tools.moneydecoded.net/remittance-compare.html">Wire Transfer</a>
    <a href="https://tools.moneydecoded.net/debt-payoff-calculator.html">Debt Payoff</a>
    <a href="https://tools.moneydecoded.net/tax-bracket-calculator.html">Tax Bracket</a>
    <a href="https://tools.moneydecoded.net/best-hysa-rates.html">Best HYSA</a>
    <a href="https://tools.moneydecoded.net/best-cd-rates.html">Best CD Rates</a>
  </nav>
</div>
```

**공통 CSS**: `header.css` 파일로 분리됨 — 모든 페이지에 `<link rel="stylesheet" href="header.css">` 포함

**header.css 포함 내용:**
- `.disclosure` — 노란 배경 박스
- `header`, `.header-top`, `.logo`, `.logo span`
- `.header-blog-cta`
- `.header-nav-outer`, `.header-nav`, `.header-nav a`, `.header-nav a.active`

---

## 헤더 통일 완료
- 모든 툴 페이지 mortgage 기준으로 완전 통일
- **새 툴 추가 시**: mortgage 헤더 구조 그대로 복사 후 nav active만 변경

---

## 계정 현황

### Payoneer ✅ 완료
- 미국 USD 계좌 (XX-0282) 활성화
- 은행: Citibank / Routing: 031100209 / Account: 70583050002380282
- Account Type: Checking / 명의: Song Chang Hun

### CJ Affiliate ✅ 완료
- 계정 활성화 / Payoneer 연결 / W-8BEN 제출 완료
- **TurboTax** 신청 완료 → Pending
- **LendingTree** 신청 완료 → Pending
- H&R Block, Credible, Fidelity, Wealthfront → CJ에 없음

### Wise ✅ 승인 완료
- Partnerize 승인 / 트래킹 링크 전체 파일 적용 완료
- 커미션: 개인 $10 CPA, 비즈니스 $50 CPA
- 주의: Cookie period 없음 (클릭 즉시 전환 필요)

### Impact ⚠️ Marketplace 거절
- 사이트 등록 및 인증 완료
- Marketplace 신청 → **Declined** (트래픽 부족)
- **트래픽 월 1,000+ 되면 재신청 예정**
- Wealthfront, OFX, SoFi 신청은 Impact 통해야 함

### FlexOffers ⏳ 심사 대기 중
- 계정: canghun13@naver.com
- 사이트 인증 완료
- **영업일 5일 내 이메일로 결과 옴**
- 승인 나면 즉시: **H&R Block**, **Remitly**, **Ally** 신청

---

## 네트워크 조사 결과 (오늘 완료)
| 브랜드 | 네트워크 | 커미션 | 비고 |
|---|---|---|---|
| OFX | Impact | 비공개 (협상제) | Impact 재신청 후 |
| SoFi | Impact | $75~$300 per lead, 쿠키 30일 | Impact 재신청 후 |
| Marcus | 없음 | - | 정보성으로만 표시 |
| Ally | CJ + FlexOffers | $25~$50, 쿠키 45일 | FlexOffers 승인 후 신청 |

---

## 제휴 플레이스홀더 현황
| 파일 | 브랜드 | 상태 |
|---|---|---|
| remittance-compare.html | Wise | ✅ 완료 |
| remittance-compare.html | Remitly | FlexOffers 승인 후 신청 |
| mortgage-calculator.html | LendingTree | CJ Pending |
| tax-bracket-calculator.html | TurboTax | CJ Pending |
| tax-bracket-calculator.html | H&R Block | FlexOffers 승인 후 신청 |
| best-hysa-rates.html | Wealthfront | Impact 재신청 후 |
| best-hysa-rates.html | Ally | FlexOffers 승인 후 신청 |
| best-cd-rates.html | Wealthfront | Impact 재신청 후 |
| best-cd-rates.html | SoFi | Impact 재신청 후 |

---

## 다음 할 일

### 1순위 — FlexOffers 승인 나면 즉시

### 2순위 — FlexOffers 승인 나면 즉시
- H&R Block, Remitly, Ally 신청 → 각 페이지 링크 삽입

### 3순위 — CJ 승인 나면 즉시
- TurboTax, LendingTree 링크 삽입

### 4순위 — 트래픽 월 1,000+ 후
- Impact Marketplace 재신청 → Wealthfront, OFX, SoFi 신청

### 5순위 — 5/20 애드센스 신청
- 블로그(moneydecoded.net)에 신청

### 6순위 — 추가 툴 제작
- Savings Rate Calculator

---

## app.py 주요 현황
- RSS 기반 뉴스 수집 → Gemini 리라이팅 → Blogger 자동 발행
- 페이월 도메인 차단 (NYT, WSJ, FT, Bloomberg 등)
- TAG_MAP으로 관련 툴 CTA 배너 자동 삽입
- **오늘 수정**: 뉴스 2개만 뜨는 버그 수정 (summary HTML 태그 필터 개선)
- **오늘 추가**: HYSA/CD 관련 키워드 TAG_MAP에 추가

---

## Blogger 템플릿 현황
- FlexOffers 인증 meta 태그 삽입됨 (`<head>` 바로 아래) — 삭제 금지
```html
<meta name="fo-verify" content="d50cc7e5-290b-41ff-b7bc-fbd4bc13e7cd" />
```

---

## 트래픽 현황 (2026.04.25)
- 도메인 생성 약 1주일
- 구글 노출 46회, 클릭 8회 (CTR 17.4%)
- 블로그 총 조회 1,020회
- 미국 285 / 한국 221 / 인도 152
- Search Console 등록 완료 / sitemap.xml 제출 완료

---

## 비용 현황
- 도메인 2개: 연 약 $30~40
- Claude 구독: 월 $20 (연 $240)
- **월 손익분기점: 약 $23 (Wise 전환 3건)**
- 1년 총 고정비: 약 $270~280 (약 37만원)
- **목표: 1년 후 월 $100**

---

## 오늘 작업 내역 (2026.04.25)
- app.py 뉴스 2개만 뜨는 버그 수정
- app.py TAG_MAP에 HYSA/CD 키워드 추가
- best-cd-rates.html 신규 제작
- 네트워크 조사: OFX(Impact), SoFi(Impact), Marcus(없음), Ally(FlexOffers/CJ)
- 전체 툴 페이지 header.css 공통 파일로 분리
- nav 표준화 (Tax Bracket 추가, active 클래스 통일)
- HYSA/CD Rates disclosure 노란 박스 적용
- HYSA/CD 헤더 폰트(DM Sans 15px), 폰트패밀리 mortgage 기준 완전 통일 완료
