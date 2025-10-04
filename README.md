# JackSmack1971.github.io

My personal blog and portfolio site, hosted on GitHub Pages.

**Live Site:** [https://JackSmack1971.github.io](https://JackSmack1971.github.io)

---

## 📋 Table of Contents

- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Customization Guide](#customization-guide)
- [Adding Blog Posts](#adding-blog-posts)
- [Contact Form Setup](#contact-form-setup)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## ✨ Features

- **Modern, Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Blog Section** - Share articles and insights
- **Portfolio Showcase** - Display your projects
- **Contact Form** - Get in touch functionality
- **Accessibility First** - WCAG 2.1 AA compliant
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Performance Optimized** - Fast loading, efficient CSS/JS
- **Zero Cost Hosting** - Free GitHub Pages hosting

---

## 🚀 Setup Instructions

### Prerequisites

- A GitHub account
- Basic knowledge of HTML/CSS/JavaScript (optional but helpful)

### Step 1: Create Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it exactly: `JackSmack1971.github.io`
4. Set to **Public**
5. Check "Add a README file"
6. Click **Create repository**

### Step 2: Add Files

You can add files in two ways:

#### Option A: Upload Files via GitHub Web Interface

1. In your repository, click **Add file** → **Upload files**
2. Drag and drop all the files maintaining the folder structure:
   ```
   JackSmack1971.github.io/
   ├── index.html
   ├── about.html
   ├── blog.html
   ├── portfolio.html
   ├── contact.html
   ├── blog/
   │   ├── 2025-10-04-first-post.html
   │   └── 2025-10-03-welcome.html
   ├── assets/
   │   ├── css/
   │   │   └── style.css
   │   ├── js/
   │   │   └── main.js
   │   └── images/
   ├── .gitignore
   └── README.md
   ```
3. Commit the files

#### Option B: Use Git Command Line

```bash
# Clone the repository
git clone https://github.com/JackSmack1971/JackSmack1971.github.io.git
cd JackSmack1971.github.io

# Add all files (copy files to this directory first)
git add .

# Commit
git commit -m "Initial site setup"

# Push to GitHub
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** in the sidebar
3. Under **Source**, select **main** branch
4. Click **Save**
5. Wait 1-2 minutes for the site to build

### Step 4: Visit Your Site

Your site will be live at: `https://JackSmack1971.github.io`

---

## 🎨 Customization Guide

### Update Personal Information

1. **Navigation Brand**: Edit the `.nav-brand` text in all HTML files
2. **Footer**: Update copyright information in all HTML files
3. **About Page**: Edit `about.html` with your information
4. **Contact Info**: Update contact methods in `contact.html`

### Change Colors

Edit `assets/css/style.css` and modify the CSS custom properties:

```css
:root {
  --color-primary: #2563eb;      /* Main brand color */
  --color-secondary: #7c3aed;    /* Accent color */
  --color-text: #1f2937;         /* Text color */
  /* ... more colors ... */
}
```

### Add Your Logo/Favicon

1. Create a `favicon.png` (32x32 or 64x64 pixels)
2. Place it in `assets/images/`
3. Update the favicon link in all HTML files:
   ```html
   <link rel="icon" type="image/png" href="assets/images/favicon.png">
   ```

### Update Social Links

Edit the footer in all HTML files to add your social media:

```html
<footer role="contentinfo">
  <div class="container">
    <p>&copy; 2025 JackSmack1971. All rights reserved.</p>
    <p>
      <a href="https://github.com/JackSmack1971">GitHub</a> •
      <a href="https://twitter.com/yourhandle">Twitter</a> •
      <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
    </p>
  </div>
</footer>
```

---

## 📝 Adding Blog Posts

### Create a New Post

1. Create a new HTML file in the `blog/` directory
2. Name it with the format: `YYYY-MM-DD-post-title.html`
3. Copy the structure from an existing post
4. Update the content

### Add Post to Blog Index

Edit `blog.html` and add a new entry:

```html
<article class="blog-post-preview">
  <h2><a href="blog/2025-10-05-new-post.html">New Post Title</a></h2>
  <div class="post-meta">
    <time datetime="2025-10-05">October 5, 2025</time>
    <span class="post-tags">
      <span class="tag">category</span>
    </span>
  </div>
  <p>Post excerpt or description...</p>
  <a href="blog/2025-10-05-new-post.html" class="read-more">Read full post →</a>
</article>
```

### Featured Posts on Homepage

Edit `index.html` to update the featured posts in the `.featured` section.

---

## 📧 Contact Form Setup

The contact form uses [Formspree](https://formspree.io/) (free tier: 50 submissions/month).

### Setup Steps:

1. Go to [formspree.io](https://formspree.io/)
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint ID
5. Edit `contact.html` and replace `YOUR_FORM_ID`:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Alternative: Email Direct Link

If you prefer a simple mailto link:

```html
<a href="mailto:your.email@example.com" class="btn btn-primary">
  Email Me
</a>
```

---

## 🚀 Deployment

### Automatic Deployment

GitHub Pages automatically deploys your site when you push to the `main` branch.

1. Make changes to your files locally
2. Commit changes: `git commit -am "Update content"`
3. Push to GitHub: `git push origin main`
4. Wait 1-2 minutes for the site to update

### Viewing Build Status

- Go to your repository → **Actions** tab
- Check the latest "pages build and deployment" workflow

### Troubleshooting

If your site doesn't update:

1. Check **Settings → Pages** is enabled
2. Verify you're pushing to the correct branch
3. Check **Actions** tab for build errors
4. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
5. Wait a few more minutes (can take up to 10 minutes)

---

## 🛠 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern layouts (Grid, Flexbox, Container Queries)
- **JavaScript (ES6+)** - Interactive features
- **GitHub Pages** - Free hosting
- **Formspree** - Contact form handling (optional)

### Key Features:

- ✅ WCAG 2.1 AA Accessibility
- ✅ Responsive Design (Mobile-first)
- ✅ SEO Optimized
- ✅ Performance Optimized
- ✅ Modern Web Standards
- ✅ No build tools required
- ✅ Zero cost hosting

---

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

Feel free to use this template for your own site!

---

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to:

1. Open an issue
2. Submit a pull request
3. Contact me via the contact form

---

## 📞 Contact

- **GitHub**: [@JackSmack1971](https://github.com/JackSmack1971)
- **Website**: [JackSmack1971.github.io](https://JackSmack1971.github.io)
- **Email**: your.email@example.com

---

**Last Updated**: October 2025
