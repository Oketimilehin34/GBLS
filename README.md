# Global Business Leadership Summit (GBLS) 2027
## Premium International Business Conference Landing Page

A premier, executive-grade corporate web application built for international summits, multilateral economic assemblies, and global leadership forums.

Developed with **React 18**, **TypeScript**, **Tailwind CSS**, **Lucide Icons**, and **Framer Motion**, powered by **Vite**.

---

### Key Features & Architecture

- **Visual Identity**: Tailored executive palette featuring Primary Navy (`#071B3A`), Deep Navy (`#041329`), Secondary Navy (`#102D52`), Soft Off-White (`#F5F7FA`), Light Blue (`#E8EEF6`), and refined Gold Accents (`#C6A45C`).
- **Dynamic Real-Time Countdown**: Built with custom `useCountdown` hook calculating days, hours, minutes, and seconds relative to `conferenceData.startDate`, with an instant `.ics` calendar invitation download.
- **Sticky Executive Navbar**: Transparent glassmorphism navigation transitioning to solid navy with gold border on scroll, active section highlight tracking, and mobile drawer menu.
- **Hero Presentation**: High-contrast summit imagery with layered navy gradients, official eyebrow badge, event logistics metadata (dates, venue, city, edition), and scroll indicators.
- **Editorial About Section**: Explains institutional mandate, sustainable capital flows, enterprise AI governance, and includes an interactive "About the Forum" modal.
- **Refined Strategic Objectives**: Clean numbered presentation (01–04) with Lucide icons and key deliverables, avoiding overly repetitive card patterns.
- **Faculty & Speakers**: Image-led profile cards (4:5 ratio) with category filters (Keynote, Policy & Economics, Institutional Investors, Technology & AI) and an interactive **Speaker Biography Modal**.
- **Interactive 3-Day Programme**: Multi-day agenda tabs with category pills (Plenary, Keynote, Panel, Roundtable, Networking, Ceremony), location halls, and PDF download action.
- **Why Attend & Demographics**: Two-column layout with high-impact imagery and percentage-based attendee sector breakdowns.
- **Animated Statistics Counter**: Viewport-triggered cubic ease-out counting animation for delegates (2,400+), countries (85+), speakers (120+), sessions (48), and capital represented ($450B+).
- **Sponsors & Strategic Alliances**: Tiered heraldry (Strategic Partners, Platinum, Gold, Media, Supporting Bodies) with clean geometric logo placeholders and sponsor prospectus modal.
- **Full Delegate Registration**: Ticket comparison tiers (Standard, Business Executive, VIP Delegate, Corporate Group), complete frontend validation, duplicate submission protection, animated loading state, and formal **Summit Accreditation Confirmation Certificate**.
- **Venue & GIS Setting**: High-res venue photography, district points-of-interest vector map preview, and directions guide modal.
- **Interactive FAQ Accordion**: Category filters and real-time keyword search across 7 required executive FAQs.
- **Secretariat Liaison & Footer**: Departmental contact form, newsletter subscription with RFC-compliant validation, legal modals (Privacy, Terms, Code of Conduct), and dynamic copyright.

---

### Central Configuration & Placeholder Customization

All event specifics, dates, venues, faculty, and statistics are decoupled into central TypeScript configuration files. Update the summit branding without modifying components:

| File | Purpose |
|---|---|
| [`src/data/conference.ts`](file:///c:/Users/AMOS-OKE/Documents/Business/src/data/conference.ts) | Summit theme, dates, venue name, address, statistics, organizer profile |
| [`src/data/speakers.ts`](file:///c:/Users/AMOS-OKE/Documents/Business/src/data/speakers.ts) | Faculty names, titles, affiliations, portraits, bios, session assignments |
| [`src/data/programme.ts`](file:///c:/Users/AMOS-OKE/Documents/Business/src/data/programme.ts) | 3-day schedule, times, halls, session descriptions, panel members |
| [`src/data/sponsors.ts`](file:///c:/Users/AMOS-OKE/Documents/Business/src/data/sponsors.ts) | Partner tiers, placeholder corporate names, geometric icon types |
| [`src/data/faq.ts`](file:///c:/Users/AMOS-OKE/Documents/Business/src/data/faq.ts) | Accordion questions, categories, and protocol answers |

---

### Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (Vite)
npm run dev

# 3. Compile and build for production
npm run build

# 4. Preview production build locally
npm run preview
```

### Technology Compliance
- React 18 (`.tsx`)
- TypeScript (`strict: true`)
- Tailwind CSS
- Lucide React
- Framer Motion
- Zero PHP dependencies
- Accessible HTML5 semantics & ARIA attributes

