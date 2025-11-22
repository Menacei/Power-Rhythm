# Testing Guide for Power & Rhythm

This document provides comprehensive testing instructions for all features of the Power & Rhythm fitness application.

## Prerequisites

Before testing, ensure:
1. Node.js and npm are installed
2. Expo CLI is installed (`npm install -g expo-cli`)
3. Expo Go app is installed on your mobile device (iOS/Android)
4. All dependencies are installed (`npm install`)

## Running the Application

### Development Mode
```bash
# Start the Expo development server
npm start

# Or for specific platforms
npm run android  # Android emulator/device
npm run ios      # iOS simulator/device
```

### Testing on Device
1. Open Expo Go app on your device
2. Scan the QR code from terminal
3. App will load and open on LoginScreen

## Feature Testing Checklist

### ✅ 1. Login & Authentication
**Screen:** LoginScreen

**Test Cases:**
- [ ] App opens to login screen
- [ ] "Power & Rhythm" title is displayed
- [ ] Social login buttons are visible (Google, Facebook, Apple)
- [ ] "Continue with Email" button works
- [ ] Tapping any login button navigates to Dashboard

**Expected Behavior:**
- Clean, dark-themed interface
- All buttons are responsive
- Smooth navigation to Dashboard

---

### ✅ 2. Dashboard & Exercise Library
**Screen:** Dashboard

**Test Cases:**
- [ ] Dashboard shows "Power & Rhythm" header
- [ ] "AI-Powered Fitness Companion" subtitle displays
- [ ] Quick actions toolbar shows 4 buttons (AI Coach, Analytics, Chat, Community)
- [ ] Category filters display all 7 options (All + 6 categories)
- [ ] Default shows all 25 workouts
- [ ] Workout count displays correctly ("25 Workouts Available")
- [ ] Each workout card shows:
  - Title
  - Category
  - Difficulty level (colored: green/yellow/red)
  - Target area
  - Duration

**Category Filter Testing:**
- [ ] "All" shows 25 workouts
- [ ] "Boxing" shows 5 workouts
- [ ] "Kickboxing" shows 4 workouts
- [ ] "Muay Thai" shows 4 workouts
- [ ] "Calisthenics" shows 4 workouts
- [ ] "HIIT" shows 4 workouts
- [ ] "Weightlifting" shows 4 workouts

**Sample Workouts to Verify:**
- [ ] Boxing Fundamentals (Beginner, 20 min, Upper Body)
- [ ] Muay Thai Fight Conditioning (Advanced, 40 min, Full Body)
- [ ] Olympic Lifting Techniques (Advanced, 45 min, Full Body)

---

### ✅ 3. AI Monthly Plan Notification
**Location:** Dashboard

**Test Cases:**
- [ ] Blue banner appears with "🤖 New AI Monthly Plan Available!"
- [ ] Tapping banner navigates to Analytics screen
- [ ] Banner shows only when plan needs refresh

**Testing Monthly Refresh Logic:**
The `shouldRefreshPlan()` function checks if current month differs from last generated date. To test:
- Initial app load should show notification (no lastGeneratedDate)
- After generating plan, notification disappears
- Plan refreshes automatically each new month

---

### ✅ 4. Workout Tracking Screen
**Screen:** WorkoutScreen

**Test Cases:**
- [ ] Tap any workout from Dashboard opens WorkoutScreen
- [ ] Back button navigates to Dashboard
- [ ] Workout info displays correctly:
  - Title
  - Category
  - Level
  - Duration
  - Target area
- [ ] Timer functionality:
  - [ ] Starts at 00:00
  - [ ] "Start" button begins timer
  - [ ] Button changes to "Pause" when running
  - [ ] "Reset" button resets to 00:00
  - [ ] Timer counts up correctly (MM:SS format)
- [ ] "Watch Video Demo" button opens VideoDemoScreen
- [ ] "Complete Workout" button shows completion alert
- [ ] "Share with Community" button navigates to Community
- [ ] Workout description displays appropriate text

---

### ✅ 5. Video Demo & PiP Support
**Screen:** VideoDemoScreen

**Test Cases:**
- [ ] Screen opens with YouTube video player
- [ ] Back button returns to WorkoutScreen
- [ ] Video title displays correctly
- [ ] Play/Pause button works
- [ ] Video plays automatically on load
- [ ] "Enable PiP Mode" button exists
- [ ] Tapping PiP button shows notification message
- [ ] Workout details display below video:
  - Category
  - Level
  - Target Area
  - Duration

