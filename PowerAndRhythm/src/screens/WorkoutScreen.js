import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function WorkoutScreen({ route, navigation }) {
  const { workout } = route.params;
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setTimer(0);
    setIsActive(false);
  };

  const handleWatchVideo = () => {
    navigation.navigate('VideoDemo', { workout });
  };

  const handleComplete = () => {
    setIsActive(false);
    Alert.alert(
      'Workout Complete!',
      `Great job! You completed ${workout.title} in ${formatTime(timer)}`,
      [
        { text: 'Back to Dashboard', onPress: () => navigation.navigate('Dashboard') },
        { text: 'View Analytics', onPress: () => navigation.navigate('Analytics') }
      ]
    );
  };

  return (
    <ScrollView className="bg-zinc-900 flex-1">
      <View className="p-4">
        {/* Header */}
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          className="mb-4"
        >
          <Text className="text-indigo-400 text-lg">← Back</Text>
        </TouchableOpacity>

        {/* Workout Info */}
        <View className="bg-zinc-800 p-6 rounded-2xl mb-4">
          <Text className="text-white text-3xl font-bold mb-2">{workout.title}</Text>
          <View className="flex-row justify-between mt-4">
            <View>
              <Text className="text-gray-400">Category</Text>
              <Text className="text-white text-lg font-semibold">{workout.category}</Text>
            </View>
            <View>
              <Text className="text-gray-400">Level</Text>
              <Text className="text-white text-lg font-semibold">{workout.level}</Text>
            </View>
            <View>
              <Text className="text-gray-400">Duration</Text>
              <Text className="text-white text-lg font-semibold">{workout.duration} min</Text>
            </View>
          </View>
          <View className="mt-4">
            <Text className="text-gray-400">Target Area</Text>
            <Text className="text-white text-lg font-semibold">{workout.bodyArea}</Text>
          </View>
        </View>

        {/* Timer */}
        <View className="bg-zinc-800 p-6 rounded-2xl mb-4 items-center">
          <Text className="text-gray-400 mb-2">Workout Timer</Text>
          <Text className="text-white text-5xl font-bold mb-4">{formatTime(timer)}</Text>
          <View className="flex-row gap-4">
            <TouchableOpacity 
              onPress={handleStartStop}
              className="bg-indigo-600 px-8 py-3 rounded-xl"
            >
              <Text className="text-white font-semibold text-lg">
                {isActive ? 'Pause' : 'Start'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={handleReset}
              className="bg-zinc-700 px-8 py-3 rounded-xl"
            >
              <Text className="text-white font-semibold text-lg">Reset</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity 
          onPress={handleWatchVideo}
          className="bg-red-600 p-4 rounded-2xl mb-3"
        >
          <Text className="text-white text-center text-lg font-semibold">
            🎥 Watch Video Demo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={handleComplete}
          className="bg-green-600 p-4 rounded-2xl mb-3"
        >
          <Text className="text-white text-center text-lg font-semibold">
            ✓ Complete Workout
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate('Community')}
          className="bg-zinc-700 p-4 rounded-2xl mb-3"
        >
          <Text className="text-white text-center text-lg font-semibold">
            💬 Share with Community
          </Text>
        </TouchableOpacity>

        {/* Workout Description */}
        <View className="bg-zinc-800 p-6 rounded-2xl">
          <Text className="text-white text-xl font-bold mb-3">About This Workout</Text>
          <Text className="text-gray-300 leading-6">
            This {workout.level.toLowerCase()} level {workout.category.toLowerCase()} workout 
            focuses on {workout.bodyArea.toLowerCase()} development. 
            {'\n\n'}
            Perfect for building strength, endurance, and technique in {workout.category}.
            {'\n\n'}
            Remember to warm up properly before starting and cool down after finishing.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
