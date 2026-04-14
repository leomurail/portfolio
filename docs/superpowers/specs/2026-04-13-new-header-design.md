# Design Specification: New Compact Floating Header

**Date:** 2026-04-13  
**Status:** Draft (Awaiting Review)  
**Topic:** Redesign of the global site header to a modern, compact, and floating style inspired by Mastercard's storytelling interfaces.

## 1. Executive Summary
The goal is to replace the current standard header with a minimalist, floating "pill" or "bar" (without rounded corners) that emphasizes the site's high-end, digital aesthetic. It will leverage glassmorphism (background blur) to integrate seamlessly with the 3D WebGL background elements of the portfolio.

## 2. Visual Design & Style
### 2.1 Aesthetic Principles
*   **Minimalism:** Focus on Logo and Burger Menu with zero visual noise.
*   **Architectural Rigidity:** Use sharp angles (0px `border-radius`) for a technical, modern feel.
*   **Transparency:** High background blur (`backdrop-filter: blur(15px)`) to keep the "alive" feel of the background content.
*   **Elegance:** A very thin, low-opacity border (`1px`) for subtle structure.

### 2.2 UI Elements
*   **Container:**
    *   `max-width`: Approximately `var(--desktop-max-width)` or `90%` of viewport.
    *   `height`: Fixed (around `60px` to `70px`).
    *   `margin`: Floating with `20px` top margin.
    *   `background-color`: Semi-transparent (e.g., `rgba(255, 255, 255, 0.05)` or dark equivalent).
    *   `border`: `1px solid rgba(255, 255, 255, 0.15)`.
    *   `border-radius`: `0` (Sharp corners).
*   **Left Section:** Main logo (SVG) properly aligned.
*   **Right Section:** Burger Menu toggle (retaining the existing `RoundBtn` or a specialized square version if desired, but keeping the "round" concept for contrast was discussed).

## 3. Technical Implementation
### 3.1 Components
*   **`HeaderBar` Update:** Modify `src/ui/templates/header/headerBar.tsx` and `headerBar.css` to implement the floating container.
*   **Layout Structure:**
    ```tsx
    <div id="header-bar-container">
      <nav id="header-bar-inner">
        <Logo />
        <MenuToggle />
      </nav>
    </div>
    ```

### 3.2 Styling (CSS/SCSS)
*   Use `position: fixed` on the outer container.
*   Implement `backdrop-filter: blur()` for the glassmorphism effect.
*   Use CSS variables from `global.css` for spacing and colors.

## 4. Behavior & Animations
*   **Sticky Behavior:** Fixed at the top, but slightly inset from the edges.
*   **Entrance:** Subtle fade-in and slide-down animation on page load.
*   **Responsiveness:** On mobile, the container may expand to `95%` width or slightly reduce height while maintaining the "floating" style.

## 5. Success Criteria
*   Header feels modern and high-end.
*   Background 3D elements are visible and elegantly blurred behind the header.
*   No functional regressions in the Burger Menu overlay.
*   Sharp 90-degree corners are maintained throughout.

## 6. Verification Plan
*   **Visual Check:** Verify the `blur` effect and `border` visibility on different background colors.
*   **Interaction Check:** Ensure the Burger Menu opens/closes correctly and doesn't conflict with the new fixed positioning.
*   **Mobile Audit:** Test responsiveness on viewport widths < 425px.
*   **Performance:** Check for any significant layout shifts or performance issues with `backdrop-filter`.
