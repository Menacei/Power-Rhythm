import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import WorkoutCard from '../components/WorkoutCard';
import { workoutData } from '../utils/workoutData';

export default function Dashboard({ navigation }) {
  return (
    <ScrollView className="bg-zinc-900 flex-1 p-4">
      <Text className="text-white text-2xl font-bold mb-4">Choose Your Training</Text>
      {workoutData.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Workout', { workout: item })}>
          <WorkoutCard title={item.title} level={item.level} />
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        className="bg-indigo-600 p-4 rounded-2xl mt-6"
        onPress={() => navigation.navigate('Community')}
      >
        <Text className="text-white text-center text-lg font-semibold">Join the Community</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
