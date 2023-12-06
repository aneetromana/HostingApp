import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseconfig.js';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUserAndNavigateHome = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigation.navigate('Home'); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LinearGradient
      colors={['#ffafbd', '#ffc3a0']} 
      style={styles.gradient}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Sign In</Text>
        <Text style={styles.welcome}>Welcome to Dinner Hosting</Text>
        <TextInput 
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          value={email}
        />
        <TextInput 
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          value={password}
          secureTextEntry
        />
        <Text style={styles.forgotPassword}>Forgot Password</Text>
        <Button 
          onPress={createUserAndNavigateHome} 
          title='GET STARTED'
          color="#E91E63" 
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', 
  },
  welcome: {
    fontSize: 16,
    marginBottom: 20,
    color: '#fff', 
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff', 
    marginBottom: 15,
    fontSize: 16,
    color: '#fff', 
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    color: '#E91E63', 
    fontSize: 14,
  },
});
