# Prompt 10: Build and Deployment

## Context
After testing is complete, build the production version and deploy the educational website to a hosting platform.

## Task
Create a production-ready build and deploy to hosting services like GitHub Pages, Netlify, or Vercel.

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

## Next Steps
Proceed to Prompt 11 to set up Cursor rules for AI-assisted content management.
