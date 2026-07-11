# Jiva Organics - Vercel Deployment Guide

## Prerequisites
- Vercel account (sign up at https://vercel.com)
- MongoDB Atlas account (for database hosting)
- Vercel CLI installed: `npm i -g vercel`

## Project Structure
```
/app
├── frontend/          # React application
├── backend/           # FastAPI backend
│   └── api/
│       └── index.py   # Vercel serverless function
├── vercel.json        # Vercel configuration
└── .vercelignore      # Files to ignore during deployment
```

## Environment Variables

You need to set these environment variables in Vercel:

### Required Variables:
1. **MONGO_URL** - Your MongoDB connection string
   - Get from MongoDB Atlas: https://cloud.mongodb.com
   - Format: `mongodb+srv://username:password@cluster.mongodb.net/`

2. **DB_NAME** - Database name (e.g., `jiva_organics`)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import project to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your repository
   - Configure project:
     - Framework Preset: Other
     - Root Directory: `.` (root)
     - Build Command: `cd frontend && yarn build`
     - Output Directory: `frontend/build`
     - Install Command: `cd frontend && yarn install`

3. **Add Environment Variables**
   - Go to Project Settings > Environment Variables
   - Add:
     - `MONGO_URL`: Your MongoDB connection string
     - `DB_NAME`: Your database name (e.g., `jiva_organics`)

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at: `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Login to Vercel**
   ```bash
   vercel login
   ```

2. **Deploy**
   ```bash
   cd /app
   vercel
   ```

3. **Add Environment Variables**
   ```bash
   vercel env add MONGO_URL
   vercel env add DB_NAME
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Frontend Configuration

Update the frontend environment variable for production:

Create `/app/frontend/.env.production`:
```
REACT_APP_BACKEND_URL=https://your-project.vercel.app
```

## MongoDB Atlas Setup (Free Tier)

1. **Create MongoDB Atlas Account**
   - Go to https://www.mongodb.com/cloud/atlas/register
   - Create a free M0 cluster

2. **Configure Database Access**
   - Go to Database Access
   - Add a database user with username and password
   - Remember these credentials

3. **Configure Network Access**
   - Go to Network Access
   - Add IP Address: `0.0.0.0/0` (Allow access from anywhere)
   - Note: For production, restrict to specific IPs

4. **Get Connection String**
   - Go to your cluster
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password

## Testing Your Deployment

1. **Test Frontend**
   ```
   https://your-project.vercel.app
   ```

2. **Test API**
   ```
   https://your-project.vercel.app/api/
   https://your-project.vercel.app/api/health
   ```

## Custom Domain (Optional)

1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

### API Not Working
- Check environment variables are set correctly
- Verify MongoDB connection string
- Check API logs in Vercel dashboard

### CORS Issues
- Ensure CORS middleware is properly configured
- Check allowed origins in backend/api/index.py

## Monitoring

- **Analytics**: Enable in Vercel Dashboard > Analytics
- **Logs**: View in Vercel Dashboard > Deployments > Function Logs
- **Performance**: Check Core Web Vitals in Analytics

## Support

For issues:
- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com/

## Notes

- Vercel has a 10-second execution limit for serverless functions
- Free tier includes:
  - 100 GB bandwidth
  - Unlimited static sites
  - Serverless function executions
- Consider upgrading for production apps with high traffic
