import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseconfig.js';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User created:', user);
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  };

  return (
    <View>
      <Text>Hello, I am on the Login page</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        placeholder="Email..."
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        placeholder="Password..."
        secureTextEntry
      />
      <Button title="Create User" onPress={createUser} />
      <Button title="Go to details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}
