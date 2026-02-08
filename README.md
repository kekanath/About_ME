# Karthik Ekanthan - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- ✨ Modern, portfolio-grade UI design
- 🌓 Dark/Light mode toggle with system preference detection
- 📱 Fully responsive mobile-first design
- ⚡ Fast performance with Vite
- 🎨 Beautiful gradient animations and transitions
- 🎯 SEO optimized
- 📦 Ready for GitHub Pages deployment

## 🛠️ Technologies

- **React 18.2** - UI library
- **Vite 5** - Build tool
- **Tailwind CSS 3.4** - Styling
- **React Icons** - Icon library
- **GitHub Pages** - Hosting

## 📋 Prerequisites

Make sure you have installed:
- Node.js (v18 or higher)
- npm or yarn

## 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/kekanath/My_personal_WEBUI.git
cd My_personal_WEBUI
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🌐 Preview Production Build

```bash
npm run preview
```

## 🚀 GitHub Pages Deployment

### Method 1: Using gh-pages (Automated)

1. **Update repository name in vite.config.js**

Make sure the `base` path matches your repository name:
```javascript
base: '/My_personal_WEBUI/',
```

2. **Deploy**
```bash
npm run deploy
```

This will:
- Build the project
- Push the `dist` folder to the `gh-pages` branch
- Your site will be live at: `https://kekanath.github.io/My_personal_WEBUI/`

### Method 2: Manual Deployment

1. **Build the project**
```bash
npm run build
```

2. **Push to gh-pages branch**
```bash
git subtree push --prefix dist origin gh-pages
```

3. **Enable GitHub Pages**
   - Go to your repository Settings
   - Navigate to Pages section
   - Select `gh-pages` branch as source
   - Click Save

## 📁 Project Structure

```
My_personal_WEBUI/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with dark mode toggle
│   │   ├── Hero.jsx            # Hero section with intro
│   │   ├── About.jsx           # About section
│   │   ├── Projects.jsx        # Featured projects
│   │   ├── Gallery.jsx         # Image gallery
│   │   ├── Blog.jsx            # Blog posts
│   │   ├── Skills.jsx          # Skills & tools
│   │   ├── Contact.jsx         # Contact information
│   │   └── Footer.jsx          # Footer section
│   ├── styles/
│   │   └── global.css          # Global styles & Tailwind
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Entry point
├── public/                     # Static assets
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies
```

## 🎨 Customization

### Update Personal Information

Edit the component files in `src/components/`:
- **Hero.jsx** - Name, title, profile image
- **About.jsx** - Biography and highlights
- **Projects.jsx** - Project cards
- **Contact.jsx** - Contact details and social links

### Change Colors

Update `tailwind.config.js`:
```javascript
colors: {
  primary: {
    light: '#3b82f6',
    DEFAULT: '#2563eb',
    dark: '#1d4ed8',
  },
  // ... customize more colors
}
```

### Modify Theme

Edit `src/styles/global.css` for global styles and custom classes.

## 🌓 Dark Mode

Dark mode is automatically detected based on system preferences and can be toggled manually. The preference is saved in localStorage.

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 768px
- Desktop: 1024px
- Large: 1280px

## 🔍 SEO

Update meta tags in `index.html`:
```html
<meta name="description" content="Your description" />
<title>Your Name | Portfolio</title>
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Karthik Ekanthan**
- GitHub: [@kekanath](https://github.com/kekanath)
- LinkedIn: [Karthik Ekanthan](https://www.linkedin.com/in/karthik-e-7915304b/)
- Twitter: [@Sold3rMystic](https://x.com/Sold3rMystic)
- Email: smilekarthikreddy@gmail.com

## 🙏 Acknowledgments

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Images from [Pixabay](https://pixabay.com/) and personal repository
- Built with [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ using React & Tailwind CSS
