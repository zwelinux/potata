import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons for the icon


function CouchPotatoScreen({ navigation }) {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'e4b2Ql3bncubuJiUf901gQ==sUTKSzcH7sIp9lI4'; // Your API key
  const apiUrl = 'https://api.api-ninjas.com/v1/exercises?difficulty=intermediate'; // API URL

  useEffect(() => {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'x-api-key': apiKey,  // Include the API key in the header
        'Content-Type': 'application/json', // Optional, depending on the API
      },
    })
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setItems(data);  // Only set data if it's an array
        } else {
          setItems([]);  // If the response is not an array, set it to an empty array
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);


  if (loading) {
    return (
    <View style={styles.container}>
      <View style={styles.mainPlaceHolder}>
        <View style={styles.headerPlaceHolder}>
          {/* Grouped header content */}
          <View style={styles.headerTextGroup}>
            {/* Main Header */}
            <Text style={styles.headerText}>POTATA</Text>
            {/* Secondary Header */}
            <Text style={styles.secondaryHeaderText}>Couch Potato</Text>
          </View>

          {/* Home Icon */}
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeIcon}>
            <Ionicons name="home" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.contentPlaceHolder}>

          <ActivityIndicator size="large" color="darkred" />
          <Text style={styles.contentText}>Loading . . . </Text>

        </View>
      </View>
      <View style={styles.secondryPlaceHolder}>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (items.length > 0) {
              navigation.navigate('Detail', { item: items[0], items, index: 0 });
            } else {
              alert('No data available to navigate.');
            }
          }}
        >
          <Text style={styles.buttonText}>Start Now</Text>
        </TouchableOpacity> */}
      </View>
    </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
      <View style={styles.mainPlaceHolder}>
        <View style={styles.headerPlaceHolder}>
          {/* Grouped header content */}
          <View style={styles.headerTextGroup}>
            {/* Main Header */}
            <Text style={styles.headerText}>POTATA</Text>
            {/* Secondary Header */}
            <Text style={styles.secondaryHeaderText}>Couch Potato</Text>
          </View>

          {/* Home Icon */}
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeIcon}>
            <Ionicons name="home" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.contentPlaceHolder}>

          <ActivityIndicator size="large" color="darkred" />
          <Text style={styles.contentText}>Error Loading Data</Text>

        </View>
      </View>
      <View style={styles.secondryPlaceHolder}>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (items.length > 0) {
              navigation.navigate('Detail', { item: items[0], items, index: 0 });
            } else {
              alert('No data available to navigate.');
            }
          }}
        >
          <Text style={styles.buttonText}>Start Now</Text>
        </TouchableOpacity> */}
      </View>
    </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainPlaceHolder}>
        <View style={styles.headerPlaceHolder}>
          {/* Grouped header content */}
          <View style={styles.headerTextGroup}>
            {/* Main Header */}
            <Text style={styles.headerText}>POTATA</Text>
            {/* Secondary Header */}
            <Text style={styles.secondaryHeaderText}>Couch Potato</Text>
          </View>

          {/* Home Icon */}
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeIcon}>
            <Ionicons name="home" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.contentPlaceHolder}>
          {/* Add content here */}

          <View style={styles.scrollContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              {/* {items.map((item, index) => (
                <TouchableOpacity
                  style={styles.list}
                  key={item.id || index}
                  onPress={() => navigation.navigate('Detail', { item, items, index })}
                >
                  <Text style={styles.listtext}>{item.id}+ {item.title}</Text>
                </TouchableOpacity>
              ))} */}

              {items.map((item, index) => (
                <TouchableOpacity
                  style={styles.list}
                  key={item.id || index}
                >
                  <Text style={styles.listtext}>{item.id}+ {item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

        </View>
      </View>
      <View style={styles.secondryPlaceHolder}>
        {/* StartNow Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (items.length > 0) {
              navigation.navigate('Detail', { item: items[0], items, index: 0 });
            } else {
              alert('No data available to navigate.');
            }
          }}
        >
          <Text style={styles.buttonText}>Start Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,          // Takes the full height of the screen
    width: '100%',    // Full width of the screen
    height: '100%',   // Full height of the screen
    backgroundColor: '#9380FF', // Background color for the container
  },
  mainPlaceHolder: {
    flex: 3.5,       
    backgroundColor: '#9380FF', // Background color for main container
    justifyContent: 'flex-start', // Starts from the top of the container
    alignItems: 'center',     // Centers content horizontally
  },
  headerPlaceHolder: {
    height: '20%',          // Takes 20% of mainPlaceHolder height
    width: '100%',          // Full width
    flexDirection: 'row',   // Align header content horizontally
    justifyContent: 'space-between', // Aligns header content to left and icon to right
    alignItems: 'center',   // Centers content vertically
    paddingTop: 40,         // Adds padding to top for better UI
    paddingLeft: 30,        // Adds padding to the left for better UI
    paddingRight: 30,       // Adds padding to the right for better UI
    backgroundColor: '#9380FF',  // Customize color as needed
  },
  headerTextGroup: {
    flexDirection: 'column',   // Stacks the headers vertically
    alignItems: 'flex-start',    // Aligns text to the left
  },
  contentPlaceHolder: {
    flex: 1,                // Takes remaining space inside mainPlaceHolder
    width: '100%',          // Full width
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9380FF',  // Customize color as needed
  },
  scrollContainer: {
    flex: 1,
    marginTop: 0,
    marginBottom: 20,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
  },
  list: {
    padding: 12,
    // marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#efefef',
    marginTop: 15,
    borderRadius: 10,
    borderColor: '#7f7f7f',
    borderWidth: 0.5,
  },
  listtext: {
    fontSize: 16,
  },
  secondryPlaceHolder: {
    flex: 0.5,       
    backgroundColor: '#9380FF', // Customize this color
    justifyContent: 'center',  // Centers content vertically
    alignItems: 'center',      // Centers content horizontally
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',        // Aligns text to the left
  },
  secondaryHeaderText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'left',        // Aligns text to the left
    marginTop: 3,             // Space between the two headers
  },
  contentText: {
    fontSize: 18,
    color: '#fff',
  },
  button: {
    paddingVertical: 10,      // Reduced vertical padding for a more compact button
    paddingHorizontal: 40,    // Reduced horizontal padding
    height: 50,               // Reduced height for a more compact button
    width: 250,               // Adjusted width for a more balanced appearance
    backgroundColor: 'black',
    borderRadius: 10,         // Rounded corners
    marginBottom: 15,         // Space between button and content
    justifyContent: 'center', // Vertically centers text
    alignItems: 'center',     // Horizontally centers text
    shadowColor: '#000',      // Adds shadow effect
    shadowOffset: { width: 0, height: 2 },  // Slightly offset shadow
    shadowOpacity: 0.1,       // Light shadow opacity
    shadowRadius: 4,          // Soft shadow blur radius
    elevation: 3,             // Adds elevation for Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,             // Adjusted font size for better balance
    fontWeight: 'bold',       // Bold text for better visibility
    textAlign: 'center',
  },
});

export default CouchPotatoScreen;


