# CMS 2.0 — Design System (Live Site Reference)

> **Source**: dev.doohservice.com — CSS extraction + visual inspection (2026.05.31)  
> **Token source**: `/assets/css/cms.css`  
> Previous Figma-based version superseded by live site audit.

---

## Overview

CMS 2.0 is a **dark-shell + green-action** management interface. A fixed four-zone dark shell (GNB, Topbar, Breadcrumb, content bg) wraps a light-surface content area where all data entry and display happens.

**Two-color action language:**
- **Brand green** `#58C65D` — every CTA button, active state, focus ring, tab underline, GNB active bar, toggle ON, stat card active number
- **Blue** `#2D84ED` — MAIN schedule/media-group badge **only**. Never on buttons.

**Shell is dark. Content is always light.** Dark surfaces (`#24292E / #383F45 / #454C52`) appear only in GNB, Topbar, Breadcrumb. Cards, tables, inputs are always white or near-white.

---

## Color Tokens

### Shell
| Token | Value | Usage |
|-------|-------|-------|
| `{colors.body-bg}` | `#24292E` | `<body>` background |
| `{colors.gnb-bg}` | `#454C52` | GNB sidebar |
| `{colors.topbar-bg}` | `#383F45` | Topbar + Breadcrumb |
| `{colors.gnb-hover}` | `#596066` | GNB item hover |
| `{colors.gnb-active-bg}` | `rgba(88,198,93,0.12)` | GNB active item |
| `{colors.gnb-active-bar}` | `#58C65D` | GNB left indicator (3px) |

### Brand & Interactive
| Token | Value | Usage |
|-------|-------|-------|
| `{colors.green}` | `#58C65D` | Primary CTA, active, focus, icons |
| `{colors.green-light}` | `#C1E9C3` | Outline btn border, running badge border |
| `{colors.green-tint}` | `rgba(88,198,93,0.1)` | Outline btn hover, running badge bg |
| `{colors.main-blue}` | `#2D84ED` | MAIN badge only |
| `{colors.tag-orange}` | `#FFAA5B` | Hashtag badge text/border |

### Surfaces
| Token | Value | Usage |
|-------|-------|-------|
| `{colors.surface-bg}` | `#F6F7F9` | Content area, `<th>` bg, ghost btn hover |
| `{colors.surface-card}` | `#FFFFFF` | Cards, inputs, `<td>`, modals |

### Borders & Text
| Token | Value | Usage |
|-------|-------|-------|
| `{colors.border-default}` | `#CED2D6` | Inputs, selects, ghost btn |
| `{colors.border-card}` | `#E5E7EA` | Card dividers, table borders |
| `{colors.text-primary}` | `#24292E` | Body, `<td>`, card titles |
| `{colors.text-secondary}` | `#596066` | `<th>`, ghost btn text |
| `{colors.text-muted}` | `#9EA5AD` | Icons inactive, placeholders |
| `{colors.text-on-dark}` | `#FFFFFF` | Shell text |
| `{colors.danger}` | `#E97474` | Error, alert dot, offline |
| `{colors.warning}` | `#E8841A` | Warning, tag badge color |

---

## Typography

Font: `'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif` — base `14px`

| Role | Size | Weight | Color |
|------|------|--------|-------|
| Card title | 16px | 600 | `#24292E` |
| Body / input | 14px | 400 | `#24292E` |
| **Table `<th>`** | 14px | **600** | `#596066` |
| Table `<td>` | 14px | 400 | `#24292E` |
| Active tab | 14px | 500 | `#24292E` |
| Inactive tab | 14px | 400 | `#9EA5AD` |
| Stat card number | 30px | 700 | `#24292E` → active `#58C65D` |
| Stat card label | 14px | 400 | `#9EA5AD` |
| Breadcrumb | 12px | 400 | `#9EA5AD` parent / `#CED2D6` current |
| GNB label | 10px | 400 | `#9EA5AD` → `#FFFFFF` active |
| Badge | 12px | 500 | per badge |

---

## Layout — Four-zone Shell

