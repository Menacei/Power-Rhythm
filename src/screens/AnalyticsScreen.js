import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { generateMonthlyWorkoutPlan } from '../utils/aiWorkoutGenerator';

export default function AnalyticsScreen({ navigation }) {
  const [stats, setStats] = useState({
    totalWorkouts: 42,
    totalMinutes: 1260,
    currentStreak: 7,
    longestStreak: 14,
    favoriteCategory: 'Boxing',
    weeklyGoal: 4,
    weeklyCompleted: 3
  });

  const [monthlyPlan, setMonthlyPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateNewPlan = async () => {
    setLoading(true);
    try {
      const plan = await generateMonthlyWorkoutPlan({
        fitnessLevel: 'Intermediate',
        preferredCategories: ['Boxing', 'HIIT', 'Calisthenics'],
        workoutsPerWeek: 4,
        sessionDuration: 30
      });
      setMonthlyPlan(plan);
    } catch (error) {
      console.error('Error generating plan:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    generateNewPlan();
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#18181b' }}>
      {/* Header */}
      <View style={{ padding: 16, paddingTop: 40, backgroundColor: '#27272a' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: '#818cf8', fontSize: 18, marginBottom: 8 }}>← Back</Text>
        </TouchableOpacity>
        <Text style={{ color: '#ffffff', fontSize: 28, fontWeight: 'bold' }}>Your Analytics</Text>
        <Text style={{ color: '#9ca3af', marginTop: 4 }}>Track your progress and achievements</Text>
      </View>

      <View style={{ padding: 16 }}>
        {/* Quick Stats Grid */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
          <View style={{ flex: 1, minWidth: '45%', backgroundColor: '#27272a', padding: 16, borderRadius: 16 }}>
            <Text style={{ color: '#9ca3af', fontSize: 14, marginBottom: 4 }}>Total Workouts</Text>
            <Text style={{ color: '#ffffff', fontSize: 32, fontWeight: 'bold' }}>{stats.totalWorkouts}</Text>
          </View>
          
          <View style={{ flex: 1, minWidth: '45%', backgroundColor: '#27272a', padding: 16, borderRadius: 16 }}>
            <Text style={{ color: '#9ca3af', fontSize: 14, marginBottom: 4 }}>Total Minutes</Text>
            <Text style={{ color: '#ffffff', fontSize: 32, fontWeight: 'bold' }}>{stats.totalMinutes}</Text>
          </View>

          <View style={{ flex: 1, minWidth: '45%', backgroundColor: '#27272a', padding: 16, borderRadius: 16 }}>
            <Text style={{ color: '#9ca3af', fontSize: 14, marginBottom: 4 }}>Current Streak</Text>
            <Text style={{ color: '#10b981', fontSize: 32, fontWeight: 'bold' }}>{stats.currentStreak} 🔥</Text>
          </View>

          <View style={{ flex: 1, minWidth: '45%', backgroundColor: '#27272a', padding: 16, borderRadius: 16 }}>
            <Text style={{ color: '#9ca3af', fontSize: 14, marginBottom: 4 }}>Longest Streak</Text>
            <Text style={{ color: '#fbbf24', fontSize: 32, fontWeight: 'bold' }}>{stats.longestStreak} 🏆</Text>
          </View>
        </View>

        {/* Weekly Progress */}
        <View style={{ backgroundColor: '#27272a', padding: 20, borderRadius: 16, marginBottom: 16 }}>
          <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>
            Weekly Progress
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
            <Text style={{ color: '#9ca3af', fontSize: 16 }}>
              {stats.weeklyCompleted} / {stats.weeklyGoal} workouts
            </Text>
            <Text style={{ color: '#10b981', fontSize: 16, fontWeight: '600' }}>
              {Math.round((stats.weeklyCompleted / stats.weeklyGoal) * 100)}%
            </Text>
          </View>
          <View style={{ height: 12, backgroundColor: '#3f3f46', borderRadius: 6, overflow: 'hidden' }}>
            <View 
              style={{ 
                height: '100%', 
                backgroundColor: '#10b981', 
                width: `${(stats.weeklyCompleted / stats.weeklyGoal) * 100}%`,
                borderRadius: 6
              }} 
            />
          </View>
          <Text style={{ color: '#9ca3af', fontSize: 14, marginTop: 8 }}>
            Keep it up! {stats.weeklyGoal - stats.weeklyCompleted} more workout{stats.weeklyGoal - stats.weeklyCompleted !== 1 ? 's' : ''} to reach your weekly goal!
          </Text>
        </View>

        {/* Favorite Category */}
        <View style={{ backgroundColor: '#27272a', padding: 20, borderRadius: 16, marginBottom: 16 }}>
          <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>
            Favorite Category
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 40, marginRight: 16 }}>🥊</Text>
            <View>
              <Text style={{ color: '#ffffff', fontSize: 24, fontWeight: 'bold' }}>
                {stats.favoriteCategory}
              </Text>
              <Text style={{ color: '#9ca3af', fontSize: 14 }}>
                Most completed workouts
              </Text>
            </View>
          </View>
        </View>

        {/* AI Generated Monthly Plan */}
        {monthlyPlan && (
          <View style={{ backgroundColor: '#27272a', padding: 20, borderRadius: 16, marginBottom: 16 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold' }}>
                🤖 AI Monthly Plan
              </Text>
              <TouchableOpacity 
                onPress={generateNewPlan}
                disabled={loading}
                style={{ backgroundColor: '#4f46e5', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 }}
              >
                <Text style={{ color: '#ffffff', fontSize: 14, fontWeight: '600' }}>
                  {loading ? 'Generating...' : 'Refresh'}
                </Text>
              </TouchableOpacity>
            </View>
            
            <Text style={{ color: '#9ca3af', fontSize: 14, marginBottom: 12 }}>
              {monthlyPlan.month} - {monthlyPlan.userLevel} Level
            </Text>

            {monthlyPlan.weeks.slice(0, 2).map((week, index) => (
              <View key={index} style={{ marginBottom: 16 }}>
                <Text style={{ color: '#818cf8', fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
                  Week {week.weekNumber}
                </Text>
                {week.workouts.map((workout, wIndex) => (
                  <View key={wIndex} style={{ backgroundColor: '#3f3f46', padding: 12, borderRadius: 8, marginBottom: 6 }}>
                    <Text style={{ color: '#ffffff', fontSize: 15, fontWeight: '600' }}>
                      Day {workout.day}: {workout.title}
                    </Text>
                    <Text style={{ color: '#9ca3af', fontSize: 13, marginTop: 4 }}>
                      {workout.duration} min • {workout.exercises.length} exercises
                    </Text>
                  </View>
                ))}
              </View>
            ))}

            <Text style={{ color: '#9ca3af', fontSize: 12, fontStyle: 'italic', marginTop: 8 }}>
              💡 Your AI coach generates a new personalized plan every month based on your progress!
            </Text>
          </View>
        )}

        {/* Achievements */}
        <View style={{ backgroundColor: '#27272a', padding: 20, borderRadius: 16, marginBottom: 16 }}>
          <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>
            🏆 Achievements
          </Text>
          
          <View style={{ marginBottom: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 32, marginRight: 12 }}>🔥</Text>
              <View>
                <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '600' }}>Week Warrior</Text>
                <Text style={{ color: '#9ca3af', fontSize: 14 }}>7-day workout streak</Text>
              </View>
            </View>
          </View>

          <View style={{ marginBottom: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 32, marginRight: 12 }}>💪</Text>
              <View>
                <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '600' }}>Century Club</Text>
                <Text style={{ color: '#9ca3af', fontSize: 14 }}>Completed 40+ workouts</Text>
              </View>
            </View>
          </View>

          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 32, marginRight: 12 }}>⏱️</Text>
              <View>
                <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '600' }}>Time Master</Text>
                <Text style={{ color: '#9ca3af', fontSize: 14 }}>1000+ minutes trained</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity 
          onPress={() => navigation.navigate('Dashboard')}
          style={{ backgroundColor: '#4f46e5', padding: 16, borderRadius: 16, marginBottom: 12 }}
        >
          <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 18, fontWeight: '600' }}>
            Start New Workout
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate('LiveCoach')}
          style={{ backgroundColor: '#3f3f46', padding: 16, borderRadius: 16, marginBottom: 24 }}
        >
          <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 18, fontWeight: '600' }}>
            Talk to AI Coach
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