**PiP Mode Testing:**
- [ ] Tapping PiP button changes player height
- [ ] Blue notification box appears explaining PiP
- [ ] Video continues playing in smaller view

**Note:** Full native PiP requires production build with platform-specific configuration. Current implementation demonstrates UI/UX.

---

### ✅ 6. AI Chat Assistant
**Screen:** ChatScreen

**Test Cases:**
- [ ] Access via Dashboard "Chat" button
- [ ] Screen shows "AI Coach Chat" header
- [ ] Welcome messages appear on load
- [ ] Text input field is functional
- [ ] "Send" button is visible and enabled
- [ ] Messages display with timestamps
- [ ] User messages appear on right (blue background)
- [ ] AI responses appear on left (dark background)
- [ ] AI responses include "AI Coach" label

**Chat Response Testing:**
Test these keywords and verify appropriate responses:
- [ ] "workout" or "exercise" → recommends HIIT/Boxing classes
- [ ] "nutrition" or "diet" → provides nutrition advice
- [ ] "rest" or "recovery" → emphasizes recovery importance
- [ ] "help" or "how" → offers general assistance
- [ ] Any other text → provides motivational response

**Expected Behavior:**
- Immediate user message display
- ~1 second delay before AI response (simulated thinking)
- Scrollable message history
- Responsive input field

---

### ✅ 7. Live AI Coach
**Screen:** LiveCoachScreen

**Test Cases:**
- [ ] Access via Dashboard "AI Coach" button
- [ ] "Your AI Coach" header displays
- [ ] Three quick action buttons:
  - [ ] "Ask Your AI Coach" → navigates to ChatScreen
  - [ ] "View Progress Analytics" → navigates to AnalyticsScreen
  - [ ] "Refresh Recommendations" → reloads recommendations
- [ ] AI Recommendations section shows:
  - [ ] Suggested Training Types (up to 3 categories)
  - [ ] Focus Areas (3 body areas)
- [ ] Coach's Tips section displays 6 tips:
  - [ ] Technique (🎯)
  - [ ] Nutrition (🥗)
  - [ ] Recovery (😴)
  - [ ] Hydration (💧)
  - [ ] Progression (📈)
  - [ ] Mindset (🧠)
- [ ] Each tip shows icon, category, title, and description
- [ ] Bottom info box explains AI learning

**Refresh Testing:**
- [ ] Tap "Refresh Recommendations"
- [ ] Button shows "Generating..." during load
- [ ] New recommendations load after ~500ms
- [ ] Recommendations update without errors

---

### ✅ 8. Progress Analytics
**Screen:** AnalyticsScreen

**Test Cases:**
- [ ] Access via Dashboard "Analytics" or LiveCoach
- [ ] "Your Analytics" header displays
- [ ] Four stat cards show:
  - [ ] Total Workouts: 42
  - [ ] Total Minutes: 1260
  - [ ] Current Streak: 7 🔥 (green)
  - [ ] Longest Streak: 14 🏆 (yellow)
- [ ] Weekly Progress section:
  - [ ] Shows "3 / 4 workouts"
  - [ ] Progress bar at 75%
  - [ ] Encouragement text
- [ ] Favorite Category card:
  - [ ] Shows "Boxing" with 🥊 icon
- [ ] AI Monthly Plan section:
  - [ ] Shows current month (e.g., "November 2025")
  - [ ] Shows user level (Intermediate)
  - [ ] Displays first 2 weeks
  - [ ] Each week shows 4 workouts
  - [ ] Each workout shows title, duration, exercise count
  - [ ] "Refresh" button works
  - [ ] Loading state appears during generation
- [ ] Achievements section shows 3 badges:
  - [ ] Week Warrior (🔥)
  - [ ] Century Club (💪)
  - [ ] Time Master (⏱️)
- [ ] "Start New Workout" button → Dashboard
- [ ] "Talk to AI Coach" button → LiveCoachScreen

**Monthly Plan Generation Testing:**
- [ ] Initial load generates plan automatically
- [ ] Plan generation takes ~1 second
- [ ] Plan includes 4 weeks of workouts
- [ ] Each workout has exercises appropriate to category
- [ ] Refresh button regenerates new plan
- [ ] Loading state prevents multiple simultaneous requests

---

### ✅ 9. Community Features
**Screen:** CommunityScreen

