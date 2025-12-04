import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export function SocialLoginButtons({ onLogin }) {
  return (
    <View className="w-full px-6">
      <TouchableOpacity
        className="bg-white p-4 rounded-2xl mb-3 flex-row items-center justify-center"
        onPress={onLogin}
      >
        <Text className="text-black font-semibold text-lg">Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-blue-600 p-4 rounded-2xl mb-3 flex-row items-center justify-center"
        onPress={onLogin}
      >
        <Text className="text-white font-semibold text-lg">Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-zinc-800 p-4 rounded-2xl mb-3 flex-row items-center justify-center"
        onPress={onLogin}
      >
        <Text className="text-white font-semibold text-lg">Continue with Apple</Text>
      </TouchableOpacity>
    </View>
  );
}
