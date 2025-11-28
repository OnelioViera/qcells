# 🏠 Homepage Content Type Setup Guide

This guide shows you how to make your home page fully editable through Strapi CMS.

## What You'll Be Able to Edit:

- ✅ Hero title (e.g., "Tesla Megapack 2")
- ✅ Hero subtitle (e.g., "Grade Beams")
- ✅ Hero description
- ✅ Hero images
- ✅ Company logos (QCELL, Tesla, etc.)
- ✅ Statistics (numbers and labels)

---

## 📋 Step-by-Step Instructions

### Step 1: Create Homepage Single Type

1. **Open Strapi Admin:** http://localhost:1337/admin
2. **Click "Content-Type Builder"** in the left sidebar
3. Under **"SINGLE TYPES"** section, click the **"+"** button
4. **Display name:** `Homepage`
5. Click **"Continue"**

---

### Step 2: Add Hero Section Fields

#### Field 1: Hero Title
- Click **"Add another field"**
- Select **"Text"**
- **Name:** `heroTitle`
- **Type:** Short text
- Click **"ADVANCED SETTINGS"** tab
  - ✅ **Required field**
  - **Default value:** `Tesla Megapack 2`
- Click **"Finish"**

#### Field 2: Hero Subtitle
- Click **"Add another field"**
- Select **"Text"**
- **Name:** `heroSubtitle`
- **Type:** Short text
- **Default value:** `Grade Beams`
- Click **"Finish"**

#### Field 3: Hero Description
- Click **"Add another field"**
- Select **"Text"**
- **Name:** `heroDescription`
- **Type:** Long text
- **Default value:** `Custom precast concrete foundation beams engineered and manufactured for QCELL's Tesla Megapack 2 battery energy storage systems`
- Click **"Finish"**

#### Field 4: Hero Image (Optional)
- Click **"Add another field"**
- Select **"Media"**
- **Name:** `heroImage`
- **Type:** Single media
- **Allowed types:** Images only
- Click **"Finish"**

#### Field 5: Hero Background Image (Optional)
- Click **"Add another field"**
- Select **"Media"**
- **Name:** `heroBackgroundImage`
- **Type:** Single media
- **Allowed types:** Images only
- Click **"Finish"**

---

### Step 3: Add Company Logos Field

#### Field 6: Company Logos
- Click **"Add another field"**
- Select **"Media"**
- **Name:** `companyLogos`
- **Type:** **Multiple media** ← Important!
- **Allowed types:** Images only
- Click **"Finish"**

---

### Step 4: Add Statistics Fields

#### Statistic 1 - Value
- Click **"Add another field"**
- Select **"Text"**
- **Name:** `stat1Value`
- **Type:** Short text
- **Default value:** `69`
- Click **"Finish"**

#### Statistic 1 - Label
- Click **"Add another field"**
- Select **"Text"**
- **Name:** `stat1Label`
- **Type:** Short text
- **Default value:** `Total Beams Manufactured`
- Click **"Finish"**

#### Statistic 2 - Value
- Click **"Add another field"**
- Select **"Text"**
- **Name:** `stat2Value`
- **Type:** Short text
- **Default value:** `354.5"`
- Click **"Finish"**

#### Statistic 2 - Label
- Click **"Add another field"**
- Select **"Text"**
- **Name:** `stat2Label`
- **Type:** Short text
- **Default value:** `Maximum Beam Length`
- Click **"Finish"**

#### Statistic 3 - Value
- Click **"Add another field"**
- Select **"Text"**
- **Name:** `stat3Value`
- **Type:** Short text
- **Default value:** `4500`
- Click **"Finish"**

#### Statistic 3 - Label
- Click **"Add another field"**
- Select **"Text"**
- **Name:** `stat3Label`
- **Type:** Short text
- **Default value:** `PSI Concrete Strength`
- Click **"Finish"**

---

### Step 5: Save and Restart

1. Click **"Save"** button (top left)
2. **Wait for Strapi to restart** (10-30 seconds)
3. You'll see "The server is restarting" message

---

### Step 6: Configure API Permissions

1. Go to **Settings** → **Users & Permissions Plugin** → **Roles**
2. Click **"Public"**
3. Scroll down to **"Homepage"** section
4. Enable permissions:
   - ✅ **find**
5. Click **"Save"** (top right)

---

### Step 7: Edit Your Homepage Content

1. Go to **Content Manager** in the left sidebar
2. Under **"SINGLE TYPES"**, click **"Homepage"**
3. You'll see all your fields!

#### Fill in Your Content:

**Hero Section:**
- **Hero Title:** `Tesla Megapack 2` (or whatever you want)
- **Hero Subtitle:** `Grade Beams`
- **Hero Description:** Your custom description
- **Hero Image:** Upload or select an image (optional)

**Company Logos:**
- Click **"Add an entry"**
- Upload company logos (QCELL, Tesla, etc.)
- Add multiple logos - they'll display in a row

**Statistics:**
- **Stat 1 Value:** `69`
- **Stat 1 Label:** `Total Beams Manufactured`
- **Stat 2 Value:** `354.5"`
- **Stat 2 Label:** `Maximum Beam Length`
- **Stat 3 Value:** `4500`
- **Stat 3 Label:** `PSI Concrete Strength`

4. Click **"Save"**
5. Click **"Publish"**

---

### Step 8: View Your Changes!

1. Go to **http://localhost:3000**
2. Your home page now shows the content from Strapi!
3. **Any changes you make in Strapi will appear on your website within 60 seconds!**

---

## 🎨 What You Can Now Edit:

### From Strapi Admin Panel:

| Field | What It Does | Example |
|-------|--------------|---------|
| **heroTitle** | Main heading (first part) | "Tesla Megapack 2" |
| **heroSubtitle** | Highlighted text (second part) | "Grade Beams" |
| **heroDescription** | Paragraph below title | Your custom text |
| **heroImage** | Image in hero section | Upload any image |
| **companyLogos** | Partner logos row | QCELL, Tesla logos |
| **stat1Value** | First statistic number | "69" |
| **stat1Label** | First statistic label | "Total Beams" |
| **stat2Value** | Second statistic | "354.5"" |
| **stat2Label** | Second label | "Max Length" |
| **stat3Value** | Third statistic | "4500" |
| **stat3Label** | Third label | "PSI Strength" |

---

## 💡 Tips:

### Upload Company Logos:
1. Go to **Media Library** first
2. Upload all your logos (QCELL, Tesla, Lindsay Precast, etc.)
3. Then in Homepage editor, select them from the media library
4. They'll appear as a nice row of logos on your homepage

### Change Anytime:
- Edit the Homepage in Strapi
- Save and publish
- Refresh your website (http://localhost:3000)
- Changes appear immediately!

### Add More Fields Later:
- You can always add more fields to Homepage
- Go to Content-Type Builder → Homepage
- Add new fields
- Save and restart

---

## 🎯 Quick Start:

**Right now, follow these steps:**

1. ✅ Code is updated (done)
2. ⏳ **Create Homepage Single Type** (follow steps above - 10 minutes)
3. ⏳ **Edit Homepage content** in Strapi
4. ⏳ **View at http://localhost:3000**

---

## 📸 Visual Preview:

Once set up, your homepage will show:
- ✅ Custom hero title and subtitle
- ✅ Editable description
- ✅ Company logos in a row (QCELL, Tesla, etc.)
- ✅ Three customizable statistics
- ✅ All images from Strapi

**Everything editable without touching code!** 🎉

---

**Ready to create the Homepage Single Type? Follow the steps above in your Strapi admin panel!** 🚀

