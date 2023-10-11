import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { Layout, Text, Card } from '@ui-kitten/components';

export default function Home({ navigation }) {
  return (
    <Layout style={styles.container} level='1'>
      <Card style={[styles.card, styles.cardColor]}>
        <Text style={styles.cardTitle}>
          ABOUT THIS APP
        </Text>
        <Text style={styles.cardText}>
          This app is for hosting dinner parties and searching for drink and food
          recipes as well as logging your guest list of everyone coming. It will
          include 2 APIs: a cocktail list finder and a dinner recipe finder.
          Users can also view their guest list and note down any allergies /
          preferences they know their guests may have.
        </Text>
      </Card>
      <Image
        source={{ uri: 'https://hips.hearstapps.com/hmg-prod/images/antillean-lychee-love-martini-dsc-0198-jpg-1644514037.jpg' }}
        style={styles.image}
      />
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
  image: {
    width: 280,
    height: 200,
    borderRadius: 10,
  },
});
