import React from 'react';
import { StatusBar, useWindowDimensions, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Text, Card } from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {
  const buttons = [
    { label: 'ABOUT', screen: 'About', image: { uri: 'https://cdn-icons-png.flaticon.com/512/263/263164.png' } },
    { label: 'SEARCH DRINKS', screen: 'Cocktails', image: { uri: 'https://t4.ftcdn.net/jpg/03/59/99/03/360_F_359990338_qVwRQkEtD0N2kLaRgtIgVdDIM9FZEndu.jpg' } },
    { label: 'SEARCH DINNER', screen: 'Dinner', image: { uri: 'https://t3.ftcdn.net/jpg/02/90/62/16/360_F_290621603_Hph61Tf1lqzZhz5tdQNQ7luqKMb3TXQb.jpg' } },
    { label: 'ALLERGY INFO', screen: 'Guesthistory', image: { uri: 'https://img.freepik.com/premium-vector/cute-pink-heart-icon-flat-vector-illustration_91515-64.jpg' } },
  ];

  const { width } = useWindowDimensions();
  const cardMargin = 10; 
  const cardWidth = (width / 2) - (cardMargin * 3); 

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ffafbd', '#ffc3a0']}
        style={styles.gradient}
      >
        <StatusBar style="auto" />
        <Text style={styles.headingText}>Click an option below to start your planning</Text> 
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
    width: '100%', 
    height: undefined, 
    aspectRatio: 1, 
    borderRadius: 10, 
  },
  headingText: {
    fontSize: 20, 
    textAlign: 'center',
    color: '#fff', 
    marginVertical: 20,
  },
});
