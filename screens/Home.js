import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text, Card } from '@ui-kitten/components';

export default function Home({ navigation }) {
  

  const buttons = [
    { label: 'ABOUT', screen: 'About' },
    { label: 'GUESTS', screen: 'Guests' },
    { label: 'COCKTAILS', screen: 'Cocktails' },
    { label: 'DINNER', screen: 'Dinner' },
  ];

  return (
    <Layout style={styles.container} level='1'>
      <Card style={styles.cardBackground}>
        <View style={styles.contentContainer}>
          <Text category="h3" style={styles.title}>
            BEST HOST EVER
          </Text>

          <Button
            style={styles.customButton}
            onPress={() => navigation.push(buttons[0].screen)}
          >
            {buttons[0].label}
          </Button>

          <Button
            style={styles.customButton}
            onPress={() => navigation.push(buttons[1].screen)}
          >
            {buttons[1].label}
          </Button>

          <Button
            style={styles.customButton}
            onPress={() => navigation.push(buttons[2].screen)}
          >
            {buttons[2].label}
          </Button>

          <Button
            style={styles.customButton}
            onPress={() => navigation.push(buttons[3].screen)}
          >
            {buttons[3].label}
          </Button>

         
        </View>
      </Card>

      <StatusBar style="auto" />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBackground: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebf5ff',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    backgroundColor: '#bfdaff',
    borderRadius: 10,
    marginVertical: 10,
    borderColor: '#bfdaff',
    borderWidth: 1,
  },
  title: {
    marginBottom: 20,
   font: 'Times New Roman',
  },
});