```
<body>  bg:#24292E
  ├── <aside class="gnb">     fixed · left:0 · w:93px · h:100vh · bg:#454C52
  ├── <header class="topbar"> fixed · top:0 · left:93px · right:0 · h:60px · bg:#383F45
  ├── <div class="bcrumb">    fixed · top:60px · left:93px · right:0 · h:40px · bg:#383F45
  │                            border-top:1px solid #454C52
  └── <main class="content">  margin-left:93px · padding-top:100px · bg:#F6F7F9
        └── .content-inner    padding:24px 28px
```

---

## Components

### 1. Status Filter Cards (`stat-row`)

Top of every list page. Clicking a card filters the table to that status.

```
┌──────────────────────────┐   ┌──────────────────────────┐
│ 153                    ◉ │   │ 142                    ○ │
│ All                      │   │ Commercial               │
└──────────────────────────┘   └──────────────────────────┘
  Active (green border)           Inactive (gray border)
```

```css
.stat-card {
  background: #fff;
  border: 1px solid #E5E7EA;
  border-radius: 8px;
  padding: 16px 20px;
  cursor: pointer;
  position: relative;
}
.stat-card.active { border-color: #58C65D; }
.stat-card-checkbox {          /* top-right circle */
  width: 16px; height: 16px; border-radius: 50%;
  border: 1px solid #CED2D6;
  position: absolute; top: 12px; right: 12px;
}
.stat-card.active .stat-card-checkbox {
  background: #58C65D; border-color: #58C65D;  /* filled green */
}
.stat-card-value { font-size: 30px; font-weight: 700; color: #24292E; }
.stat-card.active .stat-card-value { color: #58C65D; }
.stat-card-label { font-size: 14px; color: #9EA5AD; margin-top: 4px; }
```

Grid: `grid-template-columns: repeat(N, 1fr); gap: 12px; margin-bottom: 20px`  
N matches the number of status types (typically 4–6 cards + action buttons flush right).

---

### 2. Buttons

**Universal rule**: `transition: all 0.25s ease` on every button.  
**Hover rule**: filled buttons invert (colored bg → white bg + colored text/border).

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 6px;
  height: 36px; padding: 0 16px;
  border-radius: 4px; font-size: 14px; font-family: inherit;
  border: 1px solid transparent; cursor: pointer;
  transition: all 0.25s ease; white-space: nowrap;
}
```

| Class | Bg | Text | Border | Hover effect |
|-------|----|------|--------|-------------|
| `.btn-primary` | `#58C65D` | `#fff` | `#58C65D` | white bg, green text |
| `.btn-outline` | `#fff` | `#58C65D` | `#C1E9C3` | `rgba(88,198,93,0.08)` bg |
| `.btn-dark` | `#383F45` | `#fff` | `#383F45` | `#454C52` bg |
| `.btn-ghost` | `#fff` | `#596066` | `#CED2D6` | `#F6F7F9` bg |
| `.btn-gray` | `#CED2D6` | `#fff` | `#CED2D6` | `#9EA5AD` bg |

**Sizes:**
| Class | Height | Padding-x | Font |
|-------|--------|-----------|------|
| `.btn-lg` | 44px | 24px | 15px / 600 |
| `.btn` | 36px | 16px | 14px |
| `.btn-sm` | 30px | 12px | 13px |

**Dual-button header pattern** (right side of `.card-head`):
```html
<!-- Primary action + secondary action side by side -->
<button class="btn btn-primary">+ Create Schedule</button>
<button class="btn btn-outline">+ Time Schedule</button>
```

**FAB** (floating action, bottom-right corner):
```css
.fab {
  position: fixed; bottom: 24px; right: 24px;
  width: 48px; height: 48px; border-radius: 50%;
  background: #24292E; color: #fff; font-size: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  display: flex; align-items: center; justify-content: center;
}
.fab:hover { background: #383F45; }
```

---

### 3. Inputs & Controls