**Test Cases:**
- [ ] Access via Dashboard "Community" button
- [ ] "Community" header displays
- [ ] Text input field for new posts
- [ ] Placeholder text: "Share your workout..."
- [ ] "Post" button visible
- [ ] Empty state shows no posts initially
- [ ] Creating a post:
  - [ ] Enter text in input
  - [ ] Tap "Post" button
  - [ ] Post appears at top of feed
  - [ ] Input field clears
  - [ ] Post shows text content
- [ ] Multiple posts display in chronological order (newest first)
- [ ] Cannot post empty content

---

### ✅ 10. Navigation Flow Testing

**Complete User Journey:**
1. [ ] Open app → LoginScreen
2. [ ] Login → Dashboard
3. [ ] Select workout → WorkoutScreen
4. [ ] Watch video → VideoDemoScreen
5. [ ] Back → WorkoutScreen
6. [ ] Complete workout → Alert dialog
7. [ ] View Analytics → AnalyticsScreen
8. [ ] Talk to Coach → LiveCoachScreen
9. [ ] Ask Coach → ChatScreen
10. [ ] Back to Dashboard → Dashboard
11. [ ] Community → CommunityScreen
12. [ ] Back to Dashboard

**Navigation Tests:**
- [ ] Back buttons work on all screens
- [ ] No navigation errors or crashes
- [ ] Proper parameters passed between screens
- [ ] Smooth transitions

---

## AI Features Testing

### AI Workout Generator

**Test generateMonthlyWorkoutPlan:**
```javascript
// Test with different profiles
const plan1 = await generateMonthlyWorkoutPlan({
  fitnessLevel: 'Beginner',
  preferredCategories: ['Boxing'],
  workoutsPerWeek: 3,
  sessionDuration: 20
});

const plan2 = await generateMonthlyWorkoutPlan({
  fitnessLevel: 'Advanced',
  preferredCategories: ['HIIT', 'Weightlifting'],
  targetAreas: ['Full Body', 'Core'],
  workoutsPerWeek: 5,
  sessionDuration: 45
});
```

**Verify:**
- [ ] Returns plan object with month, generatedAt, userLevel, weeks
- [ ] Weeks array has 4 elements
- [ ] Each week has workoutsPerWeek number of workouts
- [ ] Workouts rotate through preferred categories
- [ ] Exercise count matches difficulty level (Beginner: 5, Intermediate: 7, Advanced: 9)
- [ ] All exercises have sets, reps, rest properties

**Test getAIRecommendations:**
```javascript
const recommendations = await getAIRecommendations([], {});
```

**Verify:**
- [ ] Returns object with suggestedCategories, focusAreas, tips
- [ ] suggestedCategories is array of workout types
- [ ] focusAreas includes body areas
- [ ] tips array has 5 motivational tips

**Test shouldRefreshPlan:**
```javascript
shouldRefreshPlan(null); // Should return true
shouldRefreshPlan(new Date().toISOString()); // Should return false
shouldRefreshPlan(new Date('2024-10-01').toISOString()); // Should return true
```

---

## Data Validation Testing

### Workout Data Integrity

**Test Each Category:**
```javascript
import { getWorkoutsByCategory, getWorkoutsByLevel, getWorkoutsByBodyArea } from './src/utils/workoutData';

// Verify counts
assert(getWorkoutsByCategory('Boxing').length === 5);
assert(getWorkoutsByCategory('Kickboxing').length === 4);
assert(getWorkoutsByCategory('Muay Thai').length === 4);
assert(getWorkoutsByCategory('Calisthenics').length === 4);
assert(getWorkoutsByCategory('HIIT').length === 4);
assert(getWorkoutsByCategory('Weightlifting').length === 4);

// Verify levels
assert(getWorkoutsByLevel('Beginner').length === 6);
assert(getWorkoutsByLevel('Intermediate').length === 12);
assert(getWorkoutsByLevel('Advanced').length === 7);
```

**Verify Each Workout Has:**
- [ ] Unique ID
- [ ] Title
- [ ] Category
- [ ] Level
- [ ] VideoId
- [ ] BodyArea
- [ ] Duration (in minutes)

---

## Performance Testing

### Load Times
- [ ] App initial load < 3 seconds
- [ ] Screen transitions < 500ms
- [ ] AI plan generation < 2 seconds
- [ ] Chat responses < 1.5 seconds
- [ ] Video player loads < 2 seconds

