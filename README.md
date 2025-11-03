# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```
aicademy/
├── public/
│   ├── favicon.ico
│   └── icons/
│       ├── brain.svg
│       └── logo.png
├── src/
│   ├── app/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   └── router/
│   │       └── AppRouter.jsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Input.jsx
│   │   │   └── Select.jsx
│   │   ├── courses/
│   │   │   ├── CourseCard.jsx
│   │   │   ├── CourseGrid.jsx
│   │   │   ├── FilterBar.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── ComparisonModal.jsx
│   │   └── shared/
│   │       ├── ThemeToggle.jsx
│   │       ├── LoadingSpinner.jsx
│   │       └── EmptyState.jsx
│   ├── features/
│   │   ├── courses/
│   │   │   ├── hooks/
│   │   │   │   ├── useCourses.js
│   │   │   │   ├── useFilters.js
│   │   │   │   └── useComparison.js
│   │   │   └── utils/
│   │   │       ├── courseUtils.js
│   │   │       └── filterUtils.js
│   │   └── theme/
│   │       └── hooks/
│   │           └── useTheme.js
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── FeaturedCourses.jsx
│   │   │   └── StatsSection.jsx
│   │   ├── Courses/
│   │   │   ├── Courses.jsx
│   │   │   └── components/
│   │   │       ├── CourseFilters.jsx
│   │   │       └── CourseResults.jsx
│   │   ├── Comparison/
│   │   │   └── Comparison.jsx
│   │   ├── Suggest/
│   │   │   └── Suggest.jsx
│   │   └── 404/
│   │       └── NotFound.jsx
│   ├── data/
│   │   ├── courses.json
│   │   └── constants.js
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   ├── useDebounce.js
│   │   └── useScrollAnimation.js
│   ├── utils/
│   │   ├── formatters.js
│   │   ├── validators.js
│   │   └── animations.js
│   ├── styles/
│   │   ├── index.css
│   │   └── globals.css
│   ├── constants/
│   │   ├── routes.js
│   │   ├── filters.js
│   │   └── theme.js
│   └── assets/
│       └── images/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── index.html

```


import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import Comparison from './pages/Comparison/Comparison'
import Suggest from './pages/Suggest/Suggest'
import NotFound from './pages/NotFound/NotFound'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/compare" element={<Comparison />} />
            <Route path="/suggest" element={<Suggest />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App





```
aicademy
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ courses
│  │  │  ├─ CourseCard.jsx
│  │  │  ├─ Courses.jsx
│  │  │  └─ FilterBar.jsx
│  │  ├─ Layout
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Header.jsx
│  │  │  └─ Layout.jsx
│  │  └─ ui
│  │     └─ ThemeToggle.jsx
│  ├─ contexts
│  │  └─ ThemeContext.jsx
│  ├─ data
│  │  ├─ courses.json
│  │  └─ coursesData.js
│  ├─ hooks
│  │  ├─ useCourseFilters.js
│  │  └─ useGSAP.js
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Comparison
│  │  │  └─ Comparison.jsx
│  │  ├─ Courses
│  │  │  └─ Courses.jsx
│  │  ├─ Home
│  │  │  └─ Home.jsx
│  │  ├─ NotFound
│  │  │  └─ NotFound.jsx
│  │  └─ Suggest
│  │     └─ Suggest.jsx
│  ├─ styles
│  │  └─ index.css
│  └─ utils
│     └─ animations.js
└─ vite.config.js

```