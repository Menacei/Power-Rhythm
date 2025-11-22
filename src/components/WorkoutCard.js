import React from 'react';
import { View, Text } from 'react-native';

export default function WorkoutCard({ title, level, category, bodyArea, duration }) {
  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'text-green-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Advanced': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <View className="bg-zinc-800 p-4 rounded-2xl mb-3">
      <Text className="text-white text-xl font-semibold mb-2">{title}</Text>
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-gray-400 text-sm">Category: {category}</Text>
          {bodyArea && <Text className="text-gray-400 text-sm">Target: {bodyArea}</Text>}
        </View>
        <View className="items-end">
          <Text className={`${getLevelColor(level)} font-semibold`}>{level}</Text>
          {duration && <Text className="text-indigo-400 text-sm">{duration} min</Text>}
        </View>
      </View>
    </View>
  );
}
