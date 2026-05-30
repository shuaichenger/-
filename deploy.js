# 作品集网站部署脚本
# 使用方法: node deploy.js

const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'index.html');
const IMAGES_DIR = path.join(__dirname, 'images');

// Check source file exists
if (!fs.existsSync(SRC)) {
  console.error('❌ index.html not found in current directory');
  process.exit(1);
}

console.log('✅ index.html ready');
console.log(`📏 Size: ${(fs.statSync(SRC).size / 1024).toFixed(1)} KB`);

// Check avatar image
const avatarPath = path.join(IMAGES_DIR, 'avatar-smile.png');
if (fs.existsSync(avatarPath)) {
  console.log(`✅ avatar-smile.png found (${(fs.statSync(avatarPath).size / 1024).toFixed(1)} KB)`);
} else {
  console.log('⚠️  avatar-smile.png not found — will use placeholder');
}

console.log('\n📦 Ready for deployment');
console.log('Target: 43.162.104.179 /var/www/portfolio');
