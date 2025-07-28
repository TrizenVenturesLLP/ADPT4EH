# 🎨 Launcher Icon Guide for Extrahand

This guide will help you add a custom launcher icon to your React Native app.

## 📋 Quick Start

Run this command to see what you need to do:
```bash
npm run icons:info
```

## 🎯 Method 1: Manual Icon Replacement (Recommended)

### Step 1: Prepare Your Icon

You need to create different sizes of your icon for different screen densities:

| Density | Size | Directory |
|---------|------|-----------|
| mdpi | 48x48px | `mipmap-mdpi` |
| hdpi | 72x72px | `mipmap-hdpi` |
| xhdpi | 96x96px | `mipmap-xhdpi` |
| xxhdpi | 144x144px | `mipmap-xxhdpi` |
| xxxhdpi | 192x192px | `mipmap-xxxhdpi` |

### Step 2: Generate Icons

#### Option A: Online Icon Generator
1. Go to [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html)
2. Upload your logo (use `assets/images/extrahand-logo.png`)
3. Download the generated icons
4. Extract and replace the files

#### Option B: Using ImageMagick (Command Line)
```bash
# Install ImageMagick first, then:
convert assets/images/extrahand-logo.png -resize 48x48 android/app/src/main/res/mipmap-mdpi/ic_launcher.png
convert assets/images/extrahand-logo.png -resize 72x72 android/app/src/main/res/mipmap-hdpi/ic_launcher.png
convert assets/images/extrahand-logo.png -resize 96x96 android/app/src/main/res/mipmap-xhdpi/ic_launcher.png
convert assets/images/extrahand-logo.png -resize 144x144 android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png
convert assets/images/extrahand-logo.png -resize 192x192 android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png
```

#### Option C: Using GIMP/Photoshop
1. Open your logo in GIMP or Photoshop
2. Resize to each required dimension
3. Export as PNG
4. Replace the corresponding files

### Step 3: Replace Icon Files

Replace these files with your custom icons:

```
android/app/src/main/res/
├── mipmap-mdpi/
│   ├── ic_launcher.png (48x48)
│   └── ic_launcher_round.png (48x48)
├── mipmap-hdpi/
│   ├── ic_launcher.png (72x72)
│   └── ic_launcher_round.png (72x72)
├── mipmap-xhdpi/
│   ├── ic_launcher.png (96x96)
│   └── ic_launcher_round.png (96x96)
├── mipmap-xxhdpi/
│   ├── ic_launcher.png (144x144)
│   └── ic_launcher_round.png (144x144)
└── mipmap-xxxhdpi/
    ├── ic_launcher.png (192x192)
    └── ic_launcher_round.png (192x192)
```

### Step 4: Test Your Icon

```bash
# Clean and rebuild
cd android
./gradlew clean
cd ..

# Run on device/emulator
npm run android
```

## 🎨 Method 2: Using react-native-make

### Step 1: Install react-native-make
```bash
npm install --save-dev @bam.tech/react-native-make
```

### Step 2: Generate Icons
```bash
# Generate Android icons
npx react-native set-icon --path assets/images/extrahand-logo.png --platform android

# Generate iOS icons (if needed)
npx react-native set-icon --path assets/images/extrahand-logo.png --platform ios
```

## 🔄 Method 3: Adaptive Icons (Android 8.0+)

For modern Android devices, you can use adaptive icons:

### Step 1: Create Adaptive Icon Files
Create these additional files in each mipmap directory:

- `ic_launcher_foreground.png` - Your logo (transparent background)
- `ic_launcher_background.png` - Background color/shape

### Step 2: Update AndroidManifest.xml
```xml
<application
    android:icon="@mipmap/ic_launcher"
    android:roundIcon="@mipmap/ic_launcher_round"
    android:label="@string/app_name">
```

## 🧪 Testing Your Icon

### Test on Device
1. Connect your Android device
2. Run: `npm run android`
3. Check the launcher icon on your device

### Test on Emulator
1. Start Android emulator
2. Run: `npm run android`
3. Check the launcher icon in the app drawer

### Build Release APK
```bash
cd android
./gradlew assembleRelease
```

The APK will be in: `android/app/build/outputs/apk/release/app-release.apk`

## 🎯 Icon Design Tips

### Best Practices
- **Keep it simple**: Icons should be recognizable at small sizes
- **Use transparency**: PNG format with transparent background
- **Test on different backgrounds**: Icons appear on various launcher backgrounds
- **Follow Material Design**: Use Google's Material Design guidelines
- **High contrast**: Ensure visibility on light and dark themes

### Technical Requirements
- **Format**: PNG (preferred) or WebP
- **Background**: Transparent or solid color
- **Shape**: Square (Android will apply mask)
- **Quality**: High resolution for crisp display

## 🔧 Troubleshooting

### Icon Not Updating
1. **Clean build**:
   ```bash
   cd android
   ./gradlew clean
   cd ..
   npm run android
   ```

2. **Clear app data** on device/emulator

3. **Uninstall and reinstall** the app

### Icon Looks Blurry
- Ensure you're using the correct sizes for each density
- Use high-resolution source images
- Avoid scaling up small images

### Build Errors
- Check that all icon files exist
- Verify file permissions
- Ensure PNG format is correct

## 📱 iOS Icon (Optional)

If you also want to update iOS icons:

1. **Generate iOS icons**:
   ```bash
   npx react-native set-icon --path assets/images/extrahand-logo.png --platform ios
   ```

2. **Or manually replace** files in `ios/Extrahand/Images.xcassets/AppIcon.appiconset/`

## 🎉 Success!

After following these steps, your app will have a custom launcher icon that represents your brand!

---

**Need help?** Run `npm run icons:info` to see the current status and next steps. 