# 📦 Strapi Content Types Setup Guide

Complete step-by-step guide to create all content types in Strapi.

## 🎯 Overview

You'll create 5 main content types:
1. **Project** - Main project information
2. **Beam Type** - Center and end beam specifications
3. **Manufacturing Step** - Production process steps
4. **Rebar Config** - Reinforcement configurations
5. **Technical Spec** - Standards and specifications

---

## 🚀 Getting Started

1. **Open Strapi Admin:** http://localhost:1337/admin
2. **Login** with your admin credentials
3. Click **"Content-Type Builder"** in the left sidebar

---

## 1️⃣ Create "Project" Content Type

### Step 1: Create Collection
1. Click **"Create new collection type"**
2. Display name: `Project`
3. Click **"Continue"**

### Step 2: Add Fields

#### Basic Information Fields

**Field 1: Title**
- Click "Add another field"
- Select **"Text"**
- Name: `title`
- Type: Short text
- Click "Advanced Settings" tab
  - ✅ Required field
  - ✅ Unique field
- Click "Finish"

**Field 2: Slug**
- Select **"UID"**
- Name: `slug`
- Attached field: `title`
- Click "Finish"

**Field 3: Customer**
- Select **"Text"**
- Name: `customer`
- Type: Short text
- ✅ Required field
- Click "Finish"

**Field 4: Fabricator**
- Select **"Text"**
- Name: `fabricator`
- Type: Short text
- ✅ Required field
- Click "Finish"

**Field 5: Description**
- Select **"Rich Text"**
- Name: `description`
- Click "Finish"

#### Quantity Fields

**Field 6: Total Quantity**
- Select **"Number"**
- Name: `totalQuantity`
- Number format: integer
- Click "Finish"

**Field 7: Center Beams**
- Select **"Number"**
- Name: `centerBeams`
- Number format: integer
- Click "Finish"

**Field 8: End Beams**
- Select **"Number"**
- Name: `endBeams`
- Number format: integer
- Click "Finish"

**Field 9: Total Weight**
- Select **"Number"**
- Name: `totalWeight`
- Number format: decimal
- Click "Finish"

#### Status Fields

**Field 10: Status**
- Select **"Enumeration"**
- Name: `status`
- Values (one per line):
  ```
  draft
  active
  completed
  archived
  ```
- Default value: `active`
- ✅ Required field
- Click "Finish"

**Field 11: Featured**
- Select **"Boolean"**
- Name: `featured`
- Default value: `false`
- Click "Finish"

#### Media Field

**Field 12: Hero Image**
- Select **"Media"**
- Name: `heroImage`
- Type: Single media
- Allowed types: images
- Click "Finish"

### Step 3: Add Relationships (We'll add these after creating other content types)

Click **"Save"** and wait for Strapi to restart.

---

## 2️⃣ Create "Beam Type" Content Type

### Step 1: Create Collection
1. Click **"Create new collection type"**
2. Display name: `Beam Type`
3. Click **"Continue"**

### Step 2: Add Fields

**Field 1: Name**
- Select **"Text"**
- Name: `name`
- Type: Short text
- ✅ Required field
- ✅ Unique field
- Click "Finish"

**Field 2: Type**
- Select **"Enumeration"**
- Name: `type`
- Values:
  ```
  center
  end
  ```
- ✅ Required field
- Click "Finish"

**Field 3: Length**
- Select **"Number"**
- Name: `length`
- Number format: decimal
- Click "Finish"

**Field 4: Width**
- Select **"Number"**
- Name: `width`
- Number format: decimal
- Click "Finish"

**Field 5: Height**
- Select **"Number"**
- Name: `height`
- Number format: decimal
- Click "Finish"

**Field 6: Weight**
- Select **"Number"**
- Name: `weight`
- Number format: decimal
- Click "Finish"

**Field 7: Description**
- Select **"Rich Text"**
- Name: `description`
- Click "Finish"

**Field 8: Technical Drawing**
- Select **"Media"**
- Name: `technicalDrawing`
- Type: Single media
- Click "Finish"

Click **"Save"** and wait for restart.

---

## 3️⃣ Create "Manufacturing Step" Content Type

### Step 1: Create Collection
1. Click **"Create new collection type"**
2. Display name: `Manufacturing Step`
3. Click **"Continue"**

### Step 2: Add Fields

**Field 1: Title**
- Select **"Text"**
- Name: `title`
- Type: Short text
- ✅ Required field
- Click "Finish"

**Field 2: Step Number**
- Select **"Number"**
- Name: `stepNumber`
- Number format: integer
- ✅ Required field
- Click "Finish"

**Field 3: Description**
- Select **"Rich Text"**
- Name: `description`
- Click "Finish"

**Field 4: Duration**
- Select **"Text"**
- Name: `duration`
- Type: Short text
- Click "Finish"

**Field 5: Equipment**
- Select **"Text"**
- Name: `equipment`
- Type: Long text
- Click "Finish"

**Field 6: Images**
- Select **"Media"**
- Name: `images`
- Type: Multiple media
- Allowed types: images
- Click "Finish"

Click **"Save"** and wait for restart.

---

## 4️⃣ Create "Rebar Config" Content Type

### Step 1: Create Collection
1. Click **"Create new collection type"**
2. Display name: `Rebar Config`
3. Click **"Continue"**

