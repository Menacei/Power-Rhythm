import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { getAIRecommendations } from '../utils/aiWorkoutGenerator';

export default function LiveCoachScreen({ navigation }) {
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [coachTips, setCoachTips] = useState([]);

  useEffect(() => {
    loadRecommendations();
    generateCoachTips();
  }, []);

  const loadRecommendations = async () => {
    try {
      const recs = await getAIRecommendations([], {});
      setRecommendations(recs);
      setLoading(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to load recommendations');
      setLoading(false);
    }
  };

  const generateCoachTips = () => {
    const tips = [
      {
        id: 1,
        category: 'Technique',
        title: 'Perfect Your Form',
        description: 'Quality over quantity - focus on proper form to prevent injuries and maximize results.',
        icon: '🎯'
      },
      {
        id: 2,
        category: 'Nutrition',
        title: 'Fuel Your Body',
        description: 'Eat a balanced meal 2-3 hours before training. Include protein and complex carbs.',
        icon: '🥗'
      },
      {
        id: 3,
        category: 'Recovery',
        title: 'Rest and Recover',
        description: 'Muscles grow during rest. Ensure 7-9 hours of sleep and active recovery days.',
        icon: '😴'
      },
      {
        id: 4,
        category: 'Hydration',
        title: 'Stay Hydrated',
        description: 'Drink water before, during, and after workouts. Aim for 8-10 glasses daily.',
        icon: '💧'
      },
      {
        id: 5,
        category: 'Progression',
        title: 'Progressive Overload',
        description: 'Gradually increase intensity, duration, or complexity to continue making gains.',
        icon: '📈'
      },
      {
        id: 6,
        category: 'Mindset',
        title: 'Mental Toughness',
        description: 'Train your mind as well as your body. Visualization and positive self-talk work!',
        icon: '🧠'
      }
    ];
    setCoachTips(tips);
  };

  const handleAskCoach = () => {
    navigation.navigate('Chat');
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#18181b' }}>
      {/* Header */}
      <View style={{ padding: 16, paddingTop: 40, backgroundColor: '#27272a' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: '#818cf8', fontSize: 18, marginBottom: 8 }}>← Back</Text>
        </TouchableOpacity>
        <Text style={{ color: '#ffffff', fontSize: 28, fontWeight: 'bold' }}>Your AI Coach</Text>
        <Text style={{ color: '#9ca3af', marginTop: 4 }}>Personalized guidance powered by AI</Text>
      </View>

      <View style={{ padding: 16 }}>
        {/* Quick Actions */}
        <View style={{ backgroundColor: '#27272a', padding: 20, borderRadius: 16, marginBottom: 16 }}>
          <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>
            Quick Actions
          </Text>
          <TouchableOpacity 
            onPress={handleAskCoach}
            style={{ backgroundColor: '#4f46e5', padding: 16, borderRadius: 12, marginBottom: 12 }}
          >
            <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '600', textAlign: 'center' }}>
              💬 Ask Your AI Coach
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Analytics')}
            style={{ backgroundColor: '#3f3f46', padding: 16, borderRadius: 12, marginBottom: 12 }}
          >
            <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '600', textAlign: 'center' }}>
              📊 View Progress Analytics
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => loadRecommendations()}
            style={{ backgroundColor: '#3f3f46', padding: 16, borderRadius: 12 }}
          >
            <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '600', textAlign: 'center' }}>
              🔄 Refresh Recommendations
            </Text>
          </TouchableOpacity>
        </View>

        {/* AI Recommendations */}
        {!loading && recommendations && (
          <View style={{ backgroundColor: '#27272a', padding: 20, borderRadius: 16, marginBottom: 16 }}>
            <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>
              🤖 AI Recommendations
            </Text>
            
            {recommendations.suggestedCategories.length > 0 && (
              <View style={{ marginBottom: 16 }}>
                <Text style={{ color: '#9ca3af', fontSize: 14, marginBottom: 8 }}>
                  Suggested Training Types:
                </Text>
                {recommendations.suggestedCategories.map((category, index) => (
                  <View key={index} style={{ backgroundColor: '#3f3f46', padding: 12, borderRadius: 8, marginBottom: 8 }}>
                    <Text style={{ color: '#ffffff', fontSize: 16 }}>{category}</Text>
                  </View>
                ))}
              </View>
            )}

            {recommendations.focusAreas.length > 0 && (
              <View style={{ marginBottom: 16 }}>
                <Text style={{ color: '#9ca3af', fontSize: 14, marginBottom: 8 }}>
                  Focus Areas:
                </Text>
                {recommendations.focusAreas.map((area, index) => (
                  <View key={index} style={{ backgroundColor: '#3f3f46', padding: 12, borderRadius: 8, marginBottom: 8 }}>
                    <Text style={{ color: '#ffffff', fontSize: 16 }}>{area}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        )}

        {/* Coach Tips */}
        <Text style={{ color: '#ffffff', fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>
          💡 Coach's Tips
        </Text>
        {coachTips.map((tip) => (
          <View key={tip.id} style={{ backgroundColor: '#27272a', padding: 16, borderRadius: 16, marginBottom: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
              <Text style={{ fontSize: 32, marginRight: 12 }}>{tip.icon}</Text>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#818cf8', fontSize: 12, fontWeight: '600', marginBottom: 4 }}>
                  {tip.category.toUpperCase()}
                </Text>
                <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>
                  {tip.title}
                </Text>
              </View>
            </View>
            <Text style={{ color: '#d1d5db', fontSize: 15, lineHeight: 22 }}>
              {tip.description}
            </Text>
          </View>
        ))}

        {/* Additional Info */}
        <View style={{ backgroundColor: '#1e3a8a', padding: 16, borderRadius: 16, marginTop: 8, marginBottom: 24 }}>
          <Text style={{ color: '#ffffff', fontSize: 16, textAlign: 'center', lineHeight: 24 }}>
            🌟 Your AI coach learns from your progress and adapts recommendations to help you achieve your goals faster!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
