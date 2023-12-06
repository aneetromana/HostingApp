import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, List, ListItem } from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';

export default function ({ navigation }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const fruits = ['SoyBeansss', 'Tree Nuts', 'Dairy', 'Peanuts', 'Gluten', 'Wheat', 'Eggs'];
  const additionalInfo = [
    'SoyBeansss info',
    'Tree Nuts info',
    'Dairy info',
    'Peanuts info',
    'Gluten info',
    'Wheat info',
    'Eggs info',
  ];

  const data = fruits.map((fruit, index) => ({
    title: fruit,
    info: additionalInfo[index],
  }));

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => showPopup(item)}>
      <ListItem title={`${item.title}`} />
      {selectedItem && selectedItem.title === item.title && (
        <View style={styles.infoContainer}>
          <Text>{item.info}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  const showPopup = (item) => {
    setSelectedItem(selectedItem === item ? null : item);
  };

  return (
    <LinearGradient
      colors={['#ffafbd', '#ffc3a0']}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text>Most common allergies</Text>
        <List style={styles.list} data={data} renderItem={renderItem} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, 
  },
  list: {
    width: '100%', 
  },
  infoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  gradient: {
    flex: 1,
  },
});
