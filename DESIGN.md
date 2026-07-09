---
name: DevFlow Professional
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#9d4300'
  on-secondary: '#ffffff'
  secondary-container: '#fd761a'
  on-secondary-container: '#5c2400'
  tertiary: '#4d556b'
  on-tertiary: '#ffffff'
  tertiary-container: '#656d84'
  on-tertiary-container: '#eef0ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
  code-snippet:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system is built for the high-velocity world of modern development. It prioritizes clarity, technical precision, and reduced cognitive load. The aesthetic is **Corporate Modern** with a focus on functional utility, utilizing heavy whitespace and a strictly logical hierarchy to help developers navigate complex tasks and learning modules.

The system targets a professional audience that values efficiency over flash. By combining a clean, "paper-white" foundation with vibrant, high-contrast accent colors (electric blue and safety orange), the UI directs attention to action states and status indicators without overwhelming the content. Visual depth is achieved through structural layering rather than decorative effects, ensuring the code and documentation remain the primary focus.

## Colors

The palette is optimized for a light-mode default to ensure maximum legibility during extended reading and task management sessions. 

- **Primary (Electric Blue):** Used for primary actions, active navigation states, and "Story" or "Progress" indicators. 
- **Secondary (Safety Orange):** Reserved for "Review" states, warnings, and high-priority alerts.
- **Tertiary (Slate Navy):** Used for headers and primary text to provide high contrast against the white background.
- **Code Blocks:** A dark-themed syntax highlighting environment is used for code snippets to provide a familiar, IDE-like experience within the browser.
- **Neutrals:** A spectrum of cool grays handles borders, breadcrumbs, and secondary meta-data.

## Typography

The system employs a dual-purpose typographic approach. **Hanken Grotesk** provides a sharp, contemporary feel for headings and brand elements. **Inter** is utilized for body copy due to its exceptional readability and neutral tone. 

For technical data, breadcrumbs, and code, **JetBrains Mono** is the standard. This monospaced choice ensures that character distinctions (like `0` vs `O`) are clear, which is critical for a developer-focused platform. Scale is handled strictly, with generous line heights to prevent visual crowding in documentation-heavy views.

## Layout & Spacing

This design system uses a **Fluid Grid** with fixed maximum widths for content readability. On desktop, content is contained within a 1280px max-width container to prevent line lengths from becoming unreadable.

- **Grid:** 12-column grid for desktop, 8-column for tablet, and 4-column for mobile.
- **Rhythm:** An 8px base unit drives all spacing.
- **Vertical Spacing:** Generous 40px to 64px gaps separate major sections (like "Description" from "Task Headers") to create a clear visual break without the need for horizontal rules.
- **Mobile Adaption:** Margins shrink from 32px to 16px. Code blocks transition to horizontal scrolling to preserve syntax integrity.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Low-Contrast Outlines**. 

- **Level 0 (Background):** Pure white (#FFFFFF).
- **Level 1 (Cards/Containers):** Defined by a 1px solid border (#E2E8F0) rather than shadows. This maintains a "flat" professional look.
- **Level 2 (Dropdowns/Popovers):** Uses a subtle, extra-diffused shadow (0px 4px 12px rgba(0,0,0,0.05)) to suggest floating without breaking the minimalist aesthetic.
- **Dark Elements:** Code blocks are treated as "sunken" elements, using a dark background to create a distinct visual zone that stands out from the prose.

## Shapes

The shape language is **Soft**. A consistent 0.25rem (4px) corner radius is applied to most UI components including input fields, buttons, and code containers. 

For high-contrast "Status Chips" (like the "Story" or "Review" tags), a full pill-shape (999px) is used to distinguish these meta-elements from functional interactive components. This differentiation helps the user immediately identify "status" versus "action."

## Components

### Buttons & Inputs
- **Primary Action:** Solid Electric Blue with white text. 4px rounded corners.
- **Secondary/Ghost:** Slate Navy outline with transparent background.
- **Input Fields:** 1px gray border, turns Electric Blue on focus. Labels use `body-sm` bold.

### Chips & Tags
- **Category Tags (e.g., "Story"):** Small, pill-shaped, solid Electric Blue with white `label-mono` text.
- **Status Dropdowns:** Pill-shaped with a white background, 1px border, and a colored status dot (e.g., Orange for "Review").

### Code Snippets
- **Container:** Dark slate/black background with syntax highlighting. 
- **Features:** Must include line numbers in a muted gray and a "Copy" icon button in the top right corner.

### Breadcrumbs
- Use `body-sm` in a muted neutral color. 
- Use the chevron-right icon as a separator. The current page should be slightly darker but not underlined.

### Cards
- White background, 1px neutral border, no shadow. 
- Content inside should use `md` (24px) padding to maintain the "breathable" feel of the system.