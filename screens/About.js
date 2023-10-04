import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'; 

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textSize}>
        This app is for hosting dinner parties and searching for drink and food
        recipes as well as log down your guest list of everyone coming. It will
        include 2 APIs. A cocktail list finder and a dinner recipe finder.
        Users can also view their guest list and note down any allergies /
        preferences they know their guests may have.
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
