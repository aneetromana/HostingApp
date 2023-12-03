import React from 'react';
import { StatusBar, useWindowDimensions, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Text, Card } from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {
  const buttons = [
    { label: 'ABOUT', screen: 'About', image: { uri: 'https://i.pinimg.com/564x/2e/c4/99/2ec4998f44a760cf85dadfb9aafff82a.jpg' } },
    { label: 'COCKTAILS', screen: 'Cocktails', image: { uri: 'https://st4.depositphotos.com/5969432/25293/i/450/depositphotos_252935496-stock-photo-glasses-citrus-cocktails-white-background.jpg' } },
    { label: 'DINNER', screen: 'Dinner', image: { uri: 'https://st4.depositphotos.com/5969432/25293/i/450/depositphotos_252935496-stock-photo-glasses-citrus-cocktails-white-background.jpg' } },
    { label: 'GUEST INFO', screen: 'Guesthistory', image: { uri: 'https://st4.depositphotos.com/5969432/25293/i/450/depositphotos_252935496-stock-photo-glasses-citrus-cocktails-white-background.jpg' } },
  ];

  const { width } = useWindowDimensions();
  const cardMargin = 10; 
  const cardWidth = (width / 2) - (cardMargin * 3); 

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#F2BF6C', '#FF51EB']}
        style={styles.gradient}
      >
        <StatusBar style="auto" />
        <View style={styles.contentContainer}>
          {buttons.map((button, index) => (
            <Card key={index} style={[styles.cardBackground, { width: cardWidth }]}>
              <TouchableOpacity onPress={() => navigation.navigate(button.screen)}>
                <Image style={styles.image} source={button.image} />
                <Text style={styles.titleInfo}>{button.label}</Text>
              </TouchableOpacity>
            </Card>
          ))}
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    padding: 10, 
  },
  contentContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'center', 
    alignItems: 'flex-start', 
  },
  cardBackground: {
    margin: 10, 
    borderRadius: 20, 
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  titleInfo: {
    fontWeight: 'bold', 
    fontSize: 16, 
    marginVertical: 10, 
  },
  image: {
    width: '105%', 
    height: 120, 
    borderRadius: 10, 
}});
