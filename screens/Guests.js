import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar, Button, Layout, Text } from '@ui-kitten/components';

export default function Guests({ navigation }) {
  const [date, setDate] = useState(new Date());

  return (
    <Layout style={styles.container} level='1'>
      <Text category='h6' style={styles.dateText}>
        Selected date: {date.toLocaleDateString()}
      </Text>

      <Calendar
        date={date}
        onSelect={nextDate => setDate(nextDate)}
        style={styles.calendar}
      />

      <Button
        style={styles.button}
        onPress={() => navigation.push('Guesthistory')} 
      >
        Go to My Guests
      </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  dateText: {
    marginBottom: 20,
    textAlign: 'center',
  },
  calendar: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FD7EBE',
    borderRadius: 10,
    marginVertical: 10,
    borderColor: '#FF6F61',
    borderWidth: 1,
  },
});
