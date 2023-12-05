import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider } from '@ui-kitten/components'; 
import * as eva from '@eva-design/eva';
import Home from './screens/Home';
import About from './screens/About';
import Cocktails from './screens/Cocktails';
import Guests from './screens/Guests';
import Dinner from './screens/Dinner';
import Guesthistory from './screens/Guesthistory';
import React from 'react';
import Login from './screens/Login';
import { createStackNavigator } from "@react-navigation/stack";


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen 
              name="Home"
              component={Home}
              options={{
                title: 'DINNER HOSTING',
                headerStyle: {
                  backgroundColor: '#fff',
           
                },
                headerTintColor: 'orange',
              }}
            />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cocktails" component={Cocktails} />
            <Stack.Screen name="Dinner" component={Dinner} />
            <Stack.Screen name="Guesthistory" component={Guesthistory} />
            <Stack.Screen name="Guests" component={Guests} />
    
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ApplicationProvider>
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