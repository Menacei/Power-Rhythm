import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function LeaderboardScreen({ navigation }) {
  const [timeframe, setTimeframe] = useState('weekly');
  const [category, setCategory] = useState('all');
  
  // Mock leaderboard data - in production, this would come from a backend API
  const leaderboardData = {
    weekly: [
      { id: 1, rank: 1, name: 'Alex "The Machine" Chen', workouts: 28, points: 2840, streak: 12, avatar: '💪' },
      { id: 2, rank: 2, name: 'Sarah "Iron Fist" Johnson', workouts: 26, points: 2650, streak: 10, avatar: '🥊' },
      { id: 3, rank: 3, name: 'Mike "Thunder" Rodriguez', workouts: 25, points: 2580, streak: 9, avatar: '⚡' },
      { id: 4, rank: 4, name: 'Emma "Lightning" Davis', workouts: 24, points: 2450, streak: 8, avatar: '🔥' },
      { id: 5, rank: 5, name: 'Jason "Beast" Williams', workouts: 23, points: 2380, streak: 11, avatar: '🦁' },
      { id: 6, rank: 6, name: 'Lisa "Warrior" Martinez', workouts: 22, points: 2290, streak: 7, avatar: '⚔️' },
      { id: 7, rank: 7, name: 'Tom "Hammer" Brown', workouts: 21, points: 2180, streak: 6, avatar: '🔨' },
      { id: 8, rank: 8, name: 'You', workouts: 20, points: 2050, streak: 7, avatar: '🌟', isCurrentUser: true },
      { id: 9, rank: 9, name: 'Chris "Titan" Lee', workouts: 19, points: 1980, streak: 5, avatar: '💎' },
      { id: 10, rank: 10, name: 'Rachel "Phoenix" Wilson', workouts: 18, points: 1850, streak: 4, avatar: '🦅' },
    ],
    monthly: [
      { id: 1, rank: 1, name: 'Sarah "Iron Fist" Johnson', workouts: 112, points: 11850, streak: 28, avatar: '🥊' },
      { id: 2, rank: 2, name: 'Alex "The Machine" Chen', workouts: 108, points: 11450, streak: 26, avatar: '💪' },
      { id: 3, rank: 3, name: 'Mike "Thunder" Rodriguez', workouts: 105, points: 11200, streak: 24, avatar: '⚡' },
      { id: 4, rank: 4, name: 'You', workouts: 92, points: 9850, streak: 21, avatar: '🌟', isCurrentUser: true },
      { id: 5, rank: 5, name: 'Emma "Lightning" Davis', workouts: 88, points: 9450, streak: 19, avatar: '🔥' },
    ],
    allTime: [
      { id: 1, rank: 1, name: 'Alex "The Machine" Chen', workouts: 542, points: 58420, streak: 145, avatar: '💪' },
      { id: 2, rank: 2, name: 'Sarah "Iron Fist" Johnson', workouts: 498, points: 52890, streak: 132, avatar: '🥊' },
      { id: 3, rank: 3, name: 'Mike "Thunder" Rodriguez', workouts: 445, points: 48650, streak: 118, avatar: '⚡' },
      { id: 4, rank: 4, name: 'Emma "Lightning" Davis', workouts: 412, points: 45280, streak: 105, avatar: '🔥' },
      { id: 5, rank: 5, name: 'Jason "Beast" Williams', workouts: 388, points: 42150, streak: 98, avatar: '🦁' },
      { id: 6, rank: 6, name: 'You', workouts: 342, points: 38920, streak: 87, avatar: '🌟', isCurrentUser: true },
    ]
  };

  const currentLeaderboard = leaderboardData[timeframe];

  const getRankColor = (rank) => {
    if (rank === 1) return '#FFD700'; // Gold
    if (rank === 2) return '#C0C0C0'; // Silver
    if (rank === 3) return '#CD7F32'; // Bronze
    return '#9ca3af'; // Gray
  };

  const getRankIcon = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Leaderboard</Text>
        <Text style={styles.headerSubtitle}>Compete with the best athletes</Text>
      </View>

      {/* Timeframe Selector */}
      <View style={styles.timeframeContainer}>
        <TouchableOpacity
          style={[styles.timeframeButton, timeframe === 'weekly' && styles.timeframeButtonActive]}
          onPress={() => setTimeframe('weekly')}
        >
          <Text style={[styles.timeframeText, timeframe === 'weekly' && styles.timeframeTextActive]}>
            Weekly
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.timeframeButton, timeframe === 'monthly' && styles.timeframeButtonActive]}
          onPress={() => setTimeframe('monthly')}
        >
          <Text style={[styles.timeframeText, timeframe === 'monthly' && styles.timeframeTextActive]}>
            Monthly
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.timeframeButton, timeframe === 'allTime' && styles.timeframeButtonActive]}
          onPress={() => setTimeframe('allTime')}
        >
          <Text style={[styles.timeframeText, timeframe === 'allTime' && styles.timeframeTextActive]}>
            All Time
          </Text>
        </TouchableOpacity>
      </View>

      {/* Stats Summary */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>
            {currentLeaderboard.find(u => u.isCurrentUser)?.rank || '-'}
          </Text>
          <Text style={styles.statLabel}>Your Rank</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>
            {currentLeaderboard.find(u => u.isCurrentUser)?.points || 0}
          </Text>
          <Text style={styles.statLabel}>Your Points</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>
            {currentLeaderboard.find(u => u.isCurrentUser)?.streak || 0} 🔥
          </Text>
          <Text style={styles.statLabel}>Streak</Text>
        </View>
      </View>

      {/* Premium Upgrade Banner */}
      <TouchableOpacity 
        style={styles.premiumBanner}
        onPress={() => navigation.navigate('Premium')}
      >
        <Text style={styles.premiumIcon}>👑</Text>
        <View style={styles.premiumTextContainer}>
          <Text style={styles.premiumTitle}>Upgrade to Premium</Text>
          <Text style={styles.premiumSubtitle}>Unlock global rankings & advanced stats</Text>
        </View>
        <Text style={styles.premiumArrow}>→</Text>
      </TouchableOpacity>

      {/* Leaderboard List */}
      <View style={styles.leaderboardContainer}>
        <Text style={styles.leaderboardTitle}>Top Athletes</Text>
        
        {currentLeaderboard.map((user) => (
          <View
            key={user.id}
            style={[
              styles.leaderboardItem,
              user.isCurrentUser && styles.leaderboardItemHighlight
            ]}
          >
            {/* Rank */}
            <View style={styles.rankContainer}>
              <Text style={[styles.rankText, { color: getRankColor(user.rank) }]}>
                {getRankIcon(user.rank)}
              </Text>
            </View>

            {/* Avatar & Name */}
            <View style={styles.userInfo}>
              <Text style={styles.avatar}>{user.avatar}</Text>
              <View style={styles.nameContainer}>
                <Text style={[styles.userName, user.isCurrentUser && styles.userNameHighlight]}>
                  {user.name}
                </Text>
                <View style={styles.statsRow}>
                  <Text style={styles.statText}>{user.workouts} workouts</Text>
                  <Text style={styles.statText}>•</Text>
                  <Text style={styles.statText}>{user.streak} day streak 🔥</Text>
                </View>
              </View>
            </View>

            {/* Points */}
            <View style={styles.pointsContainer}>
              <Text style={styles.pointsText}>{user.points}</Text>
              <Text style={styles.pointsLabel}>pts</Text>
            </View>
          </View>
        ))}
      </View>

      {/* How Points Work */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>How Points Work</Text>
        <View style={styles.infoItem}>
          <Text style={styles.infoIcon}>🏋️</Text>
          <Text style={styles.infoText}>Complete workout: +100 points</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoIcon}>🔥</Text>
          <Text style={styles.infoText}>Daily streak bonus: +10 per day</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoIcon}>⚡</Text>
          <Text style={styles.infoText}>Advanced workouts: +50 bonus</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoIcon}>🎯</Text>
          <Text style={styles.infoText}>Challenge completion: +200 points</Text>
        </View>
      </View>

      {/* Bottom Padding */}
      <View style={{ height: 32 }} />
    </ScrollView>
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
  headerTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#9ca3af',
    marginTop: 4,
  },
  timeframeContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  timeframeButton: {
    flex: 1,
    backgroundColor: '#27272a',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  timeframeButtonActive: {
    backgroundColor: '#4f46e5',
  },
  timeframeText: {
    color: '#9ca3af',
    fontSize: 14,
    fontWeight: '600',
  },
  timeframeTextActive: {
    color: '#ffffff',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 16,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#27272a',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  statValue: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#9ca3af',
    fontSize: 12,
    marginTop: 4,
  },
  premiumBanner: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4f46e5',
  },
  premiumIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  premiumTextContainer: {
    flex: 1,
  },
  premiumTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  premiumSubtitle: {
    color: '#e0e7ff',
    fontSize: 12,
    marginTop: 2,
  },
  premiumArrow: {
    color: '#ffffff',
    fontSize: 24,
  },
  leaderboardContainer: {
    marginHorizontal: 16,
  },
  leaderboardTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#27272a',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  leaderboardItemHighlight: {
    backgroundColor: '#312e81',
    borderWidth: 2,
    borderColor: '#4f46e5',
  },
  rankContainer: {
    width: 40,
    marginRight: 12,
  },
  rankText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    fontSize: 32,
    marginRight: 12,
  },
  nameContainer: {
    flex: 1,
  },
  userName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  userNameHighlight: {
    color: '#818cf8',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  statText: {
    color: '#9ca3af',
    fontSize: 12,
  },
  pointsContainer: {
    alignItems: 'flex-end',
  },
  pointsText: {
    color: '#10b981',
    fontSize: 20,
    fontWeight: 'bold',
  },
  pointsLabel: {
    color: '#9ca3af',
    fontSize: 12,
  },
  infoContainer: {
    margin: 16,
    backgroundColor: '#27272a',
    padding: 20,
    borderRadius: 16,
  },
  infoTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoIcon: {
    fontSize: 24,
    marginRight: 12,
    width: 32,
  },
  infoText: {
    color: '#d1d5db',
    fontSize: 14,
  },
});
