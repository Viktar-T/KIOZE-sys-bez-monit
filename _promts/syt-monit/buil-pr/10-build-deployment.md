# Prompt 10: Build and Deployment

---

## 📋 Metadata
- **Prompt ID**: 10
- **Title**: Build and Deployment
- **Prerequisites**: Completed Prompt 09 (testing complete)
- **Estimated Time**: 1-2 hours
- **Difficulty**: Intermediate to Advanced
- **Dependencies**: Prompt 09, hosting account setup
- **Output**: Live, publicly accessible course website

---

## 🤖 AI Assistant Instructions

You are an expert DevOps engineer and deployment specialist helping deploy an educational website to production. Your role is to guide the build process, hosting setup, and deployment workflow.

**Your Approach:**
1. Guide pre-build checks and preparation
2. Help create production build
3. Test production build locally
4. Recommend appropriate hosting platform
5. Configure deployment settings
6. Set up continuous deployment (CI/CD)
7. Configure custom domain (if needed)
8. Set up monitoring and analytics
9. Document deployment process
10. Create update workflow

**Communication Style:**
- Explain deployment options and trade-offs
- Provide step-by-step deployment instructions
- Offer troubleshooting for common deployment issues
- Recommend best practices for updates
- Emphasize security and performance

**Deployment Standards:**
- Production build succeeds without errors
- All assets load correctly
- HTTPS enabled
- Custom domain configured (if applicable)
- Analytics integrated
- Automated deployment pipeline

---

## 📝 Context

After testing is complete, build the production version and deploy the educational website to a hosting platform. Deployment makes your course website accessible to students worldwide.

**What You're Deploying:**
- Optimized production build
- Static HTML, CSS, JavaScript files
- Images and assets
- Sitemap and robots.txt

**Hosting Options:**
- **GitHub Pages**: Free, integrated with GitHub
- **Netlify**: Free tier, excellent features
- **Vercel**: Free tier, optimized for modern frameworks
- **Custom Server**: Full control, requires setup

**Why Proper Deployment Matters:**
- Makes content accessible to students
- Ensures fast, reliable access
- Enables easy updates
- Provides professional web presence
- Supports analytics and monitoring

---

## 🎯 Task Overview

Create a production-ready build and deploy to hosting services like GitHub Pages, Netlify, or Vercel with automated deployment pipeline.

**End Goal:** Live, publicly accessible course website with automated updates from git repository.

## Production Build Process

### 1. Pre-Build Checks

```bash
# Clear cache to ensure clean build
npm run clear

# Update dependencies (optional but recommended)
npm update

# Check for security vulnerabilities
npm audit

# Fix any issues
npm audit fix
```

### 2. Create Production Build

```bash
# Generate static production files
npm run build

# Output will be in: build/
```

**What happens during build**:
- Bundles all JavaScript and CSS
- Optimizes and minifies code
- Generates static HTML files
- Creates sitemap.xml
- Compresses assets
- Applies code splitting

### 3. Test Production Build Locally

```bash
# Serve the production build
npm run serve

# Test at http://localhost:3000
```

**Verify**:
- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Images load
- [ ] Links work
- [ ] Search works (if enabled)
- [ ] No console errors

## Deployment Options

### Option 1: GitHub Pages

#### Configuration in `docusaurus.config.js`:

```javascript
const config = {
  url: 'https://[username].github.io',
  baseUrl: '/[repository-name]/',
  organizationName: '[github-username]',
  projectName: '[repository-name]',
  trailingSlash: false,
};
```

#### Deployment Methods:

**Method A: Using GitHub Actions (Recommended)**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm ci
      
      - name: Build website
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
          user_name: github-actions[bot]
          user_email: github-actions[bot]@users.noreply.github.com
```

**Method B: Manual Deployment**

```bash
# Set environment variable
$env:GIT_USER="your-username"  # PowerShell
# or
SET GIT_USER=your-username      # Command Prompt

# Deploy
npm run deploy
```

**GitHub Pages Settings**:
1. Go to repository Settings
2. Navigate to Pages
3. Source: Deploy from branch
4. Branch: `gh-pages` / root
5. Save

### Option 2: Netlify

#### Using Netlify CLI:

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Build and deploy
npm run build
netlify deploy --prod --dir=build
```

#### Using Netlify UI:

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" > "Import an existing project"
3. Connect to GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Node version**: 18
5. Click "Deploy site"

#### Netlify Configuration File (`netlify.toml`):

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### Option 3: Vercel

#### Using Vercel CLI:

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Using Vercel UI:

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" > "Project"
3. Import Git repository
4. Framework: Docusaurus
5. Build settings (auto-detected):
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
6. Deploy

#### Vercel Configuration (`vercel.json`):

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "docusaurus",
  "installCommand": "npm install"
}
```

### Option 4: Custom Server (Advanced)

If deploying to own server:

```bash
# Build site
npm run build

