# CMS Dashboard — Design System
> **Version**: 2.0.1 | **Source**: Figma `iKYE9BxahJHeTd4UTIC6f9` | **Updated**: 2026.05.26

## Overview

This CMS dashboard is a **hybrid-theme management interface**: a dark chrome shell (GNB + Topbar + Breadcrumb bar) wrapping a light-surface content area. The shell and content zones use completely separate color families and never mix.

The shell is built from dark grayscale surfaces (`{colors.grayscale-800}` #383F45 for topbar/breadcrumb, `{colors.grayscale-700}` #454C52 for GNB). The content area sits on a light gray background (`{colors.surface-bg}` #F6F7F9) and hosts white cards where all data entry and display takes place.

**Brand green** (`{colors.green}` — #58C65D) is the primary action color throughout: it fills the "등록하기" / "다음" CTA buttons, marks active tab underlines, highlights focused inputs, fills calendar date selections, outlines tags, and colors the toggle ON state. Green is the universal "do something" signal.

**Interactive blue** (`{colors.main}` — #2d84ed) is narrower in scope: it fills the MAIN badge type and marks active schedule/media group indicators inside lists.

**Key Characteristics:**
- **Four-zone shell**: GNB sidebar (93px collapsed / 200px expanded) + Topbar (60px) + Breadcrumb bar (~36px) + Light-gray content area.
- **Green is primary.** `{colors.green}` (#58C65D) is the single CTA color for buttons, input focus, calendar selection, active tabs, and tags. Not decorative — functional.
- **Blue is badge-scoped.** `{colors.main}` (#2d84ed) is used for the MAIN schedule/media-group badge type only. It does not appear on buttons.
- **Content is always light.** The content area and all cards/panels inside it are light surfaces (white or near-white). Dark surfaces are shell-only.
- **Single transition**: `all 0.25s ease` governs every animation.
- **GNB is collapsible**: icon-only at 93px, icon + label at 200px expanded.
- **Navigation items**: 대시보드, 미디어, 미디어그룹, 콘텐츠, 스케줄, 모니터링, (divider), 태그검색.
- All buttons invert fill on hover. Primary green button → white bg + green text/border on hover.

---

## Colors

> **Source**: Figma variable definitions (node 243:5406) + verified from actual screen renders.

### Brand / Primary Action
- **Green** (`{colors.green}` — #58C65D): The single primary action color. Used for: logo mark, CTA buttons ("등록하기", "다음", "YOUTUBE 계정 등록"), input focus border, active tab underline, calendar date selection, tag outlines/fills, toggle ON state. This is the most important color in the system.
- **Tag Media Green** (`{colors.tag-media}` — #5BD660): Media-type tag badge specific green.
- **Light Green** (`{colors.light-green}` — #C1E9C3): Hover tint for green-accented elements.

### Interactive Blue (Badge-scoped)
- **Main Blue** (`{colors.main}` — #2d84ed): Fills the MAIN badge type (schedule, media group labels). Also used for calendar date range fill tint. Does **not** appear on buttons or general interactive elements.
- **Blue 1** (`{colors.blue-1}` — #4892CB): Secondary blue informational accents.
- **Blue 2** (`{colors.blue-2}` — #D6EDFF): Very light blue fill; hover bg for blue-accented items.

### Secondary / Sub (Slate)
- **Sub 1** (`{colors.sub-1}` — #9097B8): Purple-slate for "Time" badge type.
- **Sub 2** (`{colors.sub-2}` — #E1E5F6): Light purple-slate bg, paired with Sub 1.

### Status / Semantic
- **Danger** (`{colors.danger}` — #E97474): Input error border, error message text, required-field markers, error badge text.
- **Gray 3** (`{colors.gray-3}` — #B5B5B5): Neutral inactive fills, disabled states.

### Dark Shell Surfaces (GNB + Topbar + Breadcrumb)
| Token | Value | Use |
|---|---|---|
| `{colors.grayscale-900}` | #24292E | Deepest shell layer |
| `{colors.grayscale-800}` | #383F45 | Topbar bg, Breadcrumb bar bg, elevated card bg, popup bg |
| `{colors.grayscale-700}` | #454C52 | GNB sidebar bg, GNB hover row bg |
| `{colors.grayscale-600}` | #596066 | GNB dividers, inactive icon fills on dark bg |
| `{colors.grayscale-500}` | #676E76 | Placeholder text on dark inputs |
| `{colors.grayscale-400}` | #9EA5AD | Inactive nav icon fills, muted text on dark |

### Light Content Surfaces (Content area + Cards)
| Token | Value | Use |
|---|---|---|
| `{colors.surface-bg}` | #F6F7F9 | Content area background (fills behind white cards) |
| `{colors.surface-card}` | #FFFFFF | Card / panel background, all form surfaces |
| `{colors.grayscale-150}` | #EFF0F2 | Subtle tint, alternate row bg |
| `{colors.grayscale-100}` | #F6F7F9 | Same as surface-bg; used as light accent in components |
| `{colors.grayscale-50}` | #FAFAFA | Near-white |
| `{colors.grayscale-300}` | #CED2D6 | Input borders (default), table borders, separator lines |
| `{colors.grayscale-200}` | #E5E7EA | Light borders, subtle dividers |
| `{colors.white}` | #FFFFFF | Pure white text on dark surfaces, card bg |

### Text
| Token | Value | Context |
|---|---|---|
| `{colors.text-primary}` | #000000 or #24292E | Main content text on light bg |
| `{colors.text-secondary}` | #9EA5AD | Secondary/muted text on light bg |
| `{colors.text-placeholder}` | #9EA5AD or #CED2D6 | Input placeholder on light bg |
| `{colors.text-on-dark}` | #FFFFFF | Text on dark shell surfaces |
| `{colors.text-muted-dark}` | #9EA5AD | Muted text on dark shell |
| `{colors.text-link}` | #58C65D | Clickable links, schedule names in lists |
| `{colors.text-error}` | #E97474 | Error messages, validation text |

---

## Typography

### Font Family
- **Primary**: System Korean sans-serif (Pretendard recommended). All elements default to this stack.
- **Base size**: `14px` desktop body.

### Hierarchy

| Token | Size | Weight | Color | Use |
|---|---|---|---|---|
| `{typography.page-title}` | 20–24px | 700 | `{colors.text-primary}` | Page/card main heading (e.g. "미디어 상세정보") |
| `{typography.section-title}` | 16px | 600 | `{colors.text-primary}` | Card section heading (e.g. "기본 정보", "디스플레이 정보") |
| `{typography.nav-label}` | 14px | 500 | `{colors.white}` | GNB active nav label |
| `{typography.nav-label-inactive}` | 14px | 400 | `{colors.grayscale-400}` | GNB inactive nav label |
| `{typography.topbar-user}` | 14px | 400 | `{colors.white}` | Topbar user name |
| `{typography.breadcrumb}` | 12px | 400 | `{colors.grayscale-400}` | Breadcrumb path text on dark bar |
| `{typography.body}` | 14px | 400 | `{colors.text-primary}` | Form labels, table data, general body |
| `{typography.body-secondary}` | 14px | 400 | `{colors.text-secondary}` | Muted body text, helper text |
| `{typography.input}` | 14px | 400 | `{colors.text-primary}` | Typed value in text inputs |
| `{typography.placeholder}` | 14px | 400 | `{colors.text-placeholder}` | Input placeholder |
| `{typography.badge}` | 12px | 500 | `{colors.white}` | Badge label (Default size) |
| `{typography.badge-mini}` | 11px | 500 | `{colors.white}` | Badge label (mini) |
| `{typography.error}` | 12px | 400 | `{colors.text-error}` | Validation error message |
| `{typography.tag}` | 12px | 400 | `{colors.green}` | Tag pill text |
| `{typography.stat-counter}` | 28–32px | 700 | `{colors.text-primary}` | Stat card large counter |
| `{typography.stat-label}` | 12px | 400 | `{colors.text-secondary}` | Stat card label |
| `{typography.button-primary}` | 14px | 600 | `{colors.white}` | Primary button label |
| `{typography.button-secondary}` | 14px | 400 | `{colors.text-primary}` | Secondary/ghost button label |

---

## Layout

### Spacing System
- **Base unit**: 4px. All structural values are multiples of 4.

| Token | Value | Primary Usage |
|---|---|---|
| `{spacing.xxs}` | 4px | Micro gaps, icon inner padding |
| `{spacing.xs}` | 8px | Badge padding, inline gaps |
| `{spacing.sm}` | 12px | Card inner padding sm, input padding |
| `{spacing.md}` | 16px | Card inner padding, form row gaps |
| `{spacing.lg}` | 20–24px | Card padding, section padding |
| `{spacing.xl}` | 32px | Between cards |
| `{spacing.2xl}` | 48px | Major section gaps |

### Application Shell — Four Zones

```
<body>  1920×1080, bg: {colors.grayscale-900} (#24292E)
  │
  ├── [ZONE 1] <gnb>
  │     position: fixed, left: 0, top: 0
  │     width: 93px (collapsed) / 200px (expanded)
  │     height: 100vh
  │     bg: {colors.grayscale-700} (#454C52)
  │
  ├── [ZONE 2] <topbar>
  │     position: fixed, top: 0, left: 0
  │     width: 100%, height: 60px
  │     bg: {colors.grayscale-800} (#383F45)
  │     z-index above GNB
  │
  ├── [ZONE 3] <breadcrumb-bar>
  │     position: fixed or static, top: 60px, left: 93px (or 200px expanded)
  │     width: calc(100% - 93px), height: ~36px
  │     bg: {colors.grayscale-800} (#383F45)
  │     contains: back arrow + breadcrumb path + optional page title
  │
  └── [ZONE 4] <content>
        position: below zones 2+3, right of zone 1
        margin-left: 93px (or 200px), margin-top: 96px (60+36)
        bg: {colors.surface-bg} (#F6F7F9)
        overflow: auto
        contains: white card(s) with all actual page content
```

### GNB (Global Navigation Bar)

- **Collapsed width**: 93px | **Expanded width**: 200px
- **Background**: `{colors.grayscale-700}` (#454C52)
- **Top**: Toggle arrow button (36×36px, `border-radius: 50%`, bg `{colors.grayscale-800}`). `←` to expand, `→` to collapse.
- **Nav items** (icon 32×32px):
  - 대시보드 (home icon)
  - 미디어 (screen/monitor icon)
  - 미디어그룹 (layers icon)
  - 콘텐츠 (film/content icon)
  - 스케줄 (calendar icon)
  - 모니터링 (monitor+chart icon)
  - `1px` divider `{colors.grayscale-600}`
  - 태그검색 (tag icon)
- **Item height**: 46px, `padding: 0 20px (collapsed) / 0 16px (expanded)`
- **Inactive**: icon fill `{colors.grayscale-400}`, no label in collapsed
- **Active**: icon fill `{colors.white}`, label `{colors.white}` weight 500, left accent `3px solid {colors.green}` or bg tint
- **Hover**: row bg `{colors.grayscale-600}`, icon + label turn white
- **Transition**: `width 0.25s ease` (expand/collapse), `fill 0.25s ease` (icon color)

### Topbar

- **Height**: 60px | **Background**: `{colors.grayscale-800}` (#383F45)
- **Left**: "DL" logo in `{colors.green}` (#58C65D), height ~28px
- **Right**: User avatar circle (32px, bg `{colors.grayscale-600}`) + name (14px, white) + org name (12px, `{colors.grayscale-400}`) + caret dropdown

### Breadcrumb Bar

- **Height**: ~36px | **Background**: `{colors.grayscale-800}` (#383F45)
- **Left**: Back arrow `<` + breadcrumb path (e.g. "미디어그룹 > 미디어 조회 > 미디어 상세정보")
- **Text**: 12px, `{colors.grayscale-400}`, active/current segment is slightly brighter
- **Separator**: `>` character, `{colors.grayscale-600}`

### Content Area + White Card

- **Content area bg**: `{colors.surface-bg}` (#F6F7F9)
- **Card bg**: `{colors.white}` (#FFFFFF), `border-radius: 8–12px`, no shadow (white on light gray provides sufficient contrast)
- **Card header row**: back arrow `<` + page title (20px, 700) on the left; primary action button on the right
- **Card padding**: 24px
- **Tabs inside card**: line-style (underline only), active tab has `border-bottom: 2px solid {colors.green}`

---

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Shell base | `{colors.grayscale-800}` (#383F45) | Topbar, breadcrumb bar |
| GNB | `{colors.grayscale-700}` (#454C52) | Left sidebar |
| Content bg | `{colors.surface-bg}` (#F6F7F9) | Page background |
| Card | `{colors.white}` (#FFFFFF), no shadow | All page content containers |
| Input | `{colors.white}` bg + `{colors.grayscale-300}` border | Form inputs on card |
| Popup/Modal | `{colors.white}` bg + `box-shadow: 0 4px 10px rgba(0,0,0,0.15)` | Dialog overlays on light bg |
| Dark popup | `{colors.grayscale-800}` bg + `drop-shadow(0 4px 10px rgba(0,0,0,0.5))` | Floating panels in GNB context |

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Table cells, flush dividers |
| `{rounded.xs}` | 2px | Mini badges |
| `{rounded.sm}` | 4px | Inputs, selects, small buttons |
| `{rounded.md}` | 6px | Badges (Default size), tags |
| `{rounded.lg}` | 8px | White card containers, popup containers |
| `{rounded.xl}` | 12px | Larger card containers |
| `{rounded.pill}` | 100px | Toggle track |
| `{rounded.full}` | 50% | Avatar circles, toggle thumb, notification dots, calendar date cells (selected) |

---

## Components

### GNB Sidebar

**`gnb-sidebar`** — See Layout section for full spec. Key states:
- **Collapsed** (default): 93px, icon only
- **Expanded**: 200px, icon + text label
- **Active item**: white icon, white bold label, green left border `3px solid {colors.green}`
- **Hover**: `bg: {colors.grayscale-600}`, white icon + text

### Topbar + Breadcrumb

**`topbar`** — Dark bar, DL logo left, user info right. No tab navigation here.

**`breadcrumb-bar`** — Dark strip just below topbar. Back arrow `<` for navigation, breadcrumb path showing current location within the nav hierarchy.

### Page Card

**`page-card`** — White container wrapping all page content:
- `background: {colors.white}`, `border-radius: {rounded.lg}`
- Header row: `< [page title]` left, `[action button]` right
- Tabs (when present): `border-bottom: 2px solid {colors.green}` on active tab
- Sections divided by `1px solid {colors.grayscale-200}` lines
- Two-column layouts for detail pages (left: form fields, right: map / additional info)

### Buttons

**`btn-primary`** — Main CTA: "등록하기", "다음", "수정하기"
- `background: {colors.green}` (#58C65D), `border: 1px solid {colors.green}`, `color: {colors.white}`
- `border-radius: {rounded.sm}` (4px), `height: 40px`, `padding: 0 20px`, `font-size: 14px`, `font-weight: 600`
- Hover: `background: {colors.white}`, `color: {colors.green}`, border stays green
- Often includes a `>` arrow icon on the right for forward actions

**`btn-dark`** — Secondary shell-level action: "수정 및 삭제", "수정하기" in card header
- `background: {colors.grayscale-800}` (#383F45), `color: {colors.white}`
- Same size/radius as btn-primary
- Hover: `background: {colors.grayscale-700}`, `color: {colors.white}`

**`btn-ghost`** — Tertiary/outlined actions: "+ 미디어그룹 생성", "+ 콘텐츠 등록"
- `background: {colors.white}`, `border: 1px solid {colors.grayscale-300}`, `color: {colors.text-primary}`
- `border-radius: {rounded.sm}`, `height: 36–40px`
- Hover: `background: {colors.surface-bg}`, border same

**`btn-gray`** — Utility actions: "인증 요청", "인증하기", "주소 검색", "확인"
- `background: {colors.grayscale-300}` (#CED2D6), `color: {colors.text-primary}`, `border: none`
- Hover: `background: {colors.grayscale-200}`

**`btn-icon`** — Floating circular action button ("+" at bottom-right of list pages)
- `background: {colors.grayscale-800}` (#383F45), `color: {colors.white}`
- `width: 48px, height: 48px, border-radius: 50%`
- `box-shadow: 0 4px 10px rgba(0,0,0,0.2)`

**All button transitions**: `all 0.25s ease`

### Form Inputs (Light Surface)

**`input-text`** — Standard text input on white card:
- `background: {colors.white}`, `border: 1px solid {colors.grayscale-300}` (#CED2D6)
- `border-radius: {rounded.sm}` (4px), `height: 40px`, `padding: 0 12px`
- `font-size: 14px`, `color: {colors.text-primary}`
- Placeholder: `color: {colors.text-placeholder}`
- **Focus**: `border-color: {colors.green}` (#58C65D) — green focus ring
- **Error**: `border-color: {colors.danger}` (#E97474); error message (12px, `{colors.danger}`) appears below the field
- **Disabled**: `opacity: 0.5`, `background: {colors.surface-bg}`
- Transition: `all 0.25s ease`

**`input-select`** — Same border/radius as text input. Custom chevron arrow, `padding-right: 32px`.

**`input-textarea`** — Same border/radius. `resize: vertical`. Min-height ~80px.

**`input-phone`** — Phone number input: country code dropdown (small, left-attached) + number input. Same border style.

### Toggle (Light Surface Context)

**`toggle`** — `width: 32px, height: 18px`, `border-radius: {rounded.pill}`
- **OFF**: track `{colors.grayscale-300}`, thumb `{colors.white}` at left
- **ON**: track `{colors.green}` (#58C65D), thumb `{colors.white}` at right
- Thumb: 14×14px circle, `border-radius: 50%`
- Transition: `all 0.25s ease-in`

### Searchbar

Two sizes: **Big** (h:44px) for page-level search, **Small** (h:36px) for panel/filter search.

```
[전체 ▾] [🔍 검색어를 입력해 주세요.] [✕ clear button (when typed)]
```
- Container: `bg: {colors.white}`, `border: 1px solid {colors.grayscale-300}`, `border-radius: {rounded.sm}`
- Category dropdown: left-attached, `border-right: 1px solid {colors.grayscale-300}`
- Input text: `{colors.text-primary}`, placeholder `{colors.text-placeholder}`
- Clear ✕: appears when typed, `color: {colors.grayscale-400}`
- Focus: entire container gets `border-color: {colors.green}`

### Badge

| Variant | Background | Text color | Notes |
|---|---|---|---|
| MAIN | `{colors.main}` (#2d84ed) | white | Schedule/media group type |
| SUB | `{colors.grayscale-500}` | white | Secondary type |
| Sync | transparent | white | Outlined, `border: 1px solid {colors.grayscale-400}` |
| 등록대기 | transparent | `{colors.grayscale-400}` | Outlined, muted |
| Time | `{colors.sub-1}` (#9097B8) | white | Time-based schedule |
| MON | `{colors.grayscale-800}` | white | Monitoring-related |
| K-type | `{colors.grayscale-100}` | `{colors.text-primary}` | K-type LED content |

**Default size**: `height: 20px`, `padding: 0 8px`, `border-radius: {rounded.md}` (6px), `font-size: 12px`, `font-weight: 500`
**Mini size**: `height: 16px`, `padding: 0 6px`, `border-radius: {rounded.xs}` (2px), `font-size: 11px`

### Tags

**`tag`** — Hashtag pill used for media/schedule tagging:
- Border: `1px solid {colors.green}` (#58C65D)
- Text: `{colors.green}`, `font-size: 12px`
- `border-radius: {rounded.md}` (6px), `padding: 2px 10px`
- With delete button: `✕` icon appended inside pill

### Stat Cards

**`stat-card`** — Summary count cards shown at top of list pages:
- `background: {colors.white}`, `border-radius: {rounded.lg}`, no shadow
- **Active/selected state**: green circle indicator dot (8px, `{colors.green}`), counter and label may change color
- Counter: `font-size: 28–32px`, `font-weight: 700`, `{colors.text-primary}`
- Label: `font-size: 12px`, `{colors.text-secondary}`
- Right arrow `>` if more items (e.g. "미확정 스케줄" drill-down)

### Tabs (Line Style)

**`tab-nav`** — Horizontal tab bar inside white card:
- Inactive: `font-size: 14px`, `color: {colors.text-secondary}`, no border, `padding-bottom: 8px`
- Active: same size, `color: {colors.text-primary}`, `border-bottom: 2px solid {colors.green}` (#58C65D)
- No background fill change — underline only

### Calendar / Date Range Picker

**`calendar-range`** — Two-month range picker used in schedule registration:
- Cell size: 32×32px, `border-radius: 50%` on selected/start/end
- **Today**: outlined circle, `border: 1px solid {colors.grayscale-300}`
- **Hover**: bg `{colors.surface-bg}`
- **Selected (start/end)**: bg `{colors.green}` (#58C65D), text white
- **Range middle**: bg `rgba(88, 198, 93, 0.15)` (green tint), text `{colors.text-primary}`
- **Disabled**: text `{colors.grayscale-300}`, not interactive
- Month navigation: `<` `>` arrows, `color: {colors.green}`

### Table

**`table`** — Standard data table on white card:
- `border-collapse: collapse`
- `<th>`: `background: {colors.surface-bg}` (#F6F7F9), `color: {colors.text-secondary}`, `font-size: 14px`, `font-weight: 400`, `border: 1px solid {colors.grayscale-200}`
- `<td>`: `background: {colors.white}`, `color: {colors.text-primary}`, `font-size: 14px`, `border: 1px solid {colors.grayscale-200}`
- Clickable row links: `color: {colors.green}` (#58C65D), underline on hover
- Content thumbnail: 80×45px image in td cell
- Expand row: chevron `⌄` on right side of row, click reveals child rows

### Popup / Modal (Light Context)

**`popup-light`** — Dialog over light content area:
- `background: {colors.white}`, `border-radius: {rounded.lg}`, `box-shadow: 0 4px 10px rgba(0,0,0,0.15)`
- Title: 16px, 600, `{colors.text-primary}`
- Body: 14px, 400, `{colors.text-secondary}`
- Buttons: standard btn-primary + btn-ghost or btn-gray

**`popup-dark`** — Floating panel over GNB/dark shell context (component library):
- `background: {colors.grayscale-800}` (#383F45), `border-radius: {rounded.lg}`, `drop-shadow(0 4px 10px rgba(0,0,0,0.5))`

### Toast Notifications

**`toast`** — Temporary feedback at bottom or top of screen:
- Dark pill: `background: {colors.grayscale-800}`, `color: {colors.white}`, `border-radius: {rounded.pill}`
- Success variant: `{colors.green}` left border or icon
- Error variant: `{colors.danger}` left border or icon

### Map

**`map-embed`** — Google Maps or equivalent embedded in detail pages:
- Displayed in right column of detail layout
- `border: 1px solid {colors.grayscale-200}`, `border-radius: {rounded.sm}`
- Map pins: `{colors.text-primary}` default, `{colors.danger}` for error state media

### Logo Upload Area

**`logo-upload`** — File drop zone for company logos:
- `background: {colors.white}`, `border: 1px dashed {colors.grayscale-300}`, `border-radius: {rounded.sm}`
- Placeholder text: `color: {colors.text-secondary}`, centered
- `+` icon at bottom for browse action
- Format hint text: `font-size: 12px`, `{colors.text-secondary}`

### Monitoring Cards

**`card-monitoring`** — Sensor/hardware status tile (135×101px):
- Category types: 메모리, 업데이트, CPU, RAM, HDD, 셋탑온도, 네트워크, 충격감지, 도어열림, 온습도이상, 미세먼지
- **Default state**: white bg, metric value centered
- **Error state**: `{colors.danger}` (#E97474) accent border or bg tint
- **Selected**: `{colors.main}` (#2d84ed) border highlight

---

## Do's and Don'ts

### Do
- Use `{colors.green}` (#58C65D) for ALL primary CTA buttons, input focus borders, active tab underlines, calendar selections, tags, and the toggle ON state. Green is the universal action signal.
- Use `{colors.main}` (#2d84ed) only for MAIN badge type. It does not go on buttons.
- Keep content area and cards always on light surfaces (`{colors.surface-bg}` / `{colors.white}`). Dark surfaces are shell-only.
- Apply `transition: all 0.25s ease` to every interactive element.
- Invert button fill on hover: green fill → white bg + green text/border.
- Error state: change border to `{colors.danger}` and show error text below. Do not fill input red.
- Input focus: green border `{colors.green}`. No glow effect.
- Use the MAIN badge for media group type labels, TIME badge for time-conditioned schedules, SUB badge for general secondary types.
- Breadcrumb uses `>` separator with small (12px) muted text on the dark breadcrumb bar.

### Don't
- Don't use `{colors.main}` (#2d84ed) on buttons. Green is the button color.
- Don't put dark surfaces inside the content area. Content cards are always white.
- Don't use `{colors.green}` inside dark shell UI (GNB icons, topbar elements) — shell uses grayscale neutrals.
- Don't vary the 0.25s ease transition.
- Don't add shadows to content cards — white on light-gray provides sufficient depth without shadows.
- Don't use red for success states. `{colors.danger}` is exclusively for errors.
- Don't create new badge colors. Use the defined variant set only.
- Don't use underline as the only distinction for links — pair with `{colors.green}` color.

---

## Animation

| Token | Value | Applied To |
|---|---|---|
| `{transition.default}` | `all 0.25s ease` | All buttons, inputs, nav items, toggle, dropdown, tabs |
| `{transition.fill}` | `fill 0.25s ease` | GNB icon path fill |
| `{transition.width}` | `width 0.25s ease` | GNB expand/collapse |

No other duration or easing. All animations: `0.25s ease`.

---

## Responsive Behavior

| Name | Range | Notes |
|---|---|---|
| **Desktop** | ≥ 1440px | Canonical 1920×1080 layout |
| **Compact** | 1024–1439px | GNB defaults to collapsed |
| **Minimum** | 768–1023px | GNB as overlay / hidden |

**Desktop-primary tool.** No mobile breakpoint is defined. Below 768px renders at compact scale without further adjustment.

---

## Iteration Guide

1. **Shell first**: `<gnb>` + `<topbar>` + `<breadcrumb-bar>`. All three are always present and dark.
2. **Content structure**: One or more white `<page-card>` elements on light-gray content bg. Each card has a header row (title + action button) and optional tabs.
3. **Green for actions**: Any button that does something primary (등록, 저장, 다음) is `btn-primary` with green fill.
4. **Dark for shell actions**: Buttons inside the card header that destructively or navigably change context (수정하기, 수정 및 삭제) use `btn-dark`.
5. **Badge variants**: Confirm the schedule/content type before choosing a badge. MAIN=blue, TIME=slate-purple, SUB=gray, Sync=outlined. Never invent a new color.
6. **Forms**: White input on white card. Focus ring = green. Error = red border + text below. Labels above inputs at 14px.
7. **Tables**: All on white card. Clickable items are green text links. Thumbnails in dedicated cells.
8. **Transitions**: Always `0.25s ease`. No exceptions.

---

## Known Gaps

- **Exact breadcrumb bar height** (appears ~36px) needs measurement confirmation.
- **GNB active indicator** style (green left border vs. bg fill) — both patterns may exist per item type.
- **Mobile/tablet behavior** below 768px is not defined.
- **Color tokens as CSS variables** — all values extracted from Figma and should be implemented as `var(--token-name)`.
- **Dark popup** (component library only) vs **light popup** (content area) — context determines which to use.
- **Scrollbar styles** on content area not specified.
- **Footer bar** ("Dooh Service v 1.0" + "문의하기" button at bottom) — present on some pages, styling TBD.
