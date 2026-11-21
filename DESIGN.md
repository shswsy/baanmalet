---
name: บ้านเมล็ด · Baan Malet
description: Bilingual (TH/EN) landing page for a fictional Chiang Mai café and roastery.
colors:
  terracotta: "#b65a37"
  terracotta-deep: "#98462a"
  terracotta-wash: "#f1dccb"
  roast-black: "#2b1d15"
  roast-brown: "#3a2a1f"
  roast-umber: "#4d382a"
  cocoa-brown: "#7a5238"
  sage: "#6f7d5c"
  sage-forest: "#434f38"
  sage-wash: "#dfe2d0"
  oat-cream: "#f6f0e6"
  paper-white: "#fcf9f3"
  kraft-sand: "#ece3d4"
  kraft-sand-deep: "#e2d5c1"
  espresso-ink: "#2b211b"
  warm-grey: "#6c6057"
  hairline-tan: "#ddd0bd"
  line-green: "#06c755"
typography:
  display:
    fontFamily: "Prompt, IBM Plex Sans Thai, system-ui, sans-serif"
    fontSize: "clamp(44px, min(6.2vw, 13vh), 104px)"
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: "-0.01em"
  display-en:
    fontFamily: "Fraunces, Prompt, Georgia, serif"
    fontSize: "clamp(44px, min(6.2vw, 13vh), 104px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Prompt, IBM Plex Sans Thai, system-ui, sans-serif"
    fontSize: "clamp(34px, 4.8vw, 72px)"
    fontWeight: 600
    lineHeight: 1.15
  title:
    fontFamily: "Prompt, IBM Plex Sans Thai, system-ui, sans-serif"
    fontSize: "19.5px"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: "IBM Plex Sans Thai, Noto Sans Thai, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Prompt, IBM Plex Sans Thai, system-ui, sans-serif"
    fontSize: "14.5px"
    fontWeight: 500
    letterSpacing: "0.06em"
  numeral:
    fontFamily: "Fraunces, serif"
    fontSize: "18px"
    fontWeight: 400
rounded:
  pill: "999px"
  card: "28px"
  panel: "36px"
  inset: "22px"
  control: "14px"
  mark: "12px"
spacing:
  gutter: "clamp(16px, 3.6vw, 56px)"
  section: "clamp(80px, 9vw, 144px)"
  section-tight: "clamp(24px, 4vw, 56px)"
  card: "clamp(24px, 2.6vw, 40px)"
  wrap: "1440px"
components:
  button-primary:
    backgroundColor: "{colors.terracotta}"
    textColor: "#ffffff"
    typography: "{typography.title}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.terracotta-deep}"
  button-ghost:
    backgroundColor: "rgba(252, 249, 243, 0.5)"
    textColor: "{colors.roast-black}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-ghost-hover:
    backgroundColor: "{colors.paper-white}"
  button-line:
    backgroundColor: "{colors.roast-black}"
    textColor: "{colors.oat-cream}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.roast-umber}"
  button-cream:
    backgroundColor: "{colors.oat-cream}"
    textColor: "{colors.roast-black}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  tab:
    backgroundColor: "transparent"
    textColor: "{colors.roast-umber}"
    rounded: "{rounded.pill}"
    padding: "8px 18px"
    height: "42px"
  tab-selected:
    backgroundColor: "{colors.roast-black}"
    textColor: "{colors.oat-cream}"
  tag:
    backgroundColor: "{colors.terracotta-wash}"
    textColor: "{colors.terracotta-deep}"
    rounded: "{rounded.pill}"
    padding: "0 10px"
  card-review:
    backgroundColor: "{colors.paper-white}"
    rounded: "{rounded.card}"
    padding: "{spacing.card}"
  card-bean:
    backgroundColor: "{colors.roast-brown}"
    textColor: "{colors.oat-cream}"
    rounded: "{rounded.card}"
  nav-link:
    textColor: "{colors.roast-umber}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  nav-link-active:
    backgroundColor: "{colors.kraft-sand}"
    textColor: "{colors.roast-black}"
---

# Design System: บ้านเมล็ด · Baan Malet

## Overview

**Creative North Star: "The Roastery Journal"**

A warm, editorial café page that reads like a roaster's printed journal: oat-cream paper, roast-brown ink, one terracotta accent, and muted sage as the second voice. Sections are numbered like journal entries (italic Fraunces numerals with a hairline rule), headlines are large and balanced, and body copy is set generously (17px / 1.75) so Thai text breathes.

Density is low and the layout is wide: a 1440px wrap with fluid gutters, big fluid section padding, and asymmetric 7/5 and 5/7 grids. Depth comes mostly from tonal blocks (sand panels, full-bleed roast-brown and sage-forest sections) rather than shadows. Illustrations are hand-drawn inline SVG; there are no photos.

