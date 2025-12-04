import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function AnalyticsScreen({ navigation }) {
  const stats = [
    { label: 'Total Workouts', value: '24', color: 'bg-indigo-600' },
    { label: 'Hours Trained', value: '18.5', color: 'bg-green-600' },
    { label: 'Calories Burned', value: '4,320', color: 'bg-orange-600' },
    { label: 'Current Streak', value: '7 days', color: 'bg-purple-600' },
  ];

  const weeklyData = [
    { day: 'Mon', workouts: 3 },
    { day: 'Tue', workouts: 2 },
    { day: 'Wed', workouts: 4 },
    { day: 'Thu', workouts: 1 },
    { day: 'Fri', workouts: 5 },
    { day: 'Sat', workouts: 3 },
    { day: 'Sun', workouts: 2 },
  ];

  const maxWorkouts = Math.max(...weeklyData.map(d => d.workouts));

  return (
    <ScrollView className="flex-1 bg-zinc-900 p-4">
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-indigo-400 text-lg mr-4">← Back</Text>
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">Your Analytics</Text>
      </View>

      <View className="flex-row flex-wrap justify-between mb-6">
        {stats.map((stat, index) => (
          <View
            key={index}
            className={`${stat.color} p-4 rounded-2xl mb-3 w-[48%]`}
          >
            <Text className="text-white text-2xl font-bold mb-1">{stat.value}</Text>
            <Text className="text-white text-sm">{stat.label}</Text>
          </View>
        ))}
      </View>

      <View className="bg-zinc-800 p-4 rounded-2xl mb-4">
        <Text className="text-white text-xl font-semibold mb-4">Weekly Activity</Text>
        <View className="flex-row items-end justify-between h-40">
          {weeklyData.map((data, index) => (
            <View key={index} className="items-center flex-1">
              <View
                className="bg-indigo-600 w-8 rounded-t-lg"
                style={{ height: `${(data.workouts / maxWorkouts) * 100}%` }}
              />
              <Text className="text-gray-400 text-xs mt-2">{data.day}</Text>
            </View>
          ))}
        </View>
      </View>

      <View className="bg-zinc-800 p-4 rounded-2xl mb-4">
        <Text className="text-white text-xl font-semibold mb-3">Recent Achievements</Text>
        <View className="flex-row items-center mb-2">
          <Text className="text-2xl mr-2">🏆</Text>
          <Text className="text-gray-300">Completed 7-day streak</Text>
        </View>
        <View className="flex-row items-center mb-2">
          <Text className="text-2xl mr-2">🔥</Text>
          <Text className="text-gray-300">Burned 500+ calories in one session</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-2xl mr-2">⭐</Text>
          <Text className="text-gray-300">Reached Advanced level</Text>
        </View>
      </View>
    </ScrollView>
  );
}
