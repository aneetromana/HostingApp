import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Button, Layout, Text, Card } from '@ui-kitten/components';

export default function Home({ navigation }) {
  const buttons = [
    { label: 'ABOUT', screen: 'About' },
    { label: 'CALENDAR', screen: 'Guests' },
    { label: 'COCKTAILS', screen: 'Cocktails' },
    { label: 'DINNER', screen: 'Dinner' },
    { label: 'GUEST INFO', screen: 'Guesthistory' },
  ];

  return (
    <Layout style={styles.container} level='1'>
      <Card style={styles.cardBackground}>
        <View style={styles.contentContainer}>
          
          <Image
            source={{ uri: 'https://i.pinimg.com/736x/5b/c4/c8/5bc4c84c481b3796debb9ca7e752214f.jpg' }}
            style={styles.image}
          />

<Text style={styles.titleInfo}>
Create culinary magic with every dish and sip!
        </Text>

          {buttons.map((button, index) => (
            <Button
              key={index}
              style={styles.customButton}
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
    backgroundColor: '#FDEDF4',
    borderColor: '#FDEDF4',
    borderWidth: 4,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    backgroundColor: '#F8C9DB',
    borderRadius: 10,
    marginVertical: 10,
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
  },
});