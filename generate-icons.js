const fs = require('fs');
const path = require('path');

// Icon sizes for different densities
const iconSizes = {
  'mipmap-mdpi': 48,
  'mipmap-hdpi': 72,
  'mipmap-xhdpi': 96,
  'mipmap-xxhdpi': 144,
  'mipmap-xxxhdpi': 192
};

// Source logo path
const sourceLogo = path.join(__dirname, 'assets', 'images', 'extrahand-logo.png');

// Android res directory
const androidResDir = path.join(__dirname, 'android', 'app', 'src', 'main', 'res');

console.log('🎨 Extrahand Launcher Icon Generator');
console.log('=====================================');

// Check if source logo exists
if (!fs.existsSync(sourceLogo)) {
  console.error('❌ Source logo not found:', sourceLogo);
  console.log('Please ensure extrahand-logo.png exists in assets/images/');
  process.exit(1);
}

console.log('✅ Source logo found:', sourceLogo);

// Create directories if they don't exist
Object.keys(iconSizes).forEach(density => {
  const densityDir = path.join(androidResDir, density);
  if (!fs.existsSync(densityDir)) {
    fs.mkdirSync(densityDir, { recursive: true });
    console.log('📁 Created directory:', densityDir);
  }
});

console.log('\n📋 Next Steps:');
console.log('1. Install an image processing tool like ImageMagick or use an online icon generator');
console.log('2. Resize your logo to the following dimensions:');
console.log('');

Object.entries(iconSizes).forEach(([density, size]) => {
  console.log(`   ${density}: ${size}x${size}px`);
});

console.log('\n3. Replace the following files:');
Object.keys(iconSizes).forEach(density => {
  const iconPath = path.join(androidResDir, density, 'ic_launcher.png');
  const roundIconPath = path.join(androidResDir, density, 'ic_launcher_round.png');
  console.log(`   📱 ${iconPath}`);
  console.log(`   🔄 ${roundIconPath}`);
});

console.log('\n4. For adaptive icons (Android 8.0+), you may also need:');
console.log('   - ic_launcher_foreground.png (foreground layer)');
console.log('   - ic_launcher_background.png (background layer)');

console.log('\n🎯 Quick Commands:');
console.log('After generating your icons, run:');
console.log('   npm run android  # To test the new icon');
console.log('   cd android && ./gradlew assembleRelease  # To build with new icon'); 