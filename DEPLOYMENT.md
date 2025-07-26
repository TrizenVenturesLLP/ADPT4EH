# CapRover Deployment Guide for Extrahand

This guide will help you deploy your React Native web app to CapRover.

## Prerequisites

1. **CapRover Server**: A running CapRover instance
2. **Git Repository**: Your code should be in a Git repository
3. **Docker**: CapRover uses Docker for containerization

## Files Created for Deployment

### 1. `Dockerfile`
- Multi-stage build for optimized image size
- Builds the web app and serves it with nginx
- Uses Node.js 18 Alpine for building
- Uses nginx Alpine for serving

### 2. `nginx.conf`
- Nginx configuration for serving the React app
- Handles SPA routing (React Router)
- Includes security headers
- Enables gzip compression
- Health check endpoint at `/health`

### 3. `captain-definition`
- CapRover configuration file
- Defines app name, ports, and health checks
- Enables SSL and custom domains

### 4. `.dockerignore`
- Excludes unnecessary files from Docker build
- Reduces build context size

## Deployment Steps

### Step 1: Prepare Your Repository

1. **Commit all changes**:
   ```bash
   git add .
   git commit -m "Prepare for CapRover deployment"
   git push origin main
   ```

### Step 2: Access CapRover Dashboard

1. **Open your CapRover dashboard** (usually `https://captain.yourdomain.com`)
2. **Login** with your credentials

### Step 3: Create New App

1. **Click "One-Click Apps"** or **"Apps"** in the sidebar
2. **Click "Create New App"**
3. **Enter app name**: `extrahand` (or your preferred name)
4. **Click "Create App"**

### Step 4: Deploy from Git

1. **In your app dashboard**, go to **"Deployment"** tab
2. **Select "Git Repository"** as deployment method
3. **Enter your Git repository URL**:
   ```
   https://github.com/yourusername/your-repo-name.git
   ```
4. **Select branch**: `main` (or your default branch)
5. **Click "Deploy"**

### Step 5: Monitor Deployment

1. **Watch the deployment logs** in real-time
2. **Wait for build to complete** (usually 5-10 minutes)
3. **Check for any errors** in the logs

### Step 6: Access Your App

1. **Once deployed**, your app will be available at:
   ```
   https://extrahand.yourdomain.com
   ```
2. **Test the application** to ensure everything works

## Configuration Options

### Custom Domain

1. **In CapRover dashboard**, go to **"HTTP Settings"**
2. **Add your custom domain** (e.g., `app.yourdomain.com`)
3. **Configure DNS** to point to your CapRover server
4. **Enable SSL** for your custom domain

### Environment Variables

1. **In CapRover dashboard**, go to **"App Configs"**
2. **Add environment variables** if needed:
   ```
   NODE_ENV=production
   REACT_APP_API_URL=https://api.yourdomain.com
   ```

### Scaling

1. **In CapRover dashboard**, go to **"App Configs"**
2. **Adjust "Instance Count"** for horizontal scaling
3. **Set resource limits** if needed

## Troubleshooting

### Common Issues

1. **Build Fails**:
   - Check Docker logs in CapRover dashboard
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

2. **App Not Loading**:
   - Check nginx logs in CapRover dashboard
   - Verify the build output in `/dist` folder
   - Test the health check endpoint

3. **Routing Issues**:
   - Ensure nginx.conf has proper SPA routing
   - Check if React Router is configured correctly

### Useful Commands

```bash
# Build locally to test
npm run build:web

# Build Docker image locally
npm run build:docker

# Check Docker image
docker images | grep extrahand

# Run Docker container locally
docker run -p 8080:80 extrahand
```

## Monitoring

### Health Checks
- **Endpoint**: `/health`
- **Interval**: 30 seconds
- **Timeout**: 10 seconds
- **Retries**: 3

### Logs
- **Access logs**: `/var/log/nginx/access.log`
- **Error logs**: `/var/log/nginx/error.log`
- **View in CapRover dashboard** under "App Logs"

## Security Features

### Headers Included
- `X-Frame-Options`: SAMEORIGIN
- `X-XSS-Protection`: 1; mode=block
- `X-Content-Type-Options`: nosniff
- `Referrer-Policy`: no-referrer-when-downgrade
- `Content-Security-Policy`: Basic CSP

### SSL/TLS
- **Automatic SSL** with Let's Encrypt
- **Force HTTPS** enabled
- **HSTS** headers included

## Performance Optimizations

### Caching
- **Static assets**: 1 year cache
- **Gzip compression**: Enabled
- **CDN ready**: Static files optimized

### Build Optimizations
- **Multi-stage Docker build**: Smaller final image
- **Alpine Linux**: Minimal base images
- **Production build**: Optimized for performance

## Continuous Deployment

### Automatic Deployments
1. **Connect your Git repository** to CapRover
2. **Enable automatic deployments** on push
3. **Set up webhooks** for instant deployments

### Manual Deployments
```bash
# Trigger deployment from command line
npm run deploy:caprover
```

## Support

If you encounter issues:
1. **Check CapRover logs** in the dashboard
2. **Review Docker build logs**
3. **Test locally** with Docker
4. **Check nginx configuration**

---

**Your Extrahand app is now ready for production deployment on CapRover!** 🚀 