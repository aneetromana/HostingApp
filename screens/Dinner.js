import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import { Button } from '@ui-kitten/components';

export default function Dinner() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Beef'); 

  useEffect(() => {
  
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); 

  const grabMealInfo = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
    
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
       <Text>
            Having lots of different recipes to choose from for a dinner party is super helpful! It means everyone at the party can find something they like to eat. Whether someone is vegetarian, has allergies, or just has specific tastes, having a mix of recipes ensures there's something for everyone. It's like having a big menu with options for everyone's preferences. This not only makes people happy because they get to eat what they like, but it also makes the dinner party more exciting because there are lots of different flavors and dishes to try. 
          </Text>
      <View style={styles.buttonContainer}>
        {categories.map((category) => (
         
          <TouchableOpacity
            key={category.strCategory}
            onPress={() => setSelectedCategory(category.strCategory)}
            style={[
              styles.categoryButton,
              selectedCategory === category.strCategory && styles.selectedCategoryButton,
            ]}
          >
            <Text>{category.strCategory}</Text>
          </TouchableOpacity>
        ))}
        
      </View>

      <TouchableOpacity
        onPress={() => grabMealInfo()}
        style={styles.button}
      >
        <Text>Search Meals</Text>
      </TouchableOpacity>


      {data.map((item, index) => (
        <View key={index} style={styles.feed}>
          {item.strMealThumb && <Image style={styles.image} source={{ uri: item.strMealThumb }} />}
          <View style={styles.text}>
            <Text>Name: {item.strMeal}</Text>
            <Text>Category: {item.strCategory}</Text>
            <Button
              style={styles.customButton}
              onPress={() => console.log('Button Clicked')}
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
  buttonContainer: {
    flexDirection: 'column', 
    alignItems: 'center',  
    marginBottom: 10,
  },

  categoryButton: {
    width: 200,            
    padding: 10,
    backgroundColor: '#fed8b1',
    borderRadius: 5,
    marginBottom: 5,          
  },
  selectedCategoryButton: {
    backgroundColor: '#ff9248',
  },
  button: {
    width: 250,
    backgroundColor: '#fed8b1',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    paddingVertical: 10,
  },
  customButton: {
    backgroundColor: 'white',
    borderColor: '#ff9248',
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 10,
  },
};
