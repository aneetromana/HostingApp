import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar, Button, Layout, Text } from '@ui-kitten/components';

export default function About({ navigation }) {
  const [date, setDate] = useState(new Date());

  return (
    <Layout style={styles.container} level='1'>
      <Text category='h6'>
        Selected date:
        {' '}
        {date.toLocaleDateString()}
      </Text>

      <Calendar
        date={date}
        onSelect={nextDate => setDate(nextDate)}
      />

      <Button
        style={styles.customButton}
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
  },
  customButton: {
    backgroundColor: '#bfdaff',
    borderRadius: 10,
    marginVertical: 10,
    borderColor: '#bfdaff',
    borderWidth: 1,
  },
});
