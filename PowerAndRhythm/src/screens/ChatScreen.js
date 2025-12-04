import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';

export default function ChatScreen({ navigation }) {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Welcome to Power & Rhythm Chat!', sender: 'system', time: '10:00 AM' },
    { id: '2', text: 'Share your workout progress, ask questions, and connect with the community.', sender: 'system', time: '10:01 AM' },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim().length > 0) {
      const newMessage = {
        id: Date.now().toString(),
        text: inputText,
        sender: 'user',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInputText('');

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: (Date.now() + 1).toString(),
          text: generateAIResponse(inputText),
          sender: 'ai',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const generateAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('workout') || lowerMessage.includes('exercise')) {
      return "Great question about workouts! I recommend starting with our beginner-friendly HIIT or Boxing classes. Would you like specific exercise recommendations?";
    } else if (lowerMessage.includes('nutrition') || lowerMessage.includes('diet')) {
      return "Nutrition is key to fitness success! Focus on lean proteins, complex carbs, and plenty of vegetables. Stay hydrated during workouts!";
    } else if (lowerMessage.includes('rest') || lowerMessage.includes('recovery')) {
      return "Recovery is just as important as training! Aim for 7-9 hours of sleep and include rest days in your routine. Listen to your body.";
    } else if (lowerMessage.includes('help') || lowerMessage.includes('how')) {
      return "I'm here to help! You can ask me about workouts, nutrition, recovery, or any fitness-related questions. What would you like to know?";
    } else {
      return "That's an interesting point! Keep pushing yourself and remember - consistency is key to achieving your fitness goals. Need any specific workout recommendations?";
    }
  };

  const renderMessage = ({ item }) => {
    const isUser = item.sender === 'user';
    const isAI = item.sender === 'ai';
    const isSystem = item.sender === 'system';

    return (
      <View 
        style={{
          alignSelf: isUser ? 'flex-end' : 'flex-start',
          backgroundColor: isSystem ? '#3f3f46' : isUser ? '#4f46e5' : '#27272a',
          padding: 12,
          borderRadius: 16,
          marginBottom: 12,
          maxWidth: '80%',
        }}
      >
        {isAI && <Text style={{ color: '#818cf8', fontSize: 12, marginBottom: 4, fontWeight: '600' }}>AI Coach</Text>}
        <Text style={{ color: '#ffffff', fontSize: 16 }}>{item.text}</Text>
        <Text style={{ color: '#9ca3af', fontSize: 12, marginTop: 4 }}>{item.time}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#18181b' }}>
      {/* Header */}
      <View style={{ padding: 16, paddingTop: 40, backgroundColor: '#27272a' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: '#818cf8', fontSize: 18, marginBottom: 8 }}>← Back</Text>
        </TouchableOpacity>
        <Text style={{ color: '#ffffff', fontSize: 24, fontWeight: 'bold' }}>AI Coach Chat</Text>
        <Text style={{ color: '#9ca3af', marginTop: 4 }}>Get instant fitness advice</Text>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        style={{ flex: 1, padding: 16 }}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Input */}
      <View style={{ padding: 16, backgroundColor: '#27272a', flexDirection: 'row', gap: 12 }}>
        <TextInput
          style={{
            flex: 1,
            backgroundColor: '#3f3f46',
            color: '#ffffff',
            padding: 12,
            borderRadius: 12,
            fontSize: 16,
          }}
          placeholder="Ask me anything about fitness..."
          placeholderTextColor="#9ca3af"
          value={inputText}
          onChangeText={setInputText}
          multiline
        />
        <TouchableOpacity
          onPress={sendMessage}
          style={{
            backgroundColor: '#4f46e5',
            padding: 12,
            borderRadius: 12,
            justifyContent: 'center',
            minWidth: 60,
          }}
        >
          <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 18 }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
