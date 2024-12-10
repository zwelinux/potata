import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Modal } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import LottieView from 'lottie-react-native'; // Import Lottie

const { width } = Dimensions.get('window');

function DetailScreen({ route, navigation }) {
  const { items, index: initialIndex } = route.params;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [percentage, setPercentage] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Disable button initially
  const [remainingTime, setRemainingTime] = useState(0); // Countdown timer
  const [backgroundColor, setBackgroundColor] = useState('#656565'); // Default background color
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state

  useEffect(() => {
    const totalItems = items.length;
    const currentPercentage = ((currentIndex + 1) / totalItems) * 100;
    setPercentage(Math.round(currentPercentage));

    // Set background color based on the item
    setBackgroundColor(currentIndex === totalItems - 1 ? '#656565' : '#9380FF');

    // Timer logic
    const time = currentItem?.time || 0;
    if (time > 0) {
      setIsButtonDisabled(true);
      setRemainingTime(time);

      const interval = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            setIsButtonDisabled(false); // Enable button only when time is up
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      // Cleanup interval when component unmounts or currentIndex changes
      return () => clearInterval(interval);
    } else {
      setIsButtonDisabled(false);
    }
  }, [currentIndex, items.length]);

  const goToNextItem = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < items.length) {
      setCurrentIndex(nextIndex);
    }
  };

  const goToHome = () => {
    setIsModalVisible(true); // Show the modal when the button is clicked
  };

  const formatTitle = (title, name, maxLength = 25) => {
    const combinedText = [title, name].filter(Boolean).join(' ');
    return combinedText.length > maxLength ? combinedText.substring(0, maxLength - 3) + '...' : combinedText;
  };

  const isLastItem = currentIndex === items.length - 1;
  const currentItem = items[currentIndex];

  return (
    <View style={styles.container}>
      <View style={[styles.mainPlaceHolder2, { backgroundColor }]}>
        <View style={[styles.mainPlaceHolder, { backgroundColor }]}>
          {/* Header View */}
          <View style={styles.header}>
            <View style={styles.headerTextGroup}>
              <Text style={styles.headerText}>POTATA</Text>
              <Text style={styles.secondaryHeaderText}>Simple Workout At Home</Text>
            </View>
          </View>

          {/* Body View */}
          <View style={styles.body}>
            {/* Image Placeholder */}
            <View style={styles.imagePlaceHolder}>
              <Image 
                source={require('./assets/detail.png')} 
                style={styles.image} 
              />
            </View>

            {/* Info Placeholder */}
            <View style={styles.infoPlaceHolder}>
              <View style={styles.infoPlaceHolderTextGroup}>
                <Text style={styles.bodyText}>{formatTitle(currentItem?.title, currentItem?.name)}</Text>
                <Text style={[
                  styles.secondaryBodyText,
                  { backgroundColor: remainingTime > 0 ? 'rgba(0, 0, 0, 0.4)' : '#4CAF50' }, // Change to your desired color
                ]} >
                  {currentItem.time ? (
                    remainingTime > 0 ? (
                      `${remainingTime} / ${currentItem.time}s`
                    ) : (
                      `Done ${currentItem.time}s `
                    )
                  ) : (
                    ''
                  )}
                  {currentItem.count ? ` | ${currentItem.count}` : ''}
                </Text>
              </View>

              {isLastItem ? (
                <TouchableOpacity 
                  style={[styles.button, { marginLeft: 15 }]} 
                  onPress={goToHome}
                  disabled={isButtonDisabled}  // Disable button if time hasn't elapsed
                >
                  <Ionicons name="checkmark-done-circle-sharp" size={70} color={isButtonDisabled ? 'gray' : 'white'}  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity 
                  style={styles.homeIcon} 
                  onPress={goToNextItem} 
                  disabled={isButtonDisabled} // Disable button if time hasn't elapsed
                >
                  <MaterialCommunityIcons 
                    name="skip-next-circle" 
                    size={70} 
                    color={isButtonDisabled ? 'gray' : 'white'} 
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>

      <View style={styles.secondryPlaceHolder}>
        <Text style={styles.percentageText}>{Math.round(percentage)}%</Text>
        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <View 
            style={[styles.progressBar, { width: `${percentage}%` }]} 
          />
        </View>
      </View>

      {/* Modal for Congratulations */}
      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Lottie Celebration Animation */}
            <LottieView
              source={require('./assets/celebration.json')} // Use a celebration animation file (download or create one)
              autoPlay
              loop
              style={styles.lottieAnimation}
            />
            <Text style={styles.modalText}>Congratulations! You've made it!</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setIsModalVisible(false);
                navigation.navigate('Home'); // Navigate to HomeScreen after closing modal
              }}
            >
              <Text style={styles.modalButtonText}>Cheers!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  mainPlaceHolder: {
    width: '100%',
    height: '98.5%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  header: {
    height: '20%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
  },
  headerTextGroup: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
  },
  secondaryHeaderText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'left',
    marginTop: 3,
  },
  body: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceHolder: {
    height: '80%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.75,
    resizeMode: 'contain',
  },
  infoPlaceHolder: {
    height: '20%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  infoPlaceHolderTextGroup: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  bodyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  secondaryBodyText: {
    fontSize: 16, // Slightly smaller font for a clean look
    fontWeight: '400', // Regular weight for balanced readability
    color: '#EDEDED', // Soft contrast against the dark background
    marginTop: 5, // Add spacing from the title
    lineHeight: 22, // Improve readability with better line spacing
    textAlign: 'left', // Consistent alignment with other text
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background for emphasis
    padding: 8, // Padding for a better touch area and spacing
    borderRadius: 10, // Rounded corners for modern design
  },
  homeIcon: {
    backgroundColor: '#4CAF50',
    borderRadius: 50,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 50,
  },
  secondryPlaceHolder: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  progressBarContainer: {
    width: '80%',
    height: 6,
    backgroundColor: '#D1D1D1',
    borderRadius: 50,
    marginTop: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  lottieAnimation: {
    width: 200,
    height: 200,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default DetailScreen;