### Step 2: Add Fields

**Field 1: Name**
- Select **"Text"**
- Name: `name`
- Type: Short text
- ✅ Required field
- Click "Finish"

**Field 2: Bar Size**
- Select **"Text"**
- Name: `barSize`
- Type: Short text
- Click "Finish"

**Field 3: Spacing**
- Select **"Text"**
- Name: `spacing`
- Type: Short text
- Click "Finish"

**Field 4: Cover**
- Select **"Text"**
- Name: `cover`
- Type: Short text
- Click "Finish"

**Field 5: Total Linear Feet**
- Select **"Number"**
- Name: `totalLinearFeet`
- Number format: decimal
- Click "Finish"

**Field 6: Drawings**
- Select **"Media"**
- Name: `drawings`
- Type: Multiple media
- Click "Finish"

Click **"Save"** and wait for restart.

---

## 5️⃣ Create "Technical Spec" Content Type

### Step 1: Create Collection
1. Click **"Create new collection type"**
2. Display name: `Technical Spec`
3. Click **"Continue"**

### Step 2: Add Fields

**Field 1: Name**
- Select **"Text"**
- Name: `name`
- Type: Short text
- ✅ Required field
- Click "Finish"

**Field 2: Category**
- Select **"Text"**
- Name: `category`
- Type: Short text
- Click "Finish"

**Field 3: Value**
- Select **"Text"**
- Name: `value`
- Type: Short text
- ✅ Required field
- Click "Finish"

**Field 4: Unit**
- Select **"Text"**
- Name: `unit`
- Type: Short text
- Click "Finish"

**Field 5: Standard**
- Select **"Text"**
- Name: `standard`
- Type: Short text
- Placeholder: "e.g., ACI 318, ASTM C150"
- Click "Finish"

Click **"Save"** and wait for restart.

---

## 6️⃣ Add Relationships to Project

Now that all content types are created, add relationships to the Project type:

### Step 1: Edit Project Content Type
1. Go to **Content-Type Builder**
2. Click on **"Project"** in the left panel
3. Click **"Add another field"**

### Step 2: Add Beam Types Relation
- Select **"Relation"**
- Right side: Select **"Beam Type"**
- Relation type: **Project has many Beam Types**
  (The icon should show: Project (many-to-many) Beam Type)
- Field name (Project side): `beamTypes`
- Click "Finish"

### Step 3: Add Manufacturing Steps Relation
- Click "Add another field"
- Select **"Relation"**
- Right side: Select **"Manufacturing Step"**
- Relation type: **Project has many Manufacturing Steps**
- Field name: `manufacturingSteps`
- Click "Finish"

### Step 4: Add Rebar Configs Relation
- Click "Add another field"
- Select **"Relation"**
- Right side: Select **"Rebar Config"**
- Relation type: **Project has many Rebar Configs**
- Field name: `rebarConfigs`
- Click "Finish"

### Step 5: Add Technical Specs Relation
- Click "Add another field"
- Select **"Relation"**
- Right side: Select **"Technical Spec"**
- Relation type: **Project has many Technical Specs**
- Field name: `technicalSpecs`
- Click "Finish"

Click **"Save"** and wait for final restart.

---

## 7️⃣ Configure API Permissions

### Step 1: Go to Settings
1. Click **"Settings"** in the left sidebar
2. Under "Users & Permissions Plugin", click **"Roles"**
3. Click on **"Public"**

### Step 2: Enable Permissions

For each content type, check these permissions:

**Project:**
- ✅ find
- ✅ findOne

**Beam-type:**
- ✅ find
- ✅ findOne

**Manufacturing-step:**
- ✅ find
- ✅ findOne

**Rebar-config:**
- ✅ find
- ✅ findOne

**Technical-spec:**
- ✅ find
- ✅ findOne

**Upload (for media):**
- ✅ upload

Click **"Save"** at the top right.

---

## ✅ You're Done!

Your Strapi backend is now fully configured with all content types!

### Next Steps:

1. **Add Content:**
   - Go to "Content Manager" in the sidebar
   - Start creating projects, beam types, etc.

2. **Test the API:**
   - Visit: http://localhost:1337/api/projects
   - You should see an empty array: `{"data":[],"meta":{"pagination":{...}}}`

3. **View in Next.js:**
   - Start your Next.js frontend: `npm run dev`
   - Visit: http://localhost:3000/projects
   - Your projects will appear here!

---

## 🎉 Sample Data to Get Started

Create your first project:

1. Go to **Content Manager** → **Project** → **Create new entry**

2. Fill in:
   - **Title:** "QCELL Tesla Megapack 2 Grade Beams"
   - **Slug:** (auto-generated)
   - **Customer:** "QCELL"
   - **Fabricator:** "Lindsay Precast"
   - **Description:** "Precision-engineered precast concrete foundation beams..."
   - **Total Quantity:** 100
   - **Center Beams:** 60
   - **End Beams:** 40
   - **Total Weight:** 250000
   - **Status:** active
   - **Featured:** ✅ Yes

3. Click **"Save"** then **"Publish"**

4. Visit http://localhost:3000/projects to see it!

---

**Need help?** Refer to the main README.md or QUICK_START.md for more details.

