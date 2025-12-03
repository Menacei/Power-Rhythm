# Power & Rhythm - Build Instructions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Expo CLI installed (`npm install -g expo-cli`)
- EAS CLI for building (`npm install -g eas-cli`)

### Installation

1. **Install dependencies:**
   ```bash
   cd /app/repaired-app
   npm install
   ```

2. **Start development server:**
   ```bash
   npx expo start
   ```

## 📱 Building for Production

### Using EAS Build (Recommended)

1. **Login to Expo:**
   ```bash
   eas login
   ```

2. **Configure EAS:**
   ```bash
   eas build:configure
   ```

3. **Build for Android:**
   ```bash
   eas build --platform android
   ```

4. **Build for iOS:**
   ```bash
   eas build --platform ios
   ```

### Building APK Locally

```bash
npx expo build:android
```

## 🎨 Adding Custom Assets

Before building, replace these placeholder files in `/assets`:
- `icon.png` - App icon (1024x1024)
- `splash.png` - Splash screen (1284x2778)
- `adaptive-icon.png` - Android adaptive icon (1024x1024)
- `favicon.png` - Web favicon (48x48)

## 🔧 Troubleshooting

### "Bundle JavaScript build phase failed"
- Clear cache: `npx expo start -c`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check all imports are correct

### Missing dependencies
```bash
npm install
```

### Reset project
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📦 Features Included

- ✅ Login Screen with Social Auth buttons
- ✅ Dashboard with workout selection
- ✅ Workout details and start workout
- ✅ Video demo screen
- ✅ Community posting feature
- ✅ Chat support
- ✅ Live coaching
- ✅ Analytics and stats tracking
- ✅ NativeWind (Tailwind CSS) styling

## 🎯 Publishing to App Stores

### Google Play Store
1. Build AAB: `eas build --platform android --profile production`
2. Download the AAB file
3. Upload to Google Play Console

### Apple App Store  
1. Build for iOS: `eas build --platform ios --profile production`
2. Download the IPA file
3. Upload via App Store Connect or Transporter

## 📝 Notes

- All screens are fully functional with mock data
- Ready for backend integration
- Responsive design with dark theme
- Navigation fully implemented
