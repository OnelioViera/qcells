# 🚀 Quick Start - Get Running in 10 Minutes

## What You Have Now

✅ **Clean Next.js frontend** - All Payload removed  
✅ **Fresh Strapi backend** - Ready for PostgreSQL  
✅ **Complete documentation** - Step-by-step guides

## Your Next Steps

### Step 1: Set Up PostgreSQL (5 minutes)

**Easiest Option: Supabase (Recommended)**

1. Follow: `backend-cms/SUPABASE_QUICK_START.md`
2. Get your database connection details
3. Update `backend-cms/.env` file

**Alternative: Local PostgreSQL**
- See `backend-cms/SETUP.md` for installation

### Step 2: Start Strapi Backend (2 minutes)

```bash
cd backend-cms
npm run develop
```

- Opens: http://localhost:1337/admin
- Create your first admin user
- You'll see the Strapi admin panel

### Step 3: Create Content Types (10-15 minutes)

In Strapi admin, create these collections:

#### 1. Projects
- Go to Content-Type Builder → Create new collection type → **"Project"**
- Add fields:
  - `title` (Text, required)
  - `slug` (UID, based on title)
  - `customer` (Text, required)
  - `fabricator` (Text)
  - `description` (Rich Text)
  - `totalQuantity` (Number)
  - `centerBeams` (Number)
  - `endBeams` (Number)
  - `totalWeight` (Number)
  - `status` (Enumeration: draft, active, completed, archived)
  - `featured` (Boolean)
  - `heroImage` (Media, single)

#### 2. Beam Types
- Content-Type Builder → Create **"Beam Type"**
- Add fields:
  - `name` (Text, required)
  - `type` (Enumeration: center, end)
  - `length` (Number)
  - `width` (Number)
  - `height` (Number)
  - `weight` (Number)
  - `description` (Rich Text)
  - `technicalDrawing` (Media)

#### 3. Manufacturing Steps
- Create **"Manufacturing Step"**
- Add fields:
  - `title` (Text, required)
  - `stepNumber` (Number, required)
  - `description` (Rich Text)
  - `duration` (Text)
  - `equipment` (Text)
  - `images` (Media, multiple)

#### 4. Rebar Configurations
- Create **"Rebar Config"**
- Add fields:
  - `name` (Text, required)
  - `barSize` (Text)
  - `spacing` (Text)
  - `cover` (Text)
  - `totalLinearFeet` (Number)
  - `drawings` (Media, multiple)

#### 5. Technical Specifications
- Create **"Technical Spec"**
- Add fields:
  - `name` (Text, required)
  - `category` (Text)
  - `value` (Text, required)
  - `unit` (Text)
  - `standard` (Text) - e.g., "ACI 318", "ASTM C150"

### Step 4: Add Relationships (5 minutes)

In **Project** content type:
- Add Relation field → "beamTypes" → Relation to "Beam Type" (many-to-many)
- Add Relation field → "manufacturingSteps" → Relation to "Manufacturing Step" (many-to-many)
- Add Relation field → "rebarConfigs" → Relation to "Rebar Config" (many-to-many)
- Add Relation field → "technicalSpecs" → Relation to "Technical Spec" (many-to-many)

Save and restart Strapi when prompted.

### Step 5: Configure API Permissions (2 minutes)

1. In Strapi admin: Settings → Users & Permissions → Roles → Public
2. Check permissions for:
   - ✅ **Project:** `find` and `findOne`
   - ✅ **Beam Type:** `find` and `findOne`
   - ✅ **Manufacturing Step:** `find` and `findOne`
   - ✅ **Rebar Config:** `find` and `findOne`
   - ✅ **Technical Spec:** `find` and `findOne`
   - ✅ **Upload:** `upload` (for media)
3. Click **Save**

Now your API is public and Next.js can fetch data!

### Step 6: Test Your API (1 minute)

Open in browser:
```
http://localhost:1337/api/projects
```

You should see JSON response (empty array if no projects yet).

### Step 7: Add Sample Content (5 minutes)

1. Content Manager → Projects → Create new entry
2. Fill in:
   - Title: "QCELL Tesla Megapack 2 Grade Beams"
   - Slug: Auto-generated
   - Customer: "QCELL"
   - Fabricator: "Lindsay Precast"
   - Description: Your project details
   - Quantities: Fill in numbers
   - Status: "active"
   - Featured: Yes
3. Click **Save** then **Publish**

Create some Beam Types, Manufacturing Steps, etc.

### Step 8: Start Next.js Frontend (1 minute)

Open a **new terminal** (keep Strapi running):

```bash
# From project root
npm run dev
```

Opens: http://localhost:3000

### Step 9: Connect Frontend to Strapi (Next Phase)

Create API utilities in your Next.js app:

```typescript
// src/lib/strapi.ts
const STRAPI_URL = 'http://localhost:1337'

export async function getProjects() {
  const res = await fetch(`${STRAPI_URL}/api/projects?populate=*`, {
    next: { revalidate: 60 } // ISR - revalidate every 60 seconds
  })
  return res.json()
}

export async function getProject(slug: string) {
  const res = await fetch(
    `${STRAPI_URL}/api/projects?filters[slug][$eq]=${slug}&populate=*`,
    { next: { revalidate: 60 } }
  )
  return res.json()
}
```

Use in your pages:

```tsx
// src/app/(frontend)/projects/page.tsx
import { getProjects } from '@/lib/strapi'

export default async function ProjectsPage() {
  const { data } = await getProjects()
  
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((project: any) => (
          <div key={project.id} className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">
              {project.attributes.title}
            </h2>
            <p className="text-gray-600">{project.attributes.customer}</p>
            <p className="mt-4">{project.attributes.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
```

## 📂 File Structure

```
qcells/
├── backend-cms/               ← Strapi CMS (Port 1337)
│   ├── config/
│   ├── src/api/              ← Your content types appear here
│   ├── .env                  ← Database config
│   └── SETUP.md              ← Detailed setup instructions
│
├── src/                      ← Next.js Frontend (Port 3000)
│   ├── app/
│   │   └── (frontend)/       ← Your public pages
│   └── lib/                  ← API utilities (create this)
│
└── README.md                 ← Full documentation
```

## 🎯 Checklist

- [ ] PostgreSQL database set up (Supabase or local)
- [ ] Strapi running on http://localhost:1337
- [ ] Admin user created
- [ ] Content types created (Projects, Beam Types, etc.)
- [ ] API permissions configured (Public role)
- [ ] Sample content added
- [ ] Next.js running on http://localhost:3000
- [ ] API utilities created in Next.js
- [ ] Data displaying on frontend

## 🆘 Troubleshooting

### Strapi won't start
- Check `.env` file has correct database credentials
- Verify PostgreSQL is running (or Supabase project is active)
- Try: `npm install` then `npm run develop`

### Can't access API
- Check API permissions: Settings → Roles → Public
- Enable `find` and `findOne` for your collections
- Save and restart Strapi

### Next.js can't fetch data
- Ensure Strapi is running on port 1337
- Check API URL in your code
- Try accessing API directly in browser first

### Need help?
- See `backend-cms/SETUP.md` for detailed instructions
- See `backend-cms/SUPABASE_QUICK_START.md` for database setup
- See main `README.md` for complete documentation

## 🎉 You're Ready!

Once you complete these steps, you'll have:
- ✅ Strapi CMS managing your content
- ✅ PostgreSQL storing everything
- ✅ Next.js frontend displaying it beautifully
- ✅ Full API access for mobile apps/other clients

**Next:** Start building out your frontend pages and connecting them to the Strapi API!
