# CMS 대시보드 — 디자인 시스템

## 개요

이 CMS 대시보드는 **굵은 녹색 사이드바와 절제된 파란색 액션 계층을 중심으로 구성된, 데이터 밀도가 높은 관리 인터페이스**입니다. 애플리케이션 쉘은 세 영역의 고정 구조로 이루어져 있습니다 — SVG 아이콘 네비게이션이 담긴 좁은 녹색 사이드바, 수평 페이지 탭을 갖춘 흰색 유틸리티 헤더, 실제 데이터 콘텐츠를 담는 밝은 회색 콘텐츠 섹션. 전체 UI는 모든 페이지에서 이 구조를 기반으로 합니다.

색상 언어는 두 역할로 명확히 분리됩니다. **브랜드 그린** (`{colors.brand-nav}` — #58C65D)은 네비게이션 크롬과 인증 화면을 담당하고, **인터랙티브 블루** (`{colors.interactive-primary}` — #409EFF)는 페이지 내 모든 액션 — 버튼, 활성 인디케이터, 페이지네이션, 토글 스위치, 탭 선택 — 을 담당합니다. 이 두 색상 계열은 절대 경쟁하지 않으며, 페이지의 서로 다른 영역에서만 사용됩니다.

데이터 표시가 핵심 목적입니다. 대부분의 페이지에서 테이블이 지배적이며, 테이블 시스템은 일관되고 조용합니다 — 얇은 `#EBEEF5` 헤어라인 테두리, `#F5F7FA` 배경 위의 `#909399` 회색 헤더 텍스트, `#000000` 본문 데이터. 메인 및 하위 페이지의 테이블형 콘텐츠 위에는 상태 요약 카드(State Panel)가 나타나며, 단일 대형 숫자를 표시합니다. 활성화된 카드는 `{colors.interactive-action}` (#0277EF)으로 전환되며, 이 색상은 시스템 전체의 하이라이트 유틸리티 색상으로도 사용됩니다.

타이포그래피 시스템은 네 가지 웨이트(300, 400, 500, 700)의 HelveticaNeue를 사용합니다. 웨이트 400은 모든 본문 및 데이터 콘텐츠의 핵심입니다. 웨이트 700은 페이지 제목 헤딩과 상태 카운터 수치에만 사용됩니다. 웨이트 300은 상태 카드 레이블, 로그인 링크 텍스트 등 눈에 띄지 않아야 하는 맥락에 사용됩니다. 웨이트 500은 `.article-title`(섹션 헤딩)과 `.btn-round`에만 등장합니다. 기본 폰트 페이스에는 웨이트 600이 없으며, 로그인 버튼만 합성으로 사용합니다.

반응형 동작은 단일 범위인 **768px–1439px**만 지원합니다. 모바일 브레이크포인트는 없습니다. 이 시스템은 데스크톱 우선 관리 도구로, 소형 데스크톱과 태블릿 화면에서 적당히 축소됩니다.

**핵심 특성:**
- 3존 애플리케이션 쉘: 녹색 사이드바(96px) + 흰색 헤더 + 회색 콘텐츠 영역 — 모든 페이지가 이 구조를 사용합니다.
- 2색 시스템: 브랜드 그린(#58C65D)은 네비게이션 크롬용, 인터랙티브 블루(#409EFF)는 모든 페이지 내 액션용. 두 색상은 절대 겹치지 않습니다.
- 단일 `0.25s ease` 트랜지션이 시스템의 모든 애니메이션을 지배합니다 — 버튼, 오버레이, 네비게이션 아이콘, 드롭다운.
- 테이블 중심 데이터 표현. 테이블 시스템이 코드베이스에서 가장 발전된 컴포넌트입니다.
- State Panel 카드가 대부분의 데이터 뷰 상단에 위치합니다 — 활성화 시 `{colors.interactive-action}` (#0277EF)으로 전환되는 대형 굵은 숫자 카운터.
- 모바일 브레이크포인트 없음. 768–1439px 단일 반응형 범위; 데스크톱(≥1440px)이 기본 레이아웃입니다.
- 모든 인터랙티브 호버 상태는 색상을 반전시킵니다 — 색상이 있는 버튼은 흰색 배경에 색상 텍스트/테두리로 전환됩니다. 이것이 보편적인 호버 문법입니다.
- 네비게이션 활성 인디케이터는 회전된 정사각형(다이아몬드)입니다 — 밑줄도, 알약도 아닌 — 콘텐츠 영역으로 튀어나오는 형태.

---

## 색상

> **분석한 소스 파일:** layout.css, components.css, auth.css, main.css, contents.css, device.css, admin.css, monitor.css, schedule.css, reset.css

### 브랜드 & 네비게이션
- **브랜드 네비 그린** (`{colors.brand-nav}` — #58C65D): 사이드바 배경, 로그인 폼 테두리와 버튼 색상, 인증 화면의 토글 활성 상태. 이 색상이 곧 브랜드입니다. 인증된 앱 내부에는 등장하지 않습니다.
- **네비 아이콘 기본** (`{colors.brand-nav-icon-default}` — #328935): 선택되지 않은 네비 아이콘의 SVG path 색상. 사이드바 자체보다 더 어둡고 채도가 높은 녹색.
- **네비 아이콘 호버** (`{colors.brand-nav-icon-hover}` — #0B4E0D): 아이콘 호버 시 딥 포레스트 그린. `#58C65D` 사이드바 대비 최대 명도 차이.
- **네비 아이콘 활성** (`{colors.brand-nav-icon-active}` — #FFFFFF): 활성 네비 아이콘은 흰색으로 전환. 배경의 활성 인디케이터 다이아몬드가 공간적 기준점을 제공합니다.
- **로그인 호버** (`{colors.brand-nav-hover}` — #89D58C): 로그인 제출 버튼 호버 상태에만 사용되는 밝은 녹색 틴트.
- **온라인 / 활성 사용자** (`{colors.brand-online}` — #0FB716): 헤더의 사용자 이름 링크와 로그인 버튼 포커스 상태 텍스트. "온라인" 상태를 위한 순수 신호 녹색.

### 인터랙티브 (파란색)
- **인터랙티브 프라이머리** (`{colors.interactive-primary}` — #409EFF): 페이지 내 단일 인터랙티브 색상. `btn-primary`를 채우고, 활성 탭 밑줄, 페이지네이션 활성 링크, 토글 스위치, 날짜 선택기 선택 상태, 모든 `.tag` 링크, 활성 서브네비 배경에 사용됩니다. 콘텐츠 영역의 모든 "클릭 가능" 신호가 이 파란색입니다.
- **인터랙티브 액션** (`{colors.interactive-action}` — #0277EF): `.highlight` 유틸리티 클래스, State Panel 활성 카운터 텍스트, 태그 링크 호버, SW 업데이트 제출 안내 텍스트에 사용되는 약간 더 깊은 파란색. 회원가입 문서 목록의 파일명에도 사용됩니다.
- **인터랙티브 라이트** (`{colors.interactive-light}` — #B3D8FF): `.btn-plain`의 테두리 색상과 `.btn-wrap` 활성 테두리 색상. `.btn-plain`의 호버 채움 색상이기도 합니다.
- **인터랙티브 배경** (`{colors.interactive-bg}` — #ECF5FF): `.btn-wrap` 활성 세그먼트 채움과 `.bg-primary` 유틸리티 클래스.
- **인터랙티브 배경 서틀** (`{colors.interactive-bg-subtle}` — rgba(64,158,255,0.16)): 활성 서브네비 링크의 매우 옅은 파란색 알약 배경.
- **인터랙티브 호버** (`{colors.interactive-hover}` — #D8E7F7): 날짜 선택기 달력 셀 개별 호버 상태.
- **광고 하이라이트** (`{colors.interactive-ad-bg}` — #F0F7FF): 이미 예약된 콘텐츠가 있는 달력 날짜 셀에 적용되는 매우 옅은 파란색 배경.

### 상태 / 시맨틱
- **위험** (`{colors.status-danger}` — #FF0000): `.danger` 유틸리티 클래스, 사용자 아이콘의 알림 점, 폼의 필수 항목 별표.
- **가능** (`{colors.status-available}` — #52B65C): 달력 날짜 가용성 인디케이터 점 (녹색 = 슬롯 여유 있음).
- **불가** (`{colors.status-unavailable}` — #EB6A4E): 달력 날짜 불가 점과 SubState Panel 카드의 에러 상태 테두리.
- **차트 시리즈 1** (`{colors.chart-series-1}` — #59A0E9): 일정 그래프 범례 표시 사각형. 인터랙티브 블루와 구별되는 탈채도 코발트 블루.

### 서피스
- **앱 배경** (`{colors.surface-app-bg}` — #171717): 최외곽 `html/body` 배경. 1920px 최대 너비 콘텐츠 영역을 감싸는 거의 검정에 가까운 색상.
- **섹션 배경** (`{colors.surface-section}` — #ECECEC): 콘텐츠 영역 배경 — 모든 스크롤 가능한 페이지 서피스. 네비 활성 다이아몬드 인디케이터 채움으로도 사용되어 "관통하는" 시각적 착시 효과를 만듭니다.
- **화이트** (`{colors.surface-white}` — #FFFFFF): 헤더, article 카드, 모달 콘텐츠, 모든 폼 인풋, 버튼 호버 상태.
- **인풋 배경** (`{colors.surface-input}` — #F4F4F5): 검색 바, 날짜 선택기, 콘텐츠 영역 내 폼 수준 검색 필드.
- **헤더 검색 배경** (`{colors.surface-input-header}` — #F4F4F4): 헤더 검색 인풋 전용 — `F4F4F5`보다 미세하게 어두운 색상.
- **테이블 헤더 배경** (`{colors.surface-table-header}` — #F5F7FA): `<th>` 셀 배경과 날짜 선택기 컬럼 헤더.
- **썸네일 플레이스홀더** (`{colors.surface-thumbnail}` — #C4C4C4): 이미지 업로드 전 콘텐츠 추가 썸네일 슬롯의 회색 채움.
- **결과 푸터** (`{colors.surface-result-footer}` — #E0E0E0): 회원가입 결과 페이지 푸터 밴드.
- **State Panel 컨테이너** (`{colors.surface-state-bg}` — rgba(132,132,132,0.2)): State Panel 카드들을 묶는 반투명 알약 컨테이너.

### 테두리 & 헤어라인
- **테두리 기본** (`{colors.border-default}` — #D3D4D6): 일반 인풋, 셀렉트, 검색 컨트롤 테두리.
- **테두리 테이블** (`{colors.border-table}` — #EBEEF5): 전체 테이블 셀 테두리. 발송 메일의 `fromTo-cells` 컨테이너에서는 3px 두께로 사용.
- **테두리 서틀** (`{colors.border-subtle}` — #DCDFE6): 텍스트에리어, 탭 네비, 셀렉트 모달 목록 테두리. `{colors.border-default}`보다 약간 부드러운 색상.
- **테두리 구분선** (`{colors.border-divider}` — #E3E3E3): 기본(에러가 아닌) 상태의 SubState 카드 테두리.
- **테두리 구분자** (`{colors.border-separator}` — #878787): State Panel 카드 레이블 텍스트 아래의 밑줄.
- **테두리 지도** (`{colors.border-map}` — #D6D6D6): Google Map iframe 및 사이트 사진 썸네일 테두리.
- **테두리 드롭다운** (`{colors.border-dropdown}` — #ECECEC): 사용자 드롭다운 캐럿 가상 요소 테두리 — 섹션 배경과 동일하여 보이지 않는 이음새 효과.

### 텍스트
- **텍스트 프라이머리** (`{colors.text-primary}` — #000000): 모든 테이블 `<td>` 데이터, 모달 본문 텍스트, 활성 네비 링크 텍스트.
- **텍스트 세컨더리** (`{colors.text-secondary}` — #909399): 폼 레이블, 테이블 `<th>` 헤더, 비활성 탭 텍스트, 결과 페이지 섹션 제목.
- **텍스트 뮤트** (`{colors.text-muted}` — rgba(0,0,0,0.6)): 비활성 헤더 네비 링크.
- **텍스트 서브네비** (`{colors.text-subnav}` — rgba(0,0,0,0.5)): 서브네비 알약 링크 텍스트.
- **텍스트 페이지 타이틀** (`{colors.text-page-title}` — #989898): `.header-title` 페이지 이름 — 방향 정보로 읽히도록 의도적으로 눈에 띄지 않는 색상.
- **텍스트 비활성화** (`{colors.text-disabled}` — #838383): 로그아웃 메뉴 항목 텍스트.
- **텍스트 그레이** (`{colors.text-gray}` — #808080): 페이지네이션 이전/다음 버튼, 로그인 저작권 및 링크 텍스트.
- **텍스트 모달 타이틀** (`{colors.text-modal-title}` — #303133): 모달 `<h1>` 헤더 전용 — 세컨더리 텍스트보다 어둡고 프라이머리보다 밝은 중간 색상.
- **텍스트 UI 뮤트** (`{colors.text-ui-muted}` — #606266): `.btn-wrap` 비활성 세그먼트 텍스트와 wrap-title 레이블.
- **텍스트 플레이스홀더** (`{colors.text-placeholder}` — #D9D9D9): 인풋 플레이스홀더 텍스트.
- **텍스트 노트** (`{colors.text-note}` — #9B9B9B): 회원가입 폼 푸터 안내 텍스트.
- **텍스트 달력** (`{colors.text-calendar}` — #909090): 달력 슬롯 수 레이블 (날짜 아래 표시되는 "잔여 슬롯" 숫자).

---

## 타이포그래피

### 폰트 패밀리
- **기본 폰트**: `HelveticaNeue, sans-serif` — `../fonts/`에서 네 개의 `@font-face` 선언으로 로드되는 커스텀 웹폰트. 네 가지 폰트 페이스: Thin(300), Light(400), Medium(500), Bold(700). 시스템의 모든 요소가 이 폰트 스택을 기본으로 사용합니다.
- **웨이트 계층**: 300 / 400 / 500 / 700. 웨이트 600은 별도의 폰트 페이스로 정의되지 않으며, 로그인 제출 버튼에서만 브라우저 합성으로 사용됩니다.
- **기본 크기**: `html/body`에서 `14px` (데스크톱); 768–1439px에서 `12px`.

### 타이포그래피 계층

| 토큰 | 크기 | 행간 | 웨이트 | 색상 | 용도 |
|---|---|---|---|---|---|
| `{typography.page-title}` | 28px | 34px | 700 | #989898 | `.header-title` — 페이지 정체성, 항상 뮤트 회색 |
| `{typography.section-title}` | 18px | 22px | 500 | #000000 | `.article-title` — 섹션 카드 헤딩 |
| `{typography.nav-primary}` | 18px | 22px | 300 | rgba(0,0,0,0.6) | 헤더 네비 링크 (비활성) — 웨이트 300이 수동적 네비게이션 신호 |
| `{typography.modal-title}` | 17px | 24px | 400 | #303133 | 모달 헤더 h1 |
| `{typography.login-button}` | 20px | 24px | 600 | #FFFFFF | 로그인 제출 버튼 — 유일한 웨이트 600 사용 |
| `{typography.body}` | 14px | 17px | 400 | #000000 | 기본 본문, 인풋, 테이블 `<th>`, btn-sm, 페이지네이션, 일부 레이블 |
| `{typography.body-table}` | 13px | 23px | 400 | #000000 | 테이블 `<td>`, btn-sm2, 탭 네비 링크, 콘텐츠 영역 본문 |
| `{typography.body-small}` | 12px | 14px | 400 | #409EFF | 브레드크럼, 서브네비 링크 |
| `{typography.caption}` | 11px | 13px | 500 | #949494 | 그래프 범례 — 섹션 타이틀 외 유일한 웨이트 500 텍스트 |
| `{typography.label}` | 14px | 17px | 400 | #909399 | 폼 레이블, `.span-label` — 표준 폼 주석 크기 |
| `{typography.state-counter}` | 30px | 43px | 700 | #000000 | State Panel `<h1>` 카운터 — UI에서 가장 큰 텍스트 |
| `{typography.state-label}` | 14px | 17px | 300 | #000000 | State Panel 카드 레이블 — 웨이트 300이 보조 맥락 신호 |
| `{typography.calendar-title}` | 24px | auto | 400 | inherit | FullCalendar 툴바 월/연도 제목 |
| `{typography.alert-body}` | 16px | 19px | 300 | inherit | 알림 모달 본문 단락 — 웨이트 300으로 부드러운 정보 전달 |
| `{typography.mini}` | 11px | 19px | 400 | inherit | `.btn-mini` — 가장 작은 버튼 크기 |

### 반응형 스케일 (768–1439px)

전역 `font-size`가 `14px`에서 `12px`로 감소합니다. 주요 오버라이드:

| 요소 | 데스크톱 | 반응형 |
|---|---|---|
| `.header-title` | 28px | 20px |
| 헤더 네비 링크 | 18px | 12px |
| 헤더 서브네비 링크 | 12px | 10px |
| `.article-title` | 18px | 13px |
| `<th>` | 14px | 10px |
| `<td>` | 13px | 10px |
| `.modal-header h1` | 17px | 15px |
| State 카운터 `<h1>` | 30px | 21px |
| State 카드 레이블 | 14px | 10px |
| 폼 레이블 | 14px | 10px |
| 인풋 / 셀렉트 | 14px | 10px |
| `.btn-sm` | 14px | 10px |
| `.btn-round` | 14px | 10px |
| 달력 툴바 | 24px | 17px |
| 로그인 버튼 | 20px | 14px |
| 로그인 인풋 | ~16px | 11px |

### 원칙

- **웨이트 300은 수동적입니다.** 상태 카드 레이블, 로그인 링크, 저작권, 비활성 헤더 네비 링크에 등장합니다. 텍스트가 주장하는 것이 아닌 물러나야 하는 모든 곳에 사용됩니다.
- **웨이트 400이 핵심 웨이트입니다.** 모든 본문 텍스트, 테이블 데이터, 인풋, 모달 타이틀, 대부분의 버튼이 400 웨이트를 사용합니다.
- **웨이트 500은 구조적 헤딩에만 사용됩니다.** `.article-title` 섹션 헤드와 `.btn-round` 버튼. 본문 강조에는 사용하지 않습니다.
- **웨이트 700은 카운터와 페이지 타이틀에만 사용됩니다.** 페이지 타이틀(`.header-title`)과 State Panel 카운터(`<h1>`)가 유일한 700 웨이트 요소입니다. 웨이트 700은 "화면에서 가장 중요한 숫자"를 의미합니다.
- **계층 내에 웨이트 600이 없습니다.** 로그인 버튼을 제외하고, 앱 내부에서 600 웨이트를 사용하지 마십시오.
- **14px가 인터랙티브 요소의 최소 크기입니다.** 인풋, 버튼, 레이블은 모두 데스크톱에서 14px로 동작합니다. 브레드크럼(12px), 서브네비 알약(12px), 그래프 캡션(11px)만 더 작습니다. 인터랙티브 요소는 11px 미만으로 내려가지 않습니다.
- **행간 23px가 테이블 리듬입니다.** `<th>`(14px/23px)와 `<td>`(13px/23px) 모두 동일한 23px 행간을 공유하여, 폰트 크기 차이에도 불구하고 테이블 내부에 안정적인 수직 그리드를 만듭니다.

---

## 레이아웃

### 스페이싱 시스템
- **기본 단위**: 4px. 대부분의 구조적 값은 4의 배수입니다 (8, 12, 16, 20, 24, 36, 48, 60, 148).
- 서브 기본값(3, 5, 6, 7, 9)은 타이포그래피 미세 조정과 반응형 오버라이드에만 등장합니다.
- 시스템에 스페이싱을 위한 CSS 커스텀 프로퍼티가 없습니다 — 모든 값이 하드코딩되어 있습니다.

**추출된 값에서 제안하는 토큰:**

| 토큰 | 값 | 주요 용도 |
|---|---|---|
| `{spacing.xxs}` | 4px | 미세 조정, 브레드크럼 구분자 |
| `{spacing.xs}` | 8px | 반응형 컴팩트 패딩, article-inner 반응형 |
| `{spacing.sm}` | 12px | 아티클 헤더/푸터 마진, 모달 헤더 마진, 기본 레이블 간격 |
| `{spacing.md}` | 16px | 헤더 타이틀 마진, 폼 섹션 간격 |
| `{spacing.lg}` | 24px | 헤더 네비 항목 간격, 헤더 타이틀 상단 마진 |
| `{spacing.xl}` | 36px | 네비 항목 하단 간격, 그리드 행 간격 |
| `{spacing.2xl}` | 50px | 섹션 상단 패딩, 아티클 하단 마진 |
| `{spacing.3xl}` | 60px | State Panel 하단 마진 |
| `{spacing.nav-offset}` | 148px | 섹션 왼쪽 패딩 (96px 네비 + 52px 여백) |

### 애플리케이션 쉘

전체 애플리케이션은 `<body>` 내부의 가운데 정렬된 플렉스 컬럼으로, `#171717` 거의 검정 배경 위에 최대 너비 `1920px`로 제한됩니다.

```
<body>  max-width: 1920px, bg: #171717, display: flex, flex-direction: column
  ├── <nav>     position: absolute, left: 0, width: 96px, height: 100vh, bg: #58C65D
  ├── <header>  width: 100%, bg: #FFFFFF, padding-left: 120px
  └── <section> width: 100%, height: 100%, bg: #ECECEC, padding: 50px 87px 0 148px
```

헤더의 `padding-left: 120px`는 96px 사이드바를 넘어 24px의 여백을 만듭니다. 섹션의 `padding-left: 148px`는 헤더 끝보다 52px 더 들여씁니다 — 이 비대칭 오프셋은 의도적이며 페이지 특유의 왼쪽 마진 리듬을 만듭니다.

### 사이드바 네비게이션

- **너비**: 96px (반응형: 68px)
- **배경**: `{colors.brand-nav}` (#58C65D)
- **로고 영역**: 사이드바 상단, 이미지를 `width: 100%`로 설정
- **아이콘 목록**: `.nav-wrap`, `margin-top: 210px` (반응형: 150px). 각 항목은 `24px` 너비 아이콘, `36px` 하단 마진.
- **활성 인디케이터**: `36×36px` 정사각형을 45° 회전(`transform: rotate(45deg)`)하여 활성 아이콘 오른쪽에 `top: -7px, right: -64px`으로 위치. 배경은 `{colors.surface-section}` (#ECECEC) — 콘텐츠 영역과 동일한 색상 — 으로, 사이드바를 관통하는 다이아몬드 구멍처럼 보이는 착시 효과를 만듭니다. 회전된 정사각형의 `border-radius: 4px`가 약간 둥근 다이아몬드 꼭짓점을 만듭니다.

### 헤더

- **높이**: 패딩(`18px 16px 12px 120px`)과 콘텐츠에 의해 결정. 고정 높이 없음.
- **상단 행** (`.header-ui`): 왼쪽 — 알약형 검색 인풋(`195px × 22px`, border-radius `30px`). 오른쪽 — 사용자 이름 링크 + 알림 아이콘 + 드롭다운.
- **하단 행** (서브 페이지): `.header-title` (페이지 이름, `28px/34px`, `700`, `#989898`) → `.header-nav` (수평 탭 목록) → `.header-subnav` (문맥별 서브네비 알약, 네비 탭 활성 시에만 표시).

### 콘텐츠 섹션

- **배경**: `{colors.surface-section}` (#ECECEC)
- **패딩**: `50px 87px 0 148px` (사이드바 + 여백 확보)
- **독립적으로 스크롤**: `overflow: auto`
- **아티클 블록**: `margin-bottom: 50px`. 각 `<article>`은 `.article-header` (margin-bottom 12px), `.article-inner` (흰색 카드, padding 12px), `.article-footer` (margin-top 12px)를 가질 수 있음.
- **너비 헬퍼**: `.article-30/40/50/60/70`이 섹션을 비율 컬럼으로 나눕니다 (30%, 40%, 50%, 60%, 70%). 768–1023px에서 `.article-50`과 `.article-60`은 100%로 붕괴됩니다.

### 그리드 시스템

- `.grid-container`는 CSS Grid 사용 (`display: grid`).
- 컬럼 패턴은 페이지 컨텍스트에 따라 다릅니다:
  - 기본 (콘텐츠, 일정): `min-content repeat(4, auto)` — 5 컬럼
  - 메인 대시보드: `min-content repeat(5, auto)` — 6 컬럼
  - 모니터: `min-content repeat(3, auto)` — 4 컬럼
  - 일정: `auto repeat(4, auto)` — 5 컬럼, 첫 컬럼 auto 너비
- 행 간격: `36px` (콘텐츠, 일정), `28px` (모니터).

---

## 입체감 & 깊이

| 레벨 | 처리 방식 | 사용처 |
|---|---|---|
| 평면 | 그림자 없음, 테두리 없음 | 섹션 배경, 테이블, 탭 패널 |
| 인풋 테두리 | `1px solid {colors.border-default}` | 모든 폼 인풋, 셀렉트 |
| 테이블 헤어라인 | `1px solid {colors.border-table}` | 테이블 셀 격자선 |
| 아티클 카드 | 그림자 없음; 회색 섹션 위 흰색 배경으로 암묵적 부상 효과 | `.article-inner` 카드 |
| 헤더 바 | `box-shadow: 0 0 10px rgba(0,0,0,0.1)` | `<header>` — 레이아웃 쉘의 유일한 전체 너비 그림자 |
| State 카드 | `box-shadow: 0 0 20px rgba(0,0,0,0.1)` | State Panel 메트릭 카드 |
| 사용자 드롭다운 | `box-shadow: 0 0 4px rgba(0,0,0,0.25)` | `.user-wrap ul` 팝오버 |
| 모달 콘텐츠 | `box-shadow: 0 1px 3px rgba(0,0,0,0.3)` | 모달 오버레이 콘텐츠 박스 |
| 로그인 버튼 | `box-shadow: 2px 2px 4px rgba(0,0,0,0.15)` | 로그인 폼 제출 버튼 |
| 로그인 인풋 래퍼 | `filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.07))` | 로그인 인풋 필드 그룹 |

**그림자 철학.** 그림자는 장식이 아닌 기능적으로 사용됩니다. 애플리케이션 쉘의 레이어들은 그림자가 아닌 색상(어두운 배경 → 흰색 헤더 → 회색 섹션 → 흰색 카드)으로 구분됩니다. 헤더 그림자는 헤더를 스크롤 콘텐츠 위의 영속적인 레이어로 고정합니다. State 카드 그림자는 메트릭 요약을 아래의 평면 테이블 콘텐츠 위로 부상시킵니다. 모달과 드롭다운 그림자는 떠 있는 서피스를 나타냅니다. 장식적 깊이는 없습니다 — 오직 구조적 깊이만 있습니다.

---

## 형태

### 테두리 반지름 스케일

| 토큰 | 값 | 사용처 |
|---|---|---|
| `{rounded.none}` | 0px | `.btn-wrap` 그룹의 중간 세그먼트, 지도 모달 |
| `{rounded.xs}` | 2px | 모달 콘텐츠, 연도 네비 버튼 모서리 |
| `{rounded.sm}` | 4px | 기본값: 인풋, 셀렉트, 버튼, 사용자 드롭다운, `.btn-wrap` 끝 캡, date-wrap |
| `{rounded.md}` | 5px | 로그인 폼 카드 컨테이너 |
| `{rounded.subnav}` | 20px | 서브네비 알약 링크 |
| `{rounded.toggle}` | 13px | 토글 스위치 트랙 (width/height: 26px/16px → 13px = height/2) |
| `{rounded.state-panel}` | 10px | State Panel 알약 컨테이너 |
| `{rounded.pill-round}` | 80px | `.btn-round` (데스크톱) / 56px (반응형) |
| `{rounded.search-header}` | 30px | 헤더 검색 인풋 캡슐 |
| `{rounded.full}` | 100% | 알림 점, 달력 가용성 점, 네비 활성 불릿 |
| `{rounded.datepicker-cell}` | 7px | xdsoft 날짜 선택기 달력 `<td>` 셀 |
| `{rounded.nav-diamond}` | 4px | 네비 활성 인디케이터 (rotate 변환 전 36×36px 정사각형에 적용) |

**반지름 문법.** 시스템은 `{rounded.sm}` (4px)을 거의 보편적인 기본값으로 사용합니다. 알약 형태(`btn-round`, 헤더 검색)는 캡슐 모양을 위해 매우 큰 반지름 값을 사용합니다. 진짜 원은 `100%`를 사용합니다. 로그인 폼만 4px에서 벗어나 카드 컨테이너에 5px, 스택형 인풋 모서리에 0.375rem(~6px)을 사용합니다. 13px와 20px 사이의 반지름은 서브네비 알약을 제외하고 어디에도 존재하지 않습니다.

---

## 컴포넌트

### 사이드바 네비게이션

**`nav-sidebar`** — `{colors.brand-nav}` (#58C65D) 위의 96px 너비 고정 왼쪽 컬럼. 상단: `.logo` (전체 너비 이미지). 중앙: `.nav-wrap` 아이콘 목록 (margin-top 210px). 각 항목은 `24px` 너비 SVG 아이콘, `margin-bottom: 36px`. 아이콘은 `fill` 트랜지션을 사용합니다:
- 기본 fill: `{colors.brand-nav-icon-default}` (#328935)
- 호버 fill: `{colors.brand-nav-icon-hover}` (#0B4E0D)
- 활성 fill: `{colors.brand-nav-icon-active}` (#FFFFFF)

**`nav-active-indicator`** — `{colors.surface-section}` (#ECECEC)의 `36×36px` 정사각형 (`border-radius: 4px`). 활성 목록 항목 기준으로 `top: -7px, right: -64px`에 위치하며 `transform: rotate(45deg)`로 45° 회전. 사이드바에서 콘텐츠 영역으로 "관통"하는 것처럼 보이는 다이아몬드를 만듭니다.

### 헤더

**`header-bar`** — 전체 너비 흰색 바, `box-shadow: 0 0 10px rgba(0,0,0,0.1)`, `padding: 18px 16px 12px 120px`. 검색 인풋, user-wrap 컨트롤, `.header-title`, `.header-nav`, 문맥별 `.header-subnav`를 포함합니다.

**`header-search`** — `width: 195px, height: 22px`, 알약 형태 (`border-radius: 30px`), `background: {colors.surface-input-header}` (#F4F4F4), `font-size: 14px`, 테두리 없음.

**`header-nav-link`** — 수평 탭 스타일 목록. 비활성: `color: rgba(0,0,0,0.6)`, `font-weight: 300`, `font-size: 18px`, 보이지 않는 `border-bottom: 2px solid #FFFFFF`. 활성: `color: #000000`, `font-weight: 300` (동일 웨이트), `border-bottom: 2px solid {colors.interactive-primary}`. 호버: `color: {colors.interactive-primary}`. 트랜지션: `all 0.25s ease`.

**`header-subnav-pill`** — 네비 탭이 활성일 때만 나타납니다. `border-radius: 20px`, `padding: 5px 15px 5px 27px`, `font-size: 12px`, `font-weight: 400`, `color: rgba(0,0,0,0.5)` 알약. `left: 12px, top: 11px`에 불릿 가상 요소(`::before`) — `4×4px`, `border-radius: 100%`, `background: rgba(0,0,0,0.5)`. 활성 알약: `background: rgba(64,158,255,0.16)`.

**`user-dropdown`** — `top: 48px, right: 0`에 절대 위치. 너비 `144px`, `padding: 12px 14px 6px`, `border-radius: 4px`, `box-shadow: 0 0 4px rgba(0,0,0,0.25)`. 캐럿: `top: -5px, right: 12px`에 회전된 정사각형 가상 요소(`::before`), `10×10px`, 위쪽과 왼쪽 테두리 `1px solid #ECECEC`, 흰색 채움, 45° 회전. 링크: `14px, color: #000000`; 로그아웃 링크: `color: {colors.text-disabled}` (#838383).

### 버튼

**`btn-primary`** — 주요 확인 액션. `background: {colors.interactive-primary}` (#409EFF), `border: 1px solid #409EFF`, `color: #FFFFFF`. 호버 시 반전: `background: #FFFFFF`, `color: #409EFF`. Border-radius `{rounded.sm}` (4px). 높이는 크기 클래스에 따라 다릅니다.

**`btn-green`** — 콘텐츠 생성/제출 액션. `background: {colors.brand-online}` (#0FB716), `border: 1px solid #0FB716`, `color: #FFFFFF`. 호버: `background: #FFFFFF`, `color: #0FB716`. 목록 옵션 툴바에서 `margin-left: 45px`로 보조 액션과 시각적으로 분리.

**`btn-plain`** — 보조 / 고스트 버튼. `background: #FFFFFF`, `border: 1px solid {colors.interactive-light}` (#B3D8FF), `color: {colors.interactive-primary}` (#409EFF). 호버: `background: {colors.interactive-light}`, `color: #FFFFFF`.

**`btn-gray`** — 취소 또는 비활성 액션. `background: {colors.btn-gray}` (#B5B5B5), `border: 1px solid #B5B5B5`, `color: #FFFFFF`. 호버: `background: #FFFFFF`, `color: #B5B5B5`.

**`btn-round`** — `.search-wrap`에서 검색/필터 제출로 사용되는 알약 형태 기본 액션. 높이 `30px`, `border-radius: {rounded.pill-round}` (80px), `font-weight: 500`, `margin-left: auto`로 오른쪽 정렬. 색상 클래스는 별도 적용 (`btn-primary` 또는 `btn-green`). 반응형: `border-radius: 56px`.

**`btn-wrap`** — 그룹 토글 옵션을 위한 세그먼트 컨트롤. 개별 `.btn` 자식은 첫 번째(왼쪽 반지름)와 마지막(오른쪽 반지름)을 제외하고 `border-radius: 0`. 비활성 채움: `#FFFFFF`, 텍스트 `#606266`. 활성: `background: {colors.interactive-bg}` (#ECF5FF), `border: 1px solid {colors.interactive-light}` (#B3D8FF), `color: {colors.interactive-primary}`.

**모든 버튼 트랜지션**: `all 0.25s ease` — 보편적 적용.

### 버튼 크기 스케일

| 클래스 | 높이 | 가로 패딩 | 폰트 크기 |
|---|---|---|---|
| `.btn-mini` | 20px | 5px | 11px |
| `.btn-sm` | 22px | 15px | 14px |
| `.btn-sm2` | 24px | 12px | 13px |
| `.btn-input` | 30px | 22px | 13px |
| `.btn-round` | 30px | 20px | 14px |

### 폼 인풋

**`input-text`** — `padding: 3px 8px`, `background: #FFFFFF`, `border: 1px solid {colors.border-default}`, `border-radius: {rounded.sm}`, `font-size: 14px`. 플레이스홀더: `{colors.text-placeholder}` (#D9D9D9). 비활성화: `opacity: 0.4`.

**`input-select`** — 텍스트 인풋과 동일한 테두리 및 반지름. 커스텀 화살표: `url(select_arrow.svg)` at `right: 8px center`, `appearance: none`, 화살표 공간 확보를 위해 오른쪽 패딩 `24px`.

**`input-textarea`** — 동일한 테두리와 반지름. `resize: vertical`. 기본값으로 전체 너비.

**`input-toggle`** — `26×16px`, `border-radius: 13px` (알약). 트랙: 기본 흰색 배경, `border: 1px solid #FFFFFF`. 토글 버튼: `13×13px` 원, `background: {colors.interactive-primary}` (#409EFF), `left: 2px`. 체크 시: 트랙 배경이 `#409EFF`, 버튼이 `left: calc(100% - 14px)`로 이동, 버튼이 흰색으로 전환. **인증 컨텍스트 오버라이드**: 파란색 대신 `{colors.brand-nav}` (#58C65D) 사용. 트랜지션: 트랙과 버튼 모두 `all 0.25s ease-in`.

**`input-date`** — `.date-wrap`: `200×30px`, `background: {colors.surface-input}` (#F4F4F5), `left: 5px center`에 달력-회색 아이콘, `border: 1px solid {colors.border-default}`, `border-radius: 4px`. 오버레이 레이블(플레이스홀더로 표시) + 숨겨진 `date` 인풋을 나란히 포함. 시간 변형은 시계 아이콘 사용. 너비 반응형: `144×18px`.

**`input-search`** — `.input-search input`: `width: 140px`, `padding-right: 25px`, `right: 8px center`에 검색-블랙 아이콘, `background-color: {colors.surface-input}`.

### 테이블

**`table-default`** — 전체 너비, `border-collapse: collapse`. 모든 셀: `border: 1px solid {colors.border-table}` (#EBEEF5). `<th>`: `padding: 11px 11px 13px`, `font-size: 14px`, `font-weight: 400`, `color: {colors.text-secondary}` (#909399), `background: {colors.surface-table-header}` (#F5F7FA). `<td>`: `padding: 12px 10px 13px`, `font-size: 13px`, `font-weight: 400`, `color: {colors.text-primary}` (#000000). 기본값으로 모든 셀에 가운데 정렬; 컨텍스트별 왼쪽 정렬 오버라이드 적용.

**`table-open-border`** — 외부 테두리를 제거하는 변형 (`.open-border` 클래스): 첫 번째 행 `<th>`의 `border-top: 0`, 각 행의 첫 번째/마지막 자식에 `border-left/right: 0`.

**`table-pagination`** — `margin-top: 20px`. 이전/다음 버튼: `font-weight: 700`, `font-size: 14px`, `color: {colors.text-gray}` (#808080). 페이지 번호 링크: `margin: 0 10px`, `font-size: 14px`, `color: {colors.text-primary}` (#000000). 활성 페이지: `font-weight: 700`, `color: {colors.interactive-primary}` (#409EFF).

### 탭

**`tab-nav`** — 수평 목록. 각 `<li>`: `width: 150px` (반응형: 108px). 탭 `<a>`: `height: 40px`, `font-size: 13px`, `line-height: 40px`, `color: {colors.text-secondary}` (#909399), `border: 1px solid {colors.border-subtle}` (#DCDFE6), 왼쪽 테두리 숨김(첫 번째 자식 제외). 첫 번째 자식 `<a>`: `border-radius: 4px 0 0 0`. 활성 탭: `color: {colors.interactive-primary}` (#409EFF), `border-bottom: none` (패널에 연결된 효과 생성).

**`tab-panel`** — `margin-top: -1px` (탭의 하단 테두리와 겹침), `padding: 17px 30px 21px`, `border: 1px solid {colors.border-subtle}`, `background: #FFFFFF`.

### 모달

**`modal`** — 전체 뷰포트 플렉스 오버레이. 기본: `display: none`, `opacity: 0`. 활성: `display: flex`, `opacity: 1`, `transition: all 0.25s ease`. 내부 `.modal-overlay`는 `z-index: 20` (배경), `.modal-content`는 `z-index: 30`. `.modal-content`: `padding: 10px`, `background: #FFFFFF`, `box-shadow: 0 1px 3px rgba(0,0,0,0.3)`, `border-radius: 2px`. 모달 제목 `<h1>`: `font-size: 17px`, `color: {colors.text-modal-title}` (#303133). 닫기 버튼: `11×11px`, `margin-left: auto`.

**컨텍스트별 너비:**

| 컨텍스트 | 데스크톱 | 반응형 |
|---|---|---|
| 관리자 / 공지 / 콘텐츠 추가 | 532px | 384px |
| 회원가입 셀렉트 모달 | 627px | 446px |
| 기기 정보 모달 | 뷰포트의 50% | 동일 |
| 메인뷰 모달 | 커스텀 패딩 | 452px 본문 테이블 |

### State Panel

**`state-panel`** — `.state-wrap`: `margin-bottom: 60px`. 컨테이너 `.state-wrap ul`: `display: inline-flex`, `padding: 11px 7px 13px`, `background: rgba(132,132,132,0.2)`, `border-radius: 10px`. 각 카드 `.state-wrap li`: `width: 177px` (반응형: 125px), `padding: 10px 18px 16px`, `background: #FFFFFF`, `box-shadow: 0 0 20px rgba(0,0,0,0.1)`. 카드 레이블 `<span>`: `font-size: 14px`, `font-weight: 300`, `border-bottom: 1px solid {colors.border-separator}` (#878787). 카운터 `<h1>`: `font-size: 30px`, `font-weight: 700`, `text-align: center`. **활성 상태**: span과 h1 모두 `{colors.interactive-action}` (#0277EF)으로 전환; 밑줄이 `1px solid #0277EF`로 변경.

**`substate-panel`** — 메인 대시보드에서 사용되는 소형 변형 (main.css). 카드: `100×134px`, `display: flex`, `flex-direction: column`, `justify-content: flex-end`, `border: 1px solid {colors.border-divider}` (#E3E3E3), 그림자 없음. 에러 변형: `border: 1px solid {colors.status-unavailable}` (#EB6A4E).

### 달력 (FullCalendar)

**`calendar-view`** — `#slotView-calendar`를 감쌉니다. 날짜 셀: `height: 133px` (상세: 100px, article-50: 72px), `cursor: pointer`. 가용성 점: `.fc-day .fc-daygrid-day-top`의 `::after` 가상 요소 — `18×18px`, `border-radius: 100%`, 기본 `background: {colors.status-available}` (#52B65C), `.unavailable` 클래스에서 `{colors.status-unavailable}` (#EB6A4E)으로 오버라이드. 다른 달 날짜: `background: #F6F6F6`. 광고 존재 날짜: `background: {colors.interactive-ad-bg}` (#F0F7FF). 슬롯 수: `font-size: 23px` 레이블 / `36px` 숫자, `color: {colors.text-calendar}` (#909090) / `#000000`.

### 로그인 폼

**`login-form`** — 흰색 배경 위 가운데 정렬 카드. 카드: `min-width: 500px`, `width: 35%`, `padding: 40px 60px`, `border: 1px solid {colors.brand-nav}` (#58C65D), `border-radius: 5px`, filter drop-shadow를 통한 `box-shadow`. 스택형 인풋은 단일 시각적 컨테이너를 공유 — 상단 인풋: `border-radius: 0.375rem 0.375rem 0 0`, 하단 인풋: 상단 테두리 없음, `border-radius: 0 0 0.375rem 0.375rem`. 제출: 전체 너비, `font-size: 20px`, `font-weight: 600`, `background: {colors.brand-nav}`, 호버 `{colors.brand-nav-hover}` (#89D58C), 포커스 시 흰색 배경 + 녹색 텍스트로 반전.

---

## 권장 사항 & 주의 사항

### 권장 사항 (Do)
- 모든 페이지 내 인터랙티브 요소 — 버튼, 활성 상태, 토글, 탭, 페이지네이션, 링크 — 에 `{colors.interactive-primary}` (#409EFF)를 사용하세요. 이것이 유일한 페이지 내 액션 색상입니다.
- `{colors.brand-nav}` (#58C65D)는 사이드바와 인증 화면에만 독점적으로 사용하세요. 애플리케이션 내부에는 등장하지 않습니다.
- 모든 인터랙티브 요소에 `transition: all 0.25s ease`를 적용하세요. 이것이 보편적인 애니메이션 서명입니다; 지속 시간이나 이징을 변경하지 마세요.
- 호버 시 버튼 색상을 반전시키세요 — 색상이 있는 버튼은 색상 테두리와 텍스트를 가진 흰색이 되어야 합니다. 이것이 네 가지 버튼 색상 변형 모두에 대한 시스템 전체 호버 문법입니다.
- `<th>`를 `{colors.surface-table-header}` (#F5F7FA) 위의 `{colors.text-secondary}` (#909399)로, `<td>`를 흰색 위의 `{colors.text-primary}` (#000000)로 유지하세요. 이 대비 분리가 테이블을 스캔 가능하게 만듭니다.
- State Panel 카운터와 `.highlight` 유틸리티 클래스의 활성 상태에 `{colors.interactive-action}` (#0277EF)을 사용하세요. 인터랙티브 버튼에는 사용하지 마세요 — 그것은 `{colors.interactive-primary}`입니다.
- `.list-option` 툴바 내 `.btn-green`에 `margin-left: 45px` 패턴을 사용하여 주요 섹션 액션을 분리하세요.
- 모달 `border-radius`를 `2px`로 유지하세요. 모달은 데이터 서피스이지 장식적 카드가 아닙니다.

### 주의 사항 (Don't)
- 사이드바 배경과 인증 컨텍스트 토글을 제외하고 애플리케이션 쉘 내부에서 `{colors.brand-nav}` (#58C65D)를 사용하지 마세요. 콘텐츠 영역의 녹색은 잘못된 네비게이션 신호를 만듭니다.
- 세 번째 인터랙티브 색상을 도입하지 마세요. 시스템은 정확히 두 가지 액센트 계열을 가집니다: 녹색(네비게이션/인증)과 파란색(액션/데이터).
- 본문 강조에 웨이트 500을 사용하지 마세요 — 웨이트 700을 사용하세요. 웨이트 계층은 300 / 400 / 500 / 700이며, 500은 구조적 헤딩(`.article-title`, `.btn-round`)에만 예약되어 있습니다.
- 카드나 테이블에 그림자를 추가하지 마세요 — 콘텐츠 영역 내 입체감은 `{colors.surface-section}` (#ECECEC) 위에 흰색 요소를 배치하여 달성하는 것이지 그림자로 달성하는 것이 아닙니다.
- `<td>` 폰트 크기를 13px 미만으로 줄이지 마세요. 테이블 시스템은 이미 최소 가독성 크기에 있습니다; 더 줄이면 데이터 표시 목적이 무너집니다.
- `.btn-round`를 제외한 어느 것에도 `{rounded.pill-round}` (80px)를 사용하지 마세요. 알약 반지름은 검색/필터 액션 신호입니다.
- 애플리케이션 서피스에 장식적 그라디언트나 배경 이미지를 추가하지 마세요. 서피스는 단색만 사용합니다. 시스템의 유일한 "장식"은 네비 활성 다이아몬드 인디케이터이며, 이것은 구조적입니다.
- 레이아웃 변경에 `0.25s ease` 트랜지션을 사용하지 마세요 — 색상 채움, 불투명도, 변형에만 사용하세요. 너비, 패딩, 높이 애니메이션은 이 시스템의 언어가 아닙니다.

---

## 반응형 동작

### 브레이크포인트

| 이름 | 범위 | 설명 |
|---|---|---|
| **데스크톱** | ≥ 1440px | 전체 레이아웃; 기본 디자인 |
| **중간 데스크톱** | 1025–1439px | 검색 래퍼 레이블/마진 소폭 조정만 |
| **태블릿 / 소형 데스크톱** | 768–1439px | 주요 반응형 범위; 모든 컴포넌트 축소 |
| **좁은 태블릿** | 768–1023px | `.article-50`과 `.article-60`이 `width: 100%`로 붕괴 |
| **최대 컨테이너** | 1920px | body의 `max-width`; 이보다 넓은 콘텐츠 없음 |

**모바일 브레이크포인트 없음.** 이 시스템은 단일 반응형 범위(768–1439px)를 가집니다. 768px 미만은 반응형 스케일에서 추가 조정 없이 렌더링됩니다. 데스크톱 우선 관리 인터페이스입니다.

### 768–1439px에서의 주요 레이아웃 변경

**네비게이션 사이드바:**
- 너비: `96px → 68px`
- Nav-wrap 상단 오프셋: `210px → 150px`
- 아이콘 항목 너비: `24px → 17px`, 하단 마진 `36px → 25px`
- 활성 다이아몬드: `36×36px → 15×15px`, border-radius `4px → 2px`

**헤더:**
- 패딩: `18px 16px 12px 120px → 12px 20px 2px 84px`
- 검색: `195×22px → 140×16px`
- 페이지 타이틀: `28px/34px → 20px/29px`
- 네비 링크: `18px → 12px`; 서브네비: `12px → 10px`, 알약 반지름 `20px → 14px`
- 사용자 드롭다운: `top: 48px → 32px`, 너비 `144px → 96px`

**섹션:**
- 패딩: `50px 87px 0 148px → 35px 60px 0 100px`
- 아티클 margin-bottom: `50px → 35px`
- 아티클 inner 패딩: `12px → 8px`

**State Panel:**
- 카드 너비: `177px → 125px`
- 컨테이너 반지름: `10px → 7px`
- 카운터: `30px/43px → 21px/31px`
- 레이블: `14px/17px → 10px/12px`

**테이블:**
- `<th>`: `14px/23px → 10px/16px`, 패딩 `11px 11px 13px → 9px 7px`
- `<td>`: `13px/23px → 10px/16px`, 패딩 `12px 10px 13px → 7px 7px 9px`
- 페이지네이션: `14px → 10px`, margin-top `20px → 15px`

**버튼:**
- Border-radius: `4px → 3px`
- `.btn-sm`: `22px 높이, 14px → 16px 높이, 10px`
- `.btn-round`: `30px → 21px 높이`, `80px → 56px` 반지름
- `.btn-wrap`: `30px → 22px 높이`

**인풋 / 컨트롤:**
- 레이블: `14px → 10px`, margin-right `12px → 8px`
- 인풋/셀렉트: `14px → 10px`, 반지름 `4px → 3px`
- 토글: `26×16px → 18×11px`, 버튼 `13×13px → 9×9px`
- Date-wrap: `200×30px → 144×18px`
- 라디오/체크박스: `14×14px → 12×12px`

**탭:**
- 탭 너비: `150px → 108px`
- 탭 높이: `40px → 28px`, 폰트 `13px → 10px`

**달력:**
- 셀 높이: `133px → 95px`
- 툴바: `24px → 17px`
- 가용성 점: `18×18px → 10×10px`

**모달:**
- 관리자 모달: `532px → 384px`
- 회원가입 셀렉트 모달: `627px → 446px`
- 모달 타이틀: `17px → 15px`

---

## 애니메이션

시스템에는 정확히 하나의 애니메이션 서명이 있습니다:

| 토큰 | 값 | 적용 대상 |
|---|---|---|
| `{transition.default}` | `all 0.25s ease` | 모든 버튼, 헤더 네비 링크, 사용자 드롭다운, user-noti/error 인디케이터, 토글 트랙과 버튼, 모달 오버레이 |
| `{transition.fill}` | `fill 0.25s ease` | 네비 사이드바 SVG 아이콘 path fill |

코드베이스에 다른 지속 시간이나 이징은 존재하지 않습니다. 모든 트랜지션은 `0.25s ease`입니다. 다른 값을 도입하지 마세요.

---

## 반복 가이드

1. 새 페이지 서피스를 구축할 때 쉘부터 시작하세요: `<nav>` + `<header>` + `<section>`. 모든 페이지가 이 3존 구조입니다.
2. `<section>` 내부에서 데이터를 `.article-inner` (흰색 카드)가 있는 `<article>`로 감싸세요. 제목 + 액션 툴바에는 `.article-header`, 페이지네이션에는 `.article-footer`를 사용하세요.
3. 너비 분할에는 `.article-30/40/50/60/70`을 사용하세요. 아티클 내부의 컬럼 데이터 그리드에는 적절한 컬럼 수 오버라이드를 가진 `.grid-container`를 사용하세요.
4. 컴포넌트를 인라인 스타일이 아닌 CSS 클래스 패턴으로 참조하세요 (`btn-primary`, `modal`, `tab-nav`).
5. 두 가지 액센트 색상만 존재합니다: 페이지 내 액션에는 `{colors.interactive-primary}` (#409EFF), 네비게이션/인증에는 `{colors.brand-nav}` (#58C65D). 선택 기준은 영역 질문입니다: 사이드바/인증 = 녹색, 콘텐츠 영역 = 파란색.
6. `{colors.interactive-action}` (#0277EF)은 `.highlight`, State Panel 활성 카운터, 인라인 콘텐츠 강조(파일 링크, 업데이트 노트)에만 사용하세요. 버튼에는 사용하지 마세요.
7. 모든 호버 상태에서 버튼 색상을 반전시키세요. 그에 맞게 호버 스타일을 작성하세요.
8. 모든 애니메이션: `transition: all 0.25s ease`. 예외 없음.

---

## 알려진 공백

- **모바일 브레이크포인트 없음.** CSS 어디에도 `max-width: 767px` 규칙이 없습니다. 모바일 구현에는 현재 시스템 외부의 새로운 규칙이 필요합니다.
- **폼 유효성 검사 상태.** `:invalid`, `.error`, 또는 오류 메시지 스타일이 정의되어 있지 않습니다. `.danger` 색상 토큰과 `.file-input:valid::after` 아이콘만 유효성 검사를 암시합니다 — 완전한 오류 상태 패턴이 존재하지 않습니다.
- **색상 토큰이 CSS 커스텀 프로퍼티로 정의되지 않음.** 모든 색상 값이 하드코딩된 hex 문자열입니다. 시스템을 공식화하려면 `--var()`로의 리팩토링이 필요합니다.
- **네비 활성 다이아몬드 기하학**은 사이드바와 콘텐츠 영역이 정확히 문서화된 너비일 때만 올바르게 작동합니다. 사이드바 너비 변경 시 인디케이터의 `right: -64px`를 재계산해야 합니다.
- **타이포그래피 웨이트 600**은 로그인 버튼에만 등장하지만 해당하는 `@font-face` 선언이 없습니다. 브라우저가 합성합니다. 폰트 합성을 지원하지 않는 플랫폼에서는 로그인 버튼이 웨이트 700으로 렌더링될 수 있습니다.
- **다크 모드 없음.** 시스템은 밝은 서피스 중심입니다. `prefers-color-scheme: dark` 쿼리가 존재하지 않습니다.
- **FullCalendar 전용 스타일** (`.fc-*` 클래스)은 FullCalendar 라이브러리 버전에 의존합니다; 라이브러리 업그레이드 시 이 스타일들을 수정해야 할 수 있습니다.
- **Google Maps 팝업** (`.map-modal`)은 `292×138px`(반응형: `199×93px`)으로 문서화되었지만, 팝업의 자체 iframe 컨트롤(줌 버튼, 스트리트뷰)은 `.gmnoprint`와 `.gm-style-iw-tc`에 `display: none`을 통해 명시적으로 숨겨져 있습니다 — 시각적 청결함 유지를 위한 의도적 처리입니다.
