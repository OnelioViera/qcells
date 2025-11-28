#!/bin/bash

# =================================
# QCELLS Deployment Script
# =================================
# This script helps deploy the application

set -e

echo "🚀 QCELLS Deployment Helper"
echo "============================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# Check if git is clean
if [[ -n $(git status -s) ]]; then
    print_warning "You have uncommitted changes."
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_error "Deployment cancelled"
        exit 1
    fi
fi

# Build and test locally first
print_info "Building Next.js locally..."
npm run build || {
    print_error "Next.js build failed"
    exit 1
}
print_success "Next.js build successful"

print_info "Building Strapi locally..."
cd backend-cms
npm run build || {
    print_error "Strapi build failed"
    exit 1
}
cd ..
print_success "Strapi build successful"

# Push to GitHub (triggers CI/CD)
print_info "Current branch: $(git branch --show-current)"
read -p "Push to GitHub and trigger deployment? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_info "Pushing to GitHub..."
    git push origin $(git branch --show-current)
    print_success "Pushed to GitHub!"
    print_info "GitHub Actions will now deploy to Vercel and Render"
    print_info "Check progress at: https://github.com/$(git config --get remote.origin.url | sed 's/.*:\(.*\)\.git/\1/')/actions"
else
    print_warning "Deployment cancelled"
fi

echo ""
print_success "Deployment process complete!"

