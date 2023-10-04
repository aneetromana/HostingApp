import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'; 

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textSize}>
    Jenny - gluten allergy
      </Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
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
    fontSize: 25,
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
  textSize: {
    fontSize: 18,
    
  }
});
