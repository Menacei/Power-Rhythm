import React from 'react';
import { View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function VideoDemoScreen({ route }) {
  const { workout } = route.params;
  return (
    <View className="flex-1 bg-black justify-center">
      <YoutubePlayer height={300} play={true} videoId={workout.videoId} />
    </View>
  );
}
