# Matt O'Donnell - Personal Website

A minimal, dynamic personal website that tells a cohesive story about my professional journey as an AI-first HR leader who builds technology.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Features

- **Warm Earth Tone Design System**: Custom color palette with terracotta accents and sage green highlights
- **Smooth Animations**: Scroll-triggered animations and micro-interactions using Framer Motion
- **Mobile-First**: Fully responsive design that works beautifully on all devices
- **SEO Optimized**: Comprehensive metadata, Open Graph tags, and semantic HTML
- **Fast Performance**: Static generation, optimized images, and minimal JavaScript

## Site Structure

1. **Hero**: Compelling intro with key stats (15+ years HR, 15k+ lines of code, 25 AI skills)
2. **Consulting (FoundryHR)**: Value proposition for early-stage startup consulting
3. **HR Command Center**: Showcase of the AI-powered HRBP platform I built
4. **Experience**: Timeline of HR leadership roles at technical companies
5. **Creative**: Subtle section for music and film projects
6. **Contact**: Direct contact information and CTA

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/mattsite.git

# Navigate to project directory
cd mattsite

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Click "Deploy"

### Environment Variables

No environment variables are required for the basic site.

### Custom Domain

In Vercel:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain (e.g., mattodonnell.com)
4. Update DNS records as instructed

## Customization

### Colors

The color system is defined in `src/app/globals.css`:

- **Stone**: Primary neutral palette (backgrounds, text)
- **Warm**: Terracotta/rust accent colors
- **Sage**: Green secondary accent

### Content

All content is co-located with components in `src/components/`:

- `Hero.tsx` - Main headline and stats
- `Consulting.tsx` - FoundryHR services
- `Project.tsx` - HR Command Center showcase
- `Experience.tsx` - Work history
- `Creative.tsx` - Music and film links
- `Contact.tsx` - Contact information

### Metadata

Update SEO metadata in `src/app/layout.tsx`:

- Title and description
- Open Graph images
- Twitter cards
- Keywords

## Project Structure

```
mattsite/
├── src/
│   ├── app/
│   │   ├── globals.css      # Design system and global styles
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Main page component
│   └── components/
│       ├── Navigation.tsx   # Fixed header with mobile menu
│       ├── Hero.tsx         # Hero section
│       ├── Consulting.tsx   # FoundryHR section
│       ├── Project.tsx      # HR Command Center showcase
│       ├── Experience.tsx   # Work experience timeline
│       ├── Creative.tsx     # Music and film projects
│       ├── Contact.tsx      # Contact section
│       └── Footer.tsx       # Site footer
├── public/                  # Static assets (add og-image.png here)
├── package.json
└── README.md
```

## Future Enhancements

Consider adding:

1. **Blog Section**: Share insights about AI in HR, technical recruiting, or startup scaling
2. **Case Studies**: Detailed write-ups of specific projects or challenges
3. **Testimonials**: Quotes from founders or colleagues
4. **Analytics**: Add Vercel Analytics or Plausible for privacy-friendly tracking
5. **Contact Form**: Integrate with Formspree or similar for direct inquiries
6. **Dark Mode**: Toggle between light and dark themes
7. **OG Image Generation**: Dynamic Open Graph images with @vercel/og
8. **Resume PDF**: Downloadable resume link

## Performance

The site is optimized for performance:

- Static generation at build time
- Minimal client-side JavaScript
- Optimized fonts with `next/font`
- CSS-first Tailwind configuration
- Lazy-loaded animations with Framer Motion

## License

MIT

---

Built with Next.js, TypeScript, and Tailwind CSS.
