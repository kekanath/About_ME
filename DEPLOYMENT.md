# GitHub Pages Deployment Guide

Complete step-by-step guide to deploy your React portfolio to GitHub Pages.

## 📋 Prerequisites Checklist

- ✅ Git installed on your machine
- ✅ GitHub account created
- ✅ Node.js and npm installed
- ✅ Project built successfully locally

## 🚀 Quick Deployment (5 Steps)

### Step 1: Verify Project Configuration

Check `vite.config.js` has the correct repository name:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/My_personal_WEBUI/', // ← Must match your repo name
})
```

### Step 2: Install Dependencies

```bash
cd My_personal_WEBUI
npm install
```

### Step 3: Test Local Build

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to verify everything works.

### Step 4: Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
```

### Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your project (`npm run build`)
2. Create/update `gh-pages` branch
3. Push dist folder to GitHub

## 🌐 Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**:
   - Select branch: `gh-pages`
   - Select folder: `/ (root)`
5. Click **Save**

Your site will be live at:
```
https://kekanath.github.io/My_personal_WEBUI/
```

## 🔄 Update Your Site

Every time you make changes:

```bash
git add .
git commit -m "Update: describe your changes"
git push origin main
npm run deploy
```

## 🛠️ Manual Deployment (Alternative Method)

If automated deployment fails:

### 1. Build the project
```bash
npm run build
```

### 2. Create gh-pages branch
```bash
git checkout --orphan gh-pages
```

### 3. Remove all files except dist
```bash
git rm -rf .
```

### 4. Copy dist contents to root
```bash
cp -r dist/* .
rm -rf dist
```

### 5. Commit and push
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force
```

### 6. Switch back to main branch
```bash
git checkout main
```

## 🐛 Troubleshooting

### Issue: Blank page after deployment

**Solution:** Check the `base` path in `vite.config.js` matches your repository name exactly.

```javascript
base: '/My_personal_WEBUI/', // Must match repo name
```

### Issue: 404 errors on refresh

**Solution:** GitHub Pages doesn't support client-side routing with subdirectories. Use hash-based routing or create a custom 404.html:

Create `public/404.html`:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script>
      sessionStorage.redirect = location.href;
      history.replaceState(null, null, '/My_personal_WEBUI/');
    </script>
  </head>
  <body></body>
</html>
```

### Issue: Images not loading

**Solution:** Use absolute paths from the base URL:

```javascript
// ✅ Correct
<img src="/My_personal_WEBUI/assets/image.jpg" />

// ❌ Wrong
<img src="/assets/image.jpg" />
```

Or use relative paths:
```javascript
<img src="./assets/image.jpg" />
```

### Issue: npm run deploy fails

**Solutions:**
1. Ensure gh-pages is installed:
```bash
npm install --save-dev gh-pages
```

2. Check package.json has correct homepage:
```json
{
  "homepage": "https://kekanath.github.io/My_personal_WEBUI"
}
```

3. Clear cache and retry:
```bash
rm -rf node_modules dist
npm install
npm run deploy
```

## 🔒 Custom Domain (Optional)

1. **Add CNAME file** to `public/` folder:
```
yourdomain.com
```

2. **Configure DNS** with your domain provider:
```
A Record: 185.199.108.153
A Record: 185.199.109.153
A Record: 185.199.110.153
A Record: 185.199.111.153
```

3. **Update vite.config.js**:
```javascript
base: '/',
```

4. **Enable HTTPS** in GitHub Pages settings

## 📊 Verification Steps

After deployment, verify:

- ✅ Site loads at `https://kekanath.github.io/My_personal_WEBUI/`
- ✅ All sections render correctly
- ✅ Dark mode toggle works
- ✅ Navigation links work
- ✅ Images load properly
- ✅ Responsive design works on mobile
- ✅ External links open in new tabs

## 🎯 Performance Optimization

Before final deployment:

1. **Optimize images**
   - Compress images using TinyPNG or ImageOptim
   - Use WebP format when possible

2. **Check bundle size**
```bash
npm run build
```
Review the output for large bundles.

3. **Test Lighthouse score**
   - Open Chrome DevTools
   - Run Lighthouse audit
   - Aim for 90+ scores

## 📝 Deployment Checklist

- [ ] Repository created on GitHub
- [ ] vite.config.js base path configured
- [ ] Dependencies installed (`npm install`)
- [ ] Local build successful (`npm run build`)
- [ ] Local preview tested (`npm run preview`)
- [ ] Git repository initialized
- [ ] Code committed to main branch
- [ ] Deployed to gh-pages (`npm run deploy`)
- [ ] GitHub Pages enabled in settings
- [ ] Site accessible at GitHub Pages URL
- [ ] All sections working correctly
- [ ] Mobile responsive verified
- [ ] Dark mode working
- [ ] Performance optimized

## 🆘 Getting Help

If you encounter issues:

1. Check the [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
2. Review [GitHub Pages Documentation](https://docs.github.com/en/pages)
3. Open an issue on the repository

---

**Your portfolio will be live at:**
```
https://kekanath.github.io/My_personal_WEBUI/
```

Share this link on your resume, LinkedIn, and business cards! 🎉
