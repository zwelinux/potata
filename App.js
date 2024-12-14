import React, { useEffect } from 'react';
import { StyleSheet, StatusBar, Platform, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen'; 
import StartNowScreen from './StartNowScreen';
import AppInfoScreen from './AppInfoScreen';
import FullBodyWorkoutScreen from './FullBodyWorkoutScreen';
import CouchPotatoScreen from './CouchPotatoScreen';
import YogaScreen from './YogaScreen';
import DetailScreen from './DetailScreen';
import PrivacyPolicyScreen from './PrivacyPolicyScreen';
import TermsAndConditionsScreen from './TermsAndConditionsScreen';
import UpdateScreen from './UpdateScreen';

const Stack = createNativeStackNavigator();

export default function App() { 

  useEffect(() => {
    // Set the StatusBar to be styled
    StatusBar.setBarStyle('dark-content'); // Change status bar text color to dark (or 'light-content' for white)
    
    // Apply translucent and transparent background only on Android
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true); // Make status bar translucent
      StatusBar.setBackgroundColor('transparent'); // Make status bar background transparent
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="Start Now"
          component={StartNowScreen}
          options={{ 
            headerShown: false
          }}
          // listeners={({ navigation }) => ({
          //   beforeRemove: (e) => {
          //     // Navigate to Home instead of removing this screen
          //     e.preventDefault();
          //     navigation.navigate('Home');
          //   },
          // })}
        />
        
        <Stack.Screen
          name="Full Body Workout"
          component={FullBodyWorkoutScreen}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="Couch Potato"
          component={CouchPotatoScreen}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="Yoga"
          component={YogaScreen}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="App Info"
          component={AppInfoScreen}
          options={{ headerShown: true }}
          // listeners={({ navigation }) => ({
          //   beforeRemove: (e) => {
          //     // Navigate to Home instead of removing this screen
          //     e.preventDefault();
          //     navigation.navigate('Home');
          //   },
          // })}
        />
        
        <Stack.Screen
          name="Privacy Policy"
          component={PrivacyPolicyScreen}
          options={{ headerShown: true }}
        />
        
        <Stack.Screen
          name="Terms and Conditions"
          component={TermsAndConditionsScreen}
          options={{ headerShown: true }}
        />
        
        <Stack.Screen
          name="Update"
          component={UpdateScreen}
          options={{ headerShown: true }}
        />
        
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
