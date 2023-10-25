import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Button, Layout, Text, Card } from '@ui-kitten/components';

export default function Home({ navigation }) {
  const buttons = [
    { label: 'ABOUT US', screen: 'About', color: '#FD7EBE' },
    { label: 'CALENDAR', screen: 'Guests', color: '#FF719A' },
    { label: 'COCKTAILS', screen: 'Cocktails', color: '#FF446E' },
    { label: 'DINNER RECIPES', screen: 'Dinner', color: '#FF7449' },
    { label: 'HOSTING TIPS', screen: 'Guesthistory', color: '#FFA325' },
  ];

  return (
    <Layout style={styles.container} level='1'>
      <Card style={styles.cardBackground}>
        <View style={styles.contentContainer}>
          <Image
            source={{ uri: 'https://i.pinimg.com/736x/ea/41/34/ea41345abc8f6bd68a925a06d77b4dc3.jpg' }}
            style={styles.image}
          />

          <Text style={styles.titleInfo}>
            Create culinary magic with every dish and sip!
          </Text>

          {buttons.map((button, index) => (
            <Button
              key={index}
              style={[styles.customButton, { backgroundColor: button.color }]}
              onPress={() => navigation.push(button.screen)}
            >
              {button.label}
            </Button>
          ))}
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
    backgroundColor: '#FFF',
    borderColor: '#FD7EBE',
    borderWidth: 4,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 5,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    borderRadius: 10,
    marginVertical: 5,
    borderColor: '#F8C9DB',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    marginBottom: 20,
  },
  titleInfo: {
    fontStyle: 'italic',
    fontSize: 20,

  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 15,
    
  },
});
