/**
 * Premium Features Management
 * This module handles premium subscription status and feature gating
 */

// In production, this would be stored in secure storage and synced with backend
let isPremiumUser = false;

export const setPremiumStatus = (status) => {
  isPremiumUser = status;
};

export const checkPremiumStatus = () => {
  return isPremiumUser;
};

// Premium features list
export const PREMIUM_FEATURES = {
  GLOBAL_LEADERBOARD: 'global_leaderboard',
  ADVANCED_AI: 'advanced_ai',
  UNLIMITED_VIDEOS: 'unlimited_videos',
  ADVANCED_ANALYTICS: 'advanced_analytics',
  CUSTOM_WORKOUTS: 'custom_workouts',
  OFFLINE_MODE: 'offline_mode',
  ALL_EXERCISES: 'all_exercises',
  COMMUNITY_CHALLENGES: 'community_challenges',
  PRIORITY_SUPPORT: 'priority_support',
  CUSTOM_THEMES: 'custom_themes',
  SMART_NOTIFICATIONS: 'smart_notifications',
  EARLY_ACCESS: 'early_access',
};

// Free tier limits
export const FREE_TIER_LIMITS = {
  MAX_EXERCISES_PER_DAY: 3,
  MAX_AI_REQUESTS_PER_DAY: 5,
  MAX_VIDEO_VIEWS_PER_DAY: 10,
  LEADERBOARD_SCOPE: 'local', // local, global for premium
  MAX_SAVED_WORKOUTS: 5,
  ANALYTICS_HISTORY_DAYS: 7, // 7 days for free, unlimited for premium
};

// Check if user has access to a specific feature
export const hasFeatureAccess = (featureName) => {
  if (isPremiumUser) {
    return true;
  }
  
  // All features require premium except basic workout tracking
  const freeFeatures = [
    'basic_workouts',
    'workout_timer',
    'basic_analytics',
  ];
  
  return freeFeatures.includes(featureName);
};

// Get remaining free tier usage
export const getFreeUsageRemaining = (usageType) => {
  // In production, this would fetch from storage/backend
  const mockUsage = {
    exercises_today: 1,
    ai_requests_today: 2,
    video_views_today: 5,
    saved_workouts: 3,
  };

  switch (usageType) {
    case 'exercises':
      return FREE_TIER_LIMITS.MAX_EXERCISES_PER_DAY - mockUsage.exercises_today;
    case 'ai':
      return FREE_TIER_LIMITS.MAX_AI_REQUESTS_PER_DAY - mockUsage.ai_requests_today;
    case 'videos':
      return FREE_TIER_LIMITS.MAX_VIDEO_VIEWS_PER_DAY - mockUsage.video_views_today;
    case 'saved_workouts':
      return FREE_TIER_LIMITS.MAX_SAVED_WORKOUTS - mockUsage.saved_workouts;
    default:
      return 0;
  }
};

// Premium subscription plans
export const SUBSCRIPTION_PLANS = {
  MONTHLY: {
    id: 'monthly',
    name: 'Monthly',
    price: 9.99,
    currency: 'USD',
    period: 'month',
    productId: 'com.powerrhythm.premium.monthly',
  },
  YEARLY: {
    id: 'yearly',
    name: 'Yearly',
    price: 79.99,
    currency: 'USD',
    period: 'year',
    productId: 'com.powerrhythm.premium.yearly',
    savings: 33, // percentage
  },
  LIFETIME: {
    id: 'lifetime',
    name: 'Lifetime',
    price: 199.99,
    currency: 'USD',
    period: 'lifetime',
    productId: 'com.powerrhythm.premium.lifetime',
  },
};

// Premium feature descriptions for marketing
export const PREMIUM_FEATURE_DESCRIPTIONS = {
  [PREMIUM_FEATURES.GLOBAL_LEADERBOARD]: {
    title: 'Global Leaderboards',
    description: 'Compete with athletes worldwide and track your ranking',
    icon: '🏆',
  },
  [PREMIUM_FEATURES.ADVANCED_AI]: {
    title: 'Advanced AI Coach',
    description: 'Unlimited AI-powered workout recommendations and coaching',
    icon: '🤖',
  },
  [PREMIUM_FEATURES.UNLIMITED_VIDEOS]: {
    title: 'Unlimited Video Access',
    description: 'Full HD videos for all 150+ exercises without limits',
    icon: '🎥',
  },
  [PREMIUM_FEATURES.ADVANCED_ANALYTICS]: {
    title: 'Advanced Analytics',
    description: 'Detailed performance insights, trends, and predictions',
    icon: '📊',
  },
  [PREMIUM_FEATURES.CUSTOM_WORKOUTS]: {
    title: 'Custom Workouts',
    description: 'Create, save, and share your own workout routines',
    icon: '🎯',
  },
  [PREMIUM_FEATURES.OFFLINE_MODE]: {
    title: 'Offline Mode',
    description: 'Download workouts and videos for offline access',
    icon: '📱',
  },
  [PREMIUM_FEATURES.ALL_EXERCISES]: {
    title: 'All 150+ Exercises',
    description: 'Access to the complete exercise library',
    icon: '💪',
  },
  [PREMIUM_FEATURES.COMMUNITY_CHALLENGES]: {
    title: 'Community Challenges',
    description: 'Join exclusive challenges and compete with friends',
    icon: '👥',
  },
  [PREMIUM_FEATURES.PRIORITY_SUPPORT]: {
    title: 'Priority Support',
    description: '24/7 premium customer support',
    icon: '⚡',
  },
  [PREMIUM_FEATURES.CUSTOM_THEMES]: {
    title: 'Custom Themes',
    description: 'Personalize your app with custom color themes',
    icon: '🎨',
  },
  [PREMIUM_FEATURES.SMART_NOTIFICATIONS]: {
    title: 'Smart Notifications',
    description: 'AI-powered workout reminders based on your schedule',
    icon: '🔔',
  },
  [PREMIUM_FEATURES.EARLY_ACCESS]: {
    title: 'Early Access',
    description: 'Get new features and exercises before public release',
    icon: '🚀',
  },
};

// Helper function to show premium upgrade prompt
export const showPremiumPrompt = (navigation) => {
  navigation.navigate('Premium');
};

export default {
  setPremiumStatus,
  checkPremiumStatus,
  hasFeatureAccess,
  getFreeUsageRemaining,
  showPremiumPrompt,
  PREMIUM_FEATURES,
  FREE_TIER_LIMITS,
  SUBSCRIPTION_PLANS,
  PREMIUM_FEATURE_DESCRIPTIONS,
};
