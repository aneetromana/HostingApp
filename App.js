import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import About from './screens/About';
import Guests from './screens/Guests'
import Cocktails from './screens/Cocktails'


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen 
            name="Home"
            component={Home}
            options={{
              title: 'Hosting app',
              headerStyle: {
                backgroundColor: '#fff3fd',
              },
              headerTintColor: 'black',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen name="About" component={About}/>
          <Stack.Screen name="Guests" component={Guests} />
          <Stack.Screen name="Cocktails" component={Cocktails} />
        </Stack.Navigator>
        
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