```css
/* Text input */
.inp {
  height: 36px; padding: 0 10px;
  background: #fff; border: 1px solid #CED2D6;
  border-radius: 4px; font-size: 14px; color: #24292E;
  transition: border-color 0.25s ease;
}
.inp:focus { outline: none; border-color: #58C65D; }
.inp::placeholder { color: #CED2D6; }
.inp[readonly] { background: #F6F7F9; color: #9EA5AD; }

/* Select */
.sel {
  height: 36px; padding: 0 28px 0 10px;
  background: #fff url('../images/select_arrow.svg') no-repeat right 8px center;
  border: 1px solid #CED2D6; border-radius: 4px;
  appearance: none; font-size: 14px; cursor: pointer;
}
.sel:focus { outline: none; border-color: #58C65D; }

/* Toggle switch */
.toggle-track { width:36px; height:20px; border-radius:10px; background:#E5E7EA; position:relative; cursor:pointer; transition:background 0.25s ease; }
.toggle-track.on { background: #58C65D; }
.toggle-thumb { width:16px; height:16px; border-radius:50%; background:#fff; position:absolute; top:2px; left:2px; transition:left 0.25s ease; }
.toggle-track.on .toggle-thumb { left:18px; }
```

---

### 4. Table

```css
.tbl { width: 100%; border-collapse: collapse; font-size: 14px; }
.tbl th {
  background: #F6F7F9; color: #596066; font-weight: 600;
  padding: 10px 12px; border: 1px solid #E5E7EA; text-align: center;
  white-space: nowrap;
}
.tbl td {
  padding: 10px 12px; border: 1px solid #E5E7EA;
  color: #24292E; text-align: center; vertical-align: middle;
}
.tbl td a { color: #58C65D; }
.tbl tbody tr:hover { background: #FAFAFA; }
.tbl input[type="checkbox"] { accent-color: #58C65D; width:14px; height:14px; }
```

**Live site table anatomy (left → right):**
```
[No.] [Name/Link] [Thumbnail?] [Type] [Duration] [Resolution] [Ad Type] [Advertiser] [Tags] [Status ▼] [⋮]
```

- **Thumbnail**: `69px × 39px` preview image where applicable
- **Status + chevron** `▼`: status badge followed by expand-row button
- **3-dot kebab** `⋮`: rightmost column, opens contextual dropdown
- **Checkbox**: leftmost, for bulk select (`accent-color: #58C65D`)

**Row expand**: clicking `▼` reveals a detail sub-row beneath, pushing subsequent rows down.

---

### 5. Badges

#### Schedule / Content Type Badges (narrow, inline with row name)

```css
.badge-type {
  display: inline-flex; align-items: center;
  height: 18px; padding: 0 6px; border-radius: 3px;
  font-size: 11px; font-weight: 600; white-space: nowrap;
  margin-right: 6px;
}
```

| Type | Background | Text | Border |
|------|-----------|------|--------|
| `SYNC` | `#58C65D` | `#fff` | — |
| `Time` | `rgba(144,97,184,0.15)` | `#9061B8` | `1px solid #d4b8f5` |
| `MAIN` | `#2D84ED` | `#fff` | — |

#### Status Badges (in Status column)

```css
.badge { height:20px; padding:0 8px; border-radius:6px; font-size:12px; font-weight:500; }
```

| Status | Bg | Text | Border |
|--------|----|------|--------|
| `Pending` | `rgba(233,116,116,0.1)` | `#E97474` | `1px solid #f5c0c0` |
| `Scheduled` | `rgba(45,132,237,0.1)` | `#2D84ED` | `1px solid #b3d3f5` |
| `Active / Running` | `rgba(88,198,93,0.1)` | `#58C65D` | `1px solid #C1E9C3` |
| `Ended / Done` | `#F6F7F9` | `#9EA5AD` | `1px solid #CED2D6` |
| `Cancelled` | `rgba(233,116,116,0.1)` | `#E97474` | `1px solid #f5c0c0` |

#### Tag Badge (user hashtag)

```css
.badge-tag {
  background: #fff; color: #FFAA5B;
  border: 1px solid #FFAA5B; border-radius: 6px;
  padding: 0 8px; height: 20px; font-size: 12px;
}
```

