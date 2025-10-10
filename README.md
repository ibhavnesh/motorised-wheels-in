# MOTORISED WHEELS

A modern, responsive automotive website built with Next.js, featuring stunning animations and a professional dark theme.

## 🚀 Features

- **Modern Design**: Sleek automotive-themed interface with gradient animations
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Interactive Animations**: Smooth Framer Motion animations throughout
- **Authentication System**: Complete login/register flow with protected routes
- **Loading Screen**: Animated loading experience with moving car icons
- **Blog System**: Dynamic blog with post listings and individual post pages
- **Contact Forms**: Professional contact page with validation
- **Dashboard**: User dashboard with stats and activity tracking

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd motorised-wheels
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

3. **Environment Variables**
   Add these to your Vercel project settings:
   \`\`\`
   NEXT_PUBLIC_SITE_NAME=MOTORISED WHEELS
   \`\`\`

### Manual Deployment

1. **Build the project**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Start production server**
   \`\`\`bash
   npm start
   \`\`\`

## 📱 Pages

- **Home** (`/`) - Hero section with animated elements
- **About** (`/about`) - Company story and values
- **Services** (`/services`) - Service offerings
- **Blog** (`/blog`) - Blog post listings
- **Contact** (`/contact`) - Contact form and information
- **Login** (`/auth/login`) - User authentication
- **Register** (`/auth/register`) - User registration
- **Dashboard** (`/dashboard`) - Protected user area

## 🎨 Design Features

- **Color Scheme**: Professional dark theme with orange/red gradients
- **Typography**: Clean, modern font hierarchy
- **Animations**: Smooth page transitions and hover effects
- **Loading Screen**: Animated car icons with progress bar
- **Responsive**: Mobile-first design approach

## 🔧 Customization

### Colors
Update the color scheme in `app/globals.css`:
\`\`\`css
:root {
  --primary: 24 100% 58%; /* Orange */
  --secondary: 0 84% 60%; /* Red */
  /* ... other colors */
}
\`\`\`

### Animations
Modify animations in components using Framer Motion:
\`\`\`tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>
\`\`\`

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

Built with ❤️ using Next.js and modern web technologies.
\`\`\`

```json file="" isHidden
