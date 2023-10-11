import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Calendar, Text } from '@ui-kitten/components';

export default function About({ navigation }) {
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <Text category='h6'>
        Selected date:
        {' '}
        {date.toLocaleDateString()}
      </Text>

      <Calendar
        date={date}
        onSelect={nextDate => setDate(nextDate)}
      />
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
  },
});
