import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width } = Dimensions.get('window');

function DetailScreen({ route, navigation }) {
  const { items, index: initialIndex } = route.params;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [percentage, setPercentage] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#656565'); // Default background color

  useEffect(() => {
    const totalItems = items.length;
  
    // Calculate the percentage
    const currentPercentage = ((currentIndex + 1) / totalItems) * 100;
  
    // Ensure percentage is an integer
    const roundedPercentage = Math.round(currentPercentage);
  
    setPercentage(roundedPercentage); // Ensure this is an integer
  
    // Change background color to blue if on the last item
    if (currentIndex === totalItems - 1) {
      setBackgroundColor('#656565');
    } else {
      setBackgroundColor('#9380FF');
    }
  }, [currentIndex, items.length]);

  const goToNextItem = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < items.length) {
      setCurrentIndex(nextIndex);
    }
  };

  const goToPreviousItem = () => {
    const previousIndex = currentIndex - 1;
    if (previousIndex >= 0) {
      setCurrentIndex(previousIndex);
    }
  };

  const goToHome = () => {
    navigation.replace('Home');
  };

  const formatTitle = (title, name, maxLength = 25) => {
    const combinedText = [title, name].filter(Boolean).join(' ');
    return combinedText.length > maxLength ? combinedText.substring(0, maxLength - 3) + '...' : combinedText;
  };

  const isFirstItem = currentIndex === 0;
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
              <Text style={styles.secondaryHeaderText}>Full Body Workout</Text>
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
                <Text style={styles.secondaryBodyText}>x {currentItem.time}</Text>
              </View>

              {isLastItem ? (
                <TouchableOpacity style={[styles.button, { marginLeft: 15 }]} onPress={goToHome}>
                  <Ionicons name="checkmark-done-circle-sharp" size={70} color="white" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.homeIcon} onPress={goToNextItem}>
                  <MaterialCommunityIcons name="skip-next-circle" size={70} color="white" />
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
    fontSize: 18,
    fontWeight: '300',
    color: '#fff',
  },
  secondryPlaceHolder: {
    flex: 0.5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  percentageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d2d2d',
    marginTop: 10,
  },
  progressBarContainer: {
    height: 10,
    width: '80%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginTop: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'red',
    borderRadius: 5,
  },
});

export default DetailScreen;
