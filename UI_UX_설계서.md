# CMS 2.0 UI/UX 설계서

> 작성일: 2026-06-10  
> 대상 브랜치: `claude/funny-lovelace-bW71R`  
> 접근 가능 메뉴: **프로덕트**, **편성표** (GNB 접근 제한 적용)

---

## 1. GNB (Global Navigation Bar)

### 접근 제한 정책
- 현재 활성 메뉴: **프로덕트**, **편성표**
- 비활성 메뉴(대시보드, 미디어, 콘텐츠, 모니터링, 스케줄): `opacity: 0.4`, `pointer-events: none`, `cursor: not-allowed`
- CSS 클래스 `.nav-item.disabled` / `.gnb-nav li.gnb-disabled > a` 로 제어

### 드릴다운 내비게이션 구조
```
프로덕트 목록 → 프로덕트 상세 → 프로덕트 편집
                              → 플레이플랜
                              → 월간 편성표 → 일간 편성표
미디어 월간 편성표 → 미디어 일간 편성표
```
편성표 페이지에서 미디어/프로덕트 드롭다운 선택으로 화면 전환을 지원합니다.

---

## 2. 프로덕트 목록 (`product-list.html`)

### 현황판 (Board) 레이아웃
- **편성 상태 현황판** / **프로덕트 상태 현황판** 두 섹션의 카드 높이 일치
- 구현: `.dashboard-board { align-items: stretch }` + `.board-section { display:flex; flex-direction:column }` + `.board-cards { flex:1 }`

---

## 3. 프로덕트 등록 (`product-register.html`)

### 전체 레이아웃
- `content-inner`의 `max-width` 제거 → 화면 전체 너비 활용
- 반응형 미디어쿼리 적용:
  - `≤ 900px`: form-row 2열 → 1열
  - `≤ 700px`: 패딩 축소, 미디어 섹션 단일 컬럼

### 광고 옵션 그리드
```css
display: grid;
grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
gap: 6px;
```
화면 넓이에 따라 자동으로 열 수 조정

### 미디어 선택 섹션
- 레이아웃: `grid-template-columns: 1fr 1fr` (미디어 리스트 : 지도 = 1:1)
- 지도 SVG 높이: `420px` (미디어 리스트 높이와 동일)

#### 미디어 리스트 (테이블 형식)
| 열 | 내용 |
|---|---|
| (체크박스) | 선택 |
| 미디어명 | 이름 + 주소 (2줄) |
| 설치유형 | 실외·세로형 등 |
| 운영시간 | 07:00~22:00 등 |
| 사이클 | 600초 등 |
| 기준슬롯 | 30초 × 20 등 |
| 센서 | 날씨/타겟/시간 배지 |
| 상태 | 초록/회색 점 |

- 헤더 sticky (`position: sticky; top: 0`)
- 행 클릭으로 선택/해제 (체크박스와 행 클릭 모두 지원)
- 선택된 행: 연두 배경 (`#F0F9F1`)

### 핀 호버 툴팁 (미디어 지도)
- 트리거: 지도 위 핀(`.map-pin`) `onmouseenter` / `onmouseleave`
- 레이아웃 (세로형 플렉스):
  1. **상단**: 미디어명(bold) + 주소(gray)
  2. **하단**: 미디어 사진 (`width: 160px`, `height: 100px`, 회색 placeholder)
- 위치: 핀 오른쪽에 표시, 화면 오른쪽 끝에 걸리면 왼쪽으로 전환
- CSS: `.media-map-tooltip { width:160px; border-radius:10px; box-shadow:... }`

---

## 4. 프로덕트 상세 (`product-detail.html`)

### 포함 미디어 카드 (`media-card`)
- 좌측 상태 보더: `border-left: 3px solid #58C65D` (온라인) / `#CED2D6` (오프라인)
- 스펙 4열 그리드: `.media-specs { display:grid; grid-template-columns:1fr 1fr 1fr 1fr }`
- 카드 푸터: 평균 슬롯 사용률 바 인라인 + 편성표 링크
  - 라벨: **"평균 슬롯 사용률"** (평균값임을 명시)

### 핀 호버 툴팁 (미디어 위치 지도)
- product-register와 동일한 세로형 구조
- CSS 클래스: `.map-pin-tooltip`, `.map-pin-tooltip-inner`, `.map-pin-tooltip-info`, `.map-pin-tooltip-img`
- JS: `showMapPinTooltip(e, name, addr)` / `hideMapPinTooltip()`

---

## 5. 월간 편성표 공통 패턴

