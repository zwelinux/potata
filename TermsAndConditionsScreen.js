import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const TermsAndConditionsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Terms and Conditions</Text>

        <Text style={styles.subHeader}>1. Acceptance of Terms</Text>
        <Text style={styles.paragraph}>
          By downloading or using this Home Workout App, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use the app.
        </Text>

        <Text style={styles.subHeader}>2. App Usage</Text>
        <Text style={styles.paragraph}>
          This app is designed to provide workout routines and wellness guidance. It is not a substitute for professional medical advice. Consult a healthcare provider before starting any new workout regimen.
        </Text>

        <Text style={styles.subHeader}>3. User Responsibilities</Text>
        <Text style={styles.paragraph}>
          You are responsible for ensuring your physical readiness for the workouts. Use the app as intended and avoid any misuse that could result in injury or damage.
        </Text>

        <Text style={styles.subHeader}>4. Intellectual Property</Text>
        <Text style={styles.paragraph}>
          All content, including but not limited to text, graphics, and images, is the property of the app owner and is protected by intellectual property laws. Unauthorized use of the content is strictly prohibited.
        </Text>

        <Text style={styles.subHeader}>5. Limitations of Liability</Text>
        <Text style={styles.paragraph}>
          The app owner is not responsible for any injuries, health issues, or other damages resulting from the use of the app. Use the app at your own risk.
        </Text>

        <Text style={styles.subHeader}>6. Changes to Terms</Text>
        <Text style={styles.paragraph}>
          We reserve the right to update or modify these Terms and Conditions at any time. Continued use of the app signifies your acceptance of the updated terms.
        </Text>

        <Text style={styles.subHeader}>7. Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions or concerns about these Terms and Conditions, please contact us through the app or at our official email.
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
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#444',
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

export default TermsAndConditionsScreen;
