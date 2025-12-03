import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';

export default function CommunityScreen() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const addPost = () => {
    if (newPost.trim().length > 0) {
      setPosts([{ id: Date.now().toString(), text: newPost }, ...posts]);
      setNewPost('');
    }
  };

  return (
    <View className="flex-1 bg-zinc-900 p-4">
      <Text className="text-white text-2xl font-bold mb-4">Community</Text>
      <TextInput
        className="bg-zinc-800 text-white p-3 rounded-xl mb-3"
        placeholder="Share your workout..."
        placeholderTextColor="#888"
        value={newPost}
        onChangeText={setNewPost}
      />
      <TouchableOpacity onPress={addPost} className="bg-indigo-600 p-3 rounded-xl mb-4">
        <Text className="text-white text-center font-semibold">Post</Text>
      </TouchableOpacity>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-zinc-800 p-3 rounded-xl mb-3">
            <Text className="text-white">{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}