### 헤더 바 구조
```
[뒤로가기] [미디어명/프로덕트명 드롭다운▾] [날짜 범위] [← →]
─────────────────────────────────────────────────
[달력]                        [오늘의 스케줄 패널]
```
- 헤더 상단 여백: `padding-top: 36px`
- 이름 표시: `<select>` + `appearance: none` → 드롭다운으로 즉시 교체 가능

### 달력 인터랙션
| 동작 | 결과 |
|---|---|
| 날짜 호버 | 해당 날짜의 스케줄 리스트 툴팁 팝업 (셀 우측에 표시) |
| 날짜 클릭 | 우측 스케줄 패널 갱신 + 셀 body 배경 `#DEDEDE` |
| 스케줄 4개 이상 | "외 N개" 접힘 표시 |

- 선택 날짜 스타일: `.cal-cell.selected .cal-cell-body { background: #DEDEDE }` (stroke 없음)
- 툴팁 위치: `position: fixed`, 셀 오른쪽 기본 → 화면 우측 넘으면 왼쪽 전환

---

## 6. 미디어 월간 편성표 (`schedule-media-month.html`)

### 헤더
- 드롭다운: `<select id="mediaSelect" onchange="onMediaChange(this.value)">`
- 옵션 예시: 강남역 1번출구 A / B / 2번출구
- `onMediaChange()` 로 `MEDIA_INFO` 객체에서 미디어 정보 갱신

### 제거된 요소
- 우측 패널에서 중복 미디어 정보 카드 제거
- 페이지 상단의 "미디어 편성표 / 미디어별 월간 편성 현황을 확인합니다." 안내 텍스트 제거

---

## 7. 프로덕트 월간 편성표 (`schedule-product-month.html`)

### 헤더
- 드롭다운: `<select id="productSelect" onchange="onProductChange(this.value)">`
- `onProductChange()` 로 `PRODUCT_HEADER_INFO` 객체에서 정보 갱신

### 제거된 요소
- 우측 패널에서 중복 프로덕트 정보 카드 제거
- 달력 툴바에서 프로덕트명 표시 + 변경 버튼 제거 (헤더 드롭다운으로 통합)

---

## 8. 일간 편성표 (`schedule-media-day.html`, `schedule-product-day.html`)

- `padding-top: 36px` 적용 (월간과 통일)
- 프로덕트 일간 편성표: 사이클 구간 위 시보광고 슬롯 제거

---

## 9. 디자인 시스템 요소

### 색상
| 용도 | 값 |
|---|---|
| 온라인 상태 | `#58C65D` |
| 오프라인 상태 | `#CED2D6` |
| 선택 날짜 fill | `#DEDEDE` |
| 선택 미디어 행 배경 | `#F0F9F1` |
| 비활성 GNB | `opacity: 0.4` |

### 센서 배지
| 센서 | 배경 | 텍스트 |
|---|---|---|
| 날씨 | `#E8F5FF` | `#1A7CC0` |
| 타겟 | `#FFF0E8` | `#C05A1A` |
| 시간 | `#F0EEFF` | `#5B3EC0` |

### 공통 컴포넌트
- **상태 점** (`.status-dot`): 8px 원형, online/offline 색상
- **핀 툴팁**: 160px 너비, 세로 플렉스, 이름+주소 상단 / 사진(100px) 하단
- **편성표 툴팁**: `position:fixed`, 셀 우측 8px 간격, max 5개 스케줄 표시 후 접힘

---

## 10. 파일별 변경 이력 요약

| 파일 | 주요 변경 |
|---|---|
| `assets/css/cms.css` | GNB 비활성 스타일 추가 |
| `pages/product-list.html` | 현황판 카드 높이 일치, GNB 제한 |
| `pages/product-register.html` | 반응형 레이아웃, 광고옵션 그리드, 지도 확대, 미디어 테이블, 핀 툴팁 |
| `pages/product-detail.html` | 미디어 카드 재설계, 핀 툴팁 |
| `pages/product-edit.html` | GNB 제한 |
| `pages/product-playplan.html` | GNB 제한 |
| `pages/schedule-media-month.html` | 헤더 드롭다운, 툴팁, 선택 날짜 fill, padding-top |
| `pages/schedule-product-month.html` | 헤더 드롭다운, 툴팁, 선택 날짜 fill, padding-top, GNB 제한 |
| `pages/schedule-media-day.html` | padding-top |
| `pages/schedule-product-day.html` | padding-top, 시보광고 슬롯 제거 |
| `pages/schedule-cycle-edit.html` | GNB 제한 |
| `pages/schedule-register-form.html` | GNB 제한 |
| `pages/schedule-main.html` | GNB 제한 |
