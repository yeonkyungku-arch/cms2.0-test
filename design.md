# CMS Dashboard — Design System
> **Version**: 2.0.1 | **Source**: Figma `iKYE9BxahJHeTd4UTIC6f9` (node 243:5406) | **Updated**: 2026.05.26

## Overview

This CMS dashboard is a **dark-theme data management interface** built around a collapsible dark sidebar (GNB) and a dark topbar. The application shell is a two-zone structure — a dark GNB on the left and a full-width dark topbar on top — with the content area occupying the remaining space. The entire UI hangs from this chassis across every page.

The color language is split into two roles: **brand green** (`{colors.brand-green}` — #58C65D) owns the logo mark and the toggle ON state only, while **interactive blue** (`{colors.main}` — #2d84ed) owns every in-page action — buttons, active indicators, and selections. All surfaces are dark grayscale; there is no light/white background mode.

Data display is the core task. Lists, cards, and popups dominate most pages. The dark surface system uses `grayscale/700` (#454C52) as the primary surface, `grayscale/800` (#383F45) for elevated containers (topbar, cards), and `grayscale/900` (#24292E) for the deepest backgrounds.

**Key Characteristics:**
- **Dark theme throughout.** Every surface is a dark grayscale. There is no white canvas mode inside the application.
- Two-zone shell: collapsible GNB sidebar (93px collapsed / 200px expanded) + dark topbar (60px) — every page uses this chassis.
- Two-color system: brand green (#58C65D) for logo/toggle-on only; interactive blue (#2d84ed) for all in-page actions. They never overlap in role.
- GNB is collapsible: collapsed shows icon-only (93px), expanded shows icon + label (200px).
- Navigation items: 대시보드, 미디어, 미디어그룹, 콘텐츠, 스케줄, 모니터링, 태그검색.
- A single `0.25s ease` transition governs every animation.
- All interactive hover states invert or darken — not lighten. Dark buttons darken further on hover.
- Modal shadow: `drop-shadow(0 4px 10px rgba(0,0,0,0.5))` — heavier than the old system due to dark surfaces.

---

## Colors

> **Source**: Figma variable definitions from node 243:5406.

### Brand
- **Brand Green** (`{colors.brand-green}` — #58C65D): The "DL" logo mark in the topbar and the toggle switch ON state. This is the only green in the entire application interior. It does not appear on buttons or interactive elements.
- **Tag Media Green** (`{colors.tag-media}` — #5BD660): Used exclusively for media-type tag badges.
- **Light Green** (`{colors.light-green}` — #C1E9C3): Hover/pressed tint on green-accented elements.

### Interactive (Blue)
- **Main Blue** (`{colors.main}` — #2d84ed): The single in-page interactive color. Fills primary buttons, active list highlights, selected states, and active nav indicators. Every "click me" signal inside the content area is this blue.
- **Blue 1** (`{colors.blue-1}` — #4892CB): Secondary blue, used for informational badges and secondary highlights.
- **Blue 2** (`{colors.blue-2}` — #D6EDFF): Very light blue fill, used for hover backgrounds on blue-accented elements.

### Secondary / Sub
- **Sub 1** (`{colors.sub-1}` — #9097B8): Purple-slate accent color used for "Time" type badges and secondary indicators.
- **Sub 2** (`{colors.sub-2}` — #E1E5F6): Light purple-slate background, paired with Sub 1 for tinted badge backgrounds.

### Status / Semantic
- **Danger** (`{colors.danger}` — #E97474): Error borders on textfields, error badge text, required field markers.
- **Gray 3** (`{colors.gray-3}` — #B5B5B5): Neutral/inactive state for muted actions.

### Grayscale (Dark Theme Surfaces)
All surfaces are dark grayscale. The scale runs from near-black to near-white; the application lives in the 700–900 range.

| Token | Value | Primary Usage |
|---|---|---|
| `{colors.grayscale-900}` | #24292E | Deepest background, extreme depth layers |
| `{colors.grayscale-800}` | #383F45 | Topbar bg, elevated card backgrounds, popup bg |
| `{colors.grayscale-700}` | #454C52 | GNB sidebar bg, main content surface, input backgrounds |
| `{colors.grayscale-600}` | #596066 | Dividers, inactive borders on dark surfaces |
| `{colors.grayscale-500}` | #676E76 | Muted icon fills, placeholder text on dark |
| `{colors.grayscale-400}` | #9EA5AD | Secondary text on dark surfaces |
| `{colors.grayscale-300}` | #CED2D6 | Light borders, separators |
| `{colors.grayscale-200}` | #E5E7EA | Very light borders |
| `{colors.grayscale-100}` | #F6F7F9 | Near-white surface accents |
| `{colors.grayscale-150}` | #EFF0F2 | Light surface tint |
| `{colors.grayscale-50}` | #FAFAFA | Near-white, rarely used |
| `{colors.white}` | #FFFFFF | Text on dark surfaces, icon fills on dark bg, card foreground |

---

## Typography

### Font Family
- **Primary**: System sans-serif stack (Pretendard or equivalent Korean CJK-compatible font). All elements in the system default to this stack.
- **Base size**: `14px` on desktop.

### Hierarchy

| Token | Size | Weight | Color | Use |
|---|---|---|---|---|
| `{typography.section-label}` | 14px | 400 | #9EA5AD (`grayscale/400`) | GNB nav labels (inactive) |
| `{typography.nav-active}` | 14px | 500 | #FFFFFF | GNB nav label (active item) |
| `{typography.topbar-user}` | 14px | 400 | #FFFFFF | Topbar user name |
| `{typography.body}` | 14px | 400 | #FFFFFF | Body text on dark surfaces |
| `{typography.body-muted}` | 14px | 400 | #9EA5AD | Secondary/muted body text |
| `{typography.input}` | 14px | 400 | #FFFFFF | Textfield typed value |
| `{typography.placeholder}` | 14px | 400 | #676E76 (`grayscale/500`) | Textfield placeholder |
| `{typography.badge-default}` | 12px | 500 | #FFFFFF | Badge label (Default size) |
| `{typography.badge-mini}` | 11px | 500 | #FFFFFF | Badge label (mini size) |
| `{typography.error-message}` | 12px | 400 | #E97474 | Textfield error message below input |
| `{typography.popup-title}` | 14px | 500 | #FFFFFF | Popup/modal heading |
| `{typography.popup-body}` | 13px | 400 | #9EA5AD | Popup/modal body text |
| `{typography.search-input}` | 14px | 400 | #FFFFFF | Search bar typed text |
| `{typography.search-placeholder}` | 14px | 400 | #676E76 | Search bar placeholder |

---

## Layout

### Spacing System
- **Base unit**: 4px. Structural values are multiples of 4 (8, 12, 16, 20, 24, 32, 40, 48).

| Token | Value | Primary Usage |
|---|---|---|
| `{spacing.xxs}` | 4px | Micro gaps, icon padding |
| `{spacing.xs}` | 8px | Item inner padding, badge padding |
| `{spacing.sm}` | 12px | Card inner padding, gap between elements |
| `{spacing.md}` | 16px | Section gaps, list item padding |
| `{spacing.lg}` | 24px | Card padding, popup padding |
| `{spacing.xl}` | 32px | Section separation |
| `{spacing.2xl}` | 48px | Major section gaps |

### Application Shell

```
<body>  bg: grayscale/900 (#24292E)
  ├── <gnb>      position: fixed left, width: 93px (collapsed) / 200px (expanded)
  │              bg: grayscale/700 (#454C52), height: 100vh
  ├── <topbar>   position: fixed top, width: 100%, height: 60px
  │              bg: grayscale/800 (#383F45)
  └── <main>     margin-left: 93px (or 200px), margin-top: 60px
                 bg: grayscale/700 (#454C52), overflow: auto
```

### GNB (Global Navigation Bar)

- **Collapsed width**: 93px
- **Expanded width**: 200px
- **Background**: `{colors.grayscale-700}` (#454C52)
- **Toggle button**: Arrow icon at top-right of GNB panel. Collapses/expands the sidebar.
- **Nav items** (top to bottom): 대시보드, 미디어, 미디어그룹, 콘텐츠, 스케줄, 모니터링 | (divider) | 태그검색
- **Item height**: 46px
- **Icon size**: 32×32px, centered or left-padded
- **Collapsed state**: icon only, no label text
- **Expanded state**: icon (32px) + label text (14px) side by side, 8px gap
- **Active item**: text color `#FFFFFF`, font-weight 500, background highlight (darker fill or left accent line using `{colors.main}`)
- **Inactive item**: icon fill `{colors.grayscale-400}` (#9EA5AD), label `{colors.grayscale-400}`
- **Hover item**: icon fill `{colors.white}` (#FFFFFF), label `{colors.white}`, bg `{colors.grayscale-600}` (#596066)
- **Divider**: 1px horizontal line `{colors.grayscale-600}` (#596066) between main nav and utility nav (태그검색)

### Topbar

- **Height**: 60px
- **Background**: `{colors.grayscale-800}` (#383F45)
- **Left**: "DL" logo mark in `{colors.brand-green}` (#58C65D), ~24–32px height
- **Right**: user avatar (circle) + user name text (14px, white) + company name (subdued)
- **No tab navigation** in the topbar — page navigation is handled entirely by the GNB sidebar.

### Content Area

- **Background**: `{colors.grayscale-700}` (#454C52)
- **Offset**: `margin-left: 93px` (collapsed) or `200px` (expanded); `margin-top: 60px`
- **Padding**: varies by page (typically 20–24px)
- **Scrolls independently**: `overflow: auto`

---

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Base surface | `{colors.grayscale-700}` (#454C52), no shadow | Content area bg, GNB bg |
| Elevated container | `{colors.grayscale-800}` (#383F45), no shadow | Topbar, card/panel bg |
| Deepest | `{colors.grayscale-900}` (#24292E) | Maximum depth, outer shell |
| Input | `{colors.grayscale-700}` bg + `{colors.grayscale-600}` border | Textfields, searchbar |
| Modal / Popup | `{colors.grayscale-800}` bg + `drop-shadow(0 4px 10px rgba(0,0,0,0.5))` | Popup dialogs |

**Shadow philosophy.** Shadows are heavier than light-theme systems because dark surfaces provide less visual contrast. The single shadow value `rgba(0,0,0,0.5)` at 10px radius is the only shadow in the system — applied exclusively to modals and floating popups. Cards and panels use surface color differences for elevation, not shadows.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Table cells, flush dividers |
| `{rounded.xs}` | 2px | Mini badges |
| `{rounded.sm}` | 4px | Default: textfields, dropdowns, small buttons |
| `{rounded.md}` | 6px | Badges (Default size), searchbar category pill |
| `{rounded.lg}` | 8px | Card containers, popup containers |
| `{rounded.pill}` | 100px | Toggle track, full-pill buttons |
| `{rounded.full}` | 50% | Avatar circles, notification dots, toggle thumb |

---

## Components

### GNB Sidebar

**`gnb-sidebar`** — Fixed left panel, `{colors.grayscale-700}` (#454C52). Contains:
- **Collapse toggle** (top): Arrow button (`→` / `←`). Width 36px, height 36px, bg `{colors.grayscale-800}`, `border-radius: 50%`, positioned at top-right of GNB.
- **Nav item list**: Vertical list. Each item `height: 46px`, `padding: 0 12px`. Icon 32×32px. Label appears only in expanded state, `font-size: 14px`.
  - Inactive: icon fill `{colors.grayscale-400}`, label color `{colors.grayscale-400}`
  - Active: icon fill `{colors.white}`, label color `{colors.white}`, `font-weight: 500`, left border `3px solid {colors.main}` or bg tint
  - Hover: icon fill `{colors.white}`, label `{colors.white}`, row bg `{colors.grayscale-600}`
- **Divider**: `1px solid {colors.grayscale-600}`, full width, between main nav and utility nav
- Transition: `all 0.25s ease` on width (collapse/expand) and fill

### Topbar

**`topbar-bar`** — Full-width fixed bar, `height: 60px`, `background: {colors.grayscale-800}` (#383F45). Contains:
- **Logo**: "DL" mark, `color: {colors.brand-green}`, left-aligned with `padding-left: 20px`
- **User area** (right): Avatar circle (32×32px, bg `{colors.grayscale-600}`) + name text (14px, white) + org name (12px, `{colors.grayscale-400}`), `padding-right: 20px`

### Textfield

**`textfield`** — All text inputs follow this pattern:
- `height: 37px`, `background: {colors.grayscale-700}` (#454C52), `border: 1px solid {colors.grayscale-600}` (#596066)
- `border-radius: {rounded.sm}` (4px), `font-size: 14px`, `color: {colors.white}`
- Placeholder: `color: {colors.grayscale-500}` (#676E76)
- **Focusing state**: `border-color: {colors.main}` (#2d84ed), outline none
- **Typed state**: `border-color: {colors.grayscale-600}`, content visible
- **Error state**: `border-color: {colors.danger}` (#E97474), error message below (`font-size: 12px, color: #E97474`)
- **Suffix text** (e.g. "초"): `font-size: 14px`, `color: {colors.grayscale-400}`, right-aligned inside input or as adjacent label
- Transition: `all 0.25s ease`

### Searchbar

**`searchbar`** — Two sizes:
- **Big** (`height: 44px`): Used as primary page-level search
- **Small / Default** (`height: 36px`): Used inside panels and filters

Structure: `[카테고리 dropdown] [search icon] [text input] [clear ✕ button (when typed)]`
- Container bg: `{colors.grayscale-700}` or `{colors.grayscale-800}`, `border: 1px solid {colors.grayscale-600}`, `border-radius: {rounded.sm}`
- Category dropdown: left-attached pill, bg slightly darker, `border-right: 1px solid {colors.grayscale-600}`
- Search icon: `{colors.grayscale-400}` (#9EA5AD), 16px
- Input text: `{colors.white}`, placeholder `{colors.grayscale-500}`
- Clear button (✕): appears on typed state, `color: {colors.grayscale-400}`, right-aligned

### Badge

**`badge`** — Used to label schedule types, states, and categories.

| Variant | Background | Text | Border | Size |
|---|---|---|---|---|
| MAIN | `{colors.main}` (#2d84ed) | white | none | Default |
| SUB | `{colors.grayscale-600}` | white | none | Default |
| Sync | transparent | white | 1px `{colors.grayscale-400}` | Default |
| 등록대기 | transparent | `{colors.grayscale-400}` | 1px `{colors.grayscale-400}` | Default |
| Time | `{colors.sub-1}` (#9097B8) | white | none | Default |
| MON | `{colors.grayscale-800}` | white | none | Default |
| K-type | `{colors.grayscale-100}` | `{colors.grayscale-800}` | none | mini |

**Default size**: `height: 20px`, `padding: 0 8px`, `border-radius: {rounded.md}` (6px), `font-size: 12px`, `font-weight: 500`
**Mini size**: `height: 16px`, `padding: 0 6px`, `border-radius: {rounded.xs}` (2px), `font-size: 11px`, `font-weight: 500`

### Toggle

**`toggle`** — `width: 32px, height: 18px`, `border-radius: {rounded.pill}` (100px)
- **OFF state**: track bg `{colors.grayscale-600}` (#596066), thumb `{colors.white}` circle (14×14px), positioned at `left: 2px`
- **ON state**: track bg `{colors.brand-green}` (#58C65D), thumb shifts to `left: calc(100% - 16px)`
- Thumb: `width: 14px, height: 14px, border-radius: 50%, background: {colors.white}`
- Transition: `all 0.25s ease-in` on track bg and thumb position

### Popup / Modal

**`popup`** — Floating dialog container:
- Background: `{colors.grayscale-800}` (#383F45)
- `border-radius: {rounded.lg}` (8px)
- `box-shadow: 0 4px 10px rgba(0,0,0,0.5)`
- Padding: `24px`
- **1-button variant**: title (14px, 500, white) + body text (13px, 400, #9EA5AD) + 1 full-width action button
- **2-button variant**: title + body + 2 side-by-side buttons (cancel + confirm)

### Dropdown

**`dropdown`** — Select / filter control:
- Collapsed: `height: 44px`, bg `{colors.grayscale-700}`, border `{colors.grayscale-600}`, `border-radius: {rounded.sm}`, text `{colors.white}`, chevron icon `{colors.grayscale-400}`
- Expanded: dropdown list extends below, bg `{colors.grayscale-800}`, each option `height: 40px`, hover bg `{colors.grayscale-700}`

### List Items

**`list/미디어그룹`** — Accordion list row:
- Default (closed): `height: 57px`, bg `{colors.grayscale-700}`, text white, chevron icon right
- Sub (closed): `height: 57px`, slightly indented (16px left padding added)
- Open (expanded): `height: 199px`, reveals child content below row
- Hover: bg `{colors.grayscale-600}` (#596066)

**`list/스케줄`** — Schedule list row:
- Closed: `height: 86px`
- Open: `height: 162px`
- Type variants: sync, sync_2.0, 일반, 일반_2.0

**`list/콘텐츠`** — Content list row: `height: 86px`, type variants: 콘텐츠, URL 콘텐츠, 텍스트 콘텐츠

**`list/미디어`** — Media list row: `height: 57px`

### Calendar / Date Picker

**`date`** — Individual date cell, `width: 32px, height: 32px`:
- Default: bg transparent, text `{colors.white}`
- Weekday: text `{colors.grayscale-400}`
- Disabled: text `{colors.grayscale-600}`, not interactive
- Hover: bg `{colors.grayscale-600}`, `border-radius: 50%`
- Checked/Selected: bg `{colors.main}` (#2d84ed), `border-radius: 50%`, text white
- Range start/end: half-filled bg, `border-radius: 50%` on the outer half
- Range middle: full bg fill `rgba(45,132,237,0.2)`, no border-radius

**`calendar_account`** — Monthly calendar cell, `width: 76px, height: 75px`:
- Default, today, scheduled, selected, disabled states
- Selected: `{colors.main}` accent

### Card

**`card`** — Content thumbnail card (`width: 256px`):
- Types: sync, 체인, default/싱글, 텍스트, URL
- Checked (selected): blue border `2px solid {colors.main}`, checkmark overlay
- Unchecked: `{colors.grayscale-700}` bg, `1px solid {colors.grayscale-600}` border
- Height: 228–268px depending on content type

**`card/schedule`** — Schedule summary card (`width: 340–349px, height: 92px`):
- Types: 콘텐츠, 미디어, 미디어그룹, 콘텐츠선택, disabled, 텍스트콘텐츠
- Disabled state: reduced opacity, no interaction

### Checkbox & Radio

**`button/checkbox`** — `width: 18px, height: 18px`:
- Default: empty square, border `{colors.grayscale-400}`
- Selected: filled `{colors.main}`, checkmark white
- Confirmed: filled `{colors.main}`, double-check mark
- Disabled: opacity 0.4

**`button/radio`** — `width: 18px, height: 18px`:
- Default: empty circle, border `{colors.grayscale-400}`
- Selected: outer ring `{colors.main}`, inner dot `{colors.main}`

### FTB (Floating Tool Bar)

**`button/ftb`** — Vertical floating action button strip (`width: 64px`):
- Open/closed variants
- `height: 320px`, dark bg, icon buttons vertically stacked
- Used for contextual actions on the right side of content panels

### Monitoring Cards

**`card/monitoring`** — Sensor/status monitoring tile (`width: 135px, height: 101px`):
- Categories: 메모리, 업데이트, 미접속, 불안정, 미설치, 충격감지, 도어열림, 온습도이상, 미세먼지, CPU사용량, 셋탑온도, RAM, HDD, 네트워크 등
- Default state: normal bg, metric display
- Error state: `{colors.danger}` (#E97474) accent/border

### Map Pins

**`media_pin` / `mediagroup_pin`** — Map marker icons (`width: 40px, height: 40px`):
- Default: standard pin
- Error: `{colors.danger}` fill
- Clicked: active/selected state
- Info: info overlay variant

### Dim / Loading Overlay

**`dim`** — Full-screen overlay (`width: 1920px, height: 1080px`):
- Default: `background: rgba(0,0,0,0.5)`
- Loading: spinner or animation centered
- List loading: skeleton placeholder rows

### Tapbar

**`tapbar`** — Horizontal tab selector (`width: 132px, height: 47px` per tab):
- Selected: bg `{colors.main}`, text white, `border-radius: {rounded.sm}`
- Unselected: bg transparent, text `{colors.grayscale-400}`

### Tooltip

**`tooltip`** — Inline help tooltip:
- Bg `{colors.grayscale-800}`, text white, `border-radius: {rounded.sm}`
- `width: 623px, height: 54px` (default variant)
- Arrow indicator below or above

---

## Do's and Don'ts

### Do
- Use `{colors.main}` (#2d84ed) for all in-page interactive elements — buttons, active states, toggles, selections, active nav. This is the single in-page action color.
- Use `{colors.brand-green}` (#58C65D) exclusively for the logo mark and the toggle ON state. It does not appear on buttons or navigation highlights.
- Apply `transition: all 0.25s ease` to every interactive element. Universal animation signature.
- Use darker surface colors for depth — `grayscale/800` sits above `grayscale/700`, `grayscale/900` is the deepest layer.
- Error states use `{colors.danger}` (#E97474) — not red-filled backgrounds, only border and text color changes.
- Badges must use the defined variant set (MAIN, SUB, Sync, 등록대기, Time, MON). Do not create new color badge variants.
- Modal/popup shadow is always `0 4px 10px rgba(0,0,0,0.5)`. Do not use lighter shadows on dark surfaces.
- Toggle ON always uses `{colors.brand-green}` (#58C65D). This is the only approved green inside the application interior besides the logo.

### Don't
- Don't use any light/white canvas as a page background. This is a dark-only theme.
- Don't use `{colors.brand-green}` (#58C65D) for buttons, active nav items, or interactive highlights — only for logo and toggle ON.
- Don't introduce a third interactive color. The system has exactly two accent families: green (logo/toggle only) and blue (actions/data).
- Don't use white or light gray as a surface background inside the application — all surfaces are dark grayscale.
- Don't add decorative gradients. All surfaces are flat solid colors.
- Don't vary the `0.25s ease` transition duration or easing on any interactive element.
- Don't use shadows on cards or list items — only modals and popups get shadows. Elevation is achieved through surface color differences.
- Don't use `{colors.main}` (#2d84ed) for the toggle ON state — that belongs to `{colors.brand-green}`.

---

## Animation

| Token | Value | Applied To |
|---|---|---|
| `{transition.default}` | `all 0.25s ease` | All buttons, nav items, dropdown, toggle track and thumb, modal overlay, FTB |
| `{transition.fill}` | `fill 0.25s ease` | SVG icon path fill in GNB |
| `{transition.width}` | `width 0.25s ease` | GNB sidebar collapse/expand |

No other duration or easing exists. All transitions are `0.25s ease`.

---

## Responsive Behavior

### Breakpoints

| Name | Range | Description |
|---|---|---|
| **Desktop** | ≥ 1440px | Full layout; canonical design at 1920px canvas |
| **Compact** | 1024–1439px | GNB stays collapsed by default; content area expands |
| **Minimum** | 768–1023px | GNB hidden or overlay mode |

**This is a desktop-primary management tool.** The canonical canvas is 1920×1080px. Responsive behavior is secondary and not fully specified at mobile scales.

### GNB at Compact
- Default to collapsed (93px) on page load
- Expand on hover or explicit toggle click
- Overlay mode (floats above content, not pushing) at narrowest breakpoint

---

## Iteration Guide

1. When building a new page surface, start with the shell: `<gnb>` + `<topbar>` + `<main>`. Every page is this two-zone chassis.
2. Inside `<main>`, organize content using list rows, cards, and popups. There are no "article blocks" — content is organized in themed panels.
3. Reference the badge variant set when labeling schedule types or content states. Do not invent new badge colors.
4. For search: always use the `searchbar` component (category dropdown + input). Never use a bare `<input>` for page-level search.
5. The only two accent colors are `{colors.main}` (#2d84ed) for in-page actions and `{colors.brand-green}` (#58C65D) for logo/toggle. Choosing between them is simple: action/data = blue, logo/toggle = green.
6. Error states change border and message text to `{colors.danger}` (#E97474). Do not fill inputs red.
7. Every hover state darkens the element (moves one step down the grayscale scale) or transitions to `{colors.grayscale-600}` bg.
8. All animations: `transition: all 0.25s ease`. No exceptions.

---

## Known Gaps

- **No mobile breakpoint fully specified.** GNB overlay behavior at <768px is not defined in the component set.
- **Typography weights** for Korean body text are not explicitly specified as font-face declarations — assumed to follow system/webfont rendering.
- **Color tokens are not defined as CSS custom properties.** All values are extracted from Figma variables and should be implemented as `var(--token-name)` in code.
- **GNB active indicator style** (border-left accent vs. full-row bg fill) needs confirmation from detailed component inspection.
- **Content area bg color** may vary slightly per page context (some pages use `grayscale/800` for content cards over a `grayscale/700` base).
- **No light mode.** The system is dark-surface dominant. No `prefers-color-scheme: light` support is defined.
- **Monitoring card states** (selected vs. default with box) need implementation guidance beyond color — layout differences exist in the component variants.
