import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function LiveCoachScreen({ navigation }) {
  const [isLive, setIsLive] = useState(false);

  const coaches = [
    { id: 1, name: 'Coach Mike', specialty: 'Boxing', available: true },
    { id: 2, name: 'Coach Sarah', specialty: 'Kickboxing', available: true },
    { id: 3, name: 'Coach Carlos', specialty: 'Muay Thai', available: false },
  ];

  return (
    <ScrollView className="flex-1 bg-zinc-900 p-4">
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-indigo-400 text-lg mr-4">← Back</Text>
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">Live Coaching</Text>
      </View>

      {isLive ? (
        <View className="bg-zinc-800 p-6 rounded-2xl mb-4">
          <View className="bg-black h-64 rounded-xl mb-4 justify-center items-center">
            <Text className="text-white text-xl">🎥 Live Session</Text>
            <Text className="text-gray-400 mt-2">Connected to Coach Mike</Text>
          </View>
          <TouchableOpacity
            className="bg-red-600 p-4 rounded-2xl"
            onPress={() => setIsLive(false)}
          >
            <Text className="text-white text-center text-lg font-semibold">End Session</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Text className="text-gray-300 mb-4">Connect with a live coach for personalized training</Text>
          
          {coaches.map((coach) => (
            <View key={coach.id} className="bg-zinc-800 p-4 rounded-2xl mb-3">
              <Text className="text-white text-xl font-semibold">{coach.name}</Text>
              <Text className="text-gray-400 mb-2">{coach.specialty}</Text>
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <View
                    className={`w-3 h-3 rounded-full mr-2 ${
                      coach.available ? 'bg-green-500' : 'bg-gray-500'
                    }`}
                  />
                  <Text className="text-gray-300">
                    {coach.available ? 'Available' : 'Offline'}
                  </Text>
                </View>
                {coach.available && (
                  <TouchableOpacity
                    className="bg-indigo-600 px-4 py-2 rounded-xl"
                    onPress={() => setIsLive(true)}
                  >
                    <Text className="text-white font-semibold">Connect</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
        </>
      )}
    </ScrollView>
  );
}
