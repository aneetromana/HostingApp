import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Layout, Text, Card } from '@ui-kitten/components';

export default function ({ navigation }) {

  const [CardSimpleUsageShowcase, setCardSimpleUsageShowcase] = useState(0);

  return (
    <Layout style={styles.container} level='1'>
      
      <Card style={[styles.card, styles.cardColor]}>
      <Text style={styles.cardTitle}>
          MY GUEST HISTORY NOTES
         </Text> 
        <Text style={styles.cardText}>
       John: Peanut Allergy
        </Text>
        <Text style={styles.cardText}>Mary: Gluten Free</Text>
        <Text style={styles.cardText}>Sara: Dairy Free</Text>
        <Text style={styles.cardText}>Khai: Halal</Text>
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
  card: {
    margin: 20,
    borderRadius: 10,
    borderColor: '#d2e8ff', 
    borderWidth: 7, 
    paddingVertical: 120,
  },
  cardText: {
    padding: 16,
  },
  cardColor: {
    backgroundColor: '#fff', 
  },
  cardTitle: {
    fontWeight: 'bold', 
    margin: 20,
    fontSize: 20, 
  },
});
