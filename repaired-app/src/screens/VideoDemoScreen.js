import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function VideoDemoScreen({ route, navigation }) {
  const { workout } = route.params || { workout: { title: 'Workout', videoId: 'demo' } };
  
  return (
    <View className="flex-1 bg-zinc-900 p-4">
      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        className="mb-4"
      >
        <Text className="text-indigo-400 text-lg">← Back</Text>
      </TouchableOpacity>

      <Text className="text-white text-2xl font-bold mb-4">Video Demo</Text>
      
      <View className="bg-black rounded-2xl h-64 justify-center items-center mb-4">
        <Text className="text-white text-6xl mb-2">▶</Text>
        <Text className="text-gray-400">Video Player</Text>
        <Text className="text-gray-500 text-sm mt-2">{workout.title}</Text>
      </View>

      <View className="bg-zinc-800 p-4 rounded-2xl">
        <Text className="text-white text-lg font-semibold mb-2">About this workout</Text>
        <Text className="text-gray-300">
          Watch and follow along with this {workout.title} demonstration. 
          Learn proper form and techniques to maximize your training results.
        </Text>
      </View>

      <TouchableOpacity
        className="bg-indigo-600 p-4 rounded-2xl mt-4"
        onPress={() => navigation.navigate('Workout', { workout })}
      >
        <Text className="text-white text-center text-lg font-semibold">Start Workout</Text>
      </TouchableOpacity>
    </View>
  );
}
