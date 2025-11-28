#!/usr/bin/env node

/**
 * Generate secure secrets for production deployment
 * Run: node scripts/generate-secrets.js
 */

const crypto = require('crypto');

console.log('🔐 Secure Secrets Generator');
console.log('===========================\n');

function generateSecret(length = 32) {
  return crypto.randomBytes(length).toString('base64');
}

function generateKey() {
  return crypto.randomBytes(16).toString('base64');
}

console.log('Copy these values to your environment variables:\n');

console.log('--- Strapi Secrets ---');
const appKey1 = generateKey();
const appKey2 = generateKey();
const appKey3 = generateKey();
const appKey4 = generateKey();
console.log(`APP_KEYS=${appKey1},${appKey2},${appKey3},${appKey4}`);
console.log(`API_TOKEN_SALT=${generateSecret()}`);
console.log(`ADMIN_JWT_SECRET=${generateSecret()}`);
console.log(`TRANSFER_TOKEN_SALT=${generateSecret()}`);
console.log(`JWT_SECRET=${generateSecret()}`);

console.log('\n--- NextAuth Secret ---');
console.log(`NEXTAUTH_SECRET=${generateSecret()}`);

console.log('\n--- Preview Secret ---');
console.log(`STRAPI_ADMIN_CLIENT_PREVIEW_SECRET=${generateSecret(16)}`);

console.log('\n✅ Secrets generated successfully!');
console.log('⚠️  Store these securely and never commit them to git');

