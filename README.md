# ⚡ EL-PORTFOLIO - Futuristic Anime-Inspired Portfolio

> A cutting-edge, interactive portfolio website with advanced animations, particle effects, and modern UI/UX design.

![Portfolio Preview](https://via.placeholder.com/1200x600/02000a/f472b6?text=EL-PORTFOLIO)

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://brilliantsyach.github.io/portfolio)
[![GitHub](https://img.shields.io/badge/github-repo-blue)](https://github.com/Brilliantsyach/portfolio)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## ✨ Features

### 🎨 Design & UI
- ✅ Futuristic glassmorphism design
- ✅ Dark/Light theme toggle with smooth transitions
- ✅ Animated particle background with interactive effects
- ✅ Custom cursor with trail effect
- ✅ 3D tilt effects on cards and elements
- ✅ Smooth scroll animations and reveal effects
- ✅ Epic loader with progress indicator
- ✅ Gradient text effects and glitch animations

### ⚡ Functionality
- ✅ Fully responsive on all devices (mobile, tablet, desktop)
- ✅ Multi-language support (Indonesian & English)
- ✅ Animated skill progress bars
- ✅ Counter animations for statistics
- ✅ Auto-rotating testimonials slider
- ✅ Working contact form (Formspree integration)
- ✅ FAQ accordion with smooth transitions
- ✅ Social media integration
- ✅ Back to top button
- ✅ Optional sound effects

### 🎯 Performance
- ✅ Optimized animations (60fps)
- ✅ Lazy loading for images
- ✅ Intersection Observer API for scroll effects
- ✅ Hardware-accelerated CSS transforms
- ✅ Debounced scroll events
- ✅ Minimal JavaScript bundle

### 🎪 Easter Eggs
- ✅ Konami code activation (↑↑↓↓←→←→BA)
- ✅ Hidden logo easter egg (click 10 times)
- ✅ Console messages for curious developers

---

## 📁 Project Structure
```
Portfolio/
├── index.html                  # Main HTML file
├── README.md                   # Project documentation
├── LICENSE                     # MIT License
│
├── css/
│   ├── variables.css          # CSS custom properties & theme colors
│   ├── reset.css              # CSS reset & base styles
│   ├── components.css         # Reusable UI components
│   ├── animations.css         # Keyframe animations
│   ├── advanced.css           # Advanced features (social, language, etc.)
│   └── main.css               # Main layout & sections
│
├── js/
│   ├── particles.js           # Particle background animation
│   ├── cursor.js              # Custom cursor functionality
│   ├── cursor-trail.js        # Cursor trail effect
│   ├── theme.js               # Dark/Light theme toggle
│   ├── sound.js               # Optional sound effects
│   ├── language.js            # Multi-language switcher
│   ├── menu.js                # Navigation menu & hamburger
│   ├── scroll.js              # Scroll effects & progress bar
│   ├── animations.js          # Scroll reveal & counter animations
│   ├── tilt.js                # 3D tilt effect on cards
│   ├── testimonials.js        # Testimonial slider
│   ├── contact-form.js        # Contact form handling
│   ├── faq.js                 # FAQ accordion
│   ├── easter-eggs.js         # Hidden features & Easter eggs
│   └── loader.js              # Page loader animation
│
└── assets/
    ├── images/
    │   ├── profile.jpg        # Profile photo
    │   └── projects/          # Project screenshots
    └── cv.pdf                 # Downloadable CV/Resume
```

---

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Basic knowledge of HTML/CSS/JavaScript (for customization)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Brilliantsyach/portfolio.git
cd portfolio
```

2. **Open in browser**
```bash
# Simply open index.html in your browser
# Or use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

3. **That's it!** No build process needed. Pure HTML, CSS, and JavaScript.

---

## 🎨 Customization Guide

### 1. Change Theme Colors

Edit `css/variables.css`:
```css
:root {
  /* Dark Theme Colors */
  --bg-main: #02000a;           /* Main background */
  --bg-dark: #070014;           /* Dark background */
  --accent-main: #f472b6;       /* Primary accent (pink) */
  --accent-soft: #a5b4fc;       /* Secondary accent (purple) */
  --accent-glow: #67e8f9;       /* Tertiary accent (cyan) */
  --text-soft: #c7c7d1;         /* Muted text color */
}
```

### 2. Update Personal Information

In `index.html`, search for and replace:

- **Name**: Search for "Brilliantsyah El-Huda"
- **Email**: `brilliantsyah.webdev@gmail.com`
- **Phone**: `6285727794642`
- **Social Links**: GitHub, LinkedIn, Instagram URLs

### 3. Add/Remove Sections

Sections are clearly marked in `index.html`:
```html
<!-- ============================================= -->

<!-- ============================================= -->

  

```

To hide a section, simply add `style="display:none"` or remove the entire section block.

### 4. Modify Projects

Add new projects in the `#projects` section:
```html

  
    
      View Live →
    
  
  
    Category
    Project Title
    Project description...
    
      Tech 1
      Tech 2
    
  

```

### 5. Update Skills

Modify skill percentages in `#skills` section:
```html

  
    Skill Name
    95%
  
  
    
  

```

---

## 📧 Contact Form Setup

The contact form uses **Formspree** (free tier supports 50 submissions/month).

### Setup Instructions:

1. Go to [formspree.io](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Copy your form endpoint (e.g., `https://formspree.io/f/YOUR_ID`)
5. Update in `index.html`:
```html

```

### Alternative: EmailJS

For more customization, use [EmailJS](https://www.emailjs.com/):
```javascript
// In js/contact-form.js
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
  from_name: name,
  from_email: email,
  message: message
});
```

---

## 🌐 Deployment

### Option 1: GitHub Pages (Recommended - Free!)

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from main branch"
4. Your site will be live at: `https://yourusername.github.io/portfolio`
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Brilliantsyach/portfolio.git
git push -u origin main
```

### Option 2: Netlify (Auto-deploy)

1. Go to [netlify.com](https://www.netlify.com/)
2. Drag & drop your project folder
3. Done! Auto-deploy on every git push.

### Option 3: Vercel

1. Go to [vercel.com](https://vercel.com/)
2. Import your Git repository
3. Deploy with zero configuration

---

## 🎮 Easter Eggs Guide

### 1. Konami Code
- Type: `↑ ↑ ↓ ↓ ← → ← → B A`
- Effect: Rainbow mode activation

### 2. Logo Click
- Click the "EL-PORTFOLIO" logo 10 times
- Effect: Glitch effect + secret message

### 3. Console Messages
- Open DevTools (F12)
- See hidden messages for developers

---

## 📱 Browser Support

- ✅ Chrome 90+ (recommended)
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ IE11 (limited support, not recommended)

---

## ⚡ Performance Metrics

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Total Bundle Size**: ~500KB (including all assets)

---

## 🔧 Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom Properties, Flexbox, Grid, Animations
- **JavaScript (ES6+)** - Vanilla JS, no frameworks

### APIs & Libraries
- **Canvas API** - Particle effects
- **Intersection Observer API** - Scroll animations
- **Web Audio API** - Sound effects
- **Formspree** - Contact form handling

### Tools & Services
- **Git** - Version control
- **GitHub Pages** - Hosting
- **VS Code** - Development
- **Figma** - Design mockups

---

## 🤝 Contributing

Contributions are welcome! If you find bugs or have feature suggestions:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
MIT License

Copyright (c) 2026 Brilliantsyah El-Huda

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 💬 Contact & Support

- **Email**: brilliantsyah.webdev@gmail.com
- **WhatsApp**: +62 857-2779-4642
- **GitHub**: [@Brilliantsyach](https://github.com/Brilliantsyach)
- **LinkedIn**: [brilliantsyah-el](https://linkedin.com/in/brilliantsyah-el)
- **Instagram**: [@Bryaant_el](https://instagram.com/Bryaant_el)

---

## 🎉 Acknowledgments

- **Inspiration**: Modern portfolio trends from Dribbble & Awwwards
- **Fonts**: Google Fonts (Orbitron, Poppins)
- **Icons**: Custom SVG icons
- **Gradient Noise**: [grainy-gradients.vercel.app](https://grainy-gradients.vercel.app/)

---

## 📊 Changelog

### v1.0.0 (2026-02-14)
- ✨ Initial release
- 🎨 Futuristic anime-inspired design
- ⚡ Particle effects & custom cursor
- 🌐 Multi-language support (ID/EN)
- 📧 Working contact form
- 🎪 Easter eggs & hidden features

---

## 🚧 Roadmap

- [ ] Blog section with markdown support
- [ ] Admin dashboard for content management
- [ ] Newsletter integration
- [ ] Analytics dashboard
- [ ] PWA support
- [ ] More language options

---

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub!

[![GitHub stars](https://img.shields.io/github/stars/Brilliantsyach/portfolio?style=social)](https://github.com/Brilliantsyach/portfolio)

---

<div align="center">

**Made with ☕ & passion by [Brilliantsyah El-Huda](https://github.com/Brilliantsyach)**

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-pink)](https://brilliantsyach.github.io/portfolio)
[![Email](https://img.shields.io/badge/Email-Contact-blue)](mailto:brilliantsyah.webdev@gmail.com)

</div>