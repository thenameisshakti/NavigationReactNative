import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login({ navigation }: any) {
  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('OtpVerification')}
      >
        <Text style={styles.buttonText}>Go to OTP</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1DB954',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
