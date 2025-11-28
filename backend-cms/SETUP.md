# Strapi Backend Setup Guide

## PostgreSQL Database Setup

You need a PostgreSQL database. Here are your options:

### Option 1: Supabase (Recommended - Free & Easy)

1. **Create Account:**
   - Go to https://supabase.com
   - Sign up for free (no credit card required)

2. **Create Project:**
   - Click "New Project"
   - Name: `qcells-cms`
   - Database Password: Choose a strong password (save it!)
   - Region: Choose closest to you
   - Click "Create new project" (takes 1-2 minutes)

3. **Get Connection Details:**
   - Go to Project Settings → Database
   - Under "Connection string", find the **Connection pooling** section
   - Copy the "Connection string" (Transaction mode)
   - It looks like: `postgresql://postgres.[project-ref]:[password]@aws-0-us-east-1.pooler.supabase.com:5432/postgres`

4. **Update `.env` file:**
   ```env
   DATABASE_CLIENT=postgres
   DATABASE_HOST=aws-0-us-east-1.pooler.supabase.com
   DATABASE_PORT=5432
   DATABASE_NAME=postgres
   DATABASE_USERNAME=postgres.[your-project-ref]
   DATABASE_PASSWORD=your-password-here
   DATABASE_SSL=true
   ```

   Or use the connection URL format:
   ```env
   DATABASE_URL=your-connection-string-from-supabase
   ```

### Option 2: Local PostgreSQL

1. **Install PostgreSQL:**
   - Download from: https://www.postgresql.org/download/windows/
   - Run installer with default settings
   - Remember the password you set for `postgres` user

2. **Create Database:**
   ```bash
   psql -U postgres
   CREATE DATABASE qcells_cms;
   \q
   ```

3. **Update `.env` file:**
   ```env
   DATABASE_CLIENT=postgres
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_NAME=qcells_cms
   DATABASE_USERNAME=postgres
   DATABASE_PASSWORD=your-postgres-password
   DATABASE_SSL=false
   ```

## Starting Strapi

Once your database is configured:

```bash
cd backend-cms
npm run develop
```

This will:
- Start Strapi on http://localhost:1337
- Open the admin panel at http://localhost:1337/admin
- Prompt you to create your first admin user

## First Time Setup

1. Navigate to http://localhost:1337/admin
2. Create your admin account:
   - First name
   - Last name
   - Email
   - Password (at least 8 characters)
3. Click "Let's start"

You're ready to create content types!

## Troubleshooting

### "Connection refused" or "ECONNREFUSED"
- Check that PostgreSQL is running
- Verify your database credentials in `.env`
- For Supabase: Check your connection string is correct

### "Authentication failed"
- Double-check your database password
- For Supabase: Make sure you're using the pooler connection string

### Port 1337 already in use
```bash
# Change PORT in .env file
PORT=1338
```

## Next Steps

After Strapi is running, you'll create content types for:
- Projects
- Beam Types
- Manufacturing Steps
- Rebar Configurations
- Technical Specifications
- Media

See the main README.md for the complete project structure.

