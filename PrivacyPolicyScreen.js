import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Privacy Policy</Text>
        <Text style={styles.paragraph}>
          Thank you for using our Home Workout App. Currently, we do not collect any personal information or data from our users. Your privacy is important to us, and we are committed to maintaining it.
        </Text>
        <Text style={styles.paragraph}>
          In future versions of the app, we may introduce features that require data collection to enhance your experience. If this happens, we will update this Privacy Policy accordingly and notify you of any changes.
        </Text>
        <Text style={styles.paragraph}>
          Rest assured, any data collected in the future will comply with applicable privacy laws and regulations. Your trust is our priority, and we will ensure transparency in how we handle your information.
        </Text>
        <Text style={styles.footer}>Last updated: December 1, 2024</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
  },
  content: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
    lineHeight: 24,
  },
  footer: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default PrivacyPolicyScreen;
