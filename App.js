import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen'; 
import StartNowScreen from './StartNowScreen';
import AppInfoScreen from './AppInfoScreen'; // New AppInfoScreen import
import FullBodyWorkoutScreen from './FullBodyWorkoutScreen';
import CouchPotatoScreen from './CouchPotatoScreen';
import YogaScreen from './YogaScreen';
import DetailScreen from './DetailScreen';
import PrivacyPolicyScreen from './PrivacyPolicyScreen';
import TermsAndConditionsScreen from './TermsAndConditionsScreen';
import UpdateScreen from './UpdateScreen';

const Stack = createNativeStackNavigator();

export default function App() {
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
          options={{ headerShown: false }}
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
          component={AppInfoScreen} // AppInfoScreen as the main screen for App Info
          options={{ headerShown: true }} // No header for App Info screen
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