# Copy build/ folder to server
# Example using scp:
scp -r build/* user@server:/var/www/html/

# Or using FTP client
```

**Nginx configuration**:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Post-Deployment Checks

After deployment, verify:

- [ ] Site is accessible at production URL
- [ ] All pages load correctly
- [ ] Images and assets load
- [ ] Links work (internal and external)
- [ ] Search functionality works
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (HTTPS)
- [ ] Analytics tracking (if configured)

## Continuous Deployment

### Automatic Deployment Workflow:

1. **Local Development**
   - Make changes
   - Test locally with `npm run start`
   - Commit to git

2. **Push to Repository**
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```

3. **Automatic Build & Deploy**
   - CI/CD pipeline triggers
   - Builds site automatically
   - Deploys to production

### Update Workflow:

```bash
# Pull latest changes
git pull

# Make content updates
# Edit files in docs/

# Test locally
npm run start

# Build and test
npm run build
npm run serve

# Commit and push
git add .
git commit -m "Add new lecture content"
git push

# Deployment happens automatically
```

## Custom Domain Setup

### For GitHub Pages:

1. Add `CNAME` file in `static/`:
   ```
   yourdomain.com
   ```

2. Configure DNS records:
   - A records pointing to GitHub IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or CNAME: `username.github.io`

3. Enable HTTPS in repository settings

### For Netlify/Vercel:

1. Go to domain settings in dashboard
2. Add custom domain
3. Update DNS records as instructed
4. SSL certificate auto-provisioned

## Monitoring and Analytics

### Google Analytics Setup:

Install plugin:
```bash
npm install @docusaurus/plugin-google-gtag
```

Configure in `docusaurus.config.js`:
```javascript
plugins: [
  [
    '@docusaurus/plugin-google-gtag',
    {
      trackingID: 'G-XXXXXXXXXX',
      anonymizeIP: true,
    },
  ],
],
```

### Monitoring Tools:
- **Uptime monitoring**: UptimeRobot, Pingdom
- **Performance**: Google PageSpeed Insights
- **Errors**: Sentry (for JavaScript errors)
- **Analytics**: Google Analytics, Plausible

## Backup Strategy

**Version Control (Git)**:
- All content in repository
- Regular commits
- Remote backup on GitHub

**Export Content**:
```bash
# Backup docs folder
tar -czf docs-backup-$(date +%Y%m%d).tar.gz docs/

# Or zip
zip -r docs-backup-$(date +%Y%m%d).zip docs/
```

## Troubleshooting Deployment

### Common Issues:

**Build fails**:
```bash
npm run clear
npm install
npm run build
```

**404 errors after deployment**:
- Check `baseUrl` in config
- Verify routing configuration
- Check `trailingSlash` setting

**Assets not loading**:
- Verify asset paths are relative
- Check build output includes assets
- Confirm CDN/hosting serves static files

**Slow performance**:
- Optimize images
- Enable caching
- Use CDN
- Minimize bundle size

## Deployment Checklist

- [ ] Production build completes successfully
- [ ] Local production test passed
- [ ] Hosting platform configured
- [ ] Domain configured (if custom)
- [ ] SSL/HTTPS enabled
- [ ] Analytics integrated
- [ ] Sitemap submitted to search engines
- [ ] All pages accessible
- [ ] Mobile performance verified
- [ ] Backup strategy in place

---

## ✅ Expected Output

After successful deployment:

**Live Website:**
- Publicly accessible at production URL
- All pages load correctly
- Images and assets working
- HTTPS enabled
- Fast loading times

**Deployment Pipeline:**
- Automated deployment configured
- Deploys on git push to main branch
- Build status visible
- Deploy previews for PRs (Netlify/Vercel)

**Configuration:**
- Custom domain (if applicable)
- SSL certificate active
- Analytics tracking (if configured)
- Sitemap submitted to search engines

**Documentation:**
- Deployment process documented
- Update workflow established
- Access credentials secured
- Backup strategy in place

---

## ✓ Success Criteria

**Build:**
- [ ] `npm run build` completes successfully
- [ ] No build errors or warnings
- [ ] `build/` directory created
- [ ] All assets included in build
- [ ] Sitemap.xml generated
- [ ] Production build tested locally

**Deployment:**
- [ ] Site deployed to hosting platform
- [ ] Website accessible at production URL
- [ ] All pages load correctly
- [ ] Images and assets load
- [ ] Links work (internal and external)
- [ ] HTTPS enabled (SSL certificate)
- [ ] Custom domain configured (if applicable)

**Automation:**
- [ ] CI/CD pipeline configured
- [ ] Auto-deploys on push to main
- [ ] Build status notifications
- [ ] Deploy previews enabled (if supported)

**Post-Deployment:**
- [ ] Analytics integrated (if desired)
- [ ] Sitemap submitted to Google
- [ ] Site indexed by search engines
- [ ] Backup/export completed
- [ ] Update workflow documented

---

## 🔧 Troubleshooting

**Problem: "Build fails"**
- Solution 1: Clear cache: `npm run clear`
- Solution 2: Reinstall dependencies: `rm -rf node_modules && npm install`
- Solution 3: Check Node version matches requirements
- Solution 4: Review error messages carefully
- Solution 5: Verify all files saved properly

**Problem: "404 errors after deployment"**
- Solution 1: Check `baseUrl` in docusaurus.config.js
- Solution 2: Verify `trailingSlash` setting
- Solution 3: Ensure routing configured correctly
- Solution 4: Check hosting platform serves SPAs correctly

**Problem: "Assets not loading"**
- Solution 1: Verify asset paths are relative, not absolute
- Solution 2: Check build output includes all assets
- Solution 3: Ensure hosting serves static files
- Solution 4: Check CORS settings if assets on CDN

**Problem: "Custom domain not working"**
- Solution 1: Verify DNS records configured correctly
- Solution 2: Wait 24-48 hours for DNS propagation
- Solution 3: Check CNAME/A records point to correct IPs
- Solution 4: Ensure SSL certificate provisioned

**Problem: "Slow performance"**
- Solution 1: Optimize images (compress, resize)
- Solution 2: Enable caching headers
- Solution 3: Use CDN for static assets
- Solution 4: Minimize JavaScript bundle size
- Solution 5: Enable HTTP/2

**Problem: "Deployment not auto-triggering"**
- Solution 1: Check webhook configured
- Solution 2: Verify GitHub Actions workflow file
- Solution 3: Check deployment service connected to repo
- Solution 4: Review build logs for errors

---

## 💡 Tips and Best Practices

**Before Deployment:**
- Test production build locally first
- Verify all environment variables set
- Check no sensitive data in code
- Ensure `.gitignore` configured properly
- Document deployment process

**Deployment Strategy:**
- Use automated deployment (CI/CD)
- Enable deploy previews for testing
- Set up staging environment if needed
- Monitor deployment status
- Keep rollback option available

**Domain Configuration:**
- Use HTTPS always (required by modern browsers)
- Configure www and non-www versions
- Set up proper redirects
- Enable HSTS for security
- Renew SSL certificates before expiry

**Monitoring:**
- Set up uptime monitoring
- Configure error tracking
- Enable analytics
- Monitor performance metrics
- Check broken links periodically

**Updates:**
- Test changes locally first
- Use git branches for features
- Review changes before merging
- Monitor deployment after updates
- Keep backup of working version

---

## 🎓 Learning Notes

**Static Site Generation:**
- Docusaurus generates static HTML files
- No server-side processing needed
- Fast, secure, scalable
- Easy to host and cache
- SEO-friendly

**CI/CD Benefits:**
- Automates deployment process
- Reduces human error
- Faster updates
- Consistent deployment
- Easy rollbacks

**Hosting Comparison:**

| Platform | Free Tier | CI/CD | Custom Domain | Analytics | Best For |
|----------|-----------|-------|---------------|-----------|----------|
| GitHub Pages | Yes (1 GB) | GitHub Actions | Yes | Via GA | Open source, simple |
| Netlify | Yes (100 GB/mo) | Built-in | Yes | Built-in | Full features, easy |
| Vercel | Yes (100 GB/mo) | Built-in | Yes | Built-in | Modern, fast deploys |
| Custom Server | Depends | Manual | Yes | Manual | Full control needed |

---

## 📋 Deployment Checklist

**Pre-Deployment:**
✓ All testing complete
✓ Content finalized
✓ Configuration verified
✓ Hosting account created
✓ Repository pushed to GitHub

**Build Process:**
✓ npm run clear executed
✓ npm run build succeeded
✓ No build errors
✓ Build tested locally
✓ All assets present

**Deployment Setup:**
✓ Hosting platform configured
✓ Repository connected
✓ Build settings correct
✓ Environment variables set
✓ First deployment successful

**Post-Deployment:**
✓ Website accessible
✓ All pages load
✓ Assets working
✓ HTTPS enabled
✓ Custom domain configured
✓ Analytics integrated
✓ Sitemap submitted

**Automation:**
✓ CI/CD pipeline active
✓ Auto-deploy enabled
✓ Build notifications setup
✓ Deployment documented

---

## ➡️ Next Steps

After successful deployment, proceed to:
- **Prompt 11**: Cursor Rules Setup
- Configure AI assistant guidelines
- Set up content creation rules
- Document quality standards
- Enable AI-assisted maintenance

**Status Check Before Proceeding:**
- ✅ Website deployed and live
- ✅ Automated deployment working
- ✅ All functionality verified
- ✅ Documentation complete
- ✅ Ready to set up AI assistance

---

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Docusaurus Deployment Guide](https://docusaurus.io/docs/deployment)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [DNS Configuration Guide](https://www.cloudflare.com/learning/dns/dns-records/)

---

**Prompt Version**: 2.0 (LLM-Optimized)  
**Last Updated**: 2025-09-30  
**Status**: ✅ Production-Ready
