#!/bin/bash

# =================================
# GitHub Secrets Setup Helper
# =================================
# This script helps you set up GitHub secrets

set -e

echo "🔐 GitHub Secrets Setup Helper"
echo "================================"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    print_warning "GitHub CLI not found. Please install it:"
    echo "  macOS: brew install gh"
    echo "  Linux: https://github.com/cli/cli/blob/trunk/docs/install_linux.md"
    echo ""
    echo "After installing, run: gh auth login"
    echo ""
    echo "Then run this script again."
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    print_warning "Not authenticated with GitHub. Running gh auth login..."
    gh auth login
fi

print_success "GitHub CLI is ready!"
echo ""

# Get repository name
REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner)
print_info "Setting secrets for repository: $REPO"
echo ""

# Function to set a secret
set_secret() {
    local secret_name=$1
    local secret_description=$2
    
    echo ""
    print_info "$secret_description"
    read -sp "Enter value for $secret_name (input hidden): " secret_value
    echo ""
    
    if [ -n "$secret_value" ]; then
        echo "$secret_value" | gh secret set "$secret_name"
        print_success "$secret_name set successfully"
    else
        print_warning "$secret_name skipped (empty value)"
    fi
}

echo "Let's set up your GitHub secrets..."
echo ""

# Vercel secrets
print_info "=== VERCEL SECRETS ==="
print_info "Get these from: https://vercel.com/account/tokens"
echo ""
set_secret "VERCEL_TOKEN" "Your Vercel API Token"
set_secret "VERCEL_ORG_ID" "Your Vercel Organization ID"
set_secret "VERCEL_PROJECT_ID" "Your Vercel Project ID"

# Render secret
echo ""
print_info "=== RENDER SECRET ==="
print_info "Get this from: Render Dashboard → Service → Settings → Deploy Hook"
echo ""
set_secret "RENDER_DEPLOY_HOOK" "Your Render Deploy Hook URL"

echo ""
print_success "All secrets have been set!"
print_info "You can view them at: https://github.com/$REPO/settings/secrets/actions"

