# Justice Law Office

A modern, multilingual law office website built with React, TypeScript, and Tailwind CSS. Designed to provide professional legal services with a focus on user experience and accessibility.

## Live Demo

**Production:** [https://justice-azure.vercel.app/](https://justice-azure.vercel.app/)

**Repository:** [https://github.com/MohamedFadl2344/justice.git](https://github.com/MohamedFadl2344/justice.git)

## Author

**Mohamed Fadl**

## Preview

![Justice Law Office](./public/screenshot-justice/screenshot-justice.png)

## Overview

Justice is a comprehensive law office platform offering legal consultation services across multiple practice areas including civil, criminal, commercial, and family law. The application supports five languages (Arabic, English, French, German, Italian) with full RTL/LTR support.

## Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

### Technologies

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **State Management:** Zustand
- **Internationalization:** Custom i18n implementation
- **Icons:** React Icons, Country Flag Icons
- **Deployment:** Vercel

## Project Structure

```
justice/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── SimpleLoader.tsx
│   │   ├── features/
│   │   │   ├── about/
│   │   │   │   ├── About.tsx
│   │   │   │   ├── aboutsection/
│   │   │   │   │   ├── AboutContent.tsx
│   │   │   │   │   ├── AboutImage.tsx
│   │   │   │   │   └── CommitmentSection.tsx
│   │   │   │   └── commitmentsection/
│   │   │   │       └── CommitmentCard.tsx
│   │   │   ├── contact/
│   │   │   │   ├── Contact.tsx
│   │   │   │   └── contactsection/
│   │   │   │       ├── ContactForm.tsx
│   │   │   │       ├── ContactInfo.tsx
│   │   │   │       └── ContactMap.tsx
│   │   │   ├── hero/
│   │   │   │   ├── Hero.tsx
│   │   │   │   └── herosection/
│   │   │   │       ├── HeroActions.tsx
│   │   │   │       ├── HeroBackground.tsx
│   │   │   │       └── HeroContent.tsx
│   │   │   ├── services/
│   │   │   │   ├── Services.tsx
│   │   │   │   └── servicessection/
│   │   │   │       ├── SectionHeader.tsx
│   │   │   │       ├── ServiceCard.tsx
│   │   │   │       └── ServicesGrid.tsx
│   │   │   ├── statistics/
│   │   │   │   ├── Statistics.tsx
│   │   │   │   └── statisticssection/
│   │   │   │       ├── StatCard.tsx
│   │   │   │       └── StatsGrid.tsx
│   │   │   └── testimonials/
│   │   │       ├── Testimonials.tsx
│   │   │       └── testimonialssection/
│   │   │           ├── TestimonialCard.tsx
│   │   │           ├── TestimonialsCarousel.tsx
│   │   │           └── TestimonialsGrid.tsx
│   │   └── layout/
│   │       ├── footer/
│   │       │   ├── Footer.tsx
│   │       │   └── footersection/
│   │       │       ├── FooterAbout.tsx
│   │       │       ├── FooterBottom.tsx
│   │       │       ├── FooterContact.tsx
│   │       │       ├── FooterLinks.tsx
│   │       │       ├── FooterServices.tsx
│   │       │       └── FooterSocial.tsx
│   │       └── navbar/
│   │           ├── Navbar.tsx
│   │           └── navbarsection/
│   │               ├── CTAButton.tsx
│   │               ├── LanguageSelector.tsx
│   │               ├── Logo.tsx
│   │               ├── MenuButton.tsx
│   │               ├── MobileSidebar.tsx
│   │               └── NavLinks.tsx
│   ├── hooks/
│   │   ├── useCarousel.ts
│   │   └── useMobileMenu.ts
│   ├── i18n/
│   │   ├── index.ts
│   │   ├── languageStore.ts
│   │   └── languages.ts
│   ├── locales/
│   │   ├── ar/
│   │   │   ├── features/
│   │   │   │   ├── about.json
│   │   │   │   ├── contact.json
│   │   │   │   ├── hero.json
│   │   │   │   ├── services.json
│   │   │   │   ├── statistics.json
│   │   │   │   └── testimonials.json
│   │   │   └── layout/
│   │   │       ├── footer.json
│   │   │       └── navbar.json
│   │   ├── de/
│   │   ├── en/
│   │   ├── fr/
│   │   └── it/
│   ├── pages/
│   │   └── Home.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Architecture

### Component Organization

The project follows a feature-based architecture with clear separation of concerns:

**Common Components:** Reusable UI elements like loaders and utilities.

**Feature Components:** Self-contained modules for each major section (Hero, About, Services, Statistics, Testimonials, Contact). Each feature has its own directory with a main component and sub-components in a dedicated section folder.

**Layout Components:** Persistent UI elements (Navbar, Footer) with their respective sub-components organized in section folders.

### State Management

**Language State:** Managed via Zustand with localStorage persistence. Automatically loads translations on app initialization and handles RTL/LTR switching.

**UI State:** Local component state using React hooks for dropdowns, modals, and interactive elements.

### Internationalization

Custom i18n implementation supporting five languages with dynamic translation loading. Translation files are organized by feature and layout, ensuring modularity and maintainability.

**Supported Languages:**
- Arabic (ar) - Default, RTL
- English (en) - LTR
- French (fr) - LTR
- German (de) - LTR
- Italian (it) - LTR

### Styling Approach

Tailwind CSS v4 with utility-first methodology. Custom scrollbar styling and smooth transitions are defined in `index.css`. All components use inline Tailwind classes for rapid development and easy maintenance.

## Key Features

- Multilingual support with automatic language detection
- Responsive design optimized for all devices
- Smooth animations and transitions using Framer Motion
- SEO-optimized with comprehensive meta tags and structured data
- Accessible forms with proper labels and autocomplete attributes
- Interactive testimonials carousel
- Embedded Google Maps integration
- Professional contact form with validation

## Installation

```bash
# Clone repository
git clone https://github.com/MohamedFadl2344/justice.git

# Navigate to project directory
cd justice

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment

**Node Version:** 18.x or higher  
**Package Manager:** npm

## SEO Optimization

The application includes comprehensive SEO features:

- Semantic HTML structure
- Meta tags for title, description, and keywords
- Open Graph tags for social media sharing
- Twitter Card integration
- Structured data (JSON-LD) for legal services
- Geo-location tags for Cairo, Egypt
- Canonical URLs
- Author attribution

## Performance

- Code splitting for optimal bundle size
- Lazy loading for images and components
- Optimized font loading (Cairo, Tajawal)
- Minimal dependencies
- Fast page load times with Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved.

## Contact

For inquiries, please visit the live site or contact through the provided contact form.
