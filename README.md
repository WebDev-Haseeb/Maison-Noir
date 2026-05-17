# Maison Noir

A premium grooming atelier website for the modern South Asian gentleman. Built with React, TanStack Start, and Tailwind CSS.

## About

Maison Noir is a private grooming atelier with locations in Gulberg, Lahore and DHA Phase 6, Karachi. This website showcases the brand's services, artisans, and booking experience.

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (React + Vite)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui + custom components
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond, Instrument Sans, JetBrains Mono

## Project Structure

```
├── public/              # Static assets (favicon)
├── src/
│   ├── assets/         # Images and media
│   ├── components/
│   │   ├── site/       # Layout components (Nav, Footer, etc.)
│   │   └── ui/         # UI components (AppleSelect, etc.)
│   ├── lib/            # Data and utilities
│   ├── routes/         # Page components
│   └── styles.css      # Global styles
├── vercel.json         # Vercel deployment config
└── vite.config.ts      # Vite configuration
```

## Development

```bash
# Install dependencies
npm install

# Start dev server (port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com). Connect your repository and deploy with zero configuration.

## Features

- Responsive design optimized for all devices
- Custom Apple-style dropdown component
- Custom scrollbar styling
- Smooth scroll animations (Reveal component)
- WhatsApp integration for bookings
- SEO-optimized meta tags

## License

Private — All rights reserved.
