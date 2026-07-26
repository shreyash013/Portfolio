# Shreyash Gavade - AI & Data Science Engineer Portfolio

A high-performance, responsive portfolio web application built with **Vite, React, TypeScript, Tailwind CSS**, and an interactive **HTML5 Canvas Particle Background**.

---

## 🚀 Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build for production
npm run build
```

---

## 🌐 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)

1. Push your repository to GitHub:
   ```bash
   git remote add origin https://github.com/shreyashgavade7/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository `shreyashgavade7/portfolio`.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Vercel will build and publish your site with automatic SSL & global CDN!

---

### Option 2: Deploy to Netlify

1. Push code to GitHub/GitLab.
2. Go to [Netlify](https://www.netlify.com/) -> **"Add new site"** -> **"Import an existing project"**.
3. Select your repository.
4. Netlify will read `netlify.toml` automatically:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. Click **Deploy site**.

---

### Option 3: Deploy to GitHub Pages

1. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
2. Add the following scripts to your `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run:
   ```bash
   npm run deploy
   ```

---

## 📁 Project Structure

```
d:\portfolio\
├── public/
│   ├── profile.png       # Shreyash Gavade formal portrait
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Header navigation & avatar
│   │   ├── HeroSection.tsx        # Hero banner & portrait card
│   │   ├── AboutEducation.tsx     # Bio & Academic qualifications
│   │   ├── SkillsSection.tsx       # Categorized skills grid
│   │   ├── ProjectsSection.tsx     # Filterable projects & modals
│   │   ├── ExperienceSection.tsx   # Sunbeam Infotech internship
│   │   ├── ContactSection.tsx      # Contact form & resume downloader
│   │   ├── Footer.tsx              # Footer & social links
│   │   └── ParticleBackground.tsx  # HTML5 Canvas particle network
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── vercel.json           # Vercel SPA routing
├── netlify.toml          # Netlify build configuration
└── package.json
```
