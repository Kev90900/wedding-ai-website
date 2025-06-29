# Wedding AI Website

An AI-powered wedding website generator with advanced features for couples to create personalized wedding content and vows.

## 🌟 Features

- **AI Vows Generator**: Create personalized wedding vows using advanced AI
- **Beautiful Wedding Website Templates**: Modern, responsive designs
- **Our Story Generator**: AI-powered story creation for couples
- **Interactive Components**: Engaging user interface with smooth animations
- **Mobile Responsive**: Optimized for all devices
- **SEO Optimized**: Built with Next.js for excellent performance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- OpenRouter API key for AI functionality

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kev90900/wedding-ai-website.git
cd wedding-ai-website
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Add your OpenRouter API key to `.env.local`:
```
OPENROUTER_API_KEY=your_api_key_here
```

5. Run the development server:
```bash
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Components**: Custom React components with Shadcn/ui
- **AI Integration**: OpenRouter API
- **Icons**: Lucide React
- **Build Tool**: Bun

## 📁 Project Structure

```
src/
├── app/
│   ├── api/generate-text/     # AI text generation API
│   ├── our-story/             # Our Story page
│   ├── vows-generator/        # Vows generator page
│   └── page.tsx               # Home page
├── components/
│   ├── Header.tsx             # Navigation header
│   ├── HeroBanner.tsx         # Main hero section
│   ├── CustomerStories.tsx    # Testimonials
│   ├── WhyJasper.tsx          # Features section
│   └── ...                    # Other components
└── lib/
    └── utils.ts               # Utility functions
```

## 🎨 Features Breakdown

### AI Vows Generator
- Personalized vow creation based on relationship details
- Multiple tone options (romantic, humorous, traditional)
- Customizable length and style preferences

### Wedding Website Templates
- Modern, elegant designs
- Customizable sections for story, photos, events
- RSVP functionality
- Guest information management

### Our Story Generator
- AI-powered story creation for couples
- Timeline-based narrative structure
- Photo integration capabilities

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
```

Deploy to Vercel with one click or connect your GitHub repository.

### Netlify
The project includes Netlify configuration for easy deployment.

## 📝 Environment Variables

Create a `.env.local` file with:

```
OPENROUTER_API_KEY=your_openrouter_api_key
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- AI powered by [OpenRouter](https://openrouter.ai/)
- UI components inspired by [Shadcn/ui](https://ui.shadcn.com/)

---

🤖 Generated with [Same](https://same.new)