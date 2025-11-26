import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';

export default function PremiumScreen({ navigation }) {
  const [selectedPlan, setSelectedPlan] = useState('yearly');

  const plans = {
    monthly: {
      id: 'monthly',
      name: 'Monthly',
      price: '$9.99',
      period: '/month',
      savings: null,
      popular: false,
    },
    yearly: {
      id: 'yearly',
      name: 'Yearly',
      price: '$79.99',
      period: '/year',
      savings: 'Save 33%',
      popular: true,
    },
    lifetime: {
      id: 'lifetime',
      name: 'Lifetime',
      price: '$199.99',
      period: 'one-time',
      savings: 'Best Value',
      popular: false,
    },
  };

  const premiumFeatures = [
    { icon: '🏆', title: 'Global Leaderboards', description: 'Compete with athletes worldwide' },
    { icon: '🤖', title: 'Advanced AI Coach', description: 'Personalized training with ML algorithms' },
    { icon: '🎥', title: 'Unlimited Video Access', description: 'Full HD videos for all 150 exercises' },
    { icon: '📊', title: 'Advanced Analytics', description: 'Detailed performance insights & trends' },
    { icon: '🎯', title: 'Custom Workouts', description: 'Create and save your own routines' },
    { icon: '👥', title: 'Community Features', description: 'Join challenges & groups' },
    { icon: '📱', title: 'Offline Mode', description: 'Download workouts for offline access' },
    { icon: '🔔', title: 'Smart Notifications', description: 'AI-powered workout reminders' },
    { icon: '💪', title: 'All Exercise Categories', description: 'Access to 150+ premium exercises' },
    { icon: '🎨', title: 'Custom Themes', description: 'Personalize your app experience' },
    { icon: '⚡', title: 'Priority Support', description: '24/7 premium customer support' },
    { icon: '🚀', title: 'Early Access', description: 'Get new features before everyone else' },
  ];

  const handleSubscribe = () => {
    const plan = plans[selectedPlan];
    Alert.alert(
      'Subscribe to Premium',
      `You're about to subscribe to the ${plan.name} plan for ${plan.price}${plan.period}. Continue to payment?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Continue',
          onPress: () => {
            // In production, this would integrate with payment processing
            Alert.alert('Success!', 'Welcome to Premium! 🎉', [
              { text: 'OK', onPress: () => navigation.goBack() }
            ]);
          }
        }
      ]
    );
  };

  const handleRestore = () => {
    Alert.alert('Restore Purchases', 'Checking for previous purchases...', [
      { text: 'OK' }
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>✕</Text>
        </TouchableOpacity>
      </View>

      {/* Premium Badge */}
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeIcon}>👑</Text>
        <Text style={styles.badgeTitle}>Power & Rhythm Premium</Text>
        <Text style={styles.badgeSubtitle}>Unlock Your Full Potential</Text>
      </View>

      {/* Plan Selection */}
      <View style={styles.plansContainer}>
        {Object.values(plans).map((plan) => (
          <TouchableOpacity
            key={plan.id}
            style={[
              styles.planCard,
              selectedPlan === plan.id && styles.planCardSelected
            ]}
            onPress={() => setSelectedPlan(plan.id)}
          >
            {plan.popular && (
              <View style={styles.popularBadge}>
                <Text style={styles.popularText}>MOST POPULAR</Text>
              </View>
            )}
            <View style={styles.planHeader}>
              <View>
                <Text style={styles.planName}>{plan.name}</Text>
                {plan.savings && (
                  <Text style={styles.planSavings}>{plan.savings}</Text>
                )}
              </View>
              <View style={styles.planPriceContainer}>
                <Text style={styles.planPrice}>{plan.price}</Text>
                <Text style={styles.planPeriod}>{plan.period}</Text>
              </View>
            </View>
            <View style={styles.radioContainer}>
              <View style={[
                styles.radioOuter,
                selectedPlan === plan.id && styles.radioOuterSelected
              ]}>
                {selectedPlan === plan.id && <View style={styles.radioInner} />}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Features List */}
      <View style={styles.featuresContainer}>
        <Text style={styles.featuresTitle}>What You Get</Text>
        {premiumFeatures.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <Text style={styles.featureIcon}>{feature.icon}</Text>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>{feature.description}</Text>
            </View>
            <Text style={styles.checkmark}>✓</Text>
          </View>
        ))}
      </View>

      {/* Social Proof */}
      <View style={styles.socialProofContainer}>
        <Text style={styles.socialProofText}>
          ⭐ Join 50,000+ athletes who upgraded to Premium
        </Text>
      </View>

      {/* Subscribe Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.subscribeButton}
          onPress={handleSubscribe}
        >
          <Text style={styles.subscribeButtonText}>
            Start Premium - {plans[selectedPlan].price}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.restoreButton}
          onPress={handleRestore}
        >
          <Text style={styles.restoreButtonText}>Restore Purchases</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By subscribing, you agree to our Terms of Service and Privacy Policy.
          Subscription automatically renews unless cancelled 24 hours before the end of the period.
        </Text>
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
    alignItems: 'flex-end',
  },
  backButton: {
    color: '#9ca3af',
    fontSize: 32,
    fontWeight: '300',
  },
  badgeContainer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  badgeIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  badgeTitle: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  badgeSubtitle: {
    color: '#9ca3af',
    fontSize: 16,
    marginTop: 8,
  },
  plansContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  planCard: {
    backgroundColor: '#27272a',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
    position: 'relative',
  },
  planCardSelected: {
    borderColor: '#4f46e5',
    backgroundColor: '#312e81',
  },
  popularBadge: {
    position: 'absolute',
    top: -10,
    right: 20,
    backgroundColor: '#10b981',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  planName: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  planSavings: {
    color: '#10b981',
    fontSize: 14,
    marginTop: 4,
  },
  planPriceContainer: {
    alignItems: 'flex-end',
  },
  planPrice: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  planPeriod: {
    color: '#9ca3af',
    fontSize: 14,
  },
  radioContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#9ca3af',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterSelected: {
    borderColor: '#4f46e5',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4f46e5',
  },
  featuresContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  featuresTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#27272a',
    padding: 16,
    borderRadius: 12,
  },
  featureIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  featureDescription: {
    color: '#9ca3af',
    fontSize: 14,
    marginTop: 2,
  },
  checkmark: {
    color: '#10b981',
    fontSize: 24,
    fontWeight: 'bold',
  },
  socialProofContainer: {
    marginHorizontal: 16,
    marginBottom: 24,
    backgroundColor: '#312e81',
    padding: 16,
    borderRadius: 12,
  },
  socialProofText: {
    color: '#e0e7ff',
    fontSize: 14,
    textAlign: 'center',
  },
  bottomContainer: {
    paddingHorizontal: 16,
  },
  subscribeButton: {
    backgroundColor: '#4f46e5',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  subscribeButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  restoreButton: {
    padding: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  restoreButtonText: {
    color: '#818cf8',
    fontSize: 16,
  },
  termsText: {
    color: '#6b7280',
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 16,
  },
});