Thai and English share one system: Prompt carries Thai display and UI, IBM Plex Sans Thai carries body, and on `lang="en"` the display face switches to Fraunces with tighter leading and italic emphasis.

**Key Characteristics:**
- Cream paper surfaces, roast-brown text and dark sections, terracotta as the single action color.
- Pill-shaped controls everywhere; generously rounded (28px) cards and 36px hero/workshop panels.
- Numbered editorial section heads with italic serif numerals.
- Tonal layering first; soft, long, low-opacity brown shadows only on floating pieces.
- Mobile gets a fixed three-button quick bar (call, LINE, map) in roast black.

## Colors

An earthy café palette: roasted browns and cream neutrals with a terracotta accent and a quiet sage counterpoint.

### Primary
- **Terracotta** (#b65a37): primary buttons, hero emphasis word, stars, "today" tag, focus outline. The one color that means "act here".
- **Terracotta Deep** (#98462a): primary hover, kickers, eyebrow numerals, small accent text on light surfaces.
- **Terracotta Wash** (#f1dccb): tag fills, today's row in the hours table, story-art tint.

### Secondary
- **Sage** (#6f7d5c): ticket seat markers.
- **Sage Forest** (#434f38): the workshop panel background.
- **Sage Wash** (#dfe2d0): story-art tint.

### Neutral
- **Roast Black** (#2b1d15): headings, dark sections, footer, quick bar, selected tab and language chip, secondary "LINE" button.
- **Roast Brown** (#3a2a1f): bean card body, review quote text.
- **Roast Umber** (#4d382a): nav and tab text, hero lead, dark-button hover.
- **Cocoa Brown** (#7a5238): avatar initials.
- **Oat Cream** (#f6f0e6): page background and text on dark.
- **Paper White** (#fcf9f3): cards, info strip, dialog, mobile menu.
- **Kraft Sand** (#ece3d4) / **Kraft Sand Deep** (#e2d5c1): sand sections, featured card, tab track, dotted price leaders.
- **Espresso Ink** (#2b211b): body text. **Warm Grey** (#6c6057): secondary text. **Hairline Tan** (#ddd0bd): dividers and borders.
- **LINE Green** (#06c755): only the generic LINE glyph and chat bubble.

### Named Rules
**The One Ember Rule.** Terracotta is the only action color. Sage never carries a CTA; it is a resting, decorative counter-tone.

**The Paper, Not White Rule.** Surfaces are cream or paper (#f6f0e6 / #fcf9f3). Pure #fff appears only as text on terracotta and as a hover lift.

## Typography

**Display Font:** Prompt 600 (Thai); Fraunces 500 on English pages
**Body Font:** IBM Plex Sans Thai (with Noto Sans Thai, system-ui)
**Label/UI Font:** Prompt 500
**Accent:** Fraunces italic for section numerals, story numbers and the ticket date

**Character:** A friendly geometric Thai sans for voice and controls over a humanist Thai body face, with a soft old-style serif as the editorial accent.

### Hierarchy
- **Display** (600, clamp(44px, min(6.2vw, 13vh), 104px), 1.14): hero headline; second line in terracotta.
- **Headline** (600, clamp(34px, 4.8vw, 72px), 1.15): section titles, `text-wrap: balance`.
- **Title** (Prompt 500, 19.5px): menu item names; larger 30-52px display-face titles on featured, bean and story blocks.
- **Body** (400, 17px, 1.75; 16px under 760px): paragraphs, max ~30-34em.
- **Label** (Prompt 500, 13-15px, 0.04-0.06em tracking): eyebrows, info labels, footer heads.

### Named Rules
**The Bilingual Swap Rule.** Thai display stays upright Prompt at 1.14-1.2 leading; English swaps to Fraunces with tighter leading and italic emphasis. Never set Thai in Fraunces.

## Layout

Single centered wrap (`min(1440px, 100% - 2 × gutter)`), fluid gutter clamp(16px, 3.6vw, 56px), and section padding clamp(80px, 9vw, 144px). Section heads use a 7fr/5fr grid with the lead pushed right. Content grids: menu 4fr/8fr with a sticky featured card, beans and reviews in 3 columns, story rows alternating 5fr/6fr, visit 5fr/7fr. Every grid track is `minmax(0, 1fr)` to stop 390px overflow.

Breakpoints: 1180px (menu list to one column), 1023px (hamburger menu, most grids collapse), 760px (radius drops to 22px, header 64px, body 16px, fixed bottom quick bar appears), 380px (logo subtitle hidden). Sticky header is 72px, shrinking to 62px on scroll.

## Elevation & Depth

Mostly tonal: depth is carried by sand panels and full-bleed dark sections. Shadows are long, soft, negative-spread and tinted roast brown, used only on things that float: the info strip over the hero, the scrolled header, the tilted ticket, bean cards on hover, the map button and the LINE dialog.

### Shadow Vocabulary
- **Header settle** (`box-shadow: 0 6px 24px -18px rgba(43, 29, 21, 0.45)`): header once scrolled.
- **Floating strip** (`box-shadow: 0 30px 60px -36px rgba(43, 29, 21, 0.45), 0 0 0 1px rgba(43, 29, 21, 0.05)`): info strip overlapping the hero.
- **CTA glow** (`box-shadow: 0 10px 24px -12px rgba(152, 70, 42, 0.8)`): primary button.
- **Lifted card** (`box-shadow: 0 30px 50px -30px rgba(0, 0, 0, 0.7)`): bean card hover.
- **Dialog** (`box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.5)`): LINE demo dialog.

### Named Rules
**The Flat Until Floating Rule.** Cards rest flat on tone. A shadow means the element sits above the page (overlap, sticky, hover, modal).

## Shapes

Soft and round. Controls, tabs, chips and tags are full pills (999px). Cards and art frames use 28px (22px on mobile); the hero and workshop panels use 36px. Smaller elements step down: info strip 22px, dialog 24px, mobile menu links and menu button 14px, logo mark 12px. Dots, avatars, seat markers and decorative rings are circles. The ticket has circular side notches, a dashed tear line and a -3deg tilt.

## Components

### Buttons
- **Shape:** full pill (999px), min-height 48px (56px large, 42px small), 1.5px border slot.
- **Primary:** terracotta fill, white Prompt 500 16px text, padding 12px 24px, CTA glow shadow.
- **Hover / Focus:** lift 1px (`translateY(-1px)`), press down 1px; primary darkens to terracotta deep; trailing arrow slides 4px right. Focus is a 3px terracotta outline, 3px offset.
- **Ghost:** translucent paper fill, 35% roast-black border; hover goes solid paper with a full roast-black border.
- **LINE (dark):** roast-black fill, cream text, with the green LINE glyph; hover roast umber.
- **Cream:** cream fill on dark sections; hover white.

### Chips
- **Tag:** terracotta-wash pill with terracotta-deep Prompt 12.5px text.
- **Tasting notes / process chip:** outlined translucent-cream pills on dark bean cards.

### Cards / Containers
- **Corner Style:** 28px.
- **Background:** paper (reviews, visit card), kraft sand (featured), roast brown (bean cards, with a hue-tinted radial art header).
- **Shadow Strategy:** flat at rest; bean cards lift 4px with the lifted-card shadow on hover.
- **Border:** reviews carry a 1px hairline-tan border; others are borderless.
- **Internal Padding:** clamp(24px, 2.6vw, 40px).

### Navigation
- Sticky translucent cream bar with `saturate(1.4) blur(14px)`, hairline border and settle shadow once scrolled. Links are Prompt 15.5px roast-umber pills; hover and current page get a kraft-sand fill. A TH/EN pill switch with a roast-black active chip sits at the right. Under 1023px links fold into a paper drop panel behind a 44px menu button; under 760px a fixed roast-black quick bar holds call, LINE and map.

### Menu Tabs
- Kraft-sand pill track with 42px pill buttons and small count badges; the selected tab is roast black with cream text. Menu rows use a dotted leader between name and price.

### Workshop Ticket (signature)
- A tilted paper ticket on the sage-forest panel: Fraunces terracotta date, seat circles (sage outline, filled when taken), dashed tear line and circular notches.

### LINE Demo Dialog
- Native `<dialog>`, 24px radius, paper fill, blurred roast-tinted backdrop, and a LINE-green chat bubble showing the prefilled message.

## Do's and Don'ts

### Do:
- **Do** keep terracotta (#b65a37) as the only CTA fill; use terracotta deep (#98462a) for hover and small accent text.
- **Do** use pill shapes for every control, tab and tag, and 28px corners for cards.
- **Do** open sections with the numbered eyebrow (italic Fraunces numeral + hairline) above a balanced headline.
- **Do** keep grid tracks `minmax(0, 1fr)` and test at 390px.
- **Do** draw illustrations as inline SVG using the palette above.

### Don't:
- **Don't** use stock photos.
- **Don't** set Thai text in Fraunces; it is for English display and numerals only.
- **Don't** put shadows on cards at rest; shadows are for floating or hovered elements.
- **Don't** use pure white surfaces; use paper (#fcf9f3) or cream (#f6f0e6).
