import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useDispatch, } from 'react-redux';
import { loggedInSuccess } from '../context/auth';

export default function OtpVerification() {

  const dispatch = useDispatch()
  const [otp, setOtp] = useState(''); // ✅ default OTP

  function handleVerifyOtp() {
    if (otp !== '2277') {
      Alert.alert('Invalid OTP', 'Please enter correct OTP');
      return;
    }

    // ✅ dummy user object
    const dummyUser = {
      id: 1,
      name: 'Demo User',
      phone: '9999999999',
    };

    console.log('Logged in user:', dummyUser);

   dispatch(loggedInSuccess(dummyUser));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>

      <TextInput
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        maxLength={4}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  input: {
    width: 120,
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1DB954',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
