import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const SocialLoginButtons = ({ onLogin }) => {
  const handleSocialLogin = (provider) => {
    // In production, this would integrate with actual OAuth providers
    console.log(`Logging in with ${provider}`);
    onLogin();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.button, styles.googleButton]}
        onPress={() => handleSocialLogin('Google')}
      >
        <Text style={styles.buttonText}>🔍 Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.facebookButton]}
        onPress={() => handleSocialLogin('Facebook')}
      >
        <Text style={styles.buttonText}>📘 Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.appleButton]}
        onPress={() => handleSocialLogin('Apple')}
      >
        <Text style={styles.buttonText}>🍎 Continue with Apple</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: '#4285f4',
  },
  facebookButton: {
    backgroundColor: '#1877f2',
  },
  appleButton: {
    backgroundColor: '#000000',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
