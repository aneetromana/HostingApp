import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Layout, Text, Card, List, ListItem } from '@ui-kitten/components';

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

  const renderItem = ({ item, index }) => (
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
    <Layout style={styles.container} level='1'>
      <Card style={styles.card}>
        <Card style={styles.listCard}>
          <Text>Most common allergies</Text>
          <List style={styles.list} data={data} renderItem={renderItem} />
        </Card>
      </Card>

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
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    // Add your card styles here
  },
  listCard: {
    backgroundColor: '#fff',
    borderColor: '#FD7EBE',
    borderWidth: 4,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 5,
  },
  popup: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});
