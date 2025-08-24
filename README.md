# AI Insights Agent - Competitor Intelligence Platform

A modern, responsive web application that triggers an AI Agent workflow to gather competitor intelligence and market insights, delivering automated email summaries to Product Managers.

## 🚀 Project Description

This application serves as a trigger interface for an AI Agent that:
- Searches the internet for competitor updates and market trends
- Analyzes competitive intelligence data using AI APIs
- Generates comprehensive email summaries with actionable insights
- Delivers reports directly to Product Managers within 3-4 minutes

## 🔄 How It Works

1. **Click the Trigger Button** - Activates the AI Agent workflow
2. **Make.com Webhook Processing** - Initiates the data collection process
3. **AI Agent Data Collection** - Searches and analyzes competitor information
4. **Email Delivery** - Receives summarized insights within 3-4 minutes

## 👥 Team Information

- **Owner**: Ganesh K Gowda
- **AI Agent Stack**: Make.com + AI APIs + Web Scraping
- **UI Stack**: React + Vite + TailwindCSS + TypeScript
- **Deployment**: Optimized for Vercel hosting

## ✨ UI Highlights

- **Gradient Hero Section** - Dynamic pink-to-purple gradients with animations
- **Interactive Loader** - Smooth animations during webhook processing
- **Success Toast Notifications** - Real-time feedback system
- **Subtle Light Pulse Animation** - Smooth glowing gradient transitions with diagonal wave movement
- **Responsive Navbar with Dropdowns** - Glass morphism design with hover-triggered dropdown menus
- **Time-based Greetings** - Personalized messages based on local time
- **Mobile-First Design** - Fully responsive across all devices

## 🎨 Design Features

- **Modern Glass Morphism** - Transparent elements with backdrop blur
- **Gradient Animations** - Smooth color transitions and hover effects
- **AI-Themed Particles** - Floating elements for futuristic ambiance
- **Pulsing Glow Effects** - Interactive button animations
- **Inter Font Family** - Clean, professional typography
- **Dark Theme** - Optimized for modern interfaces

## ⚙️ Customization

To customize the webhook endpoint:

```javascript
// In src/components/Hero.tsx, update the handleClick function:
window.open('YOUR_CUSTOM_WEBHOOK_URL', '_blank');
```

You can also customize:
- User name in the greeting
- Email delivery timing
- Color scheme in `src/index.css`
- Button text and animations
- Background effects and particles
- **Dropdown Menu Items** in `src/components/Navbar.tsx` - Customize Account and Settings menu options

## 🚀 Quick Deployment

Deploy instantly with Vercel:

1. Connect your GitHub repository
2. Deploy with one click
3. Your AI Agent trigger is live!

```bash
# For local development
npm install
npm run dev
```

## 🔧 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS + Custom CSS
- **Build Tool**: Vite
- **UI Components**: Radix UI + Custom Components
- **Icons**: Lucide React
- **Notifications**: Sonner Toast
- **Backend**: Make.com Webhook Integration

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

---

*Built with ❤️ for modern Product Management workflows*