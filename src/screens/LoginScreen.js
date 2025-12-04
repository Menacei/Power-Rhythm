import React from 'react';
import { View, Text, Button } from 'react-native';
import { SocialLoginButtons } from '../components/SocialLoginButtons';

export default function LoginScreen({ navigation }) {
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Text className="text-white text-3xl mb-6 font-bold">Power & Rhythm</Text>
      <SocialLoginButtons onLogin={() => navigation.navigate('Dashboard')} />
      <Button title="Continue with Email" onPress={() => navigation.navigate('Dashboard')} />
    </View>
  );
}
