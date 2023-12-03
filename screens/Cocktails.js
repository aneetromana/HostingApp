import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, Image } from 'react-native';
import {  Text, Card } from '@ui-kitten/components';
import axios from 'axios';

export default function Home() {
  const [alcoholicData, setAlcoholicData] = useState([]);
  const [nonAlcoholicData, setNonAlcoholicData] = useState([]);

  const alcoholicUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
  const nonAlcoholicUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

  const grabCocktailInfo = (url, setDataFunction) => {
    axios.get(url)
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
    <ScrollView style={styles.container}>
      <Card>
         <Text style={styles.cardTitle}>
         Having a good cocktail at a dinner party is really important because 
         it makes the party more fun and helps everyone mingle. It's like a tasty
          conversation starter! A well-made 
          cocktail not only tastes good with the food but also gets people talking and 
          having a good time. Whether it's a classic drink or something new, having nice 
          drinks at the party makes it feel fancier and more enjoyable for everyone. Plus,
           it's cool to have non-alcoholic options too, so everyone, even those who don't drink,
            can join in and enjoy the party together! If you're looking for both alcoholic and 
            non-alcoholic recipes, use the search bar below to find a variety of drinks that
             suit everyone's preferences. Cheers to a fantastic dinner party! 🍹🥂
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
          {item.strDrinkThumb && <Image style={styles.image} source={{ uri: item.strDrinkThumb }} />}
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
          {item.strDrinkThumb && <Image style={styles.image} source={{ uri: item.strDrinkThumb }} />}
          <View style={styles.text}>
            <Text>Name: {item.strDrink}</Text>
            <Text>Category: {item.strCategory}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10
  },
  image: {
    height: 200,
    width: 200,
  },
  feed: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    width: 380,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  button: {
    width: 250,
    backgroundColor: '#FDEDF4',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    paddingVertical: 10,
  }
  
};
