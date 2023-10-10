import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
import { useState } from 'react';

export default function Home({ navigation }) {
  const [counter, setCounter] = useState(0);

  return (
    <Layout style={styles.container} level='1'>
      <Button onPress={() => setCounter(counter + 1)}>
        BUTTON
      </Button>

      <Text style={styles.text}>
        {`Pressed ${counter} times`}
      </Text>

      <Text>Welcome! Plan the trendiest and most organized dinner parties!</Text>
      <StatusBar style="auto" />

      <Button
        style={styles.customButton}
        onPress={() => navigation.push('About')}
      >
        About page
      </Button>

      <Button
        style={styles.customButton}
        onPress={() => navigation.push('Guests')}
      >
        Guests
      </Button>

      <Button
        style={styles.customButton}
        onPress={() => navigation.push('Cocktails')}
      >
        Cocktails
      </Button>

      <Button
        style={styles.customButton}
        onPress={() => navigation.push('Dinner')}
      >
        Dinner
      </Button>
    </Layout>
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
    marginVertical: 10,
  },
  text: {
    marginHorizontal: 8,
  },
});
