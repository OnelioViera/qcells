# QCELL Tesla Megapack 2 Grade Beams

A modern full-stack application for managing and showcasing precision-engineered precast concrete projects.

## 🏗️ Architecture

This project consists of two parts:

### **Backend (Strapi CMS)** - `backend-cms/`
- **Strapi 5** headless CMS
- **PostgreSQL** database
- **REST & GraphQL APIs**
- **Admin Panel:** http://localhost:1337/admin
- Manages all content (projects, beam types, specifications, media, etc.)

### **Frontend (Next.js)** - Main folder
- **Next.js 15** with App Router
- **React 19** & TypeScript
- **Tailwind CSS** for styling
- **Public Website:** http://localhost:3000
- Consumes Strapi API to display content

## 🚀 Quick Start

### 1. Setup Backend (Strapi)

```bash
cd backend-cms
npm install
```

**Configure PostgreSQL:**
- See `backend-cms/SETUP.md` for detailed database setup
- Option 1: Supabase (free, easy, recommended)
- Option 2: Local PostgreSQL

**Start Strapi:**
```bash
npm run develop
```

Access admin panel: http://localhost:1337/admin
Create your first admin user when prompted.

### 2. Setup Frontend (Next.js)

In a **new terminal**:

```bash
# From project root
npm install
npm run dev
```

Access website: http://localhost:3000

## 📦 Content Types

Create these in Strapi admin panel:

### Projects
- Title, slug, customer, fabricator
- Hero image and descriptions
- Quantities (center beams, end beams, total weight)
- Relationships to beam types, manufacturing steps, rebar configs, technical specs
- Featured flag and status

### Beam Types
- Name, type (center/end)
- Dimensions (length, width, height, weight)
- Technical drawings
- Material specifications

### Manufacturing Steps
- Step number, title, description
- Duration, equipment needed
- Process photos/videos

### Rebar Configurations
- Configuration name
- Bar sizes, spacing, cover
- Total linear feet
- Technical drawings (PDFs)

### Technical Specifications
- Spec name, category
- Value, unit of measure
- Standards compliance (ACI, ASTM, etc.)

### Media
- Images, PDFs, documents
- Alt text, captions, categories
- Auto-resizing and optimization

## 🔌 API Integration

The Next.js frontend will fetch data from Strapi:

```typescript
// Example: Fetch projects
const response = await fetch('http://localhost:1337/api/projects?populate=*')
const data = await response.json()
```

Strapi provides:
- **REST API:** `http://localhost:1337/api`
- **GraphQL API:** `http://localhost:1337/graphql`
- **Documentation:** `http://localhost:1337/documentation`

## 📁 Project Structure

```
qcells/
├── backend-cms/              # Strapi CMS Backend
│   ├── config/               # Database, server config
│   ├── src/
│   │   ├── api/              # Content types will be here
│   │   └── admin/            # Admin customizations
│   ├── .env                  # Database credentials
│   ├── package.json
│   └── SETUP.md              # Backend setup guide
│
├── src/                      # Next.js Frontend
│   ├── app/
│   │   ├── (frontend)/       # Public pages
│   │   │   ├── page.tsx      # Home page
│   │   │   └── projects/     # Projects listing
│   │   ├── layout.tsx
│   │   └── globals.css
│   └── lib/                  # API utilities (to be created)
│
├── public/                   # Static assets
├── package.json
└── README.md                 # This file
```

## 🎨 Frontend Development

### Fetch Data from Strapi

Create API utilities:

```typescript
// src/lib/strapi.ts
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

export async function getProjects() {
  const res = await fetch(`${STRAPI_URL}/api/projects?populate=*`)
  return res.json()
}
```

### Display in Components

```tsx
// src/app/(frontend)/projects/page.tsx
import { getProjects } from '@/lib/strapi'

export default async function ProjectsPage() {
  const { data } = await getProjects()
  
  return (
    <div>
      {data.map(project => (
        <div key={project.id}>
          <h2>{project.attributes.title}</h2>
          <p>{project.attributes.customer}</p>
        </div>
      ))}
    </div>
  )
}
```

## 🔐 Security

### Strapi API Tokens
- Create API tokens in Strapi admin: Settings → API Tokens
- Use tokens for authentication in production
- Never commit tokens to git

### Environment Variables

**Backend (.env):**
```env
DATABASE_URL=your-postgres-connection
APP_KEYS=generate-secure-keys
API_TOKEN_SALT=generate-secure-salt
```

**Frontend (.env.local):**
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-api-token
```

## 🚀 Deployment

### Deploy Backend (Strapi)

**Options:**
1. **Railway** - Easy, PostgreSQL included
2. **Heroku** - Classic choice
3. **DigitalOcean** - More control
4. **Strapi Cloud** - Official hosting

### Deploy Frontend (Next.js)

**Recommended: Vercel**

```bash
# Push to GitHub, then:
```
1. Go to vercel.com
2. Import your repository
3. Add environment variables:
   - `NEXT_PUBLIC_STRAPI_URL=your-strapi-url`
   - `STRAPI_API_TOKEN=your-token`
4. Deploy!

## 📚 Resources

- [Strapi Documentation](https://docs.strapi.io)
- [Next.js Documentation](https://nextjs.org/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Supabase Documentation](https://supabase.com/docs)

## 🛠️ Development Commands

### Backend (in backend-cms/)
```bash
npm run develop    # Start with auto-reload
npm run start      # Production mode
npm run build      # Build admin panel
npm run strapi     # View all commands
```

### Frontend (in root/)
```bash
npm run dev        # Development server
npm run build      # Production build
npm start          # Production server
npm run lint       # Check for errors
```

## 💡 Tips

1. **Start backend first** - Frontend needs API to be running
2. **Use populate parameter** - Strapi requires `?populate=*` to include relations
3. **Enable CORS** - Configure in `backend-cms/config/middlewares.ts` if needed
4. **Image optimization** - Strapi handles this automatically
5. **Backup database** - Regular PostgreSQL backups recommended

## 📞 Support

Created for QCELL Tesla Megapack 2 Grade Beams project.

---

**Ready to get started?** 

1. Set up PostgreSQL (see `backend-cms/SETUP.md`)
2. Start Strapi: `cd backend-cms && npm run develop`
3. Create admin user at http://localhost:1337/admin
4. Start Next.js: `npm run dev`
5. Build your content types and start creating! 🎉
