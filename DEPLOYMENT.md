# 🚀 Deployment Guide

Complete guide to deploying QCELLS to production using Vercel (Next.js) and Render (Strapi).

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Quick Start](#quick-start)
3. [Detailed Setup](#detailed-setup)
4. [Environment Variables](#environment-variables)
5. [Deployment Process](#deployment-process)
6. [Post-Deployment](#post-deployment)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before deploying, ensure you have:

- [ ] GitHub account with this repository
- [ ] Vercel account (sign up at [vercel.com](https://vercel.com))
- [ ] Render account (sign up at [render.com](https://render.com))
- [ ] Node.js 18+ installed locally
- [ ] Git configured locally

---

## Quick Start

### 1. Generate Secrets

```bash
# Generate all required secrets
node scripts/generate-secrets.js

# Copy the output and save it securely
```

### 2. Deploy Strapi to Render

1. Go to [render.com/dashboard](https://render.com/dashboard)
2. Click **"New +"** → **"Blueprint"**
3. Connect your GitHub repository
4. Select this repository
5. Render will detect `backend-cms/render.yaml`
6. Add environment variables from `backend-cms/ENV_PRODUCTION_TEMPLATE.txt`
7. Click **"Apply"**
8. Wait for deployment (5-10 minutes)
9. Note your Strapi URL: `https://your-app.onrender.com`

### 3. Deploy Next.js to Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Vercel auto-detects Next.js
5. Add environment variables from `ENV_PRODUCTION_TEMPLATE.txt`
6. Set `NEXT_PUBLIC_STRAPI_URL` to your Render URL
7. Click **"Deploy"**
8. Wait for deployment (2-5 minutes)
9. Your site is live! 🎉

### 4. Set Up CI/CD (Optional but Recommended)

```bash
# Install GitHub CLI (if not already installed)
# macOS: brew install gh
# Linux: sudo apt install gh

# Authenticate
gh auth login

# Run the setup script
chmod +x scripts/setup-secrets.sh
./scripts/setup-secrets.sh
```

---

## Detailed Setup

### Step 1: Prepare Your Repository

```bash
# Ensure everything is committed
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### Step 2: Configure Strapi Database

Strapi will automatically use PostgreSQL in production (configured in `backend-cms/config/database.ts`).

**To migrate from SQLite to PostgreSQL:**

```bash
# Export your local data
cd backend-cms
npm run strapi export -- --file backup

# After Render deploys with PostgreSQL, import:
# (Do this via Render shell or locally connected to prod DB)
npm run strapi import -- --file backup
```

### Step 3: Render Deployment (Strapi)

#### Option A: Using Blueprint (Recommended)

1. **Create New Blueprint:**
   - Dashboard → New + → Blueprint
   - Connect GitHub
   - Select repository
   - Render detects `render.yaml`

2. **Configure Environment Variables:**
   
   Copy from `backend-cms/ENV_PRODUCTION_TEMPLATE.txt`:
   
   ```
   NODE_ENV=production
   DATABASE_CLIENT=postgres
   HOST=0.0.0.0
   PORT=1337
   ```
   
   **Generate secrets with:**
   ```bash
   node scripts/generate-secrets.js
   ```

3. **Deploy:**
   - Click "Apply"
   - Wait for database and service to be created
   - First deploy takes ~10 minutes

#### Option B: Manual Setup

1. **Create PostgreSQL Database:**
   - New + → PostgreSQL
   - Name: `qcells-strapi-db`
   - Region: Oregon (or closest to you)
   - Plan: Starter ($7/mo)

2. **Create Web Service:**
   - New + → Web Service
   - Connect GitHub repo
   - Root Directory: `backend-cms`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

### Step 4: Vercel Deployment (Next.js)

#### Connect Repository

1. **Import Project:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select your repository
   - Click "Import"

2. **Configure Project:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Add Environment Variables:**
   
   ```env
   # Required
   NEXT_PUBLIC_STRAPI_URL=https://your-app.onrender.com
   NEXTAUTH_URL=https://your-site.vercel.app
   NEXTAUTH_SECRET=<from generate-secrets.js>
   DATABASE_URL=<your-database-url>
   ```

4. **Deploy:**
   - Click "Deploy"
   - First build takes ~3-5 minutes
   - Get your deployment URL

### Step 5: Update CORS in Strapi

After both are deployed:

1. Log into Strapi admin: `https://your-app.onrender.com/admin`
2. Settings → General → Public URL
3. Set to your Vercel URL: `https://your-site.vercel.app`
4. Save and rebuild

---

## Environment Variables

### Next.js (Vercel)

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `NEXT_PUBLIC_STRAPI_URL` | ✅ | Strapi API URL | `https://api.example.com` |
| `NEXTAUTH_URL` | ✅ | Your site URL | `https://example.com` |
| `NEXTAUTH_SECRET` | ✅ | Auth secret | Generated value |
| `DATABASE_URL` | ✅ | User database | PostgreSQL URL |

### Strapi (Render)

| Variable | Required | Description | Generated? |
|----------|----------|-------------|-----------|
| `NODE_ENV` | ✅ | Environment | Set to `production` |
| `DATABASE_CLIENT` | ✅ | DB type | Set to `postgres` |
| `DATABASE_URL` | ✅ | DB connection | ✅ By Render |
| `APP_KEYS` | ✅ | Strapi keys | Use generator |
| `API_TOKEN_SALT` | ✅ | API security | Use generator |
| `ADMIN_JWT_SECRET` | ✅ | Admin auth | Use generator |
| `TRANSFER_TOKEN_SALT` | ✅ | Transfer security | Use generator |
| `JWT_SECRET` | ✅ | JWT signing | Use generator |

**Generate all secrets with:**
```bash
node scripts/generate-secrets.js
```

---

## Deployment Process

### Automatic Deployment (CI/CD)

Once GitHub Actions is configured:

```bash
# Make changes
git add .
git commit -m "Your changes"
git push origin main

# GitHub Actions automatically:
# 1. Tests your code
# 2. Deploys Strapi to Render
# 3. Deploys Next.js to Vercel
# 4. Notifies you of results
```

### Manual Deployment

Use the deployment script:

```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

Or manually:

```bash
# Trigger Render deploy
curl -X POST "https://api.render.com/deploy/srv-xxxxx?key=xxxxx"

# Vercel deploys automatically on git push
# Or manually:
npm i -g vercel
vercel --prod
```

---

## Post-Deployment

### 1. Initial Strapi Setup

```bash
# Create admin user (first time only)
# Visit: https://your-app.onrender.com/admin
# Follow registration wizard
```

### 2. Configure Content Types

1. Log into Strapi admin
2. Content-Type Builder → Ensure all types are published
3. Settings → Roles → Public → Enable permissions
4. Save changes

### 3. Verify Next.js

1. Visit your Vercel URL
2. Check that content loads from Strapi
3. Test all pages and features
4. Check browser console for errors

### 4. Set Up Custom Domain (Optional)

**Vercel:**
1. Project Settings → Domains
2. Add your domain
3. Configure DNS records

**Render:**
1. Service → Settings → Custom Domains
2. Add domain
3. Configure DNS records

### 5. Enable SSL

Both Vercel and Render provide automatic SSL certificates via Let's Encrypt.

---

## Troubleshooting

### Strapi Issues

**Problem:** Database connection errors

```bash
# Check Render logs
render logs -s your-service-name

# Verify DATABASE_URL is set correctly
# Should be: postgresql://user:pass@host:5432/db?sslmode=require
```

**Problem:** Build fails

```bash
# Check Node version (should be 18+)
# Update render.yaml if needed:
envVars:
  - key: NODE_VERSION
    value: 18.19.0
```

**Problem:** Strapi admin won't load

- Check `STRAPI_ADMIN_CLIENT_URL` points to Vercel
- Clear browser cache
- Check CORS settings in Strapi

### Next.js Issues

**Problem:** Can't connect to Strapi

- Verify `NEXT_PUBLIC_STRAPI_URL` is correct
- Check Strapi is running and accessible
- Check CORS settings in Strapi allow your Vercel domain

**Problem:** Build fails

```bash
# Check Vercel logs
vercel logs

# Common issues:
# - Missing environment variables
# - TypeScript errors
# - Dependency issues
```

**Problem:** Images not loading

- Check `next.config.js` remote patterns include your Strapi domain
- Verify image URLs in Strapi responses
- Check Vercel logs for image optimization errors

### CI/CD Issues

**Problem:** GitHub Actions failing

```bash
# Check workflow runs
# Repository → Actions → Select failed run → View logs

# Common fixes:
# - Verify all secrets are set in GitHub
# - Check VERCEL_TOKEN is valid
# - Ensure RENDER_DEPLOY_HOOK is correct
```

---

## Monitoring & Maintenance

### Regular Tasks

- **Weekly:** Check for Strapi/Next.js updates
- **Monthly:** Review and rotate secrets
- **Quarterly:** Database backups and cleanup

### Backups

**Strapi Database:**
```bash
# Export from Render dashboard or via CLI
pg_dump $DATABASE_URL > backup.sql
```

**Media Files:**
Consider using cloud storage (Cloudinary/S3) for production uploads.

### Performance Monitoring

- **Vercel Analytics:** Built-in, enable in dashboard
- **Render Metrics:** Available in service dashboard
- **Uptime Monitoring:** Use UptimeRobot or similar

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Render Docs:** https://render.com/docs
- **Strapi Docs:** https://docs.strapi.io
- **Next.js Docs:** https://nextjs.org/docs

---

## Cost Estimate

| Service | Free Tier | Paid |
|---------|-----------|------|
| Vercel | ✅ Hobby (free) | $20/mo Pro |
| Render | ✅ Free for 90 days | $7/mo Starter |
| **Total** | **Free for 3 months** | **~$27/mo after** |

---

**🎉 Congratulations! Your site is now live in production!**