---

### 6. Tabs

```css
.tab-nav { display:flex; border-bottom:1px solid #E5E7EA; padding:0 4px; }
.tab-nav li a {
  display:block; padding:10px 16px; font-size:14px;
  color:#9EA5AD; border-bottom:2px solid transparent;
  margin-bottom:-1px; transition:all 0.25s ease; white-space:nowrap;
}
.tab-nav li.active a { color:#24292E; font-weight:500; border-bottom-color:#58C65D; }
.tab-nav li a:hover { color:#24292E; }
```

Sub-tab variant (smaller, inside card body):
- Same structure, `padding: 8px 12px`, often with a right-aligned action link

---

### 7. Filter Bar

Sits between `.card-head` and the table; contains sort/filter controls.

```
[Schedule Type ▼] [Ad Type ▼] [📅 Start──End] [Newest ▼] [🔄]      [≡ list] [⊞ grid]
```

```css
.filter-bar {
  display: flex; align-items: center; gap: 8px;
  padding: 12px 0; flex-wrap: wrap;
}
.view-toggle { display:flex; gap:2px; margin-left:auto; }
.view-toggle-btn { width:28px; height:28px; border-radius:4px; border:1px solid #CED2D6; background:#fff; color:#9EA5AD; }
.view-toggle-btn.active { background:#58C65D; border-color:#58C65D; color:#fff; }
```

---

### 8. Card (`.card`)

```css
.card { background:#fff; border-radius:8px; margin-bottom:20px; }
.card-head {
  display:flex; align-items:center; justify-content:space-between;
  padding:18px 24px 14px; border-bottom:1px solid #E5E7EA;
}
.card-title { font-size:16px; font-weight:600; color:#24292E; }
.card-body { padding:20px 24px; }
.card-foot { padding:14px 24px; border-top:1px solid #E5E7EA; }
```

---

### 9. Modal (`.modal-backdrop`)

```css
.modal-backdrop {
  position:fixed; inset:0; background:rgba(0,0,0,0.5);
  z-index:900; display:flex; align-items:center; justify-content:center;
}
.modal-box {
  background:#fff; border-radius:8px;
  box-shadow:0 4px 20px rgba(0,0,0,0.2);
  width:460px; max-width:calc(100vw - 40px);
}
.modal-head {
  display:flex; align-items:center; justify-content:space-between;
  padding:16px 20px 12px; border-bottom:1px solid #E5E7EA;
}
.modal-head h2 { font-size:16px; font-weight:600; }
.modal-body-inner { padding:20px; }
.modal-foot {
  display:flex; justify-content:flex-end; gap:8px;
  padding:12px 20px 16px; border-top:1px solid #E5E7EA;
}
```

Context-specific widths: `360px` (confirm), `520px` (type select), `680px` (form).

---

### 10. Pagination

```css
.pager { display:flex; align-items:center; gap:4px; }
.pager button, .pager a {
  width:30px; height:30px; border-radius:4px;
  font-size:13px; color:#9EA5AD;
  border:1px solid #E5E7EA; background:#fff;
  transition:all 0.25s ease;
}
.pager button:hover, .pager a:hover { border-color:#58C65D; color:#58C65D; }
.pager .active { background:#58C65D; border-color:#58C65D; color:#fff; font-weight:500; }
```

---

### 11. Progress / Slot Bar

```css
.prog-bar { height:6px; background:#E5E7EA; border-radius:3px; overflow:hidden; }
.prog-fill { height:100%; border-radius:3px; background:#58C65D; transition:width 0.4s ease; }
.prog-fill.warn { background:#E97474; }   /* threshold: > 80% */
```

Used in: product detail (Inventory capacity), monitor detail (CPU / memory / storage).

---

### 12. Kebab (3-dot) Menu

