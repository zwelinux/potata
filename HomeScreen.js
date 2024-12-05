import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function StartNowScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.mainPlaceHolder2}>
        <View style={styles.mainPlaceHolder}>

        <View style={styles.headerGroup}>
          <Text style={styles.title}>POTATA</Text>
          <Text style={styles.description}>Simply Workout At Home</Text>
        </View>
          
        <Image
          source={require('./assets/couch_potato.png')} 
          style={styles.image}
        />


        </View>
      </View>

      <View style={styles.secondryPlaceHolder}>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Start Now')}>
            <Text style={styles.buttonText}>Start Now</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('App Info')}>
            <Text style={styles.buttonText2}>App Info</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.smallText}>v1.1.2 Stable</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes the full screen
    backgroundColor: '#fff',
  },
  mainPlaceHolder2: {
    width: '100%',
    flex: 2.8, // Takes 75% of the screen
    backgroundColor: '#E5CACA',
    borderBottomLeftRadius: 40, // Rounded bottom-left corner
    borderBottomRightRadius: 40, // Rounded bottom-right corner
  },
  mainPlaceHolder: {
    width: '100%',
    height: '98%',
    backgroundColor: '#9380FF',
    // justifyContent: 'center', // Vertically centers the cards
    // alignItems: 'center', // Horizontally centers the cards
    borderBottomLeftRadius: 40, // Rounded bottom-left corner
    borderBottomRightRadius: 40, // Rounded bottom-right corner
  },
  headerGroup: {
    marginTop: 80,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginTop: 55,
  },
  secondryPlaceHolder: {
    flex: 1.2, // Takes 25% of the screen
    // backgroundColor: '#fff',
    justifyContent: 'center', // Vertically centers the content
    alignItems: 'center',
    padding: 20, // Add padding to space out the text
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 0,
    color: '#fff',
    textAlign: 'center',
  },
  description: {
    fontSize: 22,
    color: '#efefef',
    textAlign: 'center',
    marginTop: 10,
  },
  buttonGroup: {
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    padding: 13,
    height: 50,
    width: 300,
    backgroundColor: 'black',
    borderRadius: 10,
    marginBottom: 10,
  },
  button2: {
    padding: 13,
    height: 50,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    marginBottom: 10,
    borderColor: '#7f7f7f',
    borderWidth: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
  buttonText2: {
    color: '#2d2d2d',
    fontSize: 17,
    textAlign: 'center',
  },
  header1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  header2: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginTop: 5, // Space between header1 and header2
  },
  smallText: {
    fontSize: 12,
    color: '#888', // Lighter color for smaller text
    marginTop: 30, // Space to push it towards the bottom
  },
});

export default StartNowScreen;
