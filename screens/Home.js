import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => navigation.push('About')}
      >
        <Text style={styles.buttonText}>Go to About page</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customButton: {
    backgroundColor: '#fff3fd', 
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'black', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});
