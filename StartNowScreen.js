import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function StartNowScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.mainPlaceHolder2}>
        <View style={styles.mainPlaceHolder}>
          {/* Card 1: Full Body Workout */}
          <TouchableOpacity 
            style={[styles.card, { backgroundColor: '#656565' }]}
            onPress={() => navigation.navigate('Full Body Workout')}
          >
            <Image
              source={require('./assets/couch_potato.png')} 
              style={styles.cardImage} 
            />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardHeader1}>Full Body Workout</Text>
              <Text style={styles.cardHeader2}>No Equipment Cardio</Text>
            </View>
          </TouchableOpacity>

          {/* Card 2: Couch Potato */}
          <TouchableOpacity 
            style={[styles.card, { backgroundColor: '#656565' }]}
            onPress={() => navigation.navigate('Couch Potato')}
          >
            <Image
              source={require('./assets/couch_potato.png')} 
              style={styles.cardImage} 
            />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardHeader1}>Couch Potato</Text>
              <Text style={styles.cardHeader2}>For People who sit a lot</Text>
            </View>
          </TouchableOpacity>

          {/* Card 3: Yoga Everyday */}
          <TouchableOpacity 
            style={[styles.card, { backgroundColor: '#656565' }]}
            onPress={() => navigation.navigate('Yoga')}
          >
            <Image
              source={require('./assets/couch_potato.png')} 
              style={styles.cardImage} 
            />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardHeader1}>Yoga Everyday</Text>
              <Text style={styles.cardHeader2}>For Mind & Body</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.secondryPlaceHolder}>
        <Text style={styles.header1}>POTATA</Text>
        <Text style={styles.header2}>Simply Workout at Home</Text>
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
    flex: 3.4, // Takes 75% of the screen
    backgroundColor: '#E5CACA',
    borderBottomLeftRadius: 40, // Rounded bottom-left corner
    borderBottomRightRadius: 40, // Rounded bottom-right corner
  },
  mainPlaceHolder: {
    width: '100%',
    height: '98.5%',
    backgroundColor: '#9380FF',
    justifyContent: 'center', // Vertically centers the cards
    alignItems: 'center', // Horizontally centers the cards
    borderBottomLeftRadius: 40, // Rounded bottom-left corner
    borderBottomRightRadius: 40, // Rounded bottom-right corner
  },
  secondryPlaceHolder: {
    flex: 0.6, // Takes 25% of the screen
    backgroundColor: '#fff',
    justifyContent: 'center', // Vertically centers the content
    alignItems: 'center',
    padding: 20, // Add padding to space out the text
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
  card: {
    flexDirection: 'row', // Arranges image and text horizontally
    alignItems: 'center', // Aligns items vertically within the card
    width: '85%', // Card width is 90% of the screen
    height: 160, // Fixed height for the cards
    borderRadius: 20, // Rounded corners
    borderWidth: 2, // Thinner border for better appearance
    borderColor: '#f0f0f0', // Lighter border color for better contrast
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginTop: 15,
    marginBottom: 10, // Space between the cards
    padding: 10, // Adds padding inside the card
  },
  cardImage: {
    width: 130,
    height: 130,
    borderRadius: 25, // Makes the image circular
    marginRight: 10, // Adds spacing between image and text
  },
  cardTextContainer: {
    flex: 1, // Allows the text to take the remaining space
  },
  cardHeader1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  cardHeader2: {
    fontSize: 14,
    color: '#fff', // Lighter text color for description
    marginTop: 5,
  },
});

export default StartNowScreen;
