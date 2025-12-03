import React from 'react';
import { View, Text } from 'react-native';

export default function WorkoutCard({ title, level }) {
  return (
    <View className="bg-zinc-800 p-4 rounded-2xl mb-4">
      <Text className="text-white text-xl font-semibold">{title}</Text>
      <Text className="text-gray-400">Difficulty: {level}</Text>
    </View>
  );
}
