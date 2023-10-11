import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import { Button } from '@ui-kitten/components';

export default function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('a');

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchTerm}`;

  const grabMealInfo = () => {
    axios.get(url)
      .then((response) => {
        console.clear();
        setData(response.data.meals);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => grabMealInfo()}
        style={styles.button}
      >
        <Text>Search Meals Starting with "A"</Text>
      </TouchableOpacity>
      {data.map((item, index) => (
        <View key={index} style={styles.feed}>
          {item.strMealThumb && <Image style={styles.image} source={{ uri: item.strMealThumb }} />}
          <View style={styles.text}>
            <Text>Name: {item.strMeal}</Text>
            <Text>Category: {item.strCategory}</Text>
            <Button
              style={styles.customButton}
              onPress={() => console.log('Button Clicked')} // Replace with your desired action
            >
              Click Me
            </Button>
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
    paddingTop: 10,
  },
  image: {
    height: 200,
    width: 200,
  },
  feed: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    width: 380,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  button: {
    width: 250,
    backgroundColor: '#bfdaff',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    paddingVertical: 10,
  },
  customButton: {
    backgroundColor: 'white',
    borderColor: '#bfdaff',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 10,
  },
};
