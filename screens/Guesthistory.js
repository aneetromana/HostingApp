import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Layout, Text, Card, List, ListItem } from '@ui-kitten/components';

export default function ({ navigation }) {
  const [CardSimpleUsageShowcase, setCardSimpleUsageShowcase] = useState(0);

  const fruits = [ 'SoyBeans', 'Tree Nuts', 'Dairy', 'Peanuts', 'Gluten', 'Wheat', 'Eggs'];

  
  const data = fruits.map((fruit, index) => ({
    title: fruit,
  }));

  const renderItem = ({ item, index }) => (
    <ListItem title={`${item.title}`} />
  );

  return (
    <Layout style={styles.container} level='1'>
      <Card style={styles.card}>
        <Card style={styles.listCard}>
        <Text>
            Most common allergies
          </Text>
         
          <List
          style={styles.list}
            data={data}
            renderItem={renderItem}
          />
        </Card>
      </Card>
      <StatusBar style="auto" />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  listCard: {
    backgroundColor: '#fff',
    borderColor: '#FD7EBE',
    borderWidth: 4,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 5,
  },
  list: {
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

 

});
