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
    </TouchableOpacity>
  );

  const showPopup = (item) => {
    setSelectedItem(item);
  };

  const hidePopup = () => {
    setSelectedItem(null);
  };

  return (
    <LinearGradient
      colors={['#F2BF6C', '#FF51EB']}
      style={styles.gradient}
    >
      {/* Wrapped the content inside the gradient */}
      <View style={styles.container}>
        <Text>Most common allergies</Text>
        <List style={styles.list} data={data} renderItem={renderItem} />

        {/* Popup */}
        {selectedItem && (
          <View style={styles.popup}>
            <View style={styles.popupContent}>
              <Text>{selectedItem.title}</Text>
              <Text>{selectedItem.info}</Text>
              <TouchableOpacity onPress={hidePopup}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
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
  popup: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    zIndex: 2, // Make sure it's on top
  },
  popupContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '80%', // Adjust as needed
  },
  gradient: {
    flex: 1,
  },
});
