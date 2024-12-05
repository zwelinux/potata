import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function AppInfoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Info</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Privacy Policy')}
      >
        <Text style={styles.buttonText}>Privacy Policy</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Terms and Conditions')}
      >
        <Text style={styles.buttonText}>Terms and Conditions</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Update')}
      >
        <Text style={styles.buttonText}>Updates</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ebb268', // Match HomeScreen background color
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0, // Similar padding to HomeScreen
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30, // Match HomeScreen title font size
    fontWeight: 'bold',
    marginBottom: 20, // Space for buttons
    color: '#2d2d2d',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black', // Changed to darkred to match HomeScreen buttons
    padding: 12, // Similar padding as HomeScreen buttons
    width: 300, // Match the width of the buttons in HomeScreen
    borderRadius: 10,
    textAlign: 'center',
    marginBottom: 15, // Space between buttons
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, // Font size to match HomeScreen button text
    textAlign: 'center',
  },
});
