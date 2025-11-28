# ✅ Deployment Checklist

Use this checklist to ensure a smooth deployment.

## Pre-Deployment

- [ ] All code is committed and pushed to GitHub
- [ ] Local builds succeed (`npm run build` and `cd backend-cms && npm run build`)
- [ ] All environment variables documented
- [ ] Generated secure secrets (`npm run generate-secrets`)
- [ ] Database backup created (if migrating)
- [ ] Reviewed `DEPLOYMENT.md` documentation

## Render Setup (Strapi)

- [ ] Created Render account
- [ ] Connected GitHub repository
- [ ] Created Blueprint deployment from `render.yaml`
- [ ] PostgreSQL database auto-created
- [ ] Set all environment variables from `ENV_PRODUCTION_TEMPLATE.txt`
- [ ] First deployment completed successfully
- [ ] Noted Strapi URL: `___________________________`
- [ ] Tested Strapi admin access: `https://your-app.onrender.com/admin`
- [ ] Created admin account
- [ ] Configured public permissions

## Vercel Setup (Next.js)

- [ ] Created Vercel account
- [ ] Connected GitHub repository
- [ ] Added environment variables from `ENV_PRODUCTION_TEMPLATE.txt`
- [ ] Set `NEXT_PUBLIC_STRAPI_URL` to Render URL
- [ ] First deployment completed successfully
- [ ] Noted Vercel URL: `___________________________`
- [ ] Tested website loads correctly
- [ ] Images display properly
- [ ] Links work correctly

## Cross-Platform Configuration

- [ ] Updated `STRAPI_ADMIN_CLIENT_URL` in Render to point to Vercel
- [ ] Updated `NEXTAUTH_URL` in Vercel with correct URL
- [ ] Verified CORS settings allow Vercel domain
- [ ] Tested API connectivity between platforms

## Content Setup

- [ ] Uploaded logo to Strapi
- [ ] Created at least one project
- [ ] Published all content types
- [ ] Tested content appears on website
- [ ] Verified homepage displays correctly
- [ ] Checked footer renders properly

## GitHub Actions (Optional)

- [ ] Generated deployment tokens
- [ ] Set GitHub repository secrets:
  - [ ] `VERCEL_TOKEN`
  - [ ] `VERCEL_ORG_ID`
  - [ ] `VERCEL_PROJECT_ID`
  - [ ] `RENDER_DEPLOY_HOOK`
- [ ] Tested workflow with test commit
- [ ] Verified auto-deployment works

## Security

- [ ] All secrets are securely generated (not default values)
- [ ] No `.env` files committed to repository
- [ ] SSL/HTTPS enabled on both platforms
- [ ] Admin passwords are strong and unique
- [ ] Database connection uses SSL
- [ ] API tokens are secure

## Performance & Monitoring

- [ ] Enabled Vercel Analytics (optional)
- [ ] Set up uptime monitoring (optional)
- [ ] Configured error tracking (optional)
- [ ] Reviewed performance scores
- [ ] Tested site speed

## Custom Domain (Optional)

- [ ] Purchased domain name
- [ ] Configured DNS for Vercel:
  - [ ] A record or CNAME
  - [ ] Verified in Vercel dashboard
  - [ ] SSL certificate generated
- [ ] Configured subdomain for Strapi (optional):
  - [ ] Added custom domain in Render
  - [ ] Updated DNS records
  - [ ] Updated environment variables with new URLs

## Post-Deployment Testing

- [ ] Homepage loads without errors
- [ ] Navigation works correctly
- [ ] Projects page displays
- [ ] Individual project pages work
- [ ] Images load correctly
- [ ] Footer displays properly
- [ ] Forms work (if applicable)
- [ ] Mobile view is responsive
- [ ] Cross-browser testing completed
- [ ] Admin panel accessible and functional

## Documentation

- [ ] Updated README with live URLs
- [ ] Documented any custom configurations
- [ ] Created backup strategy documentation
- [ ] Shared access with team members
- [ ] Documented maintenance procedures

## Final Steps

- [ ] Notified stakeholders of go-live
- [ ] Shared live URLs with team
- [ ] Created bookmark/shortcut for admin panel
- [ ] Set up regular backup schedule
- [ ] Scheduled first maintenance check

---

## Emergency Contacts

**Vercel Support:** https://vercel.com/support  
**Render Support:** https://render.com/support  
**Strapi Docs:** https://docs.strapi.io  

---

## Rollback Plan

If something goes wrong:

1. **Vercel:** Dashboard → Deployments → Select previous → Promote to Production
2. **Render:** Dashboard → Deploys → Select previous → Manual Deploy
3. **Database:** Restore from backup if needed

---

**Date Deployed:** _______________  
**Deployed By:** _______________  
**Production URLs:**
- Website: _______________
- Strapi: _______________

---

**🎉 Congratulations on your successful deployment!**

