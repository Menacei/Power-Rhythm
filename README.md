# Power & Rhythm 💪🎵

An AI-powered fitness application that surpasses BodyBag Pro with comprehensive workout tracking, YouTube integration with PiP mode, and personalized training plans for boxing, kickboxing, Muay Thai, calisthenics, HIIT, and weightlifting.

## 🌟 Features

### AI Integration
- **Monthly Workout Plans**: AI generates personalized workout plans every month based on your fitness level and preferences
- **Smart Recommendations**: Get AI-powered suggestions for workout variety and focus areas
- **AI Coach Chat**: Real-time fitness advice and guidance from an AI coach
- **Adaptive Learning**: The AI learns from your progress to provide better recommendations

### Comprehensive Exercise Library
The app includes **150 exercises** across multiple categories:

#### Boxing (25 exercises)
From fundamentals to advanced techniques including:
- Boxing Fundamentals, Heavy Bag Training, Speed Bag Workout
- Jab Cross, Hook & Uppercut, Shadow Boxing, Defensive Skills
- Counter-Punching, Footwork Mastery, Double End Bag
- Slip & Roll, Power Punching, Ring Movement
- Combination Flow, Body Shots, Reflex Training
- And many more specialized boxing workouts

#### Kickboxing (25 exercises)
Comprehensive kickboxing training including:
- Kickboxing Basics, Power Kicks, Cardio Blast
- Roundhouse, Front, Side, and Back Kicks
- Spinning Techniques, Defense, Low & High Kicks
- Punch-Kick Combinations, Switch Kicks, Footwork
- Ring Control, Jumping Kicks, Speed Drills
- Complete kickboxing conditioning and sparring prep

#### Muay Thai (25 exercises)
Traditional and modern Muay Thai training:
- Muay Thai Fundamentals, Clinch & Knee Training
- Teep (Push Kick), Thai Pad Combinations
- Elbow Strikes, Low Kicks, Knee Variations
- Defensive Techniques, Bag Work, Shadow Work
- Switch Kicks, Flying Knees, Ring Control
- Advanced clinch tactics and fighter training

#### Calisthenics (25 exercises)
Bodyweight mastery from basics to advanced:
- Push-Up & Pull-Up Variations, Core Work
- Dips, Squats, Planks, Handstands, Muscle-Ups
- Lunges, Burpees, Front & Back Levers
- L-Sits, Human Flags, Pistol Squats
- Explosive Movements, Flow Routines
- Dynamic calisthenics and strength building

#### HIIT (25 exercises)
High-intensity interval training for all levels:
- Beginner to Elite HIIT protocols
- Tabata Training, Sprint Intervals, Plyometrics
- Core, Upper Body, Lower Body, and Full Body HIIT
- Kettlebell, Battle Rope, Box Jump workouts
- Burpee Challenges, Fat Burning, Metabolic Boost
- Power and athletic conditioning

#### Weightlifting (25 exercises)
Complete strength and power training:
- Compound Lifts, Olympic Techniques
- Squats, Deadlifts, Bench Press, Overhead Press
- Power Cleans, Clean & Jerk, Snatch
- Front Squats, Romanian Deadlifts, Barbell Rows
- Incline Press, Sumo Deadlifts, Push Press
- Power building and elite powerlifting routines

### YouTube Picture-in-Picture (PiP) Mode
- Watch workout videos while using other features
- Full video player controls
- Seamless integration with YouTube
- Continue watching while browsing workouts

### Target Multiple Body Areas
Exercises target different areas including:
- Full Body
- Upper Body
- Lower Body
- Core
- Cardio
- Arms
- Legs
- Chest
- Back
- Shoulders

### Advanced Features
- **Workout Timer**: Track your workout duration
- **Progress Analytics**: View stats, streaks, and achievements
- **Community Feed**: Share progress and connect with other users
- **Live AI Coach**: Get real-time coaching tips and advice
- **Category Filters**: Browse by exercise type
- **Difficulty Levels**: Beginner, Intermediate, and Advanced workouts

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (optional but recommended)
- For Android Studio: JDK 17, Android Studio

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Menacei/Power-Rhythm.git
cd Power-Rhythm
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your device:
- Install Expo Go on your mobile device
- Scan the QR code from the terminal
- Or press `a` for Android emulator, `i` for iOS simulator

