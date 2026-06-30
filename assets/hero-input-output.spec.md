# Spec — `hero-input-output.svg` (README hero asset)

> **Status:** Authoritative spec for the still image embedded at [README.md:27-29](../../README.md#L27-L29).
> **Decision history:** vhs-screencast approach attempted 2026-05-19 → rejected (terminal frame reads as "CLI tool", not "UI engine"). This spec replaces it.
> **Owner:** open — designer / DS V4 Pro / human can produce; spec is tool-agnostic.

---

## 1. Purpose

A single image that, in **one glance**, proves the core @wbc-ui2/core pitch:

> *"You write `<WBC :item='...'>` once. The engine renders real Material Design UI."*

The reader on `npmjs.com/package/@wbc-ui2/core` has 2-3 seconds before scrolling. The hero asset must do its job in that window — no animation, no waiting, no terminal.

## 2. Composition (the only thing that matters)

**Split-screen still, 16:9-ish, ≈1280×640 logical pixels.**

```
┌─────────────────────────────────┬─────────────────────────────────┐
│                                 │                                 │
│   LEFT — "WHAT YOU WRITE"       │   RIGHT — "WHAT GETS RENDERED"  │
│   (monospace code, dark bg)     │   (real-looking Vuetify UI)     │
│                                 │                                 │
│   <WBC :item="…"/>              │   [Material card + content]     │
│                                 │                                 │
└─────────────────────────────────┴─────────────────────────────────┘
       ↑ source-of-truth                   ↑ DOM result
```

**Centre divider:** a thin vertical line + a single `→` arrow at vertical centre. NOT animated. The arrow is the visual claim.

**Heading band (full-width, above the split):** small text — `<WBC :item="…" />  ·  one component, real DOM` — centred, secondary colour.

## 3. The 5 scenarios — pick ONE for the still

A previous attempt tried to cram all 5 into a single frame. **Don't.** A still shows ONE pairing; if more is needed, that's option C (animated SVG / Lottie) and a separate sub-plan.

**Recommended for hero:** **Scenario 4 — JSON → VCard**. It's the most visually convincing because the gap between "looks like a tiny config" and "renders as a polished Material card" is the largest. The other scenarios are documented here so future variants (or scenario rotation) have a single source.

| # | Scenario | LEFT (source) | RIGHT (rendered) | Why this one |
|---|---|---|---|---|
| 1 | Hello World | `<WBC :item="'Welcome to @wbc-ui2/core\|text-h3 primary--text'" />` | A large blue heading reading **Welcome to @wbc-ui2/core** | Cleanest demo of pipe-syntax, but visually thin |
| 2 | Link | `<WBC :item="'Read the docs\|text-h6\|/docs'" />` | A blue underlined h6 link reading **Read the docs** | Tiny on screen, weak hero |
| 3 | File → image | `<WBC :item="'./hero.png\|rounded elevation-4'" />` | An actual image with rounded corners + drop shadow | Visually strong but requires a real source image |
| **4** | **JSON → VCard ⭐** | A pretty-printed 5-line object: `{ comp: 'VCard', options: { props: { elevation: 4 }, html: '<h2>Q3 Revenue</h2><p>+24% YoY</p>' } }` | A Material VCard with title, body text, light grey background, elevation-4 shadow | **Strongest visual claim — pick this** |
| 5 | Markdown | `<WBC :item="'./landing.md'" />` | A rendered markdown page (TOC sidebar, syntax-highlighted code block) | Best for the docs section, NOT the hero (too dense) |

## 4. Visual specification (Scenario 4 — the chosen still)

### Left half — source pane

- **Background:** `#1e1e2e` (Catppuccin Mocha base) or any IDE-dark.
- **Font:** monospace, **16–18 px**, soft white (`#cdd6f4`).
- **Code block — exact content (no truncation):**

  ```vue
  <WBC :item="{
    comp: 'VCard',
    options: {
      props: { elevation: 4 },
      html: '<h2>Q3 Revenue</h2><p>+24% YoY</p>',
      class: 'pa-4'
    }
  }" />
  ```

- **Syntax colours (light hint):** tag-name purple, attribute teal, string yellow-amber. Don't over-decorate.
- **Padding:** ≥ 32 px on all sides.

### Right half — rendered pane

- **Background:** `#f5f5f5` (light Material surface) — the visual contrast with the left side IS the claim.
- **Card to render:** Material `<v-card class="pa-4" elevation="4">` with:
  - **Title (`h2`):** "Q3 Revenue" — 24 px, dark-grey, semibold.
  - **Body (`p`):** "+24% YoY" — 16 px, success-green (`#1976D2` or `#43A047`). Optionally add a tiny up-arrow `▲`.
  - **Card size:** ~ 260 × 120 px logical.
  - **Drop shadow:** Material elevation-4 (soft, offset-y ≈ 4 px, blur ≈ 12 px, opacity ≈ 0.16).
- **Card position:** vertically + horizontally centred in the right pane.
- **Padding:** ≥ 32 px on all sides.

### Centre divider

- **Vertical line:** 1 px, `#3b3b4f` (mid-tone — visible on both sides).
- **Arrow:** at vertical centre, slightly larger circle (24 px) containing a `→` glyph in white. Background of circle: `#1976D2` (the WBC primary).

### Top band (above the split)

- Full width, ~ 48 px tall.
- Background: `#0d0d14` (deeper than left pane) → seamless transition to dark side.
- Centred text: `<WBC :item="…" />` (monospace, 18 px, dimmed white) `·` `one component, real DOM` (sans-serif, 14 px, secondary).

## 5. Format & size budget

| Property | Target |
|---|---|
| **Format** | SVG strongly preferred (scales, ≤ 30 KB possible). PNG @ 2× acceptable. AVIF if hosting allows. |
| **Logical size** | 1280 × 640 |
| **File size** | ≤ 80 KB SVG / ≤ 250 KB PNG. **Hard ceiling: 400 KB** (anything above and the npm page degrades on 3G). |
| **Aspect** | 2:1 — matches the `<img width="780">` slot already reserved in README. |
| **Colour space** | sRGB. No CMYK. No P3. |
| **Background** | Two-tone (dark left, light right) — must NOT be transparent (npm light-mode breaks transparent assets). |

## 6. Production paths (pick one)

| Path | Tool | Time | Output | Notes |
|---|---|---|---|---|
| **A** | Hand-rolled SVG | 1–2 h | `hero-input-output.svg` | Most precise, smallest file. Editable in text editor for tweaks. **Best for owner/lead.** |
| **B** | Figma → export SVG | 1 h | `hero-input-output.svg` | Fastest visual iteration if you already use Figma. Watch exported size (often bloated). |
| **C** | Excalidraw → export PNG/SVG | 30 min | `hero-input-output.svg` | Lowest fidelity but fastest. Hand-drawn style may not match the rest of the README. |
| **D** | Real screenshot of the live demo | 15 min | `hero-input-output.png` | Take a 1280×640 screenshot of `demo.wbc-ui.com` rendering Scenario 4, then composite the source code on the left in any image editor. Most authentic but tied to the current demo's exact theme. |
| **E** | AI-image generation | 5 min | `hero-input-output.png` | NOT recommended — AI image models reliably get monospace code wrong and produce uncanny Material cards. |

## 7. Verification checklist (before embedding)

- [ ] File at `docs/media/hero-input-output.svg` (or `.png`)
- [ ] File size ≤ 400 KB
- [ ] Renders correctly in **GitHub light mode** (no transparent bg surprises)
- [ ] Renders correctly in **GitHub dark mode** (the dark left pane stays visually distinct from GitHub's `#0d1117` background — add a 1-px outer border if needed)
- [ ] Source code on left is **readable at 780 px wide** (the README slot width) — letter height ≥ 14 px on a typical laptop screen
- [ ] Material card on right does NOT bleed off the canvas
- [ ] Logical 2:1 aspect ratio preserved
- [ ] No proprietary fonts embedded (use system monospace + sans-serif fallback chains)

## 8. README integration (when ready)

Once the file exists:

```html
<!-- replace the current TODO-commented block at README.md:27-29 -->
<p align="center">
  <img src="docs/media/hero-input-output.svg"
       alt="@wbc-ui2/core — write &lt;WBC :item='...'&gt;, render real Material UI"
       width="780"/>
</p>
```

(Note: `<` and `>` in the `alt` attribute must be HTML-entity-escaped or quoted with `'…'` — npm's alt-text renderer is strict.)

## 9. What this spec replaces

- **Killed:** vhs `.tape` approach (`docs/media/hero-pipe-syntax.tape` — deleted 2026-05-19 13:21).
- **Killed:** terminal-screencast GIF (`docs/media/hero-pipe-syntax.gif` — deleted 2026-05-19 13:21).
- **Killed:** sub-plan rows 7.1–7.4 (vhs recording chain — cancelled in plan).
- **Replaced by:** sub-plan rows 7.5–7.7 (produce SVG · embed · verify).

## 10. Future variants (not for v1)

- **Animated SVG** rotating through Scenarios 1, 3, 4, 5 — half-day production, hold for v1.1 of the README.
- **Locale variants** (Arabic RTL hero) — defer to `/wbTranslate` pass.
- **Tier variants** (free vs pro hero) — defer; the existing `tier-badges.svg` already covers tier signalling.

---

## 🔍 Validation (QA) — *(Opus 4.7 via Claude Code — 13:48)*

> **Validator:** Opus 4.7 (same model as author — self-validation bias acknowledged) · **Mode:** PASS ✅ · **Score: 8/10**
> **Note:** appending here because per the wbValid template, the spec IS the task 7.5 deliverable; there is no separate `tasks/task_7.5/` report folder.

### What I checked

| Criterion | Result |
|---|---|
| File exists at the path the plan claims | ✅ `docs/media/hero-input-output.spec.md` (9,063 bytes) |
| Section count matches report claim ("10 sections") | ✅ `grep -c '^## '` = 10 |
| Standalone-readable (no plan-file dependency) | ✅ — verified by re-reading sections 1–10 without context |
| Composition spec unambiguous (designer could execute) | ⚠️ §2 abstract; §4 detailed but missing reference image |
| Scenario chosen (one of the 5)? | ✅ Scenario 4 — JSON → VCard — explicitly marked ⭐ in §3 |
| Size budget concrete? | ✅ ≤ 80 KB SVG / ≤ 250 KB PNG / hard ceiling 400 KB |
| Production paths recommend a default? | ❌ §6 lists A/B/C/D/E but doesn't pick. **Defect.** |
| Failure modes pre-empted? | ✅ Path E (AI image-gen) explicitly rejected; transparent-bg + dark-mode + npm-alt-escaping all flagged |
| Verification checklist actionable? | ✅ §7 — 8 boxes, all concrete |
| README-integration snippet provided? | ✅ §8 — drop-in HTML with escaped `<` / `>` warning |

### Defects (the 2-point deduction)

| # | Defect | Severity | Note |
|---|---|---|---|
| D1 | §6 surveys 5 production paths but doesn't recommend a default. A spec should opine, not just enumerate. | −1.0 | Recommend stating "Path A (hand-rolled SVG) is the default; pick another only if you have a specific reason." |
| D2 | §2 composition is described in prose + a rough ASCII frame; a designer would still have to imagine the result. A 10-line richer ASCII mockup (with the actual code snippet on the left side and a sketch of the card on the right) would close the gap. | −0.5 | Low-cost fix: replace lines 30-40 with a richer mockup. |
| D3 | §3 scenario table mentions "future scenario rotation" but §10 doesn't tie back to that. Minor consistency issue, not blocking. | −0.5 | One-line cross-reference would resolve. |

### Why 8/10 and not lower

The spec is a genuine working document. A designer or a model hand-rolling SVG could open it and produce something usable on a first attempt. The defects above are improvements, not blockers. None of the production paths in §6 are wrong — D1 is "the spec is under-opinionated," not "the spec is incorrect."

### Suggested follow-up

Fold D1 + D2 fixes into the next spec edit (before kicking off 7.6, not after). Cost: 5-10 min, no new plan row needed — they're micro-edits.

**Verdict:** ✅ PASS — spec is production-ready; could be sharper with two small revisions.
