# Ben Amado Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and TypeScript.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with Next.js 14 and React 18
- 🎯 TypeScript for type safety
- 💨 Tailwind CSS for styling
- 🔗 Integration with LinkedIn and GitHub

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation bar
│   ├── Hero.tsx        # Hero/About section
│   ├── Experience.tsx  # Experience section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects section
│   └── Contact.tsx     # Contact section
├── data/
│   └── portfolio.ts    # Portfolio data (experiences, projects, skills)
├── types/
│   └── index.ts        # TypeScript type definitions
└── ...
```

### Styling

The website uses Tailwind CSS. You can customize:
- Colors in `tailwind.config.ts`
- Global styles in `app/globals.css`
- Component-specific styles in each component file

## Build for Production

```bash
npm run build
npm start
```

## License

This project is private and proprietary.

