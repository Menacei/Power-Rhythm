# Power & Rhythm

A fitness app built with [Expo](https://expo.dev) and React Native.

## Features

- Cross-platform support (iOS, Android, Web)
- Modern tab-based navigation
- Light and dark mode support
- Parallax scroll effects
- Haptic feedback on iOS

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Project Structure

- **app/** - File-based routing screens using Expo Router
- **components/** - Reusable UI components
- **constants/** - Theme colors and fonts
- **hooks/** - Custom React hooks
- **assets/** - Images and static assets

## Building for Android (Production)

### Prerequisites

1. Install EAS CLI globally:
   ```bash
   npm install -g eas-cli
   ```

2. Log in to your Expo account:
   ```bash
   eas login
   ```

3. Configure your project (first time only):
   ```bash
   eas build:configure
   ```

### Build APK for Testing

```bash
eas build --platform android --profile preview
```

### Build AAB for Google Play Store

```bash
eas build --platform android --profile production
```

### Submit to Google Play Store

1. Create a service account in Google Play Console
2. Download the JSON key file
3. Update `eas.json` with the path to your key file
4. Run:
   ```bash
   eas submit --platform android
   ```

## Building for iOS

```bash
eas build --platform ios --profile production
```

## Building for Web

```bash
npx expo export --platform web
```

## Google Play Store Requirements

Before submitting to the Play Store, ensure you have:

- [ ] App icon (1024x1024 PNG) - ✅ Configured in `app.json`
- [ ] Feature graphic (1024x500)
- [ ] Screenshots for different device sizes
- [ ] Privacy policy URL
- [ ] App description and short description
- [ ] Content rating questionnaire completed
- [ ] Target API level compliance

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [EAS Build documentation](https://docs.expo.dev/build/introduction/): Learn how to build your app for production.
- [EAS Submit documentation](https://docs.expo.dev/submit/introduction/): Learn how to submit your app to app stores.
