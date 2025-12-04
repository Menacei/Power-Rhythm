# Android Studio Deployment Guide

## 📱 Deploying Power & Rhythm to Android Studio

This guide explains how to deploy the Power & Rhythm app using Android Studio.

## Prerequisites

1. **Android Studio** - Download from [developer.android.com](https://developer.android.com/studio)
2. **Node.js** (v16 or later)
3. **JDK 17** - Required for Android builds
4. **Android SDK** - Installed via Android Studio

## Step 1: Install Dependencies

```bash
# Navigate to project directory
cd Power-Rhythm

# Install npm dependencies
npm install
```

## Step 2: Generate Android Project

Run the Expo prebuild command to generate native Android files:

```bash
# Generate Android project folder
npm run prebuild:android

# Or use npx directly
npx expo prebuild --platform android
```

This creates an `android/` folder with the native Android project structure.

## Step 3: Open in Android Studio

1. Open Android Studio
2. Click **"Open"** or **File → Open**
3. Navigate to the `Power-Rhythm/android` folder
4. Click **"OK"** to open the project
5. Wait for Gradle sync to complete (may take a few minutes)

## Step 4: Configure SDK & NDK

If prompted, install the required SDK components:
- Android SDK 34 (or latest)
- Android SDK Build-Tools 34.0.0
- Android NDK (if required)

## Step 5: Build & Run

### Debug Build (Development)
1. Connect your Android device (USB debugging enabled) or start an emulator
2. Click the green **Run** button (▶️) in Android Studio
3. Select your target device
4. Wait for the build and installation

### Release Build (Production)

#### Option A: Using Android Studio
1. Go to **Build → Generate Signed Bundle / APK**
2. Select **APK** or **Android App Bundle**
3. Create or select your keystore
4. Select **release** build variant
5. Click **Create**

#### Option B: Using Command Line
```bash
# From project root
cd android

# Build release APK
./gradlew assembleRelease

# Build AAB (for Play Store)
./gradlew bundleRelease
```

Release builds are created in:
- APK: `android/app/build/outputs/apk/release/`
- AAB: `android/app/build/outputs/bundle/release/`

## Step 6: Signing for Production

### Create a Keystore
```bash
keytool -genkeypair -v -storetype PKCS12 -keystore power-rhythm.keystore -alias power-rhythm -keyalg RSA -keysize 2048 -validity 10000
```

### Configure Signing in `android/app/build.gradle`
```gradle
android {
    signingConfigs {
        release {
            storeFile file("power-rhythm.keystore")
            storePassword "your_password"
            keyAlias "power-rhythm"
            keyPassword "your_password"
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
```

## Project Structure

After prebuild, your Android project will have:

```
android/
├── app/
│   ├── src/
│   │   └── main/
│   │       ├── java/com/powerrhythm/app/
│   │       ├── res/
│   │       └── AndroidManifest.xml
│   └── build.gradle
├── gradle/
├── build.gradle
├── gradle.properties
└── settings.gradle
```

## App Configuration

### Package Name
- `com.powerrhythm.app`

### Version Information
- Version Name: `1.0.0`
- Version Code: `1`

### SDK Versions
- Min SDK: 24 (Android 7.0)
- Target SDK: 34 (Android 14)
- Compile SDK: 34

### Permissions
The app requires these permissions:
- `INTERNET` - For API calls and video streaming
- `ACCESS_NETWORK_STATE` - For checking connectivity

## Troubleshooting

### Common Issues

**1. Gradle sync failed**
```bash
# Clean and rebuild
cd android
./gradlew clean
./gradlew build
```

**2. SDK not found**
- Open Android Studio → Tools → SDK Manager
- Install required SDK version

**3. Build tools not found**
- Update `build.gradle` with correct build tools version
- Install via SDK Manager

**4. Metro bundler not running**
```bash
# Start Metro in separate terminal
npm start
```

**5. Java version mismatch**
- Ensure JDK 17 is installed and configured
- Set `JAVA_HOME` environment variable

### Clean Build
```bash
cd android
./gradlew clean
cd ..
npm run prebuild:android
```

## Useful Commands

```bash
# Start Metro bundler
npm start

# Generate Android project
npm run prebuild:android

# Build debug APK
npm run build:android:debug

# Build release APK
npm run build:android

# Clean Android build
npm run clean:android

# Open Android project (after prebuild)
npm run android:studio
```

## Publishing to Google Play Store

1. Create a Google Play Developer account ($25 one-time fee)
2. Build a signed AAB (Android App Bundle):
   ```bash
   cd android
   ./gradlew bundleRelease
   ```
3. Go to Google Play Console
4. Create a new app
5. Upload the AAB from `android/app/build/outputs/bundle/release/`
6. Fill in store listing, content rating, pricing
7. Submit for review

## App Features for Play Store Listing

- 🥊 150+ exercises across 6 categories
- 🤖 AI-powered workout generation
- 🏆 Competitive leaderboard system
- 👑 Premium subscription features
- 📊 Advanced analytics & progress tracking
- 🎥 YouTube video integration
- 💪 Boxing, Kickboxing, Muay Thai, Calisthenics, HIIT, Weightlifting

## Support

For deployment issues, check:
1. Expo documentation: https://docs.expo.dev/
2. React Native docs: https://reactnative.dev/
3. Android Studio docs: https://developer.android.com/studio

---

**Power & Rhythm** - Your AI-Powered Fitness Companion 💪
