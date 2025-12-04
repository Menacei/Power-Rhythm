import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

export default function ChatScreen({ navigation }) {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Welcome to Power & Rhythm chat! How can I help you today?', sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim().length > 0) {
      const newMessage = {
        id: Date.now().toString(),
        text: inputText,
        sender: 'user'
      };
      setMessages([...messages, newMessage]);
      setInputText('');

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: (Date.now() + 1).toString(),
          text: 'Thanks for your message! Keep training hard!',
          sender: 'bot'
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <KeyboardAvoidingView 
      className="flex-1 bg-zinc-900"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View className="flex-1">
        <View className="bg-zinc-800 p-4 flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text className="text-indigo-400 text-lg mr-4">← Back</Text>
          </TouchableOpacity>
          <Text className="text-white text-xl font-bold">Chat Support</Text>
        </View>

        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          className="flex-1 p-4"
          renderItem={({ item }) => (
            <View
              className={`mb-3 p-3 rounded-2xl max-w-[80%] ${
                item.sender === 'user'
                  ? 'bg-indigo-600 self-end'
                  : 'bg-zinc-800 self-start'
              }`}
            >
              <Text className="text-white">{item.text}</Text>
            </View>
          )}
        />

        <View className="bg-zinc-800 p-4 flex-row items-center">
          <TextInput
            className="flex-1 bg-zinc-700 text-white p-3 rounded-xl mr-2"
            placeholder="Type a message..."
            placeholderTextColor="#888"
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity
            onPress={sendMessage}
            className="bg-indigo-600 p-3 rounded-xl"
          >
            <Text className="text-white font-semibold">Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
