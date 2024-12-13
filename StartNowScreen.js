import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, BackHandler, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 

function StartNowScreen({ navigation }) {
  const [notificationClicked, setNotificationClicked] = useState(false); 
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Check if notification has been clicked previously
    const loadNotificationState = async () => {
      const storedState = await AsyncStorage.getItem('notificationClicked');
      if (storedState === 'true') {
        setNotificationClicked(true); 
      }
    };
    
    loadNotificationState();

    // Start the pulsing animation when badgeText contains '!'
    if (!notificationClicked) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: 1.2,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      scaleAnim.stopAnimation();
    }

    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Prevent the default behavior (going back to DetailScreen) and navigate to HomeScreen
      navigation.navigate('Home');
      return true; // Returning true means we've handled the back press
    });

    // Cleanup the backHandler when the component unmounts
    return () => backHandler.remove();
  }, [notificationClicked, scaleAnim]);

  const badgeText = notificationClicked ? '' : '!';

  const handleNotificationClick = async () => {
    setNotificationClicked(true);
    await AsyncStorage.setItem('notificationClicked', 'true');
    alert('You are the only one who can shape yourself! Just Believe You Can');
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainPlaceHolder2}>
        <TouchableOpacity
          style={styles.notificationIconContainer}
          onPress={handleNotificationClick}
        >
          <Icon name="notifications-outline" size={28} color="#fff" />
          {badgeText && (
            <Animated.View
              style={[styles.badge, { transform: [{ scale: scaleAnim }] }]}
            >
              <Text style={styles.badgeText}>{badgeText}</Text>
            </Animated.View>
          )}
        </TouchableOpacity>

        <View style={styles.mainPlaceHolder}>
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
              <Text style={styles.cardHeader3}>10 Minutes</Text>
            </View>
          </TouchableOpacity>

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
              <Text style={styles.cardHeader3}>10 Minutes</Text>
            </View>
            <View style={styles.stickyBar}>
              <Text style={styles.stickyBarText}>New</Text>
            </View>
          </TouchableOpacity>

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
              <Text style={styles.cardHeader3}>10 Minutes</Text>
            </View>
            <View style={styles.stickyBar}>
              <Text style={styles.stickyBarText}>New</Text>
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
    flex: 1,
    backgroundColor: '#fff',
  },
  mainPlaceHolder2: {
    width: '100%',
    flex: 3.4,
    backgroundColor: '#E5CACA',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: 'relative',
  },
  mainPlaceHolder: {
    width: '100%',
    height: '98.5%',
    backgroundColor: '#9380FF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  secondryPlaceHolder: {
    flex: 0.6,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
    marginTop: 5,
  },
  smallText: {
    fontSize: 12,
    color: '#888',
    marginTop: 30,
  },
  notificationIconContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#9380FF',
    borderRadius: 20,
    padding: 5,
    zIndex: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    height: 160,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#f0f0f0',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginTop: 15,
    marginBottom: 10,
    padding: 10,
  },
  cardImage: {
    width: 130,
    height: 130,
    borderRadius: 25,
    marginRight: 10,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardHeader1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  cardHeader2: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  cardHeader3: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  stickyBar: {
    position: 'absolute',
    top: 10,
    right: 10,
    height: 25,
    width: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stickyBarText: {
    color: '#fff',
    fontSize: 12,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default StartNowScreen;




// import React, { useEffect, useRef, useState } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'; // Import icon library
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

// function StartNowScreen({ navigation }) {
//   const [notificationClicked, setNotificationClicked] = useState(false); // State to track if notification was clicked
//   const scaleAnim = useRef(new Animated.Value(1)).current;

//   useEffect(() => {
//     // Check if notification has been clicked previously
//     const loadNotificationState = async () => {
//       const storedState = await AsyncStorage.getItem('notificationClicked');
//       if (storedState === 'true') {
//         setNotificationClicked(true); // If it was clicked before, update state
//       }
//     };
    
//     loadNotificationState();

//     // Start the pulsing animation when badgeText contains '!'
//     if (!notificationClicked && badgeText === '!') {
//       Animated.loop(
//         Animated.sequence([
//           Animated.timing(scaleAnim, {
//             toValue: 1.2,
//             duration: 500,
//             useNativeDriver: true,
//           }),
//           Animated.timing(scaleAnim, {
//             toValue: 1,
//             duration: 500,
//             useNativeDriver: true,
//           }),
//         ])
//       ).start();
//     } else {
//       // Stop the animation when the notification is clicked
//       scaleAnim.stopAnimation();
//     }
//   }, [scaleAnim, notificationClicked]);

//   const badgeText = notificationClicked ? '' : '!'; // Hide badge when notification is clicked

//   const handleNotificationClick = async () => {
//     setNotificationClicked(true); // Mark the notification as clicked
//     await AsyncStorage.setItem('notificationClicked', 'true'); // Store state in AsyncStorage
//     alert('You are the only one who can shape yourself! Just Believe You Can'); // Add your notification functionality here
//   };

//   return (
//     <View style={styles.container}>
//       {/* Main Section */}
//       <View style={styles.mainPlaceHolder2}>
//         {/* Notification Icon */}
//         <TouchableOpacity
//           style={styles.notificationIconContainer}
//           onPress={handleNotificationClick}
//         >
//           <Icon name="notifications-outline" size={28} color="#fff" />
//           {/* Badge with Pulsing Animation */}
//           {badgeText && (  // Conditionally render the badge when badgeText is '!'
//             <Animated.View
//               style={[styles.badge, { transform: [{ scale: scaleAnim }] }]}
//             >
//               <Text style={styles.badgeText}>{badgeText}</Text>
//             </Animated.View>
//           )}
//         </TouchableOpacity>

//         {/* Cards Section */}
//         <View style={styles.mainPlaceHolder}>
//           {/* Card 1: Full Body Workout */}
//           <TouchableOpacity
//             style={[styles.card, { backgroundColor: '#656565' }]}
//             onPress={() => navigation.navigate('Full Body Workout')}
//           >
//             <Image
//               source={require('./assets/couch_potato.png')}
//               style={styles.cardImage}
//             />
//             <View style={styles.cardTextContainer}>
//               <Text style={styles.cardHeader1}>Full Body Workout</Text>
//               <Text style={styles.cardHeader2}>No Equipment Cardio</Text>
//               <Text style={styles.cardHeader3}>10 Minutes</Text>
//             </View>
//           </TouchableOpacity>

//           {/* Card 2: Couch Potato */}
//           <TouchableOpacity
//             style={[styles.card, { backgroundColor: '#656565' }]}
//             onPress={() => navigation.navigate('Couch Potato')}
//           >
//             <Image
//               source={require('./assets/couch_potato.png')}
//               style={styles.cardImage}
//             />
//             <View style={styles.cardTextContainer}>
//               <Text style={styles.cardHeader1}>Couch Potato</Text>
//               <Text style={styles.cardHeader2}>For People who sit a lot</Text>
//               <Text style={styles.cardHeader3}>10 Minutes</Text>
//             </View>
//             <View style={styles.stickyBar}>
//               <Text style={styles.stickyBarText}>New</Text>
//             </View>
//           </TouchableOpacity>

//           {/* Card 3: Yoga Everyday */}
//           <TouchableOpacity
//             style={[styles.card, { backgroundColor: '#656565' }]}
//             onPress={() => navigation.navigate('Yoga')}
//           >
//             <Image
//               source={require('./assets/couch_potato.png')}
//               style={styles.cardImage}
//             />
//             <View style={styles.cardTextContainer}>
//               <Text style={styles.cardHeader1}>Yoga Everyday</Text>
//               <Text style={styles.cardHeader2}>For Mind & Body</Text>
//               <Text style={styles.cardHeader3}>10 Minutes</Text>
//             </View>
//             <View style={styles.stickyBar}>
//               <Text style={styles.stickyBarText}>New</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Footer Section */}
//       <View style={styles.secondryPlaceHolder}>
//         <Text style={styles.header1}>POTATA</Text>
//         <Text style={styles.header2}>Simply Workout at Home</Text>
//         <Text style={styles.smallText}>v1.1.2 Stable</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   // Same styles as your original code
//   container: {
//     flex: 1, // Takes the full screen
//     backgroundColor: '#fff',
//   },
//   mainPlaceHolder2: {
//     width: '100%',
//     flex: 3.4, // Takes 75% of the screen
//     backgroundColor: '#E5CACA',
//     borderBottomLeftRadius: 40,
//     borderBottomRightRadius: 40,
//     position: 'relative', // Required for absolute positioning
//   },
//   mainPlaceHolder: {
//     width: '100%',
//     height: '98.5%',
//     backgroundColor: '#9380FF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 40,
//     borderBottomLeftRadius: 40,
//     borderBottomRightRadius: 40,
//   },
//   secondryPlaceHolder: {
//     flex: 0.6,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   header1: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   header2: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#555',
//     marginTop: 5,
//   },
//   smallText: {
//     fontSize: 12,
//     color: '#888',
//     marginTop: 30,
//   },
//   notificationIconContainer: {
//     position: 'absolute',
//     top: 50, // Adds margin from the device notification bar
//     right: 20,
//     backgroundColor: '#9380FF', // Matches the background
//     borderRadius: 20,
//     padding: 5,
//     zIndex: 10, // Ensures it appears above other elements
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '85%',
//     height: 160,
//     borderRadius: 20,
//     borderWidth: 2,
//     borderColor: '#f0f0f0',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     marginTop: 15,
//     marginBottom: 10,
//     padding: 10,
//   },
//   cardImage: {
//     width: 130,
//     height: 130,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   cardTextContainer: {
//     flex: 1,
//   },
//   cardHeader1: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   cardHeader2: {
//     fontSize: 14,
//     color: '#fff',
//     marginTop: 5,
//   },
//   cardHeader3: {
//     fontSize: 14,
//     color: '#fff',
//     marginTop: 5,
//   },
//   stickyBar: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     height: 25,
//     width: 45,
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   stickyBarText: {
//     color: '#fff',
//     fontSize: 12,
//   },
//   badge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     backgroundColor: 'red',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: '#fff',
//     fontSize: 12,
//   },
// });

// export default StartNowScreen;
