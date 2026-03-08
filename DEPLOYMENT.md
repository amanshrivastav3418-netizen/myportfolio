# 🚀 Vercel Deployment Guide

## Quick Deploy Options

### **Option 1: Use Vercel CLI (Fastest)**

The CLI deployment process requires these steps:

```bash
# Step 1: Install Vercel CLI (if not already done)
npm install -g vercel

# Step 2: Login to Vercel
vercel login

# Step 3: Deploy to production
vercel --prod
```

**The CLI will ask you:**
1. Link existing project or create new? → Create new
2. Project name? → `aman-portfolio` (or your choice)
3. Framework? → `Next.js`
4. Root directory? → `.` (current directory)

Then it deploys automatically! ✨

---

### **Option 2: Deploy via GitHub (Easiest for Long-term)**

1. **Push to GitHub:**
   ```bash
   # Initialize git repo
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your portfolio repo
   - Click "Deploy"
   - Done! 🎉

---

### **Option 3: Manual Upload (No Git/GitHub)**

1. **Go to:** https://vercel.com/new
2. **Choose:** "Other" (for manual upload)
3. **Upload:** Zip your project folder
4. **Configure:**
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. **Deploy!**

---

## ✅ What Happens After Deploy

Once deployed, you'll get:

```
✓ Live URL like: https://aman-portfolio.vercel.app
✓ Auto-generated custom domain
✓ HTTPS enabled
✓ Automatic deployments on changes (if using Git)
✓ Free tier with great performance
```

---

## 🔗 After Deployment

**Share your portfolio with:**
- Email: `https://aman-portfolio.vercel.app`
- LinkedIn: Add to profile
- Resume: Include the URL
- Portfolio sites: Submit to job boards

---

## ⚡ Next Steps

1. **If using CLI:**
   ```bash
   vercel login
   vercel --prod
   ```
   Then copy the URL from the output

2. **If using GitHub:**
   - Link your repo to Vercel
   - Automatic deploys on every push

3. **If manual:**
   - Upload and follow Vercel's prompts

---

**Your portfolio will be live in minutes! 🌟**

Once deployed, test it on the live URL and share it with potential employers/clients.
