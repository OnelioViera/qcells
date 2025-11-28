# 🎨 Homepage Editing - Quick Reference

## 🚀 How to Edit Your Homepage

### In Strapi Admin:

1. **Go to:** http://localhost:1337/admin
2. **Click:** "Content Manager" (left sidebar)
3. **Under "SINGLE TYPES"**, click: **"Homepage"**
4. **Edit any field you want**
5. **Click:** "Save" then "Publish"
6. **Visit:** http://localhost:3000 (changes appear in 60 seconds)

---

## 📝 Editable Fields:

### Hero Section
| Field | Purpose | Example |
|-------|---------|---------|
| `heroTitle` | Main heading first part | "Tesla Megapack 2" |
| `heroSubtitle` | Highlighted second part | "Grade Beams" |
| `heroDescription` | Paragraph below title | Your full description |
| `heroImage` | Optional hero image | Upload any image |

### Company Logos
| Field | Purpose |
|-------|---------|
| `companyLogos` | Partner logos (QCELL, Tesla, etc.) |

**Upload multiple logos** and they'll display in a nice row!

### Statistics
| Field | Purpose | Example |
|-------|---------|---------|
| `stat1Value` | First number | "69" |
| `stat1Label` | First description | "Total Beams" |
| `stat2Value` | Second number | "354.5"" |
| `stat2Label` | Second description | "Max Length" |
| `stat3Value` | Third number | "4500" |
| `stat3Label` | Third description | "PSI Strength" |

---

## 📸 How to Upload Company Logos:

### Option 1: Upload in Homepage Editor
1. Edit Homepage in Content Manager
2. Scroll to "Company Logos"
3. Click **"Add new entry"**
4. Upload or select from Media Library
5. Repeat for each logo (QCELL, Tesla, Lindsay Precast, etc.)

### Option 2: Upload to Media Library First
1. Go to **Media Library**
2. Upload all logos
3. Go to Homepage editor
4. Select logos from Media Library

**Tip:** Upload logos as PNG with transparent backgrounds for best results!

---

## ⚡ First Time Setup:

**If you haven't created the Homepage Single Type yet:**

Follow the complete guide: **`HOMEPAGE_SETUP_GUIDE.md`**

Quick steps:
1. Content-Type Builder → Create new **Single Type**
2. Name: `Homepage`
3. Add all fields (see guide for details)
4. Save and restart
5. Edit content in Content Manager

---

## 🎯 Example Content:

```
Hero Title: "Tesla Megapack 2"
Hero Subtitle: "Grade Beams"
Hero Description: "Custom precast concrete foundation beams engineered and manufactured for QCELL's Tesla Megapack 2 battery energy storage systems"

Stat 1: "69" - "Total Beams Manufactured"
Stat 2: "354.5"" - "Maximum Beam Length"  
Stat 3: "4500" - "PSI Concrete Strength"

Company Logos: [QCELL logo, Tesla logo, Lindsay Precast logo]
```

---

## 🔄 Making Changes:

1. **Edit in Strapi** (Content Manager → Homepage)
2. **Save and Publish**
3. **Wait 60 seconds** (or hard refresh with Ctrl+Shift+R)
4. **See changes** at http://localhost:3000

---

## 💡 Advanced Tips:

### Rich Text for Hero Description
- You can change `heroDescription` to **Rich Text** type for formatting
- Allows bold, italic, links, lists, etc.

### Additional Hero Fields
Add more fields if needed:
- Call-to-action button text
- Secondary description
- Video URL
- Background color

### Conditional Display
Fields are optional - if you don't fill them in, they won't show!

---

## ✅ Checklist:

- [ ] Created Homepage Single Type in Strapi
- [ ] Added all fields (hero, logos, stats)
- [ ] Saved and restarted Strapi
- [ ] Configured API permissions (Public → Homepage → find)
- [ ] Edited Homepage content in Content Manager
- [ ] Published the content
- [ ] Verified changes on http://localhost:3000

---

**Need help?** See `HOMEPAGE_SETUP_GUIDE.md` for complete step-by-step instructions!

