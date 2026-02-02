import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../context/auth';

export default function Profile() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View >
      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
  },
  logoutText: {
    fontSize: 14,
  },
});
