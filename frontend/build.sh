#!/bin/bash

# Vercel Build Script for Frontend
echo "🚀 Building Jiva Organics Frontend for Vercel..."

# Install dependencies
echo "📦 Installing dependencies..."
yarn install --frozen-lockfile

# Build the application
echo "🔨 Building application..."
yarn build

# Verify build
if [ -d "build" ]; then
    echo "✅ Build successful! Output directory: build/"
    echo "📊 Build size:"
    du -sh build/
else
    echo "❌ Build failed!"
    exit 1
fi

echo "✨ Ready for deployment!"
