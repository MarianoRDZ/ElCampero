---
name: Criollo Moderno
colors:
  surface: '#fdf9f0'
  surface-dim: '#dddad1'
  surface-bright: '#fdf9f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ea'
  surface-container: '#f1eee5'
  surface-container-high: '#ece8df'
  surface-container-highest: '#e6e2d9'
  on-surface: '#1c1c16'
  on-surface-variant: '#51443c'
  inverse-surface: '#31302b'
  inverse-on-surface: '#f4f0e7'
  outline: '#83746b'
  outline-variant: '#d5c3b8'
  surface-tint: '#805533'
  primary: '#6f4627'
  on-primary: '#ffffff'
  primary-container: '#8b5e3c'
  on-primary-container: '#ffe3d1'
  inverse-primary: '#f4bb92'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#9c1e14'
  on-tertiary: '#ffffff'
  tertiary-container: '#be372a'
  on-tertiary-container: '#ffe2dd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc5'
  primary-fixed-dim: '#f4bb92'
  on-primary-fixed: '#301400'
  on-primary-fixed-variant: '#653d1e'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4a9'
  on-tertiary-fixed: '#410000'
  on-tertiary-fixed-variant: '#8e130c'
  background: '#fdf9f0'
  on-background: '#1c1c16'
  surface-variant: '#e6e2d9'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 64px
    fontWeight: '500'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 56px
  headline-md:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 36px
    fontWeight: '500'
    lineHeight: 44px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
  stack-xl: 80px
---

## Brand & Style

This design system blends the utilitarian precision of **Patagonia** with the technical elegance of **Apple**, filtered through the rustic, high-craft lens of Argentine **Criollo** tradition. It is built for a discerning audience that values heritage and "asado" culture as much as modern performance and longevity.

The style is defined as **Organic Minimalism**. It prioritizes high-quality negative space and large-scale, tactile imagery of iron, wood, and leather. The emotional response is one of "Inherited Quality"—digital interfaces that feel as sturdy and reliable as a hand-forged Gaucho knife.

**Key Visual Pillars:**
- **Heritage Modernity:** Traditional serif typography paired with a hyper-clean, grid-based layout.
- **Tactile Warmth:** Use of natural, creamy backgrounds rather than clinical whites to evoke the feeling of parchment and raw leather.
- **Craftsman Focus:** Imagery should emphasize macro details of product textures—the grain of the wood handle, the patina on the blade, the weave of the leather sheath.

## Colors

The palette is rooted in the natural materials of the Argentine countryside. 

- **Leather Brown (#8B5E3C):** Used for primary actions, navigation indicators, and branding moments. It represents craftsmanship and age.
- **Charcoal Black (#1C1C1C):** Reserved for high-contrast typography and deep backgrounds that frame product photography.
- **Light Beige (#F5F1E8):** The primary canvas color. It provides a warm, editorial feel that softens the high-contrast black text.
- **Fire Red (#C0392B):** A strategic accent used exclusively for high-priority calls to action (CTAs), sale indicators, or live status elements, evoking the glowing embers of the grill.
- **Pure White (#FFFFFF):** Used sparingly for product cards or content containers to create a "lifted" effect over the beige background.

## Typography

The typographic strategy juxtaposes the classic, literary elegance of **EB Garamond** with the technical, modernist clarity of **Hanken Grotesk**.

- **Headlines:** Use EB Garamond to establish authority and tradition. For hero sections, use slightly tighter letter spacing to maintain a premium "magazine" feel.
- **Body Text:** Hanken Grotesk provides a high-end, functional contrast. Its wide apertures ensure legibility on small screens while maintaining a contemporary Patagonia-esque aesthetic.
- **Labels:** Small caps and increased letter spacing are used for navigational labels and category headers to provide a structural, organized feel.

## Layout & Spacing

The layout utilizes a **12-column fixed grid** for desktop to maintain the centered, high-end editorial look of premium retail brands.

- **Rhythm:** An 8px base unit drives all spacing. Generous vertical padding (`stack-xl`) is encouraged between sections to allow the brand's high-quality imagery to breathe.
- **Margins:** Wide margins on desktop (64px) push the focus to the center, while mobile margins are kept tight (20px) to maximize screen real estate for product details.
- **Alignment:** Content should generally follow a centered or left-aligned asymmetrical layout, avoiding forced symmetry to feel more "custom" and less "templated."

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Organic Shadows** rather than heavy gradients.

- **Surface Levels:** 
    - Level 0 (Base): Light Beige (#F5F1E8).
    - Level 1 (Cards): Pure White (#FFFFFF).
- **Shadows:** Use extremely soft, low-opacity shadows (Opacity: 4-6%, Blur: 20px, Color: #1C1C1C) to suggest that cards are resting gently on a leather or paper surface.
- **Transitions:** Use slow, purposeful transitions (300ms ease-out) for hover states to emphasize a calm, sophisticated browsing experience.

## Shapes

The shape language reflects the "softened" edges of well-worn tools. 

- **Corner Radius:** A standard 0.5rem (8px) radius is applied to buttons and cards. This mimics the chamfered edges of wood handles and the natural curve of leather goods.
- **Containers:** Product imagery should occupy large-radius containers (1rem to 1.5rem) when showcased in a grid to maintain the premium feel.
- **Dividers:** Use thin, 1px strokes in #1C1C1C with 10% opacity for subtle section breaks that don't interrupt the visual flow.

## Components

### Buttons
- **Primary:** Solid Leather Brown (#8B5E3C) with White text. Rounded (8px). No border.
- **Secondary:** Transparent with a 1.5px Charcoal Black border.
- **CTA:** For "Buy Now" or "Limited Edition," use Fire Red (#C0392B) to draw immediate focus against the beige/brown palette.

### Cards
Cards use a Pure White background with the "Level 1" shadow. Content inside should be padded generously (32px) with a clear hierarchy: Small-cap label -> EB Garamond Headline -> Hanken Grotesk Price.

### Input Fields
Inputs are minimalist: a bottom border only (1.5px in #1C1C1C @ 20%) that turns into a full Leather Brown border on focus. Labels use Hanken Grotesk in small caps.

### Interactive Details
- **Micro-interactions:** Hovering over a product card should slightly scale the image (1.05x) within its frame, evoking a sense of "inspecting" the craftsmanship.
- **Photography:** Always pair components with high-resolution textures. For example, a "Care Instructions" section should be overlaid on a macro shot of oiled leather or brushed steel.