import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Layout, Text, Card } from '@ui-kitten/components';

export default function ({ navigation }) {
  const [CardSimpleUsageShowcase, setCardSimpleUsageShowcase] = useState(0);

  return (
    <Layout style={styles.container} level='1'>
      <Card style={styles.card}>
        <Text style={styles.cardTitle}>MY GUEST HISTORY NOTES</Text>
        <Text style={styles.cardText}>John: Peanut Allergy</Text>
        <Text style={styles.cardText}>Mary: Gluten Free</Text>
        <Text style={styles.cardText}>Sara: Dairy Free</Text>
        <Text style={styles.cardText}>Khai: Halal</Text>
        <Card style={styles.innerCard}>
          <Text style={styles.innerCardTitle}>TIPS: COMMON ALLERGIES</Text>
          <Text style={styles.innerCardText}>EGGS, SOY, DAIRY, WHEAT</Text>
        </Card>
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
    backgroundColor: '#F5F5F5', 
  },
  card: {
    margin: 20,
    borderRadius: 10,
    borderColor: '#F8C9DB',
    borderWidth: 7,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  cardText: {
    paddingVertical: 8,
  },
  cardTitle: {
    fontWeight: 'bold',
    margin: 20,
    fontSize: 24,
  },
  innerCard: {
    marginVertical: 20,
    borderRadius: 20,
    borderColor: '#F8C9DB',
    borderWidth: 2,
    padding: 20,
    backgroundColor: '#FDEDF4',
  },
  innerCardTitle: {
    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: 20,
  },
  innerCardText: {
    paddingVertical: 8,
  },
});
