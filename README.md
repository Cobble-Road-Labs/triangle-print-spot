# Triangle Print Spot Website

A modern, responsive website for Triangle Print Spot, a premium printing services company serving the Vaal Triangle area in South Africa. Built with Next.js 16, React 19, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional interface with responsive layouts
- **Service Showcase**: Comprehensive display of printing services including:
  - Wide-format printing (banners, posters, signs)
  - Business-tailored printing (marketing materials, stationery)
  - Digital printing
  - T-shirt printing
- **Contact Form**: Integrated contact system with email functionality via Resend API
- **Google Reviews Integration**: Display of customer reviews via Google My Business API
- **Product Carousel**: Interactive showcase of products and services
- **SEO Optimized**: Built with Next.js App Router for optimal performance and SEO

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.0.7](https://nextjs.org/) with App Router
- **Frontend**: [React 19.2.0](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **TypeScript**: Full type safety
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email**: [Resend](https://resend.com/)
- **APIs**: Google APIs for reviews integration
- **Linting**: ESLint with Next.js config

## 📁 Project Structure

```
triangle-print-spot/
├── public/
│   ├── icons/           # Icon assets
│   └── images/          # Image assets organized by page
│       ├── about/
│       ├── contact/
│       ├── home/
│       └── services/
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── about/
│   │   ├── api/         # API routes (contact, reviews)
│   │   ├── contact/
│   │   ├── services/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/      # Reusable React components
│   │   ├── ArrowLink.tsx
│   │   ├── Button.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── GoogleRatingBadge.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductCarousel.tsx
│   │   ├── ReviewCard.tsx
│   │   └── ReviewsList.tsx
│   └── data/            # Static data and configurations
│       └── services.ts
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd triangle-print-spot
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add necessary API keys:
```env
# Resend API for contact form
RESEND_API_KEY=your_resend_api_key

# Google APIs for reviews
GOOGLE_API_KEY=your_google_api_key
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Key Components

### Pages
- **Home** (`/`): Hero section, product carousel, services overview, and customer reviews
- **About** (`/about`): Company information and story
- **Services** (`/services`): Detailed service offerings
- **Contact** (`/contact`): Contact form and business information

### API Routes
- `/api/contact` - Handle contact form submissions via Resend
- `/api/reviews` - Fetch Google reviews data

### Reusable Components
- `Button` - Primary and secondary button variants
- `ContactForm` - Form with validation and submission handling
- `GoogleRatingBadge` - Display Google ratings
- `ProductCarousel` - Interactive product showcase
- `ReviewsList` - Customer reviews display
- `Navbar` & `Footer` - Site navigation and footer

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure environment variables
4. Deploy

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more options.

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS 4 with PostCSS. Configuration can be found in [postcss.config.mjs](postcss.config.mjs).

### TypeScript
TypeScript configuration is in [tsconfig.json](tsconfig.json) with strict mode enabled.

### ESLint
Linting rules are configured in [eslint.config.mjs](eslint.config.mjs).

## 📝 License

This project is proprietary and confidential. © Cobble Road Labs

## 🤝 Client

**Triangle Print Spot**  
Vanderbijlpark, Vaal Triangle, South Africa

---

Built with ❤️ by [Cobble Road Labs](https://cobbleroad.com)
