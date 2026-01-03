# 🚀 Quick Setup Guide

## What's Been Built

A complete luxury wedding website with:

### ✅ Core Features Implemented
1. ✨ **Home Page** with:
   - Immersive hero section with letter-by-letter animation
   - Real-time countdown timer
   - Animated timeline of your love story
   
2. 🎨 **Registration Form** with:
   - Glass morphism design
   - Floating labels
   - Success checkmark animation
   
3. 📖 **Story Page** - Your love story with elegant cards
4. 🖼️ **Gallery Page** - Bento grid photo gallery
5. 🎭 **Premium Animations** throughout

### 🎨 Design System
- **Colors**: Cream background, Champagne Gold accents
- **Fonts**: Playfair Display (headings) + DM Sans (body)
- **Effects**: Glass morphism, parallax, magnetic buttons

## 🏃 Running the Project

The development server is already running at: **http://localhost:5173/**

If you need to restart:
```bash
cd wedding-site
npm run dev
```

## 🎯 Next Steps & Customization

### 1. Update Personal Information

**Couple Names** - Find and replace "Sister & Groom" with actual names in:
- `src/components/layout/Navbar.jsx`
- `src/components/layout/Footer.jsx`
- `src/components/home/Hero.jsx`
- All page titles

**Wedding Date** - Update in `src/components/home/Countdown.jsx`:
```javascript
const weddingDate = new Date('2026-01-09T00:00:00'); // Change this
```

**Timeline Events** - Edit the love story in `src/components/home/Timeline.jsx`:
```javascript
const timelineEvents = [
  { year: '2020', title: 'First Meeting', description: '...' },
  // Add your own milestones
];
```

### 2. Add Real Photos

**Hero Background** - Replace in `src/components/home/Hero.jsx`:
```javascript
backgroundImage: 'url(https://your-image-url.jpg)'
```

**Gallery** - Update images in `src/pages/Gallery.jsx`:
```javascript
const galleryImages = [
  { id: 1, url: 'your-photo-1.jpg' },
  // Add more photos
];
```

### 3. Set Up RSVP Data Collection

**Google Sheets Integration**:

1. Create a new Google Sheet
2. Set up column headers: `Timestamp, Name, Email, Phone, Guests, Dietary, Message`
3. Go to **Extensions → Apps Script**
4. Paste this code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.email,
    data.phone,
    data.guests,
    data.dietary,
    data.message
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

5. **Deploy** → New Deployment → Web App
6. Set access to "Anyone"
7. Copy the Web App URL
8. Update `src/services/api.js` with your URL
9. Update `src/pages/Register.jsx` to use the API:

```javascript
import { submitRSVP } from '../services/api';

// In handleSubmit:
const result = await submitRSVP(formData);
```

### 4. Add Social Media Links

Update in `src/components/layout/Footer.jsx`:
```javascript
const socialLinks = [
  { icon: Instagram, href: 'YOUR_INSTAGRAM_URL', label: 'Instagram' },
  { icon: Facebook, href: 'YOUR_FACEBOOK_URL', label: 'Facebook' },
  { icon: Twitter, href: 'YOUR_TWITTER_URL', label: 'Twitter' },
];
```

### 5. Update Contact Email

In `src/pages/Register.jsx`, change:
```javascript
<a href="mailto:wedding@example.com">
  wedding@example.com
</a>
```

### 6. Venue Information

Update ceremony and reception details in `src/components/home/Countdown.jsx`:
```javascript
<div>
  <h3>Ceremony</h3>
  <p>4:00 PM</p>
  <p>Your Venue Name</p>
</div>
```

## 🎨 Styling Customization

All colors are configured in `tailwind.config.js`:
```javascript
colors: {
  cream: '#FAFAF5',    // Background
  gold: '#D4AF37',     // Primary accent
  olive: '#8B8B5E',    // Secondary accent
  charcoal: '#1A1A1A', // Text color
}
```

## 📦 Building for Production

When ready to deploy:
```bash
npm run build
```

This creates a `dist/` folder with optimized files.

## 🚀 Deployment Options

1. **Vercel** (Recommended):
   - Push code to GitHub
   - Import project in Vercel
   - Auto-deploys on every push

2. **Netlify**:
   - Drag and drop `dist/` folder
   - Or connect GitHub repo

3. **GitHub Pages**:
   - Install: `npm install --save-dev gh-pages`
   - Add to package.json: `"homepage": "https://yourusername.github.io/wedding-site"`
   - Deploy: `npm run build && npx gh-pages -d dist`

## 🎭 Animation Features

All animations are built with Framer Motion:
- **Page transitions**: Automatic fade-in on route change
- **Scroll reveals**: Elements animate when scrolled into view
- **Magnetic buttons**: Buttons that follow cursor
- **Staggered text**: Letter and word animations
- **Timeline**: Scroll-linked progress line

## 🐛 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Styling not working?**
Make sure Tailwind CSS classes are in `tailwind.config.js` content paths.

**Images not loading?**
Use full URLs or place images in `public/` folder.

## 📱 Testing

Test on multiple devices:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1440px, 1920px

Use browser DevTools device emulation.

## 💡 Tips

1. **Performance**: Optimize images before uploading (use WebP format)
2. **Accessibility**: Test with keyboard navigation
3. **Browser Testing**: Test on Chrome, Safari, Firefox
4. **Mobile First**: Design looks great on all screen sizes

## 🎉 You're All Set!

Your luxury wedding website is ready! Open http://localhost:5173/ to see it in action.

Need help? All component files are well-commented and organized.

---

**Congratulations on the upcoming wedding! 💍**

