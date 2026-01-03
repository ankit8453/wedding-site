# 🚀 Deployment Guide - Push to GitHub & Host on Vercel

## Step 1: Push to GitHub

### Commands to run in PowerShell:

```powershell
# Navigate to your project
cd C:\Users\HP\Desktop\wedding\wedding-site

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit with a message
git commit -m "Initial commit - Priya & Mihir Royal Indian Wedding Website"

# Create GitHub repository and push (you'll need GitHub CLI installed)
# Option A: Using GitHub CLI (recommended)
gh repo create priya-mihir-wedding --public --source=. --push

# Option B: If you don't have GitHub CLI, create repo manually on GitHub.com
# Then run these commands (replace YOUR_USERNAME):
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/priya-mihir-wedding.git
git push -u origin main
```

## Step 2: Deploy to Vercel

### Method 1: Using Vercel Website (Easiest)

1. Go to **https://vercel.com**
2. Sign up/Login with GitHub
3. Click **"Add New Project"**
4. **Import** your `priya-mihir-wedding` repository
5. Vercel will auto-detect Vite
6. Click **"Deploy"**
7. Done! Your site will be live in ~2 minutes

### Method 2: Using Vercel CLI

```powershell
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (run from wedding-site folder)
cd C:\Users\HP\Desktop\wedding\wedding-site
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? priya-mihir-wedding
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

## Step 3: Your Site Will Be Live! 🎉

You'll get a URL like:
- **https://priya-mihir-wedding.vercel.app**

---

## Quick Reference Commands

### If you make changes later:

```powershell
# Navigate to project
cd C:\Users\HP\Desktop\wedding\wedding-site

# Add changes
git add .

# Commit
git commit -m "Updated wedding details"

# Push to GitHub
git push

# Vercel will auto-deploy! (if connected to GitHub)
```

---

## Troubleshooting

### Don't have GitHub CLI?

Install it:
```powershell
winget install --id GitHub.cli
```

Or download from: https://cli.github.com/

### Don't have Git?

Install it:
```powershell
winget install --id Git.Git
```

Or download from: https://git-scm.com/download/win

### Vercel Deploy Fails?

Make sure your `package.json` has correct build command:
```json
"scripts": {
  "build": "vite build"
}
```

---

## Environment Variables (If Needed Later)

When you set up Google Sheets RSVP:

1. In Vercel Dashboard
2. Go to **Settings → Environment Variables**
3. Add your variables
4. Redeploy

---

## Custom Domain (Optional)

1. In Vercel Dashboard
2. Go to **Settings → Domains**
3. Add your custom domain
4. Follow DNS configuration steps

---

**That's it! Your royal Indian wedding website will be live! 🎊**

