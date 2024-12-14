import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Animated, BackHandler, Alert } from 'react-native';

const { width, height } = Dimensions.get('window');

function HomeScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity is 0

  useEffect(() => {
    // Start the animation when the component is mounted
    Animated.timing(fadeAnim, {
      toValue: 1, // Final opacity is 1
      duration: 1500, // Duration of the animation in milliseconds
      useNativeDriver: true, // Use the native driver for better performance
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Exit App", "Are you sure you want to exit the app?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "Yes", onPress: () => BackHandler.exitApp() },
      ]);
      return true; // Prevent default behavior
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Cleanup on component unmount
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainPlaceHolder2}>
        <View style={styles.mainPlaceHolder}>
          <View style={styles.headerGroup}>
            <Text style={styles.title}>POTATA</Text>
            <Text style={styles.description}>Simply Workout At Home</Text>
          </View>

          {/* Animated Image */}
          <Animated.Image
            source={require('./assets/couch_potato.png')}
            style={[styles.image, { opacity: fadeAnim }]} // Bind opacity to fadeAnim
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
    flex: 1,
    backgroundColor: '#fff',
    width: width, // Set width dynamically based on screen size
  },
  mainPlaceHolder2: {
    width: '100%',
    flex: 2.8, // Takes 75% of the screen
    backgroundColor: '#E5CACA',
    borderBottomLeftRadius: 40, // Rounded bottom-left corner
    borderBottomRightRadius: 40, // Rounded bottom-right corner
  },
  mainPlaceHolder: {
    flex: 1, // This will take available space
    backgroundColor: '#9380FF',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headerGroup: {
    marginTop: 60,
  },
  image: {
    width: width * 1,
    height: 'auto',
    aspectRatio: 1,
    resizeMode: 'contain',
    borderRadius: 10,
    marginTop: 50,
  },
  secondryPlaceHolder: {
    flex: 0.9,
    backgroundColor: '#fff',
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
    marginTop: 0,
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

export default HomeScreen;