### Responsiveness
- [ ] Buttons respond immediately to taps
- [ ] Scrolling is smooth
- [ ] No UI freezing during operations
- [ ] Timer updates every second accurately
- [ ] Filter changes are instant

---

## Error Handling Testing

### Network Scenarios
- [ ] App works offline (no external APIs currently)
- [ ] Video player handles YouTube unavailability gracefully
- [ ] AI generation handles errors without crashing

### Edge Cases
- [ ] Empty workout selection
- [ ] Rapid button tapping
- [ ] Long post content in community
- [ ] Timer at maximum duration
- [ ] Multiple simultaneous plan generations

---

## Visual/UI Testing

### Dark Theme Consistency
- [ ] All screens use dark theme (zinc-900 background)
- [ ] Text contrast is readable
- [ ] Buttons are visible
- [ ] Colors match design system

### Color Coding
- [ ] Beginner: Green
- [ ] Intermediate: Yellow
- [ ] Advanced: Red
- [ ] Primary actions: Indigo
- [ ] Success: Green
- [ ] Video: Red

### Responsive Design
- [ ] Works on various screen sizes
- [ ] Text wraps appropriately
- [ ] Cards scale properly
- [ ] Horizontal scrolls work smoothly

---

## Security Testing

### CodeQL Results
- ✅ JavaScript analysis: 0 alerts
- ✅ No security vulnerabilities detected

### Data Safety
- [ ] No sensitive data in logs
- [ ] No API keys in source code
- [ ] No user data transmitted without encryption (future feature)

---

## Accessibility Testing

### Screen Reader Support
- [ ] Text labels are descriptive
- [ ] Buttons have clear purposes
- [ ] Navigation is logical

### Font Sizes
- [ ] Text is readable at default size
- [ ] Headers are appropriately sized
- [ ] No text smaller than 12pt

---

## Platform-Specific Testing

### iOS
- [ ] Gestures work (swipe back)
- [ ] Status bar styling correct
- [ ] Safe area respected
- [ ] Navigation animations smooth

### Android
- [ ] Back button works
- [ ] Material design elements
- [ ] Status bar handling
- [ ] Navigation drawer (if implemented)

---

## Regression Testing Checklist

After any code changes, verify:
- [ ] All 25 workouts still load
- [ ] Category filters work
- [ ] Navigation doesn't break
- [ ] Timer still functions
- [ ] AI features generate properly
- [ ] Video player loads
- [ ] Chat responses work
- [ ] Analytics display correctly

---

## Known Limitations

1. **YouTube PiP**: Current implementation is UI demonstration. Full native PiP requires:
   - iOS: Background audio capability in Info.plist
   - Android: PiP permission in AndroidManifest.xml
   - Alternative: Use react-native-video instead of YouTube iframe

2. **Offline Mode**: Videos require internet connection

3. **Data Persistence**: Workout history not saved between sessions (future enhancement)

4. **External AI**: Using simulated AI responses. Production should integrate OpenAI/similar

---

## Success Criteria

The app passes testing if:
- ✅ All 25 exercises load and display correctly
- ✅ AI generates valid monthly plans
- ✅ All navigation flows work without errors
- ✅ Video player loads and plays videos
- ✅ Chat provides contextual responses
- ✅ Analytics display accurate mock data
- ✅ No security vulnerabilities (CodeQL passed)
- ✅ Performance meets benchmarks
- ✅ UI is consistent and professional

---

## Bug Reporting Template

If you find issues, report them with:
```
**Title:** Brief description
**Screen:** Which screen/component
**Steps to Reproduce:**
1. Step 1
2. Step 2
3. ...

**Expected Behavior:** What should happen
**Actual Behavior:** What actually happens
**Screenshot:** If applicable
**Device/Platform:** iOS/Android, version
**Error Messages:** Console logs if any
```

---

## Manual Testing Execution Log

Date: ___________  
Tester: __________  
Device: __________  
Platform: ________

- [ ] Login & Authentication
- [ ] Dashboard & Filters
- [ ] Workout Screen
- [ ] Video Demo
- [ ] AI Chat
- [ ] AI Coach
- [ ] Analytics
- [ ] Community
- [ ] Navigation
- [ ] Performance
- [ ] Visual/UI

**Notes:**
_________________________________
_________________________________
_________________________________

**Overall Result:** ☐ PASS  ☐ FAIL  ☐ PARTIAL

---

**Testing Version:** 1.0.0  
**Last Updated:** November 2025
