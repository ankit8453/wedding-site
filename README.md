# 💍 Luxury Wedding Website

A stunning, Awwwards-level modern wedding website built with React, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Premium Animations**: Smooth scroll reveals, staggered text animations, parallax effects
- **Modern Design**: Glassmorphism, bento grids, and luxury aesthetic
- **Responsive**: Fully responsive design for all devices
- **Interactive Components**: Magnetic buttons, animated countdown, timeline
- **Page Transitions**: Smooth page-to-page animations
- **RSVP Form**: Beautiful glass-effect registration form with success animation

## 🎨 Design System

### Color Palette
- **Background**: Cream (`#FAFAF5`)
- **Accents**: Champagne Gold (`#D4AF37`), Muted Olive (`#8B8B5E`)
- **Text**: Dark Charcoal (`#1A1A1A`)

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: DM Sans (Sans-serif)

## 🚀 Getting Started

### Prerequisites
- Node.js (v20.12.2 or later)
- npm (v9.8.1 or later)

### Installation

1. Navigate to the project directory:
```bash
cd wedding-site
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
wedding-site/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── PageTransition.jsx
│   │   │   ├── MagneticButton.jsx
│   │   │   ├── GlassCard.jsx
│   │   │   ├── ParallaxSection.jsx
│   │   │   └── AnimatedText.jsx
│   │   ├── layout/          # Layout components
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   └── home/            # Home page sections
│   │       ├── Hero.jsx
│   │       ├── Countdown.jsx
│   │       └── Timeline.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── Story.jsx
│   │   ├── Gallery.jsx
│   │   └── Register.jsx
│   ├── services/            # API services
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎯 Key Components

### Hero Section
- Full-screen immersive layout
- Letter-by-letter title animation
- Ken Burns effect background
- Scroll indicator

### Countdown Timer
- Real-time countdown to wedding date
- Elegant glass cards
- Smooth number transitions
- Event details (ceremony & reception)

### Timeline
- Vertical timeline with scroll animations
- Story milestones with icons
- Animated progress line
- Alternating left/right layout

### Registration Form
- Floating labels
- Glass morphism effect
- Submit button with success animation
- Form validation

## 🔧 Customization

### Update Wedding Date
Edit the date in `src/components/home/Countdown.jsx`:
```javascript
const weddingDate = new Date('2026-01-09T00:00:00');
```

### Update Couple Names
Replace "Sister & Groom" throughout the codebase with your names.

### Update Images
Replace the Unsplash URLs in `Hero.jsx` and `Gallery.jsx` with your own images.

### Google Sheets Integration
Follow the instructions in `src/services/api.js` to set up RSVP data collection.

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Animation Features

- **Page Transitions**: Fade and slide animations between pages
- **Scroll Reveals**: Elements animate as they enter viewport
- **Staggered Animations**: Text and elements appear in sequence
- **Magnetic Buttons**: Buttons that follow cursor movement
- **Parallax Effects**: Depth and movement based on scroll
- **Ken Burns Effect**: Slow zoom on hero background
- **Success Animation**: Checkmark animation on form submission

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1440px+)

## 🌟 Performance Optimizations

- Lazy loading images
- Optimized animations with Framer Motion
- Efficient re-renders with React best practices
- Tailwind CSS purging for minimal bundle size

## 📄 License

This project is created for personal use.

## 💝 Made with Love

Created with love for Sister's wedding on January 9th, 2026.

---

**Built with** ❤️ **using React, Tailwind CSS, and Framer Motion**