```css
.kebab-btn {
  width:28px; height:28px; border-radius:4px;
  color:#9EA5AD; font-size:20px; line-height:1;
  display:flex; align-items:center; justify-content:center;
  transition:all 0.2s;
}
.kebab-btn:hover { background:#F6F7F9; color:#24292E; }

.kebab-menu {
  background:#fff; border:1px solid #E5E7EA; border-radius:6px;
  box-shadow:0 4px 12px rgba(0,0,0,0.1); padding:4px 0; min-width:140px;
}
.kebab-menu-item { padding:9px 14px; font-size:13px; color:#24292E; cursor:pointer; }
.kebab-menu-item:hover { background:#F6F7F9; }
.kebab-menu-item.danger { color:#E97474; }
```

---

### 13. Row Expand Chevron

Expands a table row to show additional details inline.

```css
.row-expand-btn {
  width:24px; height:24px; border-radius:4px;
  border:1px solid #CED2D6; background:#fff;
  color:#9EA5AD; font-size:11px;
  display:inline-flex; align-items:center; justify-content:center;
  transition:all 0.2s; cursor:pointer; margin-left:4px;
}
.row-expand-btn:hover { border-color:#58C65D; color:#58C65D; }
.row-expand-btn.open { background:#58C65D; border-color:#58C65D; color:#fff; }
```

---

### 14. GNB Sidebar

```css
.gnb {
  position:fixed; top:0; left:0;
  width:93px; height:100vh; background:#454C52;
  display:flex; flex-direction:column; align-items:center;
  padding:20px 0 24px; z-index:300;
}
.gnb-nav a {
  display:flex; flex-direction:column; align-items:center; gap:4px;
  padding:10px 6px; color:#9EA5AD; font-size:10px;
  transition:all 0.25s ease; width:100%; text-align:center;
}
.gnb-nav a svg { fill:#9EA5AD; transition:fill 0.25s ease; }
.gnb-nav a:hover { color:#fff; background:#596066; }
.gnb-nav a:hover svg { fill:#fff; }
.gnb-nav a.active { color:#fff; background:rgba(88,198,93,0.12); }
.gnb-nav a.active svg { fill:#fff; }
.gnb-nav a.active::before {   /* left bar indicator */
  content:''; position:absolute; left:0; top:50%; transform:translateY(-50%);
  width:3px; height:32px; background:#58C65D; border-radius:0 2px 2px 0;
}
```

---

## Shadow Scale

| Level | Value | Used on |
|-------|-------|---------|
| Flat | — | Tables, tab panels |
| Card | `0 0 8px rgba(0,0,0,0.06)` | `.card` |
| Topbar | `0 2px 8px rgba(0,0,0,0.15)` | `<header>` |
| Dropdown / Kebab | `0 4px 12px rgba(0,0,0,0.1)` | Menus |
| Modal | `0 4px 20px rgba(0,0,0,0.2)` | `.modal-box` |
| FAB | `0 4px 12px rgba(0,0,0,0.3)` | Floating button |

---

## Border Radius Scale

| Value | Used on |
|-------|---------|
| `2px` | GNB bar cap |
| `4px` | Buttons, inputs, pagination, type badges |
| `6px` | Kebab dropdown, status badges, tag badges |
| `8px` | Cards, modal box, stat cards |
| `50%` | Avatar, FAB, status dots |

---

## Animation

Single signature — no exceptions:

```css
transition: all 0.25s ease;
/* SVG fill only: */
transition: fill 0.25s ease;
```

---

## Do / Don't

### Do ✅
- `#58C65D` for every CTA, active state, focus ring, tab underline
- Dark grayscale in shell only (GNB / topbar / breadcrumb)
- Invert button colors on hover
- `font-weight: 600` on `<th>`
- Show slot capacity as progress bar with exact counts
- `border-radius: 4px` as default; `6px` for badges; `8px` for cards

### Don't ❌
- `#409EFF` blue for buttons — **deprecated**, legacy only
- Dark bg surfaces inside content area (cards, table, forms)
- `border-radius` > `8px` on cards or modals
- Skip the `3px` green left bar on GNB active items
- More than two accent colors on any single page
- `font-weight: 600` on body text or `<td>`

---

*Updated: 2026.05.31 — live site CSS + visual component audit (dev.doohservice.com)*
