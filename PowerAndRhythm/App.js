import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import Dashboard from './src/screens/Dashboard';
import WorkoutScreen from './src/screens/WorkoutScreen';
import VideoDemoScreen from './src/screens/VideoDemoScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import ChatScreen from './src/screens/ChatScreen';
import LiveCoachScreen from './src/screens/LiveCoachScreen';
import AnalyticsScreen from './src/screens/AnalyticsScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';
import PremiumScreen from './src/screens/PremiumScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="VideoDemo" component={VideoDemoScreen} />
        <Stack.Screen name="Community" component={CommunityScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="LiveCoach" component={LiveCoachScreen} />
        <Stack.Screen name="Analytics" component={AnalyticsScreen} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
        <Stack.Screen name="Premium" component={PremiumScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
