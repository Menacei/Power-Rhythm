import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import WorkoutCard from '../components/WorkoutCard';
import { workoutData } from '../utils/workoutData';

export default function Dashboard({ navigation }) {
  return (
    <ScrollView className="bg-zinc-900 flex-1 p-4">
      <View className="flex-row justify-between items-center mb-6">
        <View className="flex-row items-center">
          <Image 
            source={require('../../assets/logo.jpg')}
            className="w-12 h-12 rounded-xl mr-3"
            resizeMode="cover"
          />
          <Text className="text-white text-2xl font-bold">Power & Rhythm</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Analytics')}>
          <Text className="text-indigo-400 text-lg">📊 Stats</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-white text-2xl font-bold mb-4">Choose Your Training</Text>
      {workoutData.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Workout', { workout: item })}>
          <WorkoutCard title={item.title} level={item.level} />
        </TouchableOpacity>
      ))}

      <View className="flex-row gap-3 mt-6">
        <TouchableOpacity
          className="bg-indigo-600 p-4 rounded-2xl flex-1"
          onPress={() => navigation.navigate('Community')}
        >
          <Text className="text-white text-center text-lg font-semibold">Community</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          className="bg-green-600 p-4 rounded-2xl flex-1"
          onPress={() => navigation.navigate('LiveCoach')}
        >
          <Text className="text-white text-center text-lg font-semibold">Live Coach</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="bg-zinc-800 p-4 rounded-2xl mt-3"
        onPress={() => navigation.navigate('Chat')}
      >
        <Text className="text-white text-center text-lg font-semibold">💬 Chat Support</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
