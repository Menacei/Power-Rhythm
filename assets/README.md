# Power & Rhythm Assets

This folder contains the app icons and splash screen assets.

## Required Assets

### App Icons
- `icon.png` - Main app icon (1024x1024 px recommended)
- `adaptive-icon.png` - Android adaptive icon foreground (1024x1024 px)
- `favicon.png` - Web favicon (48x48 px)

### Splash Screen
- `splash.png` - Splash screen image (1242x2688 px recommended)

## Creating Assets

### Using Figma/Sketch
1. Create a 1024x1024 artboard
2. Design your app icon with the Power & Rhythm branding
3. Export as PNG

### Using Online Tools
- [App Icon Generator](https://appicon.co/)
- [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/)
- [Expo Icon Builder](https://buildicon.netlify.app/)

## Design Guidelines

### Icon Design
- Use the app's primary color: `#4f46e5` (Indigo)
- Include fitness-related imagery (boxing gloves, weights, etc.)
- Keep it simple and recognizable at small sizes
- Follow Android adaptive icon guidelines

### Splash Screen
- Match the dark theme: `#18181b` background
- Center the logo/branding
- Include app name: "Power & Rhythm"
- Keep text minimal

## Recommended Icon Concept

```
┌─────────────────────────────┐
│                             │
│    ⚡ POWER & RHYTHM ⚡    │
│                             │
│         🥊 💪 🏋️          │
│                             │
│    Your AI Fitness Coach    │
│                             │
└─────────────────────────────┘
```

## Color Palette
- Primary: `#4f46e5` (Indigo)
- Secondary: `#10b981` (Green)
- Background: `#18181b` (Dark)
- Accent: `#fbbf24` (Gold)

## Temporary Icons

For development, you can use placeholder images. Replace these before publishing:

1. Create a simple 1024x1024 PNG with a solid indigo background
2. Add a white "P&R" text or fitness icon
3. Export and place in this folder

The Expo build process will automatically resize these for different devices.
