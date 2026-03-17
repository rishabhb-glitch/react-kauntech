# Kauntech Website

An eye-catching, playful website for the Kauntech mobile app - an AI-powered OCR and translation tool for business cards, documents, and shop boards.

![Kauntech Preview](preview.png)

## Features

- **50+ Indian Languages** floating in the background with "Hello", "Namaste", "Welcome", "Made in India"
- **3D Card Effects** and smooth animations
- **Playful & Colorful Design** using brand colors: Gold, Yellow, Black, White, Gray, Purple, Blue
- **Responsive Design** - works on all devices
- **Smooth Scrolling** with section navigation
- **Interactive Elements** with hover effects and animations

## Sections

1. **Hero** - Main headline with app mockup and 99 free scans highlight
2. **Features** - Capabilities mosaic (Scan, Translate, Export)
3. **Translate** - Instant translation showcase
4. **Scan** - Document and business card scanning
5. **Automation Flow** - Scan → Detect → Translate → Send workflow
6. **Download CTA** - Free and Premium pricing cards
7. **Footer** - Links and social media

## GitHub Pages Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon and select **New repository**
3. Name it `kauntech` (or any name you prefer)
4. Make it **Public**
5. Click **Create repository**

### Step 2: Upload Files

**Option A: Using Git Command Line**

```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/kauntech.git
cd kauntech

# Copy these files into the folder:
# - index.html
# - styles.css
# - script.js
# - README.md

# Add, commit, and push
git add .
git commit -m "Initial website upload"
git push origin main
```

**Option B: Using GitHub Web Interface**

1. Go to your repository on GitHub
2. Click **Add file** → **Upload files**
3. Drag and drop all files (index.html, styles.css, script.js, README.md)
4. Click **Commit changes**

### Step 3: Enable GitHub Pages

1. In your repository, click **Settings**
2. Scroll down to **Pages** section (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Select **main** branch and **/(root)** folder
5. Click **Save**
6. Wait 1-2 minutes for deployment
7. Your site will be live at: `https://YOUR_USERNAME.github.io/kauntech/`

### Step 4: Connect Custom Domain (Optional)

To use www.Kauntech.com:

1. In repository Settings → Pages
2. Under **Custom domain**, enter: `www.Kauntech.com`
3. Click **Save**
4. Add these DNS records in your domain registrar:

```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

5. Wait for DNS propagation (up to 24 hours)
6. Enable **Enforce HTTPS** in GitHub Pages settings

## File Structure

```
kauntech/
├── index.html      # Main HTML file
├── styles.css      # All styles and animations
├── script.js       # Interactive JavaScript
└── README.md       # This file
```

## Technologies Used

- HTML5
- CSS3 (with CSS Variables, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Poppins, Inter, Space Grotesk)

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Performance

- Optimized animations with `will-change`
- Reduced motion support for accessibility
- Paused animations when tab is hidden
- Lightweight with no external dependencies (except fonts)

## License

© 2026 Kauntech. All rights reserved.

Made with ❤️ in India
