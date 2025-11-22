import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import WorkoutCard from '../components/WorkoutCard';
import { workoutData, CATEGORIES, getWorkoutsByCategory } from '../utils/workoutData';
import { shouldRefreshPlan } from '../utils/aiWorkoutGenerator';

export default function Dashboard({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [needsRefresh, setNeedsRefresh] = useState(false);

  useEffect(() => {
    // Check if AI plan needs monthly refresh
    const lastRefresh = null; // In production, load from storage
    setNeedsRefresh(shouldRefreshPlan(lastRefresh));
  }, []);

  const displayWorkouts = selectedCategory === 'All' 
    ? workoutData 
    : getWorkoutsByCategory(selectedCategory);

  const categories = ['All', ...Object.values(CATEGORIES)];

  return (
    <ScrollView className="bg-zinc-900 flex-1">
      {/* Header */}
      <View className="p-4 pt-12 bg-zinc-800">
        <Text className="text-white text-3xl font-bold mb-2">Power & Rhythm</Text>
        <Text className="text-gray-400 text-base">Your AI-Powered Fitness Companion</Text>
      </View>

      {/* AI Refresh Notice */}
      {needsRefresh && (
        <TouchableOpacity 
          onPress={() => navigation.navigate('Analytics')}
          className="mx-4 mt-4 bg-indigo-600 p-4 rounded-2xl"
        >
          <Text className="text-white text-center font-semibold">
            🤖 New AI Monthly Plan Available! Tap to view →
          </Text>
        </TouchableOpacity>
      )}

      {/* Quick Actions */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        className="px-4 py-4"
      >
        <TouchableOpacity 
          onPress={() => navigation.navigate('LiveCoach')}
          className="bg-indigo-600 px-6 py-3 rounded-xl mr-3"
        >
          <Text className="text-white font-semibold">🤖 AI Coach</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Analytics')}
          className="bg-zinc-700 px-6 py-3 rounded-xl mr-3"
        >
          <Text className="text-white font-semibold">📊 Analytics</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Chat')}
          className="bg-zinc-700 px-6 py-3 rounded-xl mr-3"
        >
          <Text className="text-white font-semibold">💬 Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Community')}
          className="bg-zinc-700 px-6 py-3 rounded-xl"
        >
          <Text className="text-white font-semibold">👥 Community</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Category Filter */}
      <View className="px-4 pb-4">
        <Text className="text-white text-xl font-bold mb-3">Categories</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              onPress={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-xl mr-3 ${
                selectedCategory === category ? 'bg-indigo-600' : 'bg-zinc-700'
              }`}
            >
              <Text className="text-white font-semibold">{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Workouts */}
      <View className="px-4 pb-4">
        <Text className="text-white text-xl font-bold mb-3">
          {displayWorkouts.length} Workouts Available
        </Text>
        {displayWorkouts.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            onPress={() => navigation.navigate('Workout', { workout: item })}
          >
            <WorkoutCard 
              title={item.title} 
              level={item.level}
              category={item.category}
              bodyArea={item.bodyArea}
              duration={item.duration}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