## 📱 Android Studio Deployment

For deploying via Android Studio (for production builds or Play Store publishing):

### Quick Start
```bash
# Generate Android project
npm run prebuild:android

# Open android folder in Android Studio
# Build → Generate Signed Bundle/APK
```

### Full Guide
See [ANDROID_DEPLOYMENT.md](./ANDROID_DEPLOYMENT.md) for detailed instructions including:
- Generating the native Android project
- Opening and configuring in Android Studio
- Building debug and release APKs
- Signing for production
- Publishing to Google Play Store

### Available Scripts
```bash
npm run prebuild:android   # Generate Android native project
npm run build:android      # Build release APK
npm run build:android:debug # Build debug APK
npm run clean:android      # Clean Android build
```

## 📱 Screens

### Dashboard
- Browse all 150 workouts
- Filter by category (Boxing, Kickboxing, Muay Thai, HIIT, Calisthenics, Weightlifting)
- Quick access to AI Coach, Analytics, and Community
- Monthly AI plan notifications

### Workout Screen
- Detailed workout information
- Built-in timer
- Watch video demo
- Complete workout tracking
- Share to community

### Video Demo Screen
- Full YouTube video player
- Picture-in-Picture mode support
- Play/Pause controls
- Workout details display

### AI Coach Screen
- Personalized workout recommendations
- Expert tips on technique, nutrition, recovery
- Quick actions to chat or view analytics

### Chat Screen
- AI-powered fitness assistant
- Real-time responses
- Ask about workouts, nutrition, recovery
- Get personalized advice

### Analytics Screen
- Track total workouts and minutes
- View current and longest streaks
- Weekly progress tracking
- AI-generated monthly plans
- Achievement badges
- Favorite category analysis

### Community Screen
- Post workout updates
- Share progress
- Connect with other users

## 🤖 AI Features

### Monthly Plan Generation
The AI generates customized monthly workout plans based on:
- Your fitness level (Beginner/Intermediate/Advanced)
- Preferred workout categories
- Target body areas
- Weekly workout frequency
- Session duration preferences

### AI Recommendations
Get intelligent suggestions for:
- Workout variety to prevent plateaus
- Body areas that need more focus
- Category rotation for balanced training
- Recovery and rest day planning

### Chat Bot
The AI coach can help with:
- Workout recommendations
- Nutrition advice
- Recovery tips
- Form and technique questions
- Motivation and mindset

## 📦 Dependencies

Key libraries used:
- React Native
- Expo
- React Navigation
- react-native-youtube-iframe (for YouTube integration)
- NativeWind (Tailwind CSS for React Native)
- Axios (for future API integration)

## 🎯 Why Better Than BodyBag Pro?

1. **AI Integration**: Monthly personalized plans and real-time coaching
2. **Massive Exercise Library**: 150 exercises across 6 categories (6x more than competitors)
3. **Martial Arts Focus**: Specialized training for Boxing, Kickboxing, and Muay Thai with 75 combat exercises
4. **YouTube PiP**: Watch videos while browsing other content
5. **Comprehensive Analytics**: Track every aspect of your fitness journey
6. **Community Features**: Connect and share with other fitness enthusiasts
7. **Smart Categorization**: Multiple filtering options by type, level, and body area
8. **Unmatched Variety**: 25 exercises per category ensuring you never get bored

## 🔄 Monthly Updates

The AI automatically detects when a new month begins and generates fresh workout plans tailored to your progress and preferences. Plans include:
- 4 weeks of structured workouts
- Exercise variety across all categories
- Progressive difficulty adjustments
- Rest day recommendations

## 🛠️ Future Enhancements

Potential additions:
- External AI API integration (OpenAI, Google AI)
- Wearable device integration
- Social features (friends, challenges)
- Custom workout builder
- Nutrition tracking
- Video upload for form analysis
- Live streaming classes

## 📄 License

This project is licensed under the MIT License.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments

- YouTube for video content integration
- The fitness community for inspiration
- All contributors and testers

---

**Power & Rhythm** - Train Smarter with AI 🤖💪
