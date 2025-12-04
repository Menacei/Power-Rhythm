import React from 'react';
import { Image, View } from 'react-native';

export function Logo({ size = 'large', style }) {
  const sizes = {
    small: 'w-10 h-10',
    medium: 'w-16 h-16',
    large: 'w-64 h-64',
  };

  const roundedness = {
    small: 'rounded-lg',
    medium: 'rounded-xl',
    large: 'rounded-3xl',
  };

  return (
    <View style={style}>
      <Image 
        source={require('../../assets/logo.jpg')}
        className={`${sizes[size]} ${roundedness[size]}`}
        resizeMode="cover"
      />
    </View>
  );
}
