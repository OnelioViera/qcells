# Company Logos with Links - Strapi Update Guide

## 🎯 Overview

This guide will help you update your Homepage to support clickable company logos that link to company websites.

---

## 📋 Step-by-Step Instructions

### **Step 1: Create a New Component**

1. **Open Strapi Admin:** http://localhost:1337/admin
2. **Go to:** Content-Type Builder
3. **Click:** "Create new component" (button in the top right)
4. **Component settings:**
   - **Display name:** `Company Logo`
   - **Category:** `homepage` (or create new category)
   - **Icon:** Choose any (e.g., 🏢 building icon)
5. **Click:** "Continue"

### **Step 2: Add Fields to Company Logo Component**

Add these three fields to the `Company Logo` component:

#### **Field 1: Company Name** (Optional but recommended)
- **Type:** Text
- **Name:** `name`
- **Settings:**
  - **Type:** Short text
  - **Placeholder:** `e.g., Lindsay Precast, Q CELLS`

#### **Field 2: Logo Image** (Required)
- **Type:** Media
- **Name:** `logo`
- **Settings:**
  - **Type:** Single media
  - **Allowed types:** ✅ Images only
  - **Required field:** ✅ Yes

#### **Field 3: Company URL** (Optional)
- **Type:** Text
- **Name:** `url`
- **Settings:**
  - **Type:** Short text
  - **Placeholder:** `https://example.com`
  - **Advanced Settings → VALIDATION:**
    - **Regular expression pattern:** `^https?://.*`
    - **Help text:** `Must start with http:// or https://`

6. **Click:** "Finish" after adding all fields
7. **Wait** for Strapi to restart (~10-30 seconds)

---

### **Step 3: Update Homepage Content Type**

1. **Go to:** Content-Type Builder
2. **Under SINGLE TYPES:** Click "Homepage"
3. **Find the field:** `companyLogos`
4. **Delete the old field:**
   - Click the pencil/edit icon next to `companyLogos`
   - Scroll down and click "Delete" button
   - **Confirm** the deletion

5. **Add the new field:**
   - Click "+ Add another field"
   - **Select:** Component
   - **Settings:**
     - **Name:** `companyLogos`
     - **Select a component:** Choose `homepage.Company Logo` (the one you just created)
     - **Type:** ✅ Repeatable component
   - Click "Finish"

6. **Click:** "Save" (top right)
7. **Wait** for Strapi to restart

---

### **Step 4: Configure Permissions**

1. **Go to:** Settings → Roles → Public
2. **Find:** Homepage
3. **Enable:** ✅ `find`
4. **Click:** "Save"

---

### **Step 5: Re-add Your Company Logos with Links**

1. **Go to:** Content Manager → Homepage (under SINGLE TYPES)
2. **Scroll to:** Company Logos section
3. **Click:** "+ Add an entry" for each company

**For each company:**
   - **Name:** `Lindsay Precast` (optional, for alt text)
   - **Logo:** Upload or select the logo image
   - **URL:** `https://lindsayprecast.com` (or the actual URL)

**Example entries:**

#### Company 1:
- Name: `Lindsay Precast`
- Logo: (upload your Lindsay logo)
- URL: `https://lindsayprecast.com`

#### Company 2:
- Name: `Q CELLS`
- Logo: (upload your Q CELLS logo)
- URL: `https://qcells.com`

4. **Click:** "Save"
5. **Click:** "Publish"

---

## ✅ Testing

1. **Visit:** http://localhost:3000
2. **Scroll to:** "Trusted Partners" section
3. **Click on a logo** - it should open the company website in a new tab!

---

## 🎨 Features

Your company logos now have:
- ✅ **Clickable links** to company websites
- ✅ **Open in new tab** (doesn't navigate away from your site)
- ✅ **Optional URLs** (logos without URLs still display, just not clickable)
- ✅ **Proper alt text** using the company name
- ✅ **Security** (`rel="noopener noreferrer"` on all external links)

---

## 🔧 Troubleshooting

### **Component not showing up?**
- Make sure you clicked "Finish" when creating the component
- Wait for Strapi to fully restart (check terminal)
- Refresh your browser

### **Logos not appearing on frontend?**
- Check that you've published the Homepage content
- Make sure Public role has `find` permission for Homepage
- Clear browser cache and refresh

### **Links not working?**
- Ensure URLs start with `http://` or `https://`
- Check browser console for errors
- Verify the URL field has a value in Strapi

---

## 📚 Related Files

The following files have been updated to support clickable logos:
- `src/lib/types.ts` - Added `CompanyLogo` interface
- `src/app/(frontend)/page.tsx` - Updated to render clickable links
- `src/lib/strapi.ts` - Updated to use deep population

---

**Need help?** Check the Strapi documentation or ask for assistance!

