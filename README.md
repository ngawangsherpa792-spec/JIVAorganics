# Pure Jiva - Cow Ghee Journey Website Clone

## Overview
A pixel-perfect clone of the Pure Jiva website showcasing the journey of grass-fed cow ghee from farm to delivery.

## Features Implemented

### 1. Hero Section
- Jiva Organics logo with custom SVG leaf design
- "Your Cow Ghee's Journey" main heading
- Product card featuring:
  - "GRASS FED COW GHEE" with bold typography
  - Batch number: JO-GH-26518-08
  - Volume options: 1 Ltre, 500ml, 300ml
  - "11th Batch" badge
  - Product image

### 2. Journey Timeline
The website tells the story of ghee production through a vertical timeline with alternating left-right layouts:

1. **11th Batch** - Naturally grass & plant-fed cows
2. **Cow Milk Collection** - May 3-8, 2026 in Ranitar Chakrumba, Nepal
3. **Nauni (Raw Butter) Preparation** - Traditional butter making process
4. **Processing into Pure Cow Ghee** - Features the user's custom bottle image with yellow background
5. **Packaging** - May 19, 2026
6. **Freshly delivered to you!**

### 3. Footer Section
- Social media call-to-action card
- Social media icons (Instagram, Facebook, Email) with hover effects
- Footer links (Terms & Support, Privacy Policy)
- Copyright notice

## Design Elements

### Color Palette
- **Background**: Sage green (#C9D4AA)
- **Card backgrounds**: Cream/beige (#F5F3E8, #E8EBD8)
- **Primary text**: Dark olive (#5C6247)
- **Accent**: Golden yellow (#D4A259)
- **Social icons**: Dark olive (#5C6247) and golden (#D4A259)

### Typography
- Large, bold headings with excellent hierarchy
- Clean sans-serif body text
- Proper spacing and line height for readability

### Interactive Elements
- Smooth scroll behavior
- Hover effects on all social icons and links
- Smooth transitions (300ms ease)
- Drop shadows on images

## Custom Image Integration
✅ Successfully integrated user's provided bottle image in the "Processing into Pure Cow Ghee" section
- Image location: `/app/frontend/public/assets/ghee-bottle.jpg`
- The yellow background of the bottle image blends beautifully with the sage green page background

## Components Structure
```
src/
├── components/
│   ├── HeroSection.jsx      - Logo, title, and main product card
│   ├── JourneySection.jsx   - First three journey steps
│   ├── ProcessingSection.jsx - Processing, packaging, and bottle image
│   └── FooterSection.jsx    - Social CTA and footer links
├── App.js                   - Main app component
├── App.css                  - Global styles and animations
└── index.css               - Tailwind and base styles
```

## Technologies Used
- React 19.0.0
- Tailwind CSS
- Lucide React Icons
- ShadCN UI components

## Responsive Design
The website is fully responsive with:
- Mobile-first approach
- Grid layouts that adapt to screen size
- Proper image scaling
- Touch-friendly interactive elements

## Status
✅ Frontend Complete - Pixel-perfect clone with all design elements matching the original
✅ Custom bottle image successfully integrated
✅ All interactive elements working (hover effects, smooth scrolling)
✅ No backend required - This is a frontend-only showcase website
