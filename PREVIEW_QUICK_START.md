# Preview Feature - Quick Start

## What's Been Set Up

✅ Preview API routes (`/api/preview` and `/api/disable-preview`)  
✅ Preview banner (shows yellow bar when in preview mode)  
✅ Strapi plugin configuration  
✅ Environment variable support  

## Quick Setup (5 minutes)

### Step 1: Add Environment Variables

**Create/Edit `.env.local` in your project root:**
```env
STRAPI_PREVIEW_SECRET=my-secret-preview-token-123
```

**Add to `backend-cms/.env`:**
```env
CLIENT_URL=http://localhost:3003
STRAPI_PREVIEW_SECRET=my-secret-preview-token-123
```

**Important:** Use the SAME token in both files!

### Step 2: Restart Both Servers

```bash
# Terminal 1 - Restart Strapi
cd backend-cms
npm run develop

# Terminal 2 - Restart Next.js  
cd ..
npm run dev
```

### Step 3: Configure Preview in Strapi

#### For Projects:
1. Go to `http://localhost:1337/admin`
2. Click **Content-Type Builder**
3. Click **Project** (under Collection Types)
4. Click **Edit** icon
5. Click **Advanced Settings** tab
6. Find **"Preview"** section
7. Enter Preview URL:
   ```
   http://localhost:3003/api/preview?secret=my-secret-preview-token-123&contentType=project&slug={slug}
   ```
8. Click **Save**

#### For Homepage:
1. In **Content-Type Builder**
2. Click **Homepage** (under Single Types)
3. Click **Edit** icon
4. Click **Advanced Settings** tab
5. Enter Preview URL:
   ```
   http://localhost:3003/api/preview?secret=my-secret-preview-token-123&contentType=homepage
   ```
6. Click **Save**

### Step 4: Test It!

1. **Edit a project** in Strapi (don't publish)
2. **Look for the "Preview" button** (top right, near Save/Publish)
3. **Click "Preview"**
4. **A new tab opens** showing your changes
5. **Yellow banner appears** at bottom: "Preview Mode: You are viewing draft/unpublished content"

### Step 5: Exit Preview

Click **"Exit Preview"** button in the yellow banner at the bottom.

## Troubleshooting

**"Preview button doesn't show"**
- Make sure you've saved the Preview URL configuration
- Reload the Strapi admin page

**"Invalid token" error**
- Double-check the tokens match in both `.env` files
- Make sure you restarted both servers

**No yellow banner appears**
- Preview mode might not be active
- Try visiting `/api/disable-preview` then click Preview again

## How It Works

1. **Click Preview** in Strapi → Opens `http://localhost:3003/api/preview?secret=...`
2. **Next.js validates** the secret token
3. **Enables draft mode** → Can now see unpublished content
4. **Redirects** to the appropriate page (project or homepage)
5. **Yellow banner shows** to indicate preview mode is active
6. **Click "Exit Preview"** → Returns to normal mode (only published content)

That's it! You can now preview your content before publishing! 🎉

