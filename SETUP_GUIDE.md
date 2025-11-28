# 🚀 Quick Setup Guide - QCELL Beams CMS

Follow these steps to get your Next.js + Payload CMS application running.

## Step 1: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages including:
- Next.js 15
- Payload CMS 3.0
- MongoDB driver
- TypeScript
- Tailwind CSS
- And more...

## Step 2: Setup MongoDB

You have two options:

### Option A: Local MongoDB (Recommended for Development)

1. **Download MongoDB Community Edition:**
   - Windows: https://www.mongodb.com/try/download/community
   - Mac: `brew install mongodb-community`
   - Linux: Follow instructions at mongodb.com

2. **Start MongoDB:**
   - Windows: MongoDB service should start automatically
   - Mac/Linux: `brew services start mongodb-community` or `sudo systemctl start mongod`

3. **Verify it's running:**
   ```bash
   # Open MongoDB shell
   mongosh
   # You should see a connection message
   ```

The `.env` file is already configured for local MongoDB!

### Option B: MongoDB Atlas (Cloud - Free)

1. **Create account:**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for free (no credit card required)

2. **Create cluster:**
   - Click "Build a Database"
   - Choose "Free" tier (M0)
   - Select a region close to you
   - Click "Create Cluster"

3. **Setup access:**
   - Click "Database Access" → "Add New Database User"
   - Create username and password (save these!)
   - Click "Network Access" → "Add IP Address"
   - Choose "Allow Access from Anywhere" (for development)

4. **Get connection string:**
   - Click "Connect" → "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your password
   - Example: `mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/qcell-beams`

5. **Update `.env` file:**
   ```
   MONGODB_URI=mongodb+srv://youruser:yourpassword@cluster0.xxxxx.mongodb.net/qcell-beams
   ```

## Step 3: Start the Development Server

```bash
npm run dev
```

You should see:

```
 ✓ Ready in 2.5s
 ○ Local:   http://localhost:3000
```

## Step 4: Create Your First Admin User

1. **Open your browser:**
   ```
   http://localhost:3000/admin
   ```

2. **Create admin account:**
   - Enter your email
   - Choose a strong password
   - Enter your name
   - Click "Create First User"

3. **You're in!** You should now see the Payload CMS admin panel.

## Step 5: Start Adding Content

### Add Your First Project

1. Click **"Projects"** in the left sidebar
2. Click **"Create New"**
3. Fill in the fields:
   - Title: "QCELL Tesla Megapack 2 Grade Beams"
   - Slug: "qcell-megapack-2"
   - Customer: "QCELL"
   - Fabricator: "Lindsay Precast"
   - Quantities, descriptions, etc.
4. Click **"Save"**

### Upload Media

1. Click **"Media"** in the sidebar
2. Drag and drop your images or PDFs
3. Add alt text and category
4. Click "Save"

### Add Beam Types

1. Click **"Beam Types"**
2. Click **"Create New"**
3. Add details for center beams and end beams
4. Link them back to your project

## 📱 Access Points

- **Public Website:** http://localhost:3000
- **Admin Panel:** http://localhost:3000/admin
- **API:** http://localhost:3000/api

## 🎉 You're All Set!

Your CMS is now running and ready to manage content for your QCELL project.

## 🆘 Troubleshooting

### "Cannot connect to MongoDB"

- **Local:** Make sure MongoDB service is running
- **Atlas:** Check your connection string, username, and password
- **Network:** Ensure no firewall is blocking port 27017

### "Port 3000 already in use"

```bash
# Use a different port
npm run dev -- -p 3001
```

### "Module not found" errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Still having issues?

1. Check that Node.js version is 18 or higher: `node --version`
2. Ensure MongoDB is running: `mongosh` should connect
3. Check the `.env` file exists and has correct values
4. Try restarting the dev server

## 🚀 Next Steps

1. **Customize collections:** Edit files in `src/collections/`
2. **Update frontend:** Modify pages in `src/app/(frontend)/`
3. **Add more content:** Use the admin panel to populate your database
4. **Deploy:** When ready, deploy to Vercel (see README.md)

---

**Need help?** Check the full README.md for more detailed information!

