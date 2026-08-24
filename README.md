# 🚀 Rishabh's Developer Portfolio

A modern, animated personal portfolio built with **React + Vite**, featuring a 3D interactive background, dark/light theme, smooth GSAP animations, and a fully responsive design.

🔗 **Live Site:** [rishabh.dev](https://github.com/RishGov1/Portfolio) &nbsp;|&nbsp; 📄 **Resume:** [View on Google Drive](https://drive.google.com/file/d/1t6ZpfUKw660PaglmqMOklRVNJ38R3SbJ/view?usp=sharing)

---

## ✨ Features

- **3D Interactive Background** — Three.js / React Three Fiber animated canvas in the Hero section
- **Dark / Light Theme** — Persistent theme toggle with smooth CSS variable transitions
- **GSAP Animations** — Staggered entrance reveals and scroll-triggered effects
- **Sections** — Hero · About · Skills · Projects · Experience · Education · Achievements · Resume · Contact
- **Project Modals** — Detailed architecture & metrics view for each project
- **Resume Download** — Opens the hosted PDF resume directly from the site
- **Contact Form** — With canvas-confetti celebration on submit
- **Custom Cursor** — Branded cursor overlay for desktop
- **Fully Responsive** — Mobile-first layout across all screen sizes

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS v4 |
| 3D Graphics | Three.js · @react-three/fiber · @react-three/drei |
| Animations | GSAP 3 · Framer Motion |
| Icons | Lucide React |
| Linting | Oxlint |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx           # 3D canvas + headline
│   ├── About.jsx          # Story & highlights
│   ├── Skills.jsx         # Animated skill bars
│   ├── Projects.jsx       # Filterable project grid
│   ├── ProjectModal.jsx   # Project detail modal
│   ├── Experience.jsx     # Work experience timeline
│   ├── Education.jsx      # Academic background
│   ├── Achievements.jsx   # Certifications & awards
│   ├── Resume.jsx         # Resume download + preview
│   ├── Contact.jsx        # Contact form & social links
│   ├── Navbar.jsx         # Sticky nav with theme toggle
│   ├── Footer.jsx
│   ├── CustomCursor.jsx
│   ├── ThreeCanvas.jsx    # Three.js background scene
│   └── SocialIcons.jsx
├── context/
│   └── ThemeContext.jsx   # Global dark/light theme
├── data/
│   └── portfolioData.js   # ← All content lives here
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# Clone the repo
git clone https://github.com/RishGov1/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

The site runs at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
npm run preview
```

---

## ✏️ Customization

All portfolio content is centralized in **[`src/data/portfolioData.js`](src/data/portfolioData.js)**. To update the portfolio, edit:

| Key | What it controls |
|---|---|
| `personal` | Name, title, bio, email, links, resume URL |
| `about` | Story paragraph, highlights, values |
| `skills` | Skill categories, levels, icons |
| `projects` | Project cards, tech stack, descriptions |
| `experience` | Work history, bullet points |
| `education` | Degree, institution, GPA, coursework |
| `achievements` | Certifications & awards |

---

## 📬 Contact

**Rishabh Govindaraj** — [rishabhgp@gmail.com](mailto:rishabhgp@gmail.com)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rishabh-govindaraj/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/RishGov1)

---

> Built with ❤️ by Rishabh · VIT Chennai · B.Tech CSE (AI & ML) · 2024–2028
