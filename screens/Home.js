import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout } from '@ui-kitten/components';
import ModelView from 'react-native-3d-model-view'; 

export default function Home({ navigation }) {
  return (
    <Layout style={styles.container} level='1'>
      <View style={styles.modelContainer}>
   
        <ModelView
          source={{ zip: 'model.zip' }}
          scale={0.01} 
          onLoad={() => console.log('Model loaded')}
        />
      </View>


      <Button
        style={styles.customButton}
        onPress={() => {

          console.log('Button Pressed');
        }}
      >
        My Button
      </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelContainer: {
    flex: 1,
    width: '100%',
  },
  customButton: {
    borderRadius: 10,
    marginVertical: 20,
  },
});
