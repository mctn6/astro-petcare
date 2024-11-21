# PetCare Landing Page

A modern, responsive landing page for a professional pet care service built with Astro and TailwindCSS. Features smooth animations, responsive design, and a clean user interface.

![PetCare Landing Page](preview.png)

## 🚀 Features

- Responsive design that works on all devices
- Smooth scroll animations using AOS
- Modern UI with Tailwind CSS
- Contact form for customer inquiries
- Service showcase section
- Customer testimonials
- Fast performance with Astro

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll library

## 🏗️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/petcare-landing.git
```

2. Navigate to the project directory:
```bash
cd petcare-landing
```

3. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Building for Production

To create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Testimonials.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## 🎨 Customization

### Colors
The primary color scheme can be modified in the Tailwind configuration file (`tailwind.config.mjs`). The current theme uses blue as the primary color.

### Content
Update the content in the following files:
- `src/components/Services.astro` - Modify service offerings
- `src/components/Testimonials.astro` - Update customer testimonials
- `src/components/Footer.astro` - Change contact information and social links
