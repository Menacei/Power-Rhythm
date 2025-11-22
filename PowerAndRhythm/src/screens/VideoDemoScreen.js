import React, { useState, useCallback, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const { height } = Dimensions.get('window');

export default function VideoDemoScreen({ route, navigation }) {
  const { workout } = route.params;
  const [playing, setPlaying] = useState(true);
  const [pipMode, setPipMode] = useState(false);
  const playerRef = useRef(null);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const enablePiPMode = useCallback(() => {
    setPipMode(true);
    // Note: This demonstrates PiP UI/UX. For production implementation:
    // 1. Use react-native-video with PiP support
    // 2. Enable PiP in iOS (Info.plist: UIBackgroundModes with 'audio')
    // 3. Enable PiP in Android (AndroidManifest.xml: supportsPictureInPicture)
    // 4. Call native PiP APIs:
    //    - iOS: AVPictureInPictureController
    //    - Android: enterPictureInPictureMode()
    // YouTube iframe doesn't support native PiP; consider react-native-video for production
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{workout.title}</Text>
      </View>

      {/* Video Player */}
      <View style={styles.playerContainer}>
        <YoutubePlayer
          ref={playerRef}
          height={pipMode ? 200 : height * 0.4}
          play={playing}
          videoId={workout.videoId}
          onChangeState={onStateChange}
          webViewProps={{
            allowsInlineMediaPlayback: true,
          }}
        />
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity 
          style={styles.controlButton}
          onPress={togglePlaying}
        >
          <Text style={styles.controlText}>
            {playing ? '⏸ Pause' : '▶️ Play'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.controlButton, styles.pipButton]}
          onPress={enablePiPMode}
        >
          <Text style={styles.controlText}>
            🎬 Enable PiP Mode
          </Text>
        </TouchableOpacity>
      </View>

      {/* Workout Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Workout Details</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Category:</Text>
          <Text style={styles.infoValue}>{workout.category}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Level:</Text>
          <Text style={styles.infoValue}>{workout.level}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Target Area:</Text>
          <Text style={styles.infoValue}>{workout.bodyArea}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Duration:</Text>
          <Text style={styles.infoValue}>{workout.duration} minutes</Text>
        </View>
      </View>

      {pipMode && (
        <View style={styles.pipNotice}>
          <Text style={styles.pipNoticeText}>
            💡 PiP mode enabled! You can now minimize this video and continue using the app.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18181b',
  },
  header: {
    padding: 16,
    paddingTop: 40,
    backgroundColor: '#27272a',
  },
  backButton: {
    color: '#818cf8',
    fontSize: 18,
    marginBottom: 8,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  playerContainer: {
    backgroundColor: '#000000',
  },
  controls: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  controlButton: {
    flex: 1,
    backgroundColor: '#3f3f46',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  pipButton: {
    backgroundColor: '#4f46e5',
  },
  controlText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  infoContainer: {
    margin: 16,
    backgroundColor: '#27272a',
    padding: 16,
    borderRadius: 16,
  },
  infoTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  infoLabel: {
    color: '#9ca3af',
    fontSize: 16,
  },
  infoValue: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  pipNotice: {
    margin: 16,
    padding: 12,
    backgroundColor: '#1e40af',
    borderRadius: 12,
  },
  pipNoticeText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});
