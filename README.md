# NexusCart - AI-Powered Shopping Assistant

## Project Overview
NexusCart is an AI-powered shopping recommendation platform that helps users find products in the Nigerian market. Users can describe what they're looking for, and the AI provides detailed recommendations with direct links to major e-commerce stores.

## Live Demo
- **Repository**: https://github.com/Edikan19/NexusCart
- **Tech Stack**: React + Vite, Tailwind CSS, Google Gemini AI

# Getting Started (For Designer)
# Prerequisites
- Node.js (v18 or higher)
- Git
- A code editor (VS Code recommended)
- Google Gemini API Key (free from https://aistudio.google.com/app/apikey)

# Installation Steps
1. **Clone the repository**
   ```bash
   git clone https://github.com/Edikan19/nexuscart.git
   cd nexuscart
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Create environment file**
   - Create a file named `.env` in the root directory
   - Add your API key:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
4. **Start the development server**
   ```bash
   npm run dev
   ```  
5. **Open in browser**
   - Visit: http://localhost:5173

# Current Design System
# Colors
- **Primary Purple**: `#9333EA` (purple-600)
- **Primary Blue**: `#2563EB` (blue-600)
- **Accent Pink**: `#EC4899` (pink-500)
- **Background**: Gradient from purple-50 to blue-50
- **Text**: Gray-700, Gray-800, Gray-900
# Typography
- **Headings**: Font-bold, various sizes
- **Body**: Font-normal, text-sm to text-lg
- **Font Family**: System default (can be customized)
# Components
1. **Login Page** (`App.jsx` lines 60-90)
2. **Header** (`App.jsx` lines 94-110)
3. **Chat Interface** (`App.jsx` lines 112-180)
4. **Message Bubbles** (User & AI)
5. **Product Cards** (with store links)

## Project Structure
nexuscart/
├── src/
│   ├── App.jsx              # Main component (all UI is here)
│   ├── index.css            # Global styles & animations
│   ├── main.jsx             # Entry point
│   └── utils/
│       ├── aiService.js     # Google Gemini integration
│       └── productSearch.js # Product extraction & store links
├── public/                  # Static assets (add images here)
├── .env                     # API keys (DO NOT COMMIT)
├── package.json             # Dependencies
└── README.md                # This file

# Design Tasks & Priorities
# High Priority (Must-Have)
1. **Login Page Redesign**
   - Make it more welcoming and brand-focused
   - Consider adding illustrations or product images
   - Improve mobile responsiveness
2. **Chat Interface Enhancement**
   - Better message bubble design
   - Improved readability for long AI responses
   - Better distinction between user and AI messages
3. **Product Card Styling**
   - Make store link buttons more attractive
   - Add hover effects and micro-interactions
   - Consider adding icons for each store
4. **Mobile Responsiveness**
   - Ensure all components work perfectly on mobile
   - Test on different screen sizes
   - Optimize chat interface for touch
### Medium Priority (Nice-to-Have)
5. **Loading States**
   - Better "Thinking..." animation when AI is processing
   - Skeleton loaders for messages
   - Progress indicators
6. **Empty States**
   - Improve the initial empty chat screen
   - Add engaging illustrations or graphics
7. **Typography & Spacing**
   - Refine font sizes and line heights
   - Improve spacing between elements
   - Consider custom font families
# Low Priority (Future Enhancements)
8. **Dark Mode**
9. **Custom Illustrations**
10. **Animated Transitions**


# Recommended Process
1. **Create a New Branch**
   ```bash
   git checkout -b design/ui-improvements
   ```
2. **Make Your Changes**
   - Edit `src/App.jsx` for component changes
   - Edit `src/index.css` for global styles
   - Add images to `public/` folder
3. **Test Your Changes**
   ```bash
   npm run dev
   ```
   - Check on different screen sizes
   - Test all interactive elements
4. **Commit Your Work**
   ```bash
   git add .
   git commit -m "Redesign login page and chat interface"
   ```
5. **Push to GitHub**
   ```bash
   git push origin design/ui-improvements
   ```
6. **Create Pull Request**
   - Go to GitHub repository
   - Click "New Pull Request"
   - Add screenshots of your changes
   - Tag the developer for review

# Screenshot Guidelines
When sharing design updates, please provide:
1. **Desktop view** (full screen)
2. **Mobile view** (responsive)
3. **Before/After** comparisons
4. **Interactive states** (hover, focus, active)

# Important Notes
# DO NOT Modify
- `.env` file 
- `src/utils/aiService.js` 
- `src/utils/productSearch.js` 
- `package.json` dependencies 
# Safe to Modify
- `src/App.jsx` 
- `src/index.css` 
- `public/` folder 
- Color schemes, fonts, spacing, layouts

# Testing Checklist
Before submitting design changes:
- [ ] Works on mobile (375px width)
- [ ] Works on tablet (768px width)
- [ ] Works on desktop (1440px width)
- [ ] All buttons are clickable
- [ ] Text is readable
- [ ] Animations are smooth
- [ ] Colors have good contrast
- [ ] No console errors

##  Contact & Support
- **Repository**: https://github.com/Edikan19/nexuscart
- **Developer**: [Edikan Inyang/edikaninyang24@gmail.com]

**Good luck with the design!**