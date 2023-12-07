import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { Text, Card } from '@ui-kitten/components';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

export default function Home() {
  const [alcoholicData, setAlcoholicData] = useState([]);
  const [nonAlcoholicData, setNonAlcoholicData] = useState([]);

  const alcoholicUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
  const nonAlcoholicUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

  const grabCocktailInfo = (url, setDataFunction) => {
    axios
      .get(url)
      .then((response) => {
        console.clear();
        setDataFunction(response.data.drinks);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
 <LinearGradient
  colors={['#ffafbd', '#ffc3a0']}
  style={styles.gradient}
>
      <ScrollView style={styles.container}>
      <Card style={styles.card}>
  <Text style={styles.cardTitle}>
            Having a good cocktail at a dinner party is really important because it makes the party more fun and helps everyone mingle. It's like a tasty conversation starter! A well-made cocktail not only tastes good with the food but also gets people talking and having a good time. Whether it's a classic drink or something new, having nice drinks at the party makes it feel fancier and more enjoyable for everyone. Plus, it's cool to have non-alcoholic options too, so everyone, even those who don't drink, can join in and enjoy the party together! If you're looking for both alcoholic and non-alcoholic recipes, use the search bar below to find a variety of drinks that suit everyone's preferences. Cheers to a fantastic dinner party! 🍹🥂
          </Text>
        </Card>
        <TouchableOpacity
          onPress={() => grabCocktailInfo(alcoholicUrl, setAlcoholicData)}
          style={styles.button}
        >
          <Text>Search Alcoholic Cocktails</Text>
        </TouchableOpacity>
        {alcoholicData.map((item, index) => (
          <View key={index} style={styles.feed}>
            {item.strDrinkThumb && (
              <Image style={styles.image} source={{ uri: item.strDrinkThumb }} />
            )}
            <View style={styles.text}>
              <Text>Name: {item.strDrink}</Text>
              <Text>Category: {item.strCategory}</Text>
            </View>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => grabCocktailInfo(nonAlcoholicUrl, setNonAlcoholicData)}
          style={styles.button}
        >
          <Text>Search Non-Alcoholic Cocktails</Text>
        </TouchableOpacity>
        {nonAlcoholicData.map((item, index) => (
          <View key={index} style={styles.feed}>
            {item.strDrinkThumb && (
              <Image style={styles.image} source={{ uri: item.strDrinkThumb }} />
            )}
            <View style={styles.text}>
              <Text>Name: {item.strDrink}</Text>
              <Text>Category: {item.strCategory}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    margin: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: 16,
  },
  cardTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    height: 200,
    width: '100%', 
    borderRadius: 10,
  },
  feed: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    width: '100%', 
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  button: {
    width: 250,
    backgroundColor: '#FDEDF4',
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    paddingVertical: 10,
  },
});
