import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function WorkoutScreen({ route, navigation }) {
  const { workout } = route.params || { workout: { title: 'Workout', level: 'Beginner' } };
  const [isStarted, setIsStarted] = useState(false);

  return (
    <ScrollView className="flex-1 bg-zinc-900 p-4">
      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        className="mb-4"
      >
        <Text className="text-indigo-400 text-lg">← Back</Text>
      </TouchableOpacity>

      <Text className="text-white text-3xl font-bold mb-2">{workout.title}</Text>
      <Text className="text-gray-400 text-lg mb-6">Level: {workout.level}</Text>

      <View className="bg-zinc-800 p-6 rounded-2xl mb-4">
        <Text className="text-white text-xl font-semibold mb-4">Workout Details</Text>
        <Text className="text-gray-300 mb-2">• Warm-up: 5 minutes</Text>
        <Text className="text-gray-300 mb-2">• Main workout: 20 minutes</Text>
        <Text className="text-gray-300 mb-2">• Cool down: 5 minutes</Text>
        <Text className="text-gray-300 mb-2">• Equipment: Boxing gloves (optional)</Text>
      </View>

      <TouchableOpacity
        className="bg-indigo-600 p-4 rounded-2xl mb-3"
        onPress={() => navigation.navigate('VideoDemo', { workout })}
      >
        <Text className="text-white text-center text-lg font-semibold">Watch Video Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-green-600 p-4 rounded-2xl mb-3"
        onPress={() => setIsStarted(!isStarted)}
      >
        <Text className="text-white text-center text-lg font-semibold">
          {isStarted ? 'Pause Workout' : 'Start Workout'}
        </Text>
      </TouchableOpacity>

      {isStarted && (
        <View className="bg-zinc-800 p-4 rounded-2xl mt-4">
          <Text className="text-white text-center text-xl font-bold">Workout in Progress!</Text>
          <Text className="text-gray-400 text-center mt-2">Follow the rhythm and give it your all!</Text>
        </View>
      )}
    </ScrollView>
  );
}
