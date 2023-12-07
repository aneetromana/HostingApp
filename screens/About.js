import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { Layout, Text, Card } from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';

export default function About({ navigation }) {
  return (
    <Layout style={styles.container} level='1'>
      <LinearGradient
        colors={['#ffafbd', '#ffc3a0']}
        style={styles.gradient}
      >
        <View style={styles.contentContainer}>
          <Card style={[styles.card, styles.cardColor]}>
            <Text style={styles.cardTitle}>
              ABOUT THIS APP
            </Text>

            <Text style={styles.cardText}>
              With this app, you can effortlessly organize unforgettable dinner parties,
              discover delicious and popular drink and food recipes, and keep track of your guest list. 
              It will include 2 APIs: a cocktail list finder and a dinner recipe finder.
              Users can also view their guest list and note down any allergies 
              preferences they know their guests may have.
            </Text>
            <Image
              source={{ uri: 'https://hips.hearstapps.com/hmg-prod/images/antillean-lychee-love-martini-dsc-0198-jpg-1644514037.jpg' }}
              style={styles.image}
            />
          </Card>
        </View>

        <StatusBar style="auto" />
      </LinearGradient>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1, 
  },
  contentContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    margin: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 5,
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