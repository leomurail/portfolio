# New Compact Floating Header Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the site header into a modern, compact, floating bar with glassmorphism and sharp angles, inspired by Mastercard's high-end digital interfaces.

**Architecture:** We will modify the existing `HeaderBar` component to wrap its content in a new floating container. We'll use CSS `backdrop-filter` for the blur effect and keep the logo/burger menu layout.

**Tech Stack:** Next.js, React, CSS (with glassmorphism properties).

---

### Task 1: Prepare the CSS for the Floating Container

**Files:**
- Modify: `src/ui/templates/header/headerBar.css`

- [ ] **Step 1: Update the header bar styles**
Replace the existing content of `src/ui/templates/header/headerBar.css` with the new floating style.

```css
#header-bar {
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  padding-top: 20px; /* Floating margin from top */
  pointer-events: none; /* Let clicks pass through the full-width wrapper */
}

#child-header {
  pointer-events: auto; /* Re-enable clicks for the actual header */
  width: 90%;
  max-width: var(--desktop-max-width);
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--m-size);
  
  /* Glassmorphism & Style */
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0; /* Sharp corners as requested */
  
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

#header-bar div.right {
  display: flex;
  align-items: center;
  gap: var(--two-xs-size);
}

#header-bar .cross-menu svg {
  width: 20px;
}

/*———————————————————RESPONSIVE—————————————————————*/

@media (max-width: 425px) {
  #header-bar {
    padding-top: 10px;
  }

  #child-header {
    width: 95%;
    height: 60px;
    padding-inline: var(--s-size);
  }

  #header-bar .right .btn {
    height: fit-content;
  }
}
```

- [ ] **Step 2: Commit CSS changes**

```bash
git add src/ui/templates/header/headerBar.css
git commit -m "style: implement floating glassmorphism header with sharp angles"
```

---

### Task 2: Refine the HeaderBar Component Structure

**Files:**
- Modify: `src/ui/templates/header/headerBar.tsx`

- [ ] **Step 1: Update the HeaderBar component**
Ensure the structure matches the new CSS selectors and is clean.

```tsx
"use client";

//npm
import Link from "next/link";
import Image from "next/image";

//components
import RoundBtn from "../../components/btns/roundBtn";

//styles
import "./headerBar.css";

//functions
import { setOverlay, removeHeader } from "./functions";

export default function HeaderBar() {
  return (
    <div id="header-bar">
      <nav id="child-header" className="no-max-width">
        <Link href="/" onClick={removeHeader}>
          <Image
            src="/img/main-logo.svg"
            alt="Logo principal du portfolio Léo Murail"
            width={70}
            height={40}
            style={{ objectFit: "contain" }}
          />
        </Link>

        <div className="right">
          <div onClick={setOverlay} id="menu-btn" style={{ cursor: "pointer" }}>
            <RoundBtn
              className="burger-menu"
              path="#"
              icon="burger-menu"
              size="l"
              display={true}
            />
            <RoundBtn
              className="cross-menu"
              path="#"
              icon="cross-menu"
              size="l"
              display={false}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
```

- [ ] **Step 2: Commit component changes**

```bash
git add src/ui/templates/header/headerBar.tsx
git commit -m "feat: refine HeaderBar structure for the new design"
```

---

### Task 3: Visual Verification & Polish

- [ ] **Step 1: Run the project and verify**
Start the development server and check the header on various pages.

Run: `npm run dev` (or `task watch` if preferred)
Check: 
- 20px margin from top.
- Backdrop blur effect over background images/3D.
- Sharp corners (0px radius).
- Alignment of logo and burger menu.

- [ ] **Step 2: Adjust logo size if needed**
If the logo feels too large or small in the 70px bar, adjust the `width`/`height` in `headerBar.tsx`.

- [ ] **Step 3: Final Commit**

```bash
git commit --allow-empty -m "fix: final polish for the new header design"
```
