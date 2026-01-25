# 🎵 Nawa Xolot - Official Website

<p align="center">
  <img src="img/logo.png" alt="Nawa Xolot Logo" width="200">
</p>

<p align="center">
  <strong>Electronic Music Collective | Techno • Trance • Synthwave</strong>
</p>

<p align="center">
  <a href="https://nawaxolot.com">🌐 Live Site</a> •
  <a href="#-getting-started">🚀 Getting Started</a> •
  <a href="#-contributing">🤝 Contributing</a> •
  <a href="#-contact">📬 Contact</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white" alt="Bootstrap 5">
  <img src="https://img.shields.io/badge/jQuery-0769AD?logo=jquery&logoColor=white" alt="jQuery">
</p>

---

## 📖 About The Project

**Nawa Xolot** is an electronic music project born from the fusion of primal rhythm and celestial melody. Rooted in the profound cosmology of the Nahuatl people, our name is the plural of Axolotl — the sacred amphibian guided by the god Xolotl.

This repository contains the official website featuring:
- 🎧 Custom music player with streaming capabilities
- 📸 Photo & video galleries with carousels
- 📅 Tour dates and event listings
- 👥 Team member profiles
- 📧 Booking information
- 🌙 Cyberpunk/synthwave aesthetic with neon visuals

---

## 🖼️ Screenshots

<p align="center">
  <img src="docs/screenshot-hero.png" alt="Hero Section" width="45%">
  <img src="docs/screenshot-player.png" alt="Music Player" width="45%">
</p>

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure |
| **CSS3** | Custom styling with CSS variables |
| **JavaScript (ES6+)** | Interactivity and dynamic content |
| **Bootstrap 5.3** | Responsive grid and components |
| **jQuery 3.7** | DOM manipulation and animations |
| **Font Awesome 6** | Icons |
| **Google Fonts** | Typography (Orbitron, Rajdhani) |
| **YouTube IFrame API** | Video embedding and control |

---

## 📁 Project Structure

```
nawaxolot-website/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Custom styles
├── js/
│   └── script.js           # Main JavaScript file
├── img/
│   ├── logo.png            # Nawa Xolot logo
│   ├── default-artwork.png # Default album artwork
│   ├── fav/                # Favicon files
│   │   ├── favicon.ico
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   └── apple-touch-icon.png
│   ├── photos/             # Gallery photos
│   └── team/               # Team member photos
├── audio/                  # Music files (if self-hosted)
├── docs/                   # Documentation assets
│   └── screenshots/
├── site.webmanifest        # PWA manifest
├── robots.txt              # Search engine directives
├── sitemap.xml             # XML sitemap
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local development server (optional but recommended)
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nawaxolot-website.git
   cd nawaxolot-website
   ```

2. **Open with a local server**

   Using Python:
   ```bash
   # Python 3
   python -m http.server 8000
   ```

   Using Node.js (http-server):
   ```bash
   npx http-server -p 8000
   ```

   Using VS Code:
    - Install "Live Server" extension
    - Right-click `index.html` → "Open with Live Server"

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Quick Start (No Server)

You can also simply open `index.html` directly in your browser, though some features (like fetching local JSON files) may not work due to CORS restrictions.

---

## 🎨 Design System

### Color Palette

| Variable | Color | Hex Code | Usage |
|----------|-------|----------|-------|
| `--neon-pink` | 🩷 | `#ff00ff` | Primary accent, highlights |
| `--neon-cyan` | 🩵 | `#00ffff` | Secondary accent, links |
| `--neon-purple` | 💜 | `#bf00ff` | Tertiary accent |
| `--bg-dark` | ⬛ | `#0a041a` | Primary background |
| `--bg-card` | 🟫 | `#1a142a` | Card backgrounds |
| `--text-primary` | ⬜ | `#ffffff` | Main text |
| `--text-muted` | 🩶 | `#a0a0c0` | Secondary text |

### Typography

| Font | Usage |
|------|-------|
| **Orbitron** | Headings, logo, futuristic elements |
| **Rajdhani** | Body text, paragraphs |
| **Font Awesome** | Icons throughout the site |

### Visual Effects

- **Scanline overlay**: CRT monitor effect
- **Neon glow**: Box shadows and text shadows
- **Loading animation**: Logo pulse animation
- **Smooth scrolling**: CSS `scroll-behavior: smooth`

---

## 📄 Page Sections

| Section ID | Description |
|------------|-------------|
| `#nawa-section` | About the project, philosophy, and sonic architecture |
| `#photos-videos-section` | Photo gallery carousel + YouTube video carousel |
| `#news-tour-section` | Latest news and upcoming tour dates |
| `#team-section` | DJ team member profiles with mini carousels |
| `#booking-section` | Booking contact information |
| `#music-player` | Fixed footer music player |

---

## 🎵 Music Player

The custom music player includes:

### Features
- ▶️ Play/Pause toggle
- ⏮️ Previous / ⏭️ Next track
- 📊 Progress bar with seek functionality
- 🖼️ Album artwork display
- 🔲 Expandable large artwork overlay
- 📝 Track title display

