

## Changes Overview

This plan covers five updates to the Koala Invest landing page: hero content change, calculator disclaimer alignment, How It Works box sizing, em-dash removal, and team photo aspect ratio.

---

### 1. Hero Section Content Update

**File:** `src/components/landing/Hero.tsx`

- Change the headline (h1) to: **"Invest in Regional Queensland from $700K"**
- Change the subheadline (p) to: **"Personalised investment solutions, backed by expert research and local insights."**
- The hero badge, CTA buttons, and trust indicators remain unchanged.

---

### 2. Investment Calculator - Disclaimer Alignment

**File:** `src/components/landing/InvestmentCalculator.tsx`

Currently the disclaimer sits inside the right-side results column. On desktop, it should visually align below the Deposit section on the left side.

- Restructure the layout so the disclaimer text moves outside the two-column grid and spans the full width (or left-aligned) below the sliders/results grid, starting from the left edge aligned with the Deposit section.
- On mobile, it stays naturally at the bottom of the section.

---

### 3. How It Works - Equal Box Sizes

**File:** `src/components/landing/HowItWorks.tsx`

The three step cards currently have varying heights due to different text lengths. Fix this by:

- Adding `h-full` and `flex flex-col` to the card container so all cards stretch to the same height within the CSS grid.
- The grid itself (`md:grid-cols-3`) already ensures equal column widths; the `h-full` on the inner card ensures equal visual height.

---

### 4. Remove All Em-Dashes Across Landing Page

Replace every instance of `—` (em-dash) with a regular dash `-` or rephrase naturally. Files affected:

- **Hero.tsx** (line 45): Will be replaced entirely with new content (handled in change 1).
- **ValueProps.tsx** (line 20): "...Koala Hospital - so your portfolio grows..."
- **HowItWorks.tsx** (lines 11, 18): "No obligations, no sales pitch - just clarity." and "...suitable properties - such as dual-key or duplex options - aligned with..."
- **FAQ.tsx** (lines 27, 32): Replace em-dashes with regular dashes or commas.

---

### 5. Team Photo - 16:9 Landscape Aspect Ratio

**File:** `src/components/landing/TeamPhoto.tsx`

- Add `aspect-video` (16:9) class to the image along with a constrained `max-h` to make it landscape and shorter.
- The image will use `object-cover` to crop appropriately within the 16:9 frame.

---

### Technical Summary

| File | Changes |
|------|---------|
| `Hero.tsx` | Replace h1 and subheadline text |
| `InvestmentCalculator.tsx` | Move disclaimer outside the 2-col grid, left-aligned below sliders |
| `HowItWorks.tsx` | Add `h-full flex flex-col` to cards; replace em-dashes |
| `ValueProps.tsx` | Replace em-dash with `-` |
| `FAQ.tsx` | Replace em-dashes with `-` |
| `TeamPhoto.tsx` | Add `aspect-video object-cover` to image |

