# CMS Dashboard — Design System

## Overview

This CMS dashboard is a **data-dense management interface built around a bold green sidebar and a restrained blue-accent hierarchy**. The application shell is a fixed three-column structure — a narrow green sidebar housing SVG icon navigation, a white utility header with horizontal page-tabs, and a light-gray content section that hosts the actual data surfaces. The entire UI hangs from this chassis across every page.

The color language is deliberately split between two roles: **brand green** (`{colors.brand-nav}` — #58C65D) owns the navigation chrome and the authentication surface, while **interactive blue** (`{colors.interactive-primary}` — #409EFF) owns every in-page action — buttons, active indicators, pagination, toggle switches, and tab selection. These two color families never compete; they operate in separate zones of the page.

Data display is the core task. Tables dominate most pages, and the table system is consistent and quiet — thin `#EBEEF5` hairline borders, muted `#909399` header text on an `#F5F7FA` background, and `#000000` body data. Metric summary cards (State Panels) appear above tabular content on main and sub-pages, presenting single large counters with an activated blue state (`{colors.interactive-action}` — #0277EF) that doubles as the highlight utility color across the entire system.

The typographic system is HelveticaNeue across four weights (300, 400, 500, 700). Weight 400 is the workhorse for all body and data content. Weight 700 is reserved exclusively for page-title headings and state counter figures. Weight 300 appears in subdued contexts — state card labels, login link text, environment prose. Weight 500 appears only on `.article-title` (section headings) and `.btn-round`. There is no weight 600 in the base font family; the login button synthesizes it.

Responsive behavior covers a single range: **768px–1439px**. There is no mobile breakpoint. This is a desktop-primary management tool that scales modestly for smaller desktop and tablet screens.

**Key Characteristics:**
- Three-zone application shell: green sidebar (96px) + white header + gray content area — every page uses this chassis.
- Two-color system: brand green (#58C65D) for navigation chrome; interactive blue (#409EFF) for all in-page actions. They never overlap.
- A single `0.25s ease` transition governs every animation in the system — buttons, overlays, nav icons, dropdowns.
- Table-first data presentation. The table system is the most developed component in the codebase.
- State Panel cards sit above most data views — large bold counters that turn `{colors.interactive-action}` (#0277EF) when active.
- No mobile breakpoint. One responsive range covers 768–1439px; desktop (≥1440px) is the canonical layout.
- All interactive hover states invert their fill — a colored button becomes white with colored text/border, not a shade lighter. This is the universal hover grammar.
- The navigation active indicator is a rotated square (diamond) — not an underline, not a pill — protruding into the content area.

---

## Colors

> **Source files analyzed:** layout.css, components.css, auth.css, main.css, contents.css, device.css, admin.css, monitor.css, schedule.css, reset.css.

### Brand & Navigation
- **Brand Nav Green** (`{colors.brand-nav}` — #58C65D): The sidebar background, the login form border and button fill, and the toggle on-state in the authentication surface. This color IS the brand. It appears nowhere else in the authenticated app interior.
- **Nav Icon Default** (`{colors.brand-nav-icon-default}` — #328935): The SVG path fill for unselected nav icons. A darker, more saturated green than the sidebar itself.
- **Nav Icon Hover** (`{colors.brand-nav-icon-hover}` — #0B4E0D): A deep forest green for icon hover. Maximum contrast against the `#58C65D` sidebar.
- **Nav Icon Active** (`{colors.brand-nav-icon-active}` — #FFFFFF): Active nav icons turn white. The active indicator diamond behind them provides the spatial anchor.
- **Login Hover** (`{colors.brand-nav-hover}` — #89D58C): A lighter tint of brand green used only on the login submit button hover state.
- **Online / Active User** (`{colors.brand-online}` — #0FB716): Used for the user name link in the header and the login button focus-state text. A pure signal-green for "live" state.

### Interactive (Blue)
- **Interactive Primary** (`{colors.interactive-primary}` — #409EFF): The single in-page interactive color. Fills `btn-primary`, colors the active tab underline, drives the pagination active link, fills the toggle switch, marks the date picker selection, colors all `.tag` links, and supplies the active subnav background root. Every "click me" signal inside the content area is this blue.
- **Interactive Action** (`{colors.interactive-action}` — #0277EF): A slightly deeper blue used for the `.highlight` utility class, active state counter text in the State Panel, tag link hover, and the SW-update submit note text. Also used for file names in the signup document list.
- **Interactive Light** (`{colors.interactive-light}` — #B3D8FF): The border color on `.btn-plain` and the active border color on `.btn-wrap` segments. Also the hover fill for `.btn-plain`.
- **Interactive Background** (`{colors.interactive-bg}` — #ECF5FF): The active fill on `.btn-wrap` segments and the `.bg-primary` utility class.
- **Interactive Background Subtle** (`{colors.interactive-bg-subtle}` — rgba(64,158,255,0.16)): The very faint blue pill background on active subnav links.
- **Interactive Hover** (`{colors.interactive-hover}` — #D8E7F7): The hover state on individual date picker calendar cells.
- **Ad Highlight** (`{colors.interactive-ad-bg}` — #F0F7FF): Calendar day cells that already contain scheduled content get this very pale blue background.

### Status / Semantic
- **Danger** (`{colors.status-danger}` — #FF0000): The `.danger` utility class, the notification dot on user icons, and required field asterisks in forms.
- **Available** (`{colors.status-available}` — #52B65C): Calendar day availability indicator dot (green = slots available).
- **Unavailable** (`{colors.status-unavailable}` — #EB6A4E): Calendar day unavailability dot and the error-state border on SubState Panel cards.
- **Chart Series 1** (`{colors.chart-series-1}` — #59A0E9): The schedule graph legend indicator square. A desaturated cornflower blue distinct from interactive blue.

### Surfaces
- **App Background** (`{colors.surface-app-bg}` — #171717): The outermost `html/body` background. A near-black that frames the 1920px-max content area.
- **Section Background** (`{colors.surface-section}` — #ECECEC): The content area background — every scrollable page surface. Also used as the nav active diamond indicator fill, creating a "peek through" optical illusion.
- **White** (`{colors.surface-white}` — #FFFFFF): Header, article cards, modal content, all form inputs, button hover states.
- **Input Background** (`{colors.surface-input}` — #F4F4F5): Search bars, date pickers, and form-level search fields inside the content area.
- **Header Search Background** (`{colors.surface-input-header}` — #F4F4F4): The header search input specifically — a fractional step darker than `F4F4F5`.
- **Table Header Background** (`{colors.surface-table-header}` — #F5F7FA): `<th>` cell background and the datetime picker column headers.
- **Thumbnail Placeholder** (`{colors.surface-thumbnail}` — #C4C4C4): The gray fill shown in content-add thumbnail slots before an image is uploaded.
- **Result Footer** (`{colors.surface-result-footer}` — #E0E0E0): The signup result page footer band.
- **State Panel Container** (`{colors.surface-state-bg}` — rgba(132,132,132,0.2)): The translucent pill container that groups State Panel cards.

### Borders & Hairlines
- **Border Default** (`{colors.border-default}` — #D3D4D6): General input, select, and search control borders.
- **Border Table** (`{colors.border-table}` — #EBEEF5): Table cell borders throughout. Also used at 3px weight for the send-mail `fromTo-cells` container.
- **Border Subtle** (`{colors.border-subtle}` — #DCDFE6): Textarea, tab nav, and select-modal list borders. Slightly softer than `{colors.border-default}`.
- **Border Divider** (`{colors.border-divider}` — #E3E3E3): SubState card borders in the default (non-error) state.
- **Border Separator** (`{colors.border-separator}` — #878787): The underline beneath State Panel card label text.
- **Border Map** (`{colors.border-map}` — #D6D6D6): The border on the Google Map iframe and the site photo thumbnail.
- **Border Dropdown** (`{colors.border-dropdown}` — #ECECEC): The user dropdown caret pseudo-element border — same as the section background, creating an invisible seam.

### Text
- **Text Primary** (`{colors.text-primary}` — #000000): All table `<td>` data, modal body text, active nav link text.
- **Text Secondary** (`{colors.text-secondary}` — #909399): Form labels, table `<th>` headers, inactive tab text, result-page section titles.
- **Text Muted** (`{colors.text-muted}` — rgba(0,0,0,0.6)): Inactive header nav links.
- **Text Subnav** (`{colors.text-subnav}` — rgba(0,0,0,0.5)): Subnav pill link text.
- **Text Page Title** (`{colors.text-page-title}` — #989898): The `.header-title` page name — intentionally subdued so it reads as orientation, not content.
- **Text Disabled** (`{colors.text-disabled}` — #838383): Logout menu item text.
- **Text Gray** (`{colors.text-gray}` — #808080): Pagination prev/next buttons, login copyright and link text.
- **Text Modal Title** (`{colors.text-modal-title}` — #303133): Modal `<h1>` headers specifically — darker than secondary text, lighter than primary.
- **Text UI Muted** (`{colors.text-ui-muted}` — #606266): The `.btn-wrap` inactive segment text and wrap-title labels.
- **Text Placeholder** (`{colors.text-placeholder}` — #D9D9D9): Input placeholder text.
- **Text Note** (`{colors.text-note}` — #9B9B9B): Signup form footer annotation text.
- **Text Calendar** (`{colors.text-calendar}` — #909090): Calendar slot-count labels (the "remaining slots" number shown below the day date).

---

## Typography

### Font Family
- **Primary**: `HelveticaNeue, sans-serif` — a custom webfont loaded via four `@font-face` declarations from `../fonts/`. The four faces are: Thin (300), Light (400), Medium (500), Bold (700). All elements in the system default to this stack.
- **Weight ladder**: 300 / 400 / 500 / 700. Weight 600 is not defined as a separate face; it appears only on the login submit button where the browser synthesizes it between 500 and 700.
- **Base size**: `14px` on `html/body` (desktop); `12px` at 768–1439px.

### Hierarchy

| Token | Size | Line Height | Weight | Color | Use |
|---|---|---|---|---|---|
| `{typography.page-title}` | 28px | 34px | 700 | #989898 | `.header-title` — page identity, always muted gray |
| `{typography.section-title}` | 18px | 22px | 500 | #000000 | `.article-title` — section card heading |
| `{typography.nav-primary}` | 18px | 22px | 300 | rgba(0,0,0,0.6) | Header nav link (inactive) — weight 300 signals passive navigation |
| `{typography.modal-title}` | 17px | 24px | 400 | #303133 | Modal header h1 |
| `{typography.login-button}` | 20px | 24px | 600 | #FFFFFF | Login submit button — the only 600-weight use |
| `{typography.body}` | 14px | 17px | 400 | #000000 | Base body, inputs, table `<th>`, btn-sm, pagination, labels in some contexts |
| `{typography.body-table}` | 13px | 23px | 400 | #000000 | Table `<td>`, btn-sm2, tab nav links, content-area body text |
| `{typography.body-small}` | 12px | 14px | 400 | #409EFF | Breadcrumb, subnav links |
| `{typography.caption}` | 11px | 13px | 500 | #949494 | Graph legend — the only weight-500 text outside section titles |
| `{typography.label}` | 14px | 17px | 400 | #909399 | Form labels, `.span-label` — the standard form annotation size |
| `{typography.state-counter}` | 30px | 43px | 700 | #000000 | State Panel `<h1>` counter — the largest type in the UI |
| `{typography.state-label}` | 14px | 17px | 300 | #000000 | State Panel card label — weight 300 signals supplemental context |
| `{typography.calendar-title}` | 24px | auto | 400 | inherit | FullCalendar toolbar month/year title |
| `{typography.alert-body}` | 16px | 19px | 300 | inherit | Alert modal body paragraph — weight 300 for soft informational tone |
| `{typography.mini}` | 11px | 19px | 400 | inherit | `.btn-mini` — the smallest button size |

### Responsive Scale (768–1439px)

The global `font-size` drops from `14px` to `12px`. Key overrides cascade from this:

| Element | Desktop | Responsive |
|---|---|---|
| `.header-title` | 28px | 20px |
| Header nav link | 18px | 12px |
| Header subnav link | 12px | 10px |
| `.article-title` | 18px | 13px |
| `<th>` | 14px | 10px |
| `<td>` | 13px | 10px |
| `.modal-header h1` | 17px | 15px |
| State counter `<h1>` | 30px | 21px |
| State card label | 14px | 10px |
| Form label | 14px | 10px |
| Input / Select | 14px | 10px |
| `.btn-sm` | 14px | 10px |
| `.btn-round` | 14px | 10px |
| Calendar toolbar | 24px | 17px |
| Login button | 20px | 14px |
| Login input | ~16px | 11px |

### Principles

- **Weight 300 is passive.** It appears on state card labels, login links, copyright, and inactive header nav links. Anywhere the text should recede rather than assert.
- **Weight 400 is the workhorse.** All body text, table data, inputs, modal titles, and most buttons run at 400.
- **Weight 500 is for structural headings only.** `.article-title` section heads and the `.btn-round` button weight. Not used for body emphasis.
- **Weight 700 is for counters and page titles.** The page title (`.header-title`) and the State Panel counter (`<h1>`) are the only 700-weight elements. Weight 700 means "this is the most important number on the screen."
- **No weight 600 in the hierarchy.** Except the login button, which appears to synthesize between faces. Avoid using 600 inside the application interior.
- **14px is the floor for interactive elements.** Inputs, buttons, and labels all run at 14px on desktop. The only elements smaller are breadcrumbs (12px), subnav pills (12px), and graph captions (11px). Nothing interactive goes below 11px.
- **Line height 23px is the table rhythm.** Both `<th>` (14px/23px) and `<td>` (13px/23px) share the same 23px line height, creating a stable vertical grid inside tables regardless of font size difference.

---

## Layout

### Spacing System
- **Base unit**: 4px. Most structural values are multiples of 4 (8, 12, 16, 20, 24, 36, 48, 60, 148).
- Sub-base values (3, 5, 6, 7, 9) appear only in tight typographic micro-adjustments and responsive overrides.
- The system has no CSS custom properties for spacing — all values are hardcoded.

**Proposed tokens from extracted values:**

| Token | Value | Primary Usage |
|---|---|---|
| `{spacing.xxs}` | 4px | Micro adjustment, breadcrumb divider |
| `{spacing.xs}` | 8px | Responsive compact padding, article-inner responsive |
| `{spacing.sm}` | 12px | Article header/footer margin, modal header margin, default label gap |
| `{spacing.md}` | 16px | Header title margin, form section gap |
| `{spacing.lg}` | 24px | Header nav item gap, header title top margin |
| `{spacing.xl}` | 36px | Nav item bottom gap, grid row-gap (contents, schedule) |
| `{spacing.2xl}` | 50px | Section top padding, article bottom margin |
| `{spacing.3xl}` | 60px | State panel bottom margin |
| `{spacing.nav-offset}` | 148px | Section left padding (96px nav + 52px breathing room) |

### Application Shell

The entire application is a centered flex column inside `<body>`, capped at `1920px` wide, on an `#171717` near-black background.

```
<body>  max-width: 1920px, bg: #171717, display: flex, flex-direction: column
  ├── <nav>     position: absolute, left: 0, width: 96px, height: 100vh, bg: #58C65D
  ├── <header>  width: 100%, bg: #FFFFFF, padding-left: 120px
  └── <section> width: 100%, height: 100%, bg: #ECECEC, padding: 50px 87px 0 148px
```

The header's `padding-left: 120px` gives 24px of breathing room past the 96px sidebar. The section's `padding-left: 148px` adds another 52px gap beyond the header edge — this asymmetric offset is intentional and creates the page's characteristic left-margin rhythm.

### Sidebar Navigation

- **Width**: 96px (responsive: 68px)
- **Background**: `{colors.brand-nav}` (#58C65D)
- **Logo area**: Top of sidebar, image set to `width: 100%`
- **Icon list**: `.nav-wrap`, `margin-top: 210px` (responsive: 150px). Items are `24px` wide (icon width), `36px` bottom margin.
- **Active indicator**: A `36×36px` square rotated 45° (`transform: rotate(45deg)`) positioned to the right of the active icon at `top: -7px, right: -64px`. Background is `{colors.surface-section}` (#ECECEC) — the same color as the content area — creating the illusion of a diamond peek-hole through the sidebar. Border-radius `4px` on the rotated square gives it slightly rounded diamond points.

### Header

- **Height**: Defined by padding (`18px 16px 12px 120px`) plus content. No fixed height.
- **Top row** (`.header-ui`): Left side — pill search input (`195px × 22px`, border-radius `30px`). Right side — user name link + notification icons + dropdown.
- **Below top row** (on sub-pages): `.header-title` (page name, `28px/34px`, `700`, `#989898`) → `.header-nav` (horizontal tab list) → `.header-subnav` (contextual sub-nav pills, visible only when a nav tab is active).

### Content Section

- **Background**: `{colors.surface-section}` (#ECECEC)
- **Padding**: `50px 87px 0 148px` (clears sidebar + adds breathing room)
- **Scrolls independently**: `overflow: auto`
- **Article blocks**: `margin-bottom: 50px`. Each `<article>` can have `.article-header` (margin-bottom 12px), `.article-inner` (white card, padding 12px), and `.article-footer` (margin-top 12px).
- **Width helpers**: `.article-30/40/50/60/70` split the section into proportional columns (30%, 40%, 50%, 60%, 70%). At 768–1023px, `.article-50` and `.article-60` collapse to 100%.

### Grid System

- `.grid-container` uses CSS Grid with `display: grid`.
- Column patterns vary by page context:
  - Default (contents, schedule): `min-content repeat(4, auto)` — 5 columns
  - Main dashboard: `min-content repeat(5, auto)` — 6 columns
  - Monitor: `min-content repeat(3, auto)` — 4 columns
  - Schedule: `auto repeat(4, auto)` — 5 columns, first column auto-width
- Row gaps: `36px` (contents, schedule), `28px` (monitor).

---

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Section background, tables, tab panels |
| Input border | `1px solid {colors.border-default}` | All form inputs, selects |
| Table hairline | `1px solid {colors.border-table}` | Table cell grid lines |
| Article card | No shadow; white bg on gray section creates implicit lift | `.article-inner` cards |
| Header bar | `box-shadow: 0 0 10px rgba(0,0,0,0.1)` | `<header>` — the only full-width shadow in the layout shell |
| State card | `box-shadow: 0 0 20px rgba(0,0,0,0.1)` | State Panel metric cards |
| User dropdown | `box-shadow: 0 0 4px rgba(0,0,0,0.25)` | `.user-wrap ul` popover |
| Modal content | `box-shadow: 0 1px 3px rgba(0,0,0,0.3)` | Modal overlay content box |
| Login button | `box-shadow: 2px 2px 4px rgba(0,0,0,0.15)` | Login form submit button |
| Login input wrap | `filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.07))` | Login input field group |

**Shadow philosophy.** Shadows are used functionally, not decoratively. The application shell layers are separated by color (dark bg → white header → gray section → white cards) rather than shadows. The header shadow anchors the header as a persistent layer above scrolling content. State card shadows lift metric summaries above the flat table content below them. Modal and dropdown shadows signal floating surfaces. No decorative depth — only structural depth.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Middle segments of `.btn-wrap` groups, map modal |
| `{rounded.xs}` | 2px | Modal content, year-nav button corners |
| `{rounded.sm}` | 4px | Default: inputs, selects, buttons, user dropdown, `.btn-wrap` end-caps, date-wrap |
| `{rounded.md}` | 5px | Login form card container |
| `{rounded.subnav}` | 20px | Subnav pill links |
| `{rounded.toggle}` | 13px | Toggle switch track (width/height: 26px/16px → 13px = height/2) |
| `{rounded.state-panel}` | 10px | State Panel pill container |
| `{rounded.pill-round}` | 80px | `.btn-round` (desktop) / 56px (responsive) |
| `{rounded.search-header}` | 30px | Header search input capsule |
| `{rounded.full}` | 100% | Notification dot, calendar availability dot, nav active bullet |
| `{rounded.datepicker-cell}` | 7px | xdsoft date picker calendar `<td>` cells |
| `{rounded.nav-diamond}` | 4px | Nav active indicator (applied to 36×36px square before rotate transform) |

**Radius grammar.** The system uses `{rounded.sm}` (4px) as the near-universal default. Pill shapes (`btn-round`, header search) use very large radius values to achieve the capsule look. True circles use `100%`. The login form is the only surface to break from 4px, using 5px for its card container and 0.375rem (~6px) for stacked input corners. Nothing in the application uses a radius between 13px and 20px except the subnav pill.

---

## Components

### Sidebar Navigation

**`nav-sidebar`** — Fixed 96px-wide left column on `{colors.brand-nav}` (#58C65D). Top: `.logo` (full-width image). Center: `.nav-wrap` icon list (margin-top 210px). Each item is a `24px`-wide SVG icon with `margin-bottom: 36px`. Icons use `fill` transitions:
- Default fill: `{colors.brand-nav-icon-default}` (#328935)
- Hover fill: `{colors.brand-nav-icon-hover}` (#0B4E0D)
- Active fill: `{colors.brand-nav-icon-active}` (#FFFFFF)

**`nav-active-indicator`** — A `36×36px` square (`border-radius: 4px`) in `{colors.surface-section}` (#ECECEC), positioned at `top: -7px, right: -64px` relative to the active list item, rotated 45° with `transform: rotate(45deg)`. This creates a diamond that appears to "punch through" the sidebar into the content area.

### Header

**`header-bar`** — Full-width white bar, `box-shadow: 0 0 10px rgba(0,0,0,0.1)`, `padding: 18px 16px 12px 120px`. Contains the search input, user-wrap controls, `.header-title`, `.header-nav`, and context-specific `.header-subnav`.

**`header-search`** — `width: 195px, height: 22px`, pill shape (`border-radius: 30px`), `background: {colors.surface-input-header}` (#F4F4F4), `font-size: 14px`, no border.

**`header-nav-link`** — Horizontal tab-style list. Inactive: `color: rgba(0,0,0,0.6)`, `font-weight: 300`, `font-size: 18px`, invisible `border-bottom: 2px solid #FFFFFF`. Active: `color: #000000`, `font-weight: 300` (same weight), `border-bottom: 2px solid {colors.interactive-primary}`. Hover: `color: {colors.interactive-primary}`. Transition: `all 0.25s ease`.

**`header-subnav-pill`** — Appears only when a nav tab is active. Pills with `border-radius: 20px`, `padding: 5px 15px 5px 27px`, `font-size: 12px`, `font-weight: 400`, `color: rgba(0,0,0,0.5)`. Bullet pseudo-element (`::before`) at `left: 12px, top: 11px` — `4×4px`, `border-radius: 100%`, `background: rgba(0,0,0,0.5)`. Active pill: `background: rgba(64,158,255,0.16)`.

**`user-dropdown`** — Absolute positioned at `top: 48px, right: 0`. Width `144px`, `padding: 12px 14px 6px`, `border-radius: 4px`, `box-shadow: 0 0 4px rgba(0,0,0,0.25)`. Caret: rotated square pseudo-element (`::before`) at `top: -5px, right: 12px`, `10×10px`, `border: 1px solid #ECECEC` on top and left edges, white fill, rotated 45°. Links: `14px, color: #000000`; logout link: `color: {colors.text-disabled}` (#838383).

### Buttons

**`btn-primary`** — The main confirmation action. `background: {colors.interactive-primary}` (#409EFF), `border: 1px solid #409EFF`, `color: #FFFFFF`. Hover state inverts: `background: #FFFFFF`, `color: #409EFF`. Border-radius `{rounded.sm}` (4px). Height varies by size class.

**`btn-green`** — The create/submit action for content operations. `background: {colors.brand-online}` (#0FB716), `border: 1px solid #0FB716`, `color: #FFFFFF`. Hover: `background: #FFFFFF`, `color: #0FB716`. Used in list-option toolbars with `margin-left: 45px` to separate it visually from secondary actions.

**`btn-plain`** — Secondary / ghost button. `background: #FFFFFF`, `border: 1px solid {colors.interactive-light}` (#B3D8FF), `color: {colors.interactive-primary}` (#409EFF). Hover: `background: {colors.interactive-light}`, `color: #FFFFFF`.

**`btn-gray`** — Cancel or inactive action. `background: {colors.btn-gray}` (#B5B5B5), `border: 1px solid #B5B5B5`, `color: #FFFFFF`. Hover: `background: #FFFFFF`, `color: #B5B5B5`.

**`btn-round`** — Pill-shaped primary action used as the search / filter submit in `.search-wrap`. Height `30px`, `border-radius: {rounded.pill-round}` (80px), `font-weight: 500`, auto-margin-left to push right. Color class applied separately (`btn-primary` or `btn-green`). Responsive: `border-radius: 56px`.

**`btn-wrap`** — Segmented control for grouped toggle options. Individual `.btn` children have `border-radius: 0` except first (left-rounded) and last (right-rounded). Inactive fill: `#FFFFFF`, text `#606266`. Active: `background: {colors.interactive-bg}` (#ECF5FF), `border: 1px solid {colors.interactive-light}` (#B3D8FF), `color: {colors.interactive-primary}`.

**All button transitions**: `all 0.25s ease` — universal.

### Button Size Scale

| Class | Height | H-Padding | Font Size |
|---|---|---|---|
| `.btn-mini` | 20px | 5px | 11px |
| `.btn-sm` | 22px | 15px | 14px |
| `.btn-sm2` | 24px | 12px | 13px |
| `.btn-input` | 30px | 22px | 13px |
| `.btn-round` | 30px | 20px | 14px |

### Form Inputs

**`input-text`** — `padding: 3px 8px`, `background: #FFFFFF`, `border: 1px solid {colors.border-default}`, `border-radius: {rounded.sm}`, `font-size: 14px`. Placeholder: `{colors.text-placeholder}` (#D9D9D9). Disabled: `opacity: 0.4`.

**`input-select`** — Same border and radius as text input. Custom arrow: `url(select_arrow.svg)` at `right: 8px center`, `appearance: none`, right padding `24px` to accommodate the arrow.

**`input-textarea`** — Same border and radius. `resize: vertical`. Full-width by default.

**`input-toggle`** — `26×16px`, `border-radius: 13px` (pill). Track: default white bg, `border: 1px solid #FFFFFF`. Toggle button: `13×13px` circle, `background: {colors.interactive-primary}` (#409EFF), `left: 2px`. Checked: track bg turns `#409EFF`, button shifts to `left: calc(100% - 14px)`, button turns white. **Auth-context override**: toggle uses `{colors.brand-nav}` (#58C65D) instead of blue. Transition: `all 0.25s ease-in` on both track and button.

**`input-date`** — `.date-wrap`: `200×30px`, `background: {colors.surface-input}` (#F4F4F5), calendar-gray icon at `left: 5px center`, `border: 1px solid {colors.border-default}`, `border-radius: 4px`. Contains an overlay label (visible as placeholder) + hidden `date` input side by side. Time variant uses clock icon. Width responsive: `144×18px`.

**`input-search`** — `.input-search input`: `width: 140px`, `padding-right: 25px`, search-black icon at `right: 8px center`, `background-color: {colors.surface-input}`.

### Tables

**`table-default`** — Full-width, `border-collapse: collapse`. All cells: `border: 1px solid {colors.border-table}` (#EBEEF5). `<th>`: `padding: 11px 11px 13px`, `font-size: 14px`, `font-weight: 400`, `color: {colors.text-secondary}` (#909399), `background: {colors.surface-table-header}` (#F5F7FA). `<td>`: `padding: 12px 10px 13px`, `font-size: 13px`, `font-weight: 400`, `color: {colors.text-primary}` (#000000). Text-align center on all cells by default; left-align overrides applied per context.

**`table-open-border`** — Variant (`.open-border` class) that removes the outer edge borders: `border-top: 0` on first-row `<th>`, `border-left: 0` and `border-right: 0` on first and last children in each row.

**`table-pagination`** — `margin-top: 20px`. Prev/Next buttons: `font-weight: 700`, `font-size: 14px`, `color: {colors.text-gray}` (#808080). Page number links: `margin: 0 10px`, `font-size: 14px`, `color: {colors.text-primary}` (#000000). Active page: `font-weight: 700`, `color: {colors.interactive-primary}` (#409EFF).

### Tabs

**`tab-nav`** — Horizontal list. Each `<li>`: `width: 150px` (responsive: 108px). Tab `<a>`: `height: 40px`, `font-size: 13px`, `line-height: 40px`, `color: {colors.text-secondary}` (#909399), `border: 1px solid {colors.border-subtle}` (#DCDFE6), left border suppressed (except first child). First child `<a>`: `border-radius: 4px 0 0 0`. Active tab: `color: {colors.interactive-primary}` (#409EFF), `border-bottom: none` (creates connected-to-panel effect).

**`tab-panel`** — `margin-top: -1px` (overlaps tab's bottom border), `padding: 17px 30px 21px`, `border: 1px solid {colors.border-subtle}`, `background: #FFFFFF`.

### Modal

**`modal`** — Full-viewport flex overlay. Default: `display: none`, `opacity: 0`. Active: `display: flex`, `opacity: 1`, `transition: all 0.25s ease`. Internal `.modal-overlay` at `z-index: 20` (backdrop), `.modal-content` at `z-index: 30`. `.modal-content`: `padding: 10px`, `background: #FFFFFF`, `box-shadow: 0 1px 3px rgba(0,0,0,0.3)`, `border-radius: 2px`. Modal title `<h1>`: `font-size: 17px`, `color: {colors.text-modal-title}` (#303133). Close button: `11×11px`, `margin-left: auto`.

**Context-specific widths:**

| Context | Desktop | Responsive |
|---|---|---|
| Admin / notice / contents-add | 532px | 384px |
| Signup select-modal | 627px | 446px |
| Device-info modal | 50% viewport | Same |
| Main-view modal | Custom padding | 452px body table |

### State Panel

**`state-panel`** — `.state-wrap`: `margin-bottom: 60px`. Container `.state-wrap ul`: `display: inline-flex`, `padding: 11px 7px 13px`, `background: rgba(132,132,132,0.2)`, `border-radius: 10px`. Each card `.state-wrap li`: `width: 177px` (responsive: 125px), `padding: 10px 18px 16px`, `background: #FFFFFF`, `box-shadow: 0 0 20px rgba(0,0,0,0.1)`. Card label `<span>`: `font-size: 14px`, `font-weight: 300`, `border-bottom: 1px solid {colors.border-separator}` (#878787). Counter `<h1>`: `font-size: 30px`, `font-weight: 700`, `text-align: center`. **Active state**: both span and h1 turn `{colors.interactive-action}` (#0277EF); underline changes to `1px solid #0277EF`.

**`substate-panel`** — Smaller variant used on the main dashboard (main.css). Cards: `100×134px`, `display: flex`, `flex-direction: column`, `justify-content: flex-end`, `border: 1px solid {colors.border-divider}` (#E3E3E3), no shadow. Error variant: `border: 1px solid {colors.status-unavailable}` (#EB6A4E).

### Calendar (FullCalendar)

**`calendar-view`** — Wraps `#slotView-calendar`. Day cells: `height: 133px` (detail: 100px, article-50: 72px), `cursor: pointer`. Availability dot: `::after` pseudo-element on `.fc-day .fc-daygrid-day-top` — `18×18px`, `border-radius: 100%`, `background: {colors.status-available}` (#52B65C) default, overridden to `{colors.status-unavailable}` (#EB6A4E) for `.unavailable` class. Other-month days: `background: #F6F6F6`. Ad-exist days: `background: {colors.interactive-ad-bg}` (#F0F7FF). Slot count: `font-size: 23px` label / `36px` span number, `color: {colors.text-calendar}` (#909090) / `#000000`.

### Login Form

**`login-form`** — Centered card on white background. Card: `min-width: 500px`, `width: 35%`, `padding: 40px 60px`, `border: 1px solid {colors.brand-nav}` (#58C65D), `border-radius: 5px`, `box-shadow` via filter drop-shadow. Stacked inputs share a single visual container — top input: `border-radius: 0.375rem 0.375rem 0 0`, bottom input: no top border, `border-radius: 0 0 0.375rem 0.375rem`. Submit: full-width, `font-size: 20px`, `font-weight: 600`, `background: {colors.brand-nav}`, hover `{colors.brand-nav-hover}` (#89D58C), focus inverts to white bg + green text.

---

## Do's and Don'ts

### Do
- Use `{colors.interactive-primary}` (#409EFF) for all in-page interactive elements — buttons, active states, toggles, tabs, pagination, links. This is the single in-page action color.
- Use `{colors.brand-nav}` (#58C65D) exclusively for the sidebar and authentication surfaces. It does not appear inside the application interior.
- Apply `transition: all 0.25s ease` to every interactive element. This is the universal animation signature; do not vary the duration or easing.
- Invert button fill on hover — a colored button should become white with a colored border and text. This is the system-wide hover grammar for all four button color variants.
- Keep `<th>` at `{colors.text-secondary}` (#909399) on `{colors.surface-table-header}` (#F5F7FA) and `<td>` at `{colors.text-primary}` (#000000) on white. This contrast split is what makes tables scannable.
- Use `{colors.interactive-action}` (#0277EF) as the active state for State Panel counters and the `.highlight` utility class. Do not use it for interactive buttons — that is `{colors.interactive-primary}`.
- Separate major section actions using the `margin-left: 45px` pattern on `.btn-green` inside `.list-option` toolbars.
- Keep modal `border-radius` at `2px`. Modals are data surfaces, not decorative cards.

### Don't
- Don't use `{colors.brand-nav}` (#58C65D) inside the application shell for anything except the sidebar background and the auth-context toggle. Green inside the content area would create a false navigation signal.
- Don't introduce a third interactive color. The system has exactly two accent families: green (navigation/auth) and blue (actions/data). Adding a third breaks the zone logic.
- Don't use weight 500 for body emphasis — use weight 700. The weight ladder is 300 / 400 / 500 / 700, with 500 reserved for structural headings (`.article-title`, `.btn-round`). Inline strong text should jump to 700.
- Don't add shadows to cards or tables — elevation inside the content area is achieved by placing white elements on `{colors.surface-section}` (#ECECEC), not by adding shadows.
- Don't make `<td>` font size smaller than 13px. The table system is already at its smallest legible size; reducing further breaks the data display purpose.
- Don't use `{rounded.pill-round}` (80px) on anything except `.btn-round`. The pill radius is the search/filter action signal. Apply it only to that specific button type.
- Don't add decorative gradients or background images to application surfaces. Surfaces are flat color only. The only "decoration" in the system is the nav active diamond indicator, which is structural.
- Don't use the `0.25s ease` transition on layout changes — only on color fills, opacity, and transform. Animating width, padding, or height is not part of this system's language.

---

## Responsive Behavior

### Breakpoints

| Name | Range | Description |
|---|---|---|
| **Desktop** | ≥ 1440px | Full layout; canonical design |
| **Mid-desktop** | 1025–1439px | Minor search-wrap label/margin adjustments only |
| **Tablet / Small Desktop** | 768–1439px | Primary responsive range; all components scale down |
| **Narrow tablet** | 768–1023px | `.article-50` and `.article-60` collapse to `width: 100%` |
| **Max container** | 1920px | `max-width` on body; no content wider than this |

**There is no mobile breakpoint.** This system has a single responsive range (768–1439px). Anything below 768px renders at the responsive scale without further adjustment. This is a desktop-first management interface.

### Key Layout Changes at 768–1439px

**Navigation sidebar:**
- Width: `96px → 68px`
- Nav-wrap top offset: `210px → 150px`
- Icon item width: `24px → 17px`, bottom margin `36px → 25px`
- Active diamond: `36×36px → 15×15px`, border-radius `4px → 2px`

**Header:**
- Padding: `18px 16px 12px 120px → 12px 20px 2px 84px`
- Search: `195×22px → 140×16px`
- Page title: `28px/34px → 20px/29px`
- Nav links: `18px → 12px`; subnav: `12px → 10px`, pill radius `20px → 14px`
- User dropdown: `top: 48px → 32px`, width `144px → 96px`

**Section:**
- Padding: `50px 87px 0 148px → 35px 60px 0 100px`
- Article margin-bottom: `50px → 35px`
- Article-inner padding: `12px → 8px`

**State Panel:**
- Card width: `177px → 125px`
- Container radius: `10px → 7px`
- Counter: `30px/43px → 21px/31px`
- Label: `14px/17px → 10px/12px`

**Tables:**
- `<th>`: `14px/23px → 10px/16px`, padding `11px 11px 13px → 9px 7px`
- `<td>`: `13px/23px → 10px/16px`, padding `12px 10px 13px → 7px 7px 9px`
- Pagination: `14px → 10px`, margin-top `20px → 15px`

**Buttons:**
- Border-radius: `4px → 3px`
- `.btn-sm`: `22px tall, 14px → 16px tall, 10px`
- `.btn-round`: `30px → 21px tall`, `80px → 56px` radius
- `.btn-wrap`: `30px → 22px tall`

**Inputs / Controls:**
- Label: `14px → 10px`, margin-right `12px → 8px`
- Input/Select: `14px → 10px`, radius `4px → 3px`
- Toggle: `26×16px → 18×11px`, button `13×13px → 9×9px`
- Date-wrap: `200×30px → 144×18px`
- Radio/Checkbox: `14×14px → 12×12px`

**Tabs:**
- Tab width: `150px → 108px`
- Tab height: `40px → 28px`, font `13px → 10px`

**Calendar:**
- Cell height: `133px → 95px`
- Toolbar: `24px → 17px`
- Availability dot: `18×18px → 10×10px`

**Modals:**
- Admin modal: `532px → 384px`
- Signup select-modal: `627px → 446px`
- Modal title: `17px → 15px`

---

## Animation

The system has exactly one animation signature:

| Token | Value | Applied To |
|---|---|---|
| `{transition.default}` | `all 0.25s ease` | All buttons, header nav links, user dropdown, user-noti/error indicator, toggle track and button, modal overlay |
| `{transition.fill}` | `fill 0.25s ease` | Nav sidebar SVG icon path fill |

No other duration or easing exists in the codebase. All transitions are `0.25s ease`. Do not introduce other values.

---

## Iteration Guide

1. When building a new page surface, start with the shell: `<nav>` + `<header>` + `<section>`. Every page is this three-zone chassis.
2. Inside `<section>`, wrap data in `<article>` with `.article-inner` (white card). Use `.article-header` for the title + action toolbar, `.article-footer` for pagination.
3. For width splits, use `.article-30/40/50/60/70`. For column data grids inside an article, use `.grid-container` with an appropriate column count override.
4. Reference components by their CSS class patterns (`btn-primary`, `modal`, `tab-nav`), not by inline styles.
5. The only two accent colors are `{colors.interactive-primary}` (#409EFF) for in-page actions and `{colors.brand-nav}` (#58C65D) for navigation/auth. Choosing between them is a question of zone: sidebar/auth = green, content area = blue.
6. Use `{colors.interactive-action}` (#0277EF) only for `.highlight`, State Panel active counters, and inline content emphasis (file links, update notes). Not for buttons.
7. Every hover state inverts the button fill. Write hover styles accordingly.
8. All animations: `transition: all 0.25s ease`. No exceptions.

---

## Known Gaps

- **No mobile breakpoint.** The CSS has no `max-width: 767px` rule anywhere. Any mobile implementation would require new rules outside the current system.
- **Form validation states.** No `:invalid`, `.error`, or error-message styles are defined. Only the `.danger` color token and the `.file-input:valid::after` icon hint at validation — no complete error state pattern exists.
- **Color tokens are not defined as CSS custom properties.** All color values are hardcoded hex strings. A refactor to `--var()` tokens would be required to formalize the system.
- **The nav active diamond geometry** depends on the sidebar and content area being the exact widths documented. Changing sidebar width would require recalculating `right: -64px` on the indicator.
- **Typography weight 600** appears only on the login button but has no corresponding `@font-face` declaration. The browser synthesizes it. On platforms without font synthesis, the login button will render at weight 700.
- **No dark mode.** The system is light-surface dominant. No `prefers-color-scheme: dark` queries exist.
- **FullCalendar-specific styles** (`.fc-*` classes) depend on the FullCalendar library version; these styles may require adjustment if the library is upgraded.
- **Google Maps popup** (`.map-modal`) is documented as `292×138px` and `199×93px` responsive, but the popup's own iframe controls (zoom buttons, Street View peg) are explicitly hidden via `display: none` on `.gmnoprint` and `.gm-style-iw-tc` — this is intentional to maintain visual cleanliness.