### Adding New Tracks

In `js/script.js`, locate the playlist array and add tracks:

```javascript
const playlist = [
    {
        title: "Track Name",
        src: "audio/track-name.mp3",
        artwork: "img/artwork/track-name.jpg"
    },
    // Add more tracks...
];
```

---

## 📸 Photo & Video Galleries

### Adding Photos

Photos are loaded dynamically. Add images to the `img/photos/` directory and update the JavaScript configuration:

```javascript
const photos = [
    { src: "img/photos/photo1.jpg", alt: "Description of photo 1" },
    { src: "img/photos/photo2.jpg", alt: "Description of photo 2" },
    // Add more photos...
];
```

### Adding Videos

Videos use YouTube embeds. Add YouTube video IDs to the configuration:

```javascript
const videos = [
    { id: "YOUTUBE_VIDEO_ID_1", title: "Video Title 1" },
    { id: "YOUTUBE_VIDEO_ID_2", title: "Video Title 2" },
    // Add more videos...
];
```

---

## 📅 Tour Dates

To add or update tour dates, edit the HTML in `#news-tour-section`:

```html
<li class="tour-item">
    <div class="tour-date">
        <span class="month">MON</span>
        <span class="day">00</span>
        <small>2025</small>
    </div>
    <div class="tour-venue">
        <h4>Venue Name</h4>
        <p>City, State, Country</p>
    </div>
    <div class="tour-links">
        <a href="MAP_URL" aria-label="View location on map" title="View Map">
            <i class="fas fa-location-dot"></i>
        </a>
        <a href="TICKET_URL" aria-label="Get tickets" title="Get Tickets">
            <i class="fas fa-ticket"></i>
        </a>
    </div>
</li>
```

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/your-username/nawaxolot-website.git
   cd nawaxolot-website
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **Make Your Changes**
    - Follow the existing code style
    - Test your changes locally
    - Update documentation if needed

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

   **Commit Message Convention:**
   | Prefix | Usage |
   |--------|-------|
   | `feat:` | New feature |
   | `fix:` | Bug fix |
   | `docs:` | Documentation changes |
   | `style:` | Code style (formatting, no logic change) |
   | `refactor:` | Code refactoring |
   | `perf:` | Performance improvement |
   | `test:` | Adding tests |
   | `chore:` | Maintenance tasks |

6. **Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**
    - Go to the original repository
    - Click "New Pull Request"
    - Select your fork and branch
    - Describe your changes

### Code Style Guidelines

- Use **2 spaces** for indentation
- Use **camelCase** for JavaScript variables and functions
- Use **kebab-case** for CSS classes and IDs
- Add comments for complex logic
- Keep lines under **100 characters** when possible

### Issues

Found a bug or have a feature request?

1. Check if an issue already exists
2. If not, [create a new issue](https://github.com/your-username/nawaxolot-website/issues/new)
3. Use descriptive titles and provide details

---

## 🧪 Testing Checklist

Before submitting a PR, please verify:

- [ ] Site loads correctly in Chrome, Firefox, Safari, Edge
- [ ] Mobile responsiveness works (test at 320px, 768px, 1024px)
- [ ] Music player functions correctly
- [ ] All links work (no 404s)
- [ ] Images have alt text
- [ ] No console errors
- [ ] Lighthouse score > 80 for Performance, Accessibility, SEO

---

## 📦 Deployment

### FTP Deployment

```bash
# Using Cyberduck CLI (duck)
duck --upload ftps://user@ftp.server.com/public_html/ ./*
```

### GitHub Pages

1. Go to repository Settings → Pages
2. Select branch: `main`, folder: `/ (root)`
3. Save and wait for deployment

### Netlify

1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: `/`

---

## 🔧 Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome 90+ | ✅ |
| Firefox 88+ | ✅ |
| Safari 14+ | ✅ |
| Edge 90+ | ✅ |
| IE 11 | ❌ |

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

```
MIT License

Copyright (c) 2025 Nawa Xolot

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 📬 Contact

**Nawa Xolot**

- 🌐 Website: [nawaxolot.com](https://nawaxolot.com)
- 📧 Bookings: [bookings@nawaxolot.com](mailto:bookings@nawaxolot.com)
- 📺 YouTube: [@nawaxolot](https://youtube.com/@nawaxolot)
- 📸 Instagram: [@nawaxolot](https://instagram.com/nawaxolot)
- 🎵 SoundCloud: [soundcloud.com/nawaxolot](https://soundcloud.com/nawaxolot)

---

## 🙏 Acknowledgments

- [Bootstrap](https://getbootstrap.com/) - Responsive framework
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography
- [jQuery](https://jquery.com/) - JavaScript library
- The Nahuatl culture for the inspiration and mythology

---

<p align="center">
  <strong>Let the Nawa Xolot guide you. Journey with us beyond the veil of the ordinary.</strong>
</p>

<p align="center">
  Made with 💜 and 🎵 in Michigan, USA
</p>

<p align="center">
  <a href="#-nawa-xolot---official-website">⬆️ Back to Top</a>
</p>