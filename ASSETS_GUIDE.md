# Asset Management Guide

## Overview

This project uses a centralized asset configuration system to manage all images, videos, and other static files. This ensures **zero hardcoded absolute paths** and makes the project fully portable across different hosting platforms and environments.

## Directory Structure

```
src/assets/
├── images/          # Local project images
│   ├── karthik.jpg
│   ├── wave.gif
│   ├── about-image.png
│   ├── high-five.gif
│   ├── pcb-example.jpg
│   ├── epdu.jpg
│   └── attiny.jpg
├── videos/          # Local project videos
│   └── appsec-2025.mp4
└── assetsConfig.js  # Centralized asset references
```

## Asset Configuration (`src/assets/assetsConfig.js`)

All assets are referenced through `assetsConfig.js`, which provides a single source of truth:

```javascript
import { ASSETS } from '../assets/assetsConfig'

// Use in your components:
<img src={ASSETS.PROFILE_IMAGE} alt="Profile" />
<video src={ASSETS.APPSEC_VIDEO} />
```

### Why This Approach?

1. **Portability** - No absolute paths that break on different systems
2. **Maintainability** - Change asset paths in one place
3. **GitHub Pages Compatible** - Base path `/My_personal_WEBUI/` is set in vite.config
4. **Easy Migration** - Switch between local and CDN assets without touching components
5. **Performance** - Lazy-load images, optimize video delivery

## Adding New Local Assets

### Step 1: Add Files
Place your files in the appropriate folder:
- Images → `src/assets/images/`
- Videos → `src/assets/videos/`

### Step 2: Update `assetsConfig.js`

Option A: Direct Import (Recommended)
```javascript
// At the top of assetsConfig.js
import myImage from './images/my-image.jpg'

// In ASSETS object
export const ASSETS = {
  MY_NEW_IMAGE: myImage,
  // ... rest of assets
}
```

Option B: Path Reference
```javascript
export const ASSETS = {
  MY_NEW_IMAGE: '/My_personal_WEBUI/assets/images/my-image.jpg',
}
```

### Step 3: Use in Components
```javascript
import { ASSETS } from '../assets/assetsConfig'

export default function MyComponent() {
  return <img src={ASSETS.MY_NEW_IMAGE} alt="Description" />
}
```

## External Asset References

External assets (like Pixabay CDN) are explicitly marked in `assetsConfig.js`:

```javascript
// External CDN - these remain as full URLs
export const ASSETS = {
  GALLERY_PCB: 'https://cdn.pixabay.com/photo/2016/11/29/09/32/pcb-1867376_1280.jpg',
  // ...
}
```

**Note:** External CDN URLs are intentional and do not count as "absolute paths" since they're remote resources, not local paths.

## Current Asset Status

| Asset | Type | Status | Location |
|-------|------|--------|----------|
| Profile Image | Local | Needs Setup | `src/assets/images/karthik.jpg` |
| Wave GIF | Local | Needs Setup | `src/assets/images/wave.gif` |
| About Image | Local | Needs Setup | `src/assets/images/about-image.png` |
| High-Five GIF | Local | Needs Setup | `src/assets/images/high-five.gif` |
| Project 1 | Local | Needs Setup | `src/assets/images/pcb-example.jpg` |
| Project 2 | Local | Needs Setup | `src/assets/images/epdu.jpg` |
| Project 3 | Local | Needs Setup | `src/assets/images/attiny.jpg` |
| Appsec Video | Local | Needs Setup | `src/assets/videos/appsec-2025.mp4` |
| Gallery Images | External (CDN) | ✓ Active | Pixabay |

## Path Aliases

The project supports Vite path aliases for cleaner imports:

```javascript
// Instead of:
import { ASSETS } from '../../../assets/assetsConfig'

// Use alias (not configured by default, but can be added):
import { ASSETS } from '@/assets/assetsConfig'
```

To enable the `@` alias, it's already configured in `vite.config.js`:

```javascript
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
}
```

## Build & Deployment

### Local Development
```bash
npm run dev
# Assets load from src/assets/ via Vite dev server
```

### Production Build
```bash
npm run build
# Assets are copied to dist/assets/ by Vite
# Base path is automatically prepended: /My_personal_WEBUI/assets/...
```

### GitHub Pages Deployment
```bash
npm run deploy
# Pushes built files to gh-pages branch
# All asset paths automatically work with /My_personal_WEBUI/ base
```

## Troubleshooting

### "Asset not found" errors

1. **Check file exists:**
   ```bash
   ls src/assets/images/
   ```

2. **Verify assetsConfig.js reference:**
   - Ensure the filename in `assetsConfig.js` matches the actual file

3. **Check production build:**
   ```bash
   npm run build
   ls dist/assets/
   ```

### Images/Videos not loading on GitHub Pages

1. Verify base path in `vite.config.js` is `/My_personal_WEBUI/`
2. Check that files are in `dist/assets/` after build
3. Hard refresh browser cache (Ctrl+Shift+R)

### Asset URLs change between environments

This should not happen if using `assetsConfig.js` correctly. However, if needed:

```javascript
// assetsConfig.js - Environment-aware approach
const basePath = process.env.NODE_ENV === 'production' 
  ? '/My_personal_WEBUI/' 
  : '/'

export const ASSETS = {
  PROFILE_IMAGE: `${basePath}assets/images/karthik.jpg`,
}
```

## Best Practices

✅ **DO:**
- Import assets through `assetsConfig.js`
- Keep image files under 5MB
- Use modern formats (WebP, MP4, WEBM)
- Add lazy-loading: `loading="lazy"` on images
- Use descriptive filenames: `profile-image.jpg` not `img-1.jpg`

❌ **DON'T:**
- Hardcode URLs in components
- Use `https://raw.githubusercontent.com/...` URLs in code
- Reference `/home/user/...` absolute paths
- Mix local paths with external URLs inconsistently

## Migration from Absolute Paths

If you previously used absolute URLs:

```javascript
// OLD (No longer used)
src="https://raw.githubusercontent.com/kekanath/kekanathan/main/karthik.jpg"

// NEW (Updated)
src={ASSETS.PROFILE_IMAGE}
```

All components have been refactored to use this pattern.

## File Size & Performance

Asset recommendations:

| Type | Max Size | Format |
|------|----------|--------|
| Profile Image | 500 KB | WebP or JPEG |
| GIFs | 2 MB | MP4 (better compression) |
| Hero Video | 10 MB | MP4 (H.264) |
| Gallery Images | 1 MB | WebP with JPEG fallback |

Use tools to compress:
- **Images:** TinyPNG, ImageOptim
- **Videos:** FFmpeg, Handbrake

## Summary

- ✅ **Zero absolute filesystem paths** in production code
- ✅ **Centralized asset management** via `assetsConfig.js`
- ✅ **Fully portable** across any hosting platform
- ✅ **GitHub Pages ready** with proper base path handling
- ✅ **Easy to maintain** - change assets in one place
