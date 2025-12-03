import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SocialLoginButtons } from '../components/SocialLoginButtons';

export default function LoginScreen({ navigation }) {
  return (
    <View className="flex-1 justify-center items-center bg-black px-4">
      <Text className="text-white text-4xl mb-2 font-bold">Power & Rhythm</Text>
      <Text className="text-gray-400 text-lg mb-8 text-center">Train to the beat, achieve your peak</Text>
      
      <SocialLoginButtons onLogin={() => navigation.navigate('Dashboard')} />
      
      <TouchableOpacity
        className="bg-indigo-600 p-4 rounded-2xl w-full mt-2"
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text className="text-white text-center text-lg font-semibold">Continue with Email</Text>
      </TouchableOpacity>
    </View>
  );
}
