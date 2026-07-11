# Vercel Deployment Quick Start

## 🚀 Quick Deploy to Vercel

### Step 1: Prepare MongoDB Database
1. Create a free MongoDB Atlas account: https://www.mongodb.com/cloud/atlas/register
2. Create a cluster and get your connection string
3. Format: `mongodb+srv://username:password@cluster.mongodb.net/`

### Step 2: Deploy Frontend to Vercel

#### Option A: Using Vercel Dashboard (Easiest)
1. Push code to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Configure:
   - **Root Directory**: `frontend`
   - **Framework Preset**: Create React App
   - **Build Command**: `yarn build`
   - **Output Directory**: `build`
   - **Install Command**: `yarn install`

5. Add Environment Variable:
   - `REACT_APP_BACKEND_URL`: `https://your-backend-url.vercel.app`

6. Click Deploy!

#### Option B: Using Vercel CLI
```bash
cd /app/frontend
vercel
```

### Step 3: Deploy Backend to Vercel

1. Create a new project for backend
2. Configure:
   - **Root Directory**: `backend`
   - **Framework Preset**: Other
   - **Build Command**: (leave empty)

3. Add Environment Variables:
   - `MONGO_URL`: Your MongoDB connection string
   - `DB_NAME`: `jiva_organics`

4. Deploy!

### Step 4: Update Frontend Environment

Once backend is deployed, update frontend environment variable:
1. Go to frontend project settings
2. Environment Variables
3. Update `REACT_APP_BACKEND_URL` with your backend URL
4. Redeploy

## 📱 Your Live URLs

- **Frontend**: https://jiva-organics-frontend.vercel.app
- **Backend API**: https://jiva-organics-backend.vercel.app
- **API Health Check**: https://jiva-organics-backend.vercel.app/api/health

## 🔧 Alternative: Deploy as Monorepo

If you want to deploy both frontend and backend together:

1. Use the root `/app/vercel.json` configuration
2. Deploy from root directory
3. Vercel will handle both frontend and backend

## 📝 Environment Variables Needed

### Frontend (.env.production)
```
REACT_APP_BACKEND_URL=https://your-backend.vercel.app
```

### Backend
```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=jiva_organics
```

## ✅ Verification Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Database user created with password
- [ ] Network access configured (0.0.0.0/0)
- [ ] Backend deployed to Vercel
- [ ] Backend environment variables set
- [ ] Frontend deployed to Vercel
- [ ] Frontend REACT_APP_BACKEND_URL updated
- [ ] API health check working: /api/health
- [ ] Frontend loads and displays correctly

## 🎯 Pro Tips

1. **Custom Domain**: Add your domain in Vercel project settings
2. **Auto Deploy**: Enable automatic deployments from GitHub
3. **Preview URLs**: Every PR gets a unique preview URL
4. **Analytics**: Enable Vercel Analytics for insights
5. **Logs**: Check function logs in Vercel dashboard for debugging

## 🆘 Common Issues

### CORS Error
- Check CORS middleware in backend/api/index.py
- Ensure frontend URL is in allowed origins

### API Not Found
- Verify `/api` prefix in all API routes
- Check backend deployment logs

### Build Fails
- Run `yarn build` locally first
- Check package.json for missing dependencies

### MongoDB Connection Error
- Verify connection string format
- Check network access in MongoDB Atlas
- Ensure password doesn't contain special characters (URL encode if needed)

## 📚 Resources

- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas: https://docs.atlas.mongodb.com/
- React Deployment: https://create-react-app.dev/docs/deployment/

---

**Need Help?** Check the detailed guide in `README_VERCEL.md`
