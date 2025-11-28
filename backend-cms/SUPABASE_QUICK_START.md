# Supabase PostgreSQL - Quick Start (5 Minutes)

## Why Supabase?
- ✅ **Free tier** - Perfect for development
- ✅ **No credit card** required
- ✅ **PostgreSQL included** - Fully managed
- ✅ **Fast setup** - 2-3 minutes
- ✅ **Reliable hosting** - Auto-backups included

## Step-by-Step Setup

### 1. Create Account (1 minute)
1. Go to https://supabase.com
2. Click **"Start your project"**
3. Sign up with **GitHub** (easiest) or email
4. Verify your email if needed

### 2. Create Project (2 minutes)
1. Click **"New Project"**
2. Fill in:
   - **Name:** `qcells-cms`
   - **Database Password:** Create a strong password
     - Example: `QcellsDB2024!Secure`
     - ⚠️ **SAVE THIS PASSWORD!** You'll need it
   - **Region:** Select closest to you
     - US East if you're in US
     - EU if you're in Europe
   - **Pricing Plan:** Free (already selected)
3. Click **"Create new project"**
4. Wait 1-2 minutes for database to initialize ☕

### 3. Get Connection String (1 minute)
1. In your project dashboard, click **"Project Settings"** (gear icon in sidebar)
2. Click **"Database"** in the left menu
3. Scroll down to **"Connection string"**
4. Select **"URI"** tab
5. Copy the connection string:
   ```
   postgresql://postgres.[REF]:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:5432/postgres
   ```
6. **Replace `[YOUR-PASSWORD]`** with the password you created in step 2

### 4. Configure Strapi (1 minute)
1. Open `backend-cms/.env` file
2. Update these lines:

   **Option A: Use individual settings (Recommended)**
   ```env
   DATABASE_CLIENT=postgres
   DATABASE_HOST=aws-0-us-east-1.pooler.supabase.com
   DATABASE_PORT=5432
   DATABASE_NAME=postgres
   DATABASE_USERNAME=postgres.[your-project-ref]
   DATABASE_PASSWORD=your-actual-password-here
   DATABASE_SSL=true
   ```

   **Option B: Use connection URL**
   ```env
   DATABASE_CLIENT=postgres
   DATABASE_URL=postgresql://postgres.[REF]:[PASSWORD]@aws-0-us-east-1.pooler.supabase.com:5432/postgres
   DATABASE_SSL=true
   ```

3. **Save the file**

### 5. Start Strapi!
```bash
cd backend-cms
npm run develop
```

You should see:
```
✨ Building administration panel...
✔ Administration panel built (XX.XXs)
[DATE] [strapi:admin] info: Starting Strapi administration...
[DATE] [strapi:admin] info: Administration panel available at http://localhost:1337/admin
```

### 6. Create Admin User
1. Open http://localhost:1337/admin in your browser
2. Fill in the registration form:
   - **First name:** Your first name
   - **Last name:** Your last name
   - **Email:** Your email address
   - **Password:** At least 8 characters
   - **Confirm password:** Same password
3. Click **"Let's start"**

## 🎉 Done!

You now have:
- ✅ Free PostgreSQL database on Supabase
- ✅ Strapi CMS running locally
- ✅ Admin account created
- ✅ Ready to build content types

## What's in Your Supabase Dashboard?

### Table Editor
- View all your Strapi tables
- See data in real-time
- Useful for debugging

### Database Backups
- Free tier: 7-day backup history
- Restore anytime from dashboard

### API Keys
- For direct database access (if needed)
- Strapi handles connections for you

### Usage Metrics
- Monitor database size
- Track API requests
- Free tier limits are generous

## Troubleshooting

### "Connection refused" error
**Check:**
1. Did you replace `[YOUR-PASSWORD]` in connection string?
2. Is `DATABASE_SSL=true` set? (Required for Supabase)
3. Did you copy the connection pooler URL? (not the direct connection)

**Fix:**
- Go back to Supabase → Project Settings → Database
- Copy the **"Connection pooling"** string (not "Direct connection")
- Update your `.env` file

### "Password authentication failed"
**Fix:**
- Reset your database password in Supabase:
  - Settings → Database → Reset database password
- Update `.env` with new password
- Restart Strapi

### Strapi won't start
**Check:**
- Is the `.env` file saved?
- Are there any typos in the connection string?
- Is port 1337 already in use?

**Try:**
```bash
# Clear node modules and reinstall
rm -rf node_modules
npm install
npm run develop
```

## Free Tier Limits

Supabase Free Tier includes:
- ✅ **500 MB database** - Plenty for your project
- ✅ **1 GB bandwidth/month** - Good for development
- ✅ **50 MB file storage** - For Strapi media
- ✅ **Unlimited API requests** - No limits!
- ✅ **2 concurrent connections** - Fine for dev
- ✅ **Auto-paused after 7 days of inactivity** - Just click to resume

## Production Tips

When you're ready to deploy:

1. **Upgrade to Pro** ($25/month) for:
   - No auto-pause
   - More storage (8 GB)
   - Better support
   - Daily backups

2. **Add IP restrictions** (Settings → Database → Network restrictions)

3. **Enable Point-in-Time Recovery** for better backups

4. **Monitor usage** in Supabase dashboard

## Next Steps

Now that your database is running:

1. ✅ Strapi is connected to PostgreSQL
2. ✅ Admin panel is accessible
3. ➡️ **Next:** Create your content types
   - Projects
   - Beam Types
   - Manufacturing Steps
   - Rebar Configurations
   - Technical Specifications
   - Media

See the main README.md for creating content types!

---

**Need help?** 
- Supabase Discord: https://discord.supabase.com
- Strapi Discord: https://discord.strapi.io

