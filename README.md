# Mike Khor - Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Material-UI, featuring custom animations and a clean, professional design.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Material-UI
- **Custom Animations**: Canvas-based dot grid animation with ripple effects
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Type Safety**: Full TypeScript implementation with strict configuration
- **Performance Optimized**: Memoized components and efficient rendering
- **Accessibility**: ARIA-compliant components and keyboard navigation

## 🛠 Tech Stack

### Frontend

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with strict configuration
- **Material-UI v5** - Component library with custom theme
- **React Router v6** - Client-side routing

### Styling & Animation

- **CSS-in-JS** - Styled components with Material-UI's styling system
- **Canvas API** - Custom dot grid animation for performance
- **CSS Animations** - Smooth transitions and typewriter effects

### Development Tools

- **ESLint** - Code linting with TypeScript rules
- **Prettier** - Code formatting
- **GitHub Pages** - Automated deployment

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AnimatedDotGrid.tsx
│   ├── Navigation.tsx
│   └── Footer.tsx
├── pages/              # Page components
│   ├── LandingPage.tsx
│   ├── MLBlog.tsx
│   └── ACappellaBlog.tsx
├── theme/              # Material-UI theme configuration
│   └── theme.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── constants/          # Configuration constants
│   └── animations.ts
├── utils/              # Utility functions
│   └── blogUtils.ts
└── App.tsx            # Main application component
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/mikhail-kaur/mikhail-kaur.github.io.git
cd mikhail-kaur.github.io
```

1. Install dependencies

```bash
npm install
```

1. Start the development server

```bash
npm start
```

1. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Key Features

### Custom Canvas Animation

- High-performance dot grid with ripple effects
- Memory-optimized rendering (reduced from 2GB+ to ~20MB)
- Responsive to photo position and screen size

### TypeScript Integration

- Strict type checking enabled
- Custom type definitions for all components
- Enhanced developer experience with IntelliSense

### Responsive Design

- Mobile-first approach
- Breakpoint-based styling
- Touch-friendly navigation

### Performance Optimizations

- React.memo for expensive components
- useCallback and useMemo where appropriate
- Lazy loading for route components

## 🌐 Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions:

- **Production URL**: [mikekhor.com](https://mikekhor.com)
- **GitHub Pages**: [mikhail-kaur.github.io](https://mikhail-kaur.github.io)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contact

- **Website**: [mikekhor.com](https://mikekhor.com)
- **LinkedIn**: [linkedin.com/in/mikekhor](https://linkedin.com/in/mikekhor)
- **GitHub**: [github.com/mikhail-kaur](https://github.com/mikhail-kaur)

---

Built with ❤️ by Mike Khor
