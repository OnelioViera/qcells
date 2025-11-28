# Strapi Preview Setup Guide

This guide will help you set up the preview feature in Strapi CMS so you can preview content before publishing.

## Step 1: Add Environment Variables

### In your Next.js project root (`.env.local`):
```env
STRAPI_PREVIEW_SECRET=your-secret-preview-token-change-this
```

### In your Strapi project (`backend-cms/.env`):
```env
CLIENT_URL=http://localhost:3003
STRAPI_PREVIEW_SECRET=your-secret-preview-token-change-this
```

**Important:** Use the same secret token in both files!

## Step 2: Configure Preview in Strapi Admin

### For Projects:

1. **Go to Strapi Admin** → `http://localhost:1337/admin`
2. **Click "Content-Type Builder"** in the left sidebar
3. **Click "Project"** under Collection Types
4. **Click "Configure the view"** button (top right)
5. **Click "Settings" tab**
6. **Enable "Draft & Publish"** (if not already enabled)
7. **In the "Preview" section:**
   - **Preview URL:** `http://localhost:3003/api/preview?secret=your-secret-preview-token-change-this&contentType=project&slug={slug}`
   - Replace `your-secret-preview-token-change-this` with your actual secret token
8. **Click "Save"**

### For Homepage:

1. **Go to Strapi Admin** → `http://localhost:1337/admin`
2. **Click "Content-Type Builder"** in the left sidebar
3. **Click "Homepage"** under Single Types
4. **Click "Configure the view"** button (top right)
5. **Click "Settings" tab**
6. **In the "Preview" section:**
   - **Preview URL:** `http://localhost:3003/api/preview?secret=your-secret-preview-token-change-this&contentType=homepage`
   - Replace `your-secret-preview-token-change-this` with your actual secret token
7. **Click "Save"**

## Step 3: Test the Preview

1. **Edit a Project or Homepage** in Strapi
2. **Make some changes** (don't publish yet)
3. **Click the "Preview" button** (should appear in the top right)
4. **A new tab will open** showing your changes in preview mode
5. **You'll see your unpublished changes** on the Next.js frontend

## Step 4: Exit Preview Mode

To exit preview mode and see only published content:
- Visit: `http://localhost:3003/api/disable-preview`

## How Preview Works

1. **Draft Mode**: When you click "Preview" in Strapi, Next.js enters "Draft Mode"
2. **Unpublished Content**: The frontend will fetch and display unpublished/draft content
3. **Temporary**: Preview mode is only active for your browser session
4. **Secure**: Requires a secret token to prevent unauthorized access

## Troubleshooting

### Preview button doesn't appear
- Make sure "Draft & Publish" is enabled for the content type
- Verify the Preview URL is configured correctly

### "Invalid token" error
- Make sure the secret token matches in both `.env.local` and `backend-cms/.env`
- Restart both Next.js and Strapi servers after changing environment variables

### Preview shows published content
- Clear your browser cache
- Try in an incognito/private window
- Visit `/api/disable-preview` first, then try preview again

## Production Setup

For production, update the URLs:

### In Next.js (`.env.production`):
```env
STRAPI_PREVIEW_SECRET=your-production-secret-token
```

### In Strapi Preview URL:
```
https://your-production-domain.com/api/preview?secret=your-production-secret-token&contentType=project&slug={slug}
```

## Security Notes

- **Keep your preview secret token secure** and never commit it to version control
- Use a **strong, random token** for production
- The preview API route validates the secret before enabling preview mode
- Preview mode is session-based and temporary

