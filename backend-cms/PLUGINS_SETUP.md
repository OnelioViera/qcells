# Strapi Plugins Setup Guide

## Installed Plugins

### 1. SEO Plugin (@strapi/plugin-seo)
**Purpose:** Add SEO metadata to your content types

**How to Use:**
1. Go to any Content Type in Strapi admin
2. You'll see an "SEO" component section
3. Add meta title, description, keywords, Open Graph data, etc.

**Enabled on:** All content types automatically

---

### 2. Config Sync (strapi-plugin-config-sync)
**Purpose:** Sync content type configurations between environments

**How to Use:**
1. After making changes to content types locally
2. Run: `npm run strapi config:sync:export`
3. Commit the files in `config/sync/`
4. On production (Render), changes will sync automatically on restart

**Commands:**
- Export: `npm run strapi config:sync:export`
- Import: `npm run strapi config:sync:import`

---

### 3. Cloudinary Upload Provider (@strapi/provider-upload-cloudinary)
**Purpose:** Store images on Cloudinary instead of local filesystem (Required for Render!)

**Setup for Production:**

#### Step 1: Create Cloudinary Account
1. Go to https://cloudinary.com/users/register/free
2. Sign up for free account
3. Get your credentials from Dashboard

#### Step 2: Add Environment Variables to Render
In Render dashboard, add these environment variables to your Strapi service:

```
UPLOAD_PROVIDER=cloudinary
CLOUDINARY_NAME=your-cloud-name
CLOUDINARY_KEY=your-api-key
CLOUDINARY_SECRET=your-api-secret
```

#### Step 3: Redeploy
After adding environment variables, Render will automatically redeploy.

**Note:** Local development will continue using local file storage. Only production uses Cloudinary.

---

## Why These Plugins?

1. **SEO** - Makes your website discoverable on Google
2. **Config Sync** - Easy deployment of content type changes
3. **Cloudinary** - Render has ephemeral storage, so you MUST use cloud storage for images in production

---

## Next Steps

1. ✅ Plugins are installed
2. ⏳ Set up Cloudinary account before deploying to production
3. ⏳ Add Cloudinary environment variables to Render
4. ✅ Start using SEO fields in your content

---

## Accessing Plugins in Strapi Admin

After restarting Strapi:
- **SEO:** Shows up as a component in your content types
- **Config Sync:** Settings → Config Sync (left sidebar)
- **Cloudinary:** Automatically handles uploads when configured

