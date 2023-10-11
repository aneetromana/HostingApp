import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('margarita');

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;

  const grabCocktailInfo = () => {
    axios.get(url)
      .then((response) => {
        console.clear();
        setData(response.data.drinks);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => grabCocktailInfo()}
        style={styles.button}
      >
        <Text>Search Cocktail</Text>
      </TouchableOpacity>
      {data.map((item, index) => (
        <View key={index} style={styles.feed}>
          {item.strDrinkThumb && <Image style={styles.image} source={{ uri: item.strDrinkThumb }} />}
          <View style={styles.text}>
            <Text>Name: {item.strDrink}</Text>
            <Text>Category: {item.strCategory}</Text>
            {/* Add more properties you want to display */}
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
    flexDirection: "column",
    alignItems: "center"
  },
  text: {
    width: 380,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  button: {
    width: 150,
    backgroundColor: '#bfdaff',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    paddingVertical: 10,
  }
};