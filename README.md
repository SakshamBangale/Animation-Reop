
# 🚗 AUTO X - Futuristic GSAP Car Landing Page

A modern animated car showcase website built with **HTML, CSS, JavaScript, and GSAP**. This project features smooth animations, interactive effects, and a futuristic design inspired by premium automotive brands.

![Preview](preview.png)





## ✨ Features

### 🎬 GSAP Animations
- Hero section entrance animation
- Smooth timeline-based transitions
- Floating car effect
- Pulsing glow effects
- Infinite wheel rotation
- Animated road mov
ement

### 🌌 Interactive Effects
- Mouse parallax movement
- Dynamic star background
- Magnetic hover buttons
- Glassmorphism navigation bar
- Responsive layout

### 🚘 Car Showcase
- Animated sports car display
- Headlight glow effect
- Motion-inspired design
- Futuristic UI styling

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- GSAP 3

---

## 📂 Project Structure

```text
AUTO-X/
│
├── index.html
├── README.md
├── preview.png
│
└── assets/
    ├── images/
    └── icons/
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SakshamBangale
```

### 2. Open Project

```bash
cd auto-x
```

### 3. Run Website

Simply open:

```text
index.html
```


in your browser.

Or use VS Code Live Server:

```bash
Right Click → Open with Live Server
```

---

## 📦 GSAP Installation

### CDN

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
```

### NPM

```bash
npm install gsap
```

---

## 🎨 Main Animations

### Hero Intro

```javascript
gsap.from(".title", {
  y: 150,
  opacity: 0,
  duration: 1.2
});
```

### Floating Car

```javascript
gsap.to(".car", {
  y: -15,
  repeat: -1,
  yoyo: true,
  duration: 2
});
```

### Wheel Rotation

```javascript
gsap.to(".wheel", {
  rotation: 360,
  repeat: -1,
  ease: "none"
});
```

### Road Movement

```javascript
gsap.to(".road", {
  x: -500,
  repeat: -1,
  ease: "none"
});
```

---

## 📱 Responsive Design

The website automatically adapts to:

- Desktop
- Laptop
- Tablet
- Mobile Devices

---

## 🔮 Future Improvements

- Three.js 3D Car Model
- GSAP ScrollTrigger Sections
- Car Color Configurator
- 360° Vehicle Viewer
- Dark / Light Theme Toggle
- Performance Dashboard
- Video Background
- Loading Screen Animation
- Sound Effects

---

## 📸 Screenshots

Add your screenshots inside:

```text
/assets/screenshots/
```

Example:

```markdown
![Homepage](assets/screenshots/homepage.png)
```

---

## ⚡ Performance Tips

For production:

- Compress images
- Use WebP format
- Minify CSS & JS
- Lazy-load assets
- Enable browser caching

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the project
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Add new feature"
```

4. Push branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Your Name**

GitHub: https://github.com/SakshamBangale

---

### ⭐ If you like this project, consider giving it a star on GitHub!
