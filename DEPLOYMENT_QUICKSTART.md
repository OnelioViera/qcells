# 🚀 Quick Deployment Guide

Get your site live in under 30 minutes!

## Step 1: Generate Secrets (2 min)

```bash
node scripts/generate-secrets.js
```

**Save the output** - you'll need it for the next steps.

---

## Step 2: Deploy Strapi to Render (10 min)

1. Go to [render.com/dashboard](https://render.com/dashboard)
2. Click **"New +"** → **"Blueprint"**
3. Connect GitHub → Select this repository
4. Render finds `render.yaml` automatically
5. Click **"Apply"**
6. Add these environment variables when prompted:
   - Paste secrets from Step 1
   - Set `STRAPI_ADMIN_CLIENT_URL` (leave blank for now, update after Vercel)
7. Wait for deployment (Database + Service = ~10 min)
8. **Save your Strapi URL:** `https://your-app.onrender.com`

---

## Step 3: Deploy Next.js to Vercel (5 min)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Project"**
3. Select your GitHub repository
4. Vercel auto-detects Next.js ✅
5. Click **"Environment Variables"**
6. Add these:
   ```
   NEXT_PUBLIC_STRAPI_URL = https://your-app.onrender.com
   NEXTAUTH_URL = (Vercel will show you the URL after first deploy)
   NEXTAUTH_SECRET = (from Step 1)
   DATABASE_URL = (use Vercel Postgres or external)
   ```
7. Click **"Deploy"**
8. Wait ~3 minutes
9. **Save your site URL:** `https://your-site.vercel.app`

---

## Step 4: Connect Strapi to Next.js (2 min)

1. Go back to **Render Dashboard**
2. Open your Strapi service
3. Environment → Add variable:
   ```
   STRAPI_ADMIN_CLIENT_URL = https://your-site.vercel.app
   ```
4. Click **"Save Changes"** (auto-redeploys)

5. Also update Vercel:
   - Go to your Vercel project settings
   - Environment Variables
   - Update `NEXTAUTH_URL` if it wasn't set correctly

---

## Step 5: Initial Setup (5 min)

### Create Strapi Admin Account
1. Visit: `https://your-app.onrender.com/admin`
2. Create your admin account
3. Log in

### Configure Permissions
1. Settings → Users & Permissions → Roles → Public
2. Enable these permissions:
   - Homepage: `find`
   - Project: `find`, `findOne`
   - Manufacturing-step: `find`, `findOne`
   - Global: `find`
3. **Save**

### Upload Your Logo
1. Media Library → Upload your logo
2. Settings → Global → Lindsay Logo → Select your uploaded logo
3. Save

---

## Step 6: Test Your Site (5 min)

Visit your Vercel URL and verify:
- ✅ Homepage loads
- ✅ Logo appears
- ✅ "Explore the Process" button works
- ✅ Content displays from Strapi
- ✅ Footer appears

**🎉 YOU'RE LIVE!**

---

## Optional: Auto-Deploy on Git Push

Set up CI/CD so future changes deploy automatically:

```bash
# Make scripts executable
chmod +x scripts/setup-secrets.sh

# Run the setup
./scripts/setup-secrets.sh
```

This sets up GitHub Actions to:
- ✅ Test code on every push
- ✅ Auto-deploy to Render
- ✅ Auto-deploy to Vercel
- ✅ Notify you of deployment status

---

## Need Help?

See the full [DEPLOYMENT.md](./DEPLOYMENT.md) guide for:
- Detailed troubleshooting
- Custom domain setup
- Database migration
- Performance optimization
- Security best practices

---

## Common Issues

**"Can't connect to Strapi"**
- Check `NEXT_PUBLIC_STRAPI_URL` matches your Render URL exactly
- Make sure Strapi is running (check Render dashboard)

**"Images not loading"**
- Go to Strapi → Settings → Upload
- Make sure images are uploaded and public

**"Build failed"**
- Check Vercel/Render logs
- Verify all environment variables are set
- Try running `npm run build` locally first

---

**Estimated Total Time:** 25-30 minutes  
**Monthly Cost:** Free for 90 days, then ~$7-27/month